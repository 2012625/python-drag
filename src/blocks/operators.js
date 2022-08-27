export default function operator (Blockly) {
  Blockly.Blocks.bitwise_operators = {
    init: function () {
      this.appendValueInput('bitwise_left_argument').setCheck('Number')
      this.appendValueInput('bitwise_right_argument')
        .setCheck('Number')
        .appendField(
          new Blockly.FieldDropdown([
            ['&', '&'],
            ['|', '|'],
            ['^', '^'],
            ['~', '~'],
            ['<<', '<<'],
            ['>>', '>>']
          ]),
          'bitwise_operator'
        )
      this.setInputsInline(true)
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.identity_operators = {
    init: function () {
      this.appendValueInput('identity_first_argument').setCheck(null)
      this.appendValueInput('identity_second_argument')
        .setCheck(null)
        .appendField(
          new Blockly.FieldDropdown([
            ['is', 'is'],
            ['is not', 'is not']
          ]),
          'identity_operator'
        )
      this.setInputsInline(true)
      this.setOutput(true, 'Boolean')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.assign_operator = {
    init: function () {
      this.appendValueInput('variable')
        .setCheck(['Boolean', 'Array', 'String', 'Number'])
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField('赋值')
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(
          new Blockly.FieldDropdown([
            ['=', '='],
            ['+=', '+='],
            ['-=', '-='],
            ['*=', '*='],
            ['/=', '/='],
            ['%=', '%='],
            ['**=', '**='],
            ['//=', '//='],
            ['&=', '&='],
            ['|=', '|='],
            ['^=', '^='],
            ['>>=', '>>='],
            ['<<=', '<<=']
          ]),
          'assignment_operators'
        )
      this.appendValueInput('value').setCheck(null)
      this.setOutput(true, ['Boolean', 'Array', 'String', 'Number'])
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setHelpUrl('https://www.w3school.com.cn/python/python_operators.asp')
    }
  }

  Blockly.Blocks.arithmetic_operator = {
    init: function () {
      this.appendValueInput('value1').setCheck(null)
      this.appendDummyInput().appendField(
        new Blockly.FieldDropdown([
          ['+', '+'],
          ['-', '-'],
          ['*', '*'],
          ['/', '/'],
          ['%', '%'],
          ['**', '**'],
          ['//', '//']
        ]),
        'operator'
      )
      this.appendValueInput('value2').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(225)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.in = {
    init: function () {
      this.appendValueInput('inBool')
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField('in')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(150)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
}
