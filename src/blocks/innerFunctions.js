export default function innerFunctions (Blockly) {
  Blockly.defineBlocksWithJsonArray([
    {
      type: 'function_length',
      message0: 'len %1',
      args0: [
        {
          type: 'input_value',
          name: 'function_length_inputtext',
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
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_local',
      message0: 'locals',
      output: 'Direction',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_object',
      message0: 'object',
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_isinstance',
      message0: 'isinstance %1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'function_isinstance_object'
        },
        {
          type: 'input_value',
          name: 'function_isinstance_classinformation',
          check: 'Classinfo'
        },
        {
          type: 'input_dummy'
        }
      ],
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_issubclass',
      message0: 'issubclass %1  %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'function_issubclass_class'
        },
        {
          type: 'input_value',
          name: 'function_issubclass_classinfo'
        },
        {
          type: 'input_dummy'
        }
      ],
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_next',
      message0: 'next %1',
      args0: [
        {
          type: 'input_value',
          name: 'function_next_iterable',
          check: 'Iterator'
        }
      ],
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_map',
      message0: 'map %1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'function_map_function',
          check: 'Function'
        },
        {
          type: 'input_value',
          name: 'function_map_iterable',
          check: 'Iterator'
        },
        {
          type: 'input_dummy'
        }
      ],
      output: 'Iterator',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_memoryview',
      message0: 'memoryview %1',
      args0: [
        {
          type: 'input_value',
          name: 'function_memoryview_object'
        }
      ],
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_max',
      message0: 'max %1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'function_max_input1',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'function_max_input2',
          check: 'Number'
        },
        {
          type: 'input_dummy'
        }
      ],
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_min',
      message0: 'min %1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'function_min_input1',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'function_min_input2',
          check: 'Number'
        },
        {
          type: 'input_dummy'
        }
      ],
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    }
  ])
  Blockly.Blocks.abs = {
    init: function () {
      this.appendDummyInput().appendField('abs')
      this.appendValueInput('abs_argument').setCheck('Number')
      this.setInputsInline(true)
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.aiter = {
    init: function () {
      this.appendDummyInput().appendField('aiter')
      this.appendValueInput('aiter_argument').setCheck('Iterator')
      this.setInputsInline(true)
      this.setOutput(true, 'Iterator')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.all = {
    init: function () {
      this.appendDummyInput().appendField('all')
      this.appendValueInput('all_argument').setCheck('Iterator')
      this.setInputsInline(true)
      this.setOutput(true, 'Boolean')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.any = {
    init: function () {
      this.appendDummyInput().appendField('any')
      this.appendValueInput('any_argument').setCheck('Iterator')
      this.setInputsInline(true)
      this.setOutput(true, 'Boolean')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.anext = {
    init: function () {
      this.appendDummyInput().appendField('anext')
      this.appendValueInput('anext_left_argument').setCheck('Iterator')
      this.appendValueInput('anext_right_argument').setCheck('Iterator')
      this.setInputsInline(true)
      this.setOutput(true, 'Iterator')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.ascii = {
    init: function () {
      this.appendDummyInput().appendField('ascii')
      this.appendValueInput('ascii_argument').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, 'String')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.bin = {
    init: function () {
      this.appendDummyInput().appendField('bin')
      this.appendValueInput('bin_argument').setCheck('Number')
      this.setInputsInline(true)
      this.setOutput(true, 'String')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.bool = {
    init: function () {
      this.appendDummyInput().appendField('bool')
      this.appendValueInput('bool_argument').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, 'Boolean')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.break_point = {
    init: function () {
      this.appendDummyInput().appendField('breakpoint')
      this.appendValueInput('breakpoint_left_argument').setCheck(null)
      this.appendValueInput('breakpoint_right_argument').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.byte_array = {
    init: function () {
      this.appendDummyInput().appendField('bytearray')
      this.appendValueInput('bytearray_source').setCheck([
        'String',
        'Number',
        'Iterator'
      ])
      this.appendValueInput('bytearray_encoding').setCheck('String')
      this.appendValueInput('bytearray_error').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, 'Array')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.bytes = {
    init: function () {
      this.appendDummyInput().appendField('bytes')
      this.appendValueInput('bytes_source').setCheck([
        'String',
        'Number',
        'Iterator'
      ])
      this.appendValueInput('bytes_encoding').setCheck('String')
      this.appendValueInput('bytes_error').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, 'Bytes')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.callable = {
    init: function () {
      this.appendDummyInput().appendField('callable')
      this.appendValueInput('callable_argument').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, 'Boolean')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  // chr
  Blockly.Blocks.chr = {
    init: function () {
      this.appendValueInput('chrnum').setCheck('Number').appendField('chr')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(210)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // classmethod
  Blockly.Blocks.class_method = {
    init: function () {
      this.appendDummyInput().appendField('@classmethod')
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // compile
  Blockly.Blocks.compile = {
    init: function () {
      this.appendValueInput('sourse').setCheck(null).appendField('compile')
      this.appendValueInput('filename').setCheck('String')
      this.appendValueInput('mode').setCheck(null)
      this.appendValueInput('flags').setCheck('Number')
      this.appendValueInput('dont_inherit').setCheck('Boolean')
      this.appendValueInput('optimize').setCheck('Number')
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // complex
  Blockly.Blocks.complex = {
    init: function () {
      this.appendValueInput('complex').setCheck(null).appendField('complex')
      this.appendValueInput('complexl').setCheck(null).appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // delattr
  Blockly.Blocks.delattr = {
    init: function () {
      this.appendValueInput('delattrobject')
        .setCheck(null)
        .appendField('delattr')
      this.appendValueInput('delattrname').setCheck(null).appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // dir
  Blockly.Blocks.dir = {
    init: function () {
      this.appendValueInput('dirobject').setCheck(null).appendField('dir')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // divmod
  Blockly.Blocks.divmod = {
    init: function () {
      this.appendValueInput('divmoda').setCheck('Number').appendField('divmod')
      this.appendValueInput('divmodb').setCheck('Number').appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // enumerate
  Blockly.Blocks.enumerate = {
    init: function () {
      this.appendValueInput('iterable').setCheck(null).appendField('enumerate')
      this.appendValueInput('enumstart').setCheck('Number').appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // filter
  Blockly.Blocks.filter = {
    init: function () {
      this.appendValueInput('filterfunction')
        .setCheck(null)
        .appendField('filter')
      this.appendValueInput('filteriterable').setCheck(null).appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // eval
  Blockly.Blocks.eval = {
    init: function () {
      this.appendValueInput('evala').setCheck(null).appendField('eval')
      this.appendValueInput('evalb').setCheck(null).appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // exec
  Blockly.Blocks.exec = {
    init: function () {
      this.appendValueInput('execglobal').setCheck(null).appendField('exec')
      this.appendValueInput('execlocal').setCheck(null).appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  Blockly.Blocks.format = {
    init: function () {
      this.appendValueInput('txt').setCheck('String')
      this.appendDummyInput().appendField('.format')
      this.appendValueInput('string').setCheck(['String', 'Number'])
      this.setOutput(true, 'String')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.float = {
    init: function () {
      this.appendValueInput('otherValue').setCheck(Number).appendField('float')
      this.appendDummyInput()
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.frozenset = {
    init: function () {
      this.appendValueInput('set')
        .setCheck('Set')
        .appendField('class frozenset')
      this.appendDummyInput()
      this.setOutput(true, 'frozenset')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.getattr = {
    init: function () {
      this.appendValueInput('class').setCheck('Class').appendField('getattr')
      this.appendDummyInput()
      this.appendValueInput('member').setCheck('String')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.globals = {
    init: function () {
      this.appendDummyInput().appendField('globals ()')
      this.setOutput(true, 'Dict')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.hasattr = {
    init: function () {
      this.appendValueInput('object').setCheck('Object').appendField('hasattr')
      this.appendDummyInput()
      this.appendValueInput('member').setCheck('String')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.hash = {
    init: function () {
      this.appendValueInput('object').setCheck('Object').appendField('hash')
      this.appendDummyInput()
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.help = {
    init: function () {
      this.appendValueInput('helpValue').setCheck('Object').appendField('help')
      this.appendDummyInput()
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.hex = {
    init: function () {
      this.appendValueInput('number').setCheck('Number').appendField('hex')
      this.appendDummyInput()
      this.setOutput(true, 'String')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.id_function = {
    init: function () {
      this.appendValueInput('object').setCheck('Object').appendField('id')
      this.appendDummyInput()
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.input = {
    init: function () {
      this.appendValueInput('inputValue').setCheck(null).appendField('input')
      this.appendDummyInput()
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.int_class= {
    init: function () {
      this.appendValueInput('number')
        .setCheck('Number')
        .appendField('class int')
      this.appendDummyInput()
      this.appendValueInput('base').setCheck('Base')
      this.setOutput(true, 'Class')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.round_function = {
    init: function () {
      this.appendValueInput('number').setCheck('Number')
      this.appendDummyInput().appendField(
        new Blockly.FieldLabelSerializable('round(a,b)'),
        'round('
      )
      this.appendValueInput('accuracy').setCheck('Number')
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip(
        'Return number rounded to ndigits precision after the decimal point. If ndigits is omitted or is , it returns the nearest integer to its input.None'
      )
      this.setHelpUrl(
        'https://docs.python.org/3.10/library/functions.html#round'
      )
    }
  }

  Blockly.Blocks.reverse = {
    init: function () {
      this.appendValueInput('reverse_function')
        .setCheck(['String', 'Array', 'Number'])
        .appendField('reverse function')
      this.appendDummyInput().appendField('')
      this.setOutput(true, ['String', 'Array', 'Number'])
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('Return a reverse iterator.')
      this.setHelpUrl(
        'https://docs.python.org/3.10/library/functions.html#reversed'
      )
    }
  }

  Blockly.Blocks.open_file = {
    init: function () {
      this.appendValueInput('file').setCheck('String').appendField('openfile')
      this.appendDummyInput()
        .appendField(
          new Blockly.FieldDropdown([
            ['read', 'r'],
            ['write', 'w'],
            ['create-new', 'x'],
            ['apending', 'a'],
            ['read and write', '+']
          ]),
          'mode1'
        )
        .appendField(
          new Blockly.FieldDropdown([
            ['text', 't'],
            ['binary', 'b']
          ]),
          'textbinary'
        )
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('Open file and return a corresponding file Object.')
      this.setHelpUrl(
        'https://docs.python.org/3.10/library/functions.html#open'
      )
    }
  }

  Blockly.Blocks.ord = {
    init: function () {
      this.appendValueInput('str').setCheck('String').appendField('ord()')
      this.appendDummyInput()
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip(
        'Given a string representing one Unicode character, return an integer representing the Unicode code point of that character. '
      )
      this.setHelpUrl('https://docs.python.org/3.10/library/functions.html#ord')
    }
  }

  Blockly.Blocks.inner_pow = {
    init: function () {
      this.appendValueInput('base').setCheck('Number').appendField('内置pow()')
      this.appendValueInput('exp').setCheck('Number').appendField(',')
      this.appendValueInput('mod').setCheck('Number').appendField('[, ')
      this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField(']')
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip(
        'Return base to the power exp; if mod is present, return base to the power exp, modulo mod (computed more efficiently than ). '
      )
      this.setHelpUrl('https://docs.python.org/3.10/library/functions.html#pow')
    }
  }

  Blockly.Blocks.property = {
    init: function () {
      this.appendValueInput('fget').setCheck('String').appendField('property')
      this.appendValueInput('fset').setCheck('String').appendField('get,')
      this.appendValueInput('fdel').setCheck('String').appendField('set,')
      this.appendValueInput('doc').setCheck('String').appendField('delete,')
      this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('doc')
      this.setOutput(true, 'Class')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('Return a property attribute.')
      this.setHelpUrl(
        'https://docs.python.org/3.10/library/functions.html#property'
      )
    }
  }

  Blockly.Blocks.range__ = {
    init: function () {
      this.appendDummyInput()
        .appendField('range()')
        .appendField(new Blockly.FieldNumber(0, 0), 'start')
      this.appendValueInput('end').setCheck('Number').appendField(',')
      this.appendDummyInput()
        .appendField(',')
        .appendField(new Blockly.FieldNumber(1), 'step_length')
      this.setOutput(true, 'Object')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip(
        'The arguments to the range constructor must be integers (either built-in int or any Object that implements the __index__() special method).'
      )
      this.setHelpUrl(
        'https://docs.python.org/3.10/library/stdtypes.html#range'
      )
    }
  }

  Blockly.Blocks.repr = {
    init: function () {
      this.appendValueInput('obj').setCheck('Object').appendField('repr()')
      this.appendDummyInput()
      this.setOutput(true, 'String')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip(
        'Return a string containing a printable representation of an Object. '
      )
      this.setHelpUrl(
        'https://docs.python.org/3.10/library/functions.html#repr'
      )
    }
  }

  Blockly.Blocks.set_func = {
    init: function () {
      this.appendValueInput('iterable').setCheck('String').appendField('set()')
      this.appendDummyInput()
      this.setOutput(true, 'Set')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(260)
      this.setTooltip(
        'Return a string containing a printable representation of an Object. '
      )
      this.setHelpUrl('https://docs.python.org/3.10/library/stdtypes.html#set')
    }
  }

  Blockly.Blocks.oct = {
    init: function () {
      this.appendValueInput('iterable').setCheck('Number').appendField('oct()')
      this.appendDummyInput()
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(260)
      this.setTooltip(
        'Convert an integer number to an octal string prefixed with “0o”. '
      )
      this.setHelpUrl('https://docs.python.org/3.10/library/functions.html#oct')
    }
  }

  Blockly.Blocks.function_sum = {
    init: function () {
      this.appendValueInput('iterable').setCheck(null).appendField('可迭代对象')
      this.appendValueInput('start').setCheck(null).appendField('参数')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(285)
      this.setTooltip('use this add all number')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.xrange = {
    init: function () {
      this.appendValueInput('start').setCheck('Number').appendField('计数开始')
      this.appendValueInput('stop').setCheck('Number').appendField('计数结束')
      this.appendValueInput('step').setCheck('Number').appendField('步长')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('function xrange similar with range')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.type_with_one_argument = {
    init: function () {
      this.appendValueInput('object').setCheck(null).appendField('object')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip("function type about parameter's type ")
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.type_with_three_argument = {
    init: function () {
      this.appendValueInput('name').setCheck(null).appendField('name')
      this.appendValueInput('bases').setCheck(null).appendField('bases')
      this.appendValueInput('dict').setCheck(null).appendField('dict')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('function type with 3 parameter')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.slice_fun = {
    init: function () {
      this.appendValueInput('sliceArgument')
        .setCheck('Number')
        .appendField('slice')
      this.setInputsInline(true)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
}
