export default function importModule (Blockly) {
  Blockly.Python.import_modules = function (block) {
    const module = block.getFieldValue('import_modules_module')
    return `import ${module}\n`
  }

  Blockly.Python.import_module_as = function (block) {
    const asModule = block.getFieldValue('import_module_as_module')
    const asAlias = block.getFieldValue('import_module_as_alias')
    return `import ${asModule} as ${asAlias}\n`
  }

  Blockly.Python.from_package_import_modules = function (block) {
    const fromFmodule = block.getFieldValue('from_package_import_modules_fmodule')
    const fromModule = block.getFieldValue('from_package_import_modules_module')
    return `from ${fromFmodule} import ${fromModule}\n`
  }

  Blockly.Python.from_package_import_module_as = function (block) {
    const fromAsFmodule = block.getFieldValue(
      'from_package_import_module_as_fmodule'
    )
    const fromAsModule = block.getFieldValue(
      'from_package_import_module_as_module'
    )
    const fromAsAlias = block.getFieldValue('from_package_import_module_as_alias')
    return `from ${fromAsFmodule} import ${fromAsModule} as ${fromAsAlias}\n`
  }
}
