/* eslint-disable no-undef */
import functions from '../src/function'
const workspace = new functions.Workspace()
const generator = functions.Python
generator.init(workspace)

const iterBlock = workspace.newBlock('iter')
const listBlock = workspace.newBlock('lists_create_empty')
iterBlock.disabled = false
iterBlock.getInput('list').connection.connect(listBlock.outputConnection)
test('iter 测试', () => {
  expect(generator.blockToCode(iterBlock)).toEqual(['iter([])', 99])
})

const iterBlockTestOne = workspace.newBlock('iter')
const nextBlock = workspace.newBlock('next')
nextBlock.disabled = false
nextBlock
  .getInput('iterator')
  .connection.connect(iterBlockTestOne.outputConnection)
test('next 测试', () => {
  expect(generator.blockToCode(nextBlock)).toEqual(['next((iter()))', 99])
})

const iterBlockTestTwo = workspace.newBlock('iter')
const iterfBlock = workspace.newBlock('__iter__function')
iterfBlock.disabled = false
iterfBlock
  .getInput('iterator')
  .connection.connect(iterBlockTestTwo.outputConnection)
test('__iter__Function 测试', () => {
  expect(generator.blockToCode(iterfBlock)).toEqual([
    'def __iter__((iter()))' + '\n',
    99
  ])
})

const iterBlockTestThree = workspace.newBlock('iter')
const nextfBlock = workspace.newBlock('__next__function')
nextfBlock.disabled = false
nextfBlock
  .getInput('iterator')
  .connection.connect(iterBlockTestThree.outputConnection)
test('__next__Function 测试', () => {
  expect(generator.blockToCode(nextfBlock)).toEqual([
    'def __next__((iter()))' + '\n',
    99
  ])
})

const stopiterationOne = workspace.newBlock('stopiterationmsg')
const stopiterationTwo = workspace.newBlock('stopiterationmsg')
stopiterationOne.disabled = false
stopiterationOne.nextConnection.connect(stopiterationTwo.previousConnection)
test('stopiteration 测试', () => {
  expect(generator.blockToCode(stopiterationOne)).toEqual(
    'raise StopIterationraise StopIteration'
  )
})

const itemBlock = workspace.newBlock('logic_null')
const floatBlock = workspace.newBlock('float')
floatBlock.disabled = false
floatBlock.getInput('otherValue').connection.connect(itemBlock.outputConnection)
test('float 测试', () => {
  expect(generator.blockToCode(floatBlock)).toEqual('float(None)')
})

const textBlock = workspace.newBlock('logic_null')
const numberBlock = workspace.newBlock('math_number')
const formatBlock = workspace.newBlock('format')
formatBlock.disabled = false
formatBlock.getInput('txt').connection.connect(textBlock.outputConnection)
formatBlock.getInput('string').connection.connect(numberBlock.outputConnection)
test('format 测试', () => {
  expect(generator.blockToCode(formatBlock)).toEqual(['None.format(0)', 99])
})

const setBlock = workspace.newBlock('create_set_one')
const frozensetBlock = workspace.newBlock('frozenset')
frozensetBlock.disabled = false
frozensetBlock.getInput('set').connection.connect(setBlock.outputConnection)
test('frozenset 测试', () => {
  expect(generator.blockToCode(frozensetBlock)).toEqual([
    'class frozenset((set()))',
    99
  ])
})

const classBlock = workspace.newBlock('extend_class')
const getattrBlock = workspace.newBlock('getattr')
getattrBlock.disabled = false
getattrBlock.getInput('class').connection.connect(classBlock.outputConnection)
test('getattr 测试', () => {
  expect(generator.blockToCode(getattrBlock)).toEqual([
    'getattr((extends ), )',
    99
  ])
})

const objectBlock = workspace.newBlock('logic_null')
const hasattrBlock = workspace.newBlock('hasattr')
hasattrBlock.disabled = false
hasattrBlock.getInput('object').connection.connect(objectBlock.outputConnection)
test('hasattr 测试', () => {
  expect(generator.blockToCode(hasattrBlock)).toEqual(['hasattr(None, )', 99])
})

const numberBlockTwo = workspace.newBlock('math_number')
const intBlock = workspace.newBlock('int_class')
intBlock.disabled = false
intBlock.getInput('number').connection.connect(numberBlockTwo.outputConnection)
test('int 测试', () => {
  expect(generator.blockToCode(intBlock)).toEqual(['class int(0, )', 99])
})

const numberBlockThree = workspace.newBlock('math_number')
const numberBlockFour = workspace.newBlock('math_number')
const arithmeticoperatorBlock = workspace.newBlock('arithmetic_operator')
arithmeticoperatorBlock.disabled = false
arithmeticoperatorBlock
  .getInput('value1')
  .connection.connect(numberBlockThree.outputConnection)
arithmeticoperatorBlock
  .getInput('value2')
  .connection.connect(numberBlockFour.outputConnection)
test('arithmeticoperator测试', () => {
  expect(generator.blockToCode(arithmeticoperatorBlock)).toEqual(['0 + 0', 99])
})

const nullBlock = workspace.newBlock('logic_null')
const hashBlock = workspace.newBlock('hash')
hashBlock.disabled = false
hashBlock.getInput('object').connection.connect(nullBlock.outputConnection)
test('hash 测试', () => {
  expect(generator.blockToCode(hashBlock)).toEqual(['hash(None)', 99])
})

const nullBlockTwo = workspace.newBlock('logic_null')
const helpBlock = workspace.newBlock('help')
helpBlock.disabled = false
helpBlock
  .getInput('helpValue')
  .connection.connect(nullBlockTwo.outputConnection)
test('help 测试', () => {
  expect(generator.blockToCode(helpBlock)).toEqual('help(None)')
})

const numberBlockFive = workspace.newBlock('math_number')
const hexBlock = workspace.newBlock('hex')
hexBlock.disabled = false
hexBlock.getInput('number').connection.connect(numberBlockFive.outputConnection)
test('hex 测试', () => {
  expect(generator.blockToCode(hexBlock)).toEqual(['hex(0)', 99])
})

const nullBlockThree = workspace.newBlock('logic_null')
const idBlock = workspace.newBlock('id_function')
idBlock.disabled = false
idBlock.getInput('object').connection.connect(nullBlockThree.outputConnection)
test('idBlock 测试', () => {
  expect(generator.blockToCode(idBlock)).toEqual(['id(None)', 99])
})

const mathBlockSix = workspace.newBlock('math_number')
const inputBlock = workspace.newBlock('input')
inputBlock.disabled = false
inputBlock
  .getInput('inputValue')
  .connection.connect(mathBlockSix.outputConnection)
test('input 测试', () => {
  expect(generator.blockToCode(inputBlock)).toEqual('input(0)')
})

const globalsBlock = workspace.newBlock('globals')
globalsBlock.disabled = false
test('global 测试', () => {
  expect(generator.blockToCode(globalsBlock)).toEqual(['globals()', 99])
})
