import additionB from './blocks/addition'
import assignmentB from '../src/blocks/assignment'
import classesB from './blocks/classes'
import dataTypeB from './blocks/dataType'
import datetimeB from '../src/blocks/datetime'
import exceptionB from '../src/blocks/exception'
import fileB from '../src/blocks/file'
import importModulesB from './blocks/importModules'
import innerFunctionsB from './blocks/innerFunctions'
import iteratorB from '../src/blocks/iterator'
import operatorsB from '../src/blocks/operators'
import reB from '../src/blocks/re'
import additionG from './generator/addition'
import assignmentG from '../src/generator/assignment'
import classesG from './generator/classes'
import dataTypeG from './generator/dataType'
import datetimeG from '../src/generator/datetime'
import exceptionG from '../src/generator/exception'
import fileG from '../src/generator/file'
import importModulesG from './generator/importModules'
import innerFunctionsG from './generator/innerFunctions'
import iteratorG from '../src/generator/iterator'
import operatorsG from '../src/generator/operators'
import reG from '../src/generator/re'
import PythonToBlocks from './PythonToBlocks'
function init (a) {
  additionB(a)
  assignmentB(a)
  classesB(a)
  dataTypeB(a)
  datetimeB(a)
  exceptionB(a)
  fileB(a)
  importModulesB(a)
  innerFunctionsB(a)
  iteratorB(a)
  operatorsB(a)
  reB(a)
  additionG(a)
  assignmentG(a)
  classesG(a)
  dataTypeG(a)
  datetimeG(a)
  exceptionG(a)
  fileG(a)
  importModulesG(a)
  innerFunctionsG(a)
  iteratorG(a)
  operatorsG(a)
  reG(a)
}

export { init, PythonToBlocks }
