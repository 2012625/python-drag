export default function operator (Blockly) {
  Blockly.Python.bitwise_operators = function (block) {
    let bitwiseLeftArgument = Blockly.Python.valueToCode(
      block,
      'bitwise_left_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    const bitwiseOperator = block.getFieldValue('bitwise_operator')
    let bitwiseRightArgument = Blockly.Python.valueToCode(
      block,
      'bitwise_right_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    if (bitwiseLeftArgument[0] === '(') {
      bitwiseLeftArgument = bitwiseLeftArgument.substring(
        1,
        bitwiseLeftArgument.length - 1
      )
    }
    if (bitwiseRightArgument[0] === '(') {
      bitwiseRightArgument = bitwiseRightArgument.substring(
        1,
        bitwiseRightArgument.length - 1
      )
    }
    const code = `${bitwiseLeftArgument} ${bitwiseOperator} ${bitwiseRightArgument}`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.identity_operators = function (block) {
    let identityFirstArgument = Blockly.Python.valueToCode(
      block,
      'identity_first_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    const identityOperator = block.getFieldValue('identity_operator')
    let identitySecondArgument = Blockly.Python.valueToCode(
      block,
      'identity_second_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    if (identityFirstArgument[0] === '(') {
      identityFirstArgument = identityFirstArgument.substring(
        1,
        identityFirstArgument.length - 1
      )
    }
    if (identitySecondArgument[0] === '(') {
      identitySecondArgument = identitySecondArgument.substring(
        1,
        identitySecondArgument.length - 1
      )
    }
    const code = `${identityFirstArgument} ${identityOperator} ${identitySecondArgument}`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.assign_operator = function (block) {
    const valueVariable =
    Blockly.Python.valueToCode(
      block,
      'variable',
      Blockly.Python.ORDER_ATOMIC
    ) || 'item'
    const dropdownAssignmentOperators = block.getFieldValue(
      'assignment_operators'
    )
    const valueName =
    Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC) ||
    '0'
    const code = `${valueVariable} ${dropdownAssignmentOperators} ${valueName}`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.arithmetic_operator = function (block) {
    const valueValue1 = Blockly.Python.valueToCode(
      block,
      'value1',
      Blockly.Python.ORDER_ATOMIC
    )
    const dropdownOperator = block.getFieldValue('operator')
    const valueValue2 = Blockly.Python.valueToCode(
      block,
      'value2',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = valueValue1 + ' ' + dropdownOperator + ' ' + valueValue2
    return [code, Blockly.Python.ORDER_NONE]
  }
  // member operator
  Blockly.Python.in = function (block) {
    const valueInbool = Blockly.Python.valueToCode(
      block,
      'inBool',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'in ' + valueInbool
    return [code, Blockly.Python.ORDER_NONE]
  }
}
