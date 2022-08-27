export default function exception (Blockly) {
  Blockly.defineBlocksWithJsonArray([
  // try
    {
      type: 'try_sentence',
      message0: 'try:',
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: '',
      helpUrl: ''
    },
    // except
    {
      type: 'except_sentence',
      message0: 'except:',
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: '',
      helpUrl: ''
    },
    // except add
    {
      type: 'except_add',
      message0: 'except %1 :',
      args0: [
        {
          type: 'input_value',
          name: 'except_add'
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: '',
      helpUrl: ''
    },
    // else
    {
      type: 'else_sentence',
      message0: 'else:',
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: '',
      helpUrl: ''
    },
    // finally
    {
      type: 'finally_sentence',
      message0: 'finally:',
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: '',
      helpUrl: ''
    },
    // raise
    {
      type: 'raise_sentence',
      message0: 'raise  %1 %2 ( %3 )',
      args0: [
        {
          type: 'input_dummy'
        },
        {
          type: 'field_input',
          name: 'errorname',
          text: 'error'
        },
        {
          type: 'input_value',
          name: 'raise_error',
          check: 'String'
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: '',
      helpUrl: ''
    }
  ])
}
