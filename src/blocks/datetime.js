export default function datetime (Blockly) {
// datetime_now
  Blockly.Blocks.datetime_now = {
    init: function () {
      this.appendDummyInput().appendField('datetime.datetime.now()')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // datetime
  Blockly.Blocks.datetime = {
    init: function () {
      this.appendDummyInput().appendField('datetime.datetime(')
      this.appendValueInput('dateyear').setCheck('Number')
      this.appendValueInput('datemonth').setCheck('Number').appendField(',')
      this.appendValueInput('dateday').setCheck('Number').appendField(',')
      this.appendDummyInput().appendField(')')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // strftime
  Blockly.Blocks.strftime = {
    init: function () {
      this.appendValueInput('dateobject').setCheck(null)
      this.appendValueInput('datetype').setCheck(null).appendField('.strftime("')
      this.appendDummyInput().appendField('")')
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
