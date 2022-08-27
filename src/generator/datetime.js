export default function datetime (Blockly) {
// datetime_now
  Blockly.Python.datetime_now = function () {
    const code = 'datetime.datetime.now()'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // datetime
  Blockly.Python.datetime = function (block) {
    const valuedateyear = Blockly.Python.valueToCode(
      block,
      'dateyear',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuedatemonth = Blockly.Python.valueToCode(
      block,
      'datemonth',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuedateday = Blockly.Python.valueToCode(
      block,
      'dateday',
      Blockly.Python.ORDER_ATOMIC
    )
    const code =
    'datetime.datetime(' +
    valuedateyear +
    ',' +
    valuedatemonth +
    ',' +
    valuedateday +
    ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // strftime
  Blockly.Python.strftime = function (block) {
    const valuedateobject = Blockly.Python.valueToCode(
      block,
      'dateobject',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuedatetype = Blockly.Python.valueToCode(
      block,
      'datetype',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = valuedateobject + '.strftime("' + valuedatetype + '")'
    return [code, Blockly.Python.ORDER_NONE]
  }
}
