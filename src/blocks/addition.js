export default function addition (Blockly) {
  Blockly.defineBlocksWithJsonArray([
    {
      type: 'function_length_temporary',
      message0: 'len %1',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: [
            'String',
            'Array',
            'List',
            'Dictionary',
            'Set',
            'Tuple',
            'Bytes',
            'Range'
          ]
        }
      ],
      output: ['Number', 'Boolean'],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'raw_empty',
      message0: '%1',
      args0: [{ type: 'input_value', name: 'VALUE' }],
      inputsInline: false,
      previousStatement: null,
      nextStatement: null,
      colour: '#777777',
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'raw_block',
      message0: 'raw_block %1',
      args0: [
        {
          type: 'field_label_serializable',
          name: 'TEXT',
          text: ''
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: '#777777'
    },
    {
      type: 'constants_ellipsis',
      message0: '...',
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: '#777777'
    },
    {
      type: 'input_block',
      message0: 'input',
      inputsInline: false,
      output: 'String',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '%{BKY_TEXT_INPUT_TOOLTIP}',
      helpUrl: ''
    },
    {
      type: 'input_prompt_block',
      message0: 'input_prompt %1',
      args0: [
        {
          type: 'input_value',
          name: 'PROMPT'
        }
      ],
      inputsInline: true,
      output: 'String',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '%{BKY_TEXT_INPUT_TOOLTIP}',
      helpUrl: ''
    },
    {
      type: 'controls_whileElse',
      message0: 'whileElse %1 %2',
      args0: [
        {
          type: 'field_dropdown',
          name: 'MODE',
          options: [
            ['%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}', 'WHILE'],
            ['%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}', 'UNTIL']
          ]
        },
        {
          type: 'input_value',
          name: 'BOOL',
          check: 'Boolean'
        }
      ],
      message1: '%{BKY_CONTROLS_REPEAT_INPUT_DO} %1',
      args1: [
        {
          type: 'input_statement',
          name: 'DO'
        }
      ],
      message2: '%{BKY_CONTROLS_REPEAT_INPUT_ELSE} %1',
      args2: [
        {
          type: 'input_statement',
          name: 'ELSE'
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#FFAB1B'
    },
    {
      type: 'controls_forElse',
      message0: '%{BKY_CONTROLS_FOREACH_TITLE}',
      args0: [
        {
          type: 'field_variable',
          name: 'VAR',
          variable: null
        },
        {
          type: 'input_value',
          name: 'LIST',
          check: 'Array'
        }
      ],
      message1: '%{BKY_CONTROLS_REPEAT_INPUT_DO} %1',
      args1: [
        {
          type: 'input_statement',
          name: 'DO'
        }
      ],
      message2: '%{BKY_CONTROLS_REPEAT_INPUT_ELSE} %1',
      args2: [
        {
          type: 'input_statement',
          name: 'ELSE'
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: '#FFAB1B',
      helpUrl: '%{BKY_CONTROLS_WHILEUNTIL_HELPURL}',
      extensions: ['controls_whileUntil_tooltip']
    },
    {
      type: 'math_number_imaginary',
      message0: '%1j',
      args0: [
        {
          type: 'field_number',
          name: 'NUM',
          value: 0
        }
      ],
      output: 'Number',
      colour: '#009432'
    },
    {
      type: 'math_on_two',
      message0: '%1 %2, %3',
      args0: [
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['%{BKY_MATH_ONTWO_OPERATOR_MIN}', 'MIN'],
            ['%{BKY_MATH_ONTWO_OPERATOR_MAX}', 'MAX'],
            ['%{BKY_MATH_ONTWO_OPERATOR_AVERAGE}', 'AVERAGE']
          ]
        },
        {
          type: 'input_value',
          name: 'NUMBER1',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'NUMBER2',
          check: 'Number'
        }
      ],
      inputsInline: true,
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#009432',
      helpUrl: '%{BKY_MATH_ONTWO_HELPURL}',
      mutator: 'math_modes_of_list_mutator',
      extensions: ['math_op_tooltip']
    },
    {
      type: 'math_on_set',
      message0: '%1 %2',
      args0: [
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['%{BKY_MATH_ONSET_OPERATOR_SUM}', 'SUM'],
            ['%{BKY_MATH_ONSET_OPERATOR_MIN}', 'MIN'],
            ['%{BKY_MATH_ONSET_OPERATOR_MAX}', 'MAX'],
            ['%{BKY_MATH_ONSET_OPERATOR_AVERAGE}', 'AVERAGE']
          ]
        },
        {
          type: 'input_value',
          name: 'SET'
        }
      ],
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: '#B53471',
      extensions: ['math_op_tooltip']
    },
    {
      type: 'math_integer_division',
      message0: '%1 // %2',
      args0: [
        {
          type: 'input_value',
          name: 'DIVIDEND',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'DIVISOR',
          check: 'Number'
        }
      ],
      inputsInline: true,
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#009432',
      tooltip: '%{BKY_MATH_INTEGER_DIVISION_TOOLTIP}'
    },
    {
      type: 'math_integer_divmod',
      message0: '%{BKY_MATH_INTEGER_DIVMOD_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'DIVIDEND',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'DIVISOR',
          check: 'Number'
        }
      ],
      inputsInline: true,
      output: 'Tuple',
      previousStatement: null,
      nextStatement: null,
      colour: '#009432',
      tooltip: '%{BKY_MATH_INTEGER_DIVMOD_TOOLTIP}'
    },
    {
      type: 'math_bitwise_arithmetic',
      message0: '%1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'A',
          check: 'Number'
        },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['&', 'AND'],
            ['|', 'OR'],
            ['^', 'XOR'],
            ['<<', 'LEFT_SHIFT'],
            ['>>', 'RIGHT_SHIFT']
          ]
        },
        {
          type: 'input_value',
          name: 'B',
          check: 'Number'
        }
      ],
      inputsInline: true,
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#009432'
    },
    {
      type: 'math_bitwise_not',
      message0: '%{BKY_MATH_BITWISE_NOT}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Number'
        }
      ],
      inputsInline: true,
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#009432'
    },
    {
      type: 'math_radix',
      message0: '%{BKY_MATH_RADIX_VALUE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Number'
        }
      ],
      message1: '%{BKY_MATH_RADIX_OPTIONS} %1',
      args1: [
        {
          type: 'field_dropdown',
          name: 'RADIX',
          options: [
            ['%{BKY_MATH_RADIX_BIN}', 'BIN'],
            ['%{BKY_MATH_RADIX_OCT}', 'OCT'],
            ['%{BKY_MATH_RADIX_HEX}', 'HEX']
          ]
        },
        {
          type: 'field_dropdown',
          name: 'PREFIX',
          options: [
            ['%{BKY_MATH_RADIX_WITH_PREFIX}', 'WITH'],
            ['%{BKY_MATH_RADIX_WITHOUT_PREFIX}', 'WITHOUT']
          ]
        }
      ],
      inputsInline: true,
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#009432'
    },
    {
      type: 'text_split',
      message0: '%{BKY_TEXT_SPLIT_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'TEXT',
          check: 'String'
        },
        {
          type: 'input_value',
          name: 'DELIMITER',
          check: 'String'
        }
      ],
      inputsInline: true,
      output: 'Array',
      previousStatement: null,
      nextStatement: null,
      colour: '#D980FA',
      tooltip: '%{BKY_TEXT_SPLIT_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'text_concat',
      message0: '%{BKY_TEXT_CONCAT_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'a',
          check: 'String'
        },
        {
          type: 'input_value',
          name: 'b',
          check: 'String'
        }
      ],
      output: 'String',
      previousStatement: null,
      nextStatement: null,
      colour: '#D980FA',
      tooltip: '%{BKY_TEXT_CONCAT_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'text_repeat',
      message0: '%{BKY_TEXT_REPEAT_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'TEXT',
          check: 'String'
        },
        {
          type: 'input_value',
          name: 'TIMES',
          check: 'Number'
        }
      ],
      output: 'String',
      previousStatement: null,
      nextStatement: null,
      colour: '#D980FA',
      tooltip: '%{BKY_TEXT_REPEAT_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'text_chr',
      message0: '%{BKY_TEXT_CHR_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Number'
        }
      ],
      output: 'String',
      previousStatement: null,
      nextStatement: null,
      colour: '#D980FA',
      tooltip: '%{BKY_TEXT_CHR_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'text_ord',
      message0: 'ord %1',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'String'
        }
      ],
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#D980FA',
      tooltip: '%{BKY_TEXT_ORD_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'lists_join',
      message0: '%{BKY_LISTS_JOIN_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Array'
        },
        {
          type: 'input_value',
          name: 'DELIMITER',
          check: 'String'
        }
      ],
      output: 'String',
      previousStatement: null,
      nextStatement: null,
      colour: '#9980FA',
      tooltip: '%{BKY_LISTS_JOIN_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'lists_map',
      message0: '%{BKY_LISTS_MAP_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Array'
        },
        {
          type: 'input_value',
          name: 'FUNC'
        }
      ],
      inputsInline: true,
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: '#9980FA',
      tooltip: '%{BKY_LISTS_MAP_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'lists_concat',
      message0: '%{BKY_LISTS_CONCAT_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'A',
          check: 'Array'
        },
        {
          type: 'input_value',
          name: 'B',
          check: 'Array'
        }
      ],
      output: 'Array',
      previousStatement: null,
      nextStatement: null,
      colour: '#9980FA',
      tooltip: '%{BKY_LISTS_CONCAT_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'lists_repeat_times',
      message0: '%{BKY_LISTS_REPEAT_TIMES_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Array'
        },
        {
          type: 'input_value',
          name: 'TIMES',
          check: 'Number'
        }
      ],
      output: 'Array',
      previousStatement: null,
      nextStatement: null,
      colour: '#9980FA',
      tooltip: '%{BKY_LISTS_REPEAT_TIMES_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'range_create',
      message0: '%{BKY_RANGE_CREATE}',
      args0: [
        {
          type: 'input_value',
          name: 'START',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'STOP',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'STEP',
          check: 'Number'
        }
      ],
      inputsInline: true,
      output: 'Range',
      previousStatement: null,
      nextStatement: null,
      colour: '#9980FA'
    },

    {
      type: 'type_convert',
      message0: '%{BKY_TYPES_CONVERT_TITLE}',
      args0: [
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['%{BKY_TYPES_INT}', 'int'],
            ['%{BKY_TYPES_FLOAT}', 'float'],
            ['%{BKY_TYPES_COMPLEX}', 'complex'],
            ['%{BKY_TYPES_STR}', 'str'],
            ['%{BKY_TYPES_BOOL}', 'bool'],
            ['%{BKY_TYPES_LIST}', 'list'],
            ['%{BKY_TYPES_SET}', 'set'],
            ['%{BKY_TYPES_FROZENSET}', 'frozenset'],
            ['%{BKY_TYPES_TUPLE}', 'tuple'],
            ['%{BKY_TYPES_DICT}', 'dict']
          ]
        },
        {
          type: 'input_value',
          name: 'VAR'
        }
      ],
      inputsInline: true,
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: '#0652DD',
      tooltip: '',
      helpUrl: ''
    },

    {
      type: 'type_get',
      message0: '%{BKY_TYPES_GET_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VAR'
        }
      ],
      inputsInline: true,
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: '#0652DD'
    },

    {
      type: 'type_var',
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['%{BKY_TYPES_INT}', 'int'],
            ['%{BKY_TYPES_FLOAT}', 'float'],
            ['%{BKY_TYPES_COMPLEX}', 'complex'],
            ['%{BKY_TYPES_STR}', 'str'],
            ['%{BKY_TYPES_BOOL}', 'bool'],
            ['%{BKY_TYPES_LIST}', 'list'],
            ['%{BKY_TYPES_SET}', 'set'],
            ['%{BKY_TYPES_FROZENSET}', 'frozenset'],
            ['%{BKY_TYPES_TUPLE}', 'tuple'],
            ['%{BKY_TYPES_DICT}', 'dict'],
            ['%{BKY_TYPES_RANGE}', 'range']
          ]
        }
      ],
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: '#0652DD',
      tooltip: '',
      helpUrl: ''
    },

    {
      type: 'logic_object_compare',
      message0: '%1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'A'
        },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['is', 'IS'],
            ['is not', 'IS_NOT']
          ]
        },
        {
          type: 'input_value',
          name: 'B'
        }
      ],
      inputsInline: true,
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: '#12CBC4'
    },

    {
      type: 'logic_object_in',
      message0: '%1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'A'
        },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['in', 'IN'],
            ['not in', 'NOT_IN']
          ]
        },
        {
          type: 'input_value',
          name: 'B'
        }
      ],
      inputsInline: true,
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: '#12CBC4'
    },

    {
      type: 'logic_sets_compare',
      message0: '%{BKY_LOGIC_SET_COMPARE}',
      args0: [
        {
          type: 'input_value',
          name: 'A'
        },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['%{BKY_LOGIC_SET_COMPARE_SUBSET}', 'LTE'],
            ['%{BKY_LOGIC_SET_COMPARE_PROPER_SUBSET}', 'LT'],
            ['%{BKY_LOGIC_SET_COMPARE_SUPERSET}', 'GTE'],
            ['%{BKY_LOGIC_SET_COMPARE_PROPER_SUPERSET}', 'GT']
          ]
        },
        {
          type: 'input_value',
          name: 'B'
        }
      ],
      inputsInline: true,
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: '#12CBC4'
    },

    {
      type: 'logic_iterable_check',
      message0: '%{BKY_LOGIC_ITERABLE_CHECK}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE'
        },
        {
          type: 'field_dropdown',
          name: 'FUNC',
          options: [
            ['%{BKY_LOGIC_ITERABLE_ALL}', 'ALL'],
            ['%{BKY_LOGIC_ITERABLE_ANY}', 'ANY']
          ]
        }
      ],
      inputsInline: true,
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: '#12CBC4'
    },

    {
      type: 'logic_debug',
      message0: '__debug__',
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: '#12CBC4'
    },

    {
      type: 'sets_arithmetic',
      message0: '%1 %2 %3',
      args0: [
        { type: 'input_value', name: 'A' },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['%{BKY_SETS_ONTWO_OPERATOR_INTERSECT}', 'AND'],
            ['%{BKY_SETS_ONTWO_OPERATOR_UNION}', 'OR'],
            ['%{BKY_SETS_ONTWO_OPERATOR_DIFFERENCE}', 'MINUS'],
            ['%{BKY_SETS_ONTWO_OPERATOR_SYMMETRIC_DIFFERENCE}', 'XOR']
          ]
        },
        { type: 'input_value', name: 'B' }
      ],
      inputsInline: true,
      output: 'Set',
      previousStatement: null,
      nextStatement: null,
      colour: '#B53471'
    },

    {
      type: 'sets_size',
      message0: '%{BKY_SETS_SIZE_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Set'
        }
      ],
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#B53471',
      tooltip: '%{BKY_SETS_SIZE_TOOLTIP}'
    },

    {
      type: 'sets_change',
      message0: '%{BKY_SETS_CHANGE_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'SET'
        },
        {
          type: 'field_dropdown',
          name: 'FUNC',
          options: [
            ['%{BKY_SETS_CHANGE_ADD}', 'ADD'],
            ['%{BKY_SETS_CHANGE_REMOVE}', 'REMOVE']
          ]
        },
        {
          type: 'input_value',
          name: 'ITEM'
        }
      ],
      previousStatement: null,
      nextStatement: null,
      inputsInline: true,
      colour: '#B53471',
      tooltip: '%{BKY_SETS_CHANGE_TOOLTIP}'
    },

    {
      type: 'sets_isEmpty',
      message0: '%{BKY_SETS_ISEMPTY_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Set'
        }
      ],
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: '#12CBC4',
      tooltip: '%{BKY_SETS_ISEMPTY_TOOLTIP}'
    },

    {
      type: 'sets_pop',
      message0: '%{BKY_SETS_POP_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE'
        }
      ],
      output: null,
      previousStatement: null,
      nextStatement: null,
      inputsInline: true,
      colour: '#B53471',
      tooltip: '%{BKY_SETS_POP_TOOLTIP}'
    },

    {
      type: 'tuples_size',
      message0: '%{BKY_TUPLES_SIZE_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Tuple'
        }
      ],
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#5758BB',
      tooltip: '%{BKY_TUPLES_SIZE_TOOLTIP}'
    },

    {
      type: 'tuples_isEmpty',
      message0: '%{BKY_TUPLES_ISEMPTY_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Tuple'
        }
      ],
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: '#12CBC4',
      tooltip: '%{BKY_TUPLES_ISEMPTY_TOOLTIP}'
    },

    {
      type: 'tuples_concat',
      message0: '%{BKY_TUPLES_CONCAT_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'A',
          check: 'Tuple'
        },
        {
          type: 'input_value',
          name: 'B',
          check: 'Tuple'
        }
      ],
      output: 'Tuple',
      previousStatement: null,
      nextStatement: null,
      colour: '#5758BB',
      tooltip: '%{BKY_TUPLES_CONCAT_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'tuples_repeat',
      message0: '%{BKY_TUPLES_REPEAT_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'Tuple',
          check: 'Tuple'
        },
        {
          type: 'input_value',
          name: 'TIMES',
          check: 'Number'
        }
      ],
      output: 'Tuple',
      previousStatement: null,
      nextStatement: null,
      colour: '#5758BB',
      tooltip: '%{BKY_TUPLES_REPEAT_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'dicts_pair',
      message0: '%1%2',
      args0: [
        {
          type: 'input_value',
          name: 'KEY'
        },
        {
          type: 'input_value',
          name: 'VALUE'
        }
      ],
      output: 'DictPair',
      previousStatement: null,
      nextStatement: null,
      colour: '#833471',
      inputsInline: true
    },

    {
      type: 'dicts_size',
      message0: '%{BKY_DICTS_SIZE_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Dict'
        }
      ],
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#833471',
      tooltip: '%{BKY_DICTS_SIZE_TOOLTIP}'
    },

    {
      type: 'dicts_getKey',
      message0: '%{BKY_DICTS_GET_KEY_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'DICT',
          check: 'Dict'
        },
        {
          type: 'input_value',
          name: 'KEY'
        }
      ],
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: '#833471',
      inputsInline: true,
      tooltip: '%{BKY_DICTS_GET_KEY_TOOLTIP}'
    },

    {
      type: 'dicts_setKey',
      message0: '%{BKY_DICTS_SET_KEY_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'DICT',
          check: 'Dict'
        },
        {
          type: 'input_value',
          name: 'KEY'
        },
        {
          type: 'input_value',
          name: 'VALUE'
        }
      ],
      previousStatement: null,
      nextStatement: null,
      inputsInline: true,
      colour: '#833471',
      tooltip: '%{BKY_DICTS_SET_KEY_TOOLTIP}'
    },

    {
      type: 'dicts_pop',
      message0: '%{BKY_DICTS_POP_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'DICT',
          check: 'Dict'
        },
        {
          type: 'input_value',
          name: 'KEY'
        }
      ],
      output: null,
      previousStatement: null,
      nextStatement: null,
      inputsInline: true,
      colour: '#833471',
      tooltip: '%{BKY_DICTS_POP_TOOLTIP}'
    }
  ])

  Blockly.Blocks.variables_set_multiple = {
    init () {
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour('#EE5A24')
      this.targetCount_ = 1
      this.simpleTarget_ = true
      this.updateShape_()
      Blockly.Extensions.apply('contextMenu_variableSetterGetter', this, false)
    },
    updateShape_ () {
      if (!this.getInput('VALUE')) {
        this.appendDummyInput().appendField(Blockly.Msg.VARIABLES_SET_VALUE)
        this.appendValueInput('VALUE').appendField(Blockly.Msg.VARIABLES_TOBE)
      }
      let i = 0
      if (this.targetCount_ === 1 && this.simpleTarget_) {
        this.setInputsInline(true)
        if (!this.getInput('VAR_ANCHOR')) {
          this.appendDummyInput('VAR_ANCHOR').appendField(
            new Blockly.FieldVariable('variable'),
            'VAR'
          )
        }
        this.moveInputBefore('VAR_ANCHOR', 'VALUE')
      } else {
        this.setInputsInline(true)
        // Add new inputs.
        for (; i < this.targetCount_; i++) {
          if (!this.getInput(`TARGET${i}`)) {
            const input = this.appendValueInput(`TARGET${i}`)
            if (i !== 0) {
              input
                .appendField(Blockly.Msg.VARIABLES_AND)
                .setAlign(Blockly.ALIGN_RIGHT)
            }
          }
          this.moveInputBefore(`TARGET${i}`, 'VALUE')
        }
        // Kill simple VAR
        if (this.getInput('VAR_ANCHOR')) {
          this.removeInput('VAR_ANCHOR')
        }
      }
      // Remove deleted inputs.
      while (this.getInput(`TARGET${i}`)) {
        this.removeInput(`TARGET${i}`)
        i++
      }
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom () {
      const container = document.createElement('mutation')
      container.setAttribute('targets', this.targetCount_)
      container.setAttribute('simple', this.simpleTarget_)
      return container
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation (xmlElement) {
      this.targetCount_ = parseInt(xmlElement.getAttribute('targets'), 10)
      this.simpleTarget_ = xmlElement.getAttribute('simple') === 'true'
      this.updateShape_()
    }
  }

  Blockly.Blocks.variables_set_global = {
    init () {
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour('#EE5A24')
      this.nameCount_ = 1
      this.appendDummyInput('GLOBAL').appendField(
        Blockly.Msg.VARIABLES_GLOBAL,
        'START_GLOBALS'
      )
      this.updateShape_()
    },
    updateShape_ () {
      const input = this.getInput('GLOBAL')
      // Update pluralization
      if (this.getField('START_GLOBALS')) {
        this.setFieldValue(
          this.nameCount_ > 1
            ? Blockly.Msg.VARIABLES_GLOBALS
            : Blockly.Msg.VARIABLES_GLOBAL,
          'START_GLOBALS'
        )
      }
      // Update fields
      let i = 0
      for (i = 0; i < this.nameCount_; i++) {
        if (!this.getField(`NAME${i}`)) {
          if (i !== 0) {
            input
              .appendField(Blockly.Msg.VARIABLES_AND)
              .setAlign(Blockly.ALIGN_RIGHT)
          }
          input.appendField(new Blockly.FieldVariable('variable'), `NAME${i}`)
        }
      }
      // Remove deleted fields.
      while (this.getField(`NAME${i}`)) {
        input.removeField(`NAME${i}`)
        i++
      }
      // Delete and re-add ending field
      if (this.getField('END_GLOBALS')) {
        input.removeField('END_GLOBALS')
      }
      input.appendField(Blockly.Msg.VARIABLES_AVAILABLE, 'END_GLOBALS')
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom () {
      const container = document.createElement('mutation')
      container.setAttribute('names', this.nameCount_)
      return container
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation (xmlElement) {
      this.nameCount_ = parseInt(xmlElement.getAttribute('names'), 10)
      this.updateShape_()
    }
  }

  Blockly.Blocks.variables_delete = {
    init () {
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour('#EE5A24')
      this.targetCount_ = 1

      this.appendDummyInput().appendField(Blockly.Msg.VARIABLE_DELETE)
      this.updateShape_()
    },
    updateShape_ () {
      // Add new inputs.
      let i = 0
      for (i = 0; i < this.targetCount_; i++) {
        if (!this.getInput(`TARGET${i}`)) {
          const input = this.appendValueInput(`TARGET${i}`)
          if (i !== 0) {
            input.appendField(',').setAlign(Blockly.ALIGN_RIGHT)
          }
        }
      }
      // Remove deleted inputs.
      while (this.getInput(`TARGET${i}`)) {
        this.removeInput(`TARGET${i}`)
        i++
      }
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom () {
      const container = document.createElement('mutation')
      container.setAttribute('targets', this.targetCount_)
      return container
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation (xmlElement) {
      this.targetCount_ = parseInt(xmlElement.getAttribute('targets'), 10)
      this.updateShape_()
    }
  }

  Blockly.Blocks.sets_create_with = {
    /**
     * Block for creating a set with any number of elements of any type.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#B53471')
      this.itemCount_ = 3
      this.updateShape_()
      this.setOutput(true, 'Set')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setMutator(new Blockly.Mutator(['sets_create_with_item']))
    },
    /**
     * Create XML to represent set inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom () {
      const container = document.createElement('mutation')
      container.setAttribute('items', this.itemCount_)
      return container
    },
    /**
     * Parse XML to restore the set inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation (xmlElement) {
      this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10)
      this.updateShape_()
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose (workspace) {
      const containerBlock = workspace.newBlock('sets_create_with_container')
      containerBlock.initSvg()
      let connection = containerBlock.getInput('STACK').connection
      for (let i = 0; i < this.itemCount_; i++) {
        const itemBlock = workspace.newBlock('sets_create_with_item')
        itemBlock.initSvg()
        connection.connect(itemBlock.previousConnection)
        connection = itemBlock.nextConnection
      }
      return containerBlock
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      // Count number of inputs.
      const connections = []
      while (itemBlock) {
        connections.push(itemBlock.valueConnection_)
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
      }
      // Disconnect any children that don't belong.
      for (let i = 0; i < this.itemCount_; i++) {
        const connection = this.getInput(`ADD${i}`).connection.targetConnection
        if (connection && connections.indexOf(connection) === -1) {
          connection.disconnect()
        }
      }
      this.itemCount_ = connections.length
      this.updateShape_()
      // Reconnect any child blocks.
      for (let i = 0; i < this.itemCount_; i++) {
        Blockly.Mutator.reconnect(connections[i], this, `ADD${i}`)
      }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      let i = 0
      while (itemBlock) {
        const input = this.getInput(`ADD${i}`)
        itemBlock.valueConnection_ = input && input.connection.targetConnection
        i++
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
      }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_ () {
      if (this.itemCount_ && this.getInput('EMPTY')) {
        this.removeInput('EMPTY')
      } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
        this.appendDummyInput('EMPTY').appendField(
          Blockly.Msg.SETS_CREATE_EMPTY_TITLE
        )
      }
      // Add new inputs.
      let i = 0
      for (i = 0; i < this.itemCount_; i++) {
        if (!this.getInput(`ADD${i}`)) {
          const input = this.appendValueInput(`ADD${i}`)
          if (i === 0) {
            input
              .appendField(Blockly.Msg.SETS_CREATE_WITH_INPUT_WITH)
              .setAlign(Blockly.ALIGN_RIGHT)
          } else {
            input.appendField('').setAlign(Blockly.ALIGN_RIGHT)
          }
        }
      }
      // Remove deleted inputs.
      while (this.getInput(`ADD${i}`)) {
        this.removeInput(`ADD${i}`)
        i++
      }
      // Add the trailing "]"
      if (this.getInput('TAIL')) {
        this.removeInput('TAIL')
      }
      if (this.itemCount_) {
        this.appendDummyInput('TAIL')
          .appendField('')
          .setAlign(Blockly.ALIGN_RIGHT)
      }
    }
  }

  Blockly.Blocks.sets_create_with_container = {
    /**
     * Mutator block for set container.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#B53471')
      this.appendDummyInput().appendField(
        Blockly.Msg.SETS_CREATE_WITH_CONTAINER_TITLE_ADD
      )
      this.appendStatementInput('STACK')
      this.contextMenu = false
    }
  }

  Blockly.Blocks.sets_create_with_item = {
    /**
     * Mutator block for adding items.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#B53471')
      this.appendDummyInput().appendField(Blockly.Msg.VARIABLES_DEFAULT_NAME)
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.contextMenu = false
    }
  }

  Blockly.Blocks.tuples_create_with = {
    /**
     * Block for creating a tuple with any number of elements of any type.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#5758BB')
      this.itemCount_ = 3
      this.updateShape_()
      this.setOutput(true, 'Tuple')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setMutator(new Blockly.Mutator(['tuples_create_with_item']))
    },
    /**
     * Create XML to represent tuple inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom () {
      const container = document.createElement('mutation')
      container.setAttribute('items', this.itemCount_)
      return container
    },
    /**
     * Parse XML to restore the tuple inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation (xmlElement) {
      this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10)
      this.updateShape_()
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose (workspace) {
      const containerBlock = workspace.newBlock('tuples_create_with_container')
      containerBlock.initSvg()
      let connection = containerBlock.getInput('STACK').connection
      for (let i = 0; i < this.itemCount_; i++) {
        const itemBlock = workspace.newBlock('tuples_create_with_item')
        itemBlock.initSvg()
        connection.connect(itemBlock.previousConnection)
        connection = itemBlock.nextConnection
      }
      return containerBlock
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      // Count number of inputs.
      const connections = []
      while (itemBlock) {
        connections.push(itemBlock.valueConnection_)
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
      }
      // Disconnect any children that don't belong.
      for (let i = 0; i < this.itemCount_; i++) {
        const connection = this.getInput(`ADD${i}`).connection.targetConnection
        if (connection && connections.indexOf(connection) === -1) {
          connection.disconnect()
        }
      }
      this.itemCount_ = connections.length
      this.updateShape_()
      // Reconnect any child blocks.
      for (let i = 0; i < this.itemCount_; i++) {
        Blockly.Mutator.reconnect(connections[i], this, `ADD${i}`)
      }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      let i = 0
      while (itemBlock) {
        const input = this.getInput(`ADD${i}`)
        itemBlock.valueConnection_ = input && input.connection.targetConnection
        i++
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
      }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_ () {
      if (this.itemCount_ && this.getInput('EMPTY')) {
        this.removeInput('EMPTY')
      } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
        this.appendDummyInput('EMPTY').appendField(
          Blockly.Msg.TUPLES_CREATE_EMPTY_TITLE
        )
      }
      // Add new inputs.
      let i = 0
      for (i = 0; i < this.itemCount_; i++) {
        if (!this.getInput(`ADD${i}`)) {
          const input = this.appendValueInput(`ADD${i}`)
          if (i === 0) {
            input
              .appendField(Blockly.Msg.TUPLES_CREATE_WITH_INPUT_WITH)
              .setAlign(Blockly.ALIGN_RIGHT)
          } else {
            input.appendField('').setAlign(Blockly.ALIGN_RIGHT)
          }
        }
      }
      // Remove deleted inputs.
      while (this.getInput(`ADD${i}`)) {
        this.removeInput(`ADD${i}`)
        i++
      }
      // Add the trailing "]"
      if (this.getInput('TAIL')) {
        this.removeInput('TAIL')
      }
      if (this.itemCount_) {
        const tail = this.appendDummyInput('TAIL')
        if (this.itemCount_ === 1) {
          tail.appendField('')
        } else {
          tail.appendField('')
        }
        tail.setAlign(Blockly.ALIGN_RIGHT)
      }
    }
  }

  Blockly.Blocks.tuples_create_with_container = {
    /**
     * Mutator block for tuple container.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#5758BB')
      this.appendDummyInput().appendField(
        Blockly.Msg.TUPLES_CREATE_WITH_CONTAINER_TITLE_ADD
      )
      this.appendStatementInput('STACK')
      this.contextMenu = false
    }
  }

  Blockly.Blocks.tuples_create_with_item = {
    /**
     * Mutator block for adding items.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#5758BB')
      this.appendDummyInput().appendField(Blockly.Msg.VARIABLES_DEFAULT_NAME)
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.contextMenu = false
    }
  }

  Blockly.Blocks.tuples_getIndex = {
    /**
     * Block for getting element at index.
     * @this {Blockly.Block}
     */
    init () {
      this.WHERE_OPTIONS = [
        [Blockly.Msg.TUPLES_GET_INDEX_FROM_START, 'FROM_START'],
        [Blockly.Msg.TUPLES_GET_INDEX_FROM_END, 'FROM_END'],
        [Blockly.Msg.TUPLES_GET_INDEX_FIRST, 'FIRST'],
        [Blockly.Msg.TUPLES_GET_INDEX_LAST, 'LAST'],
        [Blockly.Msg.TUPLES_GET_INDEX_RANDOM, 'RANDOM']
      ]
      this.setColour('#5758BB')
      this.appendValueInput('VALUE')
        .setCheck('Tuple')
        .appendField(Blockly.Msg.TUPLES_GET_INDEX_INPUT_IN_TUPLE)
      this.appendDummyInput().appendField(
        Blockly.Msg.TUPLES_GET_INDEX_GET,
        'SPACE'
      )
      this.appendDummyInput('AT')
      if (Blockly.Msg.TUPLES_GET_INDEX_TAIL) {
        this.appendDummyInput('TAIL').appendField(
          Blockly.Msg.TUPLES_GET_INDEX_TAIL
        )
      }
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true)
      this.updateAt_(true)
    },
    /**
     * Create XML to represent whether the block is a statement or a value.
     * Also represent whether there is an 'AT' input.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom () {
      const container = Blockly.utils.xml.createElement('mutation')
      const isStatement = !this.outputConnection
      container.setAttribute('statement', isStatement)
      const isAt = this.getInput('AT').type === Blockly.INPUT_VALUE
      container.setAttribute('at', isAt)
      return container
    },
    /**
     * Parse XML to restore the 'AT' input.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation (xmlElement) {
      const isStatement = xmlElement.getAttribute('statement') === 'true'
      this.updateStatement_(isStatement)
      const isAt = xmlElement.getAttribute('at') !== 'false'
      this.updateAt_(isAt)
    },
    /**
     * Switch between a value block and a statement block.
     * @param {boolean} newStatement True if the block should be a statement.
     *     False if the block should be a value.
     * @private
     * @this {Blockly.Block}
     */
    updateStatement_ (newStatement) {
      const oldStatement = !this.outputConnection
      if (newStatement !== oldStatement) {
        this.unplug(true, true)
        if (newStatement) {
          this.setOutput(false)
          this.setPreviousStatement(true)
          this.setNextStatement(true)
        } else {
          this.setPreviousStatement(false)
          this.setNextStatement(false)
          this.setOutput(true)
        }
      }
    },
    /**
     * Create or delete an input for the numeric index.
     * @param {boolean} isAt True if the input should exist.
     * @private
     * @this {Blockly.Block}
     */
    updateAt_ (isAt) {
      this.removeInput('AT')
      this.removeInput('ORDINAL', true)
      // Create either a value 'AT' input or a dummy input.
      if (isAt) {
        this.appendValueInput('AT').setCheck('Number')
        if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
          this.appendDummyInput('ORDINAL').appendField(
            Blockly.Msg.ORDINAL_NUMBER_SUFFIX
          )
        }
      } else {
        this.appendDummyInput('AT')
      }
      const menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function (
        value
      ) {
        const newAt = value === 'FROM_START' || value === 'FROM_END'
        // The 'isAt' variable is available due to this function being a closure.
        if (newAt !== isAt) {
          const block = this.getSourceBlock()
          block.updateAt_(newAt)
          // This menu has been destroyed and replaced.  Update the replacement.
          block.setFieldValue(value, 'WHERE')
          return null
        }
        return undefined
      })
      this.getInput('AT').appendField(menu, 'WHERE')
      if (Blockly.Msg.TUPLES_GET_INDEX_TAIL) {
        this.moveInputBefore('TAIL', null)
      }
    }
  }

  Blockly.Blocks.text_getSubstring.init = function () {
    this.WHERE_OPTIONS_1 = [
      [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START, 'FROM_START'],
      [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END, 'FROM_END'],
      [Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST, 'FIRST']
    ]
    this.WHERE_OPTIONS_2 = [
      [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START, 'FROM_START'],
      [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END, 'FROM_END'],
      [Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST, 'LAST']
    ]
    this.setHelpUrl(Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL)
    this.setStyle('text_blocks')
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT)
    this.appendDummyInput('AT1')

    this.appendValueInput('STEP')
      .setCheck('Number')
      .appendField(Blockly.Msg.TEXT_GET_SUBSTRING_STEP)
    this.appendDummyInput('AT2')
    if (Blockly.Msg.TEXT_GET_SUBSTRING_TAIL) {
      this.appendDummyInput('TAIL').appendField(
        Blockly.Msg.TEXT_GET_SUBSTRING_TAIL
      )
    }
    this.setInputsInline(false)
    this.setOutput(true, 'String')
    this.updateAt_(1, true)
    this.updateAt_(2, true)
    this.setPreviousStatement(true, null)
    this.setNextStatement(true, null)
    this.setTooltip(Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP)
  }

  Blockly.Blocks.lists_getSublist.init = function () {
    this.WHERE_OPTIONS_1 = [
      [Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START, 'FROM_START'],
      [Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END, 'FROM_END'],
      [Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST, 'FIRST']
    ]
    this.WHERE_OPTIONS_2 = [
      [Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START, 'FROM_START'],
      [Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END, 'FROM_END'],
      [Blockly.Msg.LISTS_GET_SUBLIST_END_LAST, 'LAST']
    ]
    this.setHelpUrl(Blockly.Msg.LISTS_GET_SUBLIST_HELPURL)
    this.setStyle('list_blocks')
    this.appendValueInput('LIST')
      .setCheck('Array')
      .appendField(Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST)
    this.appendDummyInput('AT1')
    this.appendValueInput('STEP')
      .setCheck('Number')
      .appendField(Blockly.Msg.LISTS_GET_SUBLIST_STEP)
    this.appendDummyInput('AT2')
    if (Blockly.Msg.LISTS_GET_SUBLIST_TAIL) {
      this.appendDummyInput('TAIL').appendField(
        Blockly.Msg.LISTS_GET_SUBLIST_TAIL
      )
    }
    this.setInputsInline(false)
    this.setOutput(true, 'Array')
    this.updateAt_(1, true)
    this.updateAt_(2, true)
    this.setPreviousStatement(true, null)
    this.setNextStatement(true, null)
    this.setTooltip(Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP)
  }

  Blockly.Blocks.tuples_getSubtuple = {
    /**
     * @this {Blockly.Block}
     */
    init () {
      this.WHERE_OPTIONS_1 = [
        [Blockly.Msg.TUPLES_GET_SUBTUPLE_START_FROM_START, 'FROM_START'],
        [Blockly.Msg.TUPLES_GET_SUBTUPLE_START_FROM_END, 'FROM_END'],
        [Blockly.Msg.TUPLES_GET_SUBTUPLE_START_FIRST, 'FIRST']
      ]
      this.WHERE_OPTIONS_2 = [
        [Blockly.Msg.TUPLES_GET_SUBTUPLE_END_FROM_START, 'FROM_START'],
        [Blockly.Msg.TUPLES_GET_SUBTUPLE_END_FROM_END, 'FROM_END'],
        [Blockly.Msg.TUPLES_GET_SUBTUPLE_END_LAST, 'LAST']
      ]
      this.setColour('#5758BB')
      this.appendValueInput('TUPLE')
        .setCheck('Tuple')
        .appendField(Blockly.Msg.TUPLES_GET_SUBTUPLE_INPUT_IN_TUPLE)
      this.appendDummyInput('AT1')
      this.appendValueInput('STEP')
        .setCheck('Number')
        .appendField(Blockly.Msg.TUPLES_GET_SUBTUPLE_STEP)
      this.appendDummyInput('AT2')
      if (Blockly.Msg.TUPLES_GET_SUBTUPLE_TAIL) {
        this.appendDummyInput('TAIL').appendField(
          Blockly.Msg.TUPLES_GET_SUBTUPLE_TAIL
        )
      }
      this.setInputsInline(false)
      this.setOutput(true, 'Tuple')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.updateAt_(1, true)
      this.updateAt_(2, true)
    },
    /**
     * Create XML to represent whether there are 'AT' inputs.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom () {
      const container = Blockly.utils.xml.createElement('mutation')
      const hasAt1 = this.getInput('AT1').type === Blockly.INPUT_VALUE
      container.setAttribute('at1', hasAt1)
      const hasAt2 = this.getInput('AT2').type === Blockly.INPUT_VALUE
      container.setAttribute('at2', hasAt2)
      return container
    },
    /**
     * Parse XML to restore the 'AT' inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation (xmlElement) {
      const isAt1 = xmlElement.getAttribute('at1') === 'true'
      const isAt2 = xmlElement.getAttribute('at2') === 'true'
      this.updateAt_(1, isAt1)
      this.updateAt_(2, isAt2)
    },
    /**
     * Create or delete an input for a numeric index.
     * This block has two such inputs, independent of each other.
     * @param {number} n Specify first or second input (1 or 2).
     * @param {boolean} isAt True if the input should exist.
     * @private
     * @this {Blockly.Block}
     */
    updateAt_ (n, isAt) {
      // Create or delete an input for the numeric index.
      // Destroy old 'AT' and 'ORDINAL' inputs.
      this.removeInput(`AT${n}`)
      this.removeInput(`ORDINAL${n}`, true)
      // Create either a value 'AT' input or a dummy input.
      if (isAt) {
        this.appendValueInput(`AT${n}`).setCheck('Number')
        if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
          this.appendDummyInput(`ORDINAL${n}`).appendField(
            Blockly.Msg.ORDINAL_NUMBER_SUFFIX
          )
        }
      } else {
        this.appendDummyInput(`AT${n}`)
      }
      const menu = new Blockly.FieldDropdown(
        this[`WHERE_OPTIONS_${n}`],
        function (value) {
          const newAt = value === 'FROM_START' || value === 'FROM_END'
          // The 'isAt' variable is available due to this function being a
          // closure.
          if (newAt !== isAt) {
            const block = this.getSourceBlock()
            block.updateAt_(n, newAt)
            // This menu has been destroyed and replaced.
            // Update the replacement.
            block.setFieldValue(value, `WHERE${n}`)
            return null
          }
        }
      )
      this.getInput(`AT${n}`).appendField(menu, `WHERE${n}`)
      if (n === 1) {
        this.moveInputBefore('AT1', 'AT2')
        if (this.getInput('ORDINAL1')) {
          this.moveInputBefore('ORDINAL1', 'AT2')
        }
      }
      if (Blockly.Msg.TUPLES_GET_SUBTUPLE_TAIL) {
        this.moveInputBefore('TAIL', null)
      }
    }
  }

  Blockly.Blocks.dicts_create_with = {
    /**
     * Block for creating a dict with any number of elements of any type.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#833471')
      this.itemCount_ = 3
      this.updateShape_()
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true, 'Dict')
      this.setMutator(new Blockly.Mutator(['dicts_create_with_item']))
    },
    /**
     * Create XML to represent dict inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom () {
      const container = document.createElement('mutation')
      container.setAttribute('items', this.itemCount_)
      return container
    },
    /**
     * Parse XML to restore the dict inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation (xmlElement) {
      this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10)
      this.updateShape_()
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose (workspace) {
      const containerBlock = workspace.newBlock('dicts_create_with_container')
      containerBlock.initSvg()
      let connection = containerBlock.getInput('STACK').connection
      for (let i = 0; i < this.itemCount_; i++) {
        const itemBlock = workspace.newBlock('dicts_create_with_item')
        itemBlock.initSvg()
        connection.connect(itemBlock.previousConnection)
        connection = itemBlock.nextConnection
      }
      return containerBlock
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      // Count number of inputs.
      const connections = []
      while (itemBlock) {
        connections.push(itemBlock.valueConnection_)
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
      }
      // Disconnect any children that don't belong.
      for (let i = 0; i < this.itemCount_; i++) {
        const connection = this.getInput(`ADD${i}`).connection.targetConnection
        if (connection && connections.indexOf(connection) === -1) {
          const key = connection.getSourceBlock().getInput('KEY')
          if (key.connection.targetConnection) {
            key.connection.targetConnection.getSourceBlock().unplug(true)
          }
          const value = connection.getSourceBlock().getInput('VALUE')
          if (value.connection.targetConnection) {
            value.connection.targetConnection.getSourceBlock().unplug(true)
          }
          connection.disconnect()
          connection.getSourceBlock().dispose()
        }
      }
      this.itemCount_ = connections.length
      this.updateShape_()
      // Reconnect any child blocks.
      for (let i = 0; i < this.itemCount_; i++) {
        Blockly.Mutator.reconnect(connections[i], this, `ADD${i}`)
        if (!connections[i]) {
          const itemBlock = this.workspace.newBlock('dicts_pair')
          itemBlock.setDeletable(false)
          itemBlock.setMovable(false)
          itemBlock.initSvg()
          this.getInput(`ADD${i}`).connection.connect(
            itemBlock.outputConnection
          )
          itemBlock.render()
          // this.get(itemBlock, 'ADD'+i)
        }
      }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      let i = 0
      while (itemBlock) {
        const input = this.getInput(`ADD${i}`)
        itemBlock.valueConnection_ = input && input.connection.targetConnection
        i++
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
      }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_ () {
      if (this.itemCount_ && this.getInput('EMPTY')) {
        this.removeInput('EMPTY')
      } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
        this.appendDummyInput('EMPTY').appendField(
          Blockly.Msg.DICTS_CREATE_EMPTY_TITLE
        )
      }
      // Add new inputs.
      let i = 0
      for (i = 0; i < this.itemCount_; i++) {
        if (!this.getInput(`ADD${i}`)) {
          const input = this.appendValueInput(`ADD${i}`)
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck('DictPair')
          if (i === 0) {
            input.appendField(Blockly.Msg.DICTS_CREATE_WITH_INPUT_WITH)
          }
        }
      }
      // Remove deleted inputs.
      while (this.getInput(`ADD${i}`)) {
        this.removeInput(`ADD${i}`)
        i++
      }
    }
  }

  Blockly.Blocks.dicts_create_with_container = {
    /**
     * Mutator block for dict container.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#833471')
      this.appendDummyInput().appendField(
        Blockly.Msg.DICTS_CREATE_WITH_CONTAINER_TITLE_ADD
      )
      this.appendStatementInput('STACK')
      this.contextMenu = false
    }
  }

  Blockly.Blocks.dicts_create_with_item = {
    /**
     * Mutator block for adding items.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#833471')
      this.appendDummyInput().appendField(
        Blockly.Msg.DICTS_CREATE_WITH_ITEM_TITLE
      )
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.contextMenu = false
    }
  }
}
