export default function addition (Blockly) {
  Blockly.Python.function_length_temporary = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'VALUE',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'len(' + valueInput + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.raw_empty = function (block) {
    const value =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) ||
      Blockly.Python.blank
    return `${value}\n`
  }

  Blockly.Python.raw_block = function (block) {
    return `${block.getFieldValue('TEXT')}\n`
  }

  Blockly.Python.constants_ellipsis = function () {
    return ['...', Blockly.Python.ORDER_ATOMIC]
  }

  Blockly.Python.variables_set_multiple = function (block) {
    // Create a list with any number of elements of any type.
    const value =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      Blockly.Python.blank
    const targets = new Array(block.targetCount_)
    if (block.targetCount_ === 1 && block.simpleTarget_) {
      targets[0] = Blockly.Python.variableDB_.getName(
        block.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE
      )
    } else {
      for (let i = 0; i < block.targetCount_; i++) {
        targets[i] =
          Blockly.Python.valueToCode(
            block,
            `TARGET${i}`,
            Blockly.Python.ORDER_NONE
          ) || Blockly.Python.blank
      }
    }
    return `${targets.join(' = ')} = ${value}\n`
  }

  Blockly.Python.variables_set_global = function (block) {
    // Create a list with any number of elements of any type.
    const elements = new Array(block.nameCount_)
    for (let i = 0; i < block.nameCount_; i++) {
      elements[i] = Blockly.Python.variableDB_.getName(
        block.getFieldValue(`NAME${i}`),
        Blockly.Variables.NAME_TYPE
      )
    }
    return `global ${elements.join(', ')}\n`
  }

  Blockly.Python.variables_delete = function (block) {
    // Create a list with any number of elements of any type.
    const elements = new Array(block.targetCount_)
    for (let i = 0; i < block.targetCount_; i++) {
      elements[i] =
        Blockly.Python.valueToCode(
          block,
          `TARGET${i}`,
          Blockly.Python.ORDER_NONE
        ) || Blockly.Python.blank
    }
    return `del ${elements.join(', ')}\n`
  }

  Blockly.Python.input_block = function () {
    const code = 'input()'
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.input_prompt_block = function (block) {
    const valuePrompt = Blockly.Python.valueToCode(
      block,
      'PROMPT',
      Blockly.Python.ORDER_NONE
    )
    const code = `input(${valuePrompt})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.controls_whileElse = function (block) {
    const until = block.getFieldValue('MODE') === 'UNTIL'
    let argument0 =
      Blockly.Python.valueToCode(
        block,
        'BOOL',
        until ? Blockly.Python.ORDER_LOGICAL_NOT : Blockly.Python.ORDER_NONE
      ) || 'False'
    let branchBody = Blockly.Python.statementToCode(block, 'DO')
    branchBody =
      Blockly.Python.addLoopTrap(branchBody, block) || Blockly.Python.PASS
    const branchElse =
      Blockly.Python.statementToCode(block, 'ELSE') || Blockly.Python.PASS
    if (until) {
      argument0 = `not ${argument0}`
    }
    return `while ${argument0}\n${branchBody}else:\n${branchElse}`
  }

  Blockly.Python.controls_forElse = function (block) {
    const argument0 = Blockly.Python.variableDB_.getName(
      block.getFieldValue('VAR'),
      Blockly.VARIABLE_CATEGORY_NAME
    )
    const argument1 =
      Blockly.Python.valueToCode(
        block,
        'LIST',
        Blockly.Python.ORDER_RELATIONAL
      ) || Blockly.Python.blank
    const branchBody =
      Blockly.Python.statementToCode(block, 'DO') || Blockly.Python.PASS
    const branchElse =
      Blockly.Python.statementToCode(block, 'ELSE') || Blockly.Python.PASS
    return `for ${argument0} in ${argument1}:\n${branchBody}else:\n${branchElse}`
  }

  Blockly.Python.math_number_imaginary = function (block) {
    let code = Number(block.getFieldValue('NUM'))
    let order
    if (code === Infinity) {
      code = 'complex("infj")'
      order = Blockly.Python.ORDER_FUNCTION_CALL
    } else if (code === -Infinity) {
      code = '-complex("infj")'
      order = Blockly.Python.ORDER_UNARY_SIGN
    } else {
      order = Blockly.Python.ORDER_ATOMIC
    }
    return [`${code}j`, order]
  }

  Blockly.Python.math_on_two = function (block) {
    const valueFunctionName = Blockly.Python.valueToCode(
      block,
      'OP',
      Blockly.Python.ORDER_NONE
    )
    const valueFunctionNumber1 = Blockly.Python.valueToCode(
      block,
      'NUMBER1',
      Blockly.Python.ORDER_NONE
    )
    const valueFunctionNumber2 = Blockly.Python.valueToCode(
      block,
      'NUMBER2',
      Blockly.Python.ORDER_NONE
    )
    let code = ''
    if (valueFunctionName === 'AVERAGE') {
      code = `(${valueFunctionNumber1} / ${valueFunctionNumber2})`
    } else if (valueFunctionName === 'MAX') {
      code = `max(${valueFunctionNumber1}, ${valueFunctionNumber2})`
    } else {
      code = `min(${valueFunctionNumber1}, ${valueFunctionNumber2})`
    }
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.math_on_set = function (block) {
    // Math functions for set.
    const func = block.getFieldValue('OP')
    const set =
      Blockly.Python.valueToCode(block, 'SET', Blockly.Python.ORDER_NONE) ||
      '[]'
    let code
    switch (func) {
      case 'SUM':
        code = `sum(${set})`
        break
      case 'MIN':
        code = `min(${set})`
        break
      case 'MAX':
        code = `max(${set})`
        break
      case 'AVERAGE':
        Blockly.Python.definitions_.from_numbers_import_Number =
          'from numbers import Number'
        code = `${Blockly.Python.provideFunction_('math_mean', [
          `def ${Blockly.Python.FUNCTION_NAME_PLACEHOLDER_}(mySet):`,
          '  localList = [e for e in mySet if isinstance(e, Number)]',
          '  if not localList: return',
          '  return float(sum(localList)) / len(localList)'
        ])}(${set})`
        break
      default:
        throw Error(`Unknown operator: ${func}`)
    }
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.math_integer_division = function (block) {
    // Integer quotient computation.
    const argument0 =
      Blockly.Python.valueToCode(
        block,
        'DIVIDEND',
        Blockly.Python.ORDER_MULTIPLICATIVE
      ) || '0'
    const argument1 =
      Blockly.Python.valueToCode(
        block,
        'DIVISOR',
        Blockly.Python.ORDER_MULTIPLICATIVE
      ) || '0'
    const code = `${argument0} // ${argument1}`
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE]
  }

  Blockly.Python.math_integer_divmod = function (block) {
    // Integer quotient computation.
    const argument0 =
      Blockly.Python.valueToCode(
        block,
        'DIVIDEND',
        Blockly.Python.ORDER_MULTIPLICATIVE
      ) || '0'
    const argument1 =
      Blockly.Python.valueToCode(
        block,
        'DIVISOR',
        Blockly.Python.ORDER_MULTIPLICATIVE
      ) || '0'
    const code = `divmod(${argument0}, ${argument1})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.math_bitwise_arithmetic = function (block) {
    // Basic arithmetic operators, and power.
    const OPERATORS = {
      AND: [' & ', Blockly.Python.ORDER_BITWISE_AND],
      OR: [' | ', Blockly.Python.ORDER_BITWISE_OR],
      XOR: [' ^ ', Blockly.Python.ORDER_BITWISE_XOR],
      LEFT_SHIFT: [' << ', Blockly.Python.ORDER_BITWISE_SHIFT],
      RIGHT_SHIFT: [' >> ', Blockly.Python.ORDER_BITWISE_SHIFT]
    }
    const tuple = OPERATORS[block.getFieldValue('OP')]
    const operator = tuple[0]
    const order = tuple[1]
    const argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0'
    const argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0'
    const code = argument0 + operator + argument1
    return [code, order]
  }

  Blockly.Python.math_bitwise_not = function (block) {
    const value =
      Blockly.Python.valueToCode(
        block,
        'VALUE',
        Blockly.Python.ORDER_BITWISE_NOT
      ) || '0'
    const code = `~${value}`
    return [code, Blockly.Python.ORDER_BITWISE_NOT]
  }

  Blockly.Python.math_radix = function (block) {
    const value =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) || 0
    const RADIX_NAMES = {
      BIN: ['bin', 'b'],
      OCT: ['oct', 'o'],
      HEX: ['hex', 'x']
    }
    const radix = RADIX_NAMES[block.getFieldValue('RADIX')]
    const hasPrefix = block.getFieldValue('PREFIX') === 'WITH'
    if (hasPrefix) {
      return [`${radix[0]}(${value})`, Blockly.Python.ORDER_FUNCTION_CALL]
    }
    return [
      `format(${value}, '${radix[1]}')`,
      Blockly.Python.ORDER_FUNCTION_CALL
    ]
  }

  Blockly.Python.text_concat = function (block) {
    const argument0 = Blockly.Python.valueToCode(
      block,
      'a',
      Blockly.Python.ORDER_NONE
    )
    const argument1 = Blockly.Python.valueToCode(
      block,
      'b',
      Blockly.Python.ORDER_NONE
    )
    const code = `${argument0} + ${argument1}`
    return [code, Blockly.Python.ORDER_ADDITIVE]
  }

  Blockly.Python.text_repeat = function (block) {
    const value = Blockly.Python.valueToCode(
      block,
      'TEXT',
      Blockly.Python.ORDER_NONE
    )
    const times = Blockly.Python.valueToCode(
      block,
      'TIMES',
      Blockly.Python.ORDER_NONE
    )
    const code = `${value} * ${times}`
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE]
  }

  Blockly.Python.text_chr = function (block) {
    const value = Blockly.Python.valueToCode(
      block,
      'VALUE',
      Blockly.Python.ORDER_NONE
    )
    const code = `chr(${value})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.text_ord = function (block) {
    const value = Blockly.Python.valueToCode(
      block,
      'VALUE',
      Blockly.Python.ORDER_NONE
    )
    const code = `ord(${value})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  // Blockly.Python.text_getSubstring = sliceFunctionFactory('string', "''")

  Blockly.Python.lists_join = function (block) {
    const valueValue = Blockly.Python.valueToCode(
      block,
      'VALUE',
      Blockly.Python.ORDER_NONE
    )
    const valueDelimiter = Blockly.Python.valueToCode(
      block,
      'DELIMITER',
      Blockly.Python.ORDER_NONE
    )
    const code = `${valueDelimiter}.join(${valueValue})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.lists_map = function (block) {
    const valueValue = Blockly.Python.valueToCode(
      block,
      'VALUE',
      Blockly.Python.ORDER_NONE
    )
    const valueFunc = Blockly.Python.valueToCode(
      block,
      'FUNC',
      Blockly.Python.ORDER_NONE
    )
    const code = `map(${valueFunc}, ${valueValue})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.lists_concat = function (block) {
    const argument0 =
      Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_NONE) || null
    const argument1 =
      Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_NONE) || null
    const code = `${argument0} + ${argument1}`
    return [code, Blockly.Python.ORDER_ADDITIVE]
  }

  Blockly.Python.range_create = function (block) {
    const start =
      Blockly.Python.valueToCode(block, 'START', Blockly.Python.ORDER_NONE) ||
      '0'
    const stop =
      Blockly.Python.valueToCode(block, 'STOP', Blockly.Python.ORDER_NONE) ||
      'None'
    const step =
      Blockly.Python.valueToCode(block, 'STEP', Blockly.Python.ORDER_NONE) ||
      '1'
    const code = `range(${start}, ${stop}, ${step})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  // Blockly.Python.lists_getSublist = sliceFunctionFactory('list', '[]')

  Blockly.Python.lists_repeat_times = function (block) {
    const value = Blockly.Python.valueToCode(
      block,
      'VALUE',
      Blockly.Python.ORDER_NONE
    )
    const times = Blockly.Python.valueToCode(
      block,
      'TIMES',
      Blockly.Python.ORDER_NONE
    )
    const code = `${value} * ${times}`
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE]
  }

  Blockly.Python.dot_block = function (block) {
    const valuePrefix = Blockly.Python.valueToCode(
      block,
      'prefix',
      Blockly.Python.ORDER_NONE
    )
    const valueSuffix = Blockly.Python.valueToCode(
      block,
      'suffix',
      Blockly.Python.ORDER_NONE
    )
    const code = `${valuePrefix}.${valueSuffix}`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.type_get = function (block) {
    const value = Blockly.Python.valueToCode(
      block,
      'VAR',
      Blockly.Python.ORDER_ATOMIC
    )
    return [`type(${value})`, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.type_var = function (block) {
    const valueType = block.getFieldValue('TYPE')
    const code = valueType
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.type_convert = function (block) {
    const valueType = block.getFieldValue('TYPE')
    const value = Blockly.Python.valueToCode(
      block,
      'VAR',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `${valueType}(${value})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.logic_object_compare = function (block) {
    const OPERATORS = {
      IS: 'is',
      IS_NOT: 'is not'
    }
    const operator = OPERATORS[block.getFieldValue('OP')]
    const order = Blockly.Python.ORDER_RELATIONAL
    const argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0'
    const argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0'
    const code = `${argument0} ${operator} ${argument1}`
    return [code, order]
  }

  Blockly.Python.logic_object_in = function (block) {
    const OPERATORS = {
      IN: 'in',
      NOT_IN: 'not in'
    }
    const operator = OPERATORS[block.getFieldValue('OP')]
    const order = Blockly.Python.ORDER_RELATIONAL
    const argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0'
    const argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0'
    const code = `${argument0} ${operator} ${argument1}`
    return [code, order]
  }

  Blockly.Python.logic_sets_compare = function (block) {
    const OPERATORS = {
      GT: '>',
      GTE: '>=',
      LT: '<',
      LTE: '<='
    }
    const operator = OPERATORS[block.getFieldValue('OP')]
    const order = Blockly.Python.ORDER_RELATIONAL
    const argument0 = Blockly.Python.valueToCode(block, 'A', order) || '{}'
    const argument1 = Blockly.Python.valueToCode(block, 'B', order) || '{}'
    const code = `${argument0} ${operator} ${argument1}`
    return [code, order]
  }

  Blockly.Python.logic_iterable_check = function (block) {
    const FUNC_NAME = {
      ANY: 'any',
      ALL: 'all'
    }
    const func = FUNC_NAME[block.getFieldValue('FUNC')]
    const value =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      'None'
    const code = `${func}(${value})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.logic_debug = function (_block) {
    return ['__debug__', Blockly.Python.ORDER_ATOMIC]
  }

  Blockly.Python.sets_create_with = function (block) {
    // Create a set with any number of elements of any type.
    if (block.itemCount_ === 0) {
      return ['set()', Blockly.Python.ORDER_FUNCTION_CALL]
    }
    const elements = new Array(block.itemCount_)
    for (let i = 0; i < block.itemCount_; i++) {
      elements[i] =
        Blockly.Python.valueToCode(
          block,
          `ADD${i}`,
          Blockly.Python.ORDER_NONE
        ) || Blockly.Python.blank
    }
    const code = `{${elements.join(', ')}}`
    return [code, Blockly.Python.ORDER_COLLECTION]
  }

  Blockly.Python.sets_arithmetic = function (block) {
    // Basic arithmetic operators, and power.
    const OPERATORS = {
      AND: [' & ', Blockly.Python.ORDER_BITWISE_AND],
      OR: [' | ', Blockly.Python.ORDER_BITWISE_OR],
      XOR: [' ^ ', Blockly.Python.ORDER_BITWISE_XOR],
      MINUS: [' - ', Blockly.Python.ORDER_BITWISE_XOR]
    }
    const tuple = OPERATORS[block.getFieldValue('OP')]
    const operator = tuple[0]
    const order = tuple[1]
    const argument0 = Blockly.Python.valueToCode(block, 'A', order) || 'set()'
    const argument1 = Blockly.Python.valueToCode(block, 'B', order) || 'set()'
    const code = argument0 + operator + argument1
    return [code, order]
  }

  Blockly.Python.sets_size = function (block) {
    const set =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      'set()'
    return [`len(${set})`, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.sets_change = function (block) {
    const FUNCTION = {
      ADD: 'add',
      REMOVE: 'discard'
    }
    const set =
      Blockly.Python.valueToCode(block, 'SET', Blockly.Python.ORDER_NONE) ||
      'set()'
    const func =
      Blockly.Python.valueToCode(block, 'FUNC', Blockly.Python.ORDER_NONE) ||
      'add'
    const item =
      Blockly.Python.valueToCode(block, 'ITEM', Blockly.Python.ORDER_NONE) || ''
    return [
      `${set}.${FUNCTION[func]}(${item})`,
      Blockly.Python.ORDER_FUNCTION_CALL
    ]
  }

  Blockly.Python.sets_isEmpty = function (block) {
    const set =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      'set()'
    const code = `not len(${set})`
    return [code, Blockly.Python.ORDER_LOGICAL_NOT]
  }

  Blockly.Python.sets_pop = function (block) {
    const set =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      'set()'
    return [`${set}.pop()`, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.tuples_create_with = function (block) {
    // Create a tuple with any number of elements of any type.
    const elements = new Array(block.itemCount_)
    for (let i = 0; i < block.itemCount_; i++) {
      elements[i] =
        Blockly.Python.valueToCode(
          block,
          `ADD${i}`,
          Blockly.Python.ORDER_NONE
        ) || Blockly.Python.blank
    }
    let requiredComma = ''
    if (block.itemCount_ === 1) {
      requiredComma = ', '
    }
    const code = `(${elements.join(', ')}${requiredComma})`
    return [code, Blockly.Python.ORDER_COLLECTION]
  }

  Blockly.Python.tuples_size = function (block) {
    const tuple =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      '()'
    return [`len(${tuple})`, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.tuples_isEmpty = function (block) {
    const set =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      '()'
    const code = `not len(${set})`
    return [code, Blockly.Python.ORDER_LOGICAL_NOT]
  }

  Blockly.Python.tuples_concat = function (block) {
    const argument0 = Blockly.Python.valueToCode(
      block,
      'A',
      Blockly.Python.ORDER_NONE
    )
    const argument1 = Blockly.Python.valueToCode(
      block,
      'B',
      Blockly.Python.ORDER_NONE
    )
    const code = `${argument0} + ${argument1}`
    return [code, Blockly.Python.ORDER_ADDITIVE]
  }

  Blockly.Python.tuples_repeat = function (block) {
    const value = Blockly.Python.valueToCode(
      block,
      'Tuple',
      Blockly.Python.ORDER_NONE
    )
    const times = Blockly.Python.valueToCode(
      block,
      'TIMES',
      Blockly.Python.ORDER_NONE
    )
    const code = `${value} * ${times}`
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE]
  }

  Blockly.Python.tuples_getIndex = function (block) {
    const where = block.getFieldValue('WHERE') || 'FROM_START'
    const tupleOrder =
      where === 'RANDOM'
        ? Blockly.Python.ORDER_NONE
        : Blockly.Python.ORDER_MEMBER
    const tuple = Blockly.Python.valueToCode(block, 'VALUE', tupleOrder) || '[]'
    let at = 0
    switch (where) {
      case 'FIRST':
        return [`${tuple}[0]`, Blockly.Python.ORDER_MEMBER]
      case 'LAST':
        return [`${tuple}[-1]`, Blockly.Python.ORDER_MEMBER]
      case 'FROM_START':
        at = Blockly.Python.getAdjustedInt(block, 'AT')
        return [`${tuple}[${at}]`, Blockly.Python.ORDER_MEMBER]
      case 'FROM_END':
        at = Blockly.Python.getAdjustedInt(block, 'AT', 1, true)
        return [`${tuple}[${at}]`, Blockly.Python.ORDER_MEMBER]
      case 'RANDOM':
        Blockly.Python.definitions_.import_random = 'import random'
        return [`random.choice(${tuple})`, Blockly.Python.ORDER_FUNCTION_CALL]
    }
    throw Error('Unhandled combination (tuples_getIndex).')
  }

  // Blockly.Python.tuples_getSubtuple = sliceFunctionFactory('tuple', '()')

  Blockly.Python.dicts_create_with = function (block) {
    const elements = new Array(block.itemCount_)
    for (let i = 0; i < block.itemCount_; i++) {
      const child = block.getInputTargetBlock(`ADD${i}`)
      if (child === null || child.type !== 'dicts_pair') {
        elements[i] = `${Blockly.Python.blank}: ${Blockly.Python.blank}`
        continue
      }
      const key =
        Blockly.Python.valueToCode(child, 'KEY', Blockly.Python.ORDER_NONE) ||
        Blockly.Python.blank
      const value =
        Blockly.Python.valueToCode(child, 'VALUE', Blockly.Python.ORDER_NONE) ||
        Blockly.Python.blank
      elements[i] = `${key}: ${value}`
    }
    const code = `{${elements.join(', ')}}`
    return [code, Blockly.Python.ORDER_COLLECTION]
  }

  Blockly.Python.dicts_size = function (block) {
    const dict =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      '{}'
    return [`len(${dict})`, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.dicts_getKey = function (block) {
    const dict =
      Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_NONE) ||
      '{}'
    const key =
      Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_NONE) || ''
    return [`${dict}[${key}]`, Blockly.Python.ORDER_MEMBER]
  }

  Blockly.Python.dicts_setKey = function (block) {
    const dict =
      Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_NONE) ||
      '{}'
    const key =
      Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_NONE) || ''
    const value =
      Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_NONE) || ''
    return [`${dict}[${key}] = ${value}`, Blockly.Python.ORDER_ATOMIC]
  }

  Blockly.Python.dicts_pop = function (block) {
    const dict =
      Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_NONE) ||
      '{}'
    const key =
      Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_NONE) || ''
    return [`${dict}.pop(${key})`, Blockly.Python.ORDER_FUNCTION_CALL]
  }
}
