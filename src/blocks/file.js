export default function file (Blockly) {
// openfile
  Blockly.Blocks.open = {
    init: function () {
      this.appendValueInput('txt').setCheck('String').appendField('open')
      this.appendValueInput('module').setCheck('String').appendField('，')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(210)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // readfile
  Blockly.Blocks.readfile = {
    init: function () {
      this.appendValueInput('readname')
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
      this.appendDummyInput().appendField('.read')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(240)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // control_readfile
  Blockly.Blocks.control_readfile = {
    init: function () {
      this.appendValueInput('controlreadname')
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
      this.appendValueInput('controlnum').setCheck('Number').appendField('.read')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(165)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // readline
  Blockly.Blocks.readline = {
    init: function () {
      this.appendValueInput('readline').setCheck(null)
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('.readline')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(285)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // closefile
  Blockly.Blocks.closefile = {
    init: function () {
      this.appendValueInput('closefile').setCheck(null)
      this.appendDummyInput().appendField('.close')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(345)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // writefile
  Blockly.Blocks.writefile = {
    init: function () {
      this.appendValueInput('writefile')
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
      this.appendValueInput('writename')
        .setCheck('String')
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField('.write')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(195)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // removefiles
  Blockly.Blocks.removefile = {
    init: function () {
      this.appendValueInput('removefile')
        .setCheck('String')
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField('os.remove')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(30)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // remove_all_file
  Blockly.Blocks.remove_all_file = {
    init: function () {
      this.appendValueInput('removeall')
        .setCheck('String')
        .appendField('os.rmdir')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(270)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // if_exist_file
  Blockly.Blocks.if_exist_file = {
    init: function () {
      this.appendValueInput('existfile')
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('os.path.exists')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(75)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
}
