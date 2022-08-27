/* eslint-disable no-undef */
import functions from '../src/function'
const workspace = new functions.Workspace()
const generator = functions.Python
generator.init(workspace)

const rowBlock = workspace.newBlock('binary_type')
const stackBlock = workspace.newBlock('logic_null')
rowBlock.disabled = false
rowBlock.getInput('anything').connection.connect(stackBlock.outputConnection)
test('binary_type测试', () => {
  expect(generator.blockToCode(rowBlock)).toEqual(['bytes(None)', 99])
})

const Blocksum = workspace.newBlock('function_sum')
const BlocklNullforsum = workspace.newBlock('logic_null')
Blocksum.disabled = false
Blocksum.getInput('iterable').connection.connect(BlocklNullforsum.outputConnection)
Blocksum.getInput('start').connection.connect(BlocklNullforsum.outputConnection)
test('function_sum 测试', () => {
  expect(generator.blockToCode(Blocksum)).toEqual('sum(,None)')
})

const Blockxrange = workspace.newBlock('xrange')
const BlocklNullforxrange = workspace.newBlock('logic_null')
Blockxrange.disabled = false
Blockxrange.getInput('start').connection.connect(BlocklNullforxrange.outputConnection)
Blockxrange.getInput('stop').connection.connect(BlocklNullforxrange.outputConnection)
Blockxrange.getInput('step').connection.connect(BlocklNullforxrange.outputConnection)
test('xrange 测试', () => {
  expect(generator.blockToCode(Blockxrange)).toEqual(['xrange(0,None,None)', 99])
})

const Blocktypeone = workspace.newBlock('type_with_one_argument')
const BlocklNullfortypeone = workspace.newBlock('logic_null')
Blocktypeone.disabled = false
Blocktypeone.getInput('object').connection.connect(BlocklNullfortypeone.outputConnection)
test('type_with_one_argument 测试', () => {
  expect(generator.blockToCode(Blocktypeone)).toEqual(['type(None)', 99])
})

const BlocktypeThree = workspace.newBlock('type_with_three_argument')
const BlocklNullfortypeThree = workspace.newBlock('logic_null')
BlocktypeThree.disabled = false
BlocktypeThree.getInput('name').connection.connect(BlocklNullfortypeThree.outputConnection)
BlocktypeThree.getInput('bases').connection.connect(BlocklNullfortypeThree.outputConnection)
BlocktypeThree.getInput('dict').connection.connect(BlocklNullfortypeThree.outputConnection)
test('type_with_three_argument 测试', () => {
  expect(generator.blockToCode(BlocktypeThree)).toEqual(['type(,,None)', 99])
})

const Blockdict = workspace.newBlock('dict_create_with')
const BlocklNullfordict = workspace.newBlock('logic_null')
Blockdict.disabled = false
Blockdict.getInput('ADD' + 0).connection.connect(BlocklNullfordict.outputConnection)
test('dict 测试', () => {
  expect(generator.blockToCode(Blockdict)).toEqual(["{'None':None, 'None':None, 'None':None}", 0])
})
