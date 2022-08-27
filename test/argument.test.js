/* eslint-disable no-undef */
import functions from '../src/function'
const workspace = new functions.Workspace()
const generator = functions.Python
generator.init(workspace)
const assignBlock = workspace.newBlock('assign_operator')
const inputBlock = workspace.newBlock('input')
const textBlock = workspace.newBlock('text')
assignBlock.disabled = false
assignBlock.getInput('variable').connection.connect(textBlock.outputConnection)
assignBlock.getInput('value').connection.connect(inputBlock.outputConnection)
test('assign_operator and input', () => {
  expect(generator.blockToCode(assignBlock)).toEqual(["'' = 0", 99])
})

const roundBlock = workspace.newBlock('round_function')
const mathNumberBlock = workspace.newBlock('math_number')
roundBlock.disabled = false
roundBlock.getInput('number').connection.connect(mathNumberBlock.outputConnection)
roundBlock.getInput('accuracy').connection.connect(mathNumberBlock.outputConnection)
test('round_function', () => {
  expect(generator.blockToCode(roundBlock)).toEqual(['round(0, 0)', 99])
})

const reversedBlock = workspace.newBlock('reverse')
const openfileBlock = workspace.newBlock('open_file')
reversedBlock.disabled = false
reversedBlock
  .getInput('reverse_function')
  .connection.connect(openfileBlock.outputConnection)
test('reverse and open file', () => {
  expect(generator.blockToCode(reversedBlock)).toEqual([
    'reversed((open(file path, r, t)))',
    99
  ])
})

const innerPowBlock = workspace.newBlock('inner_pow')
const ordBlock = workspace.newBlock('ord')
innerPowBlock.disabled = false
innerPowBlock.getInput('base').connection.connect(ordBlock.outputConnection)
innerPowBlock.getInput('exp').connection.connect(ordBlock.outputConnection)
innerPowBlock.getInput('mod').connection.connect(ordBlock.outputConnection)
test('inner_pow', () => {
  expect(generator.blockToCode(innerPowBlock)).toEqual([
    'pow(0, 0, (ord(null)))',
    99
  ])
})

const propertyBlock = workspace.newBlock('property')
const reprBlock = workspace.newBlock('repr')
const rangeBlock = workspace.newBlock('range__')
const mathnumberBlock = workspace.newBlock('math_number')
const textBlockforproperty = workspace.newBlock('text')
propertyBlock.disabled = false
reprBlock.disabled = false
rangeBlock.disposed = false
rangeBlock.getInput('end').connection.connect(mathnumberBlock.outputConnection)
reprBlock.getInput('obj').connection.connect(rangeBlock.outputConnection)
propertyBlock.getInput('fget').connection.connect(reprBlock.outputConnection)
propertyBlock.getInput('fset').connection.connect(textBlockforproperty.outputConnection)
propertyBlock.getInput('fdel').connection.connect(textBlockforproperty.outputConnection)
propertyBlock.getInput('doc').connection.connect(textBlockforproperty.outputConnection)
test('property ord range__', () => {
  expect(generator.blockToCode(propertyBlock)).toEqual([
    "property((repr((range(0, 0, 1)))), null, null, '')",
    99
  ])
})

const setBlock = workspace.newBlock('set_func')
const typeSpecifyBlock = workspace.newBlock('type_specify')
const nullBlock = workspace.newBlock('logic_null')
typeSpecifyBlock.disabled = false
setBlock.disabled = false
typeSpecifyBlock
  .getInput('variable')
  .connection.connect(nullBlock.outputConnection)
setBlock
  .getInput('iterable')
  .connection.connect(typeSpecifyBlock.outputConnection)
test('set_func type_specify', () => {
  expect(generator.blockToCode(setBlock)).toEqual(['set((str(None)))', 99])
})

const octBlock = workspace.newBlock('oct')
const numberBlock = workspace.newBlock('math_number')
octBlock.disabled = false
octBlock.getInput('iterable').connection.connect(numberBlock.outputConnection)
test('oct', () => {
  expect(generator.blockToCode(octBlock)).toEqual(['oct(0)', 99])
})

const classBlock = workspace.newBlock('extend_class')
classBlock.disabled = false
classBlock.getInput('father').connection.connect(classBlock.outputConnection)
test('extend_class', () => {
  expect(generator.blockToCode(classBlock)).toEqual(['extends ', 99])
})

const tupleBlock = workspace.newBlock('tuple')
const boolBlock = workspace.newBlock('logic_boolean')
tupleBlock.getInput('ADD' + 1).connection.connect(boolBlock.outputConnection)
test('tuple', () => {
  expect(generator.blockToCode(tupleBlock)).toEqual(['(None, True)', 0])
})

const globalBlock = workspace.newBlock('global')
const tupleBlockforglobal = workspace.newBlock('tuple')
globalBlock.disabled = false
globalBlock
  .getInput('globalvariable')
  .connection.connect(tupleBlockforglobal.outputConnection)
test('global notes', () => {
  expect(generator.blockToCode(globalBlock)).toEqual('global (None, None)\n')
})

const typeValueBlock = workspace.newBlock('type_value')
const objectBlock = workspace.newBlock('function_object')
const getTypeBlock = workspace.newBlock('get_type')
typeValueBlock.disabled = false
typeValueBlock.getInput('type').connection.connect(objectBlock.outputConnection)
typeValueBlock
  .getInput('value')
  .connection.connect(getTypeBlock.outputConnection)
test('type_value get_type', () => {
  expect(generator.blockToCode(typeValueBlock)).toEqual([
    '(object()).type(null)',
    99
  ])
})

const index1Block = workspace.newBlock('index1')
const objectBlockforindex1 = workspace.newBlock('function_object')
const numberBlockforindex1 = workspace.newBlock('math_number')
index1Block.disabled = false
index1Block.getInput('type').connection.connect(objectBlockforindex1.outputConnection)
index1Block.getInput('index').connection.connect(numberBlockforindex1.outputConnection)
test('index1', () => {
  expect(generator.blockToCode(index1Block)).toEqual(['(object())[0]', 99])
})

const index2Block = workspace.newBlock('index2')
const objectBlockforindex2 = workspace.newBlock('function_object')
index2Block.disabled = false
index2Block.getInput('type').connection.connect(objectBlockforindex2.outputConnection)
test('index2', () => {
  expect(generator.blockToCode(index2Block)).toEqual(['(object())[0 : 1]', 99])
})

const setcomplexBlock = workspace.newBlock('set_complex')
const numberBlockforsetcomplex = workspace.newBlock('math_number')
setcomplexBlock.disabled = false
setcomplexBlock
  .getInput('real')
  .connection.connect(numberBlockforsetcomplex.outputConnection)
test('set_complex', () => {
  expect(generator.blockToCode(setcomplexBlock)).toEqual('0 + 1j')
})

const notesBlock = workspace.newBlock('notes')
notesBlock.disabled = false
test('global notes', () => {
  expect(generator.blockToCode(notesBlock)).toEqual("'''notes'''")
})

const typeStateBlock = workspace.newBlock('type_state')
const objectBlockfortypeState = workspace.newBlock('function_object')
const printBlock = workspace.newBlock('text_print')
typeStateBlock.disabled = false
typeStateBlock
  .getInput('type')
  .connection.connect(objectBlockfortypeState.outputConnection)
typeStateBlock
  .getInput('state')
  .connection.connect(printBlock.previousConnection)
test('type_state', () => {
  expect(generator.blockToCode(typeStateBlock)).toEqual([
    "(object()).  print('')\n",
    99
  ])
})
