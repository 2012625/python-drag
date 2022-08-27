export default function re (Blockly) {
// findall
  Blockly.Python.find_all = function (block) {
    const findstr = Blockly.Python.valueToCode(
      block,
      'findstr',
      Blockly.Python.ORDER_ATOMIC
    )
    const findvalue = Blockly.Python.valueToCode(
      block,
      'findvalue',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 're.findall(' + findstr + ',' + findvalue + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // research
  Blockly.Python.search = function (block) {
    const valuesearchtype = Blockly.Python.valueToCode(
      block,
      'searchtype',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuesearchname = Blockly.Python.valueToCode(
      block,
      'searchname',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 're.search(' + valuesearchtype + ',' + valuesearchname + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // resplit
  Blockly.Python.resplit = function (block) {
    const valueresplittype = Blockly.Python.valueToCode(
      block,
      'resplittype',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueresplitname = Blockly.Python.valueToCode(
      block,
      'resplitname',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 're.split(' + valueresplittype + ',' + valueresplitname + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // resub
  Blockly.Python.sub = function (block) {
    const valuesubtype = Blockly.Python.valueToCode(
      block,
      'subtype',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuesubvalue = Blockly.Python.valueToCode(
      block,
      'subvalue',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuesubname = Blockly.Python.valueToCode(
      block,
      'subname',
      Blockly.Python.ORDER_ATOMIC
    )
    const code =
    're.sub(' + valuesubtype + ',' + valuesubvalue + ',' + valuesubname + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // recontrolsub
  Blockly.Python.control_sub = function (block) {
    const valuecontrolsubtype = Blockly.Python.valueToCode(
      block,
      'controlsubtype',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuecontrolsubvalue = Blockly.Python.valueToCode(
      block,
      'controlsubvalue',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuecontrolsubname = Blockly.Python.valueToCode(
      block,
      'controlsubname',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuesubtime = Blockly.Python.valueToCode(
      block,
      'subtime',
      Blockly.Python.ORDER_ATOMIC
    )
    const code =
    're.sub(' +
    valuecontrolsubtype +
    ',' +
    valuecontrolsubvalue +
    ',' +
    valuecontrolsubname +
    ',' +
    valuesubtime +
    ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
}
