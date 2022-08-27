export default function exception (Blockly) {
// try
  Blockly.Python.try_sentence = function () {
    return 'try:\n'
  }
  // except
  Blockly.Python.except_sentence = function () {
    return 'except:\n'
  }
  // except add
  Blockly.Python.except_add = function (block) {
    const valueexceptadd = Blockly.Python.valueToCode(
      block,
      'except_add',
      Blockly.Python.ORDER_ATOMIC
    )
    return 'except ' + valueexceptadd + ':' + '\n'
  }
  // else
  Blockly.Python.else_sentence = function () {
    return 'else:\n'
  }
  // finally
  Blockly.Python.finally_sentence = function () {
    return 'finally:\n'
  }
  // raise
  Blockly.Python.raise_sentence = function (block) {
    const texterrorname = block.getFieldValue('errorname')
    const valueraiseerror = Blockly.Python.valueToCode(
      block,
      'raise_error',
      Blockly.Python.ORDER_ATOMIC
    )
    return 'raise ' + texterrorname + '(' + valueraiseerror + ')' + '\n'
  }
}
