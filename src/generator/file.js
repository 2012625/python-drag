export default function file (Blockly) {
// openfileff
  Blockly.Python.open = function (block) {
    const valuetxt = Blockly.Python.valueToCode(
      block,
      'txt',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuemodule = Blockly.Python.valueToCode(
      block,
      'module',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'open(' + valuetxt + ',' + valuemodule + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // readfile
  Blockly.Python.readfile = function (block) {
    const valuereadname = Blockly.Python.valueToCode(
      block,
      'readname',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = valuereadname + '.read()'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // control_readfile
  Blockly.Python.control_readfile = function (block) {
    const valuecontrolreadname = Blockly.Python.valueToCode(
      block,
      'controlreadname',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuecontrolnum = Blockly.Python.valueToCode(
      block,
      'controlnum',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = valuecontrolreadname + '.read(' + valuecontrolnum + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // readline
  Blockly.Python.readline = function (block) {
    const valuereadline = Blockly.Python.valueToCode(
      block,
      'readline',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = valuereadline + '.readline()'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // closefile
  Blockly.Python.closefile = function (block) {
    const valueclosefile = Blockly.Python.valueToCode(
      block,
      'closefile',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = valueclosefile + '.close()'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // writefile
  Blockly.Python.writefile = function (block) {
    const valuewritefile = Blockly.Python.valueToCode(
      block,
      'writefile',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuewritename = Blockly.Python.valueToCode(
      block,
      'writename',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = valuewritefile + '.write(' + valuewritename + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // removefile
  Blockly.Python.removefile = function (block) {
    const valueremovefile = Blockly.Python.valueToCode(
      block,
      'removefile',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'os.remove(' + valueremovefile + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // remove_all_file
  Blockly.Python.remove_all_file = function (block) {
    const valueremoveall = Blockly.Python.valueToCode(
      block,
      'removeall',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'os.rmdir(' + valueremoveall + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // if_exist_file
  Blockly.Python.if_exist_file = function (block) {
    const valueexistfile = Blockly.Python.valueToCode(
      block,
      'existfile',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'os.path.exists(' + valueexistfile + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
}
