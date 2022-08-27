export default function dataType (Blockly) {
  Blockly.Python.dict_create_with = function (block) {
    // Create a list with any number of elements of any type.
    const elementskey = new Array(block.itemCount_)
    for (let i = 0; i < block.itemCount_; i++) {
      elementskey[i] =
        Blockly.Python.valueToCode(
          block,
          'ADD' + i,
          Blockly.Python.ORDER_NONE
        ) || 'None'
    }
    const elementsvalue = new Array(block.itemCount_)
    for (let i = 0; i < block.itemCount_; i++) {
      elementsvalue[i] =
        Blockly.Python.valueToCode(
          block,
          'value' + i,
          Blockly.Python.ORDER_NONE
        ) || 'None'
    }
    const elements = new Array(block.itemCount_)
    for (let i = 0; i < block.itemCount_; i++) {
      elements[i] = "'" + elementskey[i] + "':" + elementsvalue[i]
    }
    const code = '{' + elements.join(', ') + '}'
    return [code, Blockly.Python.ORDER_ATOMIC]
  }

  Blockly.Python.tuple = function (block) {
    // Create a list with any number of elements of any type.
    const elements = new Array(block.itemCount_)
    for (let i = 0; i < block.itemCount_; i++) {
      elements[i] =
        Blockly.Python.valueToCode(
          block,
          'ADD' + i,
          Blockly.Python.ORDER_NONE
        ) || 'None'
    }
    const code = '(' + elements.join(', ') + ')'
    return [code, Blockly.Python.ORDER_ATOMIC]
  }

  Blockly.Python.create_empty_set = function () {
    const code = 'set()'
    return [code, Blockly.Python.ORDER_NONE]
  }
  Blockly.Python.create_set_one = function (block) {
    const createTwoArgument = Blockly.Python.valueToCode(
      block,
      'create_set_one_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `set(${createTwoArgument})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.create_set_two = function (block) {
    const createOneArgument = Blockly.Python.valueToCode(
      block,
      'create_set_two_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `{${createOneArgument}}`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.del_set = function (block) {
    const delNameOfSet = Blockly.Python.valueToCode(
      block,
      'del_set_name_of_set',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `del ${delNameOfSet}`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.clear_set = function (block) {
    const clearNameOfSet = Blockly.Python.valueToCode(
      block,
      'clear_set_name_of_set',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `${clearNameOfSet}.clear()`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.set_function_of_num = function (block) {
    let setNumCaller = Blockly.Python.valueToCode(
      block,
      'set_function_of_num_caller',
      Blockly.Python.ORDER_ATOMIC
    )
    const setNumFunctionName = block.getFieldValue(
      'set_function_of_num_function_name'
    )
    const setNumElement = Blockly.Python.valueToCode(
      block,
      'set_function_of_num_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    if (setNumCaller[0] === '(') {
      setNumCaller = setNumCaller.substring(1, setNumCaller.length - 1)
    }
    const code =
      setNumElement[0] === '('
        ? `${setNumCaller}.${setNumFunctionName}${setNumElement}`
        : `${setNumCaller}.${setNumFunctionName}(${setNumElement})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.set_functions = function (block) {
    let setCaller = Blockly.Python.valueToCode(
      block,
      'set_functions_caller',
      Blockly.Python.ORDER_ATOMIC
    )
    const setFunctionName = block.getFieldValue('set_functions_function_name')
    const setArgument = Blockly.Python.valueToCode(
      block,
      'set_functions_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    if (setCaller[0] === '(') {
      setCaller = setCaller.substring(1, setCaller.length - 1)
    }
    const code =
      setArgument[0] === '('
        ? `${setCaller}.${setFunctionName}${setArgument}`
        : `${setCaller}.${setFunctionName}(${setArgument})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.global = function (block) {
    const valueGlobalvariable = Blockly.Python.valueToCode(
      block,
      'globalvariable',
      Blockly.Python.ORDER_ATOMIC
    )
    return `global ${valueGlobalvariable}\n`
  }
  Blockly.Python.type_value = function (block) {
    const valueType = Blockly.Python.valueToCode(
      block,
      'type',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueValue = Blockly.Python.valueToCode(
      block,
      'value',
      Blockly.Python.ORDER_NONE
    )
    const code = `${valueType}.${valueValue}`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.type_state = function (block) {
    const valueType =
      Blockly.Python.valueToCode(block, 'type', Blockly.Python.ORDER_ATOMIC) ||
      null
    const statementsName = Blockly.Python.statementToCode(block, 'state')
    const code = `${valueType}.${statementsName}`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.annotation_block = function (block) {
    const textAnnotation = block.getFieldValue('annotation')
    // TODO: Assemble Python into code variable.
    const code = `# ${textAnnotation}`
    return code
  }

  Blockly.Python.notes = function (block) {
    const textNote = block.getFieldValue('note') || ''
    return `'''${textNote}'''`
  }

  Blockly.Python.index1 = function (block) {
    const valueType =
      Blockly.Python.valueToCode(block, 'type', Blockly.Python.ORDER_ATOMIC) ||
      null
    const numberIndex =
      Blockly.Python.valueToCode(block, 'index', Blockly.Python.ORDER_ATOMIC) ||
      0
    const code = `${valueType}[${numberIndex}]`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.index2 = function (block) {
    const valueType =
      Blockly.Python.valueToCode(block, 'type', Blockly.Python.ORDER_ATOMIC) ||
      null
    const numberStart = block.getFieldValue('start') || 0
    const numberEnd = block.getFieldValue('end') || 1
    const code = `${valueType}[${numberStart} : ${numberEnd}]`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.type_specify = function (block) {
    const dropdownType = block.getFieldValue('type')
    const valueVariable =
      Blockly.Python.valueToCode(
        block,
        'variable',
        Blockly.Python.ORDER_ATOMIC
      ) || null
    const code = `${dropdownType}(${valueVariable})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.get_type = function (block) {
    const valueVariable =
      Blockly.Python.valueToCode(
        block,
        'variable',
        Blockly.Python.ORDER_ATOMIC
      ) || null
    const code = `type(${valueVariable})`
    return [code, Blockly.Python.ORDER_NONE]
  }
}
