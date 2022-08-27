/* eslint-disable no-undef */
import functions from '../src/function'
const workspace = new functions.Workspace()
const generator = functions.Python
generator.init(workspace)
// in
const inrBlock = workspace.newBlock('in')
const inlBlock = workspace.newBlock('logic_null')
inrBlock.disabled = false
inrBlock.getInput('inBool').connection.connect(inlBlock.outputConnection)
test('in', () => {
  expect(generator.blockToCode(inrBlock)).toEqual(['in None', 99])
})
// findall
const findrBlock = workspace.newBlock('find_all')
const findlBlock = workspace.newBlock('logic_null')
findrBlock.disabled = false
findrBlock.getInput('findvalue').connection.connect(findlBlock.outputConnection)
test('findall', () => {
  expect(generator.blockToCode(findrBlock)).toEqual(['re.findall(,None)', 99])
})
// research
const researchrBlock = workspace.newBlock('search')
const researchlBlock = workspace.newBlock('logic_null')
researchrBlock.disabled = false
researchrBlock
  .getInput('searchname')
  .connection.connect(researchlBlock.outputConnection)
test('research', () => {
  expect(generator.blockToCode(researchrBlock)).toEqual([
    're.search(,None)',
    99
  ])
})
// resplit
const splitrBlock = workspace.newBlock('resplit')
const splitlBlock = workspace.newBlock('logic_null')
splitrBlock.disabled = false
splitrBlock
  .getInput('resplitname')
  .connection.connect(splitlBlock.outputConnection)
test('resplit ', () => {
  expect(generator.blockToCode(splitrBlock)).toEqual(['re.split(,None)', 99])
})
// resub
const subrBlock = workspace.newBlock('sub')
const sublBlock = workspace.newBlock('logic_null')
subrBlock.disabled = false
subrBlock.getInput('subname').connection.connect(sublBlock.outputConnection)
test('resub ', () => {
  expect(generator.blockToCode(subrBlock)).toEqual(['re.sub(,,None)', 99])
})
// control_sub
const ssubrBlock = workspace.newBlock('control_sub')
const ssublBlock = workspace.newBlock('logic_null')
ssubrBlock.disabled = false
ssubrBlock.getInput('subtime').connection.connect(ssublBlock.outputConnection)
test('control_sub ', () => {
  expect(generator.blockToCode(ssubrBlock)).toEqual(['re.sub(,,,None)', 99])
})
// openfile
const openrBlock = workspace.newBlock('open')
const openlBlock = workspace.newBlock('text')
openrBlock.disabled = false
openrBlock.getInput('txt').connection.connect(openlBlock.outputConnection)
test('openfile', () => {
  expect(generator.blockToCode(openrBlock)).toEqual(["open('',)", 99])
})
// readfile
const rowBlock = workspace.newBlock('readfile')
const stackBlock = workspace.newBlock('logic_null')
rowBlock.disabled = false
rowBlock.getInput('readname').connection.connect(stackBlock.outputConnection)
test('readfile', () => {
  expect(generator.blockToCode(rowBlock)).toEqual(['None.read()', 99])
})
// control_readfile
const rrowBlock = workspace.newBlock('control_readfile')
const sstackBlock = workspace.newBlock('logic_null')
rrowBlock.disabled = false
rrowBlock
  .getInput('controlnum')
  .connection.connect(sstackBlock.outputConnection)
test('control_readfile', () => {
  expect(generator.blockToCode(rrowBlock)).toEqual(['.read(None)', 99])
})
// readline
const linerBlock = workspace.newBlock('readline')
const linelBlock = workspace.newBlock('logic_null')
linerBlock.disabled = false
linerBlock.getInput('readline').connection.connect(linelBlock.outputConnection)
test('readline', () => {
  expect(generator.blockToCode(linerBlock)).toEqual(['None.readline()', 99])
})
// closefile
const closerBlock = workspace.newBlock('closefile')
const closelBlock = workspace.newBlock('logic_null')
closerBlock.disabled = false
closerBlock
  .getInput('closefile')
  .connection.connect(closelBlock.outputConnection)
test('closefile', () => {
  expect(generator.blockToCode(closerBlock)).toEqual(['None.close()', 99])
})
// writefile
const writerBlock = workspace.newBlock('writefile')
const writelBlock = workspace.newBlock('text')
writerBlock.disabled = false
writerBlock
  .getInput('writename')
  .connection.connect(writelBlock.outputConnection)
test('writefile', () => {
  expect(generator.blockToCode(writerBlock)).toEqual([".write('')", 99])
})
// removefile
const removerBlock = workspace.newBlock('removefile')
const removelBlock = workspace.newBlock('text')
removerBlock.disabled = false
removerBlock
  .getInput('removefile')
  .connection.connect(removelBlock.outputConnection)
test('removefile', () => {
  expect(generator.blockToCode(removerBlock)).toEqual(["os.remove('')", 99])
})
// remove_all_file
const rremoverBlock = workspace.newBlock('remove_all_file')
const rremovelBlock = workspace.newBlock('text')
rremoverBlock.disabled = false
rremoverBlock
  .getInput('removeall')
  .connection.connect(rremovelBlock.outputConnection)
test('remove_all_file', () => {
  expect(generator.blockToCode(rremoverBlock)).toEqual(["os.rmdir('')", 99])
})
// if_exist_file
const ifexitrBlock = workspace.newBlock('if_exist_file')
const ifexitlBlock = workspace.newBlock('text')
ifexitrBlock.disabled = false
ifexitrBlock
  .getInput('existfile')
  .connection.connect(ifexitlBlock.outputConnection)
test('if_exist_file', () => {
  expect(generator.blockToCode(ifexitrBlock)).toEqual([
    "os.path.exists('')",
    99
  ])
})
// chr
const chrrBlock = workspace.newBlock('chr')
const chrlBlock = workspace.newBlock('logic_null')
chrrBlock.disabled = false
chrrBlock.getInput('chrnum').connection.connect(chrlBlock.outputConnection)
test('chr', () => {
  expect(generator.blockToCode(chrrBlock)).toEqual(['chr(None)', 99])
})
// classmethod
const classrBlock = workspace.newBlock('class_method')
const classlBlock = workspace.newBlock('class_method')
classrBlock.disabled = false
classrBlock.nextConnection.connect(classlBlock.previousConnection)
test('in', () => {
  expect(generator.blockToCode(classrBlock)).toEqual('@classmethod@classmethod')
})
// compile
const compilerBlock = workspace.newBlock('compile')
const compilelBlock = workspace.newBlock('logic_null')
compilerBlock.disabled = false
compilerBlock
  .getInput('flags')
  .connection.connect(compilelBlock.outputConnection)
test('compile', () => {
  expect(generator.blockToCode(compilerBlock)).toEqual('compile(,,,None,,)')
})
// complex
const complexrBlock = workspace.newBlock('complex')
const complexlBlock = workspace.newBlock('logic_null')
complexrBlock.disabled = false
complexrBlock
  .getInput('complex')
  .connection.connect(complexlBlock.outputConnection)
test('complex', () => {
  expect(generator.blockToCode(complexrBlock)).toEqual(['complex(None+)', 99])
})
// delattr
const delarBlock = workspace.newBlock('delattr')
const delalBlock = workspace.newBlock('logic_null')
delarBlock.disabled = false
delarBlock
  .getInput('delattrobject')
  .connection.connect(delalBlock.outputConnection)
test('delattr', () => {
  expect(generator.blockToCode(delarBlock)).toEqual(['delattr(None,)', 99])
})
// dir
const dirrBlock = workspace.newBlock('dir')
const dirlBlock = workspace.newBlock('logic_null')
dirrBlock.disabled = false
dirrBlock.getInput('dirobject').connection.connect(dirlBlock.outputConnection)
test('dir', () => {
  expect(generator.blockToCode(dirrBlock)).toEqual(['dir(None)', 99])
})
// divmod
const divmodrBlock = workspace.newBlock('divmod')
const divmodlBlock = workspace.newBlock('logic_null')
divmodrBlock.disabled = false
divmodrBlock
  .getInput('divmoda')
  .connection.connect(divmodlBlock.outputConnection)
test('divmoda', () => {
  expect(generator.blockToCode(divmodrBlock)).toEqual(['divmod(None,)', 99])
})
// enumerate
const enumrBlock = workspace.newBlock('enumerate')
const enumlBlock = workspace.newBlock('logic_null')
enumrBlock.disabled = false
enumrBlock.getInput('enumstart').connection.connect(enumlBlock.outputConnection)
test('enumerate', () => {
  expect(generator.blockToCode(enumrBlock)).toEqual(['enumerate(,None)', 99])
})
// filter
const filtrBlock = workspace.newBlock('filter')
const filtlBlock = workspace.newBlock('logic_null')
filtrBlock.disabled = false
filtrBlock
  .getInput('filterfunction')
  .connection.connect(filtlBlock.outputConnection)
test('filter', () => {
  expect(generator.blockToCode(filtrBlock)).toEqual(['filter(None,)', 99])
})
// eval
const evalrBlock = workspace.newBlock('eval')
const evallBlock = workspace.newBlock('logic_null')
evalrBlock.disabled = false
evalrBlock.getInput('evala').connection.connect(evallBlock.outputConnection)
test('eval', () => {
  expect(generator.blockToCode(evalrBlock)).toEqual(["eval('None,')", 99])
})
// exec
const execrBlock = workspace.newBlock('exec')
const execlBlock = workspace.newBlock('empty_input')
execrBlock.disabled = false
execrBlock
  .getInput('execglobal')
  .connection.connect(execlBlock.outputConnection)
test('exec', () => {
  expect(generator.blockToCode(execrBlock)).toEqual(['exec((input()),)', 99])
})
// raw input
const globrBlock = workspace.newBlock('globall')
const globlBlock = workspace.newBlock('raw_input')
globrBlock.disabled = false
test('raw input', () => {
  expect(generator.blockToCode(globlBlock)).toEqual(['raw_input()', 99])
})
// global
test('global', () => {
  expect(generator.blockToCode(globrBlock)).toEqual(['global ', 99])
})
// datetime_now
const dnowrBlock = workspace.newBlock('datetime_now')
dnowrBlock.disabled = false
test('datetime_now', () => {
  expect(generator.blockToCode(dnowrBlock)).toEqual([
    'datetime.datetime.now()',
    99
  ])
})
// datetime
const daterBlock = workspace.newBlock('datetime')
const datelBlock = workspace.newBlock('logic_null')
daterBlock.disabled = false
daterBlock.getInput('dateyear').connection.connect(datelBlock.outputConnection)
test('datetime', () => {
  expect(generator.blockToCode(daterBlock)).toEqual([
    'datetime.datetime(None,,)',
    99
  ])
})
// strftime
const strfrBlock = workspace.newBlock('strftime')
const strflBlock = workspace.newBlock('logic_null')
strfrBlock.disabled = false
strfrBlock.getInput('datetype').connection.connect(strflBlock.outputConnection)
test('strftime', () => {
  expect(generator.blockToCode(strfrBlock)).toEqual(['.strftime("None")', 99])
})
