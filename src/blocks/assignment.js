export default function assignment (Blockly) {
  Blockly.Blocks.set_complex = {
    init: function () {
      this.appendValueInput('real').setCheck('Number')
      this.appendValueInput('imagine').setCheck('Number').appendField('+')
      this.appendDummyInput().appendField('j')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true, 'Number')
      this.setColour(65)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.binary_type = {
    init: function () {
      this.appendValueInput('anything')
        .setCheck(['String', 'Number'])
        .appendField('转化为二进制')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true, 'Byte')
      this.setColour(195)
    }
  }

  Blockly.Blocks.globall = {
    init: function () {
      this.appendValueInput('global').setCheck(null).appendField('global')
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.input = {
    init: function () {
      this.appendValueInput('inputs')
        .setCheck(['Boolean', 'Array', 'String', 'Number'])
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField('input')
      this.appendDummyInput()
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true, ['Boolean', 'Array', 'String', 'Number'])
      this.setColour(230)
      this.setTooltip('输入')
      this.setHelpUrl(
        'https://docs.python.org/3.10/library/functions.html#input'
      )
    }
  }

  // empty input
  Blockly.Blocks.empty_input = {
    init: function () {
      this.appendDummyInput().appendField('input()')
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  // raw input
  Blockly.Blocks.raw_input = {
    init: function () {
      this.appendDummyInput().appendField('raw_input()')
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  // global
  Blockly.Blocks.globall = {
    init: function () {
      this.appendValueInput('global').setCheck(null).appendField('global')
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
