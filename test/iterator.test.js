/* eslint-disable no-undef */
import functions from '../src/function'
const workspace = new functions.Workspace()
const generator = functions.Python
generator.init(workspace)

const rowBlock = workspace.newBlock('bitwise_operators')
const stackBlock = workspace.newBlock('logic_null')
const stackfBlock = workspace.newBlock('logic_null')
rowBlock.disabled = false
rowBlock
  .getInput('bitwise_left_argument')
  .connection.connect(stackfBlock.outputConnection)
rowBlock
  .getInput('bitwise_right_argument')
  .connection.connect(stackBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(rowBlock)).toEqual(['None & None', 99])
})

const identityFirstBlock = workspace.newBlock('identity_operators')
const identitySecondBlock = workspace.newBlock('logic_null')
const identityThirdBlock = workspace.newBlock('logic_null')
identityFirstBlock.disabled = false
identityFirstBlock
  .getInput('identity_first_argument')
  .connection.connect(identityThirdBlock.outputConnection)
identityFirstBlock
  .getInput('identity_second_argument')
  .connection.connect(identitySecondBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(identityFirstBlock)).toEqual([
    'None is None',
    99
  ])
})

const importModuleBlock = workspace.newBlock('import_modules')
importModuleBlock.disabled = false
test('block generator 测试', () => {
  expect(generator.blockToCode(importModuleBlock)).toEqual('import random\n')
})

const importModuleAsBlock = workspace.newBlock('import_module_as')
importModuleAsBlock.disabled = false
test('block generator 测试', () => {
  expect(generator.blockToCode(importModuleAsBlock)).toEqual(
    'import random as r\n'
  )
})

const importModuleFromBlock = workspace.newBlock('from_package_import_modules')
importModuleFromBlock.disabled = false
test('block generator 测试', () => {
  expect(generator.blockToCode(importModuleFromBlock)).toEqual(
    'from random import randint\n'
  )
})

const importModuleFromAsBlock = workspace.newBlock(
  'from_package_import_module_as'
)
importModuleFromAsBlock.disabled = false
test('block generator 测试', () => {
  expect(generator.blockToCode(importModuleFromAsBlock)).toEqual(
    'from random import randint as r\n'
  )
})

const createSetOnefBlock = workspace.newBlock('create_set_one')
const createSetOnesBlock = workspace.newBlock('logic_null')
createSetOnefBlock.disabled = false
createSetOnefBlock
  .getInput('create_set_one_argument')
  .connection.connect(createSetOnesBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(createSetOnefBlock)).toEqual(['set(None)', 99])
})

const createSetTwofBlock = workspace.newBlock('create_set_two')
const createSetTwosBlock = workspace.newBlock('logic_null')
createSetTwofBlock.disabled = false
createSetTwofBlock
  .getInput('create_set_two_argument')
  .connection.connect(createSetTwosBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(createSetTwofBlock)).toEqual(['{None}', 99])
})

const delSetfBlock = workspace.newBlock('del_set')
const delSetsBlock = workspace.newBlock('create_set_one')
delSetfBlock.disabled = false
delSetfBlock
  .getInput('del_set_name_of_set')
  .connection.connect(delSetsBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(delSetfBlock)).toEqual(['del (set())', 99])
})

const clearSetfBlock = workspace.newBlock('clear_set')
const clearSetsBlock = workspace.newBlock('create_set_one')
clearSetfBlock.disabled = false
clearSetfBlock
  .getInput('clear_set_name_of_set')
  .connection.connect(clearSetsBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(clearSetfBlock)).toEqual(['(set()).clear()', 99])
})

const setFunNumfBlock = workspace.newBlock('set_function_of_num')
const setFunNumsBlock = workspace.newBlock('create_set_one')
const setFunNumtBlock = workspace.newBlock('logic_null')
setFunNumfBlock.disabled = false
setFunNumfBlock
  .getInput('set_function_of_num_caller')
  .connection.connect(setFunNumsBlock.outputConnection)
setFunNumfBlock
  .getInput('set_function_of_num_argument')
  .connection.connect(setFunNumtBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(setFunNumfBlock)).toEqual([
    'set().add(None)',
    99
  ])
})

const setFunfBlock = workspace.newBlock('set_functions')
const setFunsBlock = workspace.newBlock('create_set_one')
const setFuntBlock = workspace.newBlock('create_set_two')
setFunfBlock.disabled = false
setFunfBlock
  .getInput('set_functions_caller')
  .connection.connect(setFuntBlock.outputConnection)
setFunfBlock
  .getInput('set_functions_argument')
  .connection.connect(setFunsBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(setFunfBlock)).toEqual([
    '{}.difference(set())',
    99
  ])
})

const abslBlock = workspace.newBlock('abs')
const absrBlock = workspace.newBlock('logic_null')
abslBlock.disabled = false
abslBlock
  .getInput('abs_argument')
  .connection.connect(absrBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(abslBlock)).toEqual(['abs(None)', 99])
})

const aiterfBlock = workspace.newBlock('aiter')
const aitersBlock = workspace.newBlock('iter')
aiterfBlock.disabled = false
aiterfBlock
  .getInput('aiter_argument')
  .connection.connect(aitersBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(aiterfBlock)).toEqual(['aiter(iter())', 99])
})

const allfBlock = workspace.newBlock('all')
const allsBlock = workspace.newBlock('iter')
allfBlock.disabled = false
allfBlock
  .getInput('all_argument')
  .connection.connect(allsBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(allfBlock)).toEqual(['all(iter())', 99])
})

const anyfBlock = workspace.newBlock('any')
const anysBlock = workspace.newBlock('iter')
anyfBlock.disabled = false
anyfBlock
  .getInput('any_argument')
  .connection.connect(anysBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(anyfBlock)).toEqual(['any(iter())', 99])
})

const anextfBlock = workspace.newBlock('anext')
const anextsBlock = workspace.newBlock('iter')
const anexttBlock = workspace.newBlock('iter')
anextfBlock.disabled = false
anextfBlock
  .getInput('anext_left_argument')
  .connection.connect(anextsBlock.outputConnection)
anextfBlock
  .getInput('anext_right_argument')
  .connection.connect(anexttBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(anextfBlock)).toEqual([
    'anext(iter(), iter())',
    99
  ])
})

const asciifBlock = workspace.newBlock('ascii')
const asciisBlock = workspace.newBlock('logic_null')
asciifBlock.disabled = false
asciifBlock
  .getInput('ascii_argument')
  .connection.connect(asciisBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(asciifBlock)).toEqual(['ascii(None)', 99])
})

const binfBlock = workspace.newBlock('bin')
const binsBlock = workspace.newBlock('logic_null')
binfBlock.disabled = false
binfBlock
  .getInput('bin_argument')
  .connection.connect(binsBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(binfBlock)).toEqual(['bin(None)', 99])
})

const boolfBlock = workspace.newBlock('bool')
const boolsBlock = workspace.newBlock('logic_null')
boolfBlock.disabled = false
boolfBlock
  .getInput('bool_argument')
  .connection.connect(boolsBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(boolfBlock)).toEqual(['bool(None)', 99])
})

const breakPointfBlock = workspace.newBlock('break_point')
const breakPointsBlock = workspace.newBlock('logic_null')
const breakPointtBlock = workspace.newBlock('logic_null')
breakPointfBlock.disabled = false
breakPointfBlock
  .getInput('breakpoint_left_argument')
  .connection.connect(breakPointsBlock.outputConnection)
breakPointfBlock
  .getInput('breakpoint_right_argument')
  .connection.connect(breakPointtBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(breakPointfBlock)).toEqual([
    'breakpoint(None, None)',
    99
  ])
})

const bytearrayfBlock = workspace.newBlock('byte_array')
const bytearraysBlock = workspace.newBlock('logic_null')
const bytearraytBlock = workspace.newBlock('text')
const bytearrayffBlock = workspace.newBlock('logic_null')
bytearrayfBlock.disabled = false
bytearrayfBlock
  .getInput('bytearray_source')
  .connection.connect(bytearraysBlock.outputConnection)
bytearrayfBlock
  .getInput('bytearray_encoding')
  .connection.connect(bytearraytBlock.outputConnection)
bytearrayfBlock
  .getInput('bytearray_error')
  .connection.connect(bytearrayffBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(bytearrayfBlock)).toEqual([
    "bytearray(None, '', None)",
    99
  ])
})

const bytesfBlock = workspace.newBlock('bytes')
const bytessBlock = workspace.newBlock('logic_null')
const bytestBlock = workspace.newBlock('text')
const bytesffBlock = workspace.newBlock('logic_null')
bytesfBlock.disabled = false
bytesfBlock
  .getInput('bytes_source')
  .connection.connect(bytessBlock.outputConnection)
bytesfBlock
  .getInput('bytes_encoding')
  .connection.connect(bytestBlock.outputConnection)
bytesfBlock
  .getInput('bytes_error')
  .connection.connect(bytesffBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(bytesfBlock)).toEqual([
    "bytes(None, '', None)",
    99
  ])
})

const callablefBlock = workspace.newBlock('callable')
const callablesBlock = workspace.newBlock('logic_null')
callablefBlock.disabled = false
callablefBlock
  .getInput('callable_argument')
  .connection.connect(callablesBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(callablefBlock)).toEqual(['callable(None)', 99])
})
