export default function re (Blockly) {
  // findall
  Blockly.Blocks.find_all = {
    init: function () {
      this.appendValueInput('findstr').setCheck('String').appendField('findall')
      this.appendValueInput('findvalue').setCheck(null).appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // research
  Blockly.Blocks.search = {
    init: function () {
      this.appendValueInput('searchtype')
        .setCheck('String')
        .appendField('re.search')
      this.appendValueInput('searchname').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // resplit
  Blockly.Blocks.resplit = {
    init: function () {
      this.appendValueInput('resplittype')
        .setCheck('String')
        .appendField('re.split')
      this.appendValueInput('resplitname').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // resub
  Blockly.Blocks.sub = {
    init: function () {
      this.appendValueInput('subtype').setCheck('String').appendField('re.sub')
      this.appendValueInput('subvalue').setCheck('String')
      this.appendValueInput('subname').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // recontrolsub
  Blockly.Blocks.control_sub = {
    init: function () {
      this.appendValueInput('controlsubtype')
        .setCheck('String')
        .appendField('re.sub')
      this.appendValueInput('controlsubvalue').setCheck('String')
      this.appendValueInput('controlsubname').setCheck(null)
      this.appendValueInput('subtime').setCheck('Number')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
}
