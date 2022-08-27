/* eslint-disable no-undef */
import functions from '../src/function'
const workspace = new functions.Workspace()
const generator = functions.Python
generator.init(workspace)

const lengthrowBlock = workspace.newBlock('function_length')
const lengthstackBlock = workspace.newBlock('text')
lengthrowBlock.disabled = false
lengthrowBlock
  .getInput('function_length_inputtext')
  .connection.connect(lengthstackBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(lengthrowBlock)).toEqual(["len('')", 99])
})

const localrowBlock = workspace.newBlock('function_local')
localrowBlock.disabled = false
test('block generator 测试', () => {
  expect(generator.blockToCode(localrowBlock)).toEqual(['locals()', 99])
})

const trysentencee = workspace.newBlock('try_sentence')
trysentencee.disabled = false
test('block generator 测试', () => {
  expect(generator.blockToCode(trysentencee)).toEqual('try:\n')
})

const exceptaddd = workspace.newBlock('except_add')
const exceptadddstack = workspace.newBlock('text')
exceptaddd.disabled = false
exceptaddd
  .getInput('except_add')
  .connection.connect(exceptadddstack.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(exceptaddd)).toEqual('except \'\':\n')
})

const raisesentencee = workspace.newBlock('raise_sentence')
const raisesentencestack = workspace.newBlock('text')
raisesentencee.disabled = false
raisesentencee
  .getInput('raise_error')
  .connection.connect(raisesentencestack.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(raisesentencee)).toEqual('raise error(\'\')\n')
})

const elsesentencee = workspace.newBlock('else_sentence')
elsesentencee.disabled = false
test('block generator 测试', () => {
  expect(generator.blockToCode(elsesentencee)).toEqual('else:\n')
})

const exceptsentencee = workspace.newBlock('except_sentence')
exceptsentencee.disabled = false
test('block generator 测试', () => {
  expect(generator.blockToCode(exceptsentencee)).toEqual('except:\n')
})

const finallysentencee = workspace.newBlock('finally_sentence')
finallysentencee.disabled = false
test('block generator 测试', () => {
  expect(generator.blockToCode(finallysentencee)).toEqual('finally:\n')
})

const objectrowBlock = workspace.newBlock('function_object')
objectrowBlock.disabled = false
test('block generator 测试', () => {
  expect(generator.blockToCode(objectrowBlock)).toEqual(['object()', 99])
})

const isinstancerowBlock = workspace.newBlock('function_isinstance')
const isinstancestackBlockText = workspace.newBlock('text')
const isinstancestackBlockArithmetic = workspace.newBlock('arithmetic_operator')
isinstancerowBlock.disabled = false
isinstancerowBlock
  .getInput('function_isinstance_object')
  .connection.connect(isinstancestackBlockText.outputConnection)
isinstancerowBlock
  .getInput('function_isinstance_classinformation')
  .connection.connect(isinstancestackBlockArithmetic.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(isinstancerowBlock)).toEqual([
    "isinstance('', ( + ))",
    99
  ])
})

const issubclassrowBlock = workspace.newBlock('function_issubclass')
const issubclassstackBlockText = workspace.newBlock('text')
issubclassrowBlock.disabled = false
issubclassrowBlock
  .getInput('function_issubclass_class')
  .connection.connect(issubclassstackBlockText.outputConnection)
issubclassrowBlock
  .getInput('function_issubclass_classinfo')
  .connection.connect(issubclassstackBlockText.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(issubclassrowBlock)).toEqual([
    "issubclass(, '')",
    99
  ])
})

const classMethodBlock = workspace.newBlock('class_method')
classMethodBlock.disabled = false
test('block generator 测试', () => {
  expect(generator.blockToCode(classMethodBlock)).toEqual('@classmethod')
})

const classMethodReturnBlock = workspace.newBlock('class_method_return')
classMethodReturnBlock.disabled = false
test('block generator 测试', () => {
  expect(generator.blockToCode(classMethodReturnBlock)).toEqual([
    '实例名.方法名()\n',
    99
  ])
})

const memoryview = workspace.newBlock('function_memoryview')
const memoryviewstack = workspace.newBlock('text')
lengthrowBlock.disabled = false
memoryview
  .getInput('function_memoryview_object')
  .connection.connect(memoryviewstack.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(memoryview)).toEqual(["memoryview('')", 99])
})

const mapBlock = workspace.newBlock('function_map')
const iterBlock = workspace.newBlock('iter')
const nullBlock = workspace.newBlock('logic_null')
mapBlock.disabled = false
mapBlock
  .getInput('function_map_function')
  .connection.connect(nullBlock.outputConnection)
mapBlock
  .getInput('function_map_iterable')
  .connection.connect(iterBlock.outputConnection)
test('map 测试', () => {
  expect(generator.blockToCode(mapBlock)).toEqual(['map(None, (iter()))', 99])
})

const max = workspace.newBlock('function_max')
const maxstackBlock1 = workspace.newBlock('text')
const maxstackBlock2 = workspace.newBlock('arithmetic_operator')
max.disabled = false
max
  .getInput('function_max_input1')
  .connection.connect(maxstackBlock1.outputConnection)
max
  .getInput('function_max_input2')
  .connection.connect(maxstackBlock2.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(max)).toEqual(['max(, ( + ))', 99])
})

const min = workspace.newBlock('function_min')
const minstackBlockText = workspace.newBlock('text')
const minstackBlockArithmetic = workspace.newBlock('arithmetic_operator')
min.disabled = false
min
  .getInput('function_min_input1')
  .connection.connect(minstackBlockText.outputConnection)
min
  .getInput('function_min_input2')
  .connection.connect(minstackBlockArithmetic.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(min)).toEqual(['min(, ( + ))', 99])
})

const classBuildfBlock = workspace.newBlock('class_build')
const classBuildsBlock = workspace.newBlock('text_print')
classBuildfBlock.disabled = false
classBuildfBlock
  .getInput('class_build_classcontent')
  .connection.connect(classBuildsBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(classBuildfBlock)).toEqual('class :\n')
})

const nextfBlock = workspace.newBlock('function_next')
const nextsBlock = workspace.newBlock('iter')
nextfBlock.disabled = false
nextfBlock
  .getInput('function_next_iterable')
  .connection.connect(nextsBlock.outputConnection)
test('block generator 测试', () => {
  expect(generator.blockToCode(nextfBlock)).toEqual(['next((iter()))', 99])
})
