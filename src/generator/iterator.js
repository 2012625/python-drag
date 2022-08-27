export default function iterator (Blockly) {
  Blockly.Python.iter = function (block) {
    const valueList = Blockly.Python.valueToCode(
      block,
      'list',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'iter(' + valueList + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.next = function (block) {
    const valueIterator = Blockly.Python.valueToCode(
      block,
      'iterator',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'next(' + valueIterator + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.__iter__function = function (block) {
    const valueIterator = Blockly.Python.valueToCode(
      block,
      'iterator',
      Blockly.Python.ORDER_ATOMIC
    )
    const statements = Blockly.Python.statementToCode(block, 'statement')
    const code = 'def ' + '__iter__(' + valueIterator + ')' + '\n' + statements

    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.__next__function = function (block) {
    const valueIterator = Blockly.Python.valueToCode(
      block,
      'iterator',
      Blockly.Python.ORDER_ATOMIC
    )
    const statements = Blockly.Python.statementToCode(block, 'statement')

    const code = 'def ' + '__next__(' + valueIterator + ')' + '\n' + statements

    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.stopiterationmsg = function () {
    return 'raise StopIteration'
  }
}
