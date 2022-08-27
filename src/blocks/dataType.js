export default function dataType (Blockly) {
  // dict
  Blockly.Blocks.dict_create_with = {
    init: function () {
      this.setColour(199)
      this.itemCount_ = 3
      this.updateShape_()
      this.setOutput(true, 'Array')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setMutator(new Blockly.Mutator(['general_create_with_item']))
      this.setTooltip('Create a dict with any number of items.')
    },
    mutationToDom: function () {
      const container = Blockly.utils.xml.createElement('mutation')
      container.setAttribute('items', this.itemCount_)
      return container
    },
    domToMutation: function (xmlElement) {
      this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10)
      this.updateShape_()
    },
    saveExtraState: function () {
      return {
        itemCount: this.itemCount_
      }
    },
    loadExtraState: function (state) {
      this.itemCount_ = state.itemCount
      this.updateShape_()
    },
    decompose: function (workspace) {
      const containerBlock = workspace.newBlock('general_create_with_container')
      containerBlock.initSvg()
      let connection = containerBlock.getInput('STACK').connection
      for (let i = 0; i < this.itemCount_; i++) {
        const itemBlock = workspace.newBlock('general_create_with_item')
        itemBlock.initSvg()
        connection.connect(itemBlock.previousConnection)
        connection = itemBlock.nextConnection
      }
      return containerBlock
    },
    compose: function (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      // Count number of inputs.
      const connections = []
      while (itemBlock && !itemBlock.isInsertionMarker()) {
        connections.push(itemBlock.valueConnection_)
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
      }
      // Disconnect any children that don't belong.
      for (let i = 0; i < this.itemCount_; i++) {
        const connection = this.getInput('ADD' + i).connection.targetConnection
        if (connection && connections.indexOf(connection) === -1) {
          connection.disconnect()
        }
      }
      this.itemCount_ = connections.length
      this.updateShape_()
      // Reconnect any child blocks.
      for (let i = 0; i < this.itemCount_; i++) {
        Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i)
      }
    },
    saveConnections: function (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      let i = 0
      while (itemBlock) {
        const input = this.getInput('ADD' + i)
        itemBlock.valueConnection_ = input && input.connection.targetConnection
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
        i++
      }
    },
    updateShape_: function () {
      if (this.itemCount_ && this.getInput('EMPTY')) {
        this.removeInput('EMPTY')
      } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
        this.appendDummyInput('EMPTY').appendField('create empty dict')
      }
      // Add new inputs.
      for (let i = 0; i < this.itemCount_; i++) {
        if (!this.getInput('ADD' + i)) {
          const input = this.appendValueInput('ADD' + i).setAlign(
            Blockly.Input.RIGHT
          )
          const inputvalue = this.appendValueInput('value' + i).setAlign(
            Blockly.Input.RIGHT
          )

          if (i === 0) {
            input.appendField('create dict with')
            inputvalue.appendField('')
          }
        }
      }
      // Remove deleted inputs.
      for (let i = this.itemCount_; this.getInput('ADD' + i); i++) {
        this.removeInput('ADD' + i)
        this.removeInput('value' + i)
      }
    }
  }

  Blockly.Blocks.general_create_with_container = {
    init: function () {
      this.appendDummyInput().appendField('general')
      this.appendStatementInput('STACK')
      this.setTooltip(
        'Add, remove, or reorder sections to reconfigure this dict block.'
      )
      this.contextMenu = false
    }
  }

  Blockly.Blocks.general_create_with_item = {
    init: function () {
      this.appendDummyInput().appendField('item')
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.setTooltip('Add an item to the dict.')
      this.contextMenu = false
    }
  }

  // tuple
  Blockly.Blocks.tuple = {
    init: function () {
      this.setInputsInline(true)
      this.itemCount_ = 2
      this.updateShape_()
      this.setOutput(true, 'Tuple')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setMutator(new Blockly.Mutator(['general_create_with_item']))
      this.setTooltip('Tuple with items.')
      this.setColour(330)
      this.setTooltip('Tuples are ordered and unchangeable collections.')
      this.setHelpUrl('https://www.w3school.com.cn/python/python_tuples.asp')
    },
    mutationToDom: function () {
      const container = Blockly.utils.xml.createElement('mutation')
      container.setAttribute('item', this.itemCount_)
      return container
    },
    domToMutation: function (xmlElement) {
      this.itemCount_ = parseInt(xmlElement.getAttribute('item'), 10)
      this.updateShape_()
    },
    loadExtraState: function (state) {
      this.itemCount_ = state.itemCount
      this.updateShape_()
    },
    decompose: function (workspace) {
      const containerBlock = workspace.newBlock('general_create_with_container')
      containerBlock.initSvg()
      let connection = containerBlock.getInput('STACK').connection
      for (let i = 0; i < this.itemCount_; i++) {
        const itemBlock = workspace.newBlock('general_create_with_item')
        itemBlock.initSvg()
        connection.connect(itemBlock.previousConnection)
        connection = itemBlock.nextConnection
      }
      return containerBlock
    },
    compose: function (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      // Count number of inputs.
      const connections = []
      while (itemBlock && !itemBlock.isInsertionMarker()) {
        connections.push(itemBlock.valueConnection_)
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
      }
      // Disconnect any children that don't belong.
      for (let i = 0; i < this.itemCount_; i++) {
        const connection = this.getInput('ADD' + i).connection.targetConnection
        if (connection && connections.indexOf(connection) === -1) {
          connection.disconnect()
        }
      }
      this.itemCount_ = connections.length
      this.updateShape_()
      // Reconnect any child blocks.
      for (let i = 0; i < this.itemCount_; i++) {
        Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i)
      }
    },
    saveConnections: function (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      let i = 0
      while (itemBlock) {
        const input = this.getInput('ADD' + i)
        itemBlock.valueConnection_ = input && input.connection.targetConnection
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
        i++
      }
    },
    updateShape_: function () {
      if (this.itemCount_ && this.getInput('EMPTY')) {
        this.removeInput('EMPTY')
      } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
        this.appendDummyInput('EMPTY').appendField('create tuple')
      }
      for (let i = 0; i < this.itemCount_; i++) {
        if (!this.getInput('ADD' + i)) {
          const input = this.appendValueInput('ADD' + i).setAlign(
            Blockly.Input.RIGHT
          )
          if (i === 0) {
            input.appendField('tuple')
          }
        }
      }
      for (let i = this.itemCount_; this.getInput('ADD' + i); i++) {
        this.removeInput('ADD' + i)
      }
    }
  }

  Blockly.Blocks.create_empty_set = {
    init: function () {
      this.appendDummyInput().appendField('create empty set')
      this.setInputsInline(true)
      this.setOutput(true, 'Set')
      this.setColour(230)
    }
  }
  // set
  Blockly.Blocks.create_set_one = {
    init: function () {
      this.appendDummyInput().appendField('create set by set(')
      this.appendValueInput('create_set_one_argument').setCheck([
        'String',
        'Number',
        'List',
        'Tuple'
      ])
      this.appendDummyInput().appendField(')')
      this.setInputsInline(true)
      this.setOutput(true, 'Set')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.create_set_two = {
    init: function () {
      this.appendDummyInput().appendField('create set by {')
      this.appendValueInput('create_set_two_argument').setCheck([
        'String',
        'Number',
        'List',
        'Tuple'
      ])
      this.appendDummyInput().appendField('}')
      this.setInputsInline(true)
      this.setOutput(true, 'Set')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.del_set = {
    init: function () {
      this.appendDummyInput().appendField('del set')
      this.appendValueInput('del_set_name_of_set').setCheck('Set')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.clear_set = {
    init: function () {
      this.appendDummyInput().appendField('clear set')
      this.appendValueInput('clear_set_name_of_set').setCheck('Set')
      this.setInputsInline(true)
      this.setOutput(true, 'Set')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.set_function_of_num = {
    init: function () {
      this.appendValueInput('set_function_of_num_caller').setCheck('Set')
      this.appendValueInput('set_function_of_num_argument')
        .setCheck(['Number', 'String', 'Array', 'List', 'Tuple', 'Dict'])
        .appendField(
          new Blockly.FieldDropdown([
            ['add', 'add'],
            ['discard', 'discard'],
            ['remove', 'remove'],
            ['pop', 'pop']
          ]),
          'set_function_of_num_function_name'
        )
      this.setInputsInline(true)
      this.setOutput(true, 'Set')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.set_functions = {
    init: function () {
      this.appendValueInput('set_functions_caller').setCheck('Set')
      this.appendValueInput('set_functions_argument')
        .setCheck('Set')
        .appendField(
          new Blockly.FieldDropdown([
            ['difference', 'difference'],
            ['difference_update', 'difference_update'],
            ['intersection', 'intersection'],
            ['intersection_update', 'intersection_update'],
            ['union', 'union'],
            ['update', 'update'],
            ['symmetric_difference', 'symmetric_difference'],
            ['symmetric_difference_update', 'symmetric_difference_update'],
            ['isdisjoint', 'isdisjoint'],
            ['issubset', 'issubset'],
            ['issuperset', 'issuperset']
          ]),
          'set_functions_function_name'
        )
      this.setInputsInline(true)
      this.setOutput(true, 'Set')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.global = {
    init: function () {
      this.appendValueInput('globalvariable')
        .setCheck(null)
        .appendField('全局变量')
      this.setColour(0)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.type_value = {
    init: function () {
      this.appendValueInput('type').setCheck(null)
      this.appendValueInput('value').setCheck(null).appendField('type.value')
      this.appendDummyInput().appendField('变量/有返回值的函数')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(285)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.type_state = {
    init: function () {
      this.appendValueInput('type').setCheck(null).appendField('type.statement')
      this.appendStatementInput('state')
        .setCheck(null)
        .appendField('没有返回值的函数')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(285)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.annotation_block = {
    init: function () {
      this.appendDummyInput()
        .appendField('#')
        .appendField(new Blockly.FieldTextInput('default'), 'annotation')
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.notes = {
    init: function () {
      this.appendDummyInput().appendField(
        new Blockly.FieldTextInput('notes'),
        'note'
      )
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(65)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.index1 = {
    init: function () {
      this.appendValueInput('type').setCheck(null).appendField('index[a]')
      this.appendValueInput('index').setCheck('Number')
      this.appendDummyInput()
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(65)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.index2 = {
    init: function () {
      this.appendValueInput('type').setCheck(null).appendField('index[a:b]')
      this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), 'start')
        .appendField(new Blockly.FieldNumber(1), 'end')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(65)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.type_specify = {
    init: function () {
      this.appendValueInput('variable')
        .setCheck(null)
        .appendField(
          new Blockly.FieldDropdown([
            ['str', 'str'],
            ['int', 'int'],
            ['float', 'float'],
            ['complex', 'complex'],
            ['list', 'list'],
            ['tuple', 'tuple'],
            ['range', 'range'],
            ['dict', 'dict'],
            ['frozenset', 'frozenset'],
            ['set', 'set'],
            ['bool', 'bool'],
            ['bytes', 'bytes'],
            ['bytearray', 'bytearray'],
            ['memoryview', 'memoryview']
          ]),
          'type'
        )
      this.setOutput(true, [
        'String',
        'Number',
        'Complex',
        'List',
        'Tuple',
        'Range',
        'Dict',
        'Frozenset',
        'Set',
        'Boolean',
        'Bytes',
        'Bytearray',
        'Memoryview'
      ])
      this.setColour(65)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.get_type = {
    init: function () {
      this.appendValueInput('variable').setCheck(null).appendField('type()')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(65)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
}
