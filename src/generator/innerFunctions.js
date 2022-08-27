export default function innerFunctions (Blockly) {
  // chr
  Blockly.Python.abs = function (block) {
    const absArgument = Blockly.Python.valueToCode(
      block,
      'abs_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (absArgument[0] === '(') {
      code = `abs${absArgument}`
    } else {
      code = `abs(${absArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.aiter = function (block) {
    const aiterArgument = Blockly.Python.valueToCode(
      block,
      'aiter_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (aiterArgument[0] === '(') {
      code = `aiter${aiterArgument}`
    } else {
      code = `aiter(${aiterArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.all = function (block) {
    const allArgument = Blockly.Python.valueToCode(
      block,
      'all_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (allArgument[0] === '(') {
      code = `all${allArgument}`
    } else {
      code = `all(${allArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.any = function (block) {
    const anyArgument = Blockly.Python.valueToCode(
      block,
      'any_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (anyArgument[0] === '(') {
      code = `any${anyArgument}`
    } else {
      code = `any(${anyArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.anext = function (block) {
    let anextLeftArgument = Blockly.Python.valueToCode(
      block,
      'anext_left_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let anextRightArgument = Blockly.Python.valueToCode(
      block,
      'anext_right_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    if (anextLeftArgument[0] === '(') {
      anextLeftArgument = anextLeftArgument.substring(
        1,
        anextLeftArgument.length - 1
      )
    }
    if (anextRightArgument[0] === '(') {
      anextRightArgument = anextRightArgument.substring(
        1,
        anextRightArgument.length - 1
      )
    }
    let code
    if (anextRightArgument !== '') {
      code = `anext(${anextLeftArgument}, ${anextRightArgument})`
    } else {
      code = `anext(${anextLeftArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.ascii = function (block) {
    const asciiArgument = Blockly.Python.valueToCode(
      block,
      'ascii_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (asciiArgument[0] === '(') {
      code = `ascii${asciiArgument}`
    } else {
      code = `ascii(${asciiArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.bin = function (block) {
    const binArgument = Blockly.Python.valueToCode(
      block,
      'bin_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (binArgument[0] === '(') {
      code = `bin${binArgument}`
    } else {
      code = `bin(${binArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.bool = function (block) {
    const boolArgument = Blockly.Python.valueToCode(
      block,
      'bool_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (boolArgument[0] === '(') {
      code = `bool${boolArgument}`
    } else {
      code = `bool(${boolArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.break_point = function (block) {
    let breakpointLeftArgument = Blockly.Python.valueToCode(
      block,
      'breakpoint_left_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let breakpointRightArgument = Blockly.Python.valueToCode(
      block,
      'breakpoint_right_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    if (breakpointLeftArgument[0] === '(') {
      breakpointLeftArgument = breakpointLeftArgument.substring(
        1,
        breakpointLeftArgument.length - 1
      )
    }
    if (breakpointRightArgument[0] === '(') {
      breakpointRightArgument = breakpointRightArgument.substring(
        1,
        breakpointRightArgument.length - 1
      )
    }
    let code
    if (breakpointRightArgument !== '') {
      code = `breakpoint(${breakpointLeftArgument}, ${breakpointRightArgument})`
    } else {
      code = `breakpoint(${breakpointLeftArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.byte_array = function (block) {
    let bytearraySource = Blockly.Python.valueToCode(
      block,
      'bytearray_source',
      Blockly.Python.ORDER_ATOMIC
    )
    let bytearrayEncoding = Blockly.Python.valueToCode(
      block,
      'bytearray_encoding',
      Blockly.Python.ORDER_ATOMIC
    )
    let bytearrayError = Blockly.Python.valueToCode(
      block,
      'bytearray_error',
      Blockly.Python.ORDER_ATOMIC
    )
    if (bytearraySource[0] === '(') {
      bytearraySource = bytearraySource.substring(1, bytearraySource.length - 1)
    }
    if (bytearrayEncoding[0] === '(') {
      bytearrayEncoding = bytearrayEncoding.substring(
        1,
        bytearrayEncoding.length - 1
      )
    }
    if (bytearrayError[0] === '(') {
      bytearrayError = bytearrayError.substring(1, bytearrayError.length - 1)
    }
    let code
    if (bytearrayError === '') {
      if (bytearrayEncoding === '') {
        code = `bytearray(${bytearraySource})`
      } else {
        code = `bytearray(${bytearraySource}, ${bytearrayEncoding})`
      }
    } else {
      code = `bytearray(${bytearraySource}, ${bytearrayEncoding}, ${bytearrayError})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.bytes = function (block) {
    let bytesSource = Blockly.Python.valueToCode(
      block,
      'bytes_source',
      Blockly.Python.ORDER_ATOMIC
    )
    let bytesEncoding = Blockly.Python.valueToCode(
      block,
      'bytes_encoding',
      Blockly.Python.ORDER_ATOMIC
    )
    let bytesError = Blockly.Python.valueToCode(
      block,
      'bytes_error',
      Blockly.Python.ORDER_ATOMIC
    )
    if (bytesSource[0] === '(') {
      bytesSource = bytesSource.substring(1, bytesSource.length - 1)
    }
    if (bytesEncoding[0] === '(') {
      bytesEncoding = bytesEncoding.substring(1, bytesEncoding.length - 1)
    }
    if (bytesError[0] === '(') {
      bytesError = bytesError.substring(1, bytesError.length - 1)
    }
    let code
    if (bytesError === '') {
      if (bytesEncoding === '') {
        code = `bytes(${bytesSource})`
      } else {
        code = `bytes(${bytesSource}, ${bytesEncoding})`
      }
    } else {
      code = `bytes(${bytesSource}, ${bytesEncoding}, ${bytesError})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.callable = function (block) {
    const callableArgument = Blockly.Python.valueToCode(
      block,
      'callable_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (callableArgument[0] === '(') {
      code = `callable${callableArgument}`
    } else {
      code = `callable(${callableArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.chr = function (block) {
    const valuechrnum = Blockly.Python.valueToCode(
      block,
      'chrnum',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'chr(' + valuechrnum + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // classmethod
  Blockly.Python.class_method = function () {
    return '@classmethod'
  }
  // compile
  Blockly.Python.compile = function (block) {
    const valuesourse = Blockly.Python.valueToCode(
      block,
      'sourse',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuefilename = Blockly.Python.valueToCode(
      block,
      'filename',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuemode = Blockly.Python.valueToCode(
      block,
      'mode',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueflags = Blockly.Python.valueToCode(
      block,
      'flags',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuedontinherit = Blockly.Python.valueToCode(
      block,
      'dont_inherit',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueoptimize = Blockly.Python.valueToCode(
      block,
      'optimize',
      Blockly.Python.ORDER_ATOMIC
    )
    return (
      'compile(' +
      valuesourse +
      ',' +
      valuefilename +
      ',' +
      valuemode +
      ',' +
      valueflags +
      ',' +
      valuedontinherit +
      ',' +
      valueoptimize +
      ')'
    )
  }
  // complex
  Blockly.Python.complex = function (block) {
    const valuecomplex = Blockly.Python.valueToCode(
      block,
      'complex',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuecomplexl = Blockly.Python.valueToCode(
      block,
      'complexl',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'complex(' + valuecomplex + '+' + valuecomplexl + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // delattr
  Blockly.Python.delattr = function (block) {
    const valuedelattrobject = Blockly.Python.valueToCode(
      block,
      'delattrobject',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuedelattrname = Blockly.Python.valueToCode(
      block,
      'delattrname',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'delattr(' + valuedelattrobject + ',' + valuedelattrname + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // dir
  Blockly.Python.dir = function (block) {
    const valuedirobject = Blockly.Python.valueToCode(
      block,
      'dirobject',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'dir(' + valuedirobject + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // divmod
  Blockly.Python.divmod = function (block) {
    const valuedivmoda = Blockly.Python.valueToCode(
      block,
      'divmoda',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuedivmodb = Blockly.Python.valueToCode(
      block,
      'divmodb',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'divmod(' + valuedivmoda + ',' + valuedivmodb + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // enumerate
  Blockly.Python.enumerate = function (block) {
    const valueiterable = Blockly.Python.valueToCode(
      block,
      'iterable',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueenumstart = Blockly.Python.valueToCode(
      block,
      'enumstart',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'enumerate(' + valueiterable + ',' + valueenumstart + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // filter
  Blockly.Python.filter = function (block) {
    const valuefilterfunction = Blockly.Python.valueToCode(
      block,
      'filterfunction',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuefilteriterable = Blockly.Python.valueToCode(
      block,
      'filteriterable',
      Blockly.Python.ORDER_ATOMIC
    )
    const code =
      'filter(' + valuefilterfunction + ',' + valuefilteriterable + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // eval
  Blockly.Python.eval = function (block) {
    const valueevala = Blockly.Python.valueToCode(
      block,
      'evala',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueevalb = Blockly.Python.valueToCode(
      block,
      'evalb',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'eval(' + "'" + valueevala + ',' + valueevalb + "'" + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // exec
  Blockly.Python.exec = function (block) {
    const valueexecglobal = Blockly.Python.valueToCode(
      block,
      'execglobal',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueexeclocal = Blockly.Python.valueToCode(
      block,
      'execlocal',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'exec(' + valueexecglobal + ',' + valueexeclocal + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  // lambda
  Blockly.Blocks.lambda = {
    init: function () {
      this.setInputsInline(true)
      this.appendStatementInput('NAME').setCheck(null)
      this.itemCount_ = 3
      this.updateShape_()
      this.setOutput(true, 'Array')
      this.setMutator(new Blockly.Mutator(['general_create_with_item']))
      this.setTooltip('initialize lambda')
      this.setColour(180)
    },
    /**
     * Create XML to represent list inputs.
     * Backwards compatible serialization implementation.
     * @return {!Element} XML storage element.
     * @this {Block}
     */
    mutationToDom: function () {
      const container = Blockly.utils.xml.createElement('mutation')
      container.setAttribute('items', this.itemCount_)
      return container
    },
    /**
     * Parse XML to restore the list inputs.
     * Backwards compatible serialization implementation.
     * @param {!Element} xmlElement XML storage element.
     * @this {Block}
     */
    domToMutation: function (xmlElement) {
      this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10)
      this.updateShape_()
    },
    /**
     * Returns the state of this block as a JSON serializable object.
     * @return {{itemCount: number}} The state of this block, ie the item count.
     */
    saveExtraState: function () {
      return {
        itemCount: this.itemCount_
      }
    },
    /**
     * Applies the given state to this block.
     * @param {*} state The state to apply to this block, ie the item count.
     */
    loadExtraState: function (state) {
      this.itemCount_ = state.itemCount
      this.updateShape_()
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Workspace} workspace Mutator's workspace.
     * @return {!Block} Root block in mutator.
     * @this {Block}
     */
    decompose: function (workspace) {
      const containerBlock = workspace.newBlock('general_create_with_container')
      containerBlock.initSvg()
      let connection = containerBlock.getInput('STACK').connection
      for (let i = 0; i < this.itemCount_; i++) {
        const itemBlock = workspace.newBlock('general_create_with_item')
        itemBlock.initSvg()
        connection.connect(itemBlock.previousConnection)
        connection = itemBlock.nextConnection
      }
      return containerBlock
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Block} containerBlock Root block in mutator.
     * @this {Block}
     */
    compose: function (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      // Count number of inputs.
      const connections = []
      while (itemBlock && !itemBlock.isInsertionMarker()) {
        connections.push(itemBlock.valueConnection_)
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
      }
      // Disconnect any children that don't belong.
      for (let i = 0; i < this.itemCount_; i++) {
        const connection = this.getInput('ADD' + i).connection.targetConnection
        if (connection && connections.indexOf(connection) === -1) {
          connection.disconnect()
        }
      }
      this.itemCount_ = connections.length
      this.updateShape_()
      // Reconnect any child blocks.
      for (let i = 0; i < this.itemCount_; i++) {
        Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i)
      }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Block} containerBlock Root block in mutator.
     * @this {Block}
     */
    saveConnections: function (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      let i = 0
      while (itemBlock) {
        const input = this.getInput('ADD' + i)
        itemBlock.valueConnection_ = input && input.connection.targetConnection
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
        i++
      }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {Block}
     */
    updateShape_: function () {
      if (this.itemCount_ && this.getInput('EMPTY')) {
        this.removeInput('EMPTY')
      } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
        this.appendDummyInput('EMPTY').appendField('create lambda')
      }
      // Add new inputs.
      for (let i = 0; i < this.itemCount_; i++) {
        if (!this.getInput('ADD' + i)) {
          const input = this.appendValueInput('ADD' + i).setAlign(
            Blockly.Input.RIGHT
          )
          if (i === 0) {
            input.appendField('lambda')
          }
        }
      }
      // Remove deleted inputs.
      for (let i = this.itemCount_; this.getInput('ADD' + i); i++) {
        this.removeInput('ADD' + i)
      }
    }
  }

  Blockly.Python.function_length = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'function_length_inputtext',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'len(' + valueInput + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_local = function () {
    const code = 'locals()'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_object = function () {
    const code = 'object()'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_isinstance = function (block) {
    const Value1 = Blockly.Python.valueToCode(
      block,
      'function_isinstance_object',
      Blockly.Python.ORDER_ATOMIC
    )
    const Value2 = Blockly.Python.valueToCode(
      block,
      'function_isinstance_classinformation',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'isinstance(' + Value1 + ', ' + Value2 + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_issubclass = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'function_issubclass_class',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueName = Blockly.Python.valueToCode(
      block,
      'function_issubclass_classinfo',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'issubclass(' + valueInput + ', ' + valueName + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_next = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'function_next_iterable',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'next(' + valueInput + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_map = function (block) {
    const valuInput = Blockly.Python.valueToCode(
      block,
      'function_map_function',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueName = Blockly.Python.valueToCode(
      block,
      'function_map_iterable',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'map(' + valuInput + ', ' + valueName + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_memoryview = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'function_memoryview_object',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'memoryview(' + valueInput + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_max = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'function_max_input1',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueName = Blockly.Python.valueToCode(
      block,
      'function_max_input2',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'max(' + valueInput + ', ' + valueName + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_min = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'function_min_input1',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueName = Blockly.Python.valueToCode(
      block,
      'function_min_input2',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'min(' + valueInput + ', ' + valueName + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.round_function = function (block) {
    const valueNumber =
      Blockly.Python.valueToCode(
        block,
        'number',
        Blockly.Python.ORDER_ATOMIC
      ) || '0'
    const valueAccuracy =
      Blockly.Python.valueToCode(
        block,
        'accuracy',
        Blockly.Python.ORDER_ATOMIC
      ) || '0'
    const code = `round(${valueNumber}, ${valueAccuracy})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.reverse = function (block) {
    const valueReverse =
      Blockly.Python.valueToCode(
        block,
        'reverse_function',
        Blockly.Python.ORDER_ATOMIC
      ) || ''
    const code = `reversed(${valueReverse})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.open_file = function (block) {
    const valueName =
      Blockly.Python.valueToCode(block, 'file', Blockly.Python.ORDER_ATOMIC) ||
      'file path'
    const dropdownMode1 = block.getFieldValue('mode1')
    const dropdownMode2 = block.getFieldValue('textbinary')
    const code = `open(${valueName}, ${dropdownMode1}, ${dropdownMode2})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.ord = function (block) {
    const valueStr =
      Blockly.Python.valueToCode(block, 'str', Blockly.Python.ORDER_ATOMIC) ||
      null
    const code = `ord(${valueStr})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.inner_pow = function (block) {
    const valueBase =
      Blockly.Python.valueToCode(block, 'base', Blockly.Python.ORDER_ATOMIC) ||
      0
    const valueExp =
      Blockly.Python.valueToCode(block, 'exp', Blockly.Python.ORDER_ATOMIC) || 0
    const valueMod =
      Blockly.Python.valueToCode(block, 'mod', Blockly.Python.ORDER_ATOMIC) || 1
    const code = `pow(${valueBase}, ${valueExp}, ${valueMod})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.property = function (block) {
    const valueFget =
      Blockly.Python.valueToCode(block, 'fget', Blockly.Python.ORDER_ATOMIC) ||
      null
    const valueFset =
      Blockly.Python.valueToCode(block, 'fset', Blockly.Python.ORDER_ATOMIC) ||
      null
    const valueFdel =
      Blockly.Python.valueToCode(block, 'fdel', Blockly.Python.ORDER_ATOMIC) ||
      null
    const valueDoc =
      Blockly.Python.valueToCode(block, 'doc', Blockly.Python.ORDER_ATOMIC) ||
      null
    const code = `property(${valueFget}, ${valueFset}, ${valueFdel}, ${valueDoc})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.range__ = function (block) {
    const numberStart = block.getFieldValue('start')
    const valueEnd =
      Blockly.Python.valueToCode(block, 'end', Blockly.Python.ORDER_ATOMIC) || 0
    const numberName = block.getFieldValue('step_length') || 1
    const code = `range(${numberStart}, ${valueEnd}, ${numberName})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.repr = function (block) {
    const valueObj =
      Blockly.Python.valueToCode(block, 'obj', Blockly.Python.ORDER_ATOMIC) ||
      null
    const code = `repr(${valueObj})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.set_func = function (block) {
    const valueIterable = Blockly.Python.valueToCode(
      block,
      'iterable',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `set(${valueIterable})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.oct = function (block) {
    const valueIterable =
      Blockly.Python.valueToCode(
        block,
        'Number',
        Blockly.Python.ORDER_ATOMIC
      ) || 0
    const code = `oct(${valueIterable})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_sum = function (block) {
    const iterable = Blockly.Python.valueToCode(
      block,
      'iterable',
      Blockly.Python.ORDER_ATOMIC
    )
    const start = Blockly.Python.valueToCode(
      block,
      'start',
      Blockly.Python.ORDER_ATOMIC
    )
    return 'sum' + '(' + iterable + ',' + start + ')'
  }

  Blockly.Python.xrange = function (block) {
    const valuestart =
      Blockly.Python.valueToCode(block, 'start', Blockly.Python.ORDER_ATOMIC) ||
      '0'
    const valuestop =
      Blockly.Python.valueToCode(block, 'stop', Blockly.Python.ORDER_ATOMIC) ||
      'None'
    const valuestep =
      Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC) ||
      '1'
    const code =
      'xrange' + '(' + valuestart + ',' + valuestop + ',' + valuestep + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.type_with_one_argument = function (block) {
    const valueobject = Blockly.Python.valueToCode(
      block,
      'object',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'type(' + valueobject + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.type_with_three_argument = function (block) {
    const valuename = Blockly.Python.valueToCode(
      block,
      'name',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuebases = Blockly.Python.valueToCode(
      block,
      'bases',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuedict = Blockly.Python.valueToCode(
      block,
      'dict',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'type(' + valuename + ',' + valuebases + ',' + valuedict + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.format = function (block) {
    const txt = Blockly.Python.valueToCode(
      block,
      'txt',
      Blockly.Python.ORDER_ATOMIC
    )
    const value = Blockly.Python.valueToCode(
      block,
      'string',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = txt + '.format(' + value + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.float = function (block) {
    const valueFloat = Blockly.Python.valueToCode(
      block,
      'otherValue',
      Blockly.Python.ORDER_ATOMIC
    )
    return 'float(' + valueFloat + ')'
  }

  Blockly.Python.frozenset = function (block) {
    const set = Blockly.Python.valueToCode(
      block,
      'set',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'class frozenset(' + set + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.getattr = function (block) {
    const aimclass = Blockly.Python.valueToCode(
      block,
      'class',
      Blockly.Python.ORDER_ATOMIC
    )
    const member = Blockly.Python.valueToCode(
      block,
      'member',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'getattr(' + aimclass + ', ' + member + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.globals = function () {
    const code = 'globals()'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.hasattr = function (block) {
    const aimobject = Blockly.Python.valueToCode(
      block,
      'object',
      Blockly.Python.ORDER_ATOMIC
    )
    const member = Blockly.Python.valueToCode(
      block,
      'member',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'hasattr(' + aimobject + ', ' + member + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.hash = function (block) {
    const object = Blockly.Python.valueToCode(
      block,
      'object',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'hash(' + object + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.help = function (block) {
    const valueHelp = Blockly.Python.valueToCode(
      block,
      'helpValue',
      Blockly.Python.ORDER_ATOMIC
    )
    return 'help(' + valueHelp + ')'
  }

  Blockly.Python.hex = function (block) {
    const number = Blockly.Python.valueToCode(
      block,
      'number',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'hex(' + number + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.id_function = function (block) {
    const object = Blockly.Python.valueToCode(
      block,
      'object',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'id(' + object + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.input = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'inputValue',
      Blockly.Python.ORDER_ATOMIC
    )
    return 'input(' + valueInput + ')'
  }

  Blockly.Python.int_class = function (block) {
    const number = Blockly.Python.valueToCode(
      block,
      'number',
      Blockly.Python.ORDER_ATOMIC
    )
    const base = Blockly.Python.valueToCode(
      block,
      'base',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'class int(' + number + ', ' + base + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.slice_fun = function (block) {
    const valueSliceArgument = Blockly.Python.valueToCode(
      block,
      'sliceArgument',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `slice(${valueSliceArgument})`
    return code
  }
}
