export default function importModules (Blockly) {
  Blockly.Blocks.import_modules = {
    init: function () {
      this.appendDummyInput()
        .appendField('import')
        .appendField(
          new Blockly.FieldTextInput('random'),
          'import_modules_module'
        )
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.import_module_as = {
    init: function () {
      this.appendDummyInput()
        .appendField('import')
        .appendField(
          new Blockly.FieldTextInput('random'),
          'import_module_as_module'
        )
        .appendField('as')
        .appendField(new Blockly.FieldTextInput('r'), 'import_module_as_alias')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.from_package_import_modules = {
    init: function () {
      this.appendDummyInput()
        .appendField('from')
        .appendField(
          new Blockly.FieldTextInput('random'),
          'from_package_import_modules_fmodule'
        )
        .appendField('import')
        .appendField(
          new Blockly.FieldTextInput('randint'),
          'from_package_import_modules_module'
        )
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.from_package_import_module_as = {
    init: function () {
      this.appendDummyInput()
        .appendField('from')
        .appendField(
          new Blockly.FieldTextInput('random'),
          'from_package_import_module_as_fmodule'
        )
        .appendField('import')
        .appendField(
          new Blockly.FieldTextInput('randint'),
          'from_package_import_module_as_module'
        )
        .appendField('as')
        .appendField(
          new Blockly.FieldTextInput('r'),
          'from_package_import_module_as_alias'
        )
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }
}
