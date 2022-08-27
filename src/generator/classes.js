export default function classes (Blockly) {
  Blockly.Python.class_build = function (block) {
    const textName = block.getFieldValue('class_build_classname')
    const statementsName = Blockly.Python.statementToCode(
      block,
      'class_build_classcontent'
    )
    return 'class ' + textName + ':\n' + statementsName
  }

  Blockly.Python.class_method = function (block) {
    const textName1 = block.getFieldValue('class_method_methodname')
    const textName2 = block.getFieldValue('class_method_methodcontent')
    return textName1 + '.' + textName2 + '()' + '\n'
  }

  Blockly.Python.class_method_return = function (block) {
    const textName1 = block.getFieldValue('class_method_return_methodname')
    const textName2 = block.getFieldValue('class_method_return_methodcontent')
    const code = textName1 + '.' + textName2 + '()' + '\n'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.extend_class = function (block) {
    const valueFather = Blockly.Python.valueToCode(
      block,
      'father',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `extends ${valueFather}`
    return [code, Blockly.Python.ORDER_NONE]
  }
}
