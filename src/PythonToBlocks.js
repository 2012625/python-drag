import Sk from 'skulpt'
function blockBuilder (
  type,
  lineNumber,
  fields,
  values,
  settings,
  mutations,
  statements
) {
  const blockbuild = document.createElement('block')
  // Settings
  blockbuild.setAttribute('type', type)
  blockbuild.setAttribute('line_number', lineNumber)
  for (const setting in settings) {
    const settingValue = settings[setting]
    blockbuild.setAttribute(setting, settingValue)
  }
  // Mutations
  if (mutations !== undefined && Object.keys(mutations).length > 0) {
    const newMutation = document.createElement('mutation')
    for (const mutation in mutations) {
      const mutationValue = mutations[mutation]
      if (mutation.charAt(0) === '@') {
        newMutation.setAttribute(mutation.substring(1), mutationValue)
      } else if (
        mutationValue !== null &&
        mutationValue.constructor === Array
      ) {
        for (const element of mutationValue) {
          const mutationNode = document.createElement(mutation)
          mutationNode.setAttribute('name', element)
          newMutation.appendChild(mutationNode)
        }
      } else {
        const mutationNode = document.createElement('arg')
        if (mutation.charAt(0) === '*') {
          mutationNode.setAttribute('name', '')
        } else {
          mutationNode.setAttribute('name', mutation)
        }
        if (mutationValue !== null) {
          mutationNode.appendChild(mutationValue)
        }
        newMutation.appendChild(mutationNode)
      }
    }
    blockbuild.appendChild(newMutation)
  }
  // Fields
  for (const field in fields) {
    const fieldValue = fields[field]
    const newField = document.createElement('field')
    newField.setAttribute('name', field)
    newField.appendChild(document.createTextNode(fieldValue))
    blockbuild.appendChild(newField)
  }
  // Values
  for (const value in values) {
    const valueValue = values[value]
    const newValue = document.createElement('value')
    if (valueValue !== null) {
      newValue.setAttribute('name', value)
      newValue.appendChild(valueValue)
      blockbuild.appendChild(newValue)
    }
  }
  // Statements
  if (statements !== undefined && Object.keys(statements).length > 0) {
    for (const statement in statements) {
      const statementValue = statements[statement]
      if (statementValue === null) {
        continue
      } else {
        for (const element of statementValue) {
          // In most cases, you really shouldn't ever have more than
          //  one statement in this list. I'm not sure Blockly likes
          //  that.
          const newStatement = document.createElement('statement')
          newStatement.setAttribute('name', statement)
          newStatement.appendChild(element)
          blockbuild.appendChild(newStatement)
        }
      }
    }
  }
  return blockbuild
}

function xmlToString (xml) {
  return new XMLSerializer().serializeToString(xml)
}

class PythonToBlocks {
  getChunkHeights (node) {
    let lineNumbers = []
    if (node.hasOwnProperty('lineno')) {
      lineNumbers.push(node.lineno)
    }
    if (node.hasOwnProperty('body')) {
      for (const element of node.body) {
        const subnode = element
        lineNumbers = lineNumbers.concat(this.getChunkHeights(subnode))
      }
    }
    if (node.hasOwnProperty('orelse')) {
      for (const element of node.orelse) {
        const subnode = element
        lineNumbers = lineNumbers.concat(this.getChunkHeights(subnode))
      }
    }
    return lineNumbers
  }

  convertStatement (node, _fullSource, isTopLevel) {
    try {
      return this.convert(node, isTopLevel)
    } catch (e) {
      const heights = this.getChunkHeights(node)
      const extractedSource = this.getSourceCode(
        arrayMin(heights),
        arrayMax(heights)
      )
      console.error(e)
      return rawBlock(extractedSource)
    }
  }

  getSourceCode (from, to) {
    const lines = this.source.slice(from - 1, to)
    // Strip out any starting indentation.
    if (lines.length > 0) {
      const indentation = lines[0].search(/\S/)
      for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].substring(indentation)
      }
    }
    return lines.join('\n')
  }

  isTopLevel (parent) {
    return !parent
  }

  Assign (node) {
    const { targets, value, lineno } = node
    let items = {}
    const fields = {}
    const simpleTarget = targets.length === 1 && targets[0]._astname === 'Name'
    if (simpleTarget) {
      fields.VAR = identifier(targets[0].id)
    } else {
      items = this.convertElements('TARGET', targets, node)
    }
    node.targets.forEach((target) => {
      if (target.id === undefined) {
        target.id = {}
      }
      target.id.refType = TypeInference(value)
    })
    items.VALUE = this.convert(value)
    return variablesSetMultiple(fields, items, targets, simpleTarget, lineno)
  }

  convertBody (node, isTopLevel) {
    this.levelIndex += 1
    // Empty body, return nothing
    if (node === null) {
      return null
    }
    // Final result list
    const children = [] // The complete set of peers
    let root = null // The top of the current peer
    let current = null // The bottom of the current peer
    function addPeer (peer) {
      children.push(root === null ? peer : root)
      root = peer
      current = peer
    }
    function finalizePeers () {
      if (root !== null) {
        children.push(root)
      }
    }
    function nestChild (child) {
      if (root !== null && current !== null) {
        const nextElement = document.createElement('next')
        nextElement.appendChild(child)
        current.appendChild(nextElement)
        current = child
      } else {
        root = root !== null && current === null ? current : child
        current = root !== null ? current : child
      }
    }
    let lineNumberInProgram
    let previousLineInProgram = null
    let distance
    let skippedLine
    let previousWasStatement = false
    let visitedFirstLine = false
    let commentChild
    // Iterate through each node
    for (const element of node) {
      lineNumberInProgram = element.lineno
      // distance = 0
      // if (previousLineInProgram !== null) {
      //   distance = lineNumberInProgram - previousLineInProgram - 1
      // }
      // Handle earlier comments
      for (const commentLineInProgram in this.comments) {
        if (commentLineInProgram < lineNumberInProgram) {
          commentChild = this.Comment(
            this.comments[commentLineInProgram],
            commentLineInProgram
          )
          if (previousLineInProgram === null) {
            nestChild(commentChild)
          } else {
            const skippedPreviousLine =
              Math.abs(previousLineInProgram - commentLineInProgram) > 1
            isTopLevel && skippedPreviousLine
              ? addPeer(commentChild)
              : nestChild(commentChild)
          }
          previousLineInProgram = commentLineInProgram
          this.highestLineSeen = Math.max(
            this.highestLineSeen,
            parseInt(commentLineInProgram, 10)
          )
          // distance = lineNumberInProgram - previousLineInProgram
          delete this.comments[commentLineInProgram]
        }
      }
      distance = lineNumberInProgram - this.highestLineSeen
      this.highestLineSeen = Math.max(lineNumberInProgram, this.highestLineSeen)

      // Now convert the actual node
      const height = this.heights.shift()
      const originalSourceCode = this.getSourceCode(lineNumberInProgram, height)
      const newChild = this.convertStatement(
        element,
        originalSourceCode,
        isTopLevel
      )
      // Skip null blocks (e.g., imports)
      if (newChild === null) {
        continue
      }
      skippedLine = distance > 1
      previousLineInProgram = lineNumberInProgram
      // Handle top-level expression blocks
      if (isTopLevel && newChild.constructor === Array) {
        addPeer(newChild[0])
        // Handle skipped line     The previous line was not a Peer
      } else if (
        (isTopLevel && skippedLine && visitedFirstLine) ||
        (isTopLevel && !previousWasStatement)
      ) {
        addPeer(newChild)
        // Otherwise, always embed it in there.
      } else {
        nestChild(newChild)
      }
      previousWasStatement = newChild.constructor !== Array
      visitedFirstLine = true
    }
    // Handle comments that are on the very last line
    const lastLineNumber = lineNumberInProgram + 1
    if (lastLineNumber in this.comments) {
      commentChild = this.Comment(this.comments[lastLineNumber], lastLineNumber)
      nestChild(commentChild)
      delete this.comments[lastLineNumber]
    }
    // Handle any extra comments that stuck around
    if (isTopLevel) {
      for (const commentLineInProgram in this.comments) {
        commentChild = this.Comment(
          this.comments[commentLineInProgram],
          commentLineInProgram
        )
        distance = commentLineInProgram - previousLineInProgram
        if (previousLineInProgram === null) {
          addPeer(commentChild)
        } else if (distance > 1) {
          addPeer(commentChild)
        } else {
          nestChild(commentChild)
        }
        previousLineInProgram = commentLineInProgram
        delete this.comments[lastLineNumber]
      }
    }
    finalizePeers()
    this.levelIndex -= 1
    return children
  }

  BinOp ({ left, op: Operator, right, lineno }) {
    const opeartorName = new Operator()._astname
    const leftTypeName = TypeInference(left)
    const rightTypeName = TypeInference(right)
    const leftBlock = this.convert(left)
    const rightBlock = this.convert(right)
    const linearStructures = { Str: 'text', List: 'lists', Tuple: 'tuples' }
    if (leftTypeName in linearStructures || rightTypeName in linearStructures) {
      if (opeartorName === 'Add') {
        return [`${linearStructures[leftTypeName]}Concat`](
          leftBlock,
          rightBlock,
          lineno
        )
      } else if (opeartorName === 'Mult') {
        if (rightTypeName === 'Num') {
          return [`${linearStructures[leftTypeName]}Repeat`](
            leftBlock,
            rightBlock,
            lineno
          )
        } else {
          return [`${linearStructures[rightTypeName]}Repeat`](
            rightBlock,
            leftBlock,
            lineno
          )
        }
      }
    }
    if (leftTypeName === 'Set' || rightTypeName === 'Set') {
      return setsArithmetic(leftBlock, opeartorName, rightBlock, lineno)
    }
    if (opeartorName === 'Mod') {
      return mathModulo(leftBlock, rightBlock, lineno)
    } else if (opeartorName === 'FloorDiv') {
      return mathIntegerDivision(leftBlock, rightBlock, lineno)
    } else {
      return mathArithmetic(leftBlock, opeartorName, rightBlock, lineno)
    }
  }

  Set (node) {
    const { elts, lineno } = node
    const items = this.convertElements('ADD', elts, node)
    return setsCreateWith(items, elts, lineno)
  }

  If ({ test, body, orelse, lineno }) {
    const conditionBlocks = {}
    const bodyBlocks = {}
    const structureCounter = { elifs: 0, elses: 0 }

    // IF
    conditionBlocks.IF0 = this.convert(test)
    bodyBlocks.DO0 = this.convertBody(body)
    while (orelse && orelse.length === 1) {
      if (orelse[0]._astname === 'If') {
        // ELIF
        this.heights.shift()
        body = orelse[0].body
        test = orelse[0].test
        orelse = orelse[0].orelse
        structureCounter.elifs += 1
        if (test) {
          conditionBlocks[`IF${structureCounter.elifs}`] = this.convert(test)
        }
        bodyBlocks[`DO${structureCounter.elifs}`] = this.convertBody(body)
      } else {
        // ELSE
        structureCounter.elses += 1
        bodyBlocks.ELSE = this.convertBody(orelse)
        break
      }
    }
    return controlsIf(conditionBlocks, bodyBlocks, structureCounter, lineno)
  }

  IfExp ({ test, body, orelse, lineno }) {
    const ifBlock = this.convert(test)
    if (!TypeInference(orelse) || !TypeInference(body)) {
      return this.If({ test, body: [body], orelse: [orelse], lineno })
    } else {
      const thenBlock = this.convert(body)
      const elseBlock = this.convert(orelse)
      return logicTernary(ifBlock, thenBlock, elseBlock, lineno)
    }
  }

  Compare ({ left, ops: Operators, comparators, lineno }) {
    let leftBlock = this.convert(left)
    const leftTypeName = TypeInference(left)
    for (let i = 0; i < comparators.length; i += 1) {
      const right = comparators[i]
      const opeartorName = new Operators[i]()._astname
      const rightBlock = this.convert(right)
      const rightTypeName = TypeInference(right)
      if (opeartorName === 'Is' || opeartorName === 'IsNot') {
        leftBlock = logicObjectCompare(
          leftBlock,
          opeartorName,
          rightBlock,
          lineno
        )
      } else if (opeartorName === 'In' || opeartorName === 'NotIn') {
        leftBlock = logicObjectIn(leftBlock, opeartorName, rightBlock, lineno)
      } else {
        if (leftTypeName === 'Set' || rightTypeName === 'Set') {
          leftBlock = logicSetsCompare(
            leftBlock,
            opeartorName,
            rightBlock,
            lineno
          )
        } else {
          leftBlock = logicCompare(leftBlock, opeartorName, rightBlock, lineno)
        }
      }
    }
    return leftBlock
  }

  For ({ target, iter, body, orelse, lineno }) {
    const variableName = identifier(target.id)
    const bodyBlock = this.convertBody(body)
    if (
      iter._astname === 'Call' &&
      identifier(iter.func.id) === 'range' &&
      orelse.length === 0
    ) {
      const forArgs = iter.args.map((numberNode) => this.convert(numberNode))
      if (forArgs.length === 1) {
        return controlsRepeat(forArgs[0], bodyBlock, lineno)
      } else {
        if (forArgs.length === 2) {
          forArgs.push(this.Num({ n: { v: 1 }, lineno }))
        }
        return controlsFor(variableName, forArgs, bodyBlock, lineno)
      }
    } else {
      const listBlock = this.convert(iter)
      if (orelse.length > 0) {
        const elseBlock = this.convertBody(orelse)
        return controlsForElse(
          variableName,
          listBlock,
          bodyBlock,
          elseBlock,
          lineno
        )
      } else {
        return controlsForEach(variableName, listBlock, bodyBlock, lineno)
      }
    }
  }

  Dict (node) {
    const { keys, values, lineno } = node

    if (keys === null) {
      return dictsCreateWith({}, [], lineno)
    }

    const items = {}
    for (let i = 0; i < keys.length; i++) {
      const keyBlock = this.convert(keys[i], node)
      const valueBlock = this.convert(values[i], node)
      const lockedBlock = this.LOCKED_BLOCK
      items['ADD' + i] = dictsPair(keyBlock, valueBlock, lockedBlock, lineno)
    }
    return dictsCreateWith(items, keys, lineno)
  }

  UnaryOp ({ op: Operator, operand, lineno }) {
    const opeartorName = new Operator()._astname
    const operandBlock = this.convert(operand)
    if (opeartorName === 'Not') {
      return logicNegate(operandBlock, lineno)
    } else if (opeartorName === 'Invert') {
      return mathBitwiseNot(operandBlock, lineno)
    } else if (opeartorName === 'USub') {
      return mathSingle('NEG', operandBlock, lineno)
    } else if (opeartorName === 'UAdd') {
      return operandBlock
    } else {
      throw new Error('Other unary operators are not implemented yet.')
    }
  }

  Interactive ({ body }) {
    return this.convertBody(body, true)
  }

  Module ({ body }) {
    return this.convertBody(body, true)
  }

  Expression ({ body }) {
    return this.convertBody(body, true)
  }

  Suite ({ body }) {
    return this.convertBody(body, true)
  }

  Pass () {
    return null
  }

  Expr ({ value }, isTopLevel) {
    if (value._astname === 'Call') {
      value.act_as_statement = true
      return this.convert(value)
    }
    const resultBlock = this.convert(value)
    if (resultBlock.constructor === Array) {
      return resultBlock[0]
    } else if (isTopLevel) {
      return resultBlock.getAttribute('type') === 'controls_if'
        ? resultBlock
        : [resultBlock]
    } else {
      return rawBlock(resultBlock)
    }
  }

  Num ({ n, lineno }) {
    return mathNumber(n, lineno)
  }

  ClassDef (node) {
    const name = node.name
    const body = node.body
    const decoratorList = node.decorator_list
    if (decoratorList.length > 0) {
      throw new Error('Decorators are not implemented.')
    }
    return block(
      'class_build',
      node.lineno,
      {
        class_build_classname: identifier(name)
      },
      {},
      {
        inline: 'false'
      },
      {
      },
      {
        class_build_classcontent: this.convertBody(body, node)
      }
    )
  }

  CallAttribute (func, args, keywords, starargs, kwargs, node) {
    const name = identifier(func.attr)
    if (func.value._astname === 'Name') {
      const module = identifier(func.value.id)
      if (
        module in PythonToBlocks.KNOWN_MODULES &&
        name in PythonToBlocks.KNOWN_MODULES[module]
      ) {
        const definition = PythonToBlocks.KNOWN_MODULES[module][name]
        let blockName = definition[0]
        let isExpression = true
        if (blockName.charAt(0) === '*') {
          blockName = blockName.slice(1)
          isExpression = false
        }
        const fields = {}
        const mutations = {}
        const values = {}
        for (let i = 0; i < args.length; i++) {
          const argument = definition[1 + i]
          let destination = fields
          if (typeof argument === 'string') {
            fields[argument] = this.identifier(args[i].s)
          } else if (typeof argument === 'object') {
            if (argument.mode === 'value') {
              destination = values
            }
            if (argument.add_mutation !== undefined) {
              mutations[argument.add_mutation.name] =
                argument.add_mutation.value
            }
            if (argument.type === 'mutation') {
              if (argument.index === undefined) {
                mutations[argument.name] = this.identifier(args[i].s)
              } else {
                mutations[argument.name] = this.identifier(
                  args[argument.index + 1].s
                )
              }
            } else if (argument.type === 'integer') {
              destination[argument.name] = args[i].n.v
            } else if (argument.type === 'variable') {
              destination[argument.name] = this.convert(args[i])
            } else if (argument.type === 'integer_mapper') {
              // Okay we jumped the shark here
              const argumentName = argument.name
              const argumentMapper = argument.method
              destination[argumentName] = argumentMapper(args[i].n.v)
            } else if (argument.type === 'mapper') {
              const argumentName = argument.name
              const argumentMapper = argument.method
              destination[argumentName] = argumentMapper(
                this.identifier(args[i].s)
              )
            }
          } else {
            const argumentName = argument[0]
            const argumentMapper = argument[1]
            fields[argumentName] = argumentMapper(this.identifier(args[i].s))
          }
        }
        for (let i = 1 + args.length; i < definition.length; i++) {
          const first = definition[i][0]
          const second = definition[i][1]
          fields[first] = second
        }
        if (isExpression) {
          return block(blockName, func.lineno, fields, values, [], mutations)
        } else {
          return [block(blockName, func.lineno, fields, values, [], mutations)]
        }
      }
    }
    if (this.KNOWN_FUNCTIONS.indexOf(name) > -1) {
      switch (name) {
        case 'append':
          if (args.length !== 1) {
            throw new Error('Incorrect number of arguments to .append')
          }
          // Return as statement
          return [
            block(
              'lists_append',
              func.lineno,
              {},
              {
                ITEM: this.convert(args[0]),
                LIST: this.convert(func.value)
              },
              {
                inline: 'true'
              }
            )
          ]
        case 'strip':
          return block(
            'text_trim',
            func.lineno,
            {
              MODE: 'BOTH'
            },
            {
              TEXT: this.convert(func.value)
            }
          )
        case 'lstrip':
          return block(
            'text_trim',
            func.lineno,
            {
              MODE: 'LEFT'
            },
            {
              TEXT: this.convert(func.value)
            }
          )
        case 'rstrip':
          return block(
            'text_trim',
            func.lineno,
            {
              MODE: 'RIGHT'
            },
            {
              TEXT: this.convert(func.value)
            }
          )
        default:
          throw new Error('Unknown function call!')
      }
    } else if (name in PythonToBlocks.KNOWN_ATTR_FUNCTIONS) {
      return PythonToBlocks.KNOWN_ATTR_FUNCTIONS[name].bind(this)(
        func,
        args,
        keywords,
        starargs,
        kwargs,
        node
      )
    } else {
      const argumentsNormal = {}
      const argumentsMutation = {
        '@name': name
      }
      for (let i = 0; i < args.length; i += 1) {
        argumentsNormal['ARG' + i] = this.convert(args[i])
        argumentsMutation['*' + i] = this.convert(args[i])
      }
      const methodCall = block(
        'procedures_callreturn',
        node.lineno,
        {},
        argumentsNormal,
        {
          inline: 'true'
        },
        argumentsMutation
      )

      return block(
        'attribute_access',
        node.lineno,
        {},
        {
          MODULE: this.convert(func.value),
          NAME: methodCall
        },
        {
          inline: 'true'
        },
        {}
      )
    }
  }

  Import (node, lineno) {
    const names = node.name
    // The import statement isn't used in blockly because it happens implicitly
    return importFunc(names, lineno)
  }

  Notes (node, lineno) {
    const names = node.name
    return notesFunc(names, lineno)
  }

  BoolOp ({ values, op: Operator, lineno }) {
    const opeartorName = new Operator()._astname
    let resultBlock = this.convert(values[0])
    for (let i = 1; i < values.length; i += 1) {
      const valueBlock = this.convert(values[i])
      resultBlock = logicOperation(
        valueBlock,
        opeartorName,
        resultBlock,
        lineno
      )
    }
    return resultBlock
  }

  FunctionDef (node, lineno) {
    const name = node.name
    const body = node.body
    return blockBuilder(
      'procedures_defnoreturn',
      lineno,
      {
        NAME: name
      },
      {},
      {
        inline: 'false'
      },
      {},
      {
        STACK: this.convertBody(body, node)
      }
    )
  }

  Call ({ func, args, lineno }) {
    console.log(args)
    if (func._astname === 'Name') {
      const functionName = identifier(func.id)
      if (functionName === 'input') {
        const promptBlock = args ? this.convert(args[0]) : null
        return inputBlock(promptBlock, lineno)
      }
      if (args === null) {
        switch (functionName) {
          case 'locals':
            return buildlocals(lineno)
          case 'object':
            return buildobject(lineno)
          case 'try':
            return buildtry(lineno)
          case 'except':
            return buildexcept(lineno)
          case 'finally':
            return buildfinally(lineno)
          case 'datetimedatetimenow':
            return buildTimenow(lineno)
        }
      }
      if (args.length === 1) {
        let textBlock
        let lenObject
        let lenObjectType
        let iterBlock
        let iterfBlock
        let nextfBlock
        let floatBlock
        let frozensetBlock
        let hashBlock
        let helpBlock
        let hexBlock
        let idBlock
        switch (functionName) {
          case 'type':
            return TypeWithOne(this.convert(args[0]), lineno)
          case 'bytes':
            return binaryType(this.convert(args[0]), lineno)
          case 'abs':
            return ABS(this.convert(args[0]), lineno)
          case 'aiter':
            return AITER(this.convert(args[0]), lineno)
          case 'all':
            return ALL(this.convert(args[0]), lineno)
          case 'any':
            return ANY(this.convert(args[0]), lineno)
          case 'ascii':
            return ASCII(this.convert(args[0]), lineno)
          case 'bin':
            return BIN(this.convert(args[0]), lineno)
          case 'bool':
            return BOOL(this.convert(args[0]), lineno)
          case 'callable':
            return CALLABLE(this.convert(args[0]), lineno)

          case 'set':
            return createSetOne(this.convert(args[0]), lineno)
          case 'iter':
            iterBlock = this.convert(args[0])
            return iterChange(iterBlock, lineno)

          case '__iter__':
            iterfBlock = this.convert(args[0])
            return iterfChange(iterfBlock, lineno)
          case '__next__':
            nextfBlock = this.convert(args[0])
            return nextfChange(nextfBlock, lineno)
          case 'int':
          case 'str':
          case 'list':
          case 'tuple':
          case 'float':
            floatBlock = this.convert(args[0])
            return floatChange(floatBlock, lineno)
          case 'hash':
            hashBlock = this.convert(args[0])
            return hashChange(hashBlock, lineno)
          case 'help':
            helpBlock = this.convert(args[0])
            return helpChange(helpBlock, lineno)
          case 'hex':
            hexBlock = this.convert(args[0])
            return hexChange(hexBlock, lineno)
          case 'id':
            idBlock = this.convert(args[0])
            return idChange(idBlock, lineno)
          case 'frozenset':
            frozensetBlock = this.convert(args[0])
            return frozensetChange(frozensetBlock, lineno)

          case 'dict':
            return typeConvert(this.convert(args[0]), functionName, lineno)
          case 'chr':
            return textChr(this.convert(args[0]), lineno)
          case 'dir':
            return textDir(this.convert(args[0]), lineno)
          case 'ord':
            return textOrd(this.convert(args[0]), lineno)
          case 'osremove':
            return textRemove(this.convert(args[0]), lineno)
          case 'osrmdir':
            return textRmdir(this.convert(args[0]), lineno)
          case 'ospathexists':
            return textPath(this.convert(args[0]), lineno)
          case 'oct':
            textBlock = this.convert(args[0])
            return mathOct(textBlock, lineno)
          case 'global':
            return textGlobal(this.convert(args[0]), lineno)
          case 'print':
            textBlock = this.convert(args[0])
            return textPrint(textBlock, lineno)
          case 'len':
            lenObject = this.convert(args[0])
            lenObjectType = TypeInference(args[0])
            switch (lenObjectType) {
              case 'Str':
                return textLength(lenObject, lineno)
              case 'Set':
                return setsSize(lenObject, lineno)
              case 'Tuple':
                return tuplesSize(lenObject, lineno)
              case 'Dict':
                return dictsSize(lenObject, lineno)
              case 'List':
              default:
                return listsLength(lenObject, lineno)
            }
          case 'round':
            return mathRound(this.convert(args[0]), 'ROUND', lineno)
          case 'open':
            return FileOpen(this.convert(args[0]), 'r', 'b', lineno)
          case 'range':
            return rangeCreate(0, this.convert(args[0]), 1, lineno)
          case 'repr':
            return reprObj(this.convert(args[0]), lineno)
          case 'reverse':
            return reversed(this.convert(args[0]), lineno)
          case 'Set':
            return setFunc(this.convert(args[0]), lineno)
          case 'next':
            return buildnext(this.convert(args[0]), lineno)
          case 'memoryview':
            return buildmemoryview(this.convert(args[0]), lineno)
          case 'slice':
            return sliceFun(this.convert(args[0]), lineno)
        }
      } else if (args.length === 2) {
        switch (functionName) {
          case 'sum':
            return functionSum(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'pow':
            return mathArithmetic(
              this.convert(args[0]),
              'Pow',
              this.convert(args[1]),
              lineno
            )
          case 'isinstance':
            return buildisinstance(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'issubclass':
            return buildissubclass(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'map':
            return buildmap(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'max':
            return buildmax(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'min':
            return buildmin(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'raise':
            return buildraise(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'round':
            return roundFunc(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'class':
            return buildclass(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'delattr':
            return mathDelattr(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'divmod':
            return mathIntegerDivmod(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'enumerate':
            return mathEnumerate(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'filter':
            return mathFilter(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'eval':
            return mathEval(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'exec':
            return mathExec(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'research':
            return mathIntegerSearch(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'resplit':
            return mathIntegerSplit(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'anext':
            return ANEXT(this.convert(args[0]), this.convert(args[1]), lineno)
          case 'breakpoint':
            return BREAKPOINT(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'getattr':
            return getattrChange(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'hasattr':
            return hasattrChange(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
        }
      } else if (args.length === 3) {
        switch (functionName) {
          case 'bytearray':
            return BYTEARRAY(
              this.convert(args[0]),
              this.convert(args[1]),
              this.convert(args[2]),
              lineno
            )
          case 'bytes':
            return BYTES(
              this.convert(args[0]),
              this.convert(args[1]),
              this.convert(args[2]),
              lineno
            )
          case 'datetimedatetime':
            return BYTETIME(
              this.convert(args[0]),
              this.convert(args[1]),
              this.convert(args[2]),
              lineno
            )
          case 'resub':
            return BYTESUB(
              this.convert(args[0]),
              this.convert(args[1]),
              this.convert(args[2]),
              lineno
            )
          case 'pow':
            return innerPow(
              this.convert(args[0]),
              this.convert(args[1]),
              this.convert(args[2]),
              lineno
            )
          case 'xrange':
            return xrange(
              this.convert(args[0]),
              this.convert(args[1]),
              this.convert(args[2]),
              lineno
            )
          case 'type':
            return typeWithThree(
              this.convert(args[0]),
              this.convert(args[1]),
              this.convert(args[2]),
              lineno
            )
        }
      } else if (args.length === 4 && functionName === 'property') {
        return property(
          this.convert(args[0]),
          this.convert(args[1]),
          this.convert(args[2]),
          this.convert(args[3]),
          lineno
        )
      }
    }
  }

  Name (node) {
    const { id, lineno } = node
    const variableName = identifier(id)
    if (variableName === 'Ellipsis' && TypeInference(node) === false) {
      return this.Ellipsis({ lineno })
    }
    if (variableName === '__debug__' && TypeInference(node) === false) {
      return rawBlock({ lineno })
    }
    return variablesGet(variableName, lineno)
  }

  convert (node, parent) {
    const functionName = node._astname
    console.log('functionName :' + functionName)
    if (this[functionName] === undefined) {
      throw new Error('Could not find function: ' + functionName)
    }
    node.parent = parent
    return this[functionName](node, parent)
  }

  NameConstant ({ value, lineno }) {
    const booleanValue = value.v
    switch (booleanValue) {
      case 0:
      case 1:
        return logicBoolean(booleanValue, lineno)
      case null:
        return constantsNone(lineno)
    }
  }

  evaluate (node) {
    this.heights = []
    this.recursiveEvaluate(node, this.source.length - 1)
    this.heights.shift()
  }

  recursiveEvaluate (node, nextBlockLine) {
    if (node === undefined) {
      return
    }
    let nextLine = nextBlockLine
    if ('orelse' in node && node.orelse.length > 0) {
      if (node.orelse.length === 1 && node.orelse[0]._astname === 'If') {
        nextLine = node.orelse[0].lineno - 1
      } else {
        nextLine = node.orelse[0].lineno - 2
      }
    }
    if ('body' in node) {
      for (let i = 0; i < node.body.length; i++) {
        if (i === node.body.length - 1) {
          this.recursiveEvaluate(node.body[i], nextLine)
        } else {
          this.recursiveEvaluate(node.body[i], node.body[i + 1].lineno - 1)
        }
      }
    }
    if ('orelse' in node) {
      for (let i = 0; i < node.orelse.length; i++) {
        if (i === node.orelse.length) {
          this.recursiveEvaluate(node.orelse[i], nextBlockLine)
        } else {
          this.recursiveEvaluate(node.orelse[i], node.orelse[i].lineno)
        }
      }
    }
    this.heights.push(nextBlockLine)
  }

  Str ({ s, lineno }) {
    return text(s, lineno)
  }

  convertSourceToCodeBlock (pythonSource) {
    const xml = document.createElement('xml')
    xml.appendChild(rawBlock(pythonSource))
    return xmlToString(xml)
  }

  convertSource (pythonSource) {
    pythonSource = pythonSource.replace(/^.*[ ]*=[ ]*None\n$/gm, '')
    const xml = document.createElement('xml')
    let parse
    let ast = null
    let error
    let badChunks = []
    const originalSource = pythonSource
    this.source = pythonSource.split('\n')
    let previousLine = 1 + this.source.length
    while (ast === null) {
      if (pythonSource.trim() === '') {
        if (badChunks.length) {
          xml.appendChild(rawBlock(badChunks.join('\n')))
        }
        return {
          xml: xmlToString(xml),
          error: null,
          rawXml: xml
        }
      }
      try {
        const filename = 'user_code.py'
        parse = Sk.parse(filename, pythonSource)
        ast = Sk.astFromParse(parse.cst, filename, parse.flags)
      } catch ({ traceback }) {
        if (
          traceback &&
          traceback.length &&
          traceback[0].lineno &&
          traceback[0].lineno < previousLine
        ) {
          previousLine = traceback[0].lineno - 1
          badChunks = badChunks.concat(this.source.slice(previousLine))
          this.source = this.source.slice(0, previousLine)
          pythonSource = this.source.join('\n')
        } else {
          xml.appendChild(rawBlock(originalSource))
          return {
            Xml: xmlToString(xml),
            error,
            rawXml: xml
          }
        }
      }
    }

    this.comments = {}
    for (const commentLocation in parse.comments) {
      const lineColumn = commentLocation.split(',')
      const yLocation = parseInt(lineColumn[0], 10)
      this.comments[yLocation] = parse.comments[commentLocation]
    }

    this.highestLineSeen = 0
    this.levelIndex = 0
    this.nextExpectedLine = 0
    this.evaluate(ast)
    const converted = this.convert(ast)
    if (converted !== null) {
      for (const element of converted) {
        xml.appendChild(element)
      }
    }
    if (badChunks.length) {
      console.log(badChunks.join('\n'))
      xml.appendChild(rawBlock(badChunks.join('\n')))
    }
    return {
      xml: xmlToString(xml),
      error: null,
      lineMap: this.lineMap,
      comment: this.comments,
      rawXml: xml
    }
  }

  convertElements (key, values, parent) {
    const output = {}
    for (let i = 0; i < values.length; i++) {
      output[key + i] = this.convert(values[i], parent)
    }
    return output
  }

  tuplesCreateWith (items, elts, lineno) {
    return blockBuilder(
      'tuples_create_with',
      lineno,
      {},
      items,
      {
        inline: elts.length > 3 ? 'false' : 'true'
      },
      {
        '@items': elts.length
      }
    )
  }

  Tuple (node) {
    const { elts, lineno } = node
    const items = this.convertElements('ADD', elts, node)
    return this.tuplesCreateWith(items, elts, lineno)
  }

  AugAssign (node) {
    const { target, op: Operator, value, lineno } = node
    const opeartorName = new Operator()._astname
    const variableName = identifier(target.id)

    if (opeartorName === 'Add' && TypeInference(value) === 'Num') {
      const valueBlock = this.convert(value)
      target.id.refType = 'Num'
      return mathChange(variableName, valueBlock, lineno)
    } else {
      ;[node.left, node.right, node._astname] = [
        node.target,
        node.value,
        'BinOp'
      ]
      const valueBlock = this.convert(node)
      return variablesSet(variableName, valueBlock, lineno)
    }
  }
}

function identifier (node) {
  return Sk.ffi.remapToJs(node)
}

Sk.configure({
  __future__: Sk.python3
})

function arrayMax (array) {
  return array.reduce(function (a, b) {
    return Math.max(a, b)
  })
}

function arrayMin (array) {
  return array.reduce(function (a, b) {
    return Math.min(a, b)
  })
}

PythonToBlocks.prototype.TOP_LEVEL_NODES = [
  'Module',
  'Expression',
  'Interactive',
  'Suite'
]

const valueType = ['Num', 'List', 'Str', 'Tuple', 'Set', 'Dict', 'NameConstant']

function isValue (node) {
  const nodeType = node._astname
  return valueType.includes(nodeType)
}

function binOpInference (operatorType, leftType, rightType) {
  switch (operatorType) {
    case 'Pow':
    case 'FloorDiv':
    case 'Div':
    case 'LShift':
    case 'RShift':
      return 'Num'
    case 'Add':
      if (leftType === rightType) {
        return leftType
      }
      return false

    case 'Mult':
      if (leftType === rightType) {
        return leftType
      }
      return leftType === 'Num' ? rightType : leftType

    case 'Sub':
    case 'BitAnd':
    case 'BitOr':
    case 'BitXor':
      return leftType
    default:
      return false
  }
}

function TypeInference (node) {
  if (node.id && node.id.refType) {
    return node.id.refType
  }
  if (isValue(node)) {
    return node._astname
  }
  if (node._astname === 'BoolOp' || node._astname === 'Compare') {
    return 'NameConstant'
  } else if (node._astname === 'BinOp') {
    const operatorType = node.op.prototype._astname
    const leftType = TypeInference(node.left)
    const rightType = TypeInference(node.right)
    return binOpInference(operatorType, leftType, rightType)
  }

  return false
}

const variablesGet = function (variableName, lineno) {
  return blockBuilder('variables_get', lineno, {
    VAR: variableName
  })
}

function block (
  type,
  lineNumber,
  fields,
  values,
  settings,
  mutations,
  statements
) {
  const newBlock = document.createElement('block')
  // Settings
  newBlock.setAttribute('type', type)
  newBlock.setAttribute('line_number', lineNumber)
  for (const setting in settings) {
    const settingValue = settings[setting]
    newBlock.setAttribute(setting, settingValue)
  }
  // Mutations
  if (mutations !== undefined && Object.keys(mutations).length > 0) {
    const newMutation = document.createElement('mutation')
    newFunction(newMutation)
    newBlock.appendChild(newMutation)
  }
  // Fields
  for (const field in fields) {
    const fieldValue = fields[field]
    const newField = document.createElement('field')
    newField.setAttribute('name', field)
    newField.appendChild(document.createTextNode(fieldValue))
    newBlock.appendChild(newField)
  }
  // Values
  for (const value in values) {
    const valueValue = values[value]
    const newValue = document.createElement('value')
    if (valueValue !== null) {
      newValue.setAttribute('name', value)
      newValue.appendChild(valueValue)
      newBlock.appendChild(newValue)
    }
  }
  // Statements
  if (statements !== undefined && Object.keys(statements).length > 0) {
    for (const statement in statements) {
      const statementValue = statements[statement]
      if (statementValue === null) {
        continue
      } else {
        for (const element of statementValue) {
          const newStatement = document.createElement('statement')
          newStatement.setAttribute('name', statement)
          newStatement.appendChild(element)
          newBlock.appendChild(newStatement)
        }
      }
    }
  }
  return newBlock

  function newFunction (newMutation) {
    for (const mutation in mutations) {
      const mutationValue = mutations[mutation]
      if (mutation.charAt(0) === '@') {
        newMutation.setAttribute(mutation.charAt(0), mutationValue)
      } else if (
        mutationValue !== null &&
        mutationValue.constructor === Array
      ) {
        for (const element of mutationValue) {
          const mutationNode = document.createElement(mutation)
          mutationNode.setAttribute('name', element)
          newMutation.appendChild(mutationNode)
        }
      } else {
        const mutationNode = document.createElement('arg')
        mutation.charAt(0) === '*'
          ? mutationNode.setAttribute('name', '')
          : mutationNode.setAttribute('name', mutation)
        if (mutationValue !== null) {
          mutationNode.appendChild(mutationValue)
        }
        newMutation.appendChild(mutationNode)
      }
    }
  }
}

const TypeWithOne = function (textBlock, lineno) {
  return blockBuilder('type_with_one_argument', lineno, {}, { object: textBlock })
}
const binaryType = function (textBlock, lineno) {
  return blockBuilder('binary_type', lineno, {}, { anything: textBlock })
}

const ABS = function (operandBlock, lineno) {
  return blockBuilder(
    'abs',
    lineno,
    {},
    {
      abs_argument: operandBlock
    }
  )
}

const AITER = function (operandBlock, lineno) {
  return blockBuilder(
    'aiter',
    lineno,
    {},
    {
      aiter_argument: operandBlock
    }
  )
}

const ALL = function (iterable, lineno) {
  return blockBuilder(
    'all',
    lineno,
    {},
    {
      all_argument: iterable
    }
  )
}

const ANY = function (iterable, lineno) {
  return blockBuilder(
    'any',
    lineno,
    {},
    {
      any_argument: iterable
    }
  )
}

const ANEXT = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'anext',
    lineno,
    {},
    {
      anext_left_argument: leftBlock,
      anext_right_argument: rightBlock
    }
  )
}

const ASCII = function (nullBlock, lineno) {
  return blockBuilder(
    'ascii',
    lineno,
    {},
    {
      ascii_argument: nullBlock
    }
  )
}

const BIN = function (numberBlock, lineno) {
  return blockBuilder(
    'bin',
    lineno,
    {},
    {
      bin_argument: numberBlock
    }
  )
}

const BOOL = function (nullBlock, lineno) {
  return blockBuilder(
    'bool',
    lineno,
    {},
    {
      bool_argument: nullBlock
    }
  )
}

const BREAKPOINT = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'break_point',
    lineno,
    {},
    {
      breakpoint_left_argument: leftBlock,
      breakpoint_right_argument: rightBlock
    }
  )
}

const BYTEARRAY = function (leftBlock, middleBlock, rightBlock, lineno) {
  return blockBuilder(
    'byte_array',
    lineno,
    {},
    {
      bytearray_source: leftBlock,
      bytearray_encoding: middleBlock,
      bytearray_error: rightBlock
    }
  )
}

const BYTES = function (leftBlock, middleBlock, rightBlock, lineno) {
  return blockBuilder(
    'bytes',
    lineno,
    {},
    {
      bytes_source: leftBlock,
      bytes_encoding: middleBlock,
      bytes_error: rightBlock
    }
  )
}

const BYTETIME = function (leftBlock, middleBlock, rightBlock, lineno) {
  return blockBuilder(
    'datetime',
    lineno,
    {},
    {
      dateyear: leftBlock,
      datemonth: middleBlock,
      dateday: rightBlock
    }
  )
}

const BYTESUB = function (leftBlock, middleBlock, rightBlock, lineno) {
  return blockBuilder(
    'sub',
    lineno,
    {},
    {
      subtype: leftBlock,
      subvalue: middleBlock,
      subname: rightBlock
    }
  )
}

const CALLABLE = function (nullBlock, lineno) {
  return blockBuilder(
    'callable',
    lineno,
    {},
    {
      callable_argument: nullBlock
    }
  )
}

const variablesSetMultiple = function (
  fields,
  items,
  targets,
  simpleTarget,
  lineno
) {
  console.log('to:variables_set')
  return blockBuilder(
    'variables_set',
    lineno,
    fields,
    items,
    {
      inline: 'true'
    },
    {
      '@targets': targets.length,
      '@simple': simpleTarget
    }
  )
}

const mathNumber = function ({ imag, v }, lineno) {
  const isImaginaryPart = v === undefined
  if (isImaginaryPart) {
    return blockBuilder('math_number_imaginary', lineno, { NUM: imag })
  }
  console.log('to:math_number')
  return blockBuilder('math_number', lineno, { NUM: v })
}

const logicBoolean = function (isTrue, lineno) {
  return blockBuilder('logic_boolean', lineno, {
    BOOL: isTrue ? 'TRUE' : 'FALSE'
  })
}

const constantsNone = function (lineno) {
  return blockBuilder('logic_null', lineno)
}

const textPrint = function (textBlock, lineno) {
  return blockBuilder('text_print', lineno, {}, { TEXT: textBlock })
}

const typeConvert = function (valueBlock, type, lineno) {
  return blockBuilder(
    'type_convert',
    lineno,
    {
      TYPE: type
    },
    {
      VAR: valueBlock
    },
    {
      inline: true
    }
  )
}

const textChr = function (valueBlock, lineno) {
  return blockBuilder(
    'chr',
    lineno,
    {},
    {
      chrnum: valueBlock
    },
    {
      inline: true
    }
  )
}

const textDir = function (valueBlock, lineno) {
  return blockBuilder(
    'dir',
    lineno,
    {},
    {
      dirobject: valueBlock
    },
    {
      inline: true
    }
  )
}

const textRmdir = function (valueBlock, lineno) {
  return blockBuilder(
    'remove_all_file',
    lineno,
    {},
    {
      removeall: valueBlock
    },
    {
      inline: true
    }
  )
}

const textPath = function (valueBlock, lineno) {
  return blockBuilder(
    'if_exist_file',
    lineno,
    {},
    {
      existfile: valueBlock
    },
    {
      inline: true
    }
  )
}

const textGlobal = function (valueBlock, lineno) {
  return blockBuilder(
    'globall',
    lineno,
    {},
    {
      global: valueBlock
    },
    {
      inline: true
    }
  )
}

const textRemove = function (valueBlock, lineno) {
  return blockBuilder(
    'removefile',
    lineno,
    {},
    {
      removefile: valueBlock
    },
    {
      inline: true
    }
  )
}

const textOrd = function (valueBlock, lineno) {
  return blockBuilder(
    'text_ord',
    lineno,
    {},
    {
      VALUE: valueBlock
    },
    {
      inline: true
    }
  )
}

const inputBlock = function (promptBlock, lineno) {
  if (promptBlock) {
    return blockBuilder(
      'input_prompt_block',
      lineno,
      {},
      {
        PROMPT: promptBlock
      }
    )
  }
  return blockBuilder('input_block', lineno)
}

const textLength = function (valueBlock, lineno) {
  return blockBuilder(
    'text_length',
    lineno,
    {},
    {
      VALUE: valueBlock
    }
  )
}

const setsSize = function (valueBlock, lineno) {
  return blockBuilder(
    'sets_size',
    lineno,
    {},
    {
      VALUE: valueBlock
    }
  )
}

const tuplesSize = function (valueBlock, lineno) {
  return blockBuilder(
    'tuples_size',
    lineno,
    {},
    {
      VALUE: valueBlock
    }
  )
}

const dictsSize = function (valueBlock, lineno) {
  return blockBuilder(
    'dicts_size',
    lineno,
    {},
    {
      VALUE: valueBlock
    }
  )
}

const listsLength = function (valueBlock, lineno) {
  return blockBuilder(
    'function_length_temporary',
    lineno,
    {},
    {
      VALUE: valueBlock
    }
  )
}

const mathRound = function (valueBlock, operation, lineno) {
  return blockBuilder(
    'math_round',
    lineno,
    {
      OP: operation
    },
    {
      NUM: valueBlock
    }
  )
}

const isBitwiseArithmeticOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'BitAnd':
    case 'BitOr':
    case 'BitXor':
    case 'LShift':
    case 'RShift':
      return true
    default:
      return false
  }
}

const mathBitwiseArithmetic = function (
  leftBlock,
  opeartorName,
  rightBlock,
  lineno
) {
  return blockBuilder(
    'math_bitwise_arithmetic',
    lineno,
    {
      OP: bitwiseArithmeticOperator(opeartorName)
    },
    {
      A: leftBlock,
      B: rightBlock
    },
    {
      inline: true
    }
  )
}

const isCommonArithmeticOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'Add':
    case 'Sub':
    case 'Div':
    case 'Mult':
    case 'Pow':
      return true
    default:
      return false
  }
}
const functionSum = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'function_sum',
    lineno,
    {},
    {
      iterable: leftBlock,
      start: rightBlock
    }
  )
}
const mathArithmetic = function (leftBlock, opeartorName, rightBlock, lineno) {
  if (isBitwiseArithmeticOperator(opeartorName)) {
    return mathBitwiseArithmetic(leftBlock, opeartorName, rightBlock, lineno)
  } else if (isCommonArithmeticOperator(opeartorName)) {
    return mathCommonArithmetic(leftBlock, opeartorName, rightBlock, lineno)
  }
  throw new Error(`Operator not supported: ${opeartorName}`)
}

const commonArithmeticOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'Add':
      return 'ADD'
    case 'Sub':
      return 'MINUS'
    case 'Div':
      return 'DIVIDE'
    case 'Mult':
      return 'MULTIPLY'
    case 'Pow':
      return 'POWER'
    default:
      throw new Error(`Operator not supported: ${opeartorName}`)
  }
}

const mathCommonArithmetic = function (
  leftBlock,
  opeartorName,
  rightBlock,
  lineno
) {
  return blockBuilder(
    'math_arithmetic',
    lineno,
    {
      OP: commonArithmeticOperator(opeartorName)
    },
    {
      A: leftBlock,
      B: rightBlock
    },
    {
      inline: true
    }
  )
}

const bitwiseArithmeticOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'BitAnd':
      return 'AND'
    case 'BitOr':
      return 'OR'
    case 'BitXor':
      return 'XOR'
    case 'LShift':
      return 'LEFT_SHIFT'
    case 'RShift':
      return 'RIGHT_SHIFT'
    default:
      throw new Error(`Operator not supported: ${opeartorName}`)
  }
}

const mathDelattr = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'delattr',
    lineno,
    {},
    {
      delattrobject: leftBlock,
      delattrname: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathIntegerDivmod = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'divmod',
    lineno,
    {},
    {
      divmoda: leftBlock,
      divmodb: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathEnumerate = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'enumerate',
    lineno,
    {},
    {
      iterable: leftBlock,
      enumstart: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathFilter = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'filter',
    lineno,
    {},
    {
      filterfunction: leftBlock,
      filteriterable: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathEval = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'eval',
    lineno,
    {},
    {
      evala: leftBlock,
      evalb: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathExec = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'exec',
    lineno,
    {},
    {
      execglobal: leftBlock,
      execlocal: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathIntegerSearch = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'search',
    lineno,
    {},
    {
      searchtype: leftBlock,
      searchname: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathIntegerSplit = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'resplit',
    lineno,
    {},
    {
      resplittype: leftBlock,
      resplitname: rightBlock
    },
    {
      inline: true
    }
  )
}

const rangeCreate = function (Start, endBlock, Step, lineno) {
  return blockBuilder(
    'range__',
    lineno,
    {
      start: Start,
      step_length: Step
    },
    {
      end: endBlock
    }
  )
}
const dictsCreateWith = function (items, keys, lineno) {
  return blockBuilder(
    'dicts_create_with',
    lineno,
    {},
    items,
    {
      inline: 'false'
    },
    {
      '@items': keys.length
    }
  )
}
const dictsPair = function (keyBlock, valueBlock, lockedBlock, lineno) {
  return blockBuilder(
    'dicts_pair',
    lineno,
    {},
    {
      KEY: keyBlock,
      VALUE: valueBlock
    },
    lockedBlock
  )
}
const controlsFor = function (variableName, forArgs, bodyBlock, lineno) {
  return blockBuilder(
    'controls_for',
    lineno,
    {
      VAR: variableName
    },
    {
      FROM: forArgs[0],
      TO: forArgs[1],
      BY: forArgs[2]
    },
    {
      inline: 'true'
    },
    {},
    {
      DO: bodyBlock
    }
  )
}

const controlsForEach = function (variableName, listBlock, bodyBlock, lineno) {
  return blockBuilder(
    'controls_forEach',
    lineno,
    {
      VAR: variableName
    },
    {
      LIST: listBlock
    },
    {
      inline: 'true'
    },
    {},
    {
      DO: bodyBlock
    }
  )
}

const controlsForElse = function (
  variableName,
  listBlock,
  bodyBlock,
  elseBlock,
  lineno
) {
  return blockBuilder(
    'controls_forElse',
    lineno,
    {
      VAR: variableName
    },
    {
      LIST: listBlock
    },
    {
      inline: 'true'
    },
    {},
    {
      DO: bodyBlock,
      ELSE: elseBlock
    }
  )
}

const controlsRepeat = function (times, bodyBlock, lineno) {
  return blockBuilder(
    'controls_repeat_ext',
    lineno,
    {},
    {
      TIMES: times
    },
    {
      inline: 'true'
    },
    {},
    {
      DO: bodyBlock
    }
  )
}

const text = function ({ v }, lineno) {
  if (v.split('\n').length > 1) {
    return blockBuilder('text_multiline', lineno, { TEXT: v })
  }
  return blockBuilder('text', lineno, { TEXT: v })
}

const rawBlock = function (content) {
  return blockBuilder('raw_block', 0, {
    TEXT: content
  })
}

const buildlocals = function (lineno) {
  return blockBuilder('function_local', lineno)
}

const buildtry = function (lineno) {
  return blockBuilder('try_sentence', lineno)
}

const buildexcept = function (lineno) {
  return blockBuilder('except_sentence', lineno)
}

const buildfinally = function (lineno) {
  return blockBuilder('finally_sentence', lineno)
}

const buildTimenow = function (lineno) {
  return blockBuilder('datetime_now', lineno)
}

const buildobject = function (lineno) {
  return blockBuilder('function_object', lineno)
}

const buildisinstance = function (instance, classinfo, lineno) {
  return blockBuilder(
    'function_isinstance',
    lineno,
    {},
    {
      function_isinstance_object: instance,
      function_isinstance_classinformation: classinfo
    }
  )
}

const buildissubclass = function (classinfo1, classinfo2, lineno) {
  return blockBuilder(
    'function_issubclass',
    lineno,
    {},
    {
      function_issubclass_class: classinfo1,
      function_issubclass_classinfo: classinfo2
    }
  )
}

const buildmax = function (number1, number2, lineno) {
  return blockBuilder(
    'function_max',
    lineno,
    {},
    {
      function_max_input1: number1,
      function_max_input2: number2
    }
  )
}

const buildmin = function (number1, number2, lineno) {
  return blockBuilder(
    'function_min',
    lineno,
    {},
    {
      function_min_input1: number1,
      function_min_input2: number2
    }
  )
}

const buildnext = function (iterator1, lineno) {
  return blockBuilder(
    'function_next',
    lineno,
    {},
    {
      function_next_iterable: iterator1
    }
  )
}

const buildmap = function (thefunction, itera, lineno) {
  return blockBuilder(
    'function_map',
    lineno,
    {},
    {
      function_map_function: thefunction,
      function_map_iterable: itera
    }
  )
}

const buildclass = function (object, classinfo, lineno) {
  return blockBuilder(
    'class_build',
    lineno,
    {},
    {
      class_build_classname: object,
      class_build_classcontent: classinfo
    }
  )
}

const buildmemoryview = function (value, lineno) {
  return blockBuilder(
    'function_memoryview',
    lineno,
    {},
    {
      function_memoryview_object: value
    }
  )
}

const buildraise = function (field, value, lineno) {
  return blockBuilder(
    'raise_sentence',
    lineno,
    {
      errorname: field
    },
    {
      raiseerror: value
    }
  )
}

const createSetOne = function (nullBlock, lineno) {
  return blockBuilder(
    'create_set_one',
    lineno,
    {},
    {
      create_set_one_argument: nullBlock
    }
  )
}

const logicNegate = function (operandBlock, lineno) {
  return blockBuilder(
    'logic_negate',
    lineno,
    {},
    {
      BOOL: operandBlock
    },
    {
      inline: 'false'
    }
  )
}

const mathBitwiseNot = function (operandBlock, lineno) {
  return blockBuilder(
    'math_bitwise_not',
    lineno,
    {},
    {
      VALUE: operandBlock
    },
    {
      inline: 'false'
    }
  )
}

const mathSingle = function (opeartorName, operandBlock, lineno) {
  return blockBuilder(
    'math_single',
    lineno,
    {
      OP: opeartorName
    },
    {
      NUM: operandBlock
    }
  )
}

const iterChange = function (iterBlock, lineno) {
  return blockBuilder('iter', lineno, {}, { list: iterBlock })
}

const iterfChange = function (iterfBlock, lineno) {
  return blockBuilder('__iter__function', lineno, {}, { iterator: iterfBlock })
}

const nextfChange = function (nextfBlock, lineno) {
  return blockBuilder('__next__function', lineno, {}, { iterator: nextfBlock })
}

const setsArithmetic = function (leftBlock, opeartorName, rightBlock, lineno) {
  return blockBuilder(
    'sets_arithmetic',
    lineno,
    {
      OP: setArithmeticOperator(opeartorName)
    },
    {
      A: leftBlock,
      B: rightBlock
    },
    {
      inline: true
    }
  )
}

const setArithmeticOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'BitAnd':
      return 'AND'
    case 'BitOr':
      return 'OR'
    case 'BitXor':
      return 'XOR'
    case 'Sub':
      return 'MINUS'
    default:
      throw new Error(`Operator not supported: ${opeartorName}`)
  }
}

const mathModulo = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'math_modulo',
    lineno,
    {},
    {
      DIVIDEND: leftBlock,
      DIVISOR: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathIntegerDivision = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'math_integer_division',
    lineno,
    {},
    {
      DIVIDEND: leftBlock,
      DIVISOR: rightBlock
    },
    {
      inline: true
    }
  )
}

const logicOperation = function (
  valueBlock,
  opeartorName,
  resultBlock,
  lineno
) {
  return blockBuilder(
    'logic_operation',
    lineno,
    {
      OP: booleanOperator(opeartorName)
    },
    {
      A: resultBlock,
      B: valueBlock
    },
    {
      inline: 'true'
    }
  )
}

const booleanOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'And':
      return 'AND'
    case 'Or':
      return 'OR'
    default:
      throw new Error(`Operator not supported: ${opeartorName}`)
  }
}

const FileOpen = function (textBlock, Model, TextBinary, lineno) {
  return blockBuilder(
    'open_file',
    lineno,
    {
      mode1: Model,
      textbinary: TextBinary
    },
    {
      file: textBlock
    }
  )
}

const reprObj = function (Obj, lineno) {
  return blockBuilder('repr', lineno, {}, { obj: Obj })
}

const reversed = function (objString, lineno) {
  return blockBuilder('reverse', lineno, {}, { reverse_function: objString })
}

const setFunc = function (Iterate, lineno) {
  return blockBuilder('set_func', lineno, {}, { iterable: Iterate })
}

const mathOct = function (textBlock, lineno) {
  return blockBuilder('oct', lineno, {}, { iterable: textBlock })
}

const roundFunc = function (num, accu, lineno) {
  return blockBuilder(
    'round_function',
    lineno,
    {},
    { number: num, accuracy: accu }
  )
}

const typeWithThree = function (startBlock, stopBlock, stepBlock, lineno) {
  return blockBuilder(
    'type_with_three_argument',
    lineno,
    {},
    {
      name: startBlock,
      bases: stopBlock,
      dict: stepBlock
    }
  )
}

const xrange = function (startBlock, stopBlock, stepBlock, lineno) {
  return blockBuilder(
    'xrange',
    lineno,
    {},
    {
      start: startBlock,
      stop: stopBlock,
      step: stepBlock
    }
  )
}

const innerPow = function (Base, Exp, Mod, lineno) {
  return blockBuilder(
    'inner_pow',
    lineno,
    {},
    { base: Base, exp: Exp, mod: Mod }
  )
}

const property = function (fGet, fSet, fDel, Doc, lineno) {
  return blockBuilder(
    'property',
    lineno,
    {},
    { fget: fGet, fset: fSet, fdel: fDel, doc: Doc }
  )
}

const logicSetsCompare = function (left, opeartorName, right, lineno) {
  return blockBuilder(
    'logic_sets_compare',
    lineno,
    {
      OP: compareOperator(opeartorName)
    },
    {
      A: left,
      B: right
    },
    {
      inline: 'true'
    }
  )
}

const logicCompare = function (left, opeartorName, right, lineno) {
  return blockBuilder(
    'logic_compare',
    lineno,
    {
      OP: compareOperator(opeartorName)
    },
    {
      A: left,
      B: right
    },
    {
      inline: 'true'
    }
  )
}

const membershipOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'In':
      return 'IN'
    case 'NotIn':
      return 'NOT_IN'
    default:
      throw new Error(`Operator not supported: ${opeartorName}`)
  }
}

const logicObjectIn = function (left, opeartorName, right, lineno) {
  return blockBuilder(
    'logic_object_in',
    lineno,
    {
      OP: membershipOperator(opeartorName)
    },
    {
      A: left,
      B: right
    },
    {
      inline: 'true'
    }
  )
}

const identityOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'Is':
      return 'IS'
    case 'IsNot':
      return 'IS_NOT'
    default:
      throw new Error(`Operator not supported: ${opeartorName}`)
  }
}

const logicObjectCompare = function (left, opeartorName, right, lineno) {
  return blockBuilder(
    'logic_object_compare',
    lineno,
    {
      OP: identityOperator(opeartorName)
    },
    {
      A: left,
      B: right
    },
    {
      inline: 'true'
    }
  )
}

const logicTernary = function (ifBlock, thenBlock, elseBlock, lineno) {
  return blockBuilder(
    'logic_ternary',
    lineno,
    {},
    {
      IF: ifBlock,
      THEN: thenBlock,
      ELSE: elseBlock
    },
    {
      inline: 'false'
    }
  )
}

const controlsIf = function (conditions, bodys, { elifs, elses }, lineno) {
  return blockBuilder(
    'controls_if',
    lineno,
    {},
    conditions,
    {
      inline: 'false'
    },
    {
      '@elseif': elifs,
      '@else': elses
    },
    bodys
  )
}

const compareOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'Eq':
      return 'EQ'
    case 'NotEq':
      return 'NEQ'
    case 'Lt':
      return 'LT'
    case 'Gt':
      return 'GT'
    case 'LtE':
      return 'LTE'
    case 'GtE':
      return 'GTE'
    default:
      throw new Error(`Operator not supported: ${opeartorName}`)
  }
}

const mathChange = function (variableName, valueBlock, lineno) {
  return blockBuilder(
    'math_change',
    lineno,
    {
      VAR: variableName
    },
    {
      DELTA: valueBlock
    }
  )
}

const variablesSet = function (variableName, valueBlock, lineno) {
  return blockBuilder(
    'variables_set',
    lineno,
    {
      VAR: variableName
    },
    {
      VALUE: valueBlock
    }
  )
}

const floatChange = function (floatBlock, lineno) {
  return blockBuilder('float', lineno, {}, { otherValue: floatBlock })
}

const frozensetChange = function (frozensetBlock, lineno) {
  return blockBuilder('frozenset', lineno, {}, { set: frozensetBlock })
}

const hashChange = function (hashBlock, lineno) {
  return blockBuilder('hash', lineno, {}, { object: hashBlock })
}

const helpChange = function (helpBlock, lineno) {
  return blockBuilder('help', lineno, {}, { helpValue: helpBlock })
}

const hexChange = function (hexBlock, lineno) {
  return blockBuilder('hex', lineno, {}, { number: hexBlock })
}

const idChange = function (idBlock, lineno) {
  return blockBuilder('id_function', lineno, {}, { object: idBlock })
}

const getattrChange = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'getattr',
    lineno,
    {},
    {
      class: leftBlock,
      member: rightBlock
    },
    {
      inline: true
    }
  )
}
const hasattrChange = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'hasattr',
    lineno,
    {},
    {
      object: leftBlock,
      member: rightBlock
    },
    {
      inline: true
    }
  )
}

const importFunc = function (names, lineno) {
  return blockBuilder('import_modules', lineno, {
    import_modules_module: names
  })
}

const notesFunc = function (names, lineno) {
  return blockBuilder('notes', lineno, {
    note: names
  })
}

const setsCreateWith = function (items, elts, lineno) {
  return blockBuilder(
    'sets_create_with',
    lineno,
    {},
    items,
    {
      inline: elts.length > 3 ? 'false' : 'true'
    },
    {
      '@items': elts.length
    }
  )
}

const sliceFun = function (names, lineno) {
  return blockBuilder('slice_fun', lineno, {}, { sliceArgument: names })
}

export default PythonToBlocks
