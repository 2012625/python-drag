export default function iterator (Blockly) {
  Blockly.Blocks.iter = {
    init: function () {
      this.appendValueInput('list').setCheck('Array').appendField('iter')
      this.appendDummyInput()
      this.setOutput(true, 'Iterator')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.next = {
    init: function () {
      this.appendValueInput('iterator').setCheck('Iterator').appendField('next')
      this.appendDummyInput()
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.__iter__function = {
    init: function () {
      this.appendValueInput('iterator')
        .setCheck('Iterator')
        .appendField('__iter__')
      this.appendStatementInput('statement').setCheck(null)
      this.setOutput(true, 'Iterator')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.__next__function = {
    init: function () {
      this.appendValueInput('iterator')
        .setCheck('Iterator')
        .appendField('__next__')
      this.appendStatementInput('statement').setCheck(null)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.stopiterationmsg = {
    init: function () {
      this.appendDummyInput().appendField('StopIteration')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
}
