export default function classes (Blockly) {
  Blockly.defineBlocksWithJsonArray([
    {
      type: 'class_build',
      message0: 'class %1 : %2',
      args0: [
        {
          type: 'field_input',
          name: 'class_build_classname',
          text: ''
        },
        {
          type: 'input_statement',
          name: 'class_build_classcontent'
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'class_method',
      message0: '%1 . %2',
      args0: [
        {
          type: 'field_input',
          name: 'class_method_methodname',
          text: '实例名'
        },
        {
          type: 'field_input',
          name: 'class_method_methodcontent',
          text: '方法名'
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'class_method_return',
      message0: '%1 . %2',
      args0: [
        {
          type: 'field_input',
          name: 'class_method_return_methodname',
          text: '实例名'
        },
        {
          type: 'field_input',
          name: 'class_method_return_methodcontent',
          text: '方法名'
        }
      ],
      output: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    }
  ])

  // 类继承
  Blockly.Blocks.extend_class = {
    init: function () {
      this.appendValueInput('father')
        .setCheck('Class')
        .appendField('parent Class')
      this.setOutput(true, 'Class')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip(
        'Inheritance allows us to define a Class that inherits all the methods and properties of another Class.'
      )
      this.setHelpUrl('https://www.w3school.com.cn/python/python_inheritance.asp')
    }
  }
}
