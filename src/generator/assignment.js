export default function assignment (Blockly) {
  Blockly.Python.set_complex = function (block) {
    const numberReal =
    Blockly.Python.valueToCode(block, 'real', Blockly.Python.ORDER_ATOMIC) ||
    '0'
    const numberImagine =
    Blockly.Python.valueToCode(block, 'imagine', Blockly.Python.ORDER_ATOMIC) ||
    '1'
    return `${numberReal} + ${numberImagine}j`
  }

  Blockly.Python.binary_type = function (block) {
    const valueinput =
    Blockly.Python.valueToCode(
      block,
      'anything',
      Blockly.Python.ORDER_ATOMIC
    ) || 'None'
    const code = 'bytes' + '(' + valueinput + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.globall = function (block) {
    const valueglobal = Blockly.Python.valueToCode(
      block,
      'global',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'global ' + valueglobal
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.input = function (block) {
    const valueName =
    Blockly.Python.valueToCode(block, 'inputs', Blockly.Python.ORDER_ATOMIC) ||
    null
    const code = `input(${valueName})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  // empty input
  Blockly.Python.empty_input = function () {
    const code = 'input()'
    return [code, Blockly.Python.ORDER_NONE]
  }

  // raw input
  Blockly.Python.raw_input = function () {
    const code = 'raw_input()'
    return [code, Blockly.Python.ORDER_NONE]
  }
}
