(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["myLib"] = factory();
	else
		root["myLib"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_addition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_blocks_assignment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_dataType__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_blocks_datetime__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_blocks_exception__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_blocks_file__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blocks_importModules__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blocks_innerFunctions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_blocks_iterator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_blocks_operators__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_blocks_re__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__generator_addition__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_generator_assignment__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__generator_classes__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__generator_dataType__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_generator_datetime__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_generator_exception__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_generator_file__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__generator_importModules__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__generator_innerFunctions__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_generator_iterator__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_generator_operators__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_generator_re__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__PythonToBlocks__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PythonToBlocks", function() { return __WEBPACK_IMPORTED_MODULE_24__PythonToBlocks__["a"]; });

























function init (a) {
  __WEBPACK_IMPORTED_MODULE_0__blocks_addition__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_1__src_blocks_assignment__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_2__blocks_classes__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_3__blocks_dataType__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_4__src_blocks_datetime__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_5__src_blocks_exception__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_6__src_blocks_file__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_7__blocks_importModules__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_8__blocks_innerFunctions__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_9__src_blocks_iterator__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_10__src_blocks_operators__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_11__src_blocks_re__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_12__generator_addition__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_13__src_generator_assignment__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_14__generator_classes__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_15__generator_dataType__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_16__src_generator_datetime__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_17__src_generator_exception__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_18__src_generator_file__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_19__generator_importModules__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_20__generator_innerFunctions__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_21__src_generator_iterator__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_22__src_generator_operators__["a" /* default */](a)
  __WEBPACK_IMPORTED_MODULE_23__src_generator_re__["a" /* default */](a)
}




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addition;
function addition (Blockly) {
  Blockly.defineBlocksWithJsonArray([
    {
      type: 'function_length_temporary',
      message0: 'len %1',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: [
            'String',
            'Array',
            'List',
            'Dictionary',
            'Set',
            'Tuple',
            'Bytes',
            'Range'
          ]
        }
      ],
      output: ['Number', 'Boolean'],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'raw_empty',
      message0: '%1',
      args0: [{ type: 'input_value', name: 'VALUE' }],
      inputsInline: false,
      previousStatement: null,
      nextStatement: null,
      colour: '#777777',
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'raw_block',
      message0: 'raw_block %1',
      args0: [
        {
          type: 'field_label_serializable',
          name: 'TEXT',
          text: ''
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: '#777777'
    },
    {
      type: 'constants_ellipsis',
      message0: '...',
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: '#777777'
    },
    {
      type: 'input_block',
      message0: 'input',
      inputsInline: false,
      output: 'String',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '%{BKY_TEXT_INPUT_TOOLTIP}',
      helpUrl: ''
    },
    {
      type: 'input_prompt_block',
      message0: 'input_prompt %1',
      args0: [
        {
          type: 'input_value',
          name: 'PROMPT'
        }
      ],
      inputsInline: true,
      output: 'String',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '%{BKY_TEXT_INPUT_TOOLTIP}',
      helpUrl: ''
    },
    {
      type: 'controls_whileElse',
      message0: 'whileElse %1 %2',
      args0: [
        {
          type: 'field_dropdown',
          name: 'MODE',
          options: [
            ['%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}', 'WHILE'],
            ['%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}', 'UNTIL']
          ]
        },
        {
          type: 'input_value',
          name: 'BOOL',
          check: 'Boolean'
        }
      ],
      message1: '%{BKY_CONTROLS_REPEAT_INPUT_DO} %1',
      args1: [
        {
          type: 'input_statement',
          name: 'DO'
        }
      ],
      message2: '%{BKY_CONTROLS_REPEAT_INPUT_ELSE} %1',
      args2: [
        {
          type: 'input_statement',
          name: 'ELSE'
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#FFAB1B'
    },
    {
      type: 'controls_forElse',
      message0: '%{BKY_CONTROLS_FOREACH_TITLE}',
      args0: [
        {
          type: 'field_variable',
          name: 'VAR',
          variable: null
        },
        {
          type: 'input_value',
          name: 'LIST',
          check: 'Array'
        }
      ],
      message1: '%{BKY_CONTROLS_REPEAT_INPUT_DO} %1',
      args1: [
        {
          type: 'input_statement',
          name: 'DO'
        }
      ],
      message2: '%{BKY_CONTROLS_REPEAT_INPUT_ELSE} %1',
      args2: [
        {
          type: 'input_statement',
          name: 'ELSE'
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: '#FFAB1B',
      helpUrl: '%{BKY_CONTROLS_WHILEUNTIL_HELPURL}',
      extensions: ['controls_whileUntil_tooltip']
    },
    {
      type: 'math_number_imaginary',
      message0: '%1j',
      args0: [
        {
          type: 'field_number',
          name: 'NUM',
          value: 0
        }
      ],
      output: 'Number',
      colour: '#009432'
    },
    {
      type: 'math_on_two',
      message0: '%1 %2, %3',
      args0: [
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['%{BKY_MATH_ONTWO_OPERATOR_MIN}', 'MIN'],
            ['%{BKY_MATH_ONTWO_OPERATOR_MAX}', 'MAX'],
            ['%{BKY_MATH_ONTWO_OPERATOR_AVERAGE}', 'AVERAGE']
          ]
        },
        {
          type: 'input_value',
          name: 'NUMBER1',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'NUMBER2',
          check: 'Number'
        }
      ],
      inputsInline: true,
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#009432',
      helpUrl: '%{BKY_MATH_ONTWO_HELPURL}',
      mutator: 'math_modes_of_list_mutator',
      extensions: ['math_op_tooltip']
    },
    {
      type: 'math_on_set',
      message0: '%1 %2',
      args0: [
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['%{BKY_MATH_ONSET_OPERATOR_SUM}', 'SUM'],
            ['%{BKY_MATH_ONSET_OPERATOR_MIN}', 'MIN'],
            ['%{BKY_MATH_ONSET_OPERATOR_MAX}', 'MAX'],
            ['%{BKY_MATH_ONSET_OPERATOR_AVERAGE}', 'AVERAGE']
          ]
        },
        {
          type: 'input_value',
          name: 'SET'
        }
      ],
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: '#B53471',
      extensions: ['math_op_tooltip']
    },
    {
      type: 'math_integer_division',
      message0: '%1 // %2',
      args0: [
        {
          type: 'input_value',
          name: 'DIVIDEND',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'DIVISOR',
          check: 'Number'
        }
      ],
      inputsInline: true,
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#009432',
      tooltip: '%{BKY_MATH_INTEGER_DIVISION_TOOLTIP}'
    },
    {
      type: 'math_integer_divmod',
      message0: '%{BKY_MATH_INTEGER_DIVMOD_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'DIVIDEND',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'DIVISOR',
          check: 'Number'
        }
      ],
      inputsInline: true,
      output: 'Tuple',
      previousStatement: null,
      nextStatement: null,
      colour: '#009432',
      tooltip: '%{BKY_MATH_INTEGER_DIVMOD_TOOLTIP}'
    },
    {
      type: 'math_bitwise_arithmetic',
      message0: '%1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'A',
          check: 'Number'
        },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['&', 'AND'],
            ['|', 'OR'],
            ['^', 'XOR'],
            ['<<', 'LEFT_SHIFT'],
            ['>>', 'RIGHT_SHIFT']
          ]
        },
        {
          type: 'input_value',
          name: 'B',
          check: 'Number'
        }
      ],
      inputsInline: true,
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#009432'
    },
    {
      type: 'math_bitwise_not',
      message0: '%{BKY_MATH_BITWISE_NOT}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Number'
        }
      ],
      inputsInline: true,
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#009432'
    },
    {
      type: 'math_radix',
      message0: '%{BKY_MATH_RADIX_VALUE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Number'
        }
      ],
      message1: '%{BKY_MATH_RADIX_OPTIONS} %1',
      args1: [
        {
          type: 'field_dropdown',
          name: 'RADIX',
          options: [
            ['%{BKY_MATH_RADIX_BIN}', 'BIN'],
            ['%{BKY_MATH_RADIX_OCT}', 'OCT'],
            ['%{BKY_MATH_RADIX_HEX}', 'HEX']
          ]
        },
        {
          type: 'field_dropdown',
          name: 'PREFIX',
          options: [
            ['%{BKY_MATH_RADIX_WITH_PREFIX}', 'WITH'],
            ['%{BKY_MATH_RADIX_WITHOUT_PREFIX}', 'WITHOUT']
          ]
        }
      ],
      inputsInline: true,
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#009432'
    },
    {
      type: 'text_split',
      message0: '%{BKY_TEXT_SPLIT_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'TEXT',
          check: 'String'
        },
        {
          type: 'input_value',
          name: 'DELIMITER',
          check: 'String'
        }
      ],
      inputsInline: true,
      output: 'Array',
      previousStatement: null,
      nextStatement: null,
      colour: '#D980FA',
      tooltip: '%{BKY_TEXT_SPLIT_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'text_concat',
      message0: '%{BKY_TEXT_CONCAT_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'a',
          check: 'String'
        },
        {
          type: 'input_value',
          name: 'b',
          check: 'String'
        }
      ],
      output: 'String',
      previousStatement: null,
      nextStatement: null,
      colour: '#D980FA',
      tooltip: '%{BKY_TEXT_CONCAT_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'text_repeat',
      message0: '%{BKY_TEXT_REPEAT_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'TEXT',
          check: 'String'
        },
        {
          type: 'input_value',
          name: 'TIMES',
          check: 'Number'
        }
      ],
      output: 'String',
      previousStatement: null,
      nextStatement: null,
      colour: '#D980FA',
      tooltip: '%{BKY_TEXT_REPEAT_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'text_chr',
      message0: '%{BKY_TEXT_CHR_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Number'
        }
      ],
      output: 'String',
      previousStatement: null,
      nextStatement: null,
      colour: '#D980FA',
      tooltip: '%{BKY_TEXT_CHR_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'text_ord',
      message0: 'ord %1',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'String'
        }
      ],
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#D980FA',
      tooltip: '%{BKY_TEXT_ORD_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'lists_join',
      message0: '%{BKY_LISTS_JOIN_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Array'
        },
        {
          type: 'input_value',
          name: 'DELIMITER',
          check: 'String'
        }
      ],
      output: 'String',
      previousStatement: null,
      nextStatement: null,
      colour: '#9980FA',
      tooltip: '%{BKY_LISTS_JOIN_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'lists_map',
      message0: '%{BKY_LISTS_MAP_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Array'
        },
        {
          type: 'input_value',
          name: 'FUNC'
        }
      ],
      inputsInline: true,
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: '#9980FA',
      tooltip: '%{BKY_LISTS_MAP_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'lists_concat',
      message0: '%{BKY_LISTS_CONCAT_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'A',
          check: 'Array'
        },
        {
          type: 'input_value',
          name: 'B',
          check: 'Array'
        }
      ],
      output: 'Array',
      previousStatement: null,
      nextStatement: null,
      colour: '#9980FA',
      tooltip: '%{BKY_LISTS_CONCAT_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'lists_repeat_times',
      message0: '%{BKY_LISTS_REPEAT_TIMES_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Array'
        },
        {
          type: 'input_value',
          name: 'TIMES',
          check: 'Number'
        }
      ],
      output: 'Array',
      previousStatement: null,
      nextStatement: null,
      colour: '#9980FA',
      tooltip: '%{BKY_LISTS_REPEAT_TIMES_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'range_create',
      message0: '%{BKY_RANGE_CREATE}',
      args0: [
        {
          type: 'input_value',
          name: 'START',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'STOP',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'STEP',
          check: 'Number'
        }
      ],
      inputsInline: true,
      output: 'Range',
      previousStatement: null,
      nextStatement: null,
      colour: '#9980FA'
    },

    {
      type: 'type_convert',
      message0: '%{BKY_TYPES_CONVERT_TITLE}',
      args0: [
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['%{BKY_TYPES_INT}', 'int'],
            ['%{BKY_TYPES_FLOAT}', 'float'],
            ['%{BKY_TYPES_COMPLEX}', 'complex'],
            ['%{BKY_TYPES_STR}', 'str'],
            ['%{BKY_TYPES_BOOL}', 'bool'],
            ['%{BKY_TYPES_LIST}', 'list'],
            ['%{BKY_TYPES_SET}', 'set'],
            ['%{BKY_TYPES_FROZENSET}', 'frozenset'],
            ['%{BKY_TYPES_TUPLE}', 'tuple'],
            ['%{BKY_TYPES_DICT}', 'dict']
          ]
        },
        {
          type: 'input_value',
          name: 'VAR'
        }
      ],
      inputsInline: true,
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: '#0652DD',
      tooltip: '',
      helpUrl: ''
    },

    {
      type: 'type_get',
      message0: '%{BKY_TYPES_GET_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VAR'
        }
      ],
      inputsInline: true,
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: '#0652DD'
    },

    {
      type: 'type_var',
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['%{BKY_TYPES_INT}', 'int'],
            ['%{BKY_TYPES_FLOAT}', 'float'],
            ['%{BKY_TYPES_COMPLEX}', 'complex'],
            ['%{BKY_TYPES_STR}', 'str'],
            ['%{BKY_TYPES_BOOL}', 'bool'],
            ['%{BKY_TYPES_LIST}', 'list'],
            ['%{BKY_TYPES_SET}', 'set'],
            ['%{BKY_TYPES_FROZENSET}', 'frozenset'],
            ['%{BKY_TYPES_TUPLE}', 'tuple'],
            ['%{BKY_TYPES_DICT}', 'dict'],
            ['%{BKY_TYPES_RANGE}', 'range']
          ]
        }
      ],
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: '#0652DD',
      tooltip: '',
      helpUrl: ''
    },

    {
      type: 'logic_object_compare',
      message0: '%1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'A'
        },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['is', 'IS'],
            ['is not', 'IS_NOT']
          ]
        },
        {
          type: 'input_value',
          name: 'B'
        }
      ],
      inputsInline: true,
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: '#12CBC4'
    },

    {
      type: 'logic_object_in',
      message0: '%1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'A'
        },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['in', 'IN'],
            ['not in', 'NOT_IN']
          ]
        },
        {
          type: 'input_value',
          name: 'B'
        }
      ],
      inputsInline: true,
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: '#12CBC4'
    },

    {
      type: 'logic_sets_compare',
      message0: '%{BKY_LOGIC_SET_COMPARE}',
      args0: [
        {
          type: 'input_value',
          name: 'A'
        },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['%{BKY_LOGIC_SET_COMPARE_SUBSET}', 'LTE'],
            ['%{BKY_LOGIC_SET_COMPARE_PROPER_SUBSET}', 'LT'],
            ['%{BKY_LOGIC_SET_COMPARE_SUPERSET}', 'GTE'],
            ['%{BKY_LOGIC_SET_COMPARE_PROPER_SUPERSET}', 'GT']
          ]
        },
        {
          type: 'input_value',
          name: 'B'
        }
      ],
      inputsInline: true,
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: '#12CBC4'
    },

    {
      type: 'logic_iterable_check',
      message0: '%{BKY_LOGIC_ITERABLE_CHECK}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE'
        },
        {
          type: 'field_dropdown',
          name: 'FUNC',
          options: [
            ['%{BKY_LOGIC_ITERABLE_ALL}', 'ALL'],
            ['%{BKY_LOGIC_ITERABLE_ANY}', 'ANY']
          ]
        }
      ],
      inputsInline: true,
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: '#12CBC4'
    },

    {
      type: 'logic_debug',
      message0: '__debug__',
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: '#12CBC4'
    },

    {
      type: 'sets_arithmetic',
      message0: '%1 %2 %3',
      args0: [
        { type: 'input_value', name: 'A' },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['%{BKY_SETS_ONTWO_OPERATOR_INTERSECT}', 'AND'],
            ['%{BKY_SETS_ONTWO_OPERATOR_UNION}', 'OR'],
            ['%{BKY_SETS_ONTWO_OPERATOR_DIFFERENCE}', 'MINUS'],
            ['%{BKY_SETS_ONTWO_OPERATOR_SYMMETRIC_DIFFERENCE}', 'XOR']
          ]
        },
        { type: 'input_value', name: 'B' }
      ],
      inputsInline: true,
      output: 'Set',
      previousStatement: null,
      nextStatement: null,
      colour: '#B53471'
    },

    {
      type: 'sets_size',
      message0: '%{BKY_SETS_SIZE_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Set'
        }
      ],
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#B53471',
      tooltip: '%{BKY_SETS_SIZE_TOOLTIP}'
    },

    {
      type: 'sets_change',
      message0: '%{BKY_SETS_CHANGE_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'SET'
        },
        {
          type: 'field_dropdown',
          name: 'FUNC',
          options: [
            ['%{BKY_SETS_CHANGE_ADD}', 'ADD'],
            ['%{BKY_SETS_CHANGE_REMOVE}', 'REMOVE']
          ]
        },
        {
          type: 'input_value',
          name: 'ITEM'
        }
      ],
      previousStatement: null,
      nextStatement: null,
      inputsInline: true,
      colour: '#B53471',
      tooltip: '%{BKY_SETS_CHANGE_TOOLTIP}'
    },

    {
      type: 'sets_isEmpty',
      message0: '%{BKY_SETS_ISEMPTY_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Set'
        }
      ],
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: '#12CBC4',
      tooltip: '%{BKY_SETS_ISEMPTY_TOOLTIP}'
    },

    {
      type: 'sets_pop',
      message0: '%{BKY_SETS_POP_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE'
        }
      ],
      output: null,
      previousStatement: null,
      nextStatement: null,
      inputsInline: true,
      colour: '#B53471',
      tooltip: '%{BKY_SETS_POP_TOOLTIP}'
    },

    {
      type: 'tuples_size',
      message0: '%{BKY_TUPLES_SIZE_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Tuple'
        }
      ],
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#5758BB',
      tooltip: '%{BKY_TUPLES_SIZE_TOOLTIP}'
    },

    {
      type: 'tuples_isEmpty',
      message0: '%{BKY_TUPLES_ISEMPTY_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Tuple'
        }
      ],
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: '#12CBC4',
      tooltip: '%{BKY_TUPLES_ISEMPTY_TOOLTIP}'
    },

    {
      type: 'tuples_concat',
      message0: '%{BKY_TUPLES_CONCAT_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'A',
          check: 'Tuple'
        },
        {
          type: 'input_value',
          name: 'B',
          check: 'Tuple'
        }
      ],
      output: 'Tuple',
      previousStatement: null,
      nextStatement: null,
      colour: '#5758BB',
      tooltip: '%{BKY_TUPLES_CONCAT_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'tuples_repeat',
      message0: '%{BKY_TUPLES_REPEAT_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'Tuple',
          check: 'Tuple'
        },
        {
          type: 'input_value',
          name: 'TIMES',
          check: 'Number'
        }
      ],
      output: 'Tuple',
      previousStatement: null,
      nextStatement: null,
      colour: '#5758BB',
      tooltip: '%{BKY_TUPLES_REPEAT_TOOLTIP}',
      helpUrl: ''
    },

    {
      type: 'dicts_pair',
      message0: '%1%2',
      args0: [
        {
          type: 'input_value',
          name: 'KEY'
        },
        {
          type: 'input_value',
          name: 'VALUE'
        }
      ],
      output: 'DictPair',
      previousStatement: null,
      nextStatement: null,
      colour: '#833471',
      inputsInline: true
    },

    {
      type: 'dicts_size',
      message0: '%{BKY_DICTS_SIZE_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'Dict'
        }
      ],
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: '#833471',
      tooltip: '%{BKY_DICTS_SIZE_TOOLTIP}'
    },

    {
      type: 'dicts_getKey',
      message0: '%{BKY_DICTS_GET_KEY_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'DICT',
          check: 'Dict'
        },
        {
          type: 'input_value',
          name: 'KEY'
        }
      ],
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: '#833471',
      inputsInline: true,
      tooltip: '%{BKY_DICTS_GET_KEY_TOOLTIP}'
    },

    {
      type: 'dicts_setKey',
      message0: '%{BKY_DICTS_SET_KEY_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'DICT',
          check: 'Dict'
        },
        {
          type: 'input_value',
          name: 'KEY'
        },
        {
          type: 'input_value',
          name: 'VALUE'
        }
      ],
      previousStatement: null,
      nextStatement: null,
      inputsInline: true,
      colour: '#833471',
      tooltip: '%{BKY_DICTS_SET_KEY_TOOLTIP}'
    },

    {
      type: 'dicts_pop',
      message0: '%{BKY_DICTS_POP_TITLE}',
      args0: [
        {
          type: 'input_value',
          name: 'DICT',
          check: 'Dict'
        },
        {
          type: 'input_value',
          name: 'KEY'
        }
      ],
      output: null,
      previousStatement: null,
      nextStatement: null,
      inputsInline: true,
      colour: '#833471',
      tooltip: '%{BKY_DICTS_POP_TOOLTIP}'
    }
  ])

  Blockly.Blocks.variables_set_multiple = {
    init () {
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour('#EE5A24')
      this.targetCount_ = 1
      this.simpleTarget_ = true
      this.updateShape_()
      Blockly.Extensions.apply('contextMenu_variableSetterGetter', this, false)
    },
    updateShape_ () {
      if (!this.getInput('VALUE')) {
        this.appendDummyInput().appendField(Blockly.Msg.VARIABLES_SET_VALUE)
        this.appendValueInput('VALUE').appendField(Blockly.Msg.VARIABLES_TOBE)
      }
      let i = 0
      if (this.targetCount_ === 1 && this.simpleTarget_) {
        this.setInputsInline(true)
        if (!this.getInput('VAR_ANCHOR')) {
          this.appendDummyInput('VAR_ANCHOR').appendField(
            new Blockly.FieldVariable('variable'),
            'VAR'
          )
        }
        this.moveInputBefore('VAR_ANCHOR', 'VALUE')
      } else {
        this.setInputsInline(true)
        // Add new inputs.
        for (; i < this.targetCount_; i++) {
          if (!this.getInput(`TARGET${i}`)) {
            const input = this.appendValueInput(`TARGET${i}`)
            if (i !== 0) {
              input
                .appendField(Blockly.Msg.VARIABLES_AND)
                .setAlign(Blockly.ALIGN_RIGHT)
            }
          }
          this.moveInputBefore(`TARGET${i}`, 'VALUE')
        }
        // Kill simple VAR
        if (this.getInput('VAR_ANCHOR')) {
          this.removeInput('VAR_ANCHOR')
        }
      }
      // Remove deleted inputs.
      while (this.getInput(`TARGET${i}`)) {
        this.removeInput(`TARGET${i}`)
        i++
      }
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom () {
      const container = document.createElement('mutation')
      container.setAttribute('targets', this.targetCount_)
      container.setAttribute('simple', this.simpleTarget_)
      return container
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation (xmlElement) {
      this.targetCount_ = parseInt(xmlElement.getAttribute('targets'), 10)
      this.simpleTarget_ = xmlElement.getAttribute('simple') === 'true'
      this.updateShape_()
    }
  }

  Blockly.Blocks.variables_set_global = {
    init () {
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour('#EE5A24')
      this.nameCount_ = 1
      this.appendDummyInput('GLOBAL').appendField(
        Blockly.Msg.VARIABLES_GLOBAL,
        'START_GLOBALS'
      )
      this.updateShape_()
    },
    updateShape_ () {
      const input = this.getInput('GLOBAL')
      // Update pluralization
      if (this.getField('START_GLOBALS')) {
        this.setFieldValue(
          this.nameCount_ > 1
            ? Blockly.Msg.VARIABLES_GLOBALS
            : Blockly.Msg.VARIABLES_GLOBAL,
          'START_GLOBALS'
        )
      }
      // Update fields
      let i = 0
      for (i = 0; i < this.nameCount_; i++) {
        if (!this.getField(`NAME${i}`)) {
          if (i !== 0) {
            input
              .appendField(Blockly.Msg.VARIABLES_AND)
              .setAlign(Blockly.ALIGN_RIGHT)
          }
          input.appendField(new Blockly.FieldVariable('variable'), `NAME${i}`)
        }
      }
      // Remove deleted fields.
      while (this.getField(`NAME${i}`)) {
        input.removeField(`NAME${i}`)
        i++
      }
      // Delete and re-add ending field
      if (this.getField('END_GLOBALS')) {
        input.removeField('END_GLOBALS')
      }
      input.appendField(Blockly.Msg.VARIABLES_AVAILABLE, 'END_GLOBALS')
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom () {
      const container = document.createElement('mutation')
      container.setAttribute('names', this.nameCount_)
      return container
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation (xmlElement) {
      this.nameCount_ = parseInt(xmlElement.getAttribute('names'), 10)
      this.updateShape_()
    }
  }

  Blockly.Blocks.variables_delete = {
    init () {
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour('#EE5A24')
      this.targetCount_ = 1

      this.appendDummyInput().appendField(Blockly.Msg.VARIABLE_DELETE)
      this.updateShape_()
    },
    updateShape_ () {
      // Add new inputs.
      let i = 0
      for (i = 0; i < this.targetCount_; i++) {
        if (!this.getInput(`TARGET${i}`)) {
          const input = this.appendValueInput(`TARGET${i}`)
          if (i !== 0) {
            input.appendField(',').setAlign(Blockly.ALIGN_RIGHT)
          }
        }
      }
      // Remove deleted inputs.
      while (this.getInput(`TARGET${i}`)) {
        this.removeInput(`TARGET${i}`)
        i++
      }
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom () {
      const container = document.createElement('mutation')
      container.setAttribute('targets', this.targetCount_)
      return container
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation (xmlElement) {
      this.targetCount_ = parseInt(xmlElement.getAttribute('targets'), 10)
      this.updateShape_()
    }
  }

  Blockly.Blocks.sets_create_with = {
    /**
     * Block for creating a set with any number of elements of any type.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#B53471')
      this.itemCount_ = 3
      this.updateShape_()
      this.setOutput(true, 'Set')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setMutator(new Blockly.Mutator(['sets_create_with_item']))
    },
    /**
     * Create XML to represent set inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom () {
      const container = document.createElement('mutation')
      container.setAttribute('items', this.itemCount_)
      return container
    },
    /**
     * Parse XML to restore the set inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation (xmlElement) {
      this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10)
      this.updateShape_()
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose (workspace) {
      const containerBlock = workspace.newBlock('sets_create_with_container')
      containerBlock.initSvg()
      let connection = containerBlock.getInput('STACK').connection
      for (let i = 0; i < this.itemCount_; i++) {
        const itemBlock = workspace.newBlock('sets_create_with_item')
        itemBlock.initSvg()
        connection.connect(itemBlock.previousConnection)
        connection = itemBlock.nextConnection
      }
      return containerBlock
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      // Count number of inputs.
      const connections = []
      while (itemBlock) {
        connections.push(itemBlock.valueConnection_)
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
      }
      // Disconnect any children that don't belong.
      for (let i = 0; i < this.itemCount_; i++) {
        const connection = this.getInput(`ADD${i}`).connection.targetConnection
        if (connection && connections.indexOf(connection) === -1) {
          connection.disconnect()
        }
      }
      this.itemCount_ = connections.length
      this.updateShape_()
      // Reconnect any child blocks.
      for (let i = 0; i < this.itemCount_; i++) {
        Blockly.Mutator.reconnect(connections[i], this, `ADD${i}`)
      }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      let i = 0
      while (itemBlock) {
        const input = this.getInput(`ADD${i}`)
        itemBlock.valueConnection_ = input && input.connection.targetConnection
        i++
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
      }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_ () {
      if (this.itemCount_ && this.getInput('EMPTY')) {
        this.removeInput('EMPTY')
      } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
        this.appendDummyInput('EMPTY').appendField(
          Blockly.Msg.SETS_CREATE_EMPTY_TITLE
        )
      }
      // Add new inputs.
      let i = 0
      for (i = 0; i < this.itemCount_; i++) {
        if (!this.getInput(`ADD${i}`)) {
          const input = this.appendValueInput(`ADD${i}`)
          if (i === 0) {
            input
              .appendField(Blockly.Msg.SETS_CREATE_WITH_INPUT_WITH)
              .setAlign(Blockly.ALIGN_RIGHT)
          } else {
            input.appendField('').setAlign(Blockly.ALIGN_RIGHT)
          }
        }
      }
      // Remove deleted inputs.
      while (this.getInput(`ADD${i}`)) {
        this.removeInput(`ADD${i}`)
        i++
      }
      // Add the trailing "]"
      if (this.getInput('TAIL')) {
        this.removeInput('TAIL')
      }
      if (this.itemCount_) {
        this.appendDummyInput('TAIL')
          .appendField('')
          .setAlign(Blockly.ALIGN_RIGHT)
      }
    }
  }

  Blockly.Blocks.sets_create_with_container = {
    /**
     * Mutator block for set container.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#B53471')
      this.appendDummyInput().appendField(
        Blockly.Msg.SETS_CREATE_WITH_CONTAINER_TITLE_ADD
      )
      this.appendStatementInput('STACK')
      this.contextMenu = false
    }
  }

  Blockly.Blocks.sets_create_with_item = {
    /**
     * Mutator block for adding items.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#B53471')
      this.appendDummyInput().appendField(Blockly.Msg.VARIABLES_DEFAULT_NAME)
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.contextMenu = false
    }
  }

  Blockly.Blocks.tuples_create_with = {
    /**
     * Block for creating a tuple with any number of elements of any type.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#5758BB')
      this.itemCount_ = 3
      this.updateShape_()
      this.setOutput(true, 'Tuple')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setMutator(new Blockly.Mutator(['tuples_create_with_item']))
    },
    /**
     * Create XML to represent tuple inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom () {
      const container = document.createElement('mutation')
      container.setAttribute('items', this.itemCount_)
      return container
    },
    /**
     * Parse XML to restore the tuple inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation (xmlElement) {
      this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10)
      this.updateShape_()
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose (workspace) {
      const containerBlock = workspace.newBlock('tuples_create_with_container')
      containerBlock.initSvg()
      let connection = containerBlock.getInput('STACK').connection
      for (let i = 0; i < this.itemCount_; i++) {
        const itemBlock = workspace.newBlock('tuples_create_with_item')
        itemBlock.initSvg()
        connection.connect(itemBlock.previousConnection)
        connection = itemBlock.nextConnection
      }
      return containerBlock
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      // Count number of inputs.
      const connections = []
      while (itemBlock) {
        connections.push(itemBlock.valueConnection_)
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
      }
      // Disconnect any children that don't belong.
      for (let i = 0; i < this.itemCount_; i++) {
        const connection = this.getInput(`ADD${i}`).connection.targetConnection
        if (connection && connections.indexOf(connection) === -1) {
          connection.disconnect()
        }
      }
      this.itemCount_ = connections.length
      this.updateShape_()
      // Reconnect any child blocks.
      for (let i = 0; i < this.itemCount_; i++) {
        Blockly.Mutator.reconnect(connections[i], this, `ADD${i}`)
      }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      let i = 0
      while (itemBlock) {
        const input = this.getInput(`ADD${i}`)
        itemBlock.valueConnection_ = input && input.connection.targetConnection
        i++
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
      }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_ () {
      if (this.itemCount_ && this.getInput('EMPTY')) {
        this.removeInput('EMPTY')
      } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
        this.appendDummyInput('EMPTY').appendField(
          Blockly.Msg.TUPLES_CREATE_EMPTY_TITLE
        )
      }
      // Add new inputs.
      let i = 0
      for (i = 0; i < this.itemCount_; i++) {
        if (!this.getInput(`ADD${i}`)) {
          const input = this.appendValueInput(`ADD${i}`)
          if (i === 0) {
            input
              .appendField(Blockly.Msg.TUPLES_CREATE_WITH_INPUT_WITH)
              .setAlign(Blockly.ALIGN_RIGHT)
          } else {
            input.appendField('').setAlign(Blockly.ALIGN_RIGHT)
          }
        }
      }
      // Remove deleted inputs.
      while (this.getInput(`ADD${i}`)) {
        this.removeInput(`ADD${i}`)
        i++
      }
      // Add the trailing "]"
      if (this.getInput('TAIL')) {
        this.removeInput('TAIL')
      }
      if (this.itemCount_) {
        const tail = this.appendDummyInput('TAIL')
        if (this.itemCount_ === 1) {
          tail.appendField('')
        } else {
          tail.appendField('')
        }
        tail.setAlign(Blockly.ALIGN_RIGHT)
      }
    }
  }

  Blockly.Blocks.tuples_create_with_container = {
    /**
     * Mutator block for tuple container.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#5758BB')
      this.appendDummyInput().appendField(
        Blockly.Msg.TUPLES_CREATE_WITH_CONTAINER_TITLE_ADD
      )
      this.appendStatementInput('STACK')
      this.contextMenu = false
    }
  }

  Blockly.Blocks.tuples_create_with_item = {
    /**
     * Mutator block for adding items.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#5758BB')
      this.appendDummyInput().appendField(Blockly.Msg.VARIABLES_DEFAULT_NAME)
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.contextMenu = false
    }
  }

  Blockly.Blocks.tuples_getIndex = {
    /**
     * Block for getting element at index.
     * @this {Blockly.Block}
     */
    init () {
      this.WHERE_OPTIONS = [
        [Blockly.Msg.TUPLES_GET_INDEX_FROM_START, 'FROM_START'],
        [Blockly.Msg.TUPLES_GET_INDEX_FROM_END, 'FROM_END'],
        [Blockly.Msg.TUPLES_GET_INDEX_FIRST, 'FIRST'],
        [Blockly.Msg.TUPLES_GET_INDEX_LAST, 'LAST'],
        [Blockly.Msg.TUPLES_GET_INDEX_RANDOM, 'RANDOM']
      ]
      this.setColour('#5758BB')
      this.appendValueInput('VALUE')
        .setCheck('Tuple')
        .appendField(Blockly.Msg.TUPLES_GET_INDEX_INPUT_IN_TUPLE)
      this.appendDummyInput().appendField(
        Blockly.Msg.TUPLES_GET_INDEX_GET,
        'SPACE'
      )
      this.appendDummyInput('AT')
      if (Blockly.Msg.TUPLES_GET_INDEX_TAIL) {
        this.appendDummyInput('TAIL').appendField(
          Blockly.Msg.TUPLES_GET_INDEX_TAIL
        )
      }
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true)
      this.updateAt_(true)
    },
    /**
     * Create XML to represent whether the block is a statement or a value.
     * Also represent whether there is an 'AT' input.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom () {
      const container = Blockly.utils.xml.createElement('mutation')
      const isStatement = !this.outputConnection
      container.setAttribute('statement', isStatement)
      const isAt = this.getInput('AT').type === Blockly.INPUT_VALUE
      container.setAttribute('at', isAt)
      return container
    },
    /**
     * Parse XML to restore the 'AT' input.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation (xmlElement) {
      const isStatement = xmlElement.getAttribute('statement') === 'true'
      this.updateStatement_(isStatement)
      const isAt = xmlElement.getAttribute('at') !== 'false'
      this.updateAt_(isAt)
    },
    /**
     * Switch between a value block and a statement block.
     * @param {boolean} newStatement True if the block should be a statement.
     *     False if the block should be a value.
     * @private
     * @this {Blockly.Block}
     */
    updateStatement_ (newStatement) {
      const oldStatement = !this.outputConnection
      if (newStatement !== oldStatement) {
        this.unplug(true, true)
        if (newStatement) {
          this.setOutput(false)
          this.setPreviousStatement(true)
          this.setNextStatement(true)
        } else {
          this.setPreviousStatement(false)
          this.setNextStatement(false)
          this.setOutput(true)
        }
      }
    },
    /**
     * Create or delete an input for the numeric index.
     * @param {boolean} isAt True if the input should exist.
     * @private
     * @this {Blockly.Block}
     */
    updateAt_ (isAt) {
      this.removeInput('AT')
      this.removeInput('ORDINAL', true)
      // Create either a value 'AT' input or a dummy input.
      if (isAt) {
        this.appendValueInput('AT').setCheck('Number')
        if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
          this.appendDummyInput('ORDINAL').appendField(
            Blockly.Msg.ORDINAL_NUMBER_SUFFIX
          )
        }
      } else {
        this.appendDummyInput('AT')
      }
      const menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function (
        value
      ) {
        const newAt = value === 'FROM_START' || value === 'FROM_END'
        // The 'isAt' variable is available due to this function being a closure.
        if (newAt !== isAt) {
          const block = this.getSourceBlock()
          block.updateAt_(newAt)
          // This menu has been destroyed and replaced.  Update the replacement.
          block.setFieldValue(value, 'WHERE')
          return null
        }
        return undefined
      })
      this.getInput('AT').appendField(menu, 'WHERE')
      if (Blockly.Msg.TUPLES_GET_INDEX_TAIL) {
        this.moveInputBefore('TAIL', null)
      }
    }
  }

  Blockly.Blocks.text_getSubstring.init = function () {
    this.WHERE_OPTIONS_1 = [
      [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START, 'FROM_START'],
      [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END, 'FROM_END'],
      [Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST, 'FIRST']
    ]
    this.WHERE_OPTIONS_2 = [
      [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START, 'FROM_START'],
      [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END, 'FROM_END'],
      [Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST, 'LAST']
    ]
    this.setHelpUrl(Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL)
    this.setStyle('text_blocks')
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT)
    this.appendDummyInput('AT1')

    this.appendValueInput('STEP')
      .setCheck('Number')
      .appendField(Blockly.Msg.TEXT_GET_SUBSTRING_STEP)
    this.appendDummyInput('AT2')
    if (Blockly.Msg.TEXT_GET_SUBSTRING_TAIL) {
      this.appendDummyInput('TAIL').appendField(
        Blockly.Msg.TEXT_GET_SUBSTRING_TAIL
      )
    }
    this.setInputsInline(false)
    this.setOutput(true, 'String')
    this.updateAt_(1, true)
    this.updateAt_(2, true)
    this.setPreviousStatement(true, null)
    this.setNextStatement(true, null)
    this.setTooltip(Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP)
  }

  Blockly.Blocks.lists_getSublist.init = function () {
    this.WHERE_OPTIONS_1 = [
      [Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START, 'FROM_START'],
      [Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END, 'FROM_END'],
      [Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST, 'FIRST']
    ]
    this.WHERE_OPTIONS_2 = [
      [Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START, 'FROM_START'],
      [Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END, 'FROM_END'],
      [Blockly.Msg.LISTS_GET_SUBLIST_END_LAST, 'LAST']
    ]
    this.setHelpUrl(Blockly.Msg.LISTS_GET_SUBLIST_HELPURL)
    this.setStyle('list_blocks')
    this.appendValueInput('LIST')
      .setCheck('Array')
      .appendField(Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST)
    this.appendDummyInput('AT1')
    this.appendValueInput('STEP')
      .setCheck('Number')
      .appendField(Blockly.Msg.LISTS_GET_SUBLIST_STEP)
    this.appendDummyInput('AT2')
    if (Blockly.Msg.LISTS_GET_SUBLIST_TAIL) {
      this.appendDummyInput('TAIL').appendField(
        Blockly.Msg.LISTS_GET_SUBLIST_TAIL
      )
    }
    this.setInputsInline(false)
    this.setOutput(true, 'Array')
    this.updateAt_(1, true)
    this.updateAt_(2, true)
    this.setPreviousStatement(true, null)
    this.setNextStatement(true, null)
    this.setTooltip(Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP)
  }

  Blockly.Blocks.tuples_getSubtuple = {
    /**
     * @this {Blockly.Block}
     */
    init () {
      this.WHERE_OPTIONS_1 = [
        [Blockly.Msg.TUPLES_GET_SUBTUPLE_START_FROM_START, 'FROM_START'],
        [Blockly.Msg.TUPLES_GET_SUBTUPLE_START_FROM_END, 'FROM_END'],
        [Blockly.Msg.TUPLES_GET_SUBTUPLE_START_FIRST, 'FIRST']
      ]
      this.WHERE_OPTIONS_2 = [
        [Blockly.Msg.TUPLES_GET_SUBTUPLE_END_FROM_START, 'FROM_START'],
        [Blockly.Msg.TUPLES_GET_SUBTUPLE_END_FROM_END, 'FROM_END'],
        [Blockly.Msg.TUPLES_GET_SUBTUPLE_END_LAST, 'LAST']
      ]
      this.setColour('#5758BB')
      this.appendValueInput('TUPLE')
        .setCheck('Tuple')
        .appendField(Blockly.Msg.TUPLES_GET_SUBTUPLE_INPUT_IN_TUPLE)
      this.appendDummyInput('AT1')
      this.appendValueInput('STEP')
        .setCheck('Number')
        .appendField(Blockly.Msg.TUPLES_GET_SUBTUPLE_STEP)
      this.appendDummyInput('AT2')
      if (Blockly.Msg.TUPLES_GET_SUBTUPLE_TAIL) {
        this.appendDummyInput('TAIL').appendField(
          Blockly.Msg.TUPLES_GET_SUBTUPLE_TAIL
        )
      }
      this.setInputsInline(false)
      this.setOutput(true, 'Tuple')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.updateAt_(1, true)
      this.updateAt_(2, true)
    },
    /**
     * Create XML to represent whether there are 'AT' inputs.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom () {
      const container = Blockly.utils.xml.createElement('mutation')
      const hasAt1 = this.getInput('AT1').type === Blockly.INPUT_VALUE
      container.setAttribute('at1', hasAt1)
      const hasAt2 = this.getInput('AT2').type === Blockly.INPUT_VALUE
      container.setAttribute('at2', hasAt2)
      return container
    },
    /**
     * Parse XML to restore the 'AT' inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation (xmlElement) {
      const isAt1 = xmlElement.getAttribute('at1') === 'true'
      const isAt2 = xmlElement.getAttribute('at2') === 'true'
      this.updateAt_(1, isAt1)
      this.updateAt_(2, isAt2)
    },
    /**
     * Create or delete an input for a numeric index.
     * This block has two such inputs, independent of each other.
     * @param {number} n Specify first or second input (1 or 2).
     * @param {boolean} isAt True if the input should exist.
     * @private
     * @this {Blockly.Block}
     */
    updateAt_ (n, isAt) {
      // Create or delete an input for the numeric index.
      // Destroy old 'AT' and 'ORDINAL' inputs.
      this.removeInput(`AT${n}`)
      this.removeInput(`ORDINAL${n}`, true)
      // Create either a value 'AT' input or a dummy input.
      if (isAt) {
        this.appendValueInput(`AT${n}`).setCheck('Number')
        if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
          this.appendDummyInput(`ORDINAL${n}`).appendField(
            Blockly.Msg.ORDINAL_NUMBER_SUFFIX
          )
        }
      } else {
        this.appendDummyInput(`AT${n}`)
      }
      const menu = new Blockly.FieldDropdown(
        this[`WHERE_OPTIONS_${n}`],
        function (value) {
          const newAt = value === 'FROM_START' || value === 'FROM_END'
          // The 'isAt' variable is available due to this function being a
          // closure.
          if (newAt !== isAt) {
            const block = this.getSourceBlock()
            block.updateAt_(n, newAt)
            // This menu has been destroyed and replaced.
            // Update the replacement.
            block.setFieldValue(value, `WHERE${n}`)
            return null
          }
        }
      )
      this.getInput(`AT${n}`).appendField(menu, `WHERE${n}`)
      if (n === 1) {
        this.moveInputBefore('AT1', 'AT2')
        if (this.getInput('ORDINAL1')) {
          this.moveInputBefore('ORDINAL1', 'AT2')
        }
      }
      if (Blockly.Msg.TUPLES_GET_SUBTUPLE_TAIL) {
        this.moveInputBefore('TAIL', null)
      }
    }
  }

  Blockly.Blocks.dicts_create_with = {
    /**
     * Block for creating a dict with any number of elements of any type.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#833471')
      this.itemCount_ = 3
      this.updateShape_()
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true, 'Dict')
      this.setMutator(new Blockly.Mutator(['dicts_create_with_item']))
    },
    /**
     * Create XML to represent dict inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom () {
      const container = document.createElement('mutation')
      container.setAttribute('items', this.itemCount_)
      return container
    },
    /**
     * Parse XML to restore the dict inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation (xmlElement) {
      this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10)
      this.updateShape_()
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose (workspace) {
      const containerBlock = workspace.newBlock('dicts_create_with_container')
      containerBlock.initSvg()
      let connection = containerBlock.getInput('STACK').connection
      for (let i = 0; i < this.itemCount_; i++) {
        const itemBlock = workspace.newBlock('dicts_create_with_item')
        itemBlock.initSvg()
        connection.connect(itemBlock.previousConnection)
        connection = itemBlock.nextConnection
      }
      return containerBlock
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      // Count number of inputs.
      const connections = []
      while (itemBlock) {
        connections.push(itemBlock.valueConnection_)
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
      }
      // Disconnect any children that don't belong.
      for (let i = 0; i < this.itemCount_; i++) {
        const connection = this.getInput(`ADD${i}`).connection.targetConnection
        if (connection && connections.indexOf(connection) === -1) {
          const key = connection.getSourceBlock().getInput('KEY')
          if (key.connection.targetConnection) {
            key.connection.targetConnection.getSourceBlock().unplug(true)
          }
          const value = connection.getSourceBlock().getInput('VALUE')
          if (value.connection.targetConnection) {
            value.connection.targetConnection.getSourceBlock().unplug(true)
          }
          connection.disconnect()
          connection.getSourceBlock().dispose()
        }
      }
      this.itemCount_ = connections.length
      this.updateShape_()
      // Reconnect any child blocks.
      for (let i = 0; i < this.itemCount_; i++) {
        Blockly.Mutator.reconnect(connections[i], this, `ADD${i}`)
        if (!connections[i]) {
          const itemBlock = this.workspace.newBlock('dicts_pair')
          itemBlock.setDeletable(false)
          itemBlock.setMovable(false)
          itemBlock.initSvg()
          this.getInput(`ADD${i}`).connection.connect(
            itemBlock.outputConnection
          )
          itemBlock.render()
          // this.get(itemBlock, 'ADD'+i)
        }
      }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK')
      let i = 0
      while (itemBlock) {
        const input = this.getInput(`ADD${i}`)
        itemBlock.valueConnection_ = input && input.connection.targetConnection
        i++
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
      }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_ () {
      if (this.itemCount_ && this.getInput('EMPTY')) {
        this.removeInput('EMPTY')
      } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
        this.appendDummyInput('EMPTY').appendField(
          Blockly.Msg.DICTS_CREATE_EMPTY_TITLE
        )
      }
      // Add new inputs.
      let i = 0
      for (i = 0; i < this.itemCount_; i++) {
        if (!this.getInput(`ADD${i}`)) {
          const input = this.appendValueInput(`ADD${i}`)
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck('DictPair')
          if (i === 0) {
            input.appendField(Blockly.Msg.DICTS_CREATE_WITH_INPUT_WITH)
          }
        }
      }
      // Remove deleted inputs.
      while (this.getInput(`ADD${i}`)) {
        this.removeInput(`ADD${i}`)
        i++
      }
    }
  }

  Blockly.Blocks.dicts_create_with_container = {
    /**
     * Mutator block for dict container.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#833471')
      this.appendDummyInput().appendField(
        Blockly.Msg.DICTS_CREATE_WITH_CONTAINER_TITLE_ADD
      )
      this.appendStatementInput('STACK')
      this.contextMenu = false
    }
  }

  Blockly.Blocks.dicts_create_with_item = {
    /**
     * Mutator block for adding items.
     * @this Blockly.Block
     */
    init () {
      this.setColour('#833471')
      this.appendDummyInput().appendField(
        Blockly.Msg.DICTS_CREATE_WITH_ITEM_TITLE
      )
      this.setPreviousStatement(true)
      this.setNextStatement(true)
      this.contextMenu = false
    }
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = assignment;
function assignment (Blockly) {
  Blockly.Blocks.set_complex = {
    init: function () {
      this.appendValueInput('real').setCheck('Number')
      this.appendValueInput('imagine').setCheck('Number').appendField('+')
      this.appendDummyInput().appendField('j')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true, 'Number')
      this.setColour(65)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.binary_type = {
    init: function () {
      this.appendValueInput('anything')
        .setCheck(['String', 'Number'])
        .appendField('转化为二进制')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true, 'Byte')
      this.setColour(195)
    }
  }

  Blockly.Blocks.globall = {
    init: function () {
      this.appendValueInput('global').setCheck(null).appendField('global')
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.input = {
    init: function () {
      this.appendValueInput('inputs')
        .setCheck(['Boolean', 'Array', 'String', 'Number'])
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField('input')
      this.appendDummyInput()
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true, ['Boolean', 'Array', 'String', 'Number'])
      this.setColour(230)
      this.setTooltip('输入')
      this.setHelpUrl(
        'https://docs.python.org/3.10/library/functions.html#input'
      )
    }
  }

  // empty input
  Blockly.Blocks.empty_input = {
    init: function () {
      this.appendDummyInput().appendField('input()')
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  // raw input
  Blockly.Blocks.raw_input = {
    init: function () {
      this.appendDummyInput().appendField('raw_input()')
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setOutput(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  // global
  Blockly.Blocks.globall = {
    init: function () {
      this.appendValueInput('global').setCheck(null).appendField('global')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = classes;
function classes (Blockly) {
  Blockly.defineBlocksWithJsonArray([
    {
      type: 'class_build',
      message0: 'class %1 : %2',
      args0: [
        {
          type: 'field_input',
          name: 'class_build_classname',
          text: ''
        },
        {
          type: 'input_statement',
          name: 'class_build_classcontent'
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'class_method',
      message0: '%1 . %2',
      args0: [
        {
          type: 'field_input',
          name: 'class_method_methodname',
          text: '实例名'
        },
        {
          type: 'field_input',
          name: 'class_method_methodcontent',
          text: '方法名'
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'class_method_return',
      message0: '%1 . %2',
      args0: [
        {
          type: 'field_input',
          name: 'class_method_return_methodname',
          text: '实例名'
        },
        {
          type: 'field_input',
          name: 'class_method_return_methodcontent',
          text: '方法名'
        }
      ],
      output: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    }
  ])

  // 类继承
  Blockly.Blocks.extend_class = {
    init: function () {
      this.appendValueInput('father')
        .setCheck('Class')
        .appendField('parent Class')
      this.setOutput(true, 'Class')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip(
        'Inheritance allows us to define a Class that inherits all the methods and properties of another Class.'
      )
      this.setHelpUrl('https://www.w3school.com.cn/python/python_inheritance.asp')
    }
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dataType;
function dataType (Blockly) {
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


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = datetime;
function datetime (Blockly) {
// datetime_now
  Blockly.Blocks.datetime_now = {
    init: function () {
      this.appendDummyInput().appendField('datetime.datetime.now()')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // datetime
  Blockly.Blocks.datetime = {
    init: function () {
      this.appendDummyInput().appendField('datetime.datetime(')
      this.appendValueInput('dateyear').setCheck('Number')
      this.appendValueInput('datemonth').setCheck('Number').appendField(',')
      this.appendValueInput('dateday').setCheck('Number').appendField(',')
      this.appendDummyInput().appendField(')')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // strftime
  Blockly.Blocks.strftime = {
    init: function () {
      this.appendValueInput('dateobject').setCheck(null)
      this.appendValueInput('datetype').setCheck(null).appendField('.strftime("')
      this.appendDummyInput().appendField('")')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = exception;
function exception (Blockly) {
  Blockly.defineBlocksWithJsonArray([
  // try
    {
      type: 'try_sentence',
      message0: 'try:',
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: '',
      helpUrl: ''
    },
    // except
    {
      type: 'except_sentence',
      message0: 'except:',
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: '',
      helpUrl: ''
    },
    // except add
    {
      type: 'except_add',
      message0: 'except %1 :',
      args0: [
        {
          type: 'input_value',
          name: 'except_add'
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: '',
      helpUrl: ''
    },
    // else
    {
      type: 'else_sentence',
      message0: 'else:',
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: '',
      helpUrl: ''
    },
    // finally
    {
      type: 'finally_sentence',
      message0: 'finally:',
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: '',
      helpUrl: ''
    },
    // raise
    {
      type: 'raise_sentence',
      message0: 'raise  %1 %2 ( %3 )',
      args0: [
        {
          type: 'input_dummy'
        },
        {
          type: 'field_input',
          name: 'errorname',
          text: 'error'
        },
        {
          type: 'input_value',
          name: 'raise_error',
          check: 'String'
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: '',
      helpUrl: ''
    }
  ])
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = file;
function file (Blockly) {
// openfile
  Blockly.Blocks.open = {
    init: function () {
      this.appendValueInput('txt').setCheck('String').appendField('open')
      this.appendValueInput('module').setCheck('String').appendField('，')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(210)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // readfile
  Blockly.Blocks.readfile = {
    init: function () {
      this.appendValueInput('readname')
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
      this.appendDummyInput().appendField('.read')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(240)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // control_readfile
  Blockly.Blocks.control_readfile = {
    init: function () {
      this.appendValueInput('controlreadname')
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
      this.appendValueInput('controlnum').setCheck('Number').appendField('.read')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(165)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // readline
  Blockly.Blocks.readline = {
    init: function () {
      this.appendValueInput('readline').setCheck(null)
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('.readline')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(285)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // closefile
  Blockly.Blocks.closefile = {
    init: function () {
      this.appendValueInput('closefile').setCheck(null)
      this.appendDummyInput().appendField('.close')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(345)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // writefile
  Blockly.Blocks.writefile = {
    init: function () {
      this.appendValueInput('writefile')
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
      this.appendValueInput('writename')
        .setCheck('String')
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField('.write')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(195)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // removefiles
  Blockly.Blocks.removefile = {
    init: function () {
      this.appendValueInput('removefile')
        .setCheck('String')
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField('os.remove')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(30)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // remove_all_file
  Blockly.Blocks.remove_all_file = {
    init: function () {
      this.appendValueInput('removeall')
        .setCheck('String')
        .appendField('os.rmdir')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(270)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // if_exist_file
  Blockly.Blocks.if_exist_file = {
    init: function () {
      this.appendValueInput('existfile')
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('os.path.exists')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(75)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = importModules;
function importModules (Blockly) {
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


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = innerFunctions;
function innerFunctions (Blockly) {
  Blockly.defineBlocksWithJsonArray([
    {
      type: 'function_length',
      message0: 'len %1',
      args0: [
        {
          type: 'input_value',
          name: 'function_length_inputtext',
          check: [
            'String',
            'Array',
            'List',
            'Dictionary',
            'Set',
            'Tuple',
            'Bytes',
            'Range'
          ]
        }
      ],
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_local',
      message0: 'locals',
      output: 'Direction',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_object',
      message0: 'object',
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_isinstance',
      message0: 'isinstance %1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'function_isinstance_object'
        },
        {
          type: 'input_value',
          name: 'function_isinstance_classinformation',
          check: 'Classinfo'
        },
        {
          type: 'input_dummy'
        }
      ],
      output: 'Boolean',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_issubclass',
      message0: 'issubclass %1  %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'function_issubclass_class'
        },
        {
          type: 'input_value',
          name: 'function_issubclass_classinfo'
        },
        {
          type: 'input_dummy'
        }
      ],
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_next',
      message0: 'next %1',
      args0: [
        {
          type: 'input_value',
          name: 'function_next_iterable',
          check: 'Iterator'
        }
      ],
      output: null,
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_map',
      message0: 'map %1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'function_map_function',
          check: 'Function'
        },
        {
          type: 'input_value',
          name: 'function_map_iterable',
          check: 'Iterator'
        },
        {
          type: 'input_dummy'
        }
      ],
      output: 'Iterator',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_memoryview',
      message0: 'memoryview %1',
      args0: [
        {
          type: 'input_value',
          name: 'function_memoryview_object'
        }
      ],
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_max',
      message0: 'max %1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'function_max_input1',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'function_max_input2',
          check: 'Number'
        },
        {
          type: 'input_dummy'
        }
      ],
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    },
    {
      type: 'function_min',
      message0: 'min %1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'function_min_input1',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'function_min_input2',
          check: 'Number'
        },
        {
          type: 'input_dummy'
        }
      ],
      output: 'Number',
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: '',
      helpUrl: ''
    }
  ])
  Blockly.Blocks.abs = {
    init: function () {
      this.appendDummyInput().appendField('abs')
      this.appendValueInput('abs_argument').setCheck('Number')
      this.setInputsInline(true)
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.aiter = {
    init: function () {
      this.appendDummyInput().appendField('aiter')
      this.appendValueInput('aiter_argument').setCheck('Iterator')
      this.setInputsInline(true)
      this.setOutput(true, 'Iterator')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.all = {
    init: function () {
      this.appendDummyInput().appendField('all')
      this.appendValueInput('all_argument').setCheck('Iterator')
      this.setInputsInline(true)
      this.setOutput(true, 'Boolean')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.any = {
    init: function () {
      this.appendDummyInput().appendField('any')
      this.appendValueInput('any_argument').setCheck('Iterator')
      this.setInputsInline(true)
      this.setOutput(true, 'Boolean')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.anext = {
    init: function () {
      this.appendDummyInput().appendField('anext')
      this.appendValueInput('anext_left_argument').setCheck('Iterator')
      this.appendValueInput('anext_right_argument').setCheck('Iterator')
      this.setInputsInline(true)
      this.setOutput(true, 'Iterator')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.ascii = {
    init: function () {
      this.appendDummyInput().appendField('ascii')
      this.appendValueInput('ascii_argument').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, 'String')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.bin = {
    init: function () {
      this.appendDummyInput().appendField('bin')
      this.appendValueInput('bin_argument').setCheck('Number')
      this.setInputsInline(true)
      this.setOutput(true, 'String')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.bool = {
    init: function () {
      this.appendDummyInput().appendField('bool')
      this.appendValueInput('bool_argument').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, 'Boolean')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.break_point = {
    init: function () {
      this.appendDummyInput().appendField('breakpoint')
      this.appendValueInput('breakpoint_left_argument').setCheck(null)
      this.appendValueInput('breakpoint_right_argument').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.byte_array = {
    init: function () {
      this.appendDummyInput().appendField('bytearray')
      this.appendValueInput('bytearray_source').setCheck([
        'String',
        'Number',
        'Iterator'
      ])
      this.appendValueInput('bytearray_encoding').setCheck('String')
      this.appendValueInput('bytearray_error').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, 'Array')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.bytes = {
    init: function () {
      this.appendDummyInput().appendField('bytes')
      this.appendValueInput('bytes_source').setCheck([
        'String',
        'Number',
        'Iterator'
      ])
      this.appendValueInput('bytes_encoding').setCheck('String')
      this.appendValueInput('bytes_error').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, 'Bytes')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.callable = {
    init: function () {
      this.appendDummyInput().appendField('callable')
      this.appendValueInput('callable_argument').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, 'Boolean')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  // chr
  Blockly.Blocks.chr = {
    init: function () {
      this.appendValueInput('chrnum').setCheck('Number').appendField('chr')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(210)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // classmethod
  Blockly.Blocks.class_method = {
    init: function () {
      this.appendDummyInput().appendField('@classmethod')
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // compile
  Blockly.Blocks.compile = {
    init: function () {
      this.appendValueInput('sourse').setCheck(null).appendField('compile')
      this.appendValueInput('filename').setCheck('String')
      this.appendValueInput('mode').setCheck(null)
      this.appendValueInput('flags').setCheck('Number')
      this.appendValueInput('dont_inherit').setCheck('Boolean')
      this.appendValueInput('optimize').setCheck('Number')
      this.setInputsInline(true)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // complex
  Blockly.Blocks.complex = {
    init: function () {
      this.appendValueInput('complex').setCheck(null).appendField('complex')
      this.appendValueInput('complexl').setCheck(null).appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // delattr
  Blockly.Blocks.delattr = {
    init: function () {
      this.appendValueInput('delattrobject')
        .setCheck(null)
        .appendField('delattr')
      this.appendValueInput('delattrname').setCheck(null).appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // dir
  Blockly.Blocks.dir = {
    init: function () {
      this.appendValueInput('dirobject').setCheck(null).appendField('dir')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // divmod
  Blockly.Blocks.divmod = {
    init: function () {
      this.appendValueInput('divmoda').setCheck('Number').appendField('divmod')
      this.appendValueInput('divmodb').setCheck('Number').appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // enumerate
  Blockly.Blocks.enumerate = {
    init: function () {
      this.appendValueInput('iterable').setCheck(null).appendField('enumerate')
      this.appendValueInput('enumstart').setCheck('Number').appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // filter
  Blockly.Blocks.filter = {
    init: function () {
      this.appendValueInput('filterfunction')
        .setCheck(null)
        .appendField('filter')
      this.appendValueInput('filteriterable').setCheck(null).appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // eval
  Blockly.Blocks.eval = {
    init: function () {
      this.appendValueInput('evala').setCheck(null).appendField('eval')
      this.appendValueInput('evalb').setCheck(null).appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // exec
  Blockly.Blocks.exec = {
    init: function () {
      this.appendValueInput('execglobal').setCheck(null).appendField('exec')
      this.appendValueInput('execlocal').setCheck(null).appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  Blockly.Blocks.format = {
    init: function () {
      this.appendValueInput('txt').setCheck('String')
      this.appendDummyInput().appendField('.format')
      this.appendValueInput('string').setCheck(['String', 'Number'])
      this.setOutput(true, 'String')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.float = {
    init: function () {
      this.appendValueInput('otherValue').setCheck(Number).appendField('float')
      this.appendDummyInput()
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.frozenset = {
    init: function () {
      this.appendValueInput('set')
        .setCheck('Set')
        .appendField('class frozenset')
      this.appendDummyInput()
      this.setOutput(true, 'frozenset')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.getattr = {
    init: function () {
      this.appendValueInput('class').setCheck('Class').appendField('getattr')
      this.appendDummyInput()
      this.appendValueInput('member').setCheck('String')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.globals = {
    init: function () {
      this.appendDummyInput().appendField('globals ()')
      this.setOutput(true, 'Dict')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.hasattr = {
    init: function () {
      this.appendValueInput('object').setCheck('Object').appendField('hasattr')
      this.appendDummyInput()
      this.appendValueInput('member').setCheck('String')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.hash = {
    init: function () {
      this.appendValueInput('object').setCheck('Object').appendField('hash')
      this.appendDummyInput()
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.help = {
    init: function () {
      this.appendValueInput('helpValue').setCheck('Object').appendField('help')
      this.appendDummyInput()
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.hex = {
    init: function () {
      this.appendValueInput('number').setCheck('Number').appendField('hex')
      this.appendDummyInput()
      this.setOutput(true, 'String')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.id_function = {
    init: function () {
      this.appendValueInput('object').setCheck('Object').appendField('id')
      this.appendDummyInput()
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.input = {
    init: function () {
      this.appendValueInput('inputValue').setCheck(null).appendField('input')
      this.appendDummyInput()
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.int_class= {
    init: function () {
      this.appendValueInput('number')
        .setCheck('Number')
        .appendField('class int')
      this.appendDummyInput()
      this.appendValueInput('base').setCheck('Base')
      this.setOutput(true, 'Class')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.round_function = {
    init: function () {
      this.appendValueInput('number').setCheck('Number')
      this.appendDummyInput().appendField(
        new Blockly.FieldLabelSerializable('round(a,b)'),
        'round('
      )
      this.appendValueInput('accuracy').setCheck('Number')
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip(
        'Return number rounded to ndigits precision after the decimal point. If ndigits is omitted or is , it returns the nearest integer to its input.None'
      )
      this.setHelpUrl(
        'https://docs.python.org/3.10/library/functions.html#round'
      )
    }
  }

  Blockly.Blocks.reverse = {
    init: function () {
      this.appendValueInput('reverse_function')
        .setCheck(['String', 'Array', 'Number'])
        .appendField('reverse function')
      this.appendDummyInput().appendField('')
      this.setOutput(true, ['String', 'Array', 'Number'])
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('Return a reverse iterator.')
      this.setHelpUrl(
        'https://docs.python.org/3.10/library/functions.html#reversed'
      )
    }
  }

  Blockly.Blocks.open_file = {
    init: function () {
      this.appendValueInput('file').setCheck('String').appendField('openfile')
      this.appendDummyInput()
        .appendField(
          new Blockly.FieldDropdown([
            ['read', 'r'],
            ['write', 'w'],
            ['create-new', 'x'],
            ['apending', 'a'],
            ['read and write', '+']
          ]),
          'mode1'
        )
        .appendField(
          new Blockly.FieldDropdown([
            ['text', 't'],
            ['binary', 'b']
          ]),
          'textbinary'
        )
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('Open file and return a corresponding file Object.')
      this.setHelpUrl(
        'https://docs.python.org/3.10/library/functions.html#open'
      )
    }
  }

  Blockly.Blocks.ord = {
    init: function () {
      this.appendValueInput('str').setCheck('String').appendField('ord()')
      this.appendDummyInput()
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip(
        'Given a string representing one Unicode character, return an integer representing the Unicode code point of that character. '
      )
      this.setHelpUrl('https://docs.python.org/3.10/library/functions.html#ord')
    }
  }

  Blockly.Blocks.inner_pow = {
    init: function () {
      this.appendValueInput('base').setCheck('Number').appendField('内置pow()')
      this.appendValueInput('exp').setCheck('Number').appendField(',')
      this.appendValueInput('mod').setCheck('Number').appendField('[, ')
      this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField(']')
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip(
        'Return base to the power exp; if mod is present, return base to the power exp, modulo mod (computed more efficiently than ). '
      )
      this.setHelpUrl('https://docs.python.org/3.10/library/functions.html#pow')
    }
  }

  Blockly.Blocks.property = {
    init: function () {
      this.appendValueInput('fget').setCheck('String').appendField('property')
      this.appendValueInput('fset').setCheck('String').appendField('get,')
      this.appendValueInput('fdel').setCheck('String').appendField('set,')
      this.appendValueInput('doc').setCheck('String').appendField('delete,')
      this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField('doc')
      this.setOutput(true, 'Class')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('Return a property attribute.')
      this.setHelpUrl(
        'https://docs.python.org/3.10/library/functions.html#property'
      )
    }
  }

  Blockly.Blocks.range__ = {
    init: function () {
      this.appendDummyInput()
        .appendField('range()')
        .appendField(new Blockly.FieldNumber(0, 0), 'start')
      this.appendValueInput('end').setCheck('Number').appendField(',')
      this.appendDummyInput()
        .appendField(',')
        .appendField(new Blockly.FieldNumber(1), 'step_length')
      this.setOutput(true, 'Object')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip(
        'The arguments to the range constructor must be integers (either built-in int or any Object that implements the __index__() special method).'
      )
      this.setHelpUrl(
        'https://docs.python.org/3.10/library/stdtypes.html#range'
      )
    }
  }

  Blockly.Blocks.repr = {
    init: function () {
      this.appendValueInput('obj').setCheck('Object').appendField('repr()')
      this.appendDummyInput()
      this.setOutput(true, 'String')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip(
        'Return a string containing a printable representation of an Object. '
      )
      this.setHelpUrl(
        'https://docs.python.org/3.10/library/functions.html#repr'
      )
    }
  }

  Blockly.Blocks.set_func = {
    init: function () {
      this.appendValueInput('iterable').setCheck('String').appendField('set()')
      this.appendDummyInput()
      this.setOutput(true, 'Set')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(260)
      this.setTooltip(
        'Return a string containing a printable representation of an Object. '
      )
      this.setHelpUrl('https://docs.python.org/3.10/library/stdtypes.html#set')
    }
  }

  Blockly.Blocks.oct = {
    init: function () {
      this.appendValueInput('iterable').setCheck('Number').appendField('oct()')
      this.appendDummyInput()
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(260)
      this.setTooltip(
        'Convert an integer number to an octal string prefixed with “0o”. '
      )
      this.setHelpUrl('https://docs.python.org/3.10/library/functions.html#oct')
    }
  }

  Blockly.Blocks.function_sum = {
    init: function () {
      this.appendValueInput('iterable').setCheck(null).appendField('可迭代对象')
      this.appendValueInput('start').setCheck(null).appendField('参数')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(285)
      this.setTooltip('use this add all number')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.xrange = {
    init: function () {
      this.appendValueInput('start').setCheck('Number').appendField('计数开始')
      this.appendValueInput('stop').setCheck('Number').appendField('计数结束')
      this.appendValueInput('step').setCheck('Number').appendField('步长')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('function xrange similar with range')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.type_with_one_argument = {
    init: function () {
      this.appendValueInput('object').setCheck(null).appendField('object')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip("function type about parameter's type ")
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.type_with_three_argument = {
    init: function () {
      this.appendValueInput('name').setCheck(null).appendField('name')
      this.appendValueInput('bases').setCheck(null).appendField('bases')
      this.appendValueInput('dict').setCheck(null).appendField('dict')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('function type with 3 parameter')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.slice_fun = {
    init: function () {
      this.appendValueInput('sliceArgument')
        .setCheck('Number')
        .appendField('slice')
      this.setInputsInline(true)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = iterator;
function iterator (Blockly) {
  Blockly.Blocks.iter = {
    init: function () {
      this.appendValueInput('list').setCheck('Array').appendField('iter')
      this.appendDummyInput()
      this.setOutput(true, 'Iterator')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.next = {
    init: function () {
      this.appendValueInput('iterator').setCheck('Iterator').appendField('next')
      this.appendDummyInput()
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.__iter__function = {
    init: function () {
      this.appendValueInput('iterator')
        .setCheck('Iterator')
        .appendField('__iter__')
      this.appendStatementInput('statement').setCheck(null)
      this.setOutput(true, 'Iterator')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.__next__function = {
    init: function () {
      this.appendValueInput('iterator')
        .setCheck('Iterator')
        .appendField('__next__')
      this.appendStatementInput('statement').setCheck(null)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.stopiterationmsg = {
    init: function () {
      this.appendDummyInput().appendField('StopIteration')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = operator;
function operator (Blockly) {
  Blockly.Blocks.bitwise_operators = {
    init: function () {
      this.appendValueInput('bitwise_left_argument').setCheck('Number')
      this.appendValueInput('bitwise_right_argument')
        .setCheck('Number')
        .appendField(
          new Blockly.FieldDropdown([
            ['&', '&'],
            ['|', '|'],
            ['^', '^'],
            ['~', '~'],
            ['<<', '<<'],
            ['>>', '>>']
          ]),
          'bitwise_operator'
        )
      this.setInputsInline(true)
      this.setOutput(true, 'Number')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.identity_operators = {
    init: function () {
      this.appendValueInput('identity_first_argument').setCheck(null)
      this.appendValueInput('identity_second_argument')
        .setCheck(null)
        .appendField(
          new Blockly.FieldDropdown([
            ['is', 'is'],
            ['is not', 'is not']
          ]),
          'identity_operator'
        )
      this.setInputsInline(true)
      this.setOutput(true, 'Boolean')
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(230)
    }
  }

  Blockly.Blocks.assign_operator = {
    init: function () {
      this.appendValueInput('variable')
        .setCheck(['Boolean', 'Array', 'String', 'Number'])
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField('赋值')
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(
          new Blockly.FieldDropdown([
            ['=', '='],
            ['+=', '+='],
            ['-=', '-='],
            ['*=', '*='],
            ['/=', '/='],
            ['%=', '%='],
            ['**=', '**='],
            ['//=', '//='],
            ['&=', '&='],
            ['|=', '|='],
            ['^=', '^='],
            ['>>=', '>>='],
            ['<<=', '<<=']
          ]),
          'assignment_operators'
        )
      this.appendValueInput('value').setCheck(null)
      this.setOutput(true, ['Boolean', 'Array', 'String', 'Number'])
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setHelpUrl('https://www.w3school.com.cn/python/python_operators.asp')
    }
  }

  Blockly.Blocks.arithmetic_operator = {
    init: function () {
      this.appendValueInput('value1').setCheck(null)
      this.appendDummyInput().appendField(
        new Blockly.FieldDropdown([
          ['+', '+'],
          ['-', '-'],
          ['*', '*'],
          ['/', '/'],
          ['%', '%'],
          ['**', '**'],
          ['//', '//']
        ]),
        'operator'
      )
      this.appendValueInput('value2').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(225)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }

  Blockly.Blocks.in = {
    init: function () {
      this.appendValueInput('inBool')
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField('in')
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(150)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = re;
function re (Blockly) {
  // findall
  Blockly.Blocks.find_all = {
    init: function () {
      this.appendValueInput('findstr').setCheck('String').appendField('findall')
      this.appendValueInput('findvalue').setCheck(null).appendField(',')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // research
  Blockly.Blocks.search = {
    init: function () {
      this.appendValueInput('searchtype')
        .setCheck('String')
        .appendField('re.search')
      this.appendValueInput('searchname').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // resplit
  Blockly.Blocks.resplit = {
    init: function () {
      this.appendValueInput('resplittype')
        .setCheck('String')
        .appendField('re.split')
      this.appendValueInput('resplitname').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // resub
  Blockly.Blocks.sub = {
    init: function () {
      this.appendValueInput('subtype').setCheck('String').appendField('re.sub')
      this.appendValueInput('subvalue').setCheck('String')
      this.appendValueInput('subname').setCheck(null)
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
  // recontrolsub
  Blockly.Blocks.control_sub = {
    init: function () {
      this.appendValueInput('controlsubtype')
        .setCheck('String')
        .appendField('re.sub')
      this.appendValueInput('controlsubvalue').setCheck('String')
      this.appendValueInput('controlsubname').setCheck(null)
      this.appendValueInput('subtime').setCheck('Number')
      this.setInputsInline(true)
      this.setOutput(true, null)
      this.setPreviousStatement(true, null)
      this.setNextStatement(true, null)
      this.setColour(120)
      this.setTooltip('')
      this.setHelpUrl('')
    }
  }
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addition;
function addition (Blockly) {
  Blockly.Python.function_length_temporary = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'VALUE',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'len(' + valueInput + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.raw_empty = function (block) {
    const value =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) ||
      Blockly.Python.blank
    return `${value}\n`
  }

  Blockly.Python.raw_block = function (block) {
    return `${block.getFieldValue('TEXT')}\n`
  }

  Blockly.Python.constants_ellipsis = function () {
    return ['...', Blockly.Python.ORDER_ATOMIC]
  }

  Blockly.Python.variables_set_multiple = function (block) {
    // Create a list with any number of elements of any type.
    const value =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      Blockly.Python.blank
    const targets = new Array(block.targetCount_)
    if (block.targetCount_ === 1 && block.simpleTarget_) {
      targets[0] = Blockly.Python.variableDB_.getName(
        block.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE
      )
    } else {
      for (let i = 0; i < block.targetCount_; i++) {
        targets[i] =
          Blockly.Python.valueToCode(
            block,
            `TARGET${i}`,
            Blockly.Python.ORDER_NONE
          ) || Blockly.Python.blank
      }
    }
    return `${targets.join(' = ')} = ${value}\n`
  }

  Blockly.Python.variables_set_global = function (block) {
    // Create a list with any number of elements of any type.
    const elements = new Array(block.nameCount_)
    for (let i = 0; i < block.nameCount_; i++) {
      elements[i] = Blockly.Python.variableDB_.getName(
        block.getFieldValue(`NAME${i}`),
        Blockly.Variables.NAME_TYPE
      )
    }
    return `global ${elements.join(', ')}\n`
  }

  Blockly.Python.variables_delete = function (block) {
    // Create a list with any number of elements of any type.
    const elements = new Array(block.targetCount_)
    for (let i = 0; i < block.targetCount_; i++) {
      elements[i] =
        Blockly.Python.valueToCode(
          block,
          `TARGET${i}`,
          Blockly.Python.ORDER_NONE
        ) || Blockly.Python.blank
    }
    return `del ${elements.join(', ')}\n`
  }

  Blockly.Python.input_block = function () {
    const code = 'input()'
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.input_prompt_block = function (block) {
    const valuePrompt = Blockly.Python.valueToCode(
      block,
      'PROMPT',
      Blockly.Python.ORDER_NONE
    )
    const code = `input(${valuePrompt})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.controls_whileElse = function (block) {
    const until = block.getFieldValue('MODE') === 'UNTIL'
    let argument0 =
      Blockly.Python.valueToCode(
        block,
        'BOOL',
        until ? Blockly.Python.ORDER_LOGICAL_NOT : Blockly.Python.ORDER_NONE
      ) || 'False'
    let branchBody = Blockly.Python.statementToCode(block, 'DO')
    branchBody =
      Blockly.Python.addLoopTrap(branchBody, block) || Blockly.Python.PASS
    const branchElse =
      Blockly.Python.statementToCode(block, 'ELSE') || Blockly.Python.PASS
    if (until) {
      argument0 = `not ${argument0}`
    }
    return `while ${argument0}\n${branchBody}else:\n${branchElse}`
  }

  Blockly.Python.controls_forElse = function (block) {
    const argument0 = Blockly.Python.variableDB_.getName(
      block.getFieldValue('VAR'),
      Blockly.VARIABLE_CATEGORY_NAME
    )
    const argument1 =
      Blockly.Python.valueToCode(
        block,
        'LIST',
        Blockly.Python.ORDER_RELATIONAL
      ) || Blockly.Python.blank
    const branchBody =
      Blockly.Python.statementToCode(block, 'DO') || Blockly.Python.PASS
    const branchElse =
      Blockly.Python.statementToCode(block, 'ELSE') || Blockly.Python.PASS
    return `for ${argument0} in ${argument1}:\n${branchBody}else:\n${branchElse}`
  }

  Blockly.Python.math_number_imaginary = function (block) {
    let code = Number(block.getFieldValue('NUM'))
    let order
    if (code === Infinity) {
      code = 'complex("infj")'
      order = Blockly.Python.ORDER_FUNCTION_CALL
    } else if (code === -Infinity) {
      code = '-complex("infj")'
      order = Blockly.Python.ORDER_UNARY_SIGN
    } else {
      order = Blockly.Python.ORDER_ATOMIC
    }
    return [`${code}j`, order]
  }

  Blockly.Python.math_on_two = function (block) {
    const valueFunctionName = Blockly.Python.valueToCode(
      block,
      'OP',
      Blockly.Python.ORDER_NONE
    )
    const valueFunctionNumber1 = Blockly.Python.valueToCode(
      block,
      'NUMBER1',
      Blockly.Python.ORDER_NONE
    )
    const valueFunctionNumber2 = Blockly.Python.valueToCode(
      block,
      'NUMBER2',
      Blockly.Python.ORDER_NONE
    )
    let code = ''
    if (valueFunctionName === 'AVERAGE') {
      code = `(${valueFunctionNumber1} / ${valueFunctionNumber2})`
    } else if (valueFunctionName === 'MAX') {
      code = `max(${valueFunctionNumber1}, ${valueFunctionNumber2})`
    } else {
      code = `min(${valueFunctionNumber1}, ${valueFunctionNumber2})`
    }
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.math_on_set = function (block) {
    // Math functions for set.
    const func = block.getFieldValue('OP')
    const set =
      Blockly.Python.valueToCode(block, 'SET', Blockly.Python.ORDER_NONE) ||
      '[]'
    let code
    switch (func) {
      case 'SUM':
        code = `sum(${set})`
        break
      case 'MIN':
        code = `min(${set})`
        break
      case 'MAX':
        code = `max(${set})`
        break
      case 'AVERAGE':
        Blockly.Python.definitions_.from_numbers_import_Number =
          'from numbers import Number'
        code = `${Blockly.Python.provideFunction_('math_mean', [
          `def ${Blockly.Python.FUNCTION_NAME_PLACEHOLDER_}(mySet):`,
          '  localList = [e for e in mySet if isinstance(e, Number)]',
          '  if not localList: return',
          '  return float(sum(localList)) / len(localList)'
        ])}(${set})`
        break
      default:
        throw Error(`Unknown operator: ${func}`)
    }
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.math_integer_division = function (block) {
    // Integer quotient computation.
    const argument0 =
      Blockly.Python.valueToCode(
        block,
        'DIVIDEND',
        Blockly.Python.ORDER_MULTIPLICATIVE
      ) || '0'
    const argument1 =
      Blockly.Python.valueToCode(
        block,
        'DIVISOR',
        Blockly.Python.ORDER_MULTIPLICATIVE
      ) || '0'
    const code = `${argument0} // ${argument1}`
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE]
  }

  Blockly.Python.math_integer_divmod = function (block) {
    // Integer quotient computation.
    const argument0 =
      Blockly.Python.valueToCode(
        block,
        'DIVIDEND',
        Blockly.Python.ORDER_MULTIPLICATIVE
      ) || '0'
    const argument1 =
      Blockly.Python.valueToCode(
        block,
        'DIVISOR',
        Blockly.Python.ORDER_MULTIPLICATIVE
      ) || '0'
    const code = `divmod(${argument0}, ${argument1})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.math_bitwise_arithmetic = function (block) {
    // Basic arithmetic operators, and power.
    const OPERATORS = {
      AND: [' & ', Blockly.Python.ORDER_BITWISE_AND],
      OR: [' | ', Blockly.Python.ORDER_BITWISE_OR],
      XOR: [' ^ ', Blockly.Python.ORDER_BITWISE_XOR],
      LEFT_SHIFT: [' << ', Blockly.Python.ORDER_BITWISE_SHIFT],
      RIGHT_SHIFT: [' >> ', Blockly.Python.ORDER_BITWISE_SHIFT]
    }
    const tuple = OPERATORS[block.getFieldValue('OP')]
    const operator = tuple[0]
    const order = tuple[1]
    const argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0'
    const argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0'
    const code = argument0 + operator + argument1
    return [code, order]
  }

  Blockly.Python.math_bitwise_not = function (block) {
    const value =
      Blockly.Python.valueToCode(
        block,
        'VALUE',
        Blockly.Python.ORDER_BITWISE_NOT
      ) || '0'
    const code = `~${value}`
    return [code, Blockly.Python.ORDER_BITWISE_NOT]
  }

  Blockly.Python.math_radix = function (block) {
    const value =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) || 0
    const RADIX_NAMES = {
      BIN: ['bin', 'b'],
      OCT: ['oct', 'o'],
      HEX: ['hex', 'x']
    }
    const radix = RADIX_NAMES[block.getFieldValue('RADIX')]
    const hasPrefix = block.getFieldValue('PREFIX') === 'WITH'
    if (hasPrefix) {
      return [`${radix[0]}(${value})`, Blockly.Python.ORDER_FUNCTION_CALL]
    }
    return [
      `format(${value}, '${radix[1]}')`,
      Blockly.Python.ORDER_FUNCTION_CALL
    ]
  }

  Blockly.Python.text_concat = function (block) {
    const argument0 = Blockly.Python.valueToCode(
      block,
      'a',
      Blockly.Python.ORDER_NONE
    )
    const argument1 = Blockly.Python.valueToCode(
      block,
      'b',
      Blockly.Python.ORDER_NONE
    )
    const code = `${argument0} + ${argument1}`
    return [code, Blockly.Python.ORDER_ADDITIVE]
  }

  Blockly.Python.text_repeat = function (block) {
    const value = Blockly.Python.valueToCode(
      block,
      'TEXT',
      Blockly.Python.ORDER_NONE
    )
    const times = Blockly.Python.valueToCode(
      block,
      'TIMES',
      Blockly.Python.ORDER_NONE
    )
    const code = `${value} * ${times}`
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE]
  }

  Blockly.Python.text_chr = function (block) {
    const value = Blockly.Python.valueToCode(
      block,
      'VALUE',
      Blockly.Python.ORDER_NONE
    )
    const code = `chr(${value})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.text_ord = function (block) {
    const value = Blockly.Python.valueToCode(
      block,
      'VALUE',
      Blockly.Python.ORDER_NONE
    )
    const code = `ord(${value})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  // Blockly.Python.text_getSubstring = sliceFunctionFactory('string', "''")

  Blockly.Python.lists_join = function (block) {
    const valueValue = Blockly.Python.valueToCode(
      block,
      'VALUE',
      Blockly.Python.ORDER_NONE
    )
    const valueDelimiter = Blockly.Python.valueToCode(
      block,
      'DELIMITER',
      Blockly.Python.ORDER_NONE
    )
    const code = `${valueDelimiter}.join(${valueValue})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.lists_map = function (block) {
    const valueValue = Blockly.Python.valueToCode(
      block,
      'VALUE',
      Blockly.Python.ORDER_NONE
    )
    const valueFunc = Blockly.Python.valueToCode(
      block,
      'FUNC',
      Blockly.Python.ORDER_NONE
    )
    const code = `map(${valueFunc}, ${valueValue})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.lists_concat = function (block) {
    const argument0 =
      Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_NONE) || null
    const argument1 =
      Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_NONE) || null
    const code = `${argument0} + ${argument1}`
    return [code, Blockly.Python.ORDER_ADDITIVE]
  }

  Blockly.Python.range_create = function (block) {
    const start =
      Blockly.Python.valueToCode(block, 'START', Blockly.Python.ORDER_NONE) ||
      '0'
    const stop =
      Blockly.Python.valueToCode(block, 'STOP', Blockly.Python.ORDER_NONE) ||
      'None'
    const step =
      Blockly.Python.valueToCode(block, 'STEP', Blockly.Python.ORDER_NONE) ||
      '1'
    const code = `range(${start}, ${stop}, ${step})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  // Blockly.Python.lists_getSublist = sliceFunctionFactory('list', '[]')

  Blockly.Python.lists_repeat_times = function (block) {
    const value = Blockly.Python.valueToCode(
      block,
      'VALUE',
      Blockly.Python.ORDER_NONE
    )
    const times = Blockly.Python.valueToCode(
      block,
      'TIMES',
      Blockly.Python.ORDER_NONE
    )
    const code = `${value} * ${times}`
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE]
  }

  Blockly.Python.dot_block = function (block) {
    const valuePrefix = Blockly.Python.valueToCode(
      block,
      'prefix',
      Blockly.Python.ORDER_NONE
    )
    const valueSuffix = Blockly.Python.valueToCode(
      block,
      'suffix',
      Blockly.Python.ORDER_NONE
    )
    const code = `${valuePrefix}.${valueSuffix}`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.type_get = function (block) {
    const value = Blockly.Python.valueToCode(
      block,
      'VAR',
      Blockly.Python.ORDER_ATOMIC
    )
    return [`type(${value})`, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.type_var = function (block) {
    const valueType = block.getFieldValue('TYPE')
    const code = valueType
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.type_convert = function (block) {
    const valueType = block.getFieldValue('TYPE')
    const value = Blockly.Python.valueToCode(
      block,
      'VAR',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `${valueType}(${value})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.logic_object_compare = function (block) {
    const OPERATORS = {
      IS: 'is',
      IS_NOT: 'is not'
    }
    const operator = OPERATORS[block.getFieldValue('OP')]
    const order = Blockly.Python.ORDER_RELATIONAL
    const argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0'
    const argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0'
    const code = `${argument0} ${operator} ${argument1}`
    return [code, order]
  }

  Blockly.Python.logic_object_in = function (block) {
    const OPERATORS = {
      IN: 'in',
      NOT_IN: 'not in'
    }
    const operator = OPERATORS[block.getFieldValue('OP')]
    const order = Blockly.Python.ORDER_RELATIONAL
    const argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0'
    const argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0'
    const code = `${argument0} ${operator} ${argument1}`
    return [code, order]
  }

  Blockly.Python.logic_sets_compare = function (block) {
    const OPERATORS = {
      GT: '>',
      GTE: '>=',
      LT: '<',
      LTE: '<='
    }
    const operator = OPERATORS[block.getFieldValue('OP')]
    const order = Blockly.Python.ORDER_RELATIONAL
    const argument0 = Blockly.Python.valueToCode(block, 'A', order) || '{}'
    const argument1 = Blockly.Python.valueToCode(block, 'B', order) || '{}'
    const code = `${argument0} ${operator} ${argument1}`
    return [code, order]
  }

  Blockly.Python.logic_iterable_check = function (block) {
    const FUNC_NAME = {
      ANY: 'any',
      ALL: 'all'
    }
    const func = FUNC_NAME[block.getFieldValue('FUNC')]
    const value =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      'None'
    const code = `${func}(${value})`
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.logic_debug = function (_block) {
    return ['__debug__', Blockly.Python.ORDER_ATOMIC]
  }

  Blockly.Python.sets_create_with = function (block) {
    // Create a set with any number of elements of any type.
    if (block.itemCount_ === 0) {
      return ['set()', Blockly.Python.ORDER_FUNCTION_CALL]
    }
    const elements = new Array(block.itemCount_)
    for (let i = 0; i < block.itemCount_; i++) {
      elements[i] =
        Blockly.Python.valueToCode(
          block,
          `ADD${i}`,
          Blockly.Python.ORDER_NONE
        ) || Blockly.Python.blank
    }
    const code = `{${elements.join(', ')}}`
    return [code, Blockly.Python.ORDER_COLLECTION]
  }

  Blockly.Python.sets_arithmetic = function (block) {
    // Basic arithmetic operators, and power.
    const OPERATORS = {
      AND: [' & ', Blockly.Python.ORDER_BITWISE_AND],
      OR: [' | ', Blockly.Python.ORDER_BITWISE_OR],
      XOR: [' ^ ', Blockly.Python.ORDER_BITWISE_XOR],
      MINUS: [' - ', Blockly.Python.ORDER_BITWISE_XOR]
    }
    const tuple = OPERATORS[block.getFieldValue('OP')]
    const operator = tuple[0]
    const order = tuple[1]
    const argument0 = Blockly.Python.valueToCode(block, 'A', order) || 'set()'
    const argument1 = Blockly.Python.valueToCode(block, 'B', order) || 'set()'
    const code = argument0 + operator + argument1
    return [code, order]
  }

  Blockly.Python.sets_size = function (block) {
    const set =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      'set()'
    return [`len(${set})`, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.sets_change = function (block) {
    const FUNCTION = {
      ADD: 'add',
      REMOVE: 'discard'
    }
    const set =
      Blockly.Python.valueToCode(block, 'SET', Blockly.Python.ORDER_NONE) ||
      'set()'
    const func =
      Blockly.Python.valueToCode(block, 'FUNC', Blockly.Python.ORDER_NONE) ||
      'add'
    const item =
      Blockly.Python.valueToCode(block, 'ITEM', Blockly.Python.ORDER_NONE) || ''
    return [
      `${set}.${FUNCTION[func]}(${item})`,
      Blockly.Python.ORDER_FUNCTION_CALL
    ]
  }

  Blockly.Python.sets_isEmpty = function (block) {
    const set =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      'set()'
    const code = `not len(${set})`
    return [code, Blockly.Python.ORDER_LOGICAL_NOT]
  }

  Blockly.Python.sets_pop = function (block) {
    const set =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      'set()'
    return [`${set}.pop()`, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.tuples_create_with = function (block) {
    // Create a tuple with any number of elements of any type.
    const elements = new Array(block.itemCount_)
    for (let i = 0; i < block.itemCount_; i++) {
      elements[i] =
        Blockly.Python.valueToCode(
          block,
          `ADD${i}`,
          Blockly.Python.ORDER_NONE
        ) || Blockly.Python.blank
    }
    let requiredComma = ''
    if (block.itemCount_ === 1) {
      requiredComma = ', '
    }
    const code = `(${elements.join(', ')}${requiredComma})`
    return [code, Blockly.Python.ORDER_COLLECTION]
  }

  Blockly.Python.tuples_size = function (block) {
    const tuple =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      '()'
    return [`len(${tuple})`, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.tuples_isEmpty = function (block) {
    const set =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      '()'
    const code = `not len(${set})`
    return [code, Blockly.Python.ORDER_LOGICAL_NOT]
  }

  Blockly.Python.tuples_concat = function (block) {
    const argument0 = Blockly.Python.valueToCode(
      block,
      'A',
      Blockly.Python.ORDER_NONE
    )
    const argument1 = Blockly.Python.valueToCode(
      block,
      'B',
      Blockly.Python.ORDER_NONE
    )
    const code = `${argument0} + ${argument1}`
    return [code, Blockly.Python.ORDER_ADDITIVE]
  }

  Blockly.Python.tuples_repeat = function (block) {
    const value = Blockly.Python.valueToCode(
      block,
      'Tuple',
      Blockly.Python.ORDER_NONE
    )
    const times = Blockly.Python.valueToCode(
      block,
      'TIMES',
      Blockly.Python.ORDER_NONE
    )
    const code = `${value} * ${times}`
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE]
  }

  Blockly.Python.tuples_getIndex = function (block) {
    const where = block.getFieldValue('WHERE') || 'FROM_START'
    const tupleOrder =
      where === 'RANDOM'
        ? Blockly.Python.ORDER_NONE
        : Blockly.Python.ORDER_MEMBER
    const tuple = Blockly.Python.valueToCode(block, 'VALUE', tupleOrder) || '[]'
    let at = 0
    switch (where) {
      case 'FIRST':
        return [`${tuple}[0]`, Blockly.Python.ORDER_MEMBER]
      case 'LAST':
        return [`${tuple}[-1]`, Blockly.Python.ORDER_MEMBER]
      case 'FROM_START':
        at = Blockly.Python.getAdjustedInt(block, 'AT')
        return [`${tuple}[${at}]`, Blockly.Python.ORDER_MEMBER]
      case 'FROM_END':
        at = Blockly.Python.getAdjustedInt(block, 'AT', 1, true)
        return [`${tuple}[${at}]`, Blockly.Python.ORDER_MEMBER]
      case 'RANDOM':
        Blockly.Python.definitions_.import_random = 'import random'
        return [`random.choice(${tuple})`, Blockly.Python.ORDER_FUNCTION_CALL]
    }
    throw Error('Unhandled combination (tuples_getIndex).')
  }

  // Blockly.Python.tuples_getSubtuple = sliceFunctionFactory('tuple', '()')

  Blockly.Python.dicts_create_with = function (block) {
    const elements = new Array(block.itemCount_)
    for (let i = 0; i < block.itemCount_; i++) {
      const child = block.getInputTargetBlock(`ADD${i}`)
      if (child === null || child.type !== 'dicts_pair') {
        elements[i] = `${Blockly.Python.blank}: ${Blockly.Python.blank}`
        continue
      }
      const key =
        Blockly.Python.valueToCode(child, 'KEY', Blockly.Python.ORDER_NONE) ||
        Blockly.Python.blank
      const value =
        Blockly.Python.valueToCode(child, 'VALUE', Blockly.Python.ORDER_NONE) ||
        Blockly.Python.blank
      elements[i] = `${key}: ${value}`
    }
    const code = `{${elements.join(', ')}}`
    return [code, Blockly.Python.ORDER_COLLECTION]
  }

  Blockly.Python.dicts_size = function (block) {
    const dict =
      Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) ||
      '{}'
    return [`len(${dict})`, Blockly.Python.ORDER_FUNCTION_CALL]
  }

  Blockly.Python.dicts_getKey = function (block) {
    const dict =
      Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_NONE) ||
      '{}'
    const key =
      Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_NONE) || ''
    return [`${dict}[${key}]`, Blockly.Python.ORDER_MEMBER]
  }

  Blockly.Python.dicts_setKey = function (block) {
    const dict =
      Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_NONE) ||
      '{}'
    const key =
      Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_NONE) || ''
    const value =
      Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_NONE) || ''
    return [`${dict}[${key}] = ${value}`, Blockly.Python.ORDER_ATOMIC]
  }

  Blockly.Python.dicts_pop = function (block) {
    const dict =
      Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_NONE) ||
      '{}'
    const key =
      Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_NONE) || ''
    return [`${dict}.pop(${key})`, Blockly.Python.ORDER_FUNCTION_CALL]
  }
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = assignment;
function assignment (Blockly) {
  Blockly.Python.set_complex = function (block) {
    const numberReal =
    Blockly.Python.valueToCode(block, 'real', Blockly.Python.ORDER_ATOMIC) ||
    '0'
    const numberImagine =
    Blockly.Python.valueToCode(block, 'imagine', Blockly.Python.ORDER_ATOMIC) ||
    '1'
    return `${numberReal} + ${numberImagine}j`
  }

  Blockly.Python.binary_type = function (block) {
    const valueinput =
    Blockly.Python.valueToCode(
      block,
      'anything',
      Blockly.Python.ORDER_ATOMIC
    ) || 'None'
    const code = 'bytes' + '(' + valueinput + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.globall = function (block) {
    const valueglobal = Blockly.Python.valueToCode(
      block,
      'global',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'global ' + valueglobal
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.input = function (block) {
    const valueName =
    Blockly.Python.valueToCode(block, 'inputs', Blockly.Python.ORDER_ATOMIC) ||
    null
    const code = `input(${valueName})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  // empty input
  Blockly.Python.empty_input = function () {
    const code = 'input()'
    return [code, Blockly.Python.ORDER_NONE]
  }

  // raw input
  Blockly.Python.raw_input = function () {
    const code = 'raw_input()'
    return [code, Blockly.Python.ORDER_NONE]
  }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = classes;
function classes (Blockly) {
  Blockly.Python.class_build = function (block) {
    const textName = block.getFieldValue('class_build_classname')
    const statementsName = Blockly.Python.statementToCode(
      block,
      'class_build_classcontent'
    )
    return 'class ' + textName + ':\n' + statementsName
  }

  Blockly.Python.class_method = function (block) {
    const textName1 = block.getFieldValue('class_method_methodname')
    const textName2 = block.getFieldValue('class_method_methodcontent')
    return textName1 + '.' + textName2 + '()' + '\n'
  }

  Blockly.Python.class_method_return = function (block) {
    const textName1 = block.getFieldValue('class_method_return_methodname')
    const textName2 = block.getFieldValue('class_method_return_methodcontent')
    const code = textName1 + '.' + textName2 + '()' + '\n'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.extend_class = function (block) {
    const valueFather = Blockly.Python.valueToCode(
      block,
      'father',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `extends ${valueFather}`
    return [code, Blockly.Python.ORDER_NONE]
  }
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dataType;
function dataType (Blockly) {
  Blockly.Python.dict_create_with = function (block) {
    // Create a list with any number of elements of any type.
    const elementskey = new Array(block.itemCount_)
    for (let i = 0; i < block.itemCount_; i++) {
      elementskey[i] =
        Blockly.Python.valueToCode(
          block,
          'ADD' + i,
          Blockly.Python.ORDER_NONE
        ) || 'None'
    }
    const elementsvalue = new Array(block.itemCount_)
    for (let i = 0; i < block.itemCount_; i++) {
      elementsvalue[i] =
        Blockly.Python.valueToCode(
          block,
          'value' + i,
          Blockly.Python.ORDER_NONE
        ) || 'None'
    }
    const elements = new Array(block.itemCount_)
    for (let i = 0; i < block.itemCount_; i++) {
      elements[i] = "'" + elementskey[i] + "':" + elementsvalue[i]
    }
    const code = '{' + elements.join(', ') + '}'
    return [code, Blockly.Python.ORDER_ATOMIC]
  }

  Blockly.Python.tuple = function (block) {
    // Create a list with any number of elements of any type.
    const elements = new Array(block.itemCount_)
    for (let i = 0; i < block.itemCount_; i++) {
      elements[i] =
        Blockly.Python.valueToCode(
          block,
          'ADD' + i,
          Blockly.Python.ORDER_NONE
        ) || 'None'
    }
    const code = '(' + elements.join(', ') + ')'
    return [code, Blockly.Python.ORDER_ATOMIC]
  }

  Blockly.Python.create_empty_set = function () {
    const code = 'set()'
    return [code, Blockly.Python.ORDER_NONE]
  }
  Blockly.Python.create_set_one = function (block) {
    const createTwoArgument = Blockly.Python.valueToCode(
      block,
      'create_set_one_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `set(${createTwoArgument})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.create_set_two = function (block) {
    const createOneArgument = Blockly.Python.valueToCode(
      block,
      'create_set_two_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `{${createOneArgument}}`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.del_set = function (block) {
    const delNameOfSet = Blockly.Python.valueToCode(
      block,
      'del_set_name_of_set',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `del ${delNameOfSet}`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.clear_set = function (block) {
    const clearNameOfSet = Blockly.Python.valueToCode(
      block,
      'clear_set_name_of_set',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `${clearNameOfSet}.clear()`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.set_function_of_num = function (block) {
    let setNumCaller = Blockly.Python.valueToCode(
      block,
      'set_function_of_num_caller',
      Blockly.Python.ORDER_ATOMIC
    )
    const setNumFunctionName = block.getFieldValue(
      'set_function_of_num_function_name'
    )
    const setNumElement = Blockly.Python.valueToCode(
      block,
      'set_function_of_num_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    if (setNumCaller[0] === '(') {
      setNumCaller = setNumCaller.substring(1, setNumCaller.length - 1)
    }
    const code =
      setNumElement[0] === '('
        ? `${setNumCaller}.${setNumFunctionName}${setNumElement}`
        : `${setNumCaller}.${setNumFunctionName}(${setNumElement})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.set_functions = function (block) {
    let setCaller = Blockly.Python.valueToCode(
      block,
      'set_functions_caller',
      Blockly.Python.ORDER_ATOMIC
    )
    const setFunctionName = block.getFieldValue('set_functions_function_name')
    const setArgument = Blockly.Python.valueToCode(
      block,
      'set_functions_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    if (setCaller[0] === '(') {
      setCaller = setCaller.substring(1, setCaller.length - 1)
    }
    const code =
      setArgument[0] === '('
        ? `${setCaller}.${setFunctionName}${setArgument}`
        : `${setCaller}.${setFunctionName}(${setArgument})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.global = function (block) {
    const valueGlobalvariable = Blockly.Python.valueToCode(
      block,
      'globalvariable',
      Blockly.Python.ORDER_ATOMIC
    )
    return `global ${valueGlobalvariable}\n`
  }
  Blockly.Python.type_value = function (block) {
    const valueType = Blockly.Python.valueToCode(
      block,
      'type',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueValue = Blockly.Python.valueToCode(
      block,
      'value',
      Blockly.Python.ORDER_NONE
    )
    const code = `${valueType}.${valueValue}`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.type_state = function (block) {
    const valueType =
      Blockly.Python.valueToCode(block, 'type', Blockly.Python.ORDER_ATOMIC) ||
      null
    const statementsName = Blockly.Python.statementToCode(block, 'state')
    const code = `${valueType}.${statementsName}`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.annotation_block = function (block) {
    const textAnnotation = block.getFieldValue('annotation')
    // TODO: Assemble Python into code variable.
    const code = `# ${textAnnotation}`
    return code
  }

  Blockly.Python.notes = function (block) {
    const textNote = block.getFieldValue('note') || ''
    return `'''${textNote}'''`
  }

  Blockly.Python.index1 = function (block) {
    const valueType =
      Blockly.Python.valueToCode(block, 'type', Blockly.Python.ORDER_ATOMIC) ||
      null
    const numberIndex =
      Blockly.Python.valueToCode(block, 'index', Blockly.Python.ORDER_ATOMIC) ||
      0
    const code = `${valueType}[${numberIndex}]`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.index2 = function (block) {
    const valueType =
      Blockly.Python.valueToCode(block, 'type', Blockly.Python.ORDER_ATOMIC) ||
      null
    const numberStart = block.getFieldValue('start') || 0
    const numberEnd = block.getFieldValue('end') || 1
    const code = `${valueType}[${numberStart} : ${numberEnd}]`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.type_specify = function (block) {
    const dropdownType = block.getFieldValue('type')
    const valueVariable =
      Blockly.Python.valueToCode(
        block,
        'variable',
        Blockly.Python.ORDER_ATOMIC
      ) || null
    const code = `${dropdownType}(${valueVariable})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.get_type = function (block) {
    const valueVariable =
      Blockly.Python.valueToCode(
        block,
        'variable',
        Blockly.Python.ORDER_ATOMIC
      ) || null
    const code = `type(${valueVariable})`
    return [code, Blockly.Python.ORDER_NONE]
  }
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = datetime;
function datetime (Blockly) {
// datetime_now
  Blockly.Python.datetime_now = function () {
    const code = 'datetime.datetime.now()'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // datetime
  Blockly.Python.datetime = function (block) {
    const valuedateyear = Blockly.Python.valueToCode(
      block,
      'dateyear',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuedatemonth = Blockly.Python.valueToCode(
      block,
      'datemonth',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuedateday = Blockly.Python.valueToCode(
      block,
      'dateday',
      Blockly.Python.ORDER_ATOMIC
    )
    const code =
    'datetime.datetime(' +
    valuedateyear +
    ',' +
    valuedatemonth +
    ',' +
    valuedateday +
    ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // strftime
  Blockly.Python.strftime = function (block) {
    const valuedateobject = Blockly.Python.valueToCode(
      block,
      'dateobject',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuedatetype = Blockly.Python.valueToCode(
      block,
      'datetype',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = valuedateobject + '.strftime("' + valuedatetype + '")'
    return [code, Blockly.Python.ORDER_NONE]
  }
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = exception;
function exception (Blockly) {
// try
  Blockly.Python.try_sentence = function () {
    return 'try:\n'
  }
  // except
  Blockly.Python.except_sentence = function () {
    return 'except:\n'
  }
  // except add
  Blockly.Python.except_add = function (block) {
    const valueexceptadd = Blockly.Python.valueToCode(
      block,
      'except_add',
      Blockly.Python.ORDER_ATOMIC
    )
    return 'except ' + valueexceptadd + ':' + '\n'
  }
  // else
  Blockly.Python.else_sentence = function () {
    return 'else:\n'
  }
  // finally
  Blockly.Python.finally_sentence = function () {
    return 'finally:\n'
  }
  // raise
  Blockly.Python.raise_sentence = function (block) {
    const texterrorname = block.getFieldValue('errorname')
    const valueraiseerror = Blockly.Python.valueToCode(
      block,
      'raise_error',
      Blockly.Python.ORDER_ATOMIC
    )
    return 'raise ' + texterrorname + '(' + valueraiseerror + ')' + '\n'
  }
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = file;
function file (Blockly) {
// openfileff
  Blockly.Python.open = function (block) {
    const valuetxt = Blockly.Python.valueToCode(
      block,
      'txt',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuemodule = Blockly.Python.valueToCode(
      block,
      'module',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'open(' + valuetxt + ',' + valuemodule + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // readfile
  Blockly.Python.readfile = function (block) {
    const valuereadname = Blockly.Python.valueToCode(
      block,
      'readname',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = valuereadname + '.read()'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // control_readfile
  Blockly.Python.control_readfile = function (block) {
    const valuecontrolreadname = Blockly.Python.valueToCode(
      block,
      'controlreadname',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuecontrolnum = Blockly.Python.valueToCode(
      block,
      'controlnum',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = valuecontrolreadname + '.read(' + valuecontrolnum + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // readline
  Blockly.Python.readline = function (block) {
    const valuereadline = Blockly.Python.valueToCode(
      block,
      'readline',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = valuereadline + '.readline()'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // closefile
  Blockly.Python.closefile = function (block) {
    const valueclosefile = Blockly.Python.valueToCode(
      block,
      'closefile',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = valueclosefile + '.close()'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // writefile
  Blockly.Python.writefile = function (block) {
    const valuewritefile = Blockly.Python.valueToCode(
      block,
      'writefile',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuewritename = Blockly.Python.valueToCode(
      block,
      'writename',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = valuewritefile + '.write(' + valuewritename + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // removefile
  Blockly.Python.removefile = function (block) {
    const valueremovefile = Blockly.Python.valueToCode(
      block,
      'removefile',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'os.remove(' + valueremovefile + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // remove_all_file
  Blockly.Python.remove_all_file = function (block) {
    const valueremoveall = Blockly.Python.valueToCode(
      block,
      'removeall',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'os.rmdir(' + valueremoveall + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // if_exist_file
  Blockly.Python.if_exist_file = function (block) {
    const valueexistfile = Blockly.Python.valueToCode(
      block,
      'existfile',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'os.path.exists(' + valueexistfile + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = importModule;
function importModule (Blockly) {
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


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = innerFunctions;
function innerFunctions (Blockly) {
  // chr
  Blockly.Python.abs = function (block) {
    const absArgument = Blockly.Python.valueToCode(
      block,
      'abs_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (absArgument[0] === '(') {
      code = `abs${absArgument}`
    } else {
      code = `abs(${absArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.aiter = function (block) {
    const aiterArgument = Blockly.Python.valueToCode(
      block,
      'aiter_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (aiterArgument[0] === '(') {
      code = `aiter${aiterArgument}`
    } else {
      code = `aiter(${aiterArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.all = function (block) {
    const allArgument = Blockly.Python.valueToCode(
      block,
      'all_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (allArgument[0] === '(') {
      code = `all${allArgument}`
    } else {
      code = `all(${allArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.any = function (block) {
    const anyArgument = Blockly.Python.valueToCode(
      block,
      'any_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (anyArgument[0] === '(') {
      code = `any${anyArgument}`
    } else {
      code = `any(${anyArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.anext = function (block) {
    let anextLeftArgument = Blockly.Python.valueToCode(
      block,
      'anext_left_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let anextRightArgument = Blockly.Python.valueToCode(
      block,
      'anext_right_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    if (anextLeftArgument[0] === '(') {
      anextLeftArgument = anextLeftArgument.substring(
        1,
        anextLeftArgument.length - 1
      )
    }
    if (anextRightArgument[0] === '(') {
      anextRightArgument = anextRightArgument.substring(
        1,
        anextRightArgument.length - 1
      )
    }
    let code
    if (anextRightArgument !== '') {
      code = `anext(${anextLeftArgument}, ${anextRightArgument})`
    } else {
      code = `anext(${anextLeftArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.ascii = function (block) {
    const asciiArgument = Blockly.Python.valueToCode(
      block,
      'ascii_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (asciiArgument[0] === '(') {
      code = `ascii${asciiArgument}`
    } else {
      code = `ascii(${asciiArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.bin = function (block) {
    const binArgument = Blockly.Python.valueToCode(
      block,
      'bin_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (binArgument[0] === '(') {
      code = `bin${binArgument}`
    } else {
      code = `bin(${binArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.bool = function (block) {
    const boolArgument = Blockly.Python.valueToCode(
      block,
      'bool_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (boolArgument[0] === '(') {
      code = `bool${boolArgument}`
    } else {
      code = `bool(${boolArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.break_point = function (block) {
    let breakpointLeftArgument = Blockly.Python.valueToCode(
      block,
      'breakpoint_left_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let breakpointRightArgument = Blockly.Python.valueToCode(
      block,
      'breakpoint_right_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    if (breakpointLeftArgument[0] === '(') {
      breakpointLeftArgument = breakpointLeftArgument.substring(
        1,
        breakpointLeftArgument.length - 1
      )
    }
    if (breakpointRightArgument[0] === '(') {
      breakpointRightArgument = breakpointRightArgument.substring(
        1,
        breakpointRightArgument.length - 1
      )
    }
    let code
    if (breakpointRightArgument !== '') {
      code = `breakpoint(${breakpointLeftArgument}, ${breakpointRightArgument})`
    } else {
      code = `breakpoint(${breakpointLeftArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.byte_array = function (block) {
    let bytearraySource = Blockly.Python.valueToCode(
      block,
      'bytearray_source',
      Blockly.Python.ORDER_ATOMIC
    )
    let bytearrayEncoding = Blockly.Python.valueToCode(
      block,
      'bytearray_encoding',
      Blockly.Python.ORDER_ATOMIC
    )
    let bytearrayError = Blockly.Python.valueToCode(
      block,
      'bytearray_error',
      Blockly.Python.ORDER_ATOMIC
    )
    if (bytearraySource[0] === '(') {
      bytearraySource = bytearraySource.substring(1, bytearraySource.length - 1)
    }
    if (bytearrayEncoding[0] === '(') {
      bytearrayEncoding = bytearrayEncoding.substring(
        1,
        bytearrayEncoding.length - 1
      )
    }
    if (bytearrayError[0] === '(') {
      bytearrayError = bytearrayError.substring(1, bytearrayError.length - 1)
    }
    let code
    if (bytearrayError === '') {
      if (bytearrayEncoding === '') {
        code = `bytearray(${bytearraySource})`
      } else {
        code = `bytearray(${bytearraySource}, ${bytearrayEncoding})`
      }
    } else {
      code = `bytearray(${bytearraySource}, ${bytearrayEncoding}, ${bytearrayError})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.bytes = function (block) {
    let bytesSource = Blockly.Python.valueToCode(
      block,
      'bytes_source',
      Blockly.Python.ORDER_ATOMIC
    )
    let bytesEncoding = Blockly.Python.valueToCode(
      block,
      'bytes_encoding',
      Blockly.Python.ORDER_ATOMIC
    )
    let bytesError = Blockly.Python.valueToCode(
      block,
      'bytes_error',
      Blockly.Python.ORDER_ATOMIC
    )
    if (bytesSource[0] === '(') {
      bytesSource = bytesSource.substring(1, bytesSource.length - 1)
    }
    if (bytesEncoding[0] === '(') {
      bytesEncoding = bytesEncoding.substring(1, bytesEncoding.length - 1)
    }
    if (bytesError[0] === '(') {
      bytesError = bytesError.substring(1, bytesError.length - 1)
    }
    let code
    if (bytesError === '') {
      if (bytesEncoding === '') {
        code = `bytes(${bytesSource})`
      } else {
        code = `bytes(${bytesSource}, ${bytesEncoding})`
      }
    } else {
      code = `bytes(${bytesSource}, ${bytesEncoding}, ${bytesError})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.callable = function (block) {
    const callableArgument = Blockly.Python.valueToCode(
      block,
      'callable_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    let code
    if (callableArgument[0] === '(') {
      code = `callable${callableArgument}`
    } else {
      code = `callable(${callableArgument})`
    }
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.chr = function (block) {
    const valuechrnum = Blockly.Python.valueToCode(
      block,
      'chrnum',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'chr(' + valuechrnum + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // classmethod
  Blockly.Python.class_method = function () {
    return '@classmethod'
  }
  // compile
  Blockly.Python.compile = function (block) {
    const valuesourse = Blockly.Python.valueToCode(
      block,
      'sourse',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuefilename = Blockly.Python.valueToCode(
      block,
      'filename',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuemode = Blockly.Python.valueToCode(
      block,
      'mode',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueflags = Blockly.Python.valueToCode(
      block,
      'flags',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuedontinherit = Blockly.Python.valueToCode(
      block,
      'dont_inherit',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueoptimize = Blockly.Python.valueToCode(
      block,
      'optimize',
      Blockly.Python.ORDER_ATOMIC
    )
    return (
      'compile(' +
      valuesourse +
      ',' +
      valuefilename +
      ',' +
      valuemode +
      ',' +
      valueflags +
      ',' +
      valuedontinherit +
      ',' +
      valueoptimize +
      ')'
    )
  }
  // complex
  Blockly.Python.complex = function (block) {
    const valuecomplex = Blockly.Python.valueToCode(
      block,
      'complex',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuecomplexl = Blockly.Python.valueToCode(
      block,
      'complexl',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'complex(' + valuecomplex + '+' + valuecomplexl + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // delattr
  Blockly.Python.delattr = function (block) {
    const valuedelattrobject = Blockly.Python.valueToCode(
      block,
      'delattrobject',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuedelattrname = Blockly.Python.valueToCode(
      block,
      'delattrname',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'delattr(' + valuedelattrobject + ',' + valuedelattrname + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // dir
  Blockly.Python.dir = function (block) {
    const valuedirobject = Blockly.Python.valueToCode(
      block,
      'dirobject',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'dir(' + valuedirobject + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // divmod
  Blockly.Python.divmod = function (block) {
    const valuedivmoda = Blockly.Python.valueToCode(
      block,
      'divmoda',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuedivmodb = Blockly.Python.valueToCode(
      block,
      'divmodb',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'divmod(' + valuedivmoda + ',' + valuedivmodb + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // enumerate
  Blockly.Python.enumerate = function (block) {
    const valueiterable = Blockly.Python.valueToCode(
      block,
      'iterable',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueenumstart = Blockly.Python.valueToCode(
      block,
      'enumstart',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'enumerate(' + valueiterable + ',' + valueenumstart + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // filter
  Blockly.Python.filter = function (block) {
    const valuefilterfunction = Blockly.Python.valueToCode(
      block,
      'filterfunction',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuefilteriterable = Blockly.Python.valueToCode(
      block,
      'filteriterable',
      Blockly.Python.ORDER_ATOMIC
    )
    const code =
      'filter(' + valuefilterfunction + ',' + valuefilteriterable + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // eval
  Blockly.Python.eval = function (block) {
    const valueevala = Blockly.Python.valueToCode(
      block,
      'evala',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueevalb = Blockly.Python.valueToCode(
      block,
      'evalb',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'eval(' + "'" + valueevala + ',' + valueevalb + "'" + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // exec
  Blockly.Python.exec = function (block) {
    const valueexecglobal = Blockly.Python.valueToCode(
      block,
      'execglobal',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueexeclocal = Blockly.Python.valueToCode(
      block,
      'execlocal',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'exec(' + valueexecglobal + ',' + valueexeclocal + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  // lambda
  Blockly.Blocks.lambda = {
    init: function () {
      this.setInputsInline(true)
      this.appendStatementInput('NAME').setCheck(null)
      this.itemCount_ = 3
      this.updateShape_()
      this.setOutput(true, 'Array')
      this.setMutator(new Blockly.Mutator(['general_create_with_item']))
      this.setTooltip('initialize lambda')
      this.setColour(180)
    },
    /**
     * Create XML to represent list inputs.
     * Backwards compatible serialization implementation.
     * @return {!Element} XML storage element.
     * @this {Block}
     */
    mutationToDom: function () {
      const container = Blockly.utils.xml.createElement('mutation')
      container.setAttribute('items', this.itemCount_)
      return container
    },
    /**
     * Parse XML to restore the list inputs.
     * Backwards compatible serialization implementation.
     * @param {!Element} xmlElement XML storage element.
     * @this {Block}
     */
    domToMutation: function (xmlElement) {
      this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10)
      this.updateShape_()
    },
    /**
     * Returns the state of this block as a JSON serializable object.
     * @return {{itemCount: number}} The state of this block, ie the item count.
     */
    saveExtraState: function () {
      return {
        itemCount: this.itemCount_
      }
    },
    /**
     * Applies the given state to this block.
     * @param {*} state The state to apply to this block, ie the item count.
     */
    loadExtraState: function (state) {
      this.itemCount_ = state.itemCount
      this.updateShape_()
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Workspace} workspace Mutator's workspace.
     * @return {!Block} Root block in mutator.
     * @this {Block}
     */
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
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Block} containerBlock Root block in mutator.
     * @this {Block}
     */
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
    /**
     * Store pointers to any connected child blocks.
     * @param {!Block} containerBlock Root block in mutator.
     * @this {Block}
     */
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
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {Block}
     */
    updateShape_: function () {
      if (this.itemCount_ && this.getInput('EMPTY')) {
        this.removeInput('EMPTY')
      } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
        this.appendDummyInput('EMPTY').appendField('create lambda')
      }
      // Add new inputs.
      for (let i = 0; i < this.itemCount_; i++) {
        if (!this.getInput('ADD' + i)) {
          const input = this.appendValueInput('ADD' + i).setAlign(
            Blockly.Input.RIGHT
          )
          if (i === 0) {
            input.appendField('lambda')
          }
        }
      }
      // Remove deleted inputs.
      for (let i = this.itemCount_; this.getInput('ADD' + i); i++) {
        this.removeInput('ADD' + i)
      }
    }
  }

  Blockly.Python.function_length = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'function_length_inputtext',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'len(' + valueInput + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_local = function () {
    const code = 'locals()'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_object = function () {
    const code = 'object()'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_isinstance = function (block) {
    const Value1 = Blockly.Python.valueToCode(
      block,
      'function_isinstance_object',
      Blockly.Python.ORDER_ATOMIC
    )
    const Value2 = Blockly.Python.valueToCode(
      block,
      'function_isinstance_classinformation',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'isinstance(' + Value1 + ', ' + Value2 + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_issubclass = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'function_issubclass_class',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueName = Blockly.Python.valueToCode(
      block,
      'function_issubclass_classinfo',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'issubclass(' + valueInput + ', ' + valueName + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_next = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'function_next_iterable',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'next(' + valueInput + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_map = function (block) {
    const valuInput = Blockly.Python.valueToCode(
      block,
      'function_map_function',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueName = Blockly.Python.valueToCode(
      block,
      'function_map_iterable',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'map(' + valuInput + ', ' + valueName + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_memoryview = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'function_memoryview_object',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'memoryview(' + valueInput + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_max = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'function_max_input1',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueName = Blockly.Python.valueToCode(
      block,
      'function_max_input2',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'max(' + valueInput + ', ' + valueName + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_min = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'function_min_input1',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueName = Blockly.Python.valueToCode(
      block,
      'function_min_input2',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'min(' + valueInput + ', ' + valueName + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.round_function = function (block) {
    const valueNumber =
      Blockly.Python.valueToCode(
        block,
        'number',
        Blockly.Python.ORDER_ATOMIC
      ) || '0'
    const valueAccuracy =
      Blockly.Python.valueToCode(
        block,
        'accuracy',
        Blockly.Python.ORDER_ATOMIC
      ) || '0'
    const code = `round(${valueNumber}, ${valueAccuracy})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.reverse = function (block) {
    const valueReverse =
      Blockly.Python.valueToCode(
        block,
        'reverse_function',
        Blockly.Python.ORDER_ATOMIC
      ) || ''
    const code = `reversed(${valueReverse})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.open_file = function (block) {
    const valueName =
      Blockly.Python.valueToCode(block, 'file', Blockly.Python.ORDER_ATOMIC) ||
      'file path'
    const dropdownMode1 = block.getFieldValue('mode1')
    const dropdownMode2 = block.getFieldValue('textbinary')
    const code = `open(${valueName}, ${dropdownMode1}, ${dropdownMode2})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.ord = function (block) {
    const valueStr =
      Blockly.Python.valueToCode(block, 'str', Blockly.Python.ORDER_ATOMIC) ||
      null
    const code = `ord(${valueStr})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.inner_pow = function (block) {
    const valueBase =
      Blockly.Python.valueToCode(block, 'base', Blockly.Python.ORDER_ATOMIC) ||
      0
    const valueExp =
      Blockly.Python.valueToCode(block, 'exp', Blockly.Python.ORDER_ATOMIC) || 0
    const valueMod =
      Blockly.Python.valueToCode(block, 'mod', Blockly.Python.ORDER_ATOMIC) || 1
    const code = `pow(${valueBase}, ${valueExp}, ${valueMod})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.property = function (block) {
    const valueFget =
      Blockly.Python.valueToCode(block, 'fget', Blockly.Python.ORDER_ATOMIC) ||
      null
    const valueFset =
      Blockly.Python.valueToCode(block, 'fset', Blockly.Python.ORDER_ATOMIC) ||
      null
    const valueFdel =
      Blockly.Python.valueToCode(block, 'fdel', Blockly.Python.ORDER_ATOMIC) ||
      null
    const valueDoc =
      Blockly.Python.valueToCode(block, 'doc', Blockly.Python.ORDER_ATOMIC) ||
      null
    const code = `property(${valueFget}, ${valueFset}, ${valueFdel}, ${valueDoc})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.range__ = function (block) {
    const numberStart = block.getFieldValue('start')
    const valueEnd =
      Blockly.Python.valueToCode(block, 'end', Blockly.Python.ORDER_ATOMIC) || 0
    const numberName = block.getFieldValue('step_length') || 1
    const code = `range(${numberStart}, ${valueEnd}, ${numberName})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.repr = function (block) {
    const valueObj =
      Blockly.Python.valueToCode(block, 'obj', Blockly.Python.ORDER_ATOMIC) ||
      null
    const code = `repr(${valueObj})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.set_func = function (block) {
    const valueIterable = Blockly.Python.valueToCode(
      block,
      'iterable',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `set(${valueIterable})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.oct = function (block) {
    const valueIterable =
      Blockly.Python.valueToCode(
        block,
        'Number',
        Blockly.Python.ORDER_ATOMIC
      ) || 0
    const code = `oct(${valueIterable})`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.function_sum = function (block) {
    const iterable = Blockly.Python.valueToCode(
      block,
      'iterable',
      Blockly.Python.ORDER_ATOMIC
    )
    const start = Blockly.Python.valueToCode(
      block,
      'start',
      Blockly.Python.ORDER_ATOMIC
    )
    return 'sum' + '(' + iterable + ',' + start + ')'
  }

  Blockly.Python.xrange = function (block) {
    const valuestart =
      Blockly.Python.valueToCode(block, 'start', Blockly.Python.ORDER_ATOMIC) ||
      '0'
    const valuestop =
      Blockly.Python.valueToCode(block, 'stop', Blockly.Python.ORDER_ATOMIC) ||
      'None'
    const valuestep =
      Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC) ||
      '1'
    const code =
      'xrange' + '(' + valuestart + ',' + valuestop + ',' + valuestep + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.type_with_one_argument = function (block) {
    const valueobject = Blockly.Python.valueToCode(
      block,
      'object',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'type(' + valueobject + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.type_with_three_argument = function (block) {
    const valuename = Blockly.Python.valueToCode(
      block,
      'name',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuebases = Blockly.Python.valueToCode(
      block,
      'bases',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuedict = Blockly.Python.valueToCode(
      block,
      'dict',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'type(' + valuename + ',' + valuebases + ',' + valuedict + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.format = function (block) {
    const txt = Blockly.Python.valueToCode(
      block,
      'txt',
      Blockly.Python.ORDER_ATOMIC
    )
    const value = Blockly.Python.valueToCode(
      block,
      'string',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = txt + '.format(' + value + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.float = function (block) {
    const valueFloat = Blockly.Python.valueToCode(
      block,
      'otherValue',
      Blockly.Python.ORDER_ATOMIC
    )
    return 'float(' + valueFloat + ')'
  }

  Blockly.Python.frozenset = function (block) {
    const set = Blockly.Python.valueToCode(
      block,
      'set',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'class frozenset(' + set + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.getattr = function (block) {
    const aimclass = Blockly.Python.valueToCode(
      block,
      'class',
      Blockly.Python.ORDER_ATOMIC
    )
    const member = Blockly.Python.valueToCode(
      block,
      'member',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'getattr(' + aimclass + ', ' + member + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.globals = function () {
    const code = 'globals()'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.hasattr = function (block) {
    const aimobject = Blockly.Python.valueToCode(
      block,
      'object',
      Blockly.Python.ORDER_ATOMIC
    )
    const member = Blockly.Python.valueToCode(
      block,
      'member',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'hasattr(' + aimobject + ', ' + member + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.hash = function (block) {
    const object = Blockly.Python.valueToCode(
      block,
      'object',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'hash(' + object + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.help = function (block) {
    const valueHelp = Blockly.Python.valueToCode(
      block,
      'helpValue',
      Blockly.Python.ORDER_ATOMIC
    )
    return 'help(' + valueHelp + ')'
  }

  Blockly.Python.hex = function (block) {
    const number = Blockly.Python.valueToCode(
      block,
      'number',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'hex(' + number + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.id_function = function (block) {
    const object = Blockly.Python.valueToCode(
      block,
      'object',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'id(' + object + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.input = function (block) {
    const valueInput = Blockly.Python.valueToCode(
      block,
      'inputValue',
      Blockly.Python.ORDER_ATOMIC
    )
    return 'input(' + valueInput + ')'
  }

  Blockly.Python.int_class = function (block) {
    const number = Blockly.Python.valueToCode(
      block,
      'number',
      Blockly.Python.ORDER_ATOMIC
    )
    const base = Blockly.Python.valueToCode(
      block,
      'base',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'class int(' + number + ', ' + base + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.slice_fun = function (block) {
    const valueSliceArgument = Blockly.Python.valueToCode(
      block,
      'sliceArgument',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = `slice(${valueSliceArgument})`
    return code
  }
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = iterator;
function iterator (Blockly) {
  Blockly.Python.iter = function (block) {
    const valueList = Blockly.Python.valueToCode(
      block,
      'list',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'iter(' + valueList + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.next = function (block) {
    const valueIterator = Blockly.Python.valueToCode(
      block,
      'iterator',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'next(' + valueIterator + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.__iter__function = function (block) {
    const valueIterator = Blockly.Python.valueToCode(
      block,
      'iterator',
      Blockly.Python.ORDER_ATOMIC
    )
    const statements = Blockly.Python.statementToCode(block, 'statement')
    const code = 'def ' + '__iter__(' + valueIterator + ')' + '\n' + statements

    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.__next__function = function (block) {
    const valueIterator = Blockly.Python.valueToCode(
      block,
      'iterator',
      Blockly.Python.ORDER_ATOMIC
    )
    const statements = Blockly.Python.statementToCode(block, 'statement')

    const code = 'def ' + '__next__(' + valueIterator + ')' + '\n' + statements

    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.stopiterationmsg = function () {
    return 'raise StopIteration'
  }
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = operator;
function operator (Blockly) {
  Blockly.Python.bitwise_operators = function (block) {
    let bitwiseLeftArgument = Blockly.Python.valueToCode(
      block,
      'bitwise_left_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    const bitwiseOperator = block.getFieldValue('bitwise_operator')
    let bitwiseRightArgument = Blockly.Python.valueToCode(
      block,
      'bitwise_right_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    if (bitwiseLeftArgument[0] === '(') {
      bitwiseLeftArgument = bitwiseLeftArgument.substring(
        1,
        bitwiseLeftArgument.length - 1
      )
    }
    if (bitwiseRightArgument[0] === '(') {
      bitwiseRightArgument = bitwiseRightArgument.substring(
        1,
        bitwiseRightArgument.length - 1
      )
    }
    const code = `${bitwiseLeftArgument} ${bitwiseOperator} ${bitwiseRightArgument}`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.identity_operators = function (block) {
    let identityFirstArgument = Blockly.Python.valueToCode(
      block,
      'identity_first_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    const identityOperator = block.getFieldValue('identity_operator')
    let identitySecondArgument = Blockly.Python.valueToCode(
      block,
      'identity_second_argument',
      Blockly.Python.ORDER_ATOMIC
    )
    if (identityFirstArgument[0] === '(') {
      identityFirstArgument = identityFirstArgument.substring(
        1,
        identityFirstArgument.length - 1
      )
    }
    if (identitySecondArgument[0] === '(') {
      identitySecondArgument = identitySecondArgument.substring(
        1,
        identitySecondArgument.length - 1
      )
    }
    const code = `${identityFirstArgument} ${identityOperator} ${identitySecondArgument}`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.assign_operator = function (block) {
    const valueVariable =
    Blockly.Python.valueToCode(
      block,
      'variable',
      Blockly.Python.ORDER_ATOMIC
    ) || 'item'
    const dropdownAssignmentOperators = block.getFieldValue(
      'assignment_operators'
    )
    const valueName =
    Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC) ||
    '0'
    const code = `${valueVariable} ${dropdownAssignmentOperators} ${valueName}`
    return [code, Blockly.Python.ORDER_NONE]
  }

  Blockly.Python.arithmetic_operator = function (block) {
    const valueValue1 = Blockly.Python.valueToCode(
      block,
      'value1',
      Blockly.Python.ORDER_ATOMIC
    )
    const dropdownOperator = block.getFieldValue('operator')
    const valueValue2 = Blockly.Python.valueToCode(
      block,
      'value2',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = valueValue1 + ' ' + dropdownOperator + ' ' + valueValue2
    return [code, Blockly.Python.ORDER_NONE]
  }
  // member operator
  Blockly.Python.in = function (block) {
    const valueInbool = Blockly.Python.valueToCode(
      block,
      'inBool',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 'in ' + valueInbool
    return [code, Blockly.Python.ORDER_NONE]
  }
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = re;
function re (Blockly) {
// findall
  Blockly.Python.find_all = function (block) {
    const findstr = Blockly.Python.valueToCode(
      block,
      'findstr',
      Blockly.Python.ORDER_ATOMIC
    )
    const findvalue = Blockly.Python.valueToCode(
      block,
      'findvalue',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 're.findall(' + findstr + ',' + findvalue + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // research
  Blockly.Python.search = function (block) {
    const valuesearchtype = Blockly.Python.valueToCode(
      block,
      'searchtype',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuesearchname = Blockly.Python.valueToCode(
      block,
      'searchname',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 're.search(' + valuesearchtype + ',' + valuesearchname + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // resplit
  Blockly.Python.resplit = function (block) {
    const valueresplittype = Blockly.Python.valueToCode(
      block,
      'resplittype',
      Blockly.Python.ORDER_ATOMIC
    )
    const valueresplitname = Blockly.Python.valueToCode(
      block,
      'resplitname',
      Blockly.Python.ORDER_ATOMIC
    )
    const code = 're.split(' + valueresplittype + ',' + valueresplitname + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // resub
  Blockly.Python.sub = function (block) {
    const valuesubtype = Blockly.Python.valueToCode(
      block,
      'subtype',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuesubvalue = Blockly.Python.valueToCode(
      block,
      'subvalue',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuesubname = Blockly.Python.valueToCode(
      block,
      'subname',
      Blockly.Python.ORDER_ATOMIC
    )
    const code =
    're.sub(' + valuesubtype + ',' + valuesubvalue + ',' + valuesubname + ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
  // recontrolsub
  Blockly.Python.control_sub = function (block) {
    const valuecontrolsubtype = Blockly.Python.valueToCode(
      block,
      'controlsubtype',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuecontrolsubvalue = Blockly.Python.valueToCode(
      block,
      'controlsubvalue',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuecontrolsubname = Blockly.Python.valueToCode(
      block,
      'controlsubname',
      Blockly.Python.ORDER_ATOMIC
    )
    const valuesubtime = Blockly.Python.valueToCode(
      block,
      'subtime',
      Blockly.Python.ORDER_ATOMIC
    )
    const code =
    're.sub(' +
    valuecontrolsubtype +
    ',' +
    valuecontrolsubvalue +
    ',' +
    valuecontrolsubname +
    ',' +
    valuesubtime +
    ')'
    return [code, Blockly.Python.ORDER_NONE]
  }
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_skulpt__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_skulpt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_skulpt__);

function blockBuilder (
  type,
  lineNumber,
  fields,
  values,
  settings,
  mutations,
  statements
) {
  const blockbuild = document.createElement('block')
  // Settings
  blockbuild.setAttribute('type', type)
  blockbuild.setAttribute('line_number', lineNumber)
  for (const setting in settings) {
    const settingValue = settings[setting]
    blockbuild.setAttribute(setting, settingValue)
  }
  // Mutations
  if (mutations !== undefined && Object.keys(mutations).length > 0) {
    const newMutation = document.createElement('mutation')
    for (const mutation in mutations) {
      const mutationValue = mutations[mutation]
      if (mutation.charAt(0) === '@') {
        newMutation.setAttribute(mutation.substring(1), mutationValue)
      } else if (
        mutationValue !== null &&
        mutationValue.constructor === Array
      ) {
        for (const element of mutationValue) {
          const mutationNode = document.createElement(mutation)
          mutationNode.setAttribute('name', element)
          newMutation.appendChild(mutationNode)
        }
      } else {
        const mutationNode = document.createElement('arg')
        if (mutation.charAt(0) === '*') {
          mutationNode.setAttribute('name', '')
        } else {
          mutationNode.setAttribute('name', mutation)
        }
        if (mutationValue !== null) {
          mutationNode.appendChild(mutationValue)
        }
        newMutation.appendChild(mutationNode)
      }
    }
    blockbuild.appendChild(newMutation)
  }
  // Fields
  for (const field in fields) {
    const fieldValue = fields[field]
    const newField = document.createElement('field')
    newField.setAttribute('name', field)
    newField.appendChild(document.createTextNode(fieldValue))
    blockbuild.appendChild(newField)
  }
  // Values
  for (const value in values) {
    const valueValue = values[value]
    const newValue = document.createElement('value')
    if (valueValue !== null) {
      newValue.setAttribute('name', value)
      newValue.appendChild(valueValue)
      blockbuild.appendChild(newValue)
    }
  }
  // Statements
  if (statements !== undefined && Object.keys(statements).length > 0) {
    for (const statement in statements) {
      const statementValue = statements[statement]
      if (statementValue === null) {
        continue
      } else {
        for (const element of statementValue) {
          // In most cases, you really shouldn't ever have more than
          //  one statement in this list. I'm not sure Blockly likes
          //  that.
          const newStatement = document.createElement('statement')
          newStatement.setAttribute('name', statement)
          newStatement.appendChild(element)
          blockbuild.appendChild(newStatement)
        }
      }
    }
  }
  return blockbuild
}

function xmlToString (xml) {
  return new XMLSerializer().serializeToString(xml)
}

class PythonToBlocks {
  getChunkHeights (node) {
    let lineNumbers = []
    if (node.hasOwnProperty('lineno')) {
      lineNumbers.push(node.lineno)
    }
    if (node.hasOwnProperty('body')) {
      for (const element of node.body) {
        const subnode = element
        lineNumbers = lineNumbers.concat(this.getChunkHeights(subnode))
      }
    }
    if (node.hasOwnProperty('orelse')) {
      for (const element of node.orelse) {
        const subnode = element
        lineNumbers = lineNumbers.concat(this.getChunkHeights(subnode))
      }
    }
    return lineNumbers
  }

  convertStatement (node, _fullSource, isTopLevel) {
    try {
      return this.convert(node, isTopLevel)
    } catch (e) {
      const heights = this.getChunkHeights(node)
      const extractedSource = this.getSourceCode(
        arrayMin(heights),
        arrayMax(heights)
      )
      console.error(e)
      return rawBlock(extractedSource)
    }
  }

  getSourceCode (from, to) {
    const lines = this.source.slice(from - 1, to)
    // Strip out any starting indentation.
    if (lines.length > 0) {
      const indentation = lines[0].search(/\S/)
      for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].substring(indentation)
      }
    }
    return lines.join('\n')
  }

  isTopLevel (parent) {
    return !parent
  }

  Assign (node) {
    const { targets, value, lineno } = node
    let items = {}
    const fields = {}
    const simpleTarget = targets.length === 1 && targets[0]._astname === 'Name'
    if (simpleTarget) {
      fields.VAR = identifier(targets[0].id)
    } else {
      items = this.convertElements('TARGET', targets, node)
    }
    node.targets.forEach((target) => {
      if (target.id === undefined) {
        target.id = {}
      }
      target.id.refType = TypeInference(value)
    })
    items.VALUE = this.convert(value)
    return variablesSetMultiple(fields, items, targets, simpleTarget, lineno)
  }

  convertBody (node, isTopLevel) {
    this.levelIndex += 1
    // Empty body, return nothing
    if (node === null) {
      return null
    }
    // Final result list
    const children = [] // The complete set of peers
    let root = null // The top of the current peer
    let current = null // The bottom of the current peer
    function addPeer (peer) {
      children.push(root === null ? peer : root)
      root = peer
      current = peer
    }
    function finalizePeers () {
      if (root !== null) {
        children.push(root)
      }
    }
    function nestChild (child) {
      if (root !== null && current !== null) {
        const nextElement = document.createElement('next')
        nextElement.appendChild(child)
        current.appendChild(nextElement)
        current = child
      } else {
        root = root !== null && current === null ? current : child
        current = root !== null ? current : child
      }
    }
    let lineNumberInProgram
    let previousLineInProgram = null
    let distance
    let skippedLine
    let previousWasStatement = false
    let visitedFirstLine = false
    let commentChild
    // Iterate through each node
    for (const element of node) {
      lineNumberInProgram = element.lineno
      // distance = 0
      // if (previousLineInProgram !== null) {
      //   distance = lineNumberInProgram - previousLineInProgram - 1
      // }
      // Handle earlier comments
      for (const commentLineInProgram in this.comments) {
        if (commentLineInProgram < lineNumberInProgram) {
          commentChild = this.Comment(
            this.comments[commentLineInProgram],
            commentLineInProgram
          )
          if (previousLineInProgram === null) {
            nestChild(commentChild)
          } else {
            const skippedPreviousLine =
              Math.abs(previousLineInProgram - commentLineInProgram) > 1
            isTopLevel && skippedPreviousLine
              ? addPeer(commentChild)
              : nestChild(commentChild)
          }
          previousLineInProgram = commentLineInProgram
          this.highestLineSeen = Math.max(
            this.highestLineSeen,
            parseInt(commentLineInProgram, 10)
          )
          // distance = lineNumberInProgram - previousLineInProgram
          delete this.comments[commentLineInProgram]
        }
      }
      distance = lineNumberInProgram - this.highestLineSeen
      this.highestLineSeen = Math.max(lineNumberInProgram, this.highestLineSeen)

      // Now convert the actual node
      const height = this.heights.shift()
      const originalSourceCode = this.getSourceCode(lineNumberInProgram, height)
      const newChild = this.convertStatement(
        element,
        originalSourceCode,
        isTopLevel
      )
      // Skip null blocks (e.g., imports)
      if (newChild === null) {
        continue
      }
      skippedLine = distance > 1
      previousLineInProgram = lineNumberInProgram
      // Handle top-level expression blocks
      if (isTopLevel && newChild.constructor === Array) {
        addPeer(newChild[0])
        // Handle skipped line     The previous line was not a Peer
      } else if (
        (isTopLevel && skippedLine && visitedFirstLine) ||
        (isTopLevel && !previousWasStatement)
      ) {
        addPeer(newChild)
        // Otherwise, always embed it in there.
      } else {
        nestChild(newChild)
      }
      previousWasStatement = newChild.constructor !== Array
      visitedFirstLine = true
    }
    // Handle comments that are on the very last line
    const lastLineNumber = lineNumberInProgram + 1
    if (lastLineNumber in this.comments) {
      commentChild = this.Comment(this.comments[lastLineNumber], lastLineNumber)
      nestChild(commentChild)
      delete this.comments[lastLineNumber]
    }
    // Handle any extra comments that stuck around
    if (isTopLevel) {
      for (const commentLineInProgram in this.comments) {
        commentChild = this.Comment(
          this.comments[commentLineInProgram],
          commentLineInProgram
        )
        distance = commentLineInProgram - previousLineInProgram
        if (previousLineInProgram === null) {
          addPeer(commentChild)
        } else if (distance > 1) {
          addPeer(commentChild)
        } else {
          nestChild(commentChild)
        }
        previousLineInProgram = commentLineInProgram
        delete this.comments[lastLineNumber]
      }
    }
    finalizePeers()
    this.levelIndex -= 1
    return children
  }

  BinOp ({ left, op: Operator, right, lineno }) {
    const opeartorName = new Operator()._astname
    const leftTypeName = TypeInference(left)
    const rightTypeName = TypeInference(right)
    const leftBlock = this.convert(left)
    const rightBlock = this.convert(right)
    const linearStructures = { Str: 'text', List: 'lists', Tuple: 'tuples' }
    if (leftTypeName in linearStructures || rightTypeName in linearStructures) {
      if (opeartorName === 'Add') {
        return [`${linearStructures[leftTypeName]}Concat`](
          leftBlock,
          rightBlock,
          lineno
        )
      } else if (opeartorName === 'Mult') {
        if (rightTypeName === 'Num') {
          return [`${linearStructures[leftTypeName]}Repeat`](
            leftBlock,
            rightBlock,
            lineno
          )
        } else {
          return [`${linearStructures[rightTypeName]}Repeat`](
            rightBlock,
            leftBlock,
            lineno
          )
        }
      }
    }
    if (leftTypeName === 'Set' || rightTypeName === 'Set') {
      return setsArithmetic(leftBlock, opeartorName, rightBlock, lineno)
    }
    if (opeartorName === 'Mod') {
      return mathModulo(leftBlock, rightBlock, lineno)
    } else if (opeartorName === 'FloorDiv') {
      return mathIntegerDivision(leftBlock, rightBlock, lineno)
    } else {
      return mathArithmetic(leftBlock, opeartorName, rightBlock, lineno)
    }
  }

  Set (node) {
    const { elts, lineno } = node
    const items = this.convertElements('ADD', elts, node)
    return setsCreateWith(items, elts, lineno)
  }

  If ({ test, body, orelse, lineno }) {
    const conditionBlocks = {}
    const bodyBlocks = {}
    const structureCounter = { elifs: 0, elses: 0 }

    // IF
    conditionBlocks.IF0 = this.convert(test)
    bodyBlocks.DO0 = this.convertBody(body)
    while (orelse && orelse.length === 1) {
      if (orelse[0]._astname === 'If') {
        // ELIF
        this.heights.shift()
        body = orelse[0].body
        test = orelse[0].test
        orelse = orelse[0].orelse
        structureCounter.elifs += 1
        if (test) {
          conditionBlocks[`IF${structureCounter.elifs}`] = this.convert(test)
        }
        bodyBlocks[`DO${structureCounter.elifs}`] = this.convertBody(body)
      } else {
        // ELSE
        structureCounter.elses += 1
        bodyBlocks.ELSE = this.convertBody(orelse)
        break
      }
    }
    return controlsIf(conditionBlocks, bodyBlocks, structureCounter, lineno)
  }

  IfExp ({ test, body, orelse, lineno }) {
    const ifBlock = this.convert(test)
    if (!TypeInference(orelse) || !TypeInference(body)) {
      return this.If({ test, body: [body], orelse: [orelse], lineno })
    } else {
      const thenBlock = this.convert(body)
      const elseBlock = this.convert(orelse)
      return logicTernary(ifBlock, thenBlock, elseBlock, lineno)
    }
  }

  Compare ({ left, ops: Operators, comparators, lineno }) {
    let leftBlock = this.convert(left)
    const leftTypeName = TypeInference(left)
    for (let i = 0; i < comparators.length; i += 1) {
      const right = comparators[i]
      const opeartorName = new Operators[i]()._astname
      const rightBlock = this.convert(right)
      const rightTypeName = TypeInference(right)
      if (opeartorName === 'Is' || opeartorName === 'IsNot') {
        leftBlock = logicObjectCompare(
          leftBlock,
          opeartorName,
          rightBlock,
          lineno
        )
      } else if (opeartorName === 'In' || opeartorName === 'NotIn') {
        leftBlock = logicObjectIn(leftBlock, opeartorName, rightBlock, lineno)
      } else {
        if (leftTypeName === 'Set' || rightTypeName === 'Set') {
          leftBlock = logicSetsCompare(
            leftBlock,
            opeartorName,
            rightBlock,
            lineno
          )
        } else {
          leftBlock = logicCompare(leftBlock, opeartorName, rightBlock, lineno)
        }
      }
    }
    return leftBlock
  }

  For ({ target, iter, body, orelse, lineno }) {
    const variableName = identifier(target.id)
    const bodyBlock = this.convertBody(body)
    if (
      iter._astname === 'Call' &&
      identifier(iter.func.id) === 'range' &&
      orelse.length === 0
    ) {
      const forArgs = iter.args.map((numberNode) => this.convert(numberNode))
      if (forArgs.length === 1) {
        return controlsRepeat(forArgs[0], bodyBlock, lineno)
      } else {
        if (forArgs.length === 2) {
          forArgs.push(this.Num({ n: { v: 1 }, lineno }))
        }
        return controlsFor(variableName, forArgs, bodyBlock, lineno)
      }
    } else {
      const listBlock = this.convert(iter)
      if (orelse.length > 0) {
        const elseBlock = this.convertBody(orelse)
        return controlsForElse(
          variableName,
          listBlock,
          bodyBlock,
          elseBlock,
          lineno
        )
      } else {
        return controlsForEach(variableName, listBlock, bodyBlock, lineno)
      }
    }
  }

  Dict (node) {
    const { keys, values, lineno } = node

    if (keys === null) {
      return dictsCreateWith({}, [], lineno)
    }

    const items = {}
    for (let i = 0; i < keys.length; i++) {
      const keyBlock = this.convert(keys[i], node)
      const valueBlock = this.convert(values[i], node)
      const lockedBlock = this.LOCKED_BLOCK
      items['ADD' + i] = dictsPair(keyBlock, valueBlock, lockedBlock, lineno)
    }
    return dictsCreateWith(items, keys, lineno)
  }

  UnaryOp ({ op: Operator, operand, lineno }) {
    const opeartorName = new Operator()._astname
    const operandBlock = this.convert(operand)
    if (opeartorName === 'Not') {
      return logicNegate(operandBlock, lineno)
    } else if (opeartorName === 'Invert') {
      return mathBitwiseNot(operandBlock, lineno)
    } else if (opeartorName === 'USub') {
      return mathSingle('NEG', operandBlock, lineno)
    } else if (opeartorName === 'UAdd') {
      return operandBlock
    } else {
      throw new Error('Other unary operators are not implemented yet.')
    }
  }

  Interactive ({ body }) {
    return this.convertBody(body, true)
  }

  Module ({ body }) {
    return this.convertBody(body, true)
  }

  Expression ({ body }) {
    return this.convertBody(body, true)
  }

  Suite ({ body }) {
    return this.convertBody(body, true)
  }

  Pass () {
    return null
  }

  Expr ({ value }, isTopLevel) {
    if (value._astname === 'Call') {
      value.act_as_statement = true
      return this.convert(value)
    }
    const resultBlock = this.convert(value)
    if (resultBlock.constructor === Array) {
      return resultBlock[0]
    } else if (isTopLevel) {
      return resultBlock.getAttribute('type') === 'controls_if'
        ? resultBlock
        : [resultBlock]
    } else {
      return rawBlock(resultBlock)
    }
  }

  Num ({ n, lineno }) {
    return mathNumber(n, lineno)
  }

  ClassDef (node) {
    const name = node.name
    const body = node.body
    const decoratorList = node.decorator_list
    if (decoratorList.length > 0) {
      throw new Error('Decorators are not implemented.')
    }
    return block(
      'class_build',
      node.lineno,
      {
        class_build_classname: identifier(name)
      },
      {},
      {
        inline: 'false'
      },
      {
      },
      {
        class_build_classcontent: this.convertBody(body, node)
      }
    )
  }

  CallAttribute (func, args, keywords, starargs, kwargs, node) {
    const name = identifier(func.attr)
    if (func.value._astname === 'Name') {
      const module = identifier(func.value.id)
      if (
        module in PythonToBlocks.KNOWN_MODULES &&
        name in PythonToBlocks.KNOWN_MODULES[module]
      ) {
        const definition = PythonToBlocks.KNOWN_MODULES[module][name]
        let blockName = definition[0]
        let isExpression = true
        if (blockName.charAt(0) === '*') {
          blockName = blockName.slice(1)
          isExpression = false
        }
        const fields = {}
        const mutations = {}
        const values = {}
        for (let i = 0; i < args.length; i++) {
          const argument = definition[1 + i]
          let destination = fields
          if (typeof argument === 'string') {
            fields[argument] = this.identifier(args[i].s)
          } else if (typeof argument === 'object') {
            if (argument.mode === 'value') {
              destination = values
            }
            if (argument.add_mutation !== undefined) {
              mutations[argument.add_mutation.name] =
                argument.add_mutation.value
            }
            if (argument.type === 'mutation') {
              if (argument.index === undefined) {
                mutations[argument.name] = this.identifier(args[i].s)
              } else {
                mutations[argument.name] = this.identifier(
                  args[argument.index + 1].s
                )
              }
            } else if (argument.type === 'integer') {
              destination[argument.name] = args[i].n.v
            } else if (argument.type === 'variable') {
              destination[argument.name] = this.convert(args[i])
            } else if (argument.type === 'integer_mapper') {
              // Okay we jumped the shark here
              const argumentName = argument.name
              const argumentMapper = argument.method
              destination[argumentName] = argumentMapper(args[i].n.v)
            } else if (argument.type === 'mapper') {
              const argumentName = argument.name
              const argumentMapper = argument.method
              destination[argumentName] = argumentMapper(
                this.identifier(args[i].s)
              )
            }
          } else {
            const argumentName = argument[0]
            const argumentMapper = argument[1]
            fields[argumentName] = argumentMapper(this.identifier(args[i].s))
          }
        }
        for (let i = 1 + args.length; i < definition.length; i++) {
          const first = definition[i][0]
          const second = definition[i][1]
          fields[first] = second
        }
        if (isExpression) {
          return block(blockName, func.lineno, fields, values, [], mutations)
        } else {
          return [block(blockName, func.lineno, fields, values, [], mutations)]
        }
      }
    }
    if (this.KNOWN_FUNCTIONS.indexOf(name) > -1) {
      switch (name) {
        case 'append':
          if (args.length !== 1) {
            throw new Error('Incorrect number of arguments to .append')
          }
          // Return as statement
          return [
            block(
              'lists_append',
              func.lineno,
              {},
              {
                ITEM: this.convert(args[0]),
                LIST: this.convert(func.value)
              },
              {
                inline: 'true'
              }
            )
          ]
        case 'strip':
          return block(
            'text_trim',
            func.lineno,
            {
              MODE: 'BOTH'
            },
            {
              TEXT: this.convert(func.value)
            }
          )
        case 'lstrip':
          return block(
            'text_trim',
            func.lineno,
            {
              MODE: 'LEFT'
            },
            {
              TEXT: this.convert(func.value)
            }
          )
        case 'rstrip':
          return block(
            'text_trim',
            func.lineno,
            {
              MODE: 'RIGHT'
            },
            {
              TEXT: this.convert(func.value)
            }
          )
        default:
          throw new Error('Unknown function call!')
      }
    } else if (name in PythonToBlocks.KNOWN_ATTR_FUNCTIONS) {
      return PythonToBlocks.KNOWN_ATTR_FUNCTIONS[name].bind(this)(
        func,
        args,
        keywords,
        starargs,
        kwargs,
        node
      )
    } else {
      const argumentsNormal = {}
      const argumentsMutation = {
        '@name': name
      }
      for (let i = 0; i < args.length; i += 1) {
        argumentsNormal['ARG' + i] = this.convert(args[i])
        argumentsMutation['*' + i] = this.convert(args[i])
      }
      const methodCall = block(
        'procedures_callreturn',
        node.lineno,
        {},
        argumentsNormal,
        {
          inline: 'true'
        },
        argumentsMutation
      )

      return block(
        'attribute_access',
        node.lineno,
        {},
        {
          MODULE: this.convert(func.value),
          NAME: methodCall
        },
        {
          inline: 'true'
        },
        {}
      )
    }
  }

  Import (node, lineno) {
    const names = node.name
    // The import statement isn't used in blockly because it happens implicitly
    return importFunc(names, lineno)
  }

  Notes (node, lineno) {
    const names = node.name
    return notesFunc(names, lineno)
  }

  BoolOp ({ values, op: Operator, lineno }) {
    const opeartorName = new Operator()._astname
    let resultBlock = this.convert(values[0])
    for (let i = 1; i < values.length; i += 1) {
      const valueBlock = this.convert(values[i])
      resultBlock = logicOperation(
        valueBlock,
        opeartorName,
        resultBlock,
        lineno
      )
    }
    return resultBlock
  }

  FunctionDef (node, lineno) {
    const name = node.name
    const body = node.body
    return blockBuilder(
      'procedures_defnoreturn',
      lineno,
      {
        NAME: name
      },
      {},
      {
        inline: 'false'
      },
      {},
      {
        STACK: this.convertBody(body, node)
      }
    )
  }

  Call ({ func, args, lineno }) {
    console.log(args)
    if (func._astname === 'Name') {
      const functionName = identifier(func.id)
      if (functionName === 'input') {
        const promptBlock = args ? this.convert(args[0]) : null
        return inputBlock(promptBlock, lineno)
      }
      if (args === null) {
        switch (functionName) {
          case 'locals':
            return buildlocals(lineno)
          case 'object':
            return buildobject(lineno)
          case 'try':
            return buildtry(lineno)
          case 'except':
            return buildexcept(lineno)
          case 'finally':
            return buildfinally(lineno)
          case 'datetimedatetimenow':
            return buildTimenow(lineno)
        }
      }
      if (args.length === 1) {
        let textBlock
        let lenObject
        let lenObjectType
        let iterBlock
        let iterfBlock
        let nextfBlock
        let floatBlock
        let frozensetBlock
        let hashBlock
        let helpBlock
        let hexBlock
        let idBlock
        switch (functionName) {
          case 'type':
            return TypeWithOne(this.convert(args[0]), lineno)
          case 'bytes':
            return binaryType(this.convert(args[0]), lineno)
          case 'abs':
            return ABS(this.convert(args[0]), lineno)
          case 'aiter':
            return AITER(this.convert(args[0]), lineno)
          case 'all':
            return ALL(this.convert(args[0]), lineno)
          case 'any':
            return ANY(this.convert(args[0]), lineno)
          case 'ascii':
            return ASCII(this.convert(args[0]), lineno)
          case 'bin':
            return BIN(this.convert(args[0]), lineno)
          case 'bool':
            return BOOL(this.convert(args[0]), lineno)
          case 'callable':
            return CALLABLE(this.convert(args[0]), lineno)

          case 'set':
            return createSetOne(this.convert(args[0]), lineno)
          case 'iter':
            iterBlock = this.convert(args[0])
            return iterChange(iterBlock, lineno)

          case '__iter__':
            iterfBlock = this.convert(args[0])
            return iterfChange(iterfBlock, lineno)
          case '__next__':
            nextfBlock = this.convert(args[0])
            return nextfChange(nextfBlock, lineno)
          case 'int':
          case 'str':
          case 'list':
          case 'tuple':
          case 'float':
            floatBlock = this.convert(args[0])
            return floatChange(floatBlock, lineno)
          case 'hash':
            hashBlock = this.convert(args[0])
            return hashChange(hashBlock, lineno)
          case 'help':
            helpBlock = this.convert(args[0])
            return helpChange(helpBlock, lineno)
          case 'hex':
            hexBlock = this.convert(args[0])
            return hexChange(hexBlock, lineno)
          case 'id':
            idBlock = this.convert(args[0])
            return idChange(idBlock, lineno)
          case 'frozenset':
            frozensetBlock = this.convert(args[0])
            return frozensetChange(frozensetBlock, lineno)

          case 'dict':
            return typeConvert(this.convert(args[0]), functionName, lineno)
          case 'chr':
            return textChr(this.convert(args[0]), lineno)
          case 'dir':
            return textDir(this.convert(args[0]), lineno)
          case 'ord':
            return textOrd(this.convert(args[0]), lineno)
          case 'osremove':
            return textRemove(this.convert(args[0]), lineno)
          case 'osrmdir':
            return textRmdir(this.convert(args[0]), lineno)
          case 'ospathexists':
            return textPath(this.convert(args[0]), lineno)
          case 'oct':
            textBlock = this.convert(args[0])
            return mathOct(textBlock, lineno)
          case 'global':
            return textGlobal(this.convert(args[0]), lineno)
          case 'print':
            textBlock = this.convert(args[0])
            return textPrint(textBlock, lineno)
          case 'len':
            lenObject = this.convert(args[0])
            lenObjectType = TypeInference(args[0])
            switch (lenObjectType) {
              case 'Str':
                return textLength(lenObject, lineno)
              case 'Set':
                return setsSize(lenObject, lineno)
              case 'Tuple':
                return tuplesSize(lenObject, lineno)
              case 'Dict':
                return dictsSize(lenObject, lineno)
              case 'List':
              default:
                return listsLength(lenObject, lineno)
            }
          case 'round':
            return mathRound(this.convert(args[0]), 'ROUND', lineno)
          case 'open':
            return FileOpen(this.convert(args[0]), 'r', 'b', lineno)
          case 'range':
            return rangeCreate(0, this.convert(args[0]), 1, lineno)
          case 'repr':
            return reprObj(this.convert(args[0]), lineno)
          case 'reverse':
            return reversed(this.convert(args[0]), lineno)
          case 'Set':
            return setFunc(this.convert(args[0]), lineno)
          case 'next':
            return buildnext(this.convert(args[0]), lineno)
          case 'memoryview':
            return buildmemoryview(this.convert(args[0]), lineno)
          case 'slice':
            return sliceFun(this.convert(args[0]), lineno)
        }
      } else if (args.length === 2) {
        switch (functionName) {
          case 'sum':
            return functionSum(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'pow':
            return mathArithmetic(
              this.convert(args[0]),
              'Pow',
              this.convert(args[1]),
              lineno
            )
          case 'isinstance':
            return buildisinstance(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'issubclass':
            return buildissubclass(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'map':
            return buildmap(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'max':
            return buildmax(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'min':
            return buildmin(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'raise':
            return buildraise(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'round':
            return roundFunc(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'class':
            return buildclass(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'delattr':
            return mathDelattr(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'divmod':
            return mathIntegerDivmod(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'enumerate':
            return mathEnumerate(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'filter':
            return mathFilter(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'eval':
            return mathEval(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'exec':
            return mathExec(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'research':
            return mathIntegerSearch(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'resplit':
            return mathIntegerSplit(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'anext':
            return ANEXT(this.convert(args[0]), this.convert(args[1]), lineno)
          case 'breakpoint':
            return BREAKPOINT(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'getattr':
            return getattrChange(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
          case 'hasattr':
            return hasattrChange(
              this.convert(args[0]),
              this.convert(args[1]),
              lineno
            )
        }
      } else if (args.length === 3) {
        switch (functionName) {
          case 'bytearray':
            return BYTEARRAY(
              this.convert(args[0]),
              this.convert(args[1]),
              this.convert(args[2]),
              lineno
            )
          case 'bytes':
            return BYTES(
              this.convert(args[0]),
              this.convert(args[1]),
              this.convert(args[2]),
              lineno
            )
          case 'datetimedatetime':
            return BYTETIME(
              this.convert(args[0]),
              this.convert(args[1]),
              this.convert(args[2]),
              lineno
            )
          case 'resub':
            return BYTESUB(
              this.convert(args[0]),
              this.convert(args[1]),
              this.convert(args[2]),
              lineno
            )
          case 'pow':
            return innerPow(
              this.convert(args[0]),
              this.convert(args[1]),
              this.convert(args[2]),
              lineno
            )
          case 'xrange':
            return xrange(
              this.convert(args[0]),
              this.convert(args[1]),
              this.convert(args[2]),
              lineno
            )
          case 'type':
            return typeWithThree(
              this.convert(args[0]),
              this.convert(args[1]),
              this.convert(args[2]),
              lineno
            )
        }
      } else if (args.length === 4 && functionName === 'property') {
        return property(
          this.convert(args[0]),
          this.convert(args[1]),
          this.convert(args[2]),
          this.convert(args[3]),
          lineno
        )
      }
    }
  }

  Name (node) {
    const { id, lineno } = node
    const variableName = identifier(id)
    if (variableName === 'Ellipsis' && TypeInference(node) === false) {
      return this.Ellipsis({ lineno })
    }
    if (variableName === '__debug__' && TypeInference(node) === false) {
      return rawBlock({ lineno })
    }
    return variablesGet(variableName, lineno)
  }

  convert (node, parent) {
    const functionName = node._astname
    console.log('functionName :' + functionName)
    if (this[functionName] === undefined) {
      throw new Error('Could not find function: ' + functionName)
    }
    node.parent = parent
    return this[functionName](node, parent)
  }

  NameConstant ({ value, lineno }) {
    const booleanValue = value.v
    switch (booleanValue) {
      case 0:
      case 1:
        return logicBoolean(booleanValue, lineno)
      case null:
        return constantsNone(lineno)
    }
  }

  evaluate (node) {
    this.heights = []
    this.recursiveEvaluate(node, this.source.length - 1)
    this.heights.shift()
  }

  recursiveEvaluate (node, nextBlockLine) {
    if (node === undefined) {
      return
    }
    let nextLine = nextBlockLine
    if ('orelse' in node && node.orelse.length > 0) {
      if (node.orelse.length === 1 && node.orelse[0]._astname === 'If') {
        nextLine = node.orelse[0].lineno - 1
      } else {
        nextLine = node.orelse[0].lineno - 2
      }
    }
    if ('body' in node) {
      for (let i = 0; i < node.body.length; i++) {
        if (i === node.body.length - 1) {
          this.recursiveEvaluate(node.body[i], nextLine)
        } else {
          this.recursiveEvaluate(node.body[i], node.body[i + 1].lineno - 1)
        }
      }
    }
    if ('orelse' in node) {
      for (let i = 0; i < node.orelse.length; i++) {
        if (i === node.orelse.length) {
          this.recursiveEvaluate(node.orelse[i], nextBlockLine)
        } else {
          this.recursiveEvaluate(node.orelse[i], node.orelse[i].lineno)
        }
      }
    }
    this.heights.push(nextBlockLine)
  }

  Str ({ s, lineno }) {
    return text(s, lineno)
  }

  convertSourceToCodeBlock (pythonSource) {
    const xml = document.createElement('xml')
    xml.appendChild(rawBlock(pythonSource))
    return xmlToString(xml)
  }

  convertSource (pythonSource) {
    pythonSource = pythonSource.replace(/^.*[ ]*=[ ]*None\n$/gm, '')
    const xml = document.createElement('xml')
    let parse
    let ast = null
    let error
    let badChunks = []
    const originalSource = pythonSource
    this.source = pythonSource.split('\n')
    let previousLine = 1 + this.source.length
    while (ast === null) {
      if (pythonSource.trim() === '') {
        if (badChunks.length) {
          xml.appendChild(rawBlock(badChunks.join('\n')))
        }
        return {
          xml: xmlToString(xml),
          error: null,
          rawXml: xml
        }
      }
      try {
        const filename = 'user_code.py'
        parse = __WEBPACK_IMPORTED_MODULE_0_skulpt___default.a.parse(filename, pythonSource)
        ast = __WEBPACK_IMPORTED_MODULE_0_skulpt___default.a.astFromParse(parse.cst, filename, parse.flags)
      } catch ({ traceback }) {
        if (
          traceback &&
          traceback.length &&
          traceback[0].lineno &&
          traceback[0].lineno < previousLine
        ) {
          previousLine = traceback[0].lineno - 1
          badChunks = badChunks.concat(this.source.slice(previousLine))
          this.source = this.source.slice(0, previousLine)
          pythonSource = this.source.join('\n')
        } else {
          xml.appendChild(rawBlock(originalSource))
          return {
            Xml: xmlToString(xml),
            error,
            rawXml: xml
          }
        }
      }
    }

    this.comments = {}
    for (const commentLocation in parse.comments) {
      const lineColumn = commentLocation.split(',')
      const yLocation = parseInt(lineColumn[0], 10)
      this.comments[yLocation] = parse.comments[commentLocation]
    }

    this.highestLineSeen = 0
    this.levelIndex = 0
    this.nextExpectedLine = 0
    this.evaluate(ast)
    const converted = this.convert(ast)
    if (converted !== null) {
      for (const element of converted) {
        xml.appendChild(element)
      }
    }
    if (badChunks.length) {
      console.log(badChunks.join('\n'))
      xml.appendChild(rawBlock(badChunks.join('\n')))
    }
    return {
      xml: xmlToString(xml),
      error: null,
      lineMap: this.lineMap,
      comment: this.comments,
      rawXml: xml
    }
  }

  convertElements (key, values, parent) {
    const output = {}
    for (let i = 0; i < values.length; i++) {
      output[key + i] = this.convert(values[i], parent)
    }
    return output
  }

  tuplesCreateWith (items, elts, lineno) {
    return blockBuilder(
      'tuples_create_with',
      lineno,
      {},
      items,
      {
        inline: elts.length > 3 ? 'false' : 'true'
      },
      {
        '@items': elts.length
      }
    )
  }

  Tuple (node) {
    const { elts, lineno } = node
    const items = this.convertElements('ADD', elts, node)
    return this.tuplesCreateWith(items, elts, lineno)
  }

  AugAssign (node) {
    const { target, op: Operator, value, lineno } = node
    const opeartorName = new Operator()._astname
    const variableName = identifier(target.id)

    if (opeartorName === 'Add' && TypeInference(value) === 'Num') {
      const valueBlock = this.convert(value)
      target.id.refType = 'Num'
      return mathChange(variableName, valueBlock, lineno)
    } else {
      ;[node.left, node.right, node._astname] = [
        node.target,
        node.value,
        'BinOp'
      ]
      const valueBlock = this.convert(node)
      return variablesSet(variableName, valueBlock, lineno)
    }
  }
}

function identifier (node) {
  return __WEBPACK_IMPORTED_MODULE_0_skulpt___default.a.ffi.remapToJs(node)
}

__WEBPACK_IMPORTED_MODULE_0_skulpt___default.a.configure({
  __future__: __WEBPACK_IMPORTED_MODULE_0_skulpt___default.a.python3
})

function arrayMax (array) {
  return array.reduce(function (a, b) {
    return Math.max(a, b)
  })
}

function arrayMin (array) {
  return array.reduce(function (a, b) {
    return Math.min(a, b)
  })
}

PythonToBlocks.prototype.TOP_LEVEL_NODES = [
  'Module',
  'Expression',
  'Interactive',
  'Suite'
]

const valueType = ['Num', 'List', 'Str', 'Tuple', 'Set', 'Dict', 'NameConstant']

function isValue (node) {
  const nodeType = node._astname
  return valueType.includes(nodeType)
}

function binOpInference (operatorType, leftType, rightType) {
  switch (operatorType) {
    case 'Pow':
    case 'FloorDiv':
    case 'Div':
    case 'LShift':
    case 'RShift':
      return 'Num'
    case 'Add':
      if (leftType === rightType) {
        return leftType
      }
      return false

    case 'Mult':
      if (leftType === rightType) {
        return leftType
      }
      return leftType === 'Num' ? rightType : leftType

    case 'Sub':
    case 'BitAnd':
    case 'BitOr':
    case 'BitXor':
      return leftType
    default:
      return false
  }
}

function TypeInference (node) {
  if (node.id && node.id.refType) {
    return node.id.refType
  }
  if (isValue(node)) {
    return node._astname
  }
  if (node._astname === 'BoolOp' || node._astname === 'Compare') {
    return 'NameConstant'
  } else if (node._astname === 'BinOp') {
    const operatorType = node.op.prototype._astname
    const leftType = TypeInference(node.left)
    const rightType = TypeInference(node.right)
    return binOpInference(operatorType, leftType, rightType)
  }

  return false
}

const variablesGet = function (variableName, lineno) {
  return blockBuilder('variables_get', lineno, {
    VAR: variableName
  })
}

function block (
  type,
  lineNumber,
  fields,
  values,
  settings,
  mutations,
  statements
) {
  const newBlock = document.createElement('block')
  // Settings
  newBlock.setAttribute('type', type)
  newBlock.setAttribute('line_number', lineNumber)
  for (const setting in settings) {
    const settingValue = settings[setting]
    newBlock.setAttribute(setting, settingValue)
  }
  // Mutations
  if (mutations !== undefined && Object.keys(mutations).length > 0) {
    const newMutation = document.createElement('mutation')
    newFunction(newMutation)
    newBlock.appendChild(newMutation)
  }
  // Fields
  for (const field in fields) {
    const fieldValue = fields[field]
    const newField = document.createElement('field')
    newField.setAttribute('name', field)
    newField.appendChild(document.createTextNode(fieldValue))
    newBlock.appendChild(newField)
  }
  // Values
  for (const value in values) {
    const valueValue = values[value]
    const newValue = document.createElement('value')
    if (valueValue !== null) {
      newValue.setAttribute('name', value)
      newValue.appendChild(valueValue)
      newBlock.appendChild(newValue)
    }
  }
  // Statements
  if (statements !== undefined && Object.keys(statements).length > 0) {
    for (const statement in statements) {
      const statementValue = statements[statement]
      if (statementValue === null) {
        continue
      } else {
        for (const element of statementValue) {
          const newStatement = document.createElement('statement')
          newStatement.setAttribute('name', statement)
          newStatement.appendChild(element)
          newBlock.appendChild(newStatement)
        }
      }
    }
  }
  return newBlock

  function newFunction (newMutation) {
    for (const mutation in mutations) {
      const mutationValue = mutations[mutation]
      if (mutation.charAt(0) === '@') {
        newMutation.setAttribute(mutation.charAt(0), mutationValue)
      } else if (
        mutationValue !== null &&
        mutationValue.constructor === Array
      ) {
        for (const element of mutationValue) {
          const mutationNode = document.createElement(mutation)
          mutationNode.setAttribute('name', element)
          newMutation.appendChild(mutationNode)
        }
      } else {
        const mutationNode = document.createElement('arg')
        mutation.charAt(0) === '*'
          ? mutationNode.setAttribute('name', '')
          : mutationNode.setAttribute('name', mutation)
        if (mutationValue !== null) {
          mutationNode.appendChild(mutationValue)
        }
        newMutation.appendChild(mutationNode)
      }
    }
  }
}

const TypeWithOne = function (textBlock, lineno) {
  return blockBuilder('type_with_one_argument', lineno, {}, { object: textBlock })
}
const binaryType = function (textBlock, lineno) {
  return blockBuilder('binary_type', lineno, {}, { anything: textBlock })
}

const ABS = function (operandBlock, lineno) {
  return blockBuilder(
    'abs',
    lineno,
    {},
    {
      abs_argument: operandBlock
    }
  )
}

const AITER = function (operandBlock, lineno) {
  return blockBuilder(
    'aiter',
    lineno,
    {},
    {
      aiter_argument: operandBlock
    }
  )
}

const ALL = function (iterable, lineno) {
  return blockBuilder(
    'all',
    lineno,
    {},
    {
      all_argument: iterable
    }
  )
}

const ANY = function (iterable, lineno) {
  return blockBuilder(
    'any',
    lineno,
    {},
    {
      any_argument: iterable
    }
  )
}

const ANEXT = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'anext',
    lineno,
    {},
    {
      anext_left_argument: leftBlock,
      anext_right_argument: rightBlock
    }
  )
}

const ASCII = function (nullBlock, lineno) {
  return blockBuilder(
    'ascii',
    lineno,
    {},
    {
      ascii_argument: nullBlock
    }
  )
}

const BIN = function (numberBlock, lineno) {
  return blockBuilder(
    'bin',
    lineno,
    {},
    {
      bin_argument: numberBlock
    }
  )
}

const BOOL = function (nullBlock, lineno) {
  return blockBuilder(
    'bool',
    lineno,
    {},
    {
      bool_argument: nullBlock
    }
  )
}

const BREAKPOINT = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'break_point',
    lineno,
    {},
    {
      breakpoint_left_argument: leftBlock,
      breakpoint_right_argument: rightBlock
    }
  )
}

const BYTEARRAY = function (leftBlock, middleBlock, rightBlock, lineno) {
  return blockBuilder(
    'byte_array',
    lineno,
    {},
    {
      bytearray_source: leftBlock,
      bytearray_encoding: middleBlock,
      bytearray_error: rightBlock
    }
  )
}

const BYTES = function (leftBlock, middleBlock, rightBlock, lineno) {
  return blockBuilder(
    'bytes',
    lineno,
    {},
    {
      bytes_source: leftBlock,
      bytes_encoding: middleBlock,
      bytes_error: rightBlock
    }
  )
}

const BYTETIME = function (leftBlock, middleBlock, rightBlock, lineno) {
  return blockBuilder(
    'datetime',
    lineno,
    {},
    {
      dateyear: leftBlock,
      datemonth: middleBlock,
      dateday: rightBlock
    }
  )
}

const BYTESUB = function (leftBlock, middleBlock, rightBlock, lineno) {
  return blockBuilder(
    'sub',
    lineno,
    {},
    {
      subtype: leftBlock,
      subvalue: middleBlock,
      subname: rightBlock
    }
  )
}

const CALLABLE = function (nullBlock, lineno) {
  return blockBuilder(
    'callable',
    lineno,
    {},
    {
      callable_argument: nullBlock
    }
  )
}

const variablesSetMultiple = function (
  fields,
  items,
  targets,
  simpleTarget,
  lineno
) {
  console.log('to:variables_set')
  return blockBuilder(
    'variables_set',
    lineno,
    fields,
    items,
    {
      inline: 'true'
    },
    {
      '@targets': targets.length,
      '@simple': simpleTarget
    }
  )
}

const mathNumber = function ({ imag, v }, lineno) {
  const isImaginaryPart = v === undefined
  if (isImaginaryPart) {
    return blockBuilder('math_number_imaginary', lineno, { NUM: imag })
  }
  console.log('to:math_number')
  return blockBuilder('math_number', lineno, { NUM: v })
}

const logicBoolean = function (isTrue, lineno) {
  return blockBuilder('logic_boolean', lineno, {
    BOOL: isTrue ? 'TRUE' : 'FALSE'
  })
}

const constantsNone = function (lineno) {
  return blockBuilder('logic_null', lineno)
}

const textPrint = function (textBlock, lineno) {
  return blockBuilder('text_print', lineno, {}, { TEXT: textBlock })
}

const typeConvert = function (valueBlock, type, lineno) {
  return blockBuilder(
    'type_convert',
    lineno,
    {
      TYPE: type
    },
    {
      VAR: valueBlock
    },
    {
      inline: true
    }
  )
}

const textChr = function (valueBlock, lineno) {
  return blockBuilder(
    'chr',
    lineno,
    {},
    {
      chrnum: valueBlock
    },
    {
      inline: true
    }
  )
}

const textDir = function (valueBlock, lineno) {
  return blockBuilder(
    'dir',
    lineno,
    {},
    {
      dirobject: valueBlock
    },
    {
      inline: true
    }
  )
}

const textRmdir = function (valueBlock, lineno) {
  return blockBuilder(
    'remove_all_file',
    lineno,
    {},
    {
      removeall: valueBlock
    },
    {
      inline: true
    }
  )
}

const textPath = function (valueBlock, lineno) {
  return blockBuilder(
    'if_exist_file',
    lineno,
    {},
    {
      existfile: valueBlock
    },
    {
      inline: true
    }
  )
}

const textGlobal = function (valueBlock, lineno) {
  return blockBuilder(
    'globall',
    lineno,
    {},
    {
      global: valueBlock
    },
    {
      inline: true
    }
  )
}

const textRemove = function (valueBlock, lineno) {
  return blockBuilder(
    'removefile',
    lineno,
    {},
    {
      removefile: valueBlock
    },
    {
      inline: true
    }
  )
}

const textOrd = function (valueBlock, lineno) {
  return blockBuilder(
    'text_ord',
    lineno,
    {},
    {
      VALUE: valueBlock
    },
    {
      inline: true
    }
  )
}

const inputBlock = function (promptBlock, lineno) {
  if (promptBlock) {
    return blockBuilder(
      'input_prompt_block',
      lineno,
      {},
      {
        PROMPT: promptBlock
      }
    )
  }
  return blockBuilder('input_block', lineno)
}

const textLength = function (valueBlock, lineno) {
  return blockBuilder(
    'text_length',
    lineno,
    {},
    {
      VALUE: valueBlock
    }
  )
}

const setsSize = function (valueBlock, lineno) {
  return blockBuilder(
    'sets_size',
    lineno,
    {},
    {
      VALUE: valueBlock
    }
  )
}

const tuplesSize = function (valueBlock, lineno) {
  return blockBuilder(
    'tuples_size',
    lineno,
    {},
    {
      VALUE: valueBlock
    }
  )
}

const dictsSize = function (valueBlock, lineno) {
  return blockBuilder(
    'dicts_size',
    lineno,
    {},
    {
      VALUE: valueBlock
    }
  )
}

const listsLength = function (valueBlock, lineno) {
  return blockBuilder(
    'function_length_temporary',
    lineno,
    {},
    {
      VALUE: valueBlock
    }
  )
}

const mathRound = function (valueBlock, operation, lineno) {
  return blockBuilder(
    'math_round',
    lineno,
    {
      OP: operation
    },
    {
      NUM: valueBlock
    }
  )
}

const isBitwiseArithmeticOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'BitAnd':
    case 'BitOr':
    case 'BitXor':
    case 'LShift':
    case 'RShift':
      return true
    default:
      return false
  }
}

const mathBitwiseArithmetic = function (
  leftBlock,
  opeartorName,
  rightBlock,
  lineno
) {
  return blockBuilder(
    'math_bitwise_arithmetic',
    lineno,
    {
      OP: bitwiseArithmeticOperator(opeartorName)
    },
    {
      A: leftBlock,
      B: rightBlock
    },
    {
      inline: true
    }
  )
}

const isCommonArithmeticOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'Add':
    case 'Sub':
    case 'Div':
    case 'Mult':
    case 'Pow':
      return true
    default:
      return false
  }
}
const functionSum = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'function_sum',
    lineno,
    {},
    {
      iterable: leftBlock,
      start: rightBlock
    }
  )
}
const mathArithmetic = function (leftBlock, opeartorName, rightBlock, lineno) {
  if (isBitwiseArithmeticOperator(opeartorName)) {
    return mathBitwiseArithmetic(leftBlock, opeartorName, rightBlock, lineno)
  } else if (isCommonArithmeticOperator(opeartorName)) {
    return mathCommonArithmetic(leftBlock, opeartorName, rightBlock, lineno)
  }
  throw new Error(`Operator not supported: ${opeartorName}`)
}

const commonArithmeticOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'Add':
      return 'ADD'
    case 'Sub':
      return 'MINUS'
    case 'Div':
      return 'DIVIDE'
    case 'Mult':
      return 'MULTIPLY'
    case 'Pow':
      return 'POWER'
    default:
      throw new Error(`Operator not supported: ${opeartorName}`)
  }
}

const mathCommonArithmetic = function (
  leftBlock,
  opeartorName,
  rightBlock,
  lineno
) {
  return blockBuilder(
    'math_arithmetic',
    lineno,
    {
      OP: commonArithmeticOperator(opeartorName)
    },
    {
      A: leftBlock,
      B: rightBlock
    },
    {
      inline: true
    }
  )
}

const bitwiseArithmeticOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'BitAnd':
      return 'AND'
    case 'BitOr':
      return 'OR'
    case 'BitXor':
      return 'XOR'
    case 'LShift':
      return 'LEFT_SHIFT'
    case 'RShift':
      return 'RIGHT_SHIFT'
    default:
      throw new Error(`Operator not supported: ${opeartorName}`)
  }
}

const mathDelattr = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'delattr',
    lineno,
    {},
    {
      delattrobject: leftBlock,
      delattrname: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathIntegerDivmod = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'divmod',
    lineno,
    {},
    {
      divmoda: leftBlock,
      divmodb: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathEnumerate = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'enumerate',
    lineno,
    {},
    {
      iterable: leftBlock,
      enumstart: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathFilter = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'filter',
    lineno,
    {},
    {
      filterfunction: leftBlock,
      filteriterable: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathEval = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'eval',
    lineno,
    {},
    {
      evala: leftBlock,
      evalb: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathExec = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'exec',
    lineno,
    {},
    {
      execglobal: leftBlock,
      execlocal: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathIntegerSearch = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'search',
    lineno,
    {},
    {
      searchtype: leftBlock,
      searchname: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathIntegerSplit = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'resplit',
    lineno,
    {},
    {
      resplittype: leftBlock,
      resplitname: rightBlock
    },
    {
      inline: true
    }
  )
}

const rangeCreate = function (Start, endBlock, Step, lineno) {
  return blockBuilder(
    'range__',
    lineno,
    {
      start: Start,
      step_length: Step
    },
    {
      end: endBlock
    }
  )
}
const dictsCreateWith = function (items, keys, lineno) {
  return blockBuilder(
    'dicts_create_with',
    lineno,
    {},
    items,
    {
      inline: 'false'
    },
    {
      '@items': keys.length
    }
  )
}
const dictsPair = function (keyBlock, valueBlock, lockedBlock, lineno) {
  return blockBuilder(
    'dicts_pair',
    lineno,
    {},
    {
      KEY: keyBlock,
      VALUE: valueBlock
    },
    lockedBlock
  )
}
const controlsFor = function (variableName, forArgs, bodyBlock, lineno) {
  return blockBuilder(
    'controls_for',
    lineno,
    {
      VAR: variableName
    },
    {
      FROM: forArgs[0],
      TO: forArgs[1],
      BY: forArgs[2]
    },
    {
      inline: 'true'
    },
    {},
    {
      DO: bodyBlock
    }
  )
}

const controlsForEach = function (variableName, listBlock, bodyBlock, lineno) {
  return blockBuilder(
    'controls_forEach',
    lineno,
    {
      VAR: variableName
    },
    {
      LIST: listBlock
    },
    {
      inline: 'true'
    },
    {},
    {
      DO: bodyBlock
    }
  )
}

const controlsForElse = function (
  variableName,
  listBlock,
  bodyBlock,
  elseBlock,
  lineno
) {
  return blockBuilder(
    'controls_forElse',
    lineno,
    {
      VAR: variableName
    },
    {
      LIST: listBlock
    },
    {
      inline: 'true'
    },
    {},
    {
      DO: bodyBlock,
      ELSE: elseBlock
    }
  )
}

const controlsRepeat = function (times, bodyBlock, lineno) {
  return blockBuilder(
    'controls_repeat_ext',
    lineno,
    {},
    {
      TIMES: times
    },
    {
      inline: 'true'
    },
    {},
    {
      DO: bodyBlock
    }
  )
}

const text = function ({ v }, lineno) {
  if (v.split('\n').length > 1) {
    return blockBuilder('text_multiline', lineno, { TEXT: v })
  }
  return blockBuilder('text', lineno, { TEXT: v })
}

const rawBlock = function (content) {
  return blockBuilder('raw_block', 0, {
    TEXT: content
  })
}

const buildlocals = function (lineno) {
  return blockBuilder('function_local', lineno)
}

const buildtry = function (lineno) {
  return blockBuilder('try_sentence', lineno)
}

const buildexcept = function (lineno) {
  return blockBuilder('except_sentence', lineno)
}

const buildfinally = function (lineno) {
  return blockBuilder('finally_sentence', lineno)
}

const buildTimenow = function (lineno) {
  return blockBuilder('datetime_now', lineno)
}

const buildobject = function (lineno) {
  return blockBuilder('function_object', lineno)
}

const buildisinstance = function (instance, classinfo, lineno) {
  return blockBuilder(
    'function_isinstance',
    lineno,
    {},
    {
      function_isinstance_object: instance,
      function_isinstance_classinformation: classinfo
    }
  )
}

const buildissubclass = function (classinfo1, classinfo2, lineno) {
  return blockBuilder(
    'function_issubclass',
    lineno,
    {},
    {
      function_issubclass_class: classinfo1,
      function_issubclass_classinfo: classinfo2
    }
  )
}

const buildmax = function (number1, number2, lineno) {
  return blockBuilder(
    'function_max',
    lineno,
    {},
    {
      function_max_input1: number1,
      function_max_input2: number2
    }
  )
}

const buildmin = function (number1, number2, lineno) {
  return blockBuilder(
    'function_min',
    lineno,
    {},
    {
      function_min_input1: number1,
      function_min_input2: number2
    }
  )
}

const buildnext = function (iterator1, lineno) {
  return blockBuilder(
    'function_next',
    lineno,
    {},
    {
      function_next_iterable: iterator1
    }
  )
}

const buildmap = function (thefunction, itera, lineno) {
  return blockBuilder(
    'function_map',
    lineno,
    {},
    {
      function_map_function: thefunction,
      function_map_iterable: itera
    }
  )
}

const buildclass = function (object, classinfo, lineno) {
  return blockBuilder(
    'class_build',
    lineno,
    {},
    {
      class_build_classname: object,
      class_build_classcontent: classinfo
    }
  )
}

const buildmemoryview = function (value, lineno) {
  return blockBuilder(
    'function_memoryview',
    lineno,
    {},
    {
      function_memoryview_object: value
    }
  )
}

const buildraise = function (field, value, lineno) {
  return blockBuilder(
    'raise_sentence',
    lineno,
    {
      errorname: field
    },
    {
      raiseerror: value
    }
  )
}

const createSetOne = function (nullBlock, lineno) {
  return blockBuilder(
    'create_set_one',
    lineno,
    {},
    {
      create_set_one_argument: nullBlock
    }
  )
}

const logicNegate = function (operandBlock, lineno) {
  return blockBuilder(
    'logic_negate',
    lineno,
    {},
    {
      BOOL: operandBlock
    },
    {
      inline: 'false'
    }
  )
}

const mathBitwiseNot = function (operandBlock, lineno) {
  return blockBuilder(
    'math_bitwise_not',
    lineno,
    {},
    {
      VALUE: operandBlock
    },
    {
      inline: 'false'
    }
  )
}

const mathSingle = function (opeartorName, operandBlock, lineno) {
  return blockBuilder(
    'math_single',
    lineno,
    {
      OP: opeartorName
    },
    {
      NUM: operandBlock
    }
  )
}

const iterChange = function (iterBlock, lineno) {
  return blockBuilder('iter', lineno, {}, { list: iterBlock })
}

const iterfChange = function (iterfBlock, lineno) {
  return blockBuilder('__iter__function', lineno, {}, { iterator: iterfBlock })
}

const nextfChange = function (nextfBlock, lineno) {
  return blockBuilder('__next__function', lineno, {}, { iterator: nextfBlock })
}

const setsArithmetic = function (leftBlock, opeartorName, rightBlock, lineno) {
  return blockBuilder(
    'sets_arithmetic',
    lineno,
    {
      OP: setArithmeticOperator(opeartorName)
    },
    {
      A: leftBlock,
      B: rightBlock
    },
    {
      inline: true
    }
  )
}

const setArithmeticOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'BitAnd':
      return 'AND'
    case 'BitOr':
      return 'OR'
    case 'BitXor':
      return 'XOR'
    case 'Sub':
      return 'MINUS'
    default:
      throw new Error(`Operator not supported: ${opeartorName}`)
  }
}

const mathModulo = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'math_modulo',
    lineno,
    {},
    {
      DIVIDEND: leftBlock,
      DIVISOR: rightBlock
    },
    {
      inline: true
    }
  )
}

const mathIntegerDivision = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'math_integer_division',
    lineno,
    {},
    {
      DIVIDEND: leftBlock,
      DIVISOR: rightBlock
    },
    {
      inline: true
    }
  )
}

const logicOperation = function (
  valueBlock,
  opeartorName,
  resultBlock,
  lineno
) {
  return blockBuilder(
    'logic_operation',
    lineno,
    {
      OP: booleanOperator(opeartorName)
    },
    {
      A: resultBlock,
      B: valueBlock
    },
    {
      inline: 'true'
    }
  )
}

const booleanOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'And':
      return 'AND'
    case 'Or':
      return 'OR'
    default:
      throw new Error(`Operator not supported: ${opeartorName}`)
  }
}

const FileOpen = function (textBlock, Model, TextBinary, lineno) {
  return blockBuilder(
    'open_file',
    lineno,
    {
      mode1: Model,
      textbinary: TextBinary
    },
    {
      file: textBlock
    }
  )
}

const reprObj = function (Obj, lineno) {
  return blockBuilder('repr', lineno, {}, { obj: Obj })
}

const reversed = function (objString, lineno) {
  return blockBuilder('reverse', lineno, {}, { reverse_function: objString })
}

const setFunc = function (Iterate, lineno) {
  return blockBuilder('set_func', lineno, {}, { iterable: Iterate })
}

const mathOct = function (textBlock, lineno) {
  return blockBuilder('oct', lineno, {}, { iterable: textBlock })
}

const roundFunc = function (num, accu, lineno) {
  return blockBuilder(
    'round_function',
    lineno,
    {},
    { number: num, accuracy: accu }
  )
}

const typeWithThree = function (startBlock, stopBlock, stepBlock, lineno) {
  return blockBuilder(
    'type_with_three_argument',
    lineno,
    {},
    {
      name: startBlock,
      bases: stopBlock,
      dict: stepBlock
    }
  )
}

const xrange = function (startBlock, stopBlock, stepBlock, lineno) {
  return blockBuilder(
    'xrange',
    lineno,
    {},
    {
      start: startBlock,
      stop: stopBlock,
      step: stepBlock
    }
  )
}

const innerPow = function (Base, Exp, Mod, lineno) {
  return blockBuilder(
    'inner_pow',
    lineno,
    {},
    { base: Base, exp: Exp, mod: Mod }
  )
}

const property = function (fGet, fSet, fDel, Doc, lineno) {
  return blockBuilder(
    'property',
    lineno,
    {},
    { fget: fGet, fset: fSet, fdel: fDel, doc: Doc }
  )
}

const logicSetsCompare = function (left, opeartorName, right, lineno) {
  return blockBuilder(
    'logic_sets_compare',
    lineno,
    {
      OP: compareOperator(opeartorName)
    },
    {
      A: left,
      B: right
    },
    {
      inline: 'true'
    }
  )
}

const logicCompare = function (left, opeartorName, right, lineno) {
  return blockBuilder(
    'logic_compare',
    lineno,
    {
      OP: compareOperator(opeartorName)
    },
    {
      A: left,
      B: right
    },
    {
      inline: 'true'
    }
  )
}

const membershipOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'In':
      return 'IN'
    case 'NotIn':
      return 'NOT_IN'
    default:
      throw new Error(`Operator not supported: ${opeartorName}`)
  }
}

const logicObjectIn = function (left, opeartorName, right, lineno) {
  return blockBuilder(
    'logic_object_in',
    lineno,
    {
      OP: membershipOperator(opeartorName)
    },
    {
      A: left,
      B: right
    },
    {
      inline: 'true'
    }
  )
}

const identityOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'Is':
      return 'IS'
    case 'IsNot':
      return 'IS_NOT'
    default:
      throw new Error(`Operator not supported: ${opeartorName}`)
  }
}

const logicObjectCompare = function (left, opeartorName, right, lineno) {
  return blockBuilder(
    'logic_object_compare',
    lineno,
    {
      OP: identityOperator(opeartorName)
    },
    {
      A: left,
      B: right
    },
    {
      inline: 'true'
    }
  )
}

const logicTernary = function (ifBlock, thenBlock, elseBlock, lineno) {
  return blockBuilder(
    'logic_ternary',
    lineno,
    {},
    {
      IF: ifBlock,
      THEN: thenBlock,
      ELSE: elseBlock
    },
    {
      inline: 'false'
    }
  )
}

const controlsIf = function (conditions, bodys, { elifs, elses }, lineno) {
  return blockBuilder(
    'controls_if',
    lineno,
    {},
    conditions,
    {
      inline: 'false'
    },
    {
      '@elseif': elifs,
      '@else': elses
    },
    bodys
  )
}

const compareOperator = function (opeartorName) {
  switch (opeartorName) {
    case 'Eq':
      return 'EQ'
    case 'NotEq':
      return 'NEQ'
    case 'Lt':
      return 'LT'
    case 'Gt':
      return 'GT'
    case 'LtE':
      return 'LTE'
    case 'GtE':
      return 'GTE'
    default:
      throw new Error(`Operator not supported: ${opeartorName}`)
  }
}

const mathChange = function (variableName, valueBlock, lineno) {
  return blockBuilder(
    'math_change',
    lineno,
    {
      VAR: variableName
    },
    {
      DELTA: valueBlock
    }
  )
}

const variablesSet = function (variableName, valueBlock, lineno) {
  return blockBuilder(
    'variables_set',
    lineno,
    {
      VAR: variableName
    },
    {
      VALUE: valueBlock
    }
  )
}

const floatChange = function (floatBlock, lineno) {
  return blockBuilder('float', lineno, {}, { otherValue: floatBlock })
}

const frozensetChange = function (frozensetBlock, lineno) {
  return blockBuilder('frozenset', lineno, {}, { set: frozensetBlock })
}

const hashChange = function (hashBlock, lineno) {
  return blockBuilder('hash', lineno, {}, { object: hashBlock })
}

const helpChange = function (helpBlock, lineno) {
  return blockBuilder('help', lineno, {}, { helpValue: helpBlock })
}

const hexChange = function (hexBlock, lineno) {
  return blockBuilder('hex', lineno, {}, { number: hexBlock })
}

const idChange = function (idBlock, lineno) {
  return blockBuilder('id_function', lineno, {}, { object: idBlock })
}

const getattrChange = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'getattr',
    lineno,
    {},
    {
      class: leftBlock,
      member: rightBlock
    },
    {
      inline: true
    }
  )
}
const hasattrChange = function (leftBlock, rightBlock, lineno) {
  return blockBuilder(
    'hasattr',
    lineno,
    {},
    {
      object: leftBlock,
      member: rightBlock
    },
    {
      inline: true
    }
  )
}

const importFunc = function (names, lineno) {
  return blockBuilder('import_modules', lineno, {
    import_modules_module: names
  })
}

const notesFunc = function (names, lineno) {
  return blockBuilder('notes', lineno, {
    note: names
  })
}

const setsCreateWith = function (items, elts, lineno) {
  return blockBuilder(
    'sets_create_with',
    lineno,
    {},
    items,
    {
      inline: elts.length > 3 ? 'false' : 'true'
    },
    {
      '@items': elts.length
    }
  )
}

const sliceFun = function (names, lineno) {
  return blockBuilder('slice_fun', lineno, {}, { sliceArgument: names })
}

/* harmony default export */ __webpack_exports__["a"] = (PythonToBlocks);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
__webpack_require__(29);

module.exports = Sk;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(){'use strict';var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(m,q,a){m!=Array.prototype&&m!=Object.prototype&&(m[q]=a.value)};$jscomp.getGlobal=function(m){return"undefined"!=typeof window&&window===m?m:"undefined"!=typeof global&&null!=global?global:m};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(m,q,a,c){if(q){a=$jscomp.global;m=m.split(".");for(c=0;c<m.length-1;c++){var b=m[c];b in a||(a[b]={});a=a[b]}m=m[m.length-1];c=a[m];q=q(c);q!=c&&null!=q&&$jscomp.defineProperty(a,m,{configurable:!0,writable:!0,value:q})}};$jscomp.polyfill("Array.prototype.includes",function(m){return m?m:function(m,a){var c=this;c instanceof String&&(c=String(c));var b=c.length;a=a||0;for(0>a&&(a=Math.max(a+b,0));a<b;a++){var e=c[a];if(e===m||Object.is(e,m))return!0}return!1}},"es7","es3");
$jscomp.owns=function(m,q){return Object.prototype.hasOwnProperty.call(m,q)};$jscomp.polyfill("Object.entries",function(m){return m?m:function(m){var a=[],c;for(c in m)$jscomp.owns(m,c)&&a.push([c,m[c]]);return a}},"es8","es3");
$jscomp.checkStringArgs=function(m,q,a){if(null==m)throw new TypeError("The 'this' value for String.prototype."+a+" must not be null or undefined");if(q instanceof RegExp)throw new TypeError("First argument to String.prototype."+a+" must not be a regular expression");return m+""};$jscomp.stringPadding=function(m,q){m=void 0!==m?String(m):" ";return 0<q&&m?m.repeat(Math.ceil(q/m.length)).substring(0,q):""};
$jscomp.polyfill("String.prototype.padStart",function(m){return m?m:function(m,a){var c=$jscomp.checkStringArgs(this,null,"padStart");return $jscomp.stringPadding(a,m-c.length)+c}},"es8","es3");$jscomp.polyfill("Object.values",function(m){return m?m:function(m){var a=[],c;for(c in m)$jscomp.owns(m,c)&&a.push(m[c]);return a}},"es8","es3");$jscomp.arrayIteratorImpl=function(m){var q=0;return function(){return q<m.length?{done:!1,value:m[q++]}:{done:!0}}};$jscomp.arrayIterator=function(m){return{next:$jscomp.arrayIteratorImpl(m)}};
$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.SymbolClass=function(m,q){this.$jscomp$symbol$id_=m;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:q})};$jscomp.SymbolClass.prototype.toString=function(){return this.$jscomp$symbol$id_};
$jscomp.Symbol=function(){function m(a){if(this instanceof m)throw new TypeError("Symbol is not a constructor");return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX+(a||"")+"_"+q++,a)}var q=0;return m}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var m=$jscomp.global.Symbol.iterator;m||(m=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[m]&&$jscomp.defineProperty(Array.prototype,m,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var m=$jscomp.global.Symbol.asyncIterator;m||(m=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("Symbol.asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(m){$jscomp.initSymbolIterator();m={next:m};m[$jscomp.global.Symbol.iterator]=function(){return this};return m};
$jscomp.iteratorFromArray=function(m,q){$jscomp.initSymbolIterator();m instanceof String&&(m+="");var a=0,c={next:function(){if(a<m.length){var b=a++;return{value:q(b,m[b]),done:!1}}c.next=function(){return{done:!0,value:void 0}};return c.next()}};c[Symbol.iterator]=function(){return c};return c};$jscomp.polyfill("Array.prototype.values",function(m){return m?m:function(){return $jscomp.iteratorFromArray(this,function(m,a){return a})}},"es8","es3");
(function(m){function q(c){if(a[c])return a[c].exports;var b=a[c]={i:c,l:!1,exports:{}};m[c].call(b.exports,b,b.exports,q);b.l=!0;return b.exports}var a={};q.m=m;q.c=a;q.d=function(a,b,e){q.o(a,b)||Object.defineProperty(a,b,{enumerable:!0,get:e})};q.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})};q.t=function(a,b){b&1&&(a=q(a));if(b&8||b&4&&"object"===typeof a&&a&&a.__esModule)return a;
var c=Object.create(null);q.r(c);Object.defineProperty(c,"default",{enumerable:!0,value:a});if(b&2&&"string"!=typeof a)for(var f in a)q.d(c,f,function(b){return a[b]}.bind(null,f));return c};q.n=function(a){var b=a&&a.__esModule?function(){return a["default"]}:function(){return a};q.d(b,"a",b);return b};q.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};q.p="";return q(q.s=1)})([function(m,q){q=function(){return this}();try{q=q||(new Function("return this"))()}catch(a){"object"===
typeof window&&(q=window)}m.exports=q},function(m,q,a){a(2);Sk.global.strftime=a(3);Sk.global.strptime=a(4);a(5);a(7);a(9);a(10);a(11);a(12);a(13);a(14);a(15);a(16);a(17);a(18);[Sk.builtin.object,Sk.builtin.type].forEach(a=>{Sk.abstr.setUpSlots(a);Sk.abstr.setUpMethods(a);Sk.abstr.setUpGetSets(a)});a(19);a(20);a(21);[Sk.builtin.str,Sk.builtin.none,Sk.builtin.NotImplemented,Sk.builtin.object].forEach(a=>{a=a.prototype;a.__doc__=a.hasOwnProperty("tp$doc")?new Sk.builtin.str(a.tp$doc):Sk.builtin.none.none$});
a(22);a(23);a(24);a(25);a(26);a(27);a(28);a(29);a(31);a(32);a(33);a(34);a(35);a(36);a(37);a(38);a(39);a(40);a(41);a(42);a(43);a(44);a(45);a(46);a(47);a(48);a(49);a(50);a(51);a(52);a(53);a(54);a(55);a(56);a(57);a(58);a(59);a(60);a(61);a(62);a(63);a(64);a(65)},function(m,q,a){(function(a){var b={build:{githash:"e3c1c1a4e081362d96ba8afc5997be516b437f30",date:"2021-03-25T11:36:32.075Z"}};b.global="undefined"!==typeof a?a:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{};b.exportSymbol=
function(a,c){a=a.split(".");var e=b.global,f;for(f=0;f<a.length-1;f++){var d=a[f];e=e.hasOwnProperty(d)?e[d]:e[d]={}}"undefined"!==typeof c&&(d=a[f],e[d]=c)};b.isArrayLike=function(a){return a instanceof Array||a&&a.length&&"number"==typeof a.length?!0:!1};b.js_beautify=function(a){return a};b.exportSymbol("Sk",b);b.exportSymbol("Sk.global",b.global);b.exportSymbol("Sk.build",b.build);b.exportSymbol("Sk.exportSymbol",b.exportSymbol);b.exportSymbol("Sk.isArrayLike",b.isArrayLike);b.exportSymbol("Sk.js_beautify",
b.js_beautify)}).call(this,a(0))},function(m,q){(function(){function a(k,n,A){function p(a,d,k,g){for(var u="",C=null,n=!1,y=a.length,N=!1,F=0;F<y;F++){var A=a.charCodeAt(F);if(!0===n)if(45===A)C="";else if(95===A)C=" ";else if(48===A)C="0";else if(58===A)N&&h("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime"),N=!0;else{switch(A){case 37:u+="%";break;case 65:u+=k.days[d.getDay()];break;case 66:u+=k.months[d.getMonth()];break;case 67:u+=c(Math.floor(d.getFullYear()/100),C);
break;case 68:u+=p(k.formats.D,d,k,g);break;case 70:u+=p(k.formats.F,d,k,g);break;case 72:u+=c(d.getHours(),C);break;case 73:u+=c(e(d.getHours()),C);break;case 76:u+=b(Math.floor(g%1E3));break;case 77:u+=c(d.getMinutes(),C);break;case 80:u+=12>d.getHours()?k.am:k.pm;break;case 82:u+=p(k.formats.R,d,k,g);break;case 83:u+=c(d.getSeconds(),C);break;case 84:u+=p(k.formats.T,d,k,g);break;case 85:u+=c(f(d,"sunday"),C);break;case 87:u+=c(f(d,"monday"),C);break;case 88:u+=p(k.formats.X,d,k,g);break;case 89:u+=
d.getFullYear();break;case 90:E&&0===B?u+="GMT":(C=d.toString().match(/\(([\w\s]+)\)/),u+=C&&C[1]||"");break;case 97:u+=k.shortDays[d.getDay()];break;case 98:u+=k.shortMonths[d.getMonth()];break;case 99:u+=p(k.formats.c,d,k,g);break;case 100:u+=c(d.getDate(),C);break;case 101:u+=c(d.getDate(),null==C?" ":C);break;case 104:u+=k.shortMonths[d.getMonth()];break;case 106:C=new Date(d.getFullYear(),0,1);C=Math.ceil((d.getTime()-C.getTime())/864E5);u+=b(C);break;case 107:u+=c(d.getHours(),null==C?" ":C);
break;case 108:u+=c(e(d.getHours()),null==C?" ":C);break;case 109:u+=c(d.getMonth()+1,C);break;case 110:u+="\n";break;case 111:C=d.getDate();u=k.ordinalSuffixes?u+(String(C)+(k.ordinalSuffixes[C-1]||l(C))):u+(String(C)+l(C));break;case 112:u+=12>d.getHours()?k.AM:k.PM;break;case 114:u+=p(k.formats.r,d,k,g);break;case 115:u+=Math.floor(g/1E3);break;case 116:u+="\t";break;case 117:C=d.getDay();u+=0===C?7:C;break;case 118:u+=p(k.formats.v,d,k,g);break;case 119:u+=d.getDay();break;case 120:u+=p(k.formats.x,
d,k,g);break;case 121:u+=(""+d.getFullYear()).slice(2);break;case 122:E&&0===B?u+=N?"+00:00":"+0000":(C=0!==B?B/6E4:-d.getTimezoneOffset(),n=N?":":"",A=Math.abs(C%60),u+=(0>C?"-":"+")+c(Math.floor(Math.abs(C/60)))+n+c(A));break;default:n&&(u+="%"),u+=a[F]}C=null;n=!1}else 37===A?n=!0:u+=a[F]}return u}var y=k||g,B=n||0,E=A||!1,F=0,w,m=function(a,b){if(b){var d=b.getTime();if(E){var c=6E4*(b.getTimezoneOffset()||0);b=new Date(d+c+B);6E4*(b.getTimezoneOffset()||0)!==c&&(b=6E4*(b.getTimezoneOffset()||
0),b=new Date(d+b+B))}}else d=Date.now(),d>F?(F=d,w=new Date(F),d=F,E&&(w=new Date(F+6E4*(w.getTimezoneOffset()||0)+B))):d=F,b=w;return p(a,b,y,d)};m.localize=function(b){return new a(b||y,B,E)};m.localizeByIdentifier=function(a){var b=d[a];return b?m.localize(b):(h('[WARNING] No locale found with identifier "'+a+'".'),m)};m.timezone=function(b){var d=B,c=E,e=typeof b;if("number"===e||"string"===e)c=!0,"string"===e?(d="-"===b[0]?-1:1,e=parseInt(b.slice(1,3),10),b=parseInt(b.slice(3,5),10),d=d*(60*
e+b)*6E4):"number"===e&&(d=6E4*b);return new a(y,d,c)};m.utc=function(){return new a(y,B,!0)};return m}function c(a,b){if(""===b||9<a)return a;null==b&&(b="0");return b+a}function b(a){return 99<a?a:9<a?"0"+a:"00"+a}function e(a){return 0===a?12:12<a?a-12:a}function f(a,b){b=b||"sunday";var d=a.getDay();"monday"===b&&(0===d?d=6:d--);b=Date.UTC(a.getFullYear(),0,1);a=Date.UTC(a.getFullYear(),a.getMonth(),a.getDate());return Math.floor((Math.floor((a-b)/864E5)+7-d)/7)}function l(a){var b=a%10;a%=100;
if(11<=a&&13>=a||0===b||4<=b)return"th";switch(b){case 1:return"st";case 2:return"nd";case 3:return"rd"}}function h(a){"undefined"!==typeof console&&"function"==typeof console.warn&&console.warn(a)}var d={de_DE:{days:"Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag".split(" "),shortDays:"So Mo Di Mi Do Fr Sa".split(" "),months:"Januar Februar M\u00e4rz April Mai Juni Juli August September Oktober November Dezember".split(" "),shortMonths:"Jan Feb M\u00e4r Apr Mai Jun Jul Aug Sep Okt Nov Dez".split(" "),
AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d.%m.%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},en_CA:{days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ordinalSuffixes:"st nd rd th th th th th th th th th th th th th th th th th st nd rd th th th th th th th st".split(" "),
AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%r",x:"%D"}},en_US:{days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ordinalSuffixes:"st nd rd th th th th th th th th th th th th th th th th th st nd rd th th th th th th th st".split(" "),
AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%m/%d/%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%r",x:"%D"}},es_MX:{days:"domingo lunes martes mi\u00e9rcoles jueves viernes s\u00e1bado".split(" "),shortDays:"dom lun mar mi\u00e9 jue vie s\u00e1b".split(" "),months:"enero;febrero;marzo;abril;mayo;junio;julio;agosto;septiembre;octubre;noviembre; diciembre".split(";"),shortMonths:"ene feb mar abr may jun jul ago sep oct nov dic".split(" "),AM:"AM",PM:"PM",
am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},fr_FR:{days:"dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),shortDays:"dim. lun. mar. mer. jeu. ven. sam.".split(" "),months:"janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "),shortMonths:"janv. f\u00e9vr. mars avril mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),AM:"AM",
PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},it_IT:{days:"domenica luned\u00ec marted\u00ec mercoled\u00ec gioved\u00ec venerd\u00ec sabato".split(" "),shortDays:"dom lun mar mer gio ven sab".split(" "),months:"gennaio febbraio marzo aprile maggio giugno luglio agosto settembre ottobre novembre dicembre".split(" "),shortMonths:"pr mag giu lug ago set ott nov dic".split(" "),AM:"AM",PM:"PM",am:"am",
pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},nl_NL:{days:"zondag maandag dinsdag woensdag donderdag vrijdag zaterdag".split(" "),shortDays:"zo ma di wo do vr za".split(" "),months:"januari februari maart april mei juni juli augustus september oktober november december".split(" "),shortMonths:"jan feb mrt apr mei jun jul aug sep okt nov dec".split(" "),AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",
D:"%d-%m-%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},pt_BR:{days:"domingo segunda ter\u00e7a quarta quinta sexta s\u00e1bado".split(" "),shortDays:"Dom Seg Ter Qua Qui Sex S\u00e1b".split(" "),months:"janeiro fevereiro mar\u00e7o abril maio junho julho agosto setembro outubro novembro dezembro".split(" "),shortMonths:"Jan Fev Mar Abr Mai Jun Jul Ago Set Out Nov Dez".split(" "),AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d-%m-%Y",F:"%Y-%m-%d",
R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},ru_RU:{days:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 \u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0412\u0442\u043e\u0440\u043d\u0438\u043a \u0421\u0440\u0435\u0434\u0430 \u0427\u0435\u0442\u0432\u0435\u0440\u0433 \u041f\u044f\u0442\u043d\u0438\u0446\u0430 \u0421\u0443\u0431\u0431\u043e\u0442\u0430".split(" "),shortDays:"\u0412\u0441 \u041f\u043d \u0412\u0442 \u0421\u0440 \u0427\u0442 \u041f\u0442 \u0421\u0431".split(" "),
months:"\u042f\u043d\u0432\u0430\u0440\u044c \u0424\u0435\u0432\u0440\u0430\u043b\u044c \u041c\u0430\u0440\u0442 \u0410\u043f\u0440\u0435\u043b\u044c \u041c\u0430\u0439 \u0418\u044e\u043d\u044c \u0418\u044e\u043b\u044c \u0410\u0432\u0433\u0443\u0441\u0442 \u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c \u041e\u043a\u0442\u044f\u0431\u0440\u044c \u041d\u043e\u044f\u0431\u0440\u044c \u0414\u0435\u043a\u0430\u0431\u0440\u044c".split(" "),shortMonths:"\u044f\u043d\u0432 \u0444\u0435\u0432 \u043c\u0430\u0440 \u0430\u043f\u0440 \u043c\u0430\u0439 \u0438\u044e\u043d \u0438\u044e\u043b \u0430\u0432\u0433 \u0441\u0435\u043d \u043e\u043a\u0442 \u043d\u043e\u044f \u0434\u0435\u043a".split(" "),
AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X",D:"%d.%m.%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},tr_TR:{days:"Pazar Pazartesi Sal\u0131 \u00c7ar\u015famba Per\u015fembe Cuma Cumartesi".split(" "),shortDays:"Paz Pzt Sal \u00c7r\u015f Pr\u015f Cum Cts".split(" "),months:"Ocak \u015eubat Mart Nisan May\u0131s Haziran Temmuz A\u011fustos Eyl\u00fcl Ekim Kas\u0131m Aral\u0131k".split(" "),shortMonths:"Oca \u015eub Mar Nis May Haz Tem A\u011fu Eyl Eki Kas Ara".split(" "),
AM:"\u00d6\u00d6",PM:"\u00d6S",am:"\u00d6\u00d6",pm:"\u00d6S",formats:{c:"%a %d %b %Y %X %Z",D:"%d-%m-%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},zh_CN:{days:"\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),shortDays:"\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),months:"\u4e00\u6708\u4efd \u4e8c\u6708\u4efd \u4e09\u6708\u4efd \u56db\u6708\u4efd \u4e94\u6708\u4efd \u516d\u6708\u4efd \u4e03\u6708\u4efd \u516b\u6708\u4efd \u4e5d\u6708\u4efd \u5341\u6708\u4efd \u5341\u4e00\u6708\u4efd \u5341\u4e8c\u6708\u4efd".split(" "),
shortMonths:"\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "),AM:"\u4e0a\u5348",PM:"\u4e0b\u5348",am:"\u4e0a\u5348",pm:"\u4e0b\u5348",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%r",x:"%D"}}},g=d.en_US,n=new a(g,0,!1);if("undefined"!==typeof m)var k=m.exports=n;else k=function(){return this||(0,eval)("this")}(),
k.strftime=n;"function"!==typeof Date.now&&(Date.now=function(){return+new Date})})()},function(m,q,a){(function(){var a=function(b,c,f){return a.parse(b,c,f)};a.version="0.0.1";(m.exports=a).strptime=a;a.locale={a:"Sun Mon Tue Wed Thu Fri Sat".split(" "),A:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),b:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),B:"January February March April May June July August September October November December".split(" "),f:"Jan. Feb. Mar. Apr. May Jun. Jul. Aug. Sep. Oct. Nov. Dec.".split(" "),
c:"%Y-%m-%d %H:%M:%S",P:["am","pm"],r:"%I:%M:%S %p",x:"%m/%d/%y",X:"%H:%M:%S",day:["Yesterday","Today","Tomorrow"],bg:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Bg:"January February March April May June July August September October November December".split(" "),fg:"Jan. Feb. Mar. Apr. May Jun. Jul. Aug. Sep. Oct. Nov. Dec.".split(" "),Date_dBY_year_in_HM:"%#B %-d, %Y at %-H:%M",Date_dBY_year:"%#B %-d, %Y",Date_dBY:"%#B %-d, %Y",Date_AdBY:"%A, %#B %-d, %Y",Date_dBA:"%#B %-d, %A",
Date_df_in_HM:"%#f, %-d at %-H:%M",Date_dfY:"%-d %#f %Y",Date_dB_in_HM:"%#B %-d at %-H:%M",Date_df:"%-d %#f"};(function(a){function b(a,c,e,f,h,l){c=String(c);e=String(e);c=c.replace(/^[#_0\^\-!~]+/,"");f=d[c];if(!f)return a;var k=!1;-1===e.indexOf("!")&&1===c.length&&(-1<e.indexOf("~")||-1<"bBf".indexOf(c)&&/%[0\-_]?d[\s]+$/.test(l.substr(0,h)))&&(k=!0);if(("I"===c||"l"===c)&&!/%[pP]/.test(l))throw Error("Undefined AM/PM");switch(typeof f){case "function":return f();case "string":return f;case "object":return b.make.push([f.make,
e,k]),"("+f.reg+")";default:return a}}function c(a,b){a=String(a);b=String(b);return-1!==b.indexOf("#")?a.substr(0,1).toUpperCase()+a.substr(1):-1!==b.indexOf("^")?a.substr(0,1)+a.substr(1).toLowerCase():a}var l=Array.prototype.indexOf||function(a){for(var b=this.length,d=0;d<b;){if(a==this[d])return d;d++}return-1},h=a.locale,d={"%":"\\%",a:"\\S+",A:"\\S+",b:{reg:"\\S+",make:function(a,b,d,e){b=l.call(e?h.bg:h.b,c(b,d));if(-1===b)return!1;a.setUTCMonth(b);return!0}},h:{reg:"\\S+",make:function(a,
b,d,e){b=l.call(e?h.bg:h.b,c(b,d));if(-1===b)return!1;a.setUTCMonth(b);return!0}},B:{reg:"\\S+",make:function(a,b,d,e){b=l.call(e?h.Bg:h.B,c(b,d));if(-1===b)return!1;a.setUTCMonth(b);return!0}},f:{reg:"\\S+",make:function(a,b,d,e){b=l.call(e?h.fg:h.f,c(b,d));if(-1===b)return!1;a.setUTCMonth(b);return!0}},g:{reg:"[\\d\\s]?\\d",make:function(a,b){b=parseInt(b,10);if(0>b||99<b)return!1;b+=100*parseInt((new Date).getUTCFullYear()/100,10);a.setUTCFullYear(b);return!0}},G:{reg:"\\d{4}",make:function(a,
b){b=parseInt(b,10);a.setUTCFullYear(b);return!0}},d:{reg:"[\\d\\s]?\\d",make:function(a,b){b=parseInt(b,10);if(1>b||31<b)return!1;a.setUTCDate(b);return!0}},e:{reg:"[\\d\\s]?\\d",make:function(a,b){b=parseInt(b,10);if(1>b||31<b)return!1;a.setUTCDate(b);return!0}},H:{reg:"[\\d\\s]?\\d",make:function(a,b){b=parseInt(b,10);if(0>b||23<b)return!1;a.setUTCHours(b);return!0}},I:{reg:"[\\d\\s]?\\d",make:function(a,b){b=parseInt(b,10);if(1>b||12<b)return!1;a.setUTCHours(a.getUTCHours()+b);return!0}},m:{reg:"[\\d\\s]?\\d",
make:function(a,b){b=parseInt(b,10);if(1>b||12<b)return!1;a.setUTCMonth(b-1);return!0}},M:{reg:"[\\d\\s]?\\d",make:function(a,b){b=parseInt(b,10);if(0>b||59<b)return!1;a.setUTCMinutes(b);return!0}},n:"\\n",p:{reg:"\\S+",make:function(a,b){b=l.call(h.P,b.toLowerCase());if(-1===b)return!1;1===b&&a.setUTCHours(a.getUTCHours()+12);return!0}},P:{reg:"\\S+",make:function(a,b){b=l.call(h.P,b.toLowerCase());if(-1===b)return!1;1===b&&a.setUTCHours(a.getUTCHours()+12);return!0}},S:{reg:"[\\d\\s]?\\d",make:function(a,
b){b=parseInt(b,10);if(0>b||60<b)return!1;a.setUTCSeconds(b);return!0}},t:"\\t",u:"\\d",U:"[\\d\\s]?\\d",w:"\\d",W:"[\\d\\s]?\\d",y:{reg:"[\\d\\s]?\\d",make:function(a,b){b=parseInt(b,10);if(0>b||99<b)return!1;b+=100*parseInt((new Date).getUTCFullYear()/100,10);a.setUTCFullYear(b);return!0}},Y:{reg:"\\d{4}",make:function(a,b){b=parseInt(b,10);a.setUTCFullYear(b);return!0}},z:{reg:"[+\\-]\\d{4}",make:function(a,b){b=b.match(/^([+\-])(\d{2})(\d{2})$/);if(!b)return!1;var d=6E4*(60*parseInt(b[2],10)+
parseInt(b[3],10));"+"===b[1]&&(d=-d);a.setTime(a.getTime()+d);return!0}},l:{reg:"[\\d\\s]?\\d",make:function(a,b){b=parseInt(b,10);if(1>b||12<b)return!1;a.setUTCHours(a.getUTCHours()+b);return!0}},s:{reg:"\\d+",make:function(a,b){b=parseInt(b,10);a.setTime(1E3*b);return!0}},c:h.c,r:h.r,R:"%H:%M",T:"%H:%M:%S",x:h.x,X:h.X,D:"%m/%d/%y",F:"%Y-%m-%d",Date_iso:"%Y-%m-%dT%H:%M:%S",Date_dBY_year_in_HM:h.Date_dBY_year_in_HM,Date_dBY_year:h.Date_dBY_year,Date_dBY:h.Date_dBY,Date_dBA:h.Date_dBA,Date_AdBY:h.Date_AdBY,
Date_df_in_HM:h.Date_df_in_HM,Date_dfY:h.Date_dfY,Date_dB_in_HM:h.Date_dB_in_HM,Date_dmY__dot:"%d.%m.%Y",Date_df:h.Date_df,Date_FT:"%F %T",Date_dmY__minus:"%d-%m-%Y"};a.parse=function(a,d,c){a=String(a);d=String(d);for(var e=5;/%(Date_[a-zA-Z0-9_]+|[cDFrRTxX])/g.test(d)&&e;)d=d.replace(/%(Date_[a-zA-Z0-9_]+|[cDFrRTxX])/,b),e--;b.make=[];d=d.replace(/%(([#\^!~]{0,2})[aAbBfh]|([0\-_]?)[degHImMSVWyl]|[GnpPtuUwYzZs%])/g,b);a=a.match(new RegExp(d));if(!a||!b.make.length)return null;d=new Date(Date.UTC(0,
0));e=0;for(var k=b.make.length;e<k;e++){var f=b.make[e];if(!f[0](d,a[e+1],f[1],f[2]))return null}c&&d.setTime(d.getTime()+6E4*d.getTimezoneOffset());return d}})(a)})()},function(m,q,a){m=a(6);const c=Sk.global.JSBI=void 0!==Sk.global.BigInt?{}:m;if(void 0===Sk.global.BigInt){const a=c.__isBigInt;c.__isBigInt=a?b=>null!==b&&a(b):a=>a instanceof c;c.powermod=(a,b,l)=>{const e=c.BigInt(1);let d=e;for(b=c.greaterThan(b,c.__ZERO)?b:c.unaryMinus(b);c.greaterThan(b,c.__ZERO);)c.bitwiseAnd(b,e)&&(d=c.remainder(c.multiply(d,
a),l)),b=c.signedRightShift(b,e),a=c.remainder(c.multiply(a,a),l);return d}}else Object.assign(c,{BigInt:Sk.global.BigInt,toNumber:a=>Number(a),toString:a=>a.toString(),__isBigInt:a=>"bigint"===typeof a,unaryMinus:a=>-a,bitwiseNot:a=>~a,bitwiseAnd:(a,c)=>a&c,bitwiseOr:(a,c)=>a|c,bitwiseXor:(a,c)=>a^c,exponentiate:(a,e)=>{const b=c.BigInt(1);let l=b;for(e=e>c.__ZERO?e:-e;e>c.__ZERO;)e&b&&(l*=a),e>>=b,a*=a;return l},powermod:(a,e,f)=>{const b=c.BigInt(1);let h=b;for(e=e>c.__ZERO?e:-e;e>c.__ZERO;)e&
b&&(h=h*a%f),e>>=b,a=a*a%f;return h},multiply:(a,c)=>a*c,divide:(a,c)=>a/c,remainder:(a,c)=>a%c,add:(a,c)=>a+c,subtract:(a,c)=>a-c,leftShift:(a,c)=>a<<c,signedRightShift:(a,c)=>a>>c,unsignedRightShift:(a,c)=>a>>>c,lessThan:(a,c)=>a<c,lessThanOrEqual:(a,c)=>a<=c,greaterThan:(a,c)=>a>c,greaterThanOrEqual:(a,c)=>a>=c,equal:(a,c)=>a===c,notEqual:(a,c)=>a!==c});c.__ZERO=c.BigInt(0);c.__MAX_SAFE=c.BigInt(Number.MAX_SAFE_INTEGER);c.__MIN_SAFE=c.BigInt(-Number.MAX_SAFE_INTEGER);c.numberIfSafe=a=>c.lessThan(a,
c.__MAX_SAFE)&&c.greaterThan(a,c.__MIN_SAFE)?c.toNumber(a):a},function(m,q,a){(function(a,b){m.exports=b()})(this,function(){function a(b){"@babel/helpers - typeof";return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a(b)}function b(a,b){for(var d,c=0;c<b.length;c++)d=b[c],d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=
!0),Object.defineProperty(a,d.key,d)}function e(a,d,c){return d&&b(a.prototype,d),c&&b(a,c),a}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}});b&&h(a,b)}function l(a){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},l(a)}function h(a,b){return h=Object.setPrototypeOf||function(a,
b){return a.__proto__=b,a},h(a,b)}function d(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(E){return!1}}function g(){return g=d()?Reflect.construct:function(a,b,d){var c=[null];c.push.apply(c,b);a=new (Function.bind.apply(a,c));return d&&h(a,d.prototype),a},g.apply(null,arguments)}function n(a){var b="function"==typeof Map?new Map:void 0;
return n=function(a){function d(){return g(a,arguments,l(this).constructor)}if(null===a||-1===Function.toString.call(a).indexOf("[native code]"))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,d)}return d.prototype=Object.create(a.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),h(d,a)},n(a)}function k(a){var b=d();return function(){var d=l(a);if(b){var c=
l(this).constructor;d=Reflect.construct(d,arguments,c)}else d=d.apply(this,arguments);if(!d||"object"!=typeof d&&"function"!=typeof d){if(void 0===this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");d=this}return d}}function p(a,b){if(a){if("string"==typeof a)return w(a,b);var d=Object.prototype.toString.call(a).slice(8,-1);return"Object"===d&&a.constructor&&(d=a.constructor.name),"Map"===d||"Set"===d?Array.from(a):"Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?
w(a,b):void 0}}function w(a,b){(null==b||b>a.length)&&(b=a.length);for(var d=0,c=Array(b);d<b;d++)c[d]=a[d];return c}function A(a,b){var d;if("undefined"==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(d=p(a))||b&&a&&"number"==typeof a.length){d&&(a=d);var c=0;b=function(){};return{s:b,n:function(){return c>=a.length?{done:!0}:{done:!1,value:a[c++]}},e:function(a){throw a;},f:b}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var e,k=!0,f=!1;return{s:function(){d=a[Symbol.iterator]()},n:function(){var a=d.next();return k=a.done,a},e:function(a){f=!0;e=a},f:function(){try{k||null==d.return||d.return()}finally{if(f)throw e;}}}}var t=Math.imul,y=Math.clz32,B=function(b){function d(a,b){var c;if(!(this instanceof d))throw new TypeError("Cannot call a class as a function");if(a>d.__kMaxLength)throw new RangeError("Maximum BigInt size exceeded");return c=h.call(this,a),c.sign=b,c}var c=Math.abs,g=Math.max;f(d,b);var h=k(d);
return e(d,[{key:"toDebugString",value:function(){var a,b=["BigInt["],d=A(this);try{for(d.s();!(a=d.n()).done;){var c=a.value;b.push((c?(c>>>0).toString(16):c)+", ")}}catch(O){d.e(O)}finally{d.f()}return b.push("]"),b.join("")}},{key:"toString",value:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:10;if(2>a||36<a)throw new RangeError("toString() radix argument must be between 2 and 36");return 0===this.length?"0":0==(a&a-1)?d.__toStringBasePowerOfTwo(this,a):d.__toStringGeneric(this,
a,!1)}},{key:"__copy",value:function(){for(var a=new d(this.length,this.sign),b=0;b<this.length;b++)a[b]=this[b];return a}},{key:"__trim",value:function(){for(var a=this.length,b=this[a-1];0===b;)a--,b=this[a-1],this.pop();return 0===a&&(this.sign=!1),this}},{key:"__initializeDigits",value:function(){for(var a=0;a<this.length;a++)this[a]=0}},{key:"__clzmsd",value:function(){return d.__clz32(this[this.length-1])}},{key:"__inplaceMultiplyAdd",value:function(a,b,c){c>this.length&&(c=this.length);var e=
65535&a;a>>>=16;var k=0,f=65535&b;b>>>=16;for(var g=0;g<c;g++){var h=this.__digit(g),p=65535&h,l=h>>>16;h=d.__imul(p,e);p=d.__imul(p,a);var u=d.__imul(l,e);l=d.__imul(l,a);var y=f+(65535&h);h=b+k+(y>>>16)+(h>>>16)+(65535&p)+(65535&u);f=(p>>>16)+(u>>>16)+(65535&l)+(h>>>16);k=f>>>16;f&=65535;b=l>>>16;this.__setDigit(g,65535&y|h<<16)}if(0!==k||0!==f||0!==b)throw Error("implementation bug");}},{key:"__inplaceAdd",value:function(a,b,d){for(var c,e=0,k=0;k<d;k++)c=this.__halfDigit(b+k)+a.__halfDigit(k)+
e,e=c>>>16,this.__setHalfDigit(b+k,c);return e}},{key:"__inplaceSub",value:function(a,b,d){var c=0;if(1&b){b>>=1;for(var e=this.__digit(b),k=65535&e,f=0;f<d-1>>>1;f++){var g=a.__digit(f);e=(e>>>16)-(65535&g)-c;c=1&e>>>16;this.__setDigit(b+f,e<<16|65535&k);e=this.__digit(b+f+1);k=(65535&e)-(g>>>16)-c;c=1&k>>>16}g=a.__digit(f);var h=(e>>>16)-(65535&g)-c;c=1&h>>>16;this.__setDigit(b+f,h<<16|65535&k);if(b+f+1>=this.length)throw new RangeError("out of bounds");0==(1&d)&&(e=this.__digit(b+f+1),k=(65535&
e)-(g>>>16)-c,c=1&k>>>16,this.__setDigit(b+a.length,4294901760&e|65535&k))}else{b>>=1;for(k=0;k<a.length-1;k++)e=this.__digit(b+k),g=a.__digit(k),f=(65535&e)-(65535&g)-c,c=1&f>>>16,e=(e>>>16)-(g>>>16)-c,c=1&e>>>16,this.__setDigit(b+k,e<<16|65535&f);f=this.__digit(b+k);a=a.__digit(k);e=(65535&f)-(65535&a)-c;c=1&e>>>16;g=0;0==(1&d)&&(g=(f>>>16)-(a>>>16)-c,c=1&g>>>16);this.__setDigit(b+k,g<<16|65535&e)}return c}},{key:"__inplaceRightShift",value:function(a){if(0!==a){for(var b,d=this.__digit(0)>>>a,
c=this.length-1,e=0;e<c;e++)b=this.__digit(e+1),this.__setDigit(e,b<<32-a|d),d=b>>>a;this.__setDigit(c,d)}}},{key:"__digit",value:function(a){return this[a]}},{key:"__unsignedDigit",value:function(a){return this[a]>>>0}},{key:"__setDigit",value:function(a,b){this[a]=0|b}},{key:"__setDigitGrow",value:function(a,b){this[a]=0|b}},{key:"__halfDigitLength",value:function(){var a=this.length;return 65535>=this.__unsignedDigit(a-1)?2*a-1:2*a}},{key:"__halfDigit",value:function(a){return 65535&this[a>>>1]>>>
((1&a)<<4)}},{key:"__setHalfDigit",value:function(a,b){var d=a>>>1,c=this.__digit(d);this.__setDigit(d,1&a?65535&c|b<<16:4294901760&c|65535&b)}}],[{key:"BigInt",value:function(b){var c=Math.floor,e=Number.isFinite;if("number"==typeof b){if(0===b)return d.__zero();if((0|b)===b)return 0>b?d.__oneDigit(-b,!0):d.__oneDigit(b,!1);if(!e(b)||c(b)!==b)throw new RangeError("The number "+b+" cannot be converted to BigInt because it is not an integer");return d.__fromDouble(b)}if("string"==typeof b){c=d.__fromString(b);
if(null===c)throw new SyntaxError("Cannot convert "+b+" to a BigInt");return c}if("boolean"==typeof b)return!0===b?d.__oneDigit(1,!1):d.__zero();if("object"===a(b)){if(b.constructor===d)return b;b=d.__toPrimitive(b);return d.BigInt(b)}throw new TypeError("Cannot convert "+b+" to a BigInt");}},{key:"toNumber",value:function(a){var b=a.length;if(0===b)return 0;if(1===b){var c=a.__unsignedDigit(0);return a.sign?-c:c}var e=a.__digit(b-1),k=d.__clz32(e);c=32*b-k;if(1024<c)return a.sign?-Infinity:1/0;--c;
var f=b-1,g=k+1;k=(32===g?0:e<<g)>>>12;var h=g-12;b=12<=g?0:e<<20+g;g=20+g;0<h&&0<f&&(f--,e=a.__digit(f),k|=e>>>32-h,b=e<<h,g=h);0<g&&0<f&&(f--,e=a.__digit(f),b|=e>>>32-g,g-=32);e=d.__decideRounding(a,g,f,e);if((1===e||0===e&&1==(1&b))&&(b=b+1>>>0,0===b&&(k++,0!=k>>>20&&(k=0,c++,1023<c))))return a.sign?-Infinity:1/0;a=a.sign?-2147483648:0;return c=c+1023<<20,d.__kBitConversionInts[1]=a|c|k,d.__kBitConversionInts[0]=b,d.__kBitConversionDouble[0]}},{key:"unaryMinus",value:function(a){if(0===a.length)return a;
var b=a.__copy();return b.sign=!a.sign,b}},{key:"bitwiseNot",value:function(a){return a.sign?d.__absoluteSubOne(a).__trim():d.__absoluteAddOne(a,!0)}},{key:"exponentiate",value:function(a,b){if(b.sign)throw new RangeError("Exponent must be positive");if(0===b.length)return d.__oneDigit(1,!1);if(0===a.length)return a;if(1===a.length&&1===a.__digit(0))return a.sign&&0==(1&b.__digit(0))?d.unaryMinus(a):a;if(1<b.length)throw new RangeError("BigInt too big");b=b.__unsignedDigit(0);if(1===b)return a;if(b>=
d.__kMaxLengthBits)throw new RangeError("BigInt too big");if(1===a.length&&2===a.__digit(0)){var c=1+(b>>>5);a=new d(c,a.sign&&0!=(1&b));a.__initializeDigits();return a.__setDigit(c-1,1<<(31&b)),a}c=null;var e=a;0!=(1&b)&&(c=a);for(b>>=1;0!==b;b>>=1)e=d.multiply(e,e),0!=(1&b)&&(null===c?c=e:c=d.multiply(c,e));return c}},{key:"multiply",value:function(a,b){if(0===a.length)return a;if(0===b.length)return b;var c=a.length+b.length;32<=a.__clzmsd()+b.__clzmsd()&&c--;c=new d(c,a.sign!==b.sign);c.__initializeDigits();
for(var e=0;e<a.length;e++)d.__multiplyAccumulate(b,a.__digit(e),c,e);return c.__trim()}},{key:"divide",value:function(a,b){if(0===b.length)throw new RangeError("Division by zero");if(0>d.__absoluteCompare(a,b))return d.__zero();var c=a.sign!==b.sign,e=b.__unsignedDigit(0);if(1===b.length&&65535>=e){if(1===e)return c===a.sign?a:d.unaryMinus(a);a=d.__absoluteDivSmall(a,e,null)}else a=d.__absoluteDivLarge(a,b,!0,!1);return a.sign=c,a.__trim()}},{key:"remainder",value:function(a,b){if(0===b.length)throw new RangeError("Division by zero");
if(0>d.__absoluteCompare(a,b))return a;var c=b.__unsignedDigit(0);if(1===b.length&&65535>=c){if(1===c)return d.__zero();b=d.__absoluteModSmall(a,c);return 0===b?d.__zero():d.__oneDigit(b,a.sign)}b=d.__absoluteDivLarge(a,b,!1,!0);return b.sign=a.sign,b.__trim()}},{key:"add",value:function(a,b){var c=a.sign;return c===b.sign?d.__absoluteAdd(a,b,c):0<=d.__absoluteCompare(a,b)?d.__absoluteSub(a,b,c):d.__absoluteSub(b,a,!c)}},{key:"subtract",value:function(a,b){var c=a.sign;return c===b.sign?0<=d.__absoluteCompare(a,
b)?d.__absoluteSub(a,b,c):d.__absoluteSub(b,a,!c):d.__absoluteAdd(a,b,c)}},{key:"leftShift",value:function(a,b){return 0===b.length||0===a.length?a:b.sign?d.__rightShiftByAbsolute(a,b):d.__leftShiftByAbsolute(a,b)}},{key:"signedRightShift",value:function(a,b){return 0===b.length||0===a.length?a:b.sign?d.__leftShiftByAbsolute(a,b):d.__rightShiftByAbsolute(a,b)}},{key:"unsignedRightShift",value:function(){throw new TypeError("BigInts have no unsigned right shift; use >> instead");}},{key:"lessThan",
value:function(a,b){return 0>d.__compareToBigInt(a,b)}},{key:"lessThanOrEqual",value:function(a,b){return 0>=d.__compareToBigInt(a,b)}},{key:"greaterThan",value:function(a,b){return 0<d.__compareToBigInt(a,b)}},{key:"greaterThanOrEqual",value:function(a,b){return 0<=d.__compareToBigInt(a,b)}},{key:"equal",value:function(a,b){if(a.sign!==b.sign||a.length!==b.length)return!1;for(var d=0;d<a.length;d++)if(a.__digit(d)!==b.__digit(d))return!1;return!0}},{key:"notEqual",value:function(a,b){return!d.equal(a,
b)}},{key:"bitwiseAnd",value:function(a,b){if(!a.sign&&!b.sign)return d.__absoluteAnd(a,b).__trim();if(a.sign&&b.sign){var c=g(a.length,b.length)+1;a=d.__absoluteSubOne(a,c);b=d.__absoluteSubOne(b);return a=d.__absoluteOr(a,b,a),d.__absoluteAddOne(a,!0,a).__trim()}a.sign&&(b=[b,a],a=b[0],b=b[1]);return d.__absoluteAndNot(a,d.__absoluteSubOne(b)).__trim()}},{key:"bitwiseXor",value:function(a,b){if(!a.sign&&!b.sign)return d.__absoluteXor(a,b).__trim();if(a.sign&&b.sign){var c=g(a.length,b.length);a=
d.__absoluteSubOne(a,c);b=d.__absoluteSubOne(b);return d.__absoluteXor(a,b,a).__trim()}c=g(a.length,b.length)+1;a.sign&&(b=[b,a],a=b[0],b=b[1]);b=d.__absoluteSubOne(b,c);return b=d.__absoluteXor(b,a,b),d.__absoluteAddOne(b,!0,b).__trim()}},{key:"bitwiseOr",value:function(a,b){var c=g(a.length,b.length);if(!a.sign&&!b.sign)return d.__absoluteOr(a,b).__trim();if(a.sign&&b.sign)return a=d.__absoluteSubOne(a,c),b=d.__absoluteSubOne(b),a=d.__absoluteAnd(a,b,a),d.__absoluteAddOne(a,!0,a).__trim();a.sign&&
(b=[b,a],a=b[0],b=b[1]);b=d.__absoluteSubOne(b,c);return b=d.__absoluteAndNot(b,a,b),d.__absoluteAddOne(b,!0,b).__trim()}},{key:"asIntN",value:function(a,b){if(0===b.length)return b;if(0===a)return d.__zero();if(a>=d.__kMaxLengthBits)return b;var c=a+31>>>5;if(b.length<c)return b;var e=b.__unsignedDigit(c-1),k=1<<(31&a-1);if(b.length===c&&e<k)return b;if((e&k)!==k)return d.__truncateToNBits(a,b);if(!b.sign)return d.__truncateAndSubFromPowerOfTwo(a,b,!0);if(0==(e&k-1)){for(var f=c-2;0<=f;f--)if(0!==
b.__digit(f))return d.__truncateAndSubFromPowerOfTwo(a,b,!1);return b.length===c&&e===k?b:d.__truncateToNBits(a,b)}return d.__truncateAndSubFromPowerOfTwo(a,b,!1)}},{key:"asUintN",value:function(a,b){if(0===b.length)return b;if(0===a)return d.__zero();if(b.sign){if(a>d.__kMaxLengthBits)throw new RangeError("BigInt too big");return d.__truncateAndSubFromPowerOfTwo(a,b,!1)}if(a>=d.__kMaxLengthBits)return b;var c=a+31>>>5;if(b.length<c)return b;var e=31&a;return b.length!=c||0!==e&&0!=b.__digit(c-1)>>>
e?d.__truncateToNBits(a,b):b}},{key:"ADD",value:function(a,b){if(a=d.__toPrimitive(a),b=d.__toPrimitive(b),"string"==typeof a)return"string"!=typeof b&&(b=b.toString()),a+b;if("string"==typeof b)return a.toString()+b;if(a=d.__toNumeric(a),b=d.__toNumeric(b),d.__isBigInt(a)&&d.__isBigInt(b))return d.add(a,b);if("number"==typeof a&&"number"==typeof b)return a+b;throw new TypeError("Cannot mix BigInt and other types, use explicit conversions");}},{key:"LT",value:function(a,b){return d.__compare(a,b,
0)}},{key:"LE",value:function(a,b){return d.__compare(a,b,1)}},{key:"GT",value:function(a,b){return d.__compare(a,b,2)}},{key:"GE",value:function(a,b){return d.__compare(a,b,3)}},{key:"EQ",value:function(b,c){for(;;){if(d.__isBigInt(b))return d.__isBigInt(c)?d.equal(b,c):d.EQ(c,b);if("number"==typeof b){if(d.__isBigInt(c))return d.__equalToNumber(c,b);if("object"!==a(c))return b==c;c=d.__toPrimitive(c)}else if("string"==typeof b){if(d.__isBigInt(c))return b=d.__fromString(b),null!==b&&d.equal(b,c);
if("object"!==a(c))return b==c;c=d.__toPrimitive(c)}else if("boolean"==typeof b){if(d.__isBigInt(c))return d.__equalToNumber(c,+b);if("object"!==a(c))return b==c;c=d.__toPrimitive(c)}else if("symbol"===a(b)){if(d.__isBigInt(c))return!1;if("object"!==a(c))return b==c;c=d.__toPrimitive(c)}else if("object"===a(b)){if("object"===a(c)&&c.constructor!==d)return b==c;b=d.__toPrimitive(b)}else return b==c}}},{key:"NE",value:function(a,b){return!d.EQ(a,b)}},{key:"__zero",value:function(){return new d(0,!1)}},
{key:"__oneDigit",value:function(a,b){b=new d(1,b);return b.__setDigit(0,a),b}},{key:"__decideRounding",value:function(a,b,d,c){if(0<b)return-1;if(0>b)b=-b-1;else{if(0===d)return-1;d--;c=a.__digit(d);b=31}b=1<<b;if(0==(c&b))return-1;if(--b,0!=(c&b))return 1;for(;0<d;)if(d--,0!==a.__digit(d))return 1;return 0}},{key:"__fromDouble",value:function(a){d.__kBitConversionDouble[0]=a;var b=(2047&d.__kBitConversionInts[1]>>>20)-1023;var c=(b>>>5)+1;a=new d(c,0>a);var e=1048575&d.__kBitConversionInts[1]|1048576,
k=d.__kBitConversionInts[0];b&=31;if(20>b){var f=20-b;var g=f+32;b=e>>>f;e=e<<32-f|k>>>f;k<<=32-f}else 20===b?(g=32,b=e,e=k):(f=b-20,g=32-f,b=e<<f|k>>>32-f,e=k<<f);a.__setDigit(c-1,b);for(c-=2;0<=c;c--)0<g?(g-=32,b=e,e=k):b=0,a.__setDigit(c,b);return a.__trim()}},{key:"__isWhitespace",value:function(a){return!!(13>=a&&9<=a)||(159>=a?32==a:131071>=a?160==a||5760==a:196607>=a?(a&=131071,10>=a||40==a||41==a||47==a||95==a||4096==a):65279==a)}},{key:"__fromString",value:function(a){var b=1<arguments.length&&
void 0!==arguments[1]?arguments[1]:0,c=0,e=a.length,k=0;if(k===e)return d.__zero();for(var f=a.charCodeAt(k);d.__isWhitespace(f);){if(++k===e)return d.__zero();f=a.charCodeAt(k)}if(43===f){if(++k===e)return null;f=a.charCodeAt(k);c=1}else if(45===f){if(++k===e)return null;f=a.charCodeAt(k);c=-1}if(0===b){if(b=10,48===f){if(++k===e)return d.__zero();if(f=a.charCodeAt(k),88===f||120===f){if(b=16,++k===e)return null;f=a.charCodeAt(k)}else if(79===f||111===f){if(b=8,++k===e)return null;f=a.charCodeAt(k)}else if(66===
f||98===f){if(b=2,++k===e)return null;f=a.charCodeAt(k)}}}else if(16===b&&48===f){if(++k===e)return d.__zero();if(f=a.charCodeAt(k),88===f||120===f){if(++k===e)return null;f=a.charCodeAt(k)}}for(;48===f;){if(++k===e)return d.__zero();f=a.charCodeAt(k)}var g=e-k,h=d.__kMaxBitsPerChar[b],p=d.__kBitsPerCharTableMultiplier-1;if(g>1073741824/h)return null;g=new d((h*g+p>>>d.__kBitsPerCharTableShift)+31>>>5,!1);var l=10>b?b:10,y=10<b?b-10:0;if(0==(b&b-1)){h>>=d.__kBitsPerCharTableShift;var B=[],n=[],A=
!1;do{for(var w,E=p=0;;){if(f-48>>>0<l)w=f-48;else if((32|f)-97>>>0<y)w=(32|f)-87;else{A=!0;break}if(E+=h,p=p<<h|w,++k===e){A=!0;break}if(f=a.charCodeAt(k),32<E+h)break}B.push(p);n.push(E)}while(!A);d.__fillFromParts(g,B,n)}else{g.__initializeDigits();B=!1;n=0;do{A=0;for(w=1;;){if(f-48>>>0<l)p=f-48;else if((32|f)-97>>>0<y)p=(32|f)-87;else{B=!0;break}E=w*b;if(4294967295<E)break;if(w=E,A=A*b+p,n++,++k===e){B=!0;break}f=a.charCodeAt(k)}p=32*d.__kBitsPerCharTableMultiplier-1;g.__inplaceMultiplyAdd(w,
A,h*n+p>>>d.__kBitsPerCharTableShift+5)}while(!B)}if(k!==e){if(!d.__isWhitespace(f))return null;for(k++;k<e;k++)if(f=a.charCodeAt(k),!d.__isWhitespace(f))return null}return 0!==c&&10!==b?null:(g.sign=-1===c,g.__trim())}},{key:"__fillFromParts",value:function(a,b,d){for(var c=0,e=0,k=0,f=b.length-1;0<=f;f--){var g=b[f],h=d[f];e|=g<<k;k+=h;32===k?(a.__setDigit(c++,e),k=0,e=0):32<k&&(a.__setDigit(c++,e),k-=32,e=g>>>h-k)}if(0!==e){if(c>=a.length)throw Error("implementation bug");a.__setDigit(c++,e)}for(;c<
a.length;c++)a.__setDigit(c,0)}},{key:"__toStringBasePowerOfTwo",value:function(a,b){var c=a.length,e=b-1;e=(85&e>>>1)+(85&e);e=(51&e>>>2)+(51&e);e=(15&e>>>4)+(15&e);--b;var k=a.__digit(c-1),f=d.__clz32(k),g=0|(32*c-f+e-1)/e;if(a.sign&&g++,268435456<g)throw Error("string too long");f=Array(g);--g;for(var h=0,p=0,l=0;l<c-1;l++){var y=a.__digit(l);h=(h|y<<p)&b;f[g--]=d.__kConversionChars[h];p=e-p;h=y>>>p;for(p=32-p;p>=e;)f[g--]=d.__kConversionChars[h&b],h>>>=e,p-=e}f[g--]=d.__kConversionChars[(h|k<<
p)&b];for(h=k>>>e-p;0!==h;)f[g--]=d.__kConversionChars[h&b],h>>>=e;if(a.sign&&(f[g--]="-"),-1!==g)throw Error("implementation bug");return f.join("")}},{key:"__toStringGeneric",value:function(a,b,c){var e=a.length;if(0===e)return"";if(1===e)return b=a.__unsignedDigit(0).toString(b),!1===c&&a.sign&&(b="-"+b),b;var k=32*e-d.__clz32(a.__digit(e-1));e=d.__kMaxBitsPerChar[b]-1;k*=d.__kBitsPerCharTableMultiplier;e=(0|(k+(e-1))/e)+1>>1;k=d.exponentiate(d.__oneDigit(b,!1),d.__oneDigit(e,!1));var f=k.__unsignedDigit(0);
if(1===k.length&&65535>=f){k=new d(a.length,!1);k.__initializeDigits();var g=0;for(var h=2*a.length-1;0<=h;h--)g=g<<16|a.__halfDigit(h),k.__setHalfDigit(h,0|g/f),g=0|g%f;f=g.toString(b)}else f=d.__absoluteDivLarge(a,k,!0,!0),k=f.quotient,f=f.remainder.__trim(),f=d.__toStringGeneric(f,b,!0);k.__trim();for(b=d.__toStringGeneric(k,b,!0);f.length<e;)f="0"+f;return!1===c&&a.sign&&(b="-"+b),b+f}},{key:"__unequalSign",value:function(a){return a?-1:1}},{key:"__absoluteGreater",value:function(a){return a?
-1:1}},{key:"__absoluteLess",value:function(a){return a?1:-1}},{key:"__compareToBigInt",value:function(a,b){var c=a.sign;if(c!==b.sign)return d.__unequalSign(c);a=d.__absoluteCompare(a,b);return 0<a?d.__absoluteGreater(c):0>a?d.__absoluteLess(c):0}},{key:"__compareToNumber",value:function(a,b){if(1|b){var e=a.sign,k=0>b;if(e!==k)return d.__unequalSign(e);if(0===a.length){if(k)throw Error("implementation bug");return 0===b?0:-1}if(1<a.length)return d.__absoluteGreater(e);b=c(b);a=a.__unsignedDigit(0);
return a>b?d.__absoluteGreater(e):a<b?d.__absoluteLess(e):0}return d.__compareToDouble(a,b)}},{key:"__compareToDouble",value:function(a,b){if(b!==b)return b;if(b===1/0)return-1;if(-Infinity===b)return 1;var c=a.sign;if(c!==0>b)return d.__unequalSign(c);if(0===b)throw Error("implementation bug: should be handled elsewhere");if(0===a.length)return-1;d.__kBitConversionDouble[0]=b;b=2047&d.__kBitConversionInts[1]>>>20;if(2047==b)throw Error("implementation bug: handled elsewhere");var e=b-1023;if(0>e)return d.__absoluteGreater(c);
b=a.length;var k=a.__digit(b-1),f=d.__clz32(k),g=32*b-f;e+=1;if(g<e)return d.__absoluteLess(c);if(g>e)return d.__absoluteGreater(c);e=1048576|1048575&d.__kBitConversionInts[1];var h=d.__kBitConversionInts[0];f=31-f;if(f!==(g-1)%31)throw Error("implementation bug");if(20>f){var p=20-f;f=p+32;g=e>>>p;e=e<<32-p|h>>>p;h<<=32-p}else 20===f?(f=32,g=e,e=h):(p=f-20,f=32-p,g=e<<p|h>>>32-p,e=h<<p);if(k>>>=0,g>>>=0,k>g)return d.__absoluteGreater(c);if(k<g)return d.__absoluteLess(c);for(b-=2;0<=b;b--){0<f?(f-=
32,g=e>>>0,e=h,h=0):g=0;k=a.__unsignedDigit(b);if(k>g)return d.__absoluteGreater(c);if(k<g)return d.__absoluteLess(c)}if(0!==e||0!==h){if(0===f)throw Error("implementation bug");return d.__absoluteLess(c)}return 0}},{key:"__equalToNumber",value:function(a,b){return b|0===b?0===b?0===a.length:1===a.length&&a.sign===0>b&&a.__unsignedDigit(0)===c(b):0===d.__compareToDouble(a,b)}},{key:"__comparisonResultToBool",value:function(a,b){switch(b){case 0:return 0>a;case 1:return 0>=a;case 2:return 0<a;case 3:return 0<=
a}throw Error("unreachable");}},{key:"__compare",value:function(a,b,c){if(a=d.__toPrimitive(a),b=d.__toPrimitive(b),"string"==typeof a&&"string"==typeof b)switch(c){case 0:return a<b;case 1:return a<=b;case 2:return a>b;case 3:return a>=b}if(d.__isBigInt(a)&&"string"==typeof b)return b=d.__fromString(b),null!==b&&d.__comparisonResultToBool(d.__compareToBigInt(a,b),c);if("string"==typeof a&&d.__isBigInt(b))return a=d.__fromString(a),null!==a&&d.__comparisonResultToBool(d.__compareToBigInt(a,b),c);
if(a=d.__toNumeric(a),b=d.__toNumeric(b),d.__isBigInt(a)){if(d.__isBigInt(b))return d.__comparisonResultToBool(d.__compareToBigInt(a,b),c);if("number"!=typeof b)throw Error("implementation bug");return d.__comparisonResultToBool(d.__compareToNumber(a,b),c)}if("number"!=typeof a)throw Error("implementation bug");if(d.__isBigInt(b))return d.__comparisonResultToBool(d.__compareToNumber(b,a),2^c);if("number"!=typeof b)throw Error("implementation bug");return 0===c?a<b:1===c?a<=b:2===c?a>b:3===c?a>=b:
void 0}},{key:"__absoluteAdd",value:function(a,b,c){if(a.length<b.length)return d.__absoluteAdd(b,a,c);if(0===a.length)return a;if(0===b.length)return a.sign===c?a:d.unaryMinus(a);var e=a.length;(0===a.__clzmsd()||b.length===a.length&&0===b.__clzmsd())&&e++;c=new d(e,c);for(var k=e=0;k<b.length;k++){var f=b.__digit(k),g=a.__digit(k),h=(65535&g)+(65535&f)+e;f=(g>>>16)+(f>>>16)+(h>>>16);e=f>>>16;c.__setDigit(k,65535&h|f<<16)}for(;k<a.length;k++)h=a.__digit(k),b=(65535&h)+e,h=(h>>>16)+(b>>>16),e=h>>>
16,c.__setDigit(k,65535&b|h<<16);return k<c.length&&c.__setDigit(k,e),c.__trim()}},{key:"__absoluteSub",value:function(a,b,c){if(0===a.length)return a;if(0===b.length)return a.sign===c?a:d.unaryMinus(a);c=new d(a.length,c);for(var e=0,k=0;k<b.length;k++){var f=a.__digit(k),g=b.__digit(k),h=(65535&f)-(65535&g)-e;e=1&h>>>16;f=(f>>>16)-(g>>>16)-e;e=1&f>>>16;c.__setDigit(k,65535&h|f<<16)}for(;k<a.length;k++)h=a.__digit(k),b=(65535&h)-e,e=1&b>>>16,h=(h>>>16)-e,e=1&h>>>16,c.__setDigit(k,65535&b|h<<16);
return c.__trim()}},{key:"__absoluteAddOne",value:function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,e=a.length;null===c?c=new d(e,b):c.sign=b;for(var k,f=!0,g=0;g<e;g++){if(k=a.__digit(g),f)f=-1===k,k=0|k+1;c.__setDigit(g,k)}return f&&c.__setDigitGrow(e,1),c}},{key:"__absoluteSubOne",value:function(a,b){var c=a.length;b=b||c;for(var e,k=new d(b,!1),f=!0,g=0;g<c;g++){if(e=a.__digit(g),f)f=0===e,e=0|e-1;k.__setDigit(g,e)}if(f)throw Error("implementation bug");for(a=c;a<
b;a++)k.__setDigit(a,0);return k}},{key:"__absoluteAnd",value:function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,e=a.length,k=b.length,f=k;e<k&&(f=e,e=a,a=b,b=e);e=f;null===c?c=new d(e,!1):e=c.length;for(k=0;k<f;k++)c.__setDigit(k,a.__digit(k)&b.__digit(k));for(;k<e;k++)c.__setDigit(k,0);return c}},{key:"__absoluteAndNot",value:function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,e=a.length,k=b.length,f=k;e<k&&(f=e);k=e;null===c?c=new d(k,!1):
k=c.length;for(var g=0;g<f;g++)c.__setDigit(g,a.__digit(g)&~b.__digit(g));for(;g<e;g++)c.__setDigit(g,a.__digit(g));for(;g<k;g++)c.__setDigit(g,0);return c}},{key:"__absoluteOr",value:function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,e=a.length,k=b.length,f=k;if(e<k){f=e;var g=a;a=b;e=k;b=g}k=e;null===c?c=new d(k,!1):k=c.length;for(g=0;g<f;g++)c.__setDigit(g,a.__digit(g)|b.__digit(g));for(;g<e;g++)c.__setDigit(g,a.__digit(g));for(;g<k;g++)c.__setDigit(g,0);return c}},
{key:"__absoluteXor",value:function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,e=a.length,k=b.length,f=k;if(e<k){f=e;var g=a;a=b;e=k;b=g}k=e;null===c?c=new d(k,!1):k=c.length;for(g=0;g<f;g++)c.__setDigit(g,a.__digit(g)^b.__digit(g));for(;g<e;g++)c.__setDigit(g,a.__digit(g));for(;g<k;g++)c.__setDigit(g,0);return c}},{key:"__absoluteCompare",value:function(a,b){var d=a.length-b.length;if(0!=d)return d;for(d=a.length-1;0<=d&&a.__digit(d)===b.__digit(d);)d--;return 0>d?0:a.__unsignedDigit(d)>
b.__unsignedDigit(d)?1:-1}},{key:"__multiplyAccumulate",value:function(a,b,c,e){if(0!==b){for(var k=65535&b,f=b>>>16,g=b=0,h=0,p=0;p<a.length;p++,e++){var l=c.__digit(e),y=65535&l;l>>>=16;var B=a.__digit(p),n=65535&B,A=B>>>16;B=d.__imul(n,k);n=d.__imul(n,f);var u=d.__imul(A,k);A=d.__imul(A,f);y+=g+(65535&B);l+=h+b+(y>>>16)+(B>>>16)+(65535&n)+(65535&u);b=l>>>16;g=(n>>>16)+(u>>>16)+(65535&A)+b;b=g>>>16;g&=65535;h=A>>>16;l=65535&y|l<<16;c.__setDigit(e,l)}for(;0!==b||0!==g||0!==h;e++)k=c.__digit(e),a=
(65535&k)+g,k=(k>>>16)+(a>>>16)+h+b,h=g=0,b=k>>>16,k=65535&a|k<<16,c.__setDigit(e,k)}}},{key:"__internalMultiplyAdd",value:function(a,b,c,e,k){for(var f=0,g=0;g<e;g++){var h=a.__digit(g),p=d.__imul(65535&h,b),l=(65535&p)+f+c;c=l>>>16;f=d.__imul(h>>>16,b);p=(65535&f)+(p>>>16)+c;c=p>>>16;f>>>=16;k.__setDigit(g,p<<16|65535&l)}if(k.length>e)for(k.__setDigit(e++,c+f);e<k.length;)k.__setDigit(e++,0);else if(0!==c+f)throw Error("implementation bug");}},{key:"__absoluteDivSmall",value:function(a,b,c){null===
c&&(c=new d(a.length,!1));for(var e=0,k=2*a.length-1;0<=k;k-=2){e=(e<<16|a.__halfDigit(k))>>>0;var f=0|e/b;e=0|e%b;e=(e<<16|a.__halfDigit(k-1))>>>0;var g=0|e/b;e=0|e%b;c.__setDigit(k>>>1,f<<16|g)}return c}},{key:"__absoluteModSmall",value:function(a,b){var d=0;for(var c=2*a.length-1;0<=c;c--)d=(d<<16|a.__halfDigit(c))>>>0,d=0|d%b;return d}},{key:"__absoluteDivLarge",value:function(a,b,c,e){var k=b.__halfDigitLength(),f=b.length,g=a.__halfDigitLength()-k,h=null;c&&(h=new d(g+2>>>1,!1),h.__initializeDigits());
var p=new d(k+2>>>1,!1);p.__initializeDigits();var l=d.__clz16(b.__halfDigit(k-1));0<l&&(b=d.__specialLeftShift(b,l,0));a=d.__specialLeftShift(a,l,1);for(var y=b.__halfDigit(k-1),B=0;0<=g;g--){var n=65535,A=a.__halfDigit(g+k);if(A!==y){A=(A<<16|a.__halfDigit(g+k-1))>>>0;n=0|A/y;A=0|A%y;for(var u=b.__halfDigit(k-2),w=a.__halfDigit(g+k-2);d.__imul(n,u)>>>0>(A<<16|w)>>>0&&(n--,A+=y,!(65535<A)););}d.__internalMultiplyAdd(b,n,0,f,p);A=a.__inplaceSub(p,g,k+1);0!==A&&(A=a.__inplaceAdd(b,g,k),a.__setHalfDigit(g+
k,a.__halfDigit(g+k)+A),n--);c&&(1&g?B=n<<16:h.__setDigit(g>>>1,B|n))}return e?(a.__inplaceRightShift(l),c?{quotient:h,remainder:a}:a):c?h:void 0}},{key:"__clz16",value:function(a){return d.__clz32(a)-16}},{key:"__specialLeftShift",value:function(a,b,c){var e=a.length,k=new d(e+c,!1);if(0===b){for(b=0;b<e;b++)k.__setDigit(b,a.__digit(b));return 0<c&&k.__setDigit(e,0),k}for(var f,g=0,h=0;h<e;h++)f=a.__digit(h),k.__setDigit(h,f<<b|g),g=f>>>32-b;return 0<c&&k.__setDigit(e,g),k}},{key:"__leftShiftByAbsolute",
value:function(a,b){var c=d.__toShiftAmount(b);if(0>c)throw new RangeError("BigInt too big");b=c>>>5;var e=31&c,k=a.length,f=0!==e&&0!=a.__digit(k-1)>>>32-e,g=k+b+(f?1:0);c=new d(g,a.sign);if(0===e){for(e=0;e<b;e++)c.__setDigit(e,0);for(;e<g;e++)c.__setDigit(e,a.__digit(e-b))}else{for(var h=g=0;h<b;h++)c.__setDigit(h,0);for(var p=0;p<k;p++)h=a.__digit(p),c.__setDigit(p+b,h<<e|g),g=h>>>32-e;if(f)c.__setDigit(k+b,g);else if(0!==g)throw Error("implementation bug");}return c.__trim()}},{key:"__rightShiftByAbsolute",
value:function(a,b){var c=a.length,e=a.sign,k=d.__toShiftAmount(b);if(0>k)return d.__rightShiftByMaximum(e);b=k>>>5;var f=31&k,g=c-b;if(0>=g)return d.__rightShiftByMaximum(e);k=!1;if(e)if(0!=(a.__digit(b)&(1<<f)-1))k=!0;else for(var h=0;h<b;h++)if(0!==a.__digit(h)){k=!0;break}k&&0===f&&0==~a.__digit(c-1)&&g++;e=new d(g,e);if(0===f)for(f=b;f<c;f++)e.__setDigit(f-b,a.__digit(f));else{g=a.__digit(b)>>>f;h=c-b-1;for(var p=0;p<h;p++)c=a.__digit(p+b+1),e.__setDigit(p,c<<32-f|g),g=c>>>f;e.__setDigit(h,g)}return k&&
(e=d.__absoluteAddOne(e,!0,e)),e.__trim()}},{key:"__rightShiftByMaximum",value:function(a){return a?d.__oneDigit(1,!0):d.__zero()}},{key:"__toShiftAmount",value:function(a){if(1<a.length)return-1;a=a.__unsignedDigit(0);return a>d.__kMaxLengthBits?-1:a}},{key:"__toPrimitive",value:function(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"default";if("object"!==a(b)||b.constructor===d)return b;var e=b[Symbol.toPrimitive];if(e){c=e(c);if("object"!==a(c))return c;throw new TypeError("Cannot convert object to primitive value");
}if(c=b.valueOf)if(c=c.call(b),"object"!==a(c))return c;if(c=b.toString)if(c=c.call(b),"object"!==a(c))return c;throw new TypeError("Cannot convert object to primitive value");}},{key:"__toNumeric",value:function(a){return d.__isBigInt(a)?a:+a}},{key:"__isBigInt",value:function(b){return"object"===a(b)&&b.constructor===d}},{key:"__truncateToNBits",value:function(a,b){var c=a+31>>>5,e=new d(c,b.sign);--c;for(var k=0;k<c;k++)e.__setDigit(k,b.__digit(k));b=b.__digit(c);0!=(31&a)&&(a=32-(31&a),b=b<<a>>>
a);return e.__setDigit(c,b),e.__trim()}},{key:"__truncateAndSubFromPowerOfTwo",value:function(a,b,c){var e=Math.min,k=a+31>>>5;c=new d(k,c);var f=0;--k;var g=0;for(e=e(k,b.length);f<e;f++){var h=b.__digit(f),p=-(65535&h)-g;g=1&p>>>16;h=-(h>>>16)-g;g=1&h>>>16;c.__setDigit(f,65535&p|h<<16)}for(;f<k;f++)c.__setDigit(f,0|-g);b=k<b.length?b.__digit(k):0;a&=31;0===a?(g=-(65535&b)-g,g=65535&g|-(b>>>16)-(1&g>>>16)<<16):(a=32-a,b=b<<a>>>a,a=1<<32-a,g=(65535&a)-(65535&b)-g,g=(65535&g|(a>>>16)-(b>>>16)-(1&g>>>
16)<<16)&a-1);return c.__setDigit(k,g),c.__trim()}},{key:"__digitPow",value:function(a,b){for(var d=1;0<b;)1&b&&(d*=a),b>>>=1,a*=a;return d}}]),d}(n(Array));return B.__kMaxLength=33554432,B.__kMaxLengthBits=B.__kMaxLength<<5,B.__kMaxBitsPerChar=[0,0,32,51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,165,166],B.__kBitsPerCharTableShift=5,B.__kBitsPerCharTableMultiplier=1<<B.__kBitsPerCharTableShift,B.__kConversionChars="0123456789abcdefghijklmnopqrstuvwxyz".split(""),
B.__kBitConversionBuffer=new ArrayBuffer(8),B.__kBitConversionDouble=new Float64Array(B.__kBitConversionBuffer),B.__kBitConversionInts=new Int32Array(B.__kBitConversionBuffer),B.__clz32=y||function(a){var b=Math.LN2,d=Math.log;return 0===a?32:0|31-(0|d(a>>>0)/b)},B.__imul=t||function(a,b){return 0|a*b},B})},function(m,q,a){(function(a,b){(function(a,c){function e(a){delete t[a]}function f(a){if(y)setTimeout(f,0,a);else{var b=t[a];if(b){y=!0;try{var d=b.callback,k=b.args;switch(k.length){case 0:d();
break;case 1:d(k[0]);break;case 2:d(k[0],k[1]);break;case 3:d(k[0],k[1],k[2]);break;default:d.apply(c,k)}}finally{e(a),y=!1}}}}function d(){E=function(a){b.nextTick(function(){f(a)})}}function g(){if(a.postMessage&&!a.importScripts){var b=!0,d=a.onmessage;a.onmessage=function(){b=!1};a.postMessage("","*");a.onmessage=d;return b}}function n(){var b="setImmediate$"+Math.random()+"$",d=function(d){d.source===a&&"string"===typeof d.data&&0===d.data.indexOf(b)&&f(+d.data.slice(b.length))};a.addEventListener?
a.addEventListener("message",d,!1):a.attachEvent("onmessage",d);E=function(d){a.postMessage(b+d,"*")}}function k(){var a=new MessageChannel;a.port1.onmessage=function(a){f(a.data)};E=function(b){a.port2.postMessage(b)}}function p(){var a=B.documentElement;E=function(b){var d=B.createElement("script");d.onreadystatechange=function(){f(b);d.onreadystatechange=null;a.removeChild(d);d=null};a.appendChild(d)}}function w(){E=function(a){setTimeout(f,0,a)}}if(!a.setImmediate){var A=1,t={},y=!1,B=a.document,
E,F=Object.getPrototypeOf&&Object.getPrototypeOf(a);F=F&&F.setTimeout?F:a;"[object process]"==={}.toString.call(a.process)?d():g()?n():a.MessageChannel?k():B&&"onreadystatechange"in B.createElement("script")?p():w();F.setImmediate=function(a){"function"!==typeof a&&(a=new Function(""+a));for(var b=Array(arguments.length-1),d=0;d<b.length;d++)b[d]=arguments[d+1];t[A]={callback:a,args:b};E(A);return A++};F.clearImmediate=e}})("undefined"===typeof self?"undefined"===typeof a?this:a:self)}).call(this,
a(0),a(8))},function(m,q){function a(){throw Error("setTimeout has not been defined");}function c(){throw Error("clearTimeout has not been defined");}function b(b){if(g===setTimeout)return setTimeout(b,0);if((g===a||!g)&&setTimeout)return g=setTimeout,setTimeout(b,0);try{return g(b,0)}catch(y){try{return g.call(null,b,0)}catch(B){return g.call(this,b,0)}}}function e(a){if(n===clearTimeout)return clearTimeout(a);if((n===c||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(a);try{return n(a)}catch(y){try{return n.call(null,
a)}catch(B){return n.call(this,a)}}}function f(){p&&w&&(p=!1,w.length?k=w.concat(k):A=-1,k.length&&l())}function l(){if(!p){var a=b(f);p=!0;for(var d=k.length;d;){w=k;for(k=[];++A<d;)w&&w[A].run();A=-1;d=k.length}w=null;p=!1;e(a)}}function h(a,b){this.fun=a;this.array=b}function d(){}m=m.exports={};try{var g="function"===typeof setTimeout?setTimeout:a}catch(t){g=a}try{var n="function"===typeof clearTimeout?clearTimeout:c}catch(t){n=c}var k=[],p=!1,w,A=-1;m.nextTick=function(a){var d=Array(arguments.length-
1);if(1<arguments.length)for(var c=1;c<arguments.length;c++)d[c-1]=arguments[c];k.push(new h(a,d));1!==k.length||p||b(l)};h.prototype.run=function(){this.fun.apply(null,this.array)};m.title="browser";m.browser=!0;m.env={};m.argv=[];m.version="";m.versions={};m.on=d;m.addListener=d;m.once=d;m.off=d;m.removeListener=d;m.removeAllListeners=d;m.emit=d;m.prependListener=d;m.prependOnceListener=d;m.listeners=function(a){return[]};m.binding=function(a){throw Error("process.binding is not supported");};m.cwd=
function(){return"/"};m.chdir=function(a){throw Error("process.chdir is not supported");};m.umask=function(){return 0}},function(m,q){Sk.asserts={};Sk.asserts.assert=function(a,c){return a};Sk.exportSymbol("Sk.asserts.assert",Sk.asserts.assert);Sk.asserts.fail=function(a){};Sk.exportSymbol("Sk.asserts.fail",Sk.asserts.fail)},function(m,q){Sk.bool_check=function(a,c){if(void 0===a||null===a||"boolean"!==typeof a)throw Error("must specify "+c+" and it must be a boolean");};Sk.python2={print_function:!1,
division:!1,absolute_import:null,unicode_literals:!1,python3:!1,class_repr:!1,inherit_from_object:!1,super_args:!1,octal_number_literal:!1,bankers_rounding:!1,python_version:!1,dunder_round:!1,exceptions:!1,no_long_type:!1,ceil_floor_int:!1,silent_octal_literal:!0};Sk.python3={print_function:!0,division:!0,absolute_import:null,unicode_literals:!0,python3:!0,class_repr:!0,inherit_from_object:!0,super_args:!0,octal_number_literal:!0,bankers_rounding:!0,python_version:!0,dunder_round:!0,exceptions:!0,
no_long_type:!0,ceil_floor_int:!0,silent_octal_literal:!1};Sk.configure=function(a){Sk.output=a.output||Sk.output;Sk.asserts.assert("function"===typeof Sk.output);Sk.debugout=a.debugout||Sk.debugout;Sk.asserts.assert("function"===typeof Sk.debugout);Sk.uncaughtException=a.uncaughtException||Sk.uncaughtException;Sk.asserts.assert("function"===typeof Sk.uncaughtException);Sk.read=a.read||Sk.read;Sk.asserts.assert("function"===typeof Sk.read);Sk.nonreadopen=a.nonreadopen||!1;Sk.asserts.assert("boolean"===
typeof Sk.nonreadopen);Sk.fileopen=a.fileopen||void 0;Sk.asserts.assert("function"===typeof Sk.fileopen||"undefined"===typeof Sk.fileopen);Sk.filewrite=a.filewrite||void 0;Sk.asserts.assert("function"===typeof Sk.filewrite||"undefined"===typeof Sk.filewrite);Sk.timeoutMsg=a.timeoutMsg||Sk.timeoutMsg;Sk.asserts.assert("function"===typeof Sk.timeoutMsg);Sk.exportSymbol("Sk.timeoutMsg",Sk.timeoutMsg);Sk.sysargv=a.sysargv||Sk.sysargv;Sk.asserts.assert(Sk.isArrayLike(Sk.sysargv));Sk.__future__=a.__future__||
Sk.python3;Sk.bool_check(Sk.__future__.print_function,"Sk.__future__.print_function");Sk.bool_check(Sk.__future__.division,"Sk.__future__.division");Sk.bool_check(Sk.__future__.unicode_literals,"Sk.__future__.unicode_literals");Sk.bool_check(Sk.__future__.class_repr,"Sk.__future__.class_repr");Sk.bool_check(Sk.__future__.inherit_from_object,"Sk.__future__.inherit_from_object");Sk.bool_check(Sk.__future__.super_args,"Sk.__future__.super_args");Sk.bool_check(Sk.__future__.octal_number_literal,"Sk.__future__.octal_number_literal");
Sk.bool_check(Sk.__future__.bankers_rounding,"Sk.__future__.bankers_rounding");Sk.bool_check(Sk.__future__.python_version,"Sk.__future__.python_version");Sk.bool_check(Sk.__future__.dunder_round,"Sk.__future__.dunder_round");Sk.bool_check(Sk.__future__.exceptions,"Sk.__future__.exceptions");Sk.bool_check(Sk.__future__.no_long_type,"Sk.__future__.no_long_type");Sk.bool_check(Sk.__future__.ceil_floor_int,"Sk.__future__.ceil_floor_int");Sk.bool_check(Sk.__future__.silent_octal_literal,"Sk.__future__.silent_octal_literal");
Sk.imageProxy=a.imageProxy||"http://localhost:8080/320x";Sk.asserts.assert("string"===typeof Sk.imageProxy||"function"===typeof Sk.imageProxy);Sk.inputfun=a.inputfun||Sk.inputfun;Sk.asserts.assert("function"===typeof Sk.inputfun);Sk.inputfunTakesPrompt=a.inputfunTakesPrompt||!1;Sk.asserts.assert("boolean"===typeof Sk.inputfunTakesPrompt);Sk.retainGlobals=a.retainglobals||a.retainGlobals||!1;Sk.asserts.assert("boolean"===typeof Sk.retainGlobals);Sk.debugging=a.debugging||!1;Sk.asserts.assert("boolean"===
typeof Sk.debugging);Sk.killableWhile=a.killableWhile||!1;Sk.asserts.assert("boolean"===typeof Sk.killableWhile);Sk.killableFor=a.killableFor||!1;Sk.asserts.assert("boolean"===typeof Sk.killableFor);Sk.signals=a.signals;Sk.signals=!0===Sk.signals?{listeners:[],addEventListener(a){Sk.signals.listeners.push(a)},removeEventListener(a){a=Sk.signals.listeners.indexOf(a);0<=a&&Sk.signals.listeners.splice(a,1)},signal(a,b){for(var c=0;c<Sk.signals.listeners.length;c++)Sk.signals.listeners[c].call(null,a,
b)}}:null;Sk.asserts.assert("object"===typeof Sk.signals);Sk.breakpoints=a.breakpoints||function(){return!0};Sk.asserts.assert("function"===typeof Sk.breakpoints);Sk.setTimeout=a.setTimeout;void 0===Sk.setTimeout&&(Sk.setTimeout="function"===typeof setTimeout?function(a,b){setTimeout(a,b)}:function(a,b){a()});Sk.asserts.assert("function"===typeof Sk.setTimeout);"execLimit"in a&&(Sk.execLimit=a.execLimit);"yieldLimit"in a&&(Sk.yieldLimit=a.yieldLimit);a.syspath&&(Sk.syspath=a.syspath,Sk.asserts.assert(Sk.isArrayLike(Sk.syspath)),
Sk.realsyspath=void 0,Sk.sysmodules=new Sk.builtin.dict([]));Sk.misceval.softspace_=!1;Sk.switch_version(Sk.__future__.python3);Sk.builtin.str.$next=Sk.__future__.python3?new Sk.builtin.str("__next__"):new Sk.builtin.str("next");Sk.setupOperators(Sk.__future__.python3);Sk.setupDunderMethods(Sk.__future__.python3);Sk.setupObjects(Sk.__future__.python3);Sk.token.setupTokens(Sk.__future__.python3)};Sk.exportSymbol("Sk.configure",Sk.configure);Sk.uncaughtException=function(a){throw a;};Sk.uncaughtException=
function(a){throw a;};Sk.exportSymbol("Sk.uncaughtException",Sk.uncaughtException);Sk.timeoutMsg=function(){return"Program exceeded run time limit."};Sk.exportSymbol("Sk.timeoutMsg",Sk.timeoutMsg);Sk.execLimit=Number.POSITIVE_INFINITY;Sk.yieldLimit=Number.POSITIVE_INFINITY;Sk.output=function(a){};Sk.read=function(a){if(void 0===Sk.builtinFiles)throw"skulpt-stdlib.js has not been loaded";if(void 0===Sk.builtinFiles.files[a])throw"File not found: '"+a+"'";return Sk.builtinFiles.files[a]};Sk.sysargv=
[];Sk.getSysArgv=function(){return Sk.sysargv};Sk.exportSymbol("Sk.getSysArgv",Sk.getSysArgv);Sk.syspath=[];Sk.inBrowser=void 0!==Sk.global.document;Sk.debugout=function(a){};(function(){void 0!==Sk.global.write?Sk.output=Sk.global.write:void 0!==Sk.global.console&&void 0!==Sk.global.console.log?Sk.output=function(a){Sk.global.console.log(a)}:void 0!==Sk.global.print&&(Sk.output=Sk.global.print);void 0!==Sk.global.console&&void 0!==Sk.global.console.log?Sk.debugout=function(a){Sk.global.console.log(a)}:
void 0!==Sk.global.print&&(Sk.debugout=Sk.global.print)})();Sk.inputfun=function(a){return window.prompt(a)};Sk.setup_method_mappings=function(){};Sk.setupDictIterators=function(a){};Sk.switch_version=function(a){const c={float_:{method_names:["__round__"],2:[!1],3:[!0]},int_:{method_names:["__round__"],2:[!1],3:[!0]},list:{method_names:["clear","copy","sort"],2:[!1,!1,!0],3:[!0,!0,!0]},dict:{method_names:["has_key","keys","items","values"],2:[!0,!0,!0,!0],3:[!1,!0,!0,!0]}};for(let l in c){const h=
Sk.builtin[l],d=c[l].method_names;var b=c[l][3];if(a&&void 0===h.py3$methods)break;else if(void 0===h.py3$methods){h.py3$methods={};for(var e=0;e<d.length;e++){var f=d[e];b[e]&&(h.py3$methods[f]=h.prototype[f].d$def)}}a?e=h.py3$methods:(b=c[l][2],e=h.py2$methods);for(f=0;f<d.length;f++){const a=d[f];delete h.prototype[a];b[f]&&(h.prototype[a]=new Sk.builtin.method_descriptor(h,e[a]))}}};Sk.exportSymbol("Sk.__future__",Sk.__future__);Sk.exportSymbol("Sk.inputfun",Sk.inputfun)},function(m,q){function a(a){return this.prototype[a.$mangled]}
function c(a){a=a.$mangled;const b=this.prototype.tp$mro;for(let d=0;d<b.length;++d){const c=b[d].prototype;if(c.hasOwnProperty(a))return c[a]}}function b(b,f,h,k){const d=e(h),g=f.prototype;Sk.abstr.setUpInheritance(b,f,d,k);Object.defineProperties(g,{sk$prototypical:{value:!0,writable:!0},tp$bases:{value:h,writable:!0},tp$mro:{value:null,writable:!0},hp$type:{value:!0,writable:!0}});g.tp$mro=f.$buildMRO();Object.defineProperties(f,{$typeLookup:{value:g.sk$prototypical?a:c,writable:!0},sk$klass:{value:!0,
writable:!0}})}function e(a){function b(a){return void 0===a.sk$klass?a:b(a.prototype.tp$base)}0===a.length&&a.push(Sk.builtin.object);let d,c,e,f;for(let k=0;k<a.length;k++){f=a[k];if(!Sk.builtin.checkClass(f))throw new Sk.builtin.TypeError("bases must be 'type' objects");if(!1===f.sk$acceptable_as_base_class)throw new Sk.builtin.TypeError("type '"+f.prototype.tp$name+"' is not an acceptable base type");e=b(f);if(void 0===c)c=e,d=f;else if(!c.$isSubType(e))if(e.$isSubType(c))c=e,d=f;else throw new Sk.builtin.TypeError("multiple bases have instance layout conflicts");
}return d}function f(a){for(;null!==a.prototype.tp$base;){if(void 0===a.sk$klass&&a.prototype.hasOwnProperty("__dict__"))return a=a.prototype.__dict__,Sk.builtin.checkDataDescr(a)?a:void 0;a=a.prototype.tp$base}}function l(a,b,c){if(void 0===a.sk$klass)throw new Sk.builtin.TypeError("can't set "+a.prototype.tp$name+"."+c.$jsstr());if(void 0===b)throw new Sk.builtin.TypeError("can't delete "+a.prototype.tp$name+"."+c.$jsstr());}void 0===Sk.builtin&&(Sk.builtin={});Sk.builtin.type=function(a){this instanceof
Sk.builtin.type&&Sk.asserts.fail("calling new Sk.builtin.type is not safe");return a.ob$type};Object.defineProperties(Sk.builtin.type.prototype,{call:{value:Function.prototype.call},apply:{value:Function.prototype.apply},tp$slots:{value:{tp$doc:"type(object_or_name, bases, dict)\ntype(object) -> the object's type\ntype(name, bases, dict) -> a new type",tp$call:function(a,b){if(this===Sk.builtin.type){if(1===a.length&&(void 0===b||!b.length))return a[0].ob$type;if(3!==a.length)throw new Sk.builtin.TypeError("type() takes 1 or 3 arguments");
}let d=this.prototype.tp$new(a,b);if(d.$isSuspension)return Sk.misceval.chain(d,c=>{d=c;if(d.ob$type.$isSubType(this))return d.tp$init(a,b)},()=>d);if(d.ob$type.$isSubType(this)){const c=d.tp$init(a,b);return void 0!==c&&c.$isSuspension?Sk.misceval.chain(c,()=>d):d}return d},tp$new:function(a,c){if(3!==a.length){if(1===a.length&&(void 0===c||!c.length))return a[0].ob$type;throw new Sk.builtin.TypeError("type() takes 1 or 3 arguments");}let d;c=a[0];d=a[1];a=a[2];if("dict"!==a.tp$name)throw new Sk.builtin.TypeError("type() argument 3 must be dict, not "+
Sk.abstr.typeName(a));if(!Sk.builtin.checkString(c))throw new Sk.builtin.TypeError("type() argument 1 must be str, not "+Sk.abstr.typeName(c));c=c.$jsstr();if("tuple"!==d.tp$name)throw new Sk.builtin.TypeError("type() argument 2 must be tuple, not "+Sk.abstr.typeName(d));d=d.sk$asarray();const e=function(){this.$d=new Sk.builtin.dict};b(c,e,d,this.constructor);Sk.globals&&(e.prototype.__module__=Sk.globals.__name__);e.prototype.__doc__=Sk.builtin.none.none$;void 0===e.$typeLookup(Sk.builtin.str.$dict)&&
(e.prototype.__dict__=new Sk.builtin.getset_descriptor(e,h));a.$items().forEach(([a,b])=>{e.prototype[a.$mangled]=b});e.prototype.hasOwnProperty("__new__")&&(a=e.prototype.__new__,a instanceof Sk.builtin.func&&(e.prototype.__new__=new Sk.builtin.staticmethod(a)));e.$allocateSlots();return e},tp$getattr:function(a,b){var d=this.ob$type;const c=d.$typeLookup(a);let e;if(void 0!==c&&(e=c.tp$descr_get,void 0!==e&&void 0!==c.tp$descr_set))return b=e.call(c,this,d,b);a=this.$typeLookup(a);if(void 0!==a)return d=
a.tp$descr_get,void 0!==d?b=d.call(a,null,this,b):a;if(void 0!==e)return b=e.call(c,this,d,b);if(void 0!==c)return c},tp$setattr:function(a,b,c){if(!this.sk$klass){if(void 0!==b)throw new Sk.builtin.TypeError("can't set attributes of built-in/extension type '"+this.prototype.tp$name+"'");throw new Sk.builtin.TypeError("can't delete attributes on type object '"+this.prototype.tp$name+"'");}const d=this.ob$type.$typeLookup(a);if(void 0!==d){const a=d.tp$descr_set;if(a)return a.call(d,this,b,c)}c=a.$mangled;
if(void 0===b)if(b=this.prototype,b.hasOwnProperty(c))delete b[c],a=Sk.dunderToSkulpt[c],void 0!==a&&(delete this.prototype[a],b.sk$prototypical||this.$allocateGetterSlot(c));else throw new Sk.builtin.AttributeError("type object '"+this.prototype.tp$name+"' has no attribute '"+a.$jsstr()+"'");else this.prototype[c]=b,c in Sk.dunderToSkulpt&&this.$allocateSlot(c,b)},$r:function(){let a=this.prototype.__module__,b="",c="class";a&&Sk.builtin.checkString(a)?b=a.v+".":a=null;a||this.sk$klass||Sk.__future__.class_repr||
(c="type");return new Sk.builtin.str("<"+c+" '"+b+this.prototype.tp$name+"'>")}},writable:!0},tp$methods:{value:null,writable:!0},tp$getsets:{value:null,writable:!0},sk$type:{value:!0},$isSubType:{value:function(a){return this===a||this.prototype instanceof a||!this.prototype.sk$prototypical&&this.prototype.tp$mro.includes(a)}},$allocateSlot:{value:function(a,b){a=Sk.slots[a];const c=a.$slot_name,d=this.prototype;d.hasOwnProperty(c)&&delete d[c];d[c]=a.$slot_func(b)}},$allocateSlots:{value:function(){const a=
this.prototype;this.prototype.sk$prototypical?Object.keys(a).forEach(b=>{b in Sk.slots&&this.$allocateSlot(b,a[b])}):Object.keys(Sk.slots).forEach(b=>{a.hasOwnProperty(b)?this.$allocateSlot(b,a[b]):this.$allocateGetterSlot(b)})}},$allocateGetterSlot:{value:function(a){const b=Sk.slots[a].$slot_name,c=this.prototype;c.hasOwnProperty(b)||Object.defineProperty(c,b,{configurable:!0,get(){const a=c.tp$mro;for(let c=1;c<a.length;c++){const d=Object.getOwnPropertyDescriptor(a[c].prototype,b);if(void 0!==
d&&d.value)return d.value}}})}},$typeLookup:{value:function(a){return this.prototype.sk$prototypical?this.prototype[a.$mangled]:c.call(this,a)},writable:!0},$mroMerge:{value:function(a){this.prototype.sk$prototypical=!0;let b;const c=[];for(;;){for(b=0;b<a.length;++b){var d=a[b];if(0!==d.length)break}if(b===a.length)return c;var e=[];for(b=0;b<a.length;++b)if(d=a[b],0!==d.length){const b=d[0];d=0;a:for(;d<a.length;++d){const c=a[d];for(let a=1;a<c.length;++a)if(c[a]===b)break a}d===a.length&&e.push(b)}if(0===
e.length)throw new Sk.builtin.TypeError("Inconsistent precedences in type hierarchy");e=e[0];c.length&&this.prototype.sk$prototypical&&Object.getPrototypeOf(c[c.length-1].prototype)!==e.prototype&&(this.prototype.sk$prototypical=!1);c.push(e);for(b=0;b<a.length;++b)d=a[b],0<d.length&&d[0]===e&&d.splice(0,1)}}},$buildMRO:{value:function(){const a=[[this]],b=this.prototype.tp$bases;for(var c=0;c<b.length;++c)a.push([...b[c].prototype.tp$mro]);c=[];for(let a=0;a<b.length;++a)c.push(b[a]);a.push(c);return this.$mroMerge(a)}},
sk$attrError:{value(){return"type object '"+this.prototype.tp$name+"'"},writable:!0}});Sk.builtin.type.prototype.tp$getsets={__base__:{$get(){return this.prototype.tp$base||Sk.builtin.none.none$}},__bases__:{$get(){void 0===this.sk$tuple_bases&&(this.sk$tuple_bases=new Sk.builtin.tuple(this.prototype.tp$bases));return this.sk$tuple_bases}},__mro__:{$get(){void 0===this.sk$tuple_mro&&(this.sk$tuple_mro=new Sk.builtin.tuple(this.prototype.tp$mro));return this.sk$tuple_mro}},__dict__:{$get(){return new Sk.builtin.mappingproxy(this.prototype)}},
__doc__:{$get(){const a=this.$typeLookup(Sk.builtin.str.$doc);return a?void 0!==a.tp$descr_get?this===Sk.builtin.type?new Sk.builtin.str(this.prototype.tp$doc):a.tp$descr_get(null,this):this.prototype.__doc__:Sk.builtin.none.none$},$set(a){l(this,a,Sk.builtin.str.$doc);this.prototype.__doc__=a}},__name__:{$get(){return new Sk.builtin.str(this.prototype.tp$name)},$set(a){l(this,a,Sk.builtin.str.$name);if(!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("can only assign string to "+this.prototype.tp$name+
".__name__, not '"+Sk.abstr.typeName(a)+"'");this.prototype.tp$name=a.$jsstr()}},__module__:{$get(){let a=this.prototype.__module__;return a&&a.ob$type!==Sk.builtin.getset_descriptor?a:new Sk.builtin.str("builtins")},$set(a){l(this,a,Sk.builtin.str.$module);this.prototype.__module__=a}}};Sk.builtin.type.prototype.tp$methods={mro:{$meth(){return new Sk.builtin.list(this.$buildMRO())},$flags:{NoArgs:!0}},__dir__:{$meth:function(){function a(a){a in Sk.reservedWords_||(a=Sk.unfixReserved(a),-1!==a.indexOf("$")||
b.has(a)||(b.add(a),c.push(new Sk.builtin.str(a))))}const b=new Set,c=[];if(this.prototype.sk$prototypical)for(var e in this.prototype)a(e);else{e=this.prototype.tp$mro;for(let b=0;b<e.length;b++){const c=Object.getOwnPropertyNames(e[b].prototype);for(let b=0;b<c.length;b++)a(c[b])}}return new Sk.builtin.list(c)},$flags:{NoArgs:!0},$doc:"Specialized __dir__ implementation for types."}};const h={$get(){const a=f(this.ob$type);return void 0!==a?a.tp$descr_get(this,this.ob$type):Sk.generic.getSetDict.$get.call(this)},
$set(a){const b=f(this.ob$type);return void 0!==b?b.tp$descr_set(this,a):Sk.generic.getSetDict.$set.call(this,a)},$doc:"dictionary for instance variables (if defined)",$name:"__dict__"}},function(m,q){Sk.generic={};Sk.generic.getAttr=function(a,c){let b;const e=this.ob$type,f=e.$typeLookup(a);if(void 0!==f&&(b=f.tp$descr_get,void 0!==b&&void 0!==f.tp$descr_set))return b.call(f,this,e,c);const l=this.$d;if(void 0!==l&&(a=l.quick$lookup(a),void 0!==a))return a;if(void 0!==b)return b.call(f,this,e,c);
if(void 0!==f)return f};Sk.exportSymbol("Sk.generic.getAttr",Sk.generic.getAttr);Sk.generic.setAttr=function(a,c,b){var e=this.ob$type.$typeLookup(a);if(void 0!==e&&null!==e){const a=e.tp$descr_set;if(a)return a.call(e,this,c,b)}b=this.$d;if(void 0!==b)if(b.mp$ass_subscript){if(void 0!==c)return b.mp$ass_subscript(a,c);try{return b.mp$ass_subscript(a)}catch(f){if(f instanceof Sk.builtin.KeyError)throw new Sk.builtin.AttributeError("'"+Sk.abstr.typeName(this)+"' object has no attribute '"+a.$jsstr()+
"'");throw f;}}else if("object"===typeof b){e=a.$mangled;if(void 0!==c){b[e]=c;return}if(void 0!==b[e]){delete b[e];return}}throw new Sk.builtin.AttributeError(this.sk$attrError()+" has no attribute '"+a.$jsstr()+"'");};Sk.exportSymbol("Sk.generic.setAttr",Sk.generic.setAttr);Sk.generic.new=function(a){return function(c,b){if(this.constructor===a)return new this.constructor;c=new this.constructor;a.call(c);return c}};Sk.generic.newMethodDef={$meth(a,c){const b=this.prototype;if(1>a.length)throw a=
b.tp$name,new Sk.builtin.TypeError(a+".__new__(): not enough arguments");var e=a.shift();if(void 0===e.sk$type)throw a=b.tp$name,new Sk.builtin.TypeError(a+"__new__(X): X is not a type object ("+Sk.abstr.typeName(e)+")");if(!e.$isSubType(this))throw a=b.tp$name,e=e.prototype.tp$name,new Sk.builtin.TypeError(a+".__new__("+e+"): "+e+" is not a subtype of "+a);const f=e.prototype.sk$staticNew.prototype;if(f.tp$new!==b.tp$new)throw a=b.tp$name,e=e.prototype.tp$name,new Sk.builtin.TypeError(a+".__new__("+
e+") is not safe, use "+f.tp$name+".__new__()");return b.tp$new.call(e.prototype,a,c)},$flags:{FastCall:!0},$textsig:"($type, *args, **kwargs)",$name:"__new__"};Sk.generic.selfIter=function(){return this};Sk.generic.iterNextWithArrayCheckSize=function(){if(this.$seq.length!==this.$orig.get$size()){const a=this.tp$name.split("_")[0];throw new Sk.builtin.RuntimeError(a+" changed size during iteration");}if(!(this.$index>=this.$seq.length))return this.$seq[this.$index++]};Sk.generic.iterNextWithArray=
function(){const a=this.$seq[this.$index++];void 0===a&&(this.tp$iternext=()=>{});return a};Sk.generic.iterLengthHintWithArrayMethodDef={$meth:function(){return new Sk.builtin.int_(this.$seq.length-this.$index)},$flags:{NoArgs:!0}};Sk.generic.iterReverseLengthHintMethodDef={$meth:function(){return new Sk.builtin.int_(this.$index)},$flags:{NoArgs:!0}};Sk.generic.getSetDict={$get(){return this.$d},$set(a){if(void 0===a)this.$d=new Sk.builtin.dict;else if(a instanceof Sk.builtin.dict)this.$d=a;else throw new Sk.builtin.TypeError("__dict__ must be set to a dictionary, not a '"+
Sk.abstr.typeName(a)+"'");},$doc:"dictionary for instance variables (if defined)",$name:"__dict__"};Sk.generic.seqCompare=function(a,c){if(this===a&&Sk.misceval.opAllowsEquality(c))return!0;if(!(a instanceof this.sk$builtinBase))return Sk.builtin.NotImplemented.NotImplemented$;const b=this.v;a=a.v;let e;if(b.length!==a.length&&("Eq"===c||"NotEq"===c))return"Eq"===c?!1:!0;for(e=0;e<b.length&&e<a.length&&(b[e]===a[e]||Sk.misceval.richCompareBool(b[e],a[e],"Eq"));++e);const f=b.length,l=a.length;if(e>=
f||e>=l)switch(c){case "Lt":return f<l;case "LtE":return f<=l;case "Eq":return f===l;case "NotEq":return f!==l;case "Gt":return f>l;case "GtE":return f>=l;default:Sk.asserts.fail()}return"Eq"===c?!1:"NotEq"===c?!0:Sk.misceval.richCompareBool(b[e],a[e],c)}},function(m,q){Sk.builtin.pyCheckArgs=function(a,c,b,e,f,l){c=c.length;void 0===e&&(e=Infinity);f&&--c;l&&--c;if(c<b||c>e)throw new Sk.builtin.TypeError((b===e?a+"() takes exactly "+b+" arguments":c<b?a+"() takes at least "+b+" arguments":0<b?a+
"() takes at most "+e+" arguments":a+"() takes no arguments")+(" ("+c+" given)"));};Sk.exportSymbol("Sk.builtin.pyCheckArgs",Sk.builtin.pyCheckArgs);Sk.builtin.pyCheckArgsLen=function(a,c,b,e,f,l){void 0===e&&(e=Infinity);f&&--c;l&&--c;if(c<b||c>e)throw new Sk.builtin.TypeError((b===e?a+"() takes exactly "+b+" arguments":c<b?a+"() takes at least "+b+" arguments":a+"() takes at most "+e+" arguments")+(" ("+c+" given)"));};Sk.builtin.pyCheckType=function(a,c,b){if(!b)throw new Sk.builtin.TypeError(a+
" must be a "+c);};Sk.exportSymbol("Sk.builtin.pyCheckType",Sk.builtin.pyCheckType);Sk.builtin.checkSequence=function(a){return null!=a&&void 0!==a.mp$subscript};Sk.exportSymbol("Sk.builtin.checkSequence",Sk.builtin.checkSequence);Sk.builtin.checkIterable=function(a){return void 0===a?!1:a.tp$iter?void 0!==a.tp$iter().tp$iternext:void 0!==a.mp$subscript};Sk.exportSymbol("Sk.builtin.checkIterable",Sk.builtin.checkIterable);Sk.builtin.checkCallable=function(a){return null!=a&&void 0!==a.tp$call};Sk.builtin.checkNumber=
function(a){return"number"===typeof a||a instanceof Sk.builtin.int_||a instanceof Sk.builtin.float_||a instanceof Sk.builtin.lng};Sk.exportSymbol("Sk.builtin.checkNumber",Sk.builtin.checkNumber);Sk.builtin.checkComplex=function(a){return a instanceof Sk.builtin.complex};Sk.exportSymbol("Sk.builtin.checkComplex",Sk.builtin.checkComplex);Sk.builtin.checkInt=function(a){return a instanceof Sk.builtin.int_||"number"===typeof a&&Number.isInteger(a)};Sk.exportSymbol("Sk.builtin.checkInt",Sk.builtin.checkInt);
Sk.builtin.checkFloat=function(a){return a instanceof Sk.builtin.float_};Sk.exportSymbol("Sk.builtin.checkFloat",Sk.builtin.checkFloat);Sk.builtin.checkString=function(a){return a instanceof Sk.builtin.str};Sk.exportSymbol("Sk.builtin.checkString",Sk.builtin.checkString);Sk.builtin.checkBytes=function(a){return a instanceof Sk.builtin.bytes};Sk.builtin.checkClass=function(a){return a instanceof Sk.builtin.type};Sk.exportSymbol("Sk.builtin.checkClass",Sk.builtin.checkClass);Sk.builtin.checkBool=function(a){return a instanceof
Sk.builtin.bool};Sk.exportSymbol("Sk.builtin.checkBool",Sk.builtin.checkBool);Sk.builtin.checkNone=function(a){return a===Sk.builtin.none.none$};Sk.exportSymbol("Sk.builtin.checkNone",Sk.builtin.checkNone);Sk.builtin.checkFunction=function(a){return null!=a&&void 0!==a.tp$call};Sk.exportSymbol("Sk.builtin.checkFunction",Sk.builtin.checkFunction);Sk.builtin.checkDataDescr=function(a){return a&&void 0!==a.tp$descr_set};Sk.exportSymbol("Sk.builtin.checkDataDescr",Sk.builtin.checkDataDescr);Sk.builtin.checkAnySet=
function(a){return a instanceof Sk.builtin.set||a instanceof Sk.builtin.frozenset};Sk.builtin.checkMapping=function(a){return a instanceof Sk.builtin.dict||a instanceof Sk.builtin.mappingproxy||null!=a&&void 0!==a.mp$subscript&&void 0!==Sk.abstr.lookupSpecial(a,Sk.builtin.str.$keys)}},function(m,q){function a(a,b){switch(b){case "Add":return a.nb$add;case "Sub":return a.nb$subtract;case "Mult":return a.nb$multiply;case "MatMult":if(Sk.__future__.python3)return a.nb$matrix_multiply;case "Div":return a.nb$divide;
case "FloorDiv":return a.nb$floor_divide;case "Mod":return a.nb$remainder;case "DivMod":return a.nb$divmod;case "Pow":return a.nb$power;case "LShift":return a.nb$lshift;case "RShift":return a.nb$rshift;case "BitAnd":return a.nb$and;case "BitXor":return a.nb$xor;case "BitOr":return a.nb$or}}function c(a,b){switch(b){case "Add":return a.nb$reflected_add;case "Sub":return a.nb$reflected_subtract;case "Mult":return a.nb$reflected_multiply;case "MatMult":if(Sk.__future__.python3)return a.nb$reflected_matrix_multiply;
case "Div":return a.nb$reflected_divide;case "FloorDiv":return a.nb$reflected_floor_divide;case "Mod":return a.nb$reflected_remainder;case "DivMod":return a.nb$reflected_divmod;case "Pow":return a.nb$reflected_power;case "LShift":return a.nb$reflected_lshift;case "RShift":return a.nb$reflected_rshift;case "BitAnd":return a.nb$reflected_and;case "BitXor":return a.nb$reflected_xor;case "BitOr":return a.nb$reflected_or}}function b(a,b){switch(b){case "Add":return a.nb$inplace_add;case "Sub":return a.nb$inplace_subtract;
case "Mult":return a.nb$inplace_multiply;case "MatMult":if(Sk.__future__.python3)return a.nb$inplace_matrix_multiply;case "Div":return a.nb$inplace_divide;case "FloorDiv":return a.nb$inplace_floor_divide;case "Mod":return a.nb$inplace_remainder;case "Pow":return a.nb$inplace_power;case "LShift":return a.nb$inplace_lshift;case "RShift":return a.nb$inplace_rshift;case "BitAnd":return a.nb$inplace_and;case "BitOr":return a.nb$inplace_or;case "BitXor":return a.nb$inplace_xor}}function e(b,d,e){var k=
d.constructor,f=b.constructor;if(k=k!==f&&void 0===k.sk$baseClass&&d instanceof f)if(f=c(d,e),void 0!==f&&f!==c(b,e)&&(f=f.call(d,b),f!==Sk.builtin.NotImplemented.NotImplemented$))return f;f=a(b,e);if(void 0!==f&&(f=f.call(b,d),f!==Sk.builtin.NotImplemented.NotImplemented$)||!k&&(f=c(d,e),void 0!==f&&(f=f.call(d,b),f!==Sk.builtin.NotImplemented.NotImplemented$)))return f}function f(a){n.forEach(([b,c])=>{a[c]=function(a){return this.tp$richcompare(a,b)}})}function l(a){const b=Sk.reflectedNumberSlots;
Object.keys(b).forEach(c=>{if(void 0!==a[c]){const d=b[c],e=d.reflected,f=a[e];void 0!==f?null===f&&delete a[e]:a[e]=d.slot||a[c]}})}function h(a){const b=Sk.sequenceAndMappingSlots;Object.keys(b).forEach(c=>{void 0!==a[c]&&b[c].forEach(b=>{a[b]=a[c]})})}Sk.abstr={};Sk.abstr.typeName=function(a){return null!=a&&void 0!==a.tp$name?a.tp$name:"<invalid type>"};const d={Add:"+",Sub:"-",Mult:"*",MatMult:"@",Div:"/",FloorDiv:"//",Mod:"%",DivMod:"divmod()",Pow:"** or pow()",LShift:"<<",RShift:">>",BitAnd:"&",
BitXor:"^",BitOr:"|"},g={UAdd:"+",USub:"-",Invert:"~"};Sk.abstr.numberBinOp=function(a,b,c){var f;if(!(f=e(a,b,c)))throw a=Sk.abstr.typeName(a),b=Sk.abstr.typeName(b),new Sk.builtin.TypeError("unsupported operand type(s) for "+d[c]+": '"+a+"' and '"+b+"'");return f};Sk.exportSymbol("Sk.abstr.numberBinOp",Sk.abstr.numberBinOp);Sk.abstr.numberInplaceBinOp=function(a,c,f){a:{var k=b(a,f);if(void 0!==k&&(k=k.call(a,c),k!==Sk.builtin.NotImplemented.NotImplemented$))break a;k=e(a,c,f)}if(!k)throw a=Sk.abstr.typeName(a),
c=Sk.abstr.typeName(c),new Sk.builtin.TypeError("unsupported operand type(s) for "+d[f]+"=: '"+a+"' and '"+c+"'");return k};Sk.exportSymbol("Sk.abstr.numberInplaceBinOp",Sk.abstr.numberInplaceBinOp);Sk.abstr.numberUnaryOp=function(a,b){if("Not"===b)return Sk.misceval.isTrue(a)?Sk.builtin.bool.false$:Sk.builtin.bool.true$;b:{switch(b){case "USub":var c=a.nb$negative;break b;case "UAdd":c=a.nb$positive;break b;case "Invert":c=a.nb$invert;break b}c=void 0}c=void 0!==c?c.call(a):void 0;if(!c)throw a=
Sk.abstr.typeName(a),new Sk.builtin.TypeError("bad operand type for unary "+g[b]+": '"+a+"'");return c};Sk.exportSymbol("Sk.abstr.numberUnaryOp",Sk.abstr.numberUnaryOp);Sk.abstr.fixSeqIndex_=function(a,b){b=Sk.builtin.asnum$(b);0>b&&a.sq$length&&(b+=a.sq$length());return b};Sk.abstr.sequenceContains=function(a,b,c){if(a.sq$contains)return a.sq$contains(b,c);a=Sk.misceval.iterFor(Sk.abstr.iter(a),function(a){return a===b||Sk.misceval.richCompareBool(a,b,"Eq")?new Sk.misceval.Break(!0):!1},!1);return c?
a:Sk.misceval.retryOptionalSuspensionOrThrow(a)};Sk.abstr.sequenceConcat=function(a,b){if(a.sq$concat)return a.sq$concat(b);throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(a)+"' object can't be concatenated");};Sk.abstr.sequenceGetIndexOf=function(a,b){if(a.index)return Sk.misceval.callsimArray(a.index,[a,b]);let c=0;for(let d=Sk.abstr.iter(a),e=d.tp$iternext();void 0!==e;e=d.tp$iternext()){if(Sk.misceval.richCompareBool(b,e,"Eq"))return new Sk.builtin.int_(c);c+=1}throw new Sk.builtin.ValueError("sequence.index(x): x not in sequence");
};Sk.abstr.sequenceGetCountOf=function(a,b){if(a.count)return Sk.misceval.callsimArray(a.count,[a,b]);let c=0;for(let d=Sk.abstr.iter(a),e=d.tp$iternext();void 0!==e;e=d.tp$iternext())Sk.misceval.richCompareBool(b,e,"Eq")&&(c+=1);return new Sk.builtin.int_(c)};Sk.abstr.sequenceGetItem=function(a,b,c){"number"===typeof b&&(b=new Sk.builtin.int_(b));return Sk.abstr.objectGetItem(a,b,c)};Sk.abstr.sequenceSetItem=function(a,b,c,d){"number"===typeof b&&(b=new Sk.builtin.int_(b));return Sk.abstr.objectSetItem(a,
b,c,d)};Sk.abstr.sequenceDelItem=function(a,b,c){return Sk.abstr.objectDelItem(a,b,c)};Sk.abstr.sequenceGetSlice=function(a,b,c){return Sk.abstr.objectGetItem(a,new Sk.builtin.slice(b,c))};Sk.abstr.sequenceDelSlice=function(a,b,c){return Sk.abstr.objectDelItem(a,new Sk.builtin.slice(b,c))};Sk.abstr.sequenceSetSlice=function(a,b,c,d){return Sk.abstr.objectSetItem(a,new Sk.builtin.slice(b,c))};Sk.abstr.sequenceUnpack=function(a,b,c,d){if(!Sk.builtin.checkIterable(a))throw new Sk.builtin.TypeError("cannot unpack non-iterable "+
Sk.abstr.typeName(a)+" object");const e=Sk.abstr.iter(a),f=[];let k=0,g;0<b&&(g=Sk.misceval.iterFor(e,a=>{f.push(a);if(++k===b)return new Sk.misceval.Break}));return Sk.misceval.chain(g,()=>{if(f.length<b)throw new Sk.builtin.ValueError("not enough values to unpack (expected at least "+c+", got "+f.length+")");if(!d)return Sk.misceval.chain(e.tp$iternext(!0),a=>{if(void 0!==a)throw new Sk.builtin.ValueError("too many values to unpack (expected "+b+")");return f});const a=[];return Sk.misceval.chain(Sk.misceval.iterFor(e,
b=>{a.push(b)}),()=>{const d=a.length+b-c;if(0>d)throw new Sk.builtin.ValueError("not enough values to unpack (expected at least "+c+", got "+(c+d)+")");f.push(new Sk.builtin.list(a.slice(0,d)));f.push(...a.slice(d));return f})})};Sk.abstr.mappingUnpackIntoKeywordArray=function(a,b,c){if(b instanceof Sk.builtin.dict)b.$items().forEach(([b,d])=>{if(!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError((c.$qualname?c.$qualname+"() ":"")+"keywords must be strings");a.push(b.v);a.push(d)});else{var d=
Sk.abstr.lookupSpecial(b,Sk.builtin.str.$keys);if(void 0===d)throw new Sk.builtin.TypeError("Object is not a mapping");return Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(d),d=>Sk.misceval.iterFor(Sk.abstr.iter(d),d=>{if(!Sk.builtin.checkString(d))throw new Sk.builtin.TypeError((c.$qualname?c.$qualname+"() ":"")+"keywords must be strings");return Sk.misceval.chain(b.mp$subscript(d,!0),b=>{a.push(d.v);a.push(b)})}))}};Sk.abstr.copyKeywordsToNamedArgs=function(a,b,c,d,e){d=d||[];var f=c.length+
d.length/2;if(f>b.length)throw new Sk.builtin.TypeError(a+"() expected at most "+b.length+" arguments ("+f+" given)");if(d.length||void 0!==e){if(f===b.length&&!d.length)return c;if(0===f&&b.length===(e&&e.length))return e}else return c;c=c.slice(0);for(f=0;f<d.length;f+=2){const e=d[f],k=d[f+1],g=b.indexOf(e);if(0<=g){if(void 0!==c[g])throw new Sk.builtin.TypeError(a+"() got multiple values for argument '"+e+"'");c[g]=k}else throw new Sk.builtin.TypeError(a+"() got an unexpected keyword argument '"+
e+"'");}if(e){d=b.length;for(f=d-1;0<=f;f--)void 0===c[f]&&(c[f]=e[e.length-1-(d-1-f)]);b=b.filter((a,b)=>void 0===c[b]);if(b.length)throw new Sk.builtin.TypeError(a+"() missing "+b.length+" required positional arguments: "+b.join(", "));}return c};Sk.exportSymbol("Sk.abstr.copyKeywordsToNamedArgs",Sk.abstr.copyKeywordsToNamedArgs);Sk.abstr.checkNoKwargs=function(a,b){if(b&&b.length)throw new Sk.builtin.TypeError(a+"() takes no keyword arguments");};Sk.exportSymbol("Sk.abstr.checkNoKwargs",Sk.abstr.checkNoKwargs);
Sk.abstr.checkNoArgs=function(a,b,c){if(b=b.length+(c?c.length:0))throw new Sk.builtin.TypeError(a+"() takes no arguments ("+b+" given)");};Sk.exportSymbol("Sk.abstr.checkNoArgs",Sk.abstr.checkNoArgs);Sk.abstr.checkOneArg=function(a,b,c){Sk.abstr.checkNoKwargs(a,c);if(1!==b.length)throw new Sk.builtin.TypeError(a+"() takes exactly one argument ("+b.length+" given)");};Sk.exportSymbol("Sk.abstr.checkOneArg",Sk.abstr.checkOneArg);Sk.abstr.checkArgsLen=function(a,b,c,d){b=b.length;void 0===d&&(d=Infinity);
if(b<c||b>d)throw new Sk.builtin.TypeError((c===d?a+"() takes exactly "+c+" arguments":b<c?a+"() takes at least "+c+" arguments":a+"() takes at most "+d+" arguments")+(" ("+b+" given)"));};Sk.exportSymbol("Sk.abstr.checkArgsLen",Sk.abstr.checkArgsLen);Sk.abstr.objectFormat=function(a,b){a=Sk.abstr.lookupSpecial(a,Sk.builtin.str.$format);b=Sk.misceval.callsimArray(a,[b]);if(!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("__format__ must return a str, not "+Sk.abstr.typeName(b));return b};
Sk.abstr.objectHash=function(a){const b=a.tp$hash;if(void 0!==b){if(Sk.builtin.checkNone(b))throw new Sk.builtin.TypeError("unhashable type: '"+Sk.abstr.typeName(a)+"'");return a.tp$hash()}throw new Sk.builtin.TypeError("unsupported Javascript type");};Sk.abstr.objectAdd=function(a,b){if(a.nb$add)return a.nb$add(b);a=Sk.abstr.typeName(a);b=Sk.abstr.typeName(b);throw new Sk.builtin.TypeError("unsupported operand type(s) for +: '"+a+"' and '"+b+"'");};Sk.abstr.objectNegative=function(a){if(a.nb$negative)return a.nb$negative();
throw new Sk.builtin.TypeError("bad operand type for unary -: '"+Sk.abstr.typeName(a)+"'");};Sk.abstr.objectPositive=function(a){if(a.nb$positive)return a.nb$positive();throw new Sk.builtin.TypeError("bad operand type for unary +: '"+Sk.abstr.typeName(a)+"'");};Sk.abstr.objectDelItem=function(a,b,c){if(a.mp$ass_subscript)return a.mp$ass_subscript(b,void 0,c);throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(a)+"' object does not support item deletion");};Sk.exportSymbol("Sk.abstr.objectDelItem",
Sk.abstr.objectDelItem);Sk.abstr.objectGetItem=function(a,b,c){if(a.mp$subscript)return a.mp$subscript(b,c);throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(a)+"' does not support indexing");};Sk.exportSymbol("Sk.abstr.objectGetItem",Sk.abstr.objectGetItem);Sk.abstr.objectSetItem=function(a,b,c,d){if(a.mp$ass_subscript)return a.mp$ass_subscript(b,c,d);throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(a)+"' does not support item assignment");};Sk.exportSymbol("Sk.abstr.objectSetItem",Sk.abstr.objectSetItem);
Sk.abstr.gattr=function(a,b,c){c=a.tp$getattr(b,c);if(void 0===c)throw new Sk.builtin.AttributeError(a.sk$attrError()+" has no attribute '"+b.$jsstr()+"'");return c.$isSuspension?Sk.misceval.chain(c,function(c){if(void 0===c)throw new Sk.builtin.AttributeError(a.sk$attrError()+" has no attribute '"+b.$jsstr()+"'");return c}):c};Sk.exportSymbol("Sk.abstr.gattr",Sk.abstr.gattr);Sk.abstr.sattr=function(a,b,c,d){return a.tp$setattr(b,c,d)};Sk.exportSymbol("Sk.abstr.sattr",Sk.abstr.sattr);Sk.abstr.iternext=
function(a,b){return a.tp$iternext(b)};Sk.exportSymbol("Sk.abstr.iternext",Sk.abstr.iternext);Sk.abstr.iter=function(a){if(a.tp$iter){a=a.tp$iter();if(a.tp$iternext)return a;throw new Sk.builtin.TypeError("iter() returned non-iterator of type '"+Sk.abstr.typeName(a)+"'");}if(a.mp$subscript)return new Sk.builtin.seq_iter_(a);throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(a)+"' object is not iterable");};Sk.exportSymbol("Sk.abstr.iter",Sk.abstr.iter);Sk.abstr.lookupSpecial=function(a,b){var c=
a.ob$type;if(void 0===c)Sk.asserts.fail("javascript object sent to lookupSpecial");else if(b=c.$typeLookup(b),void 0!==b)return void 0!==b.tp$descr_get&&(b=b.tp$descr_get(a,c)),b};Sk.exportSymbol("Sk.abstr.lookupSpecial",Sk.abstr.lookupSpecial);Sk.abstr.typeLookup=function(a,b){b=a.$typeLookup(b);return void 0!==b&&b.tp$descr_get?b.tp$descr_get(null,a):b};Sk.abstr.markUnhashable=function(a){a=a.prototype;a.__hash__=Sk.builtin.none.none$;a.tp$hash=Sk.builtin.none.none$};Sk.abstr.setUpInheritance=function(a,
b,c,d){d=d||Sk.builtin.type;c=void 0===c?Sk.builtin.object:c;const e=null!==c?c.prototype:null;Object.setPrototypeOf(b,d.prototype);Object.setPrototypeOf(b.prototype,e);Object.defineProperties(b.prototype,{sk$object:{value:b,writable:!0},ob$type:{value:b,writable:!0},tp$name:{value:a,writable:!0},tp$base:{value:c,writable:!0}})};Sk.abstr.setUpBuiltinMro=function(a){let b=a.prototype.tp$base;const c=null===b?[]:[b];if(b===Sk.builtin.object||null===b)Object.defineProperty(a,"sk$baseClass",{value:!0,
writable:!0}),Object.defineProperty(a.prototype,"sk$builtinBase",{value:a,writable:!0});const d=[a];for(;null!==b;)d.push(b),b=b.prototype.tp$base;Object.defineProperties(a.prototype,{sk$prototypical:{value:!0,writable:!0},tp$bases:{value:c,writable:!0},tp$mro:{value:d,writable:!0}});Object.defineProperty(a,"$typeLookup",{value:function(a){return this.prototype[a.$mangled]},writable:!0})};Sk.abstr.setUpGetSets=function(a,b){if(void 0!==Sk.builtin.getset_descriptor){var c=a.prototype;b=b||c.tp$getsets||
{};Object.entries(b).forEach(([b,d])=>{d.$name=b;c[b]=new Sk.builtin.getset_descriptor(a,d)});Object.defineProperty(c,"tp$getsets",{value:null,writable:!0})}};Sk.abstr.setUpMethods=function(a,b){if(void 0!==Sk.builtin.method_descriptor){var c=a.prototype;b=b||c.tp$methods||{};Object.entries(b).forEach(([b,d])=>{d.$name=b;c[b]=new Sk.builtin.method_descriptor(a,d)});Object.defineProperty(c,"tp$methods",{value:null,writable:!0})}};Sk.abstr.setUpClassMethods=function(a,b){if(void 0!==Sk.builtin.classmethod_descriptor){var c=
a.prototype;b=b||c.tp$classmethods||{};Object.entries(b).forEach(([b,d])=>{d.$name=b;c[b]=new Sk.builtin.classmethod_descriptor(a,d)});Object.defineProperty(c,"tp$classmethods",{value:null,writable:!0})}};const n=Object.entries({Eq:"ob$eq",NotEq:"ob$ne",Gt:"ob$gt",GtE:"ob$ge",Lt:"ob$lt",LtE:"ob$le"});Sk.abstr.setUpSlots=function(a,b){function c(b,c){e[b]=new Sk.builtin.wrapper_descriptor(a,Sk.slots[b],c)}function d(a,b){"string"===typeof a?c(a,b):a.forEach(a=>{c(a,b)})}if(void 0!==Sk.builtin.wrapper_descriptor){var e=
a.prototype;b=b||e.tp$slots||{};b.tp$new===Sk.generic.new&&(b.tp$new=Sk.generic.new(a));b.tp$richcompare&&f(b);b.tp$as_number&&l(b);b.tp$as_sequence_or_mapping&&h(b);Object.entries(b).forEach(([a,b])=>{Object.defineProperty(e,a,{value:b,writable:!0})});b.tp$new&&(e.__new__=new Sk.builtin.sk_method(Sk.generic.newMethodDef,a),Object.defineProperty(e,"sk$staticNew",{value:a,writable:!0}));Sk.subSlots.main_slots.forEach(([a,c])=>{a=b[a];void 0!==a&&d(c,a)});var g=b.tp$hash;void 0!==g&&("function"===typeof g?
c("__hash__",g):g===Sk.builtin.none.none$?e.__hash__=g:Sk.asserts.fail("invalid tp$hash"));b.tp$as_number&&Sk.subSlots.number_slots.forEach(([a,c])=>{a=b[a];void 0!==a&&d(c,a)});b.tp$as_sequence_or_mapping&&Sk.subSlots.sequence_and_mapping_slots.forEach(([a,c])=>{a=b[a];void 0!==a&&d(c,a)});Object.defineProperty(e,"tp$slots",{value:null,writable:!0})}};Sk.abstr.buildNativeClass=function(a,b){b=b||{};Sk.asserts.assert(b.hasOwnProperty("constructor"),"A constructor is required to build a native class");
let c=b.constructor;if(a.includes(".")){var d=a.split(".");a=d.pop();d=d.join(".")}Sk.abstr.setUpInheritance(a,c,b.base,b.meta);Sk.abstr.setUpBuiltinMro(c);const e=c.prototype;Object.defineProperties(e,{tp$slots:{value:b.slots,writable:!0},tp$getsets:{value:b.getsets,writable:!0},tp$methods:{value:b.methods,writable:!0},tp$classmethods:{value:b.classmethods,writable:!0}});Sk.abstr.setUpSlots(c,b.slots||{});Sk.abstr.setUpMethods(c,b.methods);Sk.abstr.setUpGetSets(c,b.getsets);Sk.abstr.setUpClassMethods(c,
b.classmethods);void 0!==d&&(e.__module__=new Sk.builtin.str(d));Object.entries(b.proto||{}).forEach(([a,b])=>{Object.defineProperty(e,a,{value:b,writable:!0,enumerable:!(a.includes("$")||a in Object.prototype)})});Object.entries(b.flags||{}).forEach(([a,b])=>{Object.defineProperty(c,a,{value:b,writable:!0})});void 0!==Sk.builtin.str&&e.hasOwnProperty("tp$doc")&&!e.hasOwnProperty("__doc__")&&(a=e.tp$doc||null,e.__doc__="string"===typeof a?new Sk.builtin.str(a):Sk.builtin.none.none$);return c};Sk.abstr.buildIteratorClass=
function(a,b){Sk.asserts.assert(b.hasOwnProperty("constructor"),"must provide a constructor");b.slots=b.slots||{};b.slots.tp$iter=Sk.generic.selfIter;b.slots.tp$iternext=b.slots.tp$iternext||b.iternext;b.slots.tp$getattr=b.slots.tp$getattr||Sk.generic.getAttr;a=Sk.abstr.buildNativeClass(a,b);Sk.abstr.built$iterators.push(a);return a};Sk.abstr.built$iterators=[];Sk.abstr.setUpModuleMethods=function(a,b,c){Object.entries(c).forEach(([c,d])=>{d.$name=d.$name||c;b[c]=new Sk.builtin.sk_method(d,null,a)})};
Sk.abstr.superConstructor=function(a,b,c){var d=Array.prototype.slice.call(arguments,2);a.prototype.tp$base.apply(b,d)}},function(m,q){const a=new Map;Sk.builtin.object=Sk.abstr.buildNativeClass("object",{constructor:function(){Sk.asserts.assert(this instanceof Sk.builtin.object,"bad call to object, use 'new'")},base:null,slots:{tp$new(a,b){if(a.length||b&&b.length){if(this.tp$new!==Sk.builtin.object.prototype.tp$new)throw new Sk.builtin.TypeError("object.__new__() takes exactly one argument (the type to instantiate)");
if(this.tp$init===Sk.builtin.object.prototype.tp$init)throw new Sk.builtin.TypeError(Sk.abstr.typeName(this)+"() takes no arguments");}return new this.constructor},tp$init(a,b){if(a.length||b&&b.length){if(this.tp$init!==Sk.builtin.object.prototype.tp$init)throw new Sk.builtin.TypeError("object.__init__() takes exactly one argument (the instance to initialize)");if(this.tp$new===Sk.builtin.object.prototype.tp$new)throw new Sk.builtin.TypeError(Sk.abstr.typeName(this)+".__init__() takes exactly one argument (the instance to initialize)");
}},tp$getattr:Sk.generic.getAttr,tp$setattr:Sk.generic.setAttr,$r(){const a=Sk.abstr.lookupSpecial(this,Sk.builtin.str.$module);let b="";a&&Sk.builtin.checkString(a)&&(b=a.v+".");return new Sk.builtin.str("<"+b+Sk.abstr.typeName(this)+" object>")},tp$str(){return this.$r()},tp$hash(){let c=a.get(this);if(void 0!==c)return c;c=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER-Number.MAX_SAFE_INTEGER/2);a.set(this,c);return c},tp$richcompare(a,b){switch(b){case "Eq":a=this===a||Sk.builtin.NotImplemented.NotImplemented$;
break;case "NotEq":a=this.tp$richcompare(a,"Eq");a!==Sk.builtin.NotImplemented.NotImplemented$&&(a=!Sk.misceval.isTrue(a));break;default:a=Sk.builtin.NotImplemented.NotImplemented$}return a},tp$doc:"The most base type"},getsets:{__class__:{$get(){return this.ob$type},$set(a){if(void 0===a)throw new Sk.builtin.TypeError("can't delete __class__ attribute");if(!Sk.builtin.checkClass(a))throw new Sk.builtin.TypeError("__class__ must be set to a class, not '"+Sk.abstr.typeName(a)+"' object");const b=this.ob$type;
if(!(b.$isSubType(Sk.builtin.module)&&a.$isSubType(Sk.builtin.module)||void 0!==b.sk$klass&&void 0!==a.sk$klass))throw new Sk.builtin.TypeError(" __class__ assignment only supported for heap types or ModuleType subclasses");if(a.prototype.sk$builtinBase!==this.sk$builtinBase)throw new Sk.builtin.TypeError("__class__ assignment: '"+Sk.abstr.typeName(this)+"' object layout differs from '"+a.prototype.tp$name+"'");Object.setPrototypeOf(this,a.prototype)},$doc:"the object's class"}},methods:{__dir__:{$meth:function(){let a=
[];if(this.$d)if(this.$d instanceof Sk.builtin.dict)a=this.$d.sk$asarray();else for(var b in this.$d)a.push(new Sk.builtin.str(b));b=Sk.misceval.callsimArray(Sk.builtin.type.prototype.__dir__,[this.ob$type]);a.push(...b.v);b.v=a;return b},$flags:{NoArgs:!0},$doc:"Default dir() implementation."},__format__:{$meth(a){if(Sk.builtin.checkString(a)){if(a=Sk.ffi.remapToJs(a),""!==a)throw new Sk.builtin.NotImplementedError("format spec is not yet implemented");}else{if(Sk.__future__.exceptions)throw new Sk.builtin.TypeError("format() argument 2 must be str, not "+
Sk.abstr.typeName(a));throw new Sk.builtin.TypeError("format expects arg 2 to be string or unicode, not "+Sk.abstr.typeName(a));}return this.tp$str()},$flags:{OneArg:!0},$doc:"Default object formatter."}},proto:{valueOf:Object.prototype.valueOf,toString:function(){return this.tp$str().v},hasOwnProperty:Object.prototype.hasOwnProperty,hp$type:void 0,sk$attrError(){return"'"+this.tp$name+"' object"}}});Sk.abstr.setUpInheritance("type",Sk.builtin.type,Sk.builtin.object);Sk.abstr.setUpBuiltinMro(Sk.builtin.type)},
function(m,q){function a(a,b,c){Sk.abstr.checkNoArgs(this.$name,b,c);a=this.call(a);return void 0===a?Sk.builtin.none.none$:a}function c(a,b,c){Sk.abstr.checkOneArg(this.$name,b,c);a=this.call(a,b[0]);return void 0===a?Sk.builtin.none.none$:a}function b(a,b,c){Sk.abstr.checkNoKwargs(this.$name,c);Sk.abstr.checkArgsLen(this.$name,b,1,2);a=this.call(a,...b);return void 0===a?Sk.builtin.none.none$:a}function e(a,b,c){Sk.abstr.checkNoKwargs(this.$name,c);Sk.abstr.checkArgsLen(this.$name,b,2,2);this.call(a,
b[0],b[1]);return Sk.builtin.none.none$}function f(a,b,d){a=c.call(this,a,b,d);return a===Sk.builtin.NotImplemented.NotImplemented$?a:new Sk.builtin.bool(a)}function l(a,b){return function(c,d,e){c=a.call(this,c,d,e);return b(c)}}function h(a){return function(){const b=a.tp$descr_get?a.tp$descr_get(this):a;return Sk.misceval.callsimArray(b,[])}}function d(a,b,c,d){return function(e){return function(){var f=e.tp$descr_get?e.tp$descr_get(this):e;f=Sk.misceval.callsimArray(f,[]);if(!b(f))throw new Sk.builtin.TypeError(a+
" should return "+c+" (returned "+Sk.abstr.typeName(f)+")");return void 0!==d?d(f):f}}}function g(a){return function(b){const c=a.tp$descr_get?a.tp$descr_get(this):a;return Sk.misceval.callsimArray(c,[b])}}function n(a,b){let c=this.ob$type.$typeLookup(Sk.builtin.str.$getattribute);if(c instanceof Sk.builtin.wrapper_descriptor)return c.d$wrapped.call(this,a,b);c.tp$descr_get&&(c=c.tp$descr_get(this));const d=Sk.misceval.tryCatch(()=>Sk.misceval.callsimOrSuspendArray(c,[a]),a=>{if(!(a instanceof Sk.builtin.AttributeError))throw a;
});return b?d:Sk.misceval.retryOptionalSuspensionOrThrow(d)}function k(a,b,c){return function(d){return function(d,e,f){let g;void 0===e?(g=b,c=null):g=a;let h=this.ob$type.$typeLookup(new Sk.builtin.str(g));if(h instanceof Sk.builtin.wrapper_descriptor)return h.d$wrapped.call(this,d,e);h.tp$descr_get&&(h=h.tp$descr_get(this));if(void 0!==h)d=Sk.misceval.callsimOrSuspendArray(h,void 0===e?[d]:[d,e]);else{if(c)throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(this)+"' object "+c);throw new Sk.builtin.AttributeError(g);
}return f?d:Sk.misceval.retryOptionalSuspensionOrThrow(d)}}}function p(a,b){let c=a.ob$type;for(;c&&void 0!==c.sk$klass;)c=c.prototype.tp$base;if(c&&c.prototype.tp$setattr!==b)throw new Sk.builtin.TypeError("can't apply this "+b.$name+" to "+Sk.abstr.typeName(a)+" object");}Sk.slots=Object.create(null);m=Sk.slots;Sk.slots.__init__={$name:"__init__",$slot_name:"tp$init",$slot_func:function(a){return function(b,c){const d=a.tp$descr_get?a.tp$descr_get(this):a;b=Sk.misceval.callsimOrSuspendArray(d,b,
c);return Sk.misceval.chain(b,a=>{if(!Sk.builtin.checkNone(a)&&void 0!==a)throw new Sk.builtin.TypeError("__init__() should return None, not "+Sk.abstr.typeName(a));})}},$wrapper:function(a,b,c){this.call(a,b,c);return Sk.builtin.none.none$},$textsig:"($self, /, *args, **kwargs)",$flags:{FastCall:!0},$doc:"Initialize self.  See help(type(self)) for accurate signature."};m.__new__={$name:"__new__",$slot_name:"tp$new",$slot_func:function(a){const b=function(b,c){let d=a;a.tp$descr_get&&(d=a.tp$descr_get(null,
this.constructor));return Sk.misceval.callsimOrSuspendArray(d,[this.constructor,...b],c)};b.sk$static_new=!1;return b},$wrapper:null,$textsig:"($self, /, *args, **kwargs)",$flags:{FastCall:!0},$doc:"Create and return a new object."};m.__call__={$name:"__call__",$slot_name:"tp$call",$slot_func:function(a){return function(b,c){const d=a.tp$descr_get?a.tp$descr_get(this):a;return Sk.misceval.callsimOrSuspendArray(d,b,c)}},$wrapper:function(a,b,c){a=a.tp$call(b,c);return void 0===a?Sk.builtin.none.none$:
a},$textsig:"($self, /, *args, **kwargs)",$flags:{FastCall:!0},$doc:"Call self as a function."};m.__repr__={$name:"__repr__",$slot_name:"$r",$slot_func:d("__repr__",Sk.builtin.checkString,"str"),$wrapper:a,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"Return repr(self)."};m.__str__={$name:"__str__",$slot_name:"tp$str",$slot_func:d("__str__",Sk.builtin.checkString,"str"),$wrapper:a,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"Return str(self)."};var w=d("__hash__",Sk.builtin.checkInt,"int",a=>"number"===
typeof a.v?a.v:a.tp$hash());m.__hash__={$name:"__hash__",$slot_name:"tp$hash",$slot_func:function(a){return a===Sk.builtin.none.none$?Sk.builtin.none.none$:w(a)},$wrapper:l(a,a=>new Sk.builtin.int_(a)),$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"Return hash(self)."};m.__getattribute__={$name:"__getattribute__",$slot_name:"tp$getattr",$slot_func:function(a){return function(a,b){let c=this.ob$type.$typeLookup(Sk.builtin.str.$getattr);if(void 0===c)return n.call(this,a,b);const d=Sk.misceval.chain(n.call(this,
a,b),b=>Sk.misceval.tryCatch(()=>{if(void 0!==b)return b;c.tp$descr_get&&(c=c.tp$descr_get(this));return Sk.misceval.callsimOrSuspendArray(c,[a])},function(a){if(!(a instanceof Sk.builtin.AttributeError))throw a;}));return b?d:Sk.misceval.retryOptionalSuspensionOrThrow(d)}},$wrapper:function(a,b,c){Sk.abstr.checkOneArg(this.$name,b,c);b=b[0];if(!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("attribute name must be string, not '"+Sk.abstr.typeName(b)+"'");c=this.call(a,b);if(void 0===c)throw new Sk.builtin.AttributeError(Sk.abstr.typeName(a)+
" has no attribute "+b.$jsstr());return c},$textsig:"($self, name, /)",$flags:{OneArg:!0},$doc:"Return getattr(self, name)."};m.__getattr__={$name:"__getattr__",$slot_name:"tp$getattr",$slot_func:m.__getattribute__.$slot_func,$wrapper:null,$textsig:"($self, name, /)",$flags:{OneArg:!0},$doc:"Return getattr(self, name)."};m.__setattr__={$name:"__setattr__",$slot_name:"tp$setattr",$slot_func:k("__setattr__","__delattr__"),$wrapper:function(a,b,c){Sk.abstr.checkNoKwargs(this.$name,c);Sk.abstr.checkArgsLen(this.$name,
b,2,2);p(a,this);this.call(a,b[0],b[1]);return Sk.builtin.none.none$},$textsig:"($self, name, value, /)",$flags:{MinArgs:2,MaxArgs:2},$doc:"Implement setattr(self, name, value)."};m.__delattr__={$name:"__delattr__",$slot_name:"tp$setattr",$slot_func:m.__setattr__.$slot_func,$wrapper:function(a,b,c){Sk.abstr.checkOneArg(this.$name,b,c);p(a,this);this.call(a,b[0]);return Sk.builtin.none.none$},$textsig:"($self, name, /)",$flags:{OneArg:!0},$doc:"Implement delattr(self, name)."};m.__get__={$name:"__get__",
$slot_name:"tp$descr_get",$slot_func:function(a){return function(b,c,d){null===b&&(b=Sk.builtin.none.none$);null==c&&(c=Sk.builtin.none.none$);const e=a.tp$descr_get?a.tp$descr_get(this):a;b=Sk.misceval.callsimOrSuspendArray(e,[b,c]);return d?b:Sk.misceval.retryOptionalSuspensionOrThrow(b)}},$wrapper:function(a,b,c){Sk.abstr.checkNoKwargs(this.$name,c);Sk.abstr.checkArgsLen(this.$name,b,1,2);c=b[0];b=b[1];c===Sk.builtin.none.none$&&(c=null);b===Sk.builtin.none.none$&&(b=null);if(null===b&&null===
c)throw new Sk.builtin.TypeError("__get__(None, None) is invalid");return this.call(a,c,b)},$textsig:"($self, instance, owner, /)",$flags:{MinArgs:2,MaxArgs:2},$doc:"Return an attribute of instance, which is of type owner."};m.__set__={$name:"__set__",$slot_name:"tp$descr_set",$slot_func:k("__set__","__delete__"),$wrapper:e,$textsig:"($self, instance, value, /)",$flags:{MinArgs:2,MaxArgs:2},$doc:"Set an attribute of instance to value."};m.__delete__={$name:"__delete__",$slot_name:"tp$descr_set",$slot_func:m.__set__.$slot_func,
$wrapper:c,$textsig:"($self, instance, /)",$flags:{OneArg:!0},$doc:"Delete an attribute of instance."};m.__eq__={$name:"__eq__",$slot_name:"ob$eq",$slot_func:g,$wrapper:f,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self==value."};m.__ge__={$name:"__ge__",$slot_name:"ob$ge",$slot_func:g,$wrapper:f,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self>=value."};m.__gt__={$name:"__gt__",$slot_name:"ob$gt",$slot_func:g,$wrapper:f,$textsig:"($self, value, /)",$flags:{OneArg:!0},
$doc:"Return self>value."};m.__le__={$name:"__le__",$slot_name:"ob$le",$slot_func:g,$wrapper:f,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self<=value."};m.__lt__={$name:"__lt__",$slot_name:"ob$lt",$slot_func:g,$wrapper:f,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self<value."};m.__ne__={$name:"__ne__",$slot_name:"ob$ne",$slot_func:g,$wrapper:f,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self!=value."};m.__iter__={$name:"__iter__",$slot_name:"tp$iter",
$slot_func:h,$wrapper:a,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"Implement iter(self)."};m.__next__={$name:"__next__",$slot_name:"tp$iternext",$slot_func:function(a){return function(b){const c=a.tp$descr_get?a.tp$descr_get(this):a,d=Sk.misceval.tryCatch(()=>Sk.misceval.callsimOrSuspendArray(c,[]),a=>{if(!(a instanceof Sk.builtin.StopIteration))throw a;});return b?d:Sk.misceval.retryOptionalSuspensionOrThrow(d)}},$wrapper:function(a,b,c){Sk.abstr.checkNoArgs(this.$name,b,c);return Sk.misceval.chain(a.tp$iternext(!0),
a=>{if(void 0===a)throw new Sk.builtin.StopIteration;return a})},$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"Implement next(self)."};m.__len__={$name:"__len__",$slot_name:"sq$length",$slot_func:function(a){return function(b){const c=a.tp$descr_get?a.tp$descr_get(this):a;if(b)return b=Sk.misceval.callsimOrSuspendArray(c,[]),Sk.misceval.chain(b,a=>Sk.misceval.asIndexOrThrow(a));b=Sk.misceval.callsimArray(c,[]);return Sk.misceval.asIndexOrThrow(b)}},$wrapper:l(a,a=>new Sk.builtin.int_(a)),$flags:{NoArgs:!0},
$textsig:"($self, /)",$doc:"Return len(self)."};m.__contains__={$name:"__contains__",$slot_name:"sq$contains",$slot_func:function(a){return function(b,c){const d=a.tp$descr_get?a.tp$descr_get(this):a;b=Sk.misceval.callsimOrSuspendArray(d,[b]);b=Sk.misceval.chain(b,a=>Sk.misceval.isTrue(a));return b.$isSuspension?c?b:Sk.misceval.retryOptionalSuspensionOrThrow(b):b}},$wrapper:l(c,a=>new Sk.builtin.bool(a)),$textsig:"($self, key, /)",$flags:{OneArg:!0},$doc:"Return key in self."};m.__getitem__={$name:"__getitem__",
$slot_name:"mp$subscript",$slot_func:function(a){return function(b,c){const d=a.tp$descr_get?a.tp$descr_get(this):a;b=Sk.misceval.callsimOrSuspendArray(d,[b]);return c?b:Sk.misceval.retryOptionalSuspensionOrThrow(b)}},$wrapper:c,$textsig:"($self, key, /)",$flags:{OneArg:!0},$doc:"Return self[key]."};m.__setitem__={$name:"__setitem__",$slot_name:"mp$ass_subscript",$slot_func:k("__setitem__","__delitem__","does not support item assignment"),$wrapper:e,$textsig:"($self, key, value, /)",$flags:{MinArgs:2,
MaxArgs:2},$doc:"Set self[key] to value."};m.__delitem__={$name:"__delitem__",$slot_name:"mp$ass_subscript",$slot_func:m.__setitem__.$slot_func,$wrapper:c,$textsig:"($self, key, /)",$flags:{OneArg:!0},$doc:"Delete self[key]."};m.__add__={$name:"__add__",$slot_name:"nb$add",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self+value."};m.__radd__={$name:"__radd__",$slot_name:"nb$reflected_add",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},
$doc:"Return value+self."};m.__iadd__={$name:"__iadd__",$slot_name:"nb$inplace_add",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self+=value."};m.__sub__={$name:"__sub__",$slot_name:"nb$subtract",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self-value."};m.__rsub__={$name:"__rsub__",$slot_name:"nb$reflected_subtract",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value-self."};
m.__imul__={$name:"__imul__",$slot_name:"nb$inplace_multiply",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self*=value."};m.__mul__={$name:"__mul__",$slot_name:"nb$multiply",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self*value."};m.__rmul__={$name:"__rmul__",$slot_name:"nb$reflected_multiply",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value*self."};m.__isub__={$name:"__isub__",
$slot_name:"nb$inplace_subtract",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self-=value."};m.__mod__={$name:"__mod__",$slot_name:"nb$remainder",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self%value."};m.__rmod__={$name:"__rmod__",$slot_name:"nb$reflected_remainder",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value%self."};m.__imod__={$name:"__imod__",$slot_name:"nb$inplace_remainder",
$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement value%=self."};m.__divmod__={$name:"__divmod__",$slot_name:"nb$divmod",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return divmod(self, value)."};m.__rdivmod__={$name:"__rdivmod__",$slot_name:"nb$reflected_divmod",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return divmod(value, self)"};m.__pos__={$name:"__pos__",$slot_name:"nb$positive",$slot_func:h,
$wrapper:a,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"+self"};m.__neg__={$name:"__neg__",$slot_name:"nb$negative",$slot_func:h,$wrapper:a,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"-self"};m.__abs__={$name:"__abs__",$slot_name:"nb$abs",$slot_func:h,$wrapper:a,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"abs(self)"};m.__bool__={$name:"__bool__",$slot_name:"nb$bool",$slot_func:d("__bool__",Sk.builtin.checkBool,"bool",a=>0!==a.v),$wrapper:l(a,a=>new Sk.builtin.bool(a)),$textsig:"($self, /)",
$flags:{NoArgs:!0},$doc:"self != 0"};m.__invert__={$name:"__invert__",$slot_name:"nb$invert",$slot_func:h,$wrapper:a,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"~self"};m.__lshift__={$name:"__lshift__",$slot_name:"nb$lshift",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self<<value."};m.__rlshift__={$name:"__rlshift__",$slot_name:"nb$reflected_lshift",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value<<self."};m.__rshift__=
{$name:"__rshift__",$slot_name:"nb$rshift",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self>>value."};m.__rrshift__={$name:"__rrshift__",$slot_name:"nb$reflected_rshift",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value>>self."};m.__ilshift__={$name:"__ilshift__",$slot_name:"nb$inplace_lshift",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self<<=value."};m.__irshift__={$name:"__irshift__",
$slot_name:"nb$inplace_rshift",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self=>>value."};m.__and__={$name:"__and__",$slot_name:"nb$and",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self&value."};m.__rand__={$name:"__rand__",$slot_name:"nb$refelcted_and",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value&self."};m.__iand__={$name:"__iand__",$slot_name:"nb$and",$slot_func:g,
$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self&=value."};m.__xor__={$name:"__xor__",$slot_name:"nb$xor",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self^value."};m.__rxor__={$name:"__rxor__",$slot_name:"nb$reflected_xor",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value^self."};m.__ixor__={$name:"__ixor__",$slot_name:"nb$inplace_xor",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",
$flags:{OneArg:!0},$doc:"Implement self^=value."};m.__or__={$name:"__or__",$slot_name:"nb$or",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self|value."};m.__ror__={$name:"__ror__",$slot_name:"nb$reflected_or",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value|self."};m.__ior__={$name:"__ior__",$slot_name:"nb$inplace_or",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self|=value."};
m.__int__={$name:"__int__",$slot_name:"nb$int",$slot_func:d("__int__",Sk.builtin.checkInt,"int"),$wrapper:a,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"int(self)"};m.__float__={$name:"__float__",$slot_name:"nb$float",$slot_func:d("__float__",Sk.builtin.checkFloat,"float"),$wrapper:a,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"float(self)"};m.__floordiv__={$name:"__floordiv__",$slot_name:"nb$floor_divide",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self//value."};
m.__rfloordiv__={$name:"__rfloordiv__",$slot_name:"nb$reflected_floor_divide",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value//self."};m.__ifloordiv__={$name:"__ifloordiv__",$slot_name:"nb$inplace_floor_divide",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self//=value."};m.__truediv__={$name:"__truediv__",$slot_name:"nb$divide",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self/value."};
m.__rtruediv__={$name:"__rtruediv__",$slot_name:"nb$reflected_divide",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value/self."};m.__itruediv__={$name:"__itruediv__",$slot_name:"nb$inplace_divide",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self/=value."};m.__index__={$name:"__index__",$slot_name:"nb$index",$slot_func:d("__index__",Sk.builtin.checkInt,"int",a=>a.v),$wrapper:l(a,a=>new Sk.builtin.int_(a)),$textsig:"($self, /)",
$flags:{NoArgs:!0},$doc:"Return self converted to an integer, if self is suitable for use as an index into a list."};m.__pow__={$name:"__pow__",$slot_name:"nb$power",$slot_func:function(a){return function(b,c){const d=a.tp$descr_get?a.tp$descr_get(this):a;return void 0==c?Sk.misceval.callsimArray(d,[b]):Sk.misceval.callsimArray(d,[b,c])}},$wrapper:b,$textsig:"($self, value, mod=None, /)",$flags:{MinArgs:1,MaxArgs:2},$doc:"Return pow(self, value, mod)."};m.__rpow__={$name:"__rpow__",$slot_name:"nb$reflected_power",
$slot_func:m.__pow__.$slot_func,$wrapper:b,$textsig:"($self, value, mod=None, /)",$flags:{MinArgs:1,MaxArgs:2},$doc:"Return pow(value, self, mod)."};m.__ipow__={$name:"__ipow__",$slot_name:"nb$inplace_power",$slot_func:m.__pow__.$slot_func,$wrapper:b,$textsig:"($self, value, mod=None, /)",$flags:{MinArgs:1,MaxArgs:2},$doc:"Implement **="};m.__matmul__={$name:"__matmul__",$slot_name:"nb$matrix_multiply",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self@value."};
m.__rmatmul__={$name:"__rmatmul__",$slot_name:"nb$reflected_matrix_multiply",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value@self."};m.__imatmul__={$name:"__imatmul__",$slot_name:"nb$inplace_matrix_multiply",$slot_func:g,$wrapper:c,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self@=value."};m.__long__={$name:"__long__",$slot_name:"nb$long",$slot_func:d("__long__",Sk.builtin.checkInt,"int"),$wrapper:a,$textsig:"($self, /)",$flags:{NoArgs:!0},
$doc:"int(self)"};var A,t={next:{$name:"next",$slot_name:"tp$iternext",$slot_func:m.__next__.$slot_func,$wrapper:m.__next__.$wrapper,$textsig:m.__next__.$textsig,$flags:m.__next__.$flags},__nonzero__:{$name:"__nonzero__",$slot_name:"nb$bool",$slot_func:d("__nonzero__",Sk.builtin.checkInt,"int",a=>0!==a.v),$wrapper:l(a,a=>new Sk.builtin.bool(a)),$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"x.__nonzero__() <==> x != 0"},__div__:{$name:"__div__",$slot_name:"nb$divide",$slot_func:g,$wrapper:c,$textsig:"($self, other/)",
$flags:{OneArg:!0},$doc:"x.__div__(y) <==> x/y"},__rdiv__:{$name:"__rdiv__",$slot_name:"nb$reflected_divide",$slot_func:g,$wrapper:c,$textsig:"($self, other/)",$flags:{OneArg:!0},$doc:"x.__rdiv__(y) <==> x/y"},__idiv__:{$name:"__idiv__",$slot_name:"nb$inplace_divide",$slot_func:g,$wrapper:c,$textsig:"($self, other/)",$flags:{OneArg:!0},$doc:"implement self /= other"}};Sk.subSlots={main_slots:Object.entries({tp$init:"__init__",tp$call:"__call__",$r:"__repr__",tp$str:"__str__",tp$getattr:"__getattribute__",
tp$setattr:["__setattr__","__delattr__"],ob$eq:"__eq__",ob$ne:"__ne__",ob$lt:"__lt__",ob$le:"__le__",ob$gt:"__gt__",ob$ge:"__ge__",tp$descr_get:"__get__",tp$descr_set:["__set__","__delete__"],tp$iter:"__iter__",tp$iternext:"__next__"}),number_slots:Object.entries({nb$abs:"__abs__",nb$negative:"__neg__",nb$positive:"__pos__",nb$int:"__int__",nb$long:"__long__",nb$float:"__float__",nb$add:"__add__",nb$reflected_add:"__radd__",nb$inplace_add:"__iadd__",nb$subtract:"__sub__",nb$reflected_subtract:"__rsub__",
nb$inplace_subtract:"__isub__",nb$multiply:"__mul__",nb$reflected_multiply:"__rmul__",nb$inplace_multiply:"__imul__",nb$floor_divide:"__floordiv__",nb$reflected_floor_divide:"__rfloordiv__",nb$inplace_floor_divide:"__ifloordiv__",nb$invert:"__invert__",nb$remainder:"__mod__",nb$reflected_remainder:"__rmod__",nb$inplace_remainder:"__imod__",nb$divmod:"__divmod__",nb$reflected_divmod:"__rdivmod__",nb$power:"__pow__",nb$reflected_power:"__rpow__",nb$inplace_power:"__ipow__",nb$divide:"__truediv__",nb$reflected_divide:"__rtruediv__",
nb$inplace_divide:"__itruediv__",nb$bool:"__bool__",nb$and:"__and__",nb$reflected_and:"__rand__",nb$inplace_and:"__iand__",nb$or:"__or__",nb$reflected_or:"__ror__",nb$inplace_or:"__ior__",nb$xor:"__xor__",nb$reflected_xor:"__rxor__",nb$inplace_xor:"__ixor__",nb$lshift:"__lshift__",nb$reflected_lshift:"__rlshift__",nb$rshift:"__rshift__",nb$reflected_rshift:"__rrshift__",nb$inplace_lshift:"__ilshift__",nb$inplace_rshift:"__irshift__",nb$matrix_multiply:"__matmul__",nb$reflected_matrix_multiply:"__rmatmul__",
nb$inplace_matrix_multiply:"__imatmul__"}),sequence_and_mapping_slots:Object.entries({sq$length:"__len__",sq$contains:"__contains__",mp$subscript:"__getitem__",mp$ass_subscript:["__setitem__","__delitem__"],nb$add:"__add__",nb$multiply:"__mul__",nb$reflected_multiply:"__rmul__",nb$inplace_add:"__iadd__",nb$inplace_multiply:"__imul__"})};Sk.reflectedNumberSlots={nb$add:{reflected:"nb$reflected_add"},nb$subtract:{reflected:"nb$reflected_subtract",slot:function(a){return a instanceof this.constructor?
a.nb$subtract(this):Sk.builtin.NotImplemented.NotImplemented$}},nb$multiply:{reflected:"nb$reflected_multiply"},nb$divide:{reflected:"nb$reflected_divide",slot:function(a){return a instanceof this.constructor?a.nb$divide(this):Sk.builtin.NotImplemented.NotImplemented$}},nb$floor_divide:{reflected:"nb$reflected_floor_divide",slot:function(a){return a instanceof this.constructor?a.nb$floor_divide(this):Sk.builtin.NotImplemented.NotImplemented$}},nb$remainder:{reflected:"nb$reflected_remainder",slot:function(a){return a instanceof
this.constructor?a.nb$remainder(this):Sk.builtin.NotImplemented.NotImplemented$}},nb$divmod:{reflected:"nb$reflected_divmod",slot:function(a){return a instanceof this.constructor?a.nb$divmod(this):Sk.builtin.NotImplemented.NotImplemented$}},nb$power:{reflected:"nb$reflected_power",slot:function(a,b){return a instanceof this.constructor?a.nb$power(this,b):Sk.builtin.NotImplemented.NotImplemented$}},nb$and:{reflected:"nb$reflected_and"},nb$or:{reflected:"nb$reflected_or"},nb$xor:{reflected:"nb$reflected_xor"},
nb$lshift:{reflected:"nb$reflected_lshift",slot:function(a){return a instanceof this.constructor?a.nb$lshift(this):Sk.builtin.NotImplemented.NotImplemented$}},nb$rshift:{reflected:"nb$reflected_rshift",slot:function(a){return a instanceof this.constructor?a.nb$rshift(this):Sk.builtin.NotImplemented.NotImplemented$}},nb$matrix_multiply:{reflected:"nb$reflexted_matrix_multiply",slot:function(a){return a instanceof this.constructor?a.nb$matrix_multiply(this):Sk.builtin.NotImplemented.NotImplemented$}}};
Sk.sequenceAndMappingSlots={sq$concat:["nb$add"],sq$repeat:["nb$multiply","nb$reflected_multiply"],mp$length:["sq$length"],sq$inplace_repeat:["nb$inplace_multiply"],sq$inplace_concat:["nb$inplace_add"]};Sk.dunderToSkulpt={__repr__:"$r",__str__:"tp$str",__init__:"tp$init",__new__:"tp$new",__hash__:"tp$hash",__call__:"tp$call",__iter__:"tp$iter",__next__:"tp$iternext",__eq__:"ob$eq",__ne__:"ob$ne",__lt__:"ob$lt",__le__:"ob$le",__gt__:"ob$gt",__ge__:"ob$ge",__abs__:"nb$abs",__neg__:"nb$negative",__pos__:"nb$positive",
__int__:"nb$int",__float__:"nb$float",__add__:"nb$add",__radd__:"nb$reflected_add",__iadd__:"nb$inplace_add",__sub__:"nb$subtract",__rsub__:"nb$reflected_subtract",__isub__:"nb$inplace_subtract",__mul__:"nb$multiply",__rmul__:"nb$reflected_multiply",__imul__:"nb$inplace_multiply",__truediv__:"nb$divide",__rtruediv__:"nb$reflected_divide",__itruediv__:"nb$inplace_divide",__floordiv__:"nb$floor_divide",__rfloordiv__:"nb$reflected_floor_divide",__ifloordiv__:"nb$inplace_floor_divide",__invert__:"nb$invert",
__mod__:"nb$remainder",__rmod__:"nb$reflected_remainder",__imod__:"nb$inplace_remainder",__divmod__:"nb$divmod",__rdivmod__:"nb$reflected_divmod",__pow__:"nb$power",__rpow__:"nb$reflected_power",__ipow__:"nb$inplace_power",__bool__:"nb$bool",__long__:"nb$long",__lshift__:"nb$lshift",__rlshift__:"nb$reflected_lshift",__ilshift__:"nb$inplace_lshift",__rshift__:"nb$rshift",__rrshift__:"nb$reflected_rshift",__irshift__:"nb$inplace_rshift",__and__:"nb$and",__rand__:"nb$reflected_and",__iand__:"nb$inplace_and",
__or__:"nb$or",__ror__:"nb$reflected_or",__ior__:"nb$inplace_or",__xor__:"nb$xor",__rxor__:"nb$reflected_xor",__ixor__:"nb$inplace_xor",__matmul__:"nb$matrix_multiply",__rmatmul__:"nb$reflected_matrix_multiply",__imatmul__:"nb$inplace_matrix_multiply",__get__:"tp$descr_get",__set__:"tp$descr_set",__delete__:"tp$descr_set",__getattribute__:"tp$getattr",__getattr__:"tp$getattr",__setattr__:"tp$setattr",__delattr__:"tp$setattr",__len__:"sq$length",__contains__:"sq$contains",__getitem__:"mp$subscript",
__setitem__:"mp$ass_subscript",__delitem__:"mp$ass_subscript"};Sk.exportSymbol("Sk.setupDunderMethods",Sk.setupDunderMethods);Sk.setupDunderMethods=function(a){function b(a,b,c){for(let d=0;d<a.length;d++){const e=a[d].prototype;e.hasOwnProperty(c)||(e[c]=e[b],delete e[b])}}var c=Sk.slots;if(!a||void 0!==A){var d=Sk.abstr.built$iterators,e=[Sk.builtin.int_,Sk.builtin.lng,Sk.builtin.float_,Sk.builtin.complex],f=Sk.subSlots.number_slots,g=Sk.subSlots.main_slots,h=g.findIndex(a=>"tp$iternext"===a[0]),
k=f.findIndex(a=>"nb$bool"===a[0]),l=Sk.dunderToSkulpt;if(a){l.__bool__="nb$bool";l.__next__="tp$iternext";delete l.__nonzero__;delete l.__div__;delete l.__rdiv__;delete l.__idiv__;delete l.next;for(let a in A)c[a]=A[a];for(let a in t)delete c[a];for(a=0;a<e.length;a++)c=e[a].prototype,delete c.__div__,delete c.__rdiv__;g[h][1]="__next__";f[k][1]="__bool__";b(d,"next","__next__");b(e,"__bool__","__nonzero__")}else{void 0===A&&(c.py3$slots={__next__:c.__next__},A=c.py3$slots);l.next="tp$iternext";
l.__nonzero__="nb$bool";l.__div__="nb$divide";l.__rdiv__="nb$reflected_divide";l.__idiv__="nb$inplace_divide";delete l.__bool__;delete l.__next__;for(let a in t)c[a]=t[a];for(let a in A)delete c[a];g[h][1]="next";f[k][1]="__nonzero__";b(d,"__next__","next");b(e,"__nonzero__","__bool__");for(d=0;d<e.length;d++)f=e[d],g=f.prototype,g.hasOwnProperty("__div__")||(g.__div__=new Sk.builtin.wrapper_descriptor(f,t.__div__,g.nb$divide),g.__rdiv__=new Sk.builtin.wrapper_descriptor(f,t.__rdiv__,Sk.reflectedNumberSlots.nb$divide.slot))}}}},
function(m,q){function a(a,h,d){return Sk.abstr.buildNativeClass(a,{constructor:d.constructor,slots:Object.assign({tp$getattr:Sk.generic.getAttr,$r:e},d.slots),getsets:Object.assign(d.getsets||{},f),proto:Object.assign(d.proto||{},{d$repr_name:h||a,d$check:c,d$set_check:b}),flags:{sk$acceptable_as_base_class:!1}})}function c(a){if(null==a)return this;if(!a.ob$type.$isSubType(this.d$type))throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' requires a '"+this.d$type.prototype.tp$name+"' object but received a '"+
Sk.abstr.typeName(a)+"' object");}function b(a){if(!a.ob$type.$isSubType(this.d$type))throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' requires a '"+this.d$type.prototype.tp$name+"' object but received a '"+Sk.abstr.typeName(a)+"' object");}function e(){return new Sk.builtin.str("<"+this.d$repr_name+" '"+this.d$name+"' of '"+this.d$type.prototype.tp$name+"' objects>")}const f={__doc__:{$get(){return this.d$def.$doc?new Sk.builtin.str(this.d$def.$doc):Sk.builtin.none.none$}},__objclass__:{$get(){return this.d$type}},
__name__:{$get(){return new Sk.builtin.str(this.d$name)}}};m={__text_signature__:{$get(){return this.d$def.$textsig?new Sk.builtin.str(this.d$def.$textsig):Sk.builtin.none.none$}}};Sk.builtin.getset_descriptor=a("getset_descriptor",void 0,{constructor:function(a,b){this.d$def=b;this.$get=b.$get;this.$set=b.$set;this.d$type=a;this.d$name=b.$name},slots:{tp$descr_get(a,b){if(b=this.d$check(a))return b;if(void 0!==this.$get)return this.$get.call(a);throw new Sk.builtin.AttributeError("getset_descriptor '"+
this.d$name+"' of '"+this.d$type.prototype.tp$name+"' objects is not readable");},tp$descr_set(a,b){this.d$set_check(a);if(void 0!==this.$set)return this.$set.call(a,b);throw new Sk.builtin.AttributeError("attribute '"+this.d$name+"' of '"+this.d$type.prototype.tp$name+"' objects is readonly");}}});Sk.builtin.method_descriptor=a("method_descriptor","method",{constructor:function(a,b){this.d$def=b;this.$meth=b.$meth;this.d$type=a;this.d$name=b.$name||"<native JS>";this.$flags=a=b.$flags||{};a.FastCall&&
a.NoKwargs?this.tp$call=this.$methodFastCallNoKwargs:a.FastCall?this.tp$call=this.$methodFastCall:a.NoArgs?this.tp$call=this.$methodCallNoArgs:a.OneArg?this.tp$call=this.$methodCallOneArg:a.NamedArgs?this.tp$call=this.$methodCallNamedArgs:void 0!==a.MinArgs?this.tp$call=this.$methodCallMinArgs:(this.func_code=b.$meth,this.tp$call=this.$defaultCall,this.$memoiseFlags=Sk.builtin.func.prototype.$memoiseFlags,this.$resolveArgs=Sk.builtin.func.prototype.$resolveArgs)},slots:{tp$call(a,b){return this.tp$call(a,
b)},tp$descr_get(a,b){let c;return(c=this.d$check(a))?c:new Sk.builtin.sk_method(this.d$def,a)}},getsets:m,proto:{$methodFastCall(a,b){const c=a.shift();this.m$checkself(c);return this.$meth.call(c,a,b)},$methodFastCallNoKwargs(a,b){const c=a.shift();this.m$checkself(c);Sk.abstr.checkNoKwargs(this.d$name,b);return this.$meth.call(c,a)},$methodCallNoArgs(a,b){const c=a.shift();this.m$checkself(c);Sk.abstr.checkNoArgs(this.d$name,a,b);return this.$meth.call(c)},$methodCallOneArg(a,b){const c=a.shift();
this.m$checkself(c);Sk.abstr.checkOneArg(this.d$name,a,b);return this.$meth.call(c,a[0])},$methodCallNamedArgs(a,b){const c=a.shift();this.m$checkself(c);a=Sk.abstr.copyKeywordsToNamedArgs(this.d$name,this.$flags.NamedArgs,a,b,this.$flags.Defaults);return this.$meth.call(c,...a)},$methodCallMinArgs(a,b){const c=a.shift();this.m$checkself(c);Sk.abstr.checkNoKwargs(this.d$name,b);Sk.abstr.checkArgsLen(this.d$name,a,this.$flags.MinArgs,this.$flags.MaxArgs);return this.$meth.call(c,...a)},$defaultCall(a,
b){this.m$checkself(a[0]);return Sk.builtin.func.prototype.tp$call.call(this,a,b)},m$checkself(a){if(void 0===a)throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' of '"+this.d$type.prototype.tp$name+"' object needs an argument");this.d$check(a)}}});Sk.builtin.wrapper_descriptor=a("wrapper_descriptor","slot wrapper",{constructor:function(a,b,c){this.d$def=b;this.d$type=a;this.d$name=c.$name=b.$name;this.d$wrapped=c},slots:{tp$descr_get(a,b){let c;return(c=this.d$check(a))?c:new Sk.builtin.method_wrapper(this,
a)},tp$call(a,b){if(1>a.length)throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' of '"+this.d$type.prototype.tp$name+"' object needs an argument");const c=a.shift();if(!c.ob$type.$isSubType(this.d$type))throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' requires a '"+this.d$type.prototype.tp$name+"' object but received a '"+Sk.abstr.typeName(c)+"'");return this.raw$call(c,a,b)}},proto:{raw$call(a,b,c){this.d$wrapped.$name=this.d$name;return this.d$def.$wrapper.call(this.d$wrapped,
a,b,c)}}});Sk.builtin.method_wrapper=a("method_wrapper",void 0,{constructor:function(a,b){this.m$descr=a;this.m$self=b;this.d$def=a.d$def;this.d$name=a.d$name;this.d$type=a.d$type},slots:{tp$call(a,b){return this.m$descr.raw$call(this.m$self,a,b)},tp$richcompare(a,b){if("Eq"!==b&&"NotEq"!==b||!(a instanceof Sk.builtin.method_wrapper))return Sk.builtin.NotImplemented.NotImplemented$;a=this.m$self===a.m$self&&this.m$descr===a.m$descr;return"Eq"===b?a:!a},$r(){return new Sk.builtin.str("<method-wrapper '"+
this.d$name+"' of "+Sk.abstr.typeName(this.m$self)+" object>")}},getsets:{__self__:{$get(){return this.m$self}}}});Sk.builtin.classmethod_descriptor=a("classmethod_descriptor","method",{constructor:function(a,b){this.d$def=b;this.$meth=b.$meth;this.d$type=a;this.d$name=b.$name||"<native JS>"},slots:{tp$call(a,b){if(1>a.length)throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' of '"+this.d$type.prototype.tp$name+"' object needs an argument");const c=a.shift();return this.tp$descr_get(null,
c).tp$call(a,b)},tp$descr_get(a,b,c){if(void 0===b)if(null!==a)b=b||a.ob$type;else throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' for type '"+this.d$type.prototype.tp$name+"' needs an object or a type");if(b.ob$type!==Sk.builtin.type)throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' for type '"+this.d$type.prototype.tp$name+"' needs a type not a '"+Sk.abstr.typeName(b)+"' as arg 2");if(!b.$isSubType(this.d$type))throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' requires a '"+
this.d$type.prototype.tp$name+"' object but received a '"+Sk.abstr.typeName(b)+"' object");return new Sk.builtin.sk_method(this.d$def,b)}},getsets:m});[Sk.builtin.method_descriptor,Sk.builtin.getset_descriptor,Sk.builtin.wrapper_descriptor,Sk.builtin.method_wrapper,Sk.builtin.classmethod_descriptor].forEach(a=>{Sk.abstr.setUpSlots(a);Sk.abstr.setUpMethods(a);Sk.abstr.setUpGetSets(a)})},function(m,q){Sk.builtin.sk_method=Sk.abstr.buildNativeClass("builtin_function_or_method",{constructor:function(a,
c,b){this.$meth=a.$meth.bind(c);this.$doc=a.$doc;this.$self=c||null;this.$module=b?new Sk.builtin.str(b):null;this.$name=a.$name||a.$meth.name||"<native JS>";this.m$def=a;this.$textsig=a.$textsig;this.$flags=a=a.$flags||{};a.FastCall&&a.NoKwargs?this.tp$call=this.$fastCallNoKwargs:a.FastCall?this.tp$call=this.$meth:a.NoArgs?this.tp$call=this.$callNoArgs:a.OneArg?this.tp$call=this.$callOneArg:a.NamedArgs?this.tp$call=this.$callNamedArgs:void 0!==a.MinArgs?this.tp$call=this.$callMinArgs:(this.func_code=
this.$meth,this.tp$call=this.$defaultCallMethod)},proto:{$fastCallNoKwargs(a,c){Sk.abstr.checkNoKwargs(this.$name,c);return this.$meth(a)},$callNoArgs(a,c){Sk.abstr.checkNoArgs(this.$name,a,c);return this.$meth()},$callOneArg(a,c){Sk.abstr.checkOneArg(this.$name,a,c);return this.$meth(a[0])},$callNamedArgs(a,c){a=Sk.abstr.copyKeywordsToNamedArgs(this.$name,this.$flags.NamedArgs,a,c,this.$flags.Defaults);return this.$meth(...a)},$callMinArgs(a,c){Sk.abstr.checkNoKwargs(this.$name,c);Sk.abstr.checkArgsLen(this.$name,
a,this.$flags.MinArgs,this.$flags.MaxArgs);return this.$meth(...a)},$defaultCallMethod(a,c){return null!==this.$self?Sk.builtin.func.prototype.tp$call.call(this,[this.$self,...a],c):Sk.builtin.func.prototype.tp$call.call(this,a,c)},$memoiseFlags(){return Sk.builtin.func.prototype.$memoiseFlags.call(this)},$resolveArgs(){return Sk.builtin.func.prototype.$resolveArgs.call(this)}},flags:{sk$acceptable_as_base_class:!1},slots:{tp$getattr:Sk.generic.getAttr,$r(){return null===this.$self?new Sk.builtin.str("<built-in function "+
this.$name+">"):new Sk.builtin.str("<built-in method "+this.$name+" of "+Sk.abstr.typeName(this.$self)+" object>")},tp$call(a,c){return this.tp$call(a,c)},tp$richcompare(a,c){if("Eq"!==c&&"NotEq"!==c||!(a instanceof Sk.builtin.sk_method))return Sk.builtin.NotImplemented.NotImplemented$;a=this.$self===a.$self&&this.m$def.$meth===a.m$def.$meth;return"Eq"===c?a:!a}},getsets:{__module__:{$get(){return this.$module||Sk.builtin.none.none$},$set(a){this.$module=a=a||Sk.builtin.none.none$}},__doc__:{$get(){return this.$doc?
new Sk.builtin.str(this.$doc):Sk.builtin.none.none$}},__name__:{$get(){return new Sk.builtin.str(this.$name)}},__text_signature__:{$get(){return new Sk.builtin.str(this.$textsig)}},__self__:{$get(){return this.$self||Sk.sysModules.mp$lookup(this.$module)||Sk.builtin.none.none$}}}})},function(m,q){Sk.builtin.none=Sk.abstr.buildNativeClass("NoneType",{constructor:function(){return Sk.builtin.none.none$},slots:{tp$new(a,c){Sk.abstr.checkNoArgs("NoneType",a,c);return Sk.builtin.none.none$},$r(){return new Sk.builtin.str("None")},
tp$as_number:!0,nb$bool(){return!1}},flags:{sk$acceptable_as_base_class:!1}});Sk.builtin.none.none$=Object.create(Sk.builtin.none.prototype,{v:{value:null,enumerable:!0}});Sk.builtin.NotImplemented=Sk.abstr.buildNativeClass("NotImplementedType",{constructor:function(){return Sk.builtin.NotImplemented.NotImplemented$},slots:{$r(){return new Sk.builtin.str("NotImplemented")},tp$new(a,c){Sk.abstr.checkNoArgs("NotImplementedType",a,c);return Sk.builtin.NotImplemented.NotImplemented$}},flags:{sk$acceptable_as_base_class:!1}});
Sk.builtin.NotImplemented.NotImplemented$=Object.create(Sk.builtin.NotImplemented.prototype,{v:{value:null,enumerable:!0}})},function(m,q){const a=/^(?:(.)?([<>=\^]))?([\+\-\s])?(#)?(0)?(\d+)?(,)?(?:\.(\d+))?([bcdeEfFgGnosxX%])?$/;Sk.formatting={};let c=function(a,b,c,e){Sk.asserts.assert("string"===typeof b);if(a[6]){var d=parseInt(a[6],10);e=a[2]||(a[5]?"=":e?">":"<");let f=d-(b.length+(c?c.length:0));if(0>=f)return b;d=(a[1]||(a[5]?"0":" ")).repeat(f);switch(e){case "=":if("s"===a[9])throw new Sk.builtin.ValueError("'=' alignment not allowed in string format specifier");
return c+d+b;case ">":return d+c+b;case "<":return c+b+d;case "^":return a=Math.floor(f/2),d.substring(0,a)+c+b+d.substring(a)}}return c+b},b=function(a,b){return b?"-":"+"===a[3]?"+":" "===a[3]?" ":""},e=function(a,e,d){Sk.asserts.assert(e instanceof Sk.builtin.int_||e instanceof Sk.builtin.lng);if(a[8])throw new Sk.builtin.ValueError("Precision not allowed in integer format");let f=e.str$(d,!1);e=e.nb$isnegative();e=b(a,e);a[4]&&(16===d?e+="0x":8===d?e+="0o":2===d&&(e+="0b"));"X"===a[9]&&(f=f.toUpperCase());
"n"===a[9]?f=(+f).toLocaleString():a[7]&&(d=f.toString().split("."),d[0]=d[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),f=d.join("."));return c(a,f,e,!0)},f=function(f,h,d){if(!h)return f.str$(10,!0);h=h.match(a);if(!h)throw new Sk.builtin.ValueError("Invalid format specifier");var g=h[9];g||(g=d?"g":"d");if(-1==(d?"fFeEgG%":"bcdoxXnfFeEgG%").indexOf(g))throw new Sk.builtin.ValueError("Unknown format code '"+h[9]+"' for object of type '"+Sk.abstr.typeName(f)+"'");switch(g){case "d":case "n":return e(h,
f,10);case "x":case "X":return e(h,f,16);case "o":return e(h,f,8);case "b":return e(h,f,2);case "c":if(h[3])throw new Sk.builtin.ValueError("Sign not allowed with integer format specifier 'c'");if(h[4])throw new Sk.builtin.ValueError("Alternate form not allowed with integer format specifier 'c'");if(h[7])throw new Sk.builtin.ValueError("Cannot specify ',' with 'c'");if(h[8])throw new Sk.builtin.ValueError("Cannot specify ',' with 'c'");return c(h,String.fromCodePoint(Sk.builtin.asnum$(f)),"",!0);
case "f":case "F":case "e":case "E":case "g":case "G":{if(h[4])throw new Sk.builtin.ValueError("Alternate form (#) not allowed in float format specifier");d=Sk.builtin.asnum$(f);"string"===typeof d&&(d=Number(d));if(Infinity===d)return c(h,"inf","",!0);if(-Infinity===d)return c(h,"inf","-",!0);if(isNaN(d))return c(h,"nan","",!0);f=!1;0>d&&(d=-d,f=!0);var l=["toExponential","toFixed","toPrecision"]["efg".indexOf(g.toLowerCase())];let a=h[8]?parseInt(h[8],10):6;d=d[l](a);-1!=="EFG".indexOf(g)&&(d=d.toUpperCase());
if("g"===g.toLowerCase()||!h[9]){if(l=d.match(/\.(\d*[1-9])?(0+)$/)){let [,a,b]=l;d=d.slice(0,a?-b.length:-(b.length+1))}-1!=d.indexOf(".")||h[9]||(d+=".0")}"e"===g.toLowerCase()&&(d=d.replace(/^([-+]?[0-9]*\.?[0-9]+[eE][-+]?)([0-9])?$/,"$10$2"));h[7]&&(g=d.toString().split("."),g[0]=g[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),d=g.join("."));return c(h,d,b(h,f),!0)}case "%":if(h[4])throw new Sk.builtin.ValueError("Alternate form (#) not allowed with format specifier '%'");f=Sk.builtin.asnum$(f);"string"===
typeof f&&(f=Number(f));if(Infinity===f)return c(h,"inf%","",!0);if(-Infinity===f)return c(h,"inf%","-",!0);if(isNaN(f))return c(h,"nan%","",!0);g=!1;0>f&&(f=-f,g=!0);d=h[8]?parseInt(h[8],10):6;f=(100*f).toFixed(d)+"%";return c(h,f,b(h,g),!0);default:throw new Sk.builtin.ValueError("Unknown format code '"+h[9]+"'");}};Sk.formatting.mkNumber__format__=a=>function(b){if(!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("format() argument 2 must be str, not "+Sk.abstr.typeName(b));return new Sk.builtin.str(f(this,
b.$jsstr(),a))};Sk.formatting.format=function(a,b){b=b||[];const c={};for(let a=0;a<b.length;a+=2)c[b[a]]=b[a+1];for(let b in a)c[b]=a[b];let e=0;a=this.v.replace(/{(((?:\d+)|(?:\w+))?((?:\.(\w+))|(?:\[((?:\d+)|(?:\w+))\])?))?(?:!([rs]))?(?::([^}]*))?}/g,function(a,b,d,f,g,h,l,B,E,m){let k;if(void 0!==h&&""!==h)a=c[d],k=a.constructor===Array?a[h]:/^\d+$/.test(h)?Sk.abstr.objectGetItem(a,new Sk.builtin.int_(parseInt(h,10)),!1):Sk.abstr.objectGetItem(a,new Sk.builtin.str(h),!1),e++;else if(void 0!==
g&&""!==g)k=Sk.abstr.gattr(c[d||e++],new Sk.builtin.str(g));else if(void 0!==d&&""!==d)k=c[d];else if(void 0===b||""===b)k=c[e],e++;else if(b instanceof Sk.builtin.int_||b instanceof Sk.builtin.float_||b instanceof Sk.builtin.lng||/^\d+$/.test(b))k=c[b],e++;if("s"===l)k=new Sk.builtin.str(k);else if("r"===l)k=Sk.builtin.repr(k);else if(""!==l&&void 0!==l)throw new Sk.builtin.ValueError("Unknown conversion specifier "+l);return Sk.abstr.objectFormat(k,new Sk.builtin.str(B)).$jsstr()});return new Sk.builtin.str(a)};
Sk.formatting.formatString=function(b){if(!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("format() argument 2 must be str, not "+Sk.abstr.typeName(b));b=b.$jsstr().match(a);if(b[9]&&"s"!==b[9])throw new Sk.builtin.ValueError("Unknown format code '"+b[9]+"' for object of type 'str'");if(b[3])throw new Sk.builtin.ValueError("Sign not allowed in string format specifier");if(b[4])throw new Sk.builtin.ValueError("Alternate form (#) not allowed with string format specifier");if(b[7])throw new Sk.builtin.ValueError("Cannot specify ',' with 's'");
let e=this.v;b[8]&&(e=e.substring(0,b[8]));return new Sk.builtin.str(c(b,e,"",!1))}},function(m,q){function a(a){let b;const c=[];for(let d=0;d<a.length;d++)b=a.charAt(d),k.test(b)?c.push(b):"\\000"===b?c.push("\\000"):c.push("\\"+b);return c.join("")}function c(a,b,c){b=Sk.builtin.checkNone(b)?null:a.get$tgt(b);if(null!==b&&!b.length)throw new Sk.builtin.ValueError("empty separator");a=a.v;var d=0;if(null===b){var e=/[\s\xa0]+/g;d=a.length;a=a.replace(w,"");d-=a.length}else e=b.replace(p,"\\$1"),
e=new RegExp(e,"g");const f=[];let g=0,k=0,h;for(c=0>c?Infinity:c;null!=(h=e.exec(a))&&k<c&&h.index!==e.lastIndex;)f.push(g+d),f.push(h.index+d),g=e.lastIndex,k+=1;if(null!==b||a.length-g)f.push(g+d),f.push(a.length+d);return f}function b(b,c){return function(d){if(void 0===d||Sk.builtin.checkNone(d))d=b;else if(d instanceof Sk.builtin.str)d=a(d.v),d=new RegExp(c(d),"g");else throw new Sk.builtin.TypeError("strip arg must be None or str");return new Sk.builtin.str(this.v.replace(d,""))}}function e(a){return function(b){b=
this.get$tgt(b);const c=this.v;let d;if(a){if(d=c.lastIndexOf(b),0>d)return new Sk.builtin.tuple([new Sk.builtin.str(""),new Sk.builtin.str(""),new Sk.builtin.str(c)])}else if(d=c.indexOf(b),0>d)return new Sk.builtin.tuple([new Sk.builtin.str(c),new Sk.builtin.str(""),new Sk.builtin.str("")]);return new Sk.builtin.tuple([new Sk.builtin.str(c.substring(0,d)),new Sk.builtin.str(b),new Sk.builtin.str(c.substring(d+b.length))])}}function f(a,b){return function(c,d){c=Sk.misceval.asIndexSized(c,Sk.builtin.OverflowError);
if(void 0===d)d=" ";else if(d instanceof Sk.builtin.str&&1===d.sq$length())d=d.v;else throw new Sk.builtin.TypeError("the fill character must be a str of length 1");const e=this.sq$length();let f;if(e>=c)return new Sk.builtin.str(this.v);if(b)return f=d.repeat(Math.floor((c-e)/2)),f=f+this.v+f,(c-e)%2&&(f+=d),new Sk.builtin.str(f);f=d.repeat(c-e);return new Sk.builtin.str(a?f+this.v:this.v+f)}}function l(a,b,c){({start:b,end:c}=Sk.builtin.slice.startEnd$wrt(a,b,c));if(a.$hasAstralCodePoints()){const d=
a.codepoints[b];b=void 0===d?b+a.v.length-a.codepoints.length:d;c=a.codepoints[c];c=void 0===c?a.v.length:c}return{start:b,end:c}}function h(a){return function(b,c,d){b=this.get$tgt(b);({start:c,end:d}=l(this,c,d));if(d<c)return-1;d-=b.length;b=a?this.v.lastIndexOf(b,d):this.v.indexOf(b,c);b=b>=c&&b<=d?b:-1;if(this.codepoints){d=this.sq$length();c=-1;for(let a=0;a<d;a++)b==this.codepoints[a]&&(c=a)}else c=b;return c}}function d(a,b){return function(c,d,e){if(!(c instanceof Sk.builtin.str||c instanceof
Sk.builtin.tuple))throw new Sk.builtin.TypeError(a+" first arg must be str or a tuple of str, not "+Sk.abstr.typeName(c));({start:d,end:e}=l(this,d,e));if(d>e)return Sk.builtin.bool.false$;d=this.v.slice(d,e);if(c instanceof Sk.builtin.tuple){for(let e=Sk.abstr.iter(c),f=e.tp$iternext();void 0!==f;f=e.tp$iternext()){if(!(f instanceof Sk.builtin.str))throw new Sk.builtin.TypeError("tuple for "+a+" must only contain str, not "+Sk.abstr.typeName(f));if(b(d,f.v))return Sk.builtin.bool.true$}return Sk.builtin.bool.false$}return new Sk.builtin.bool(b(d,
c.v))}}var g=/^[0-9!#_]/,n=Object.create(null);Sk.builtin.str=Sk.abstr.buildNativeClass("str",{constructor:function(a){Sk.asserts.assert(this instanceof Sk.builtin.str,"bad call to str - use 'new'");if("string"!==typeof a)if(void 0===a)a="";else if(null===a)a="None";else{if(void 0!==a.tp$str)return a.tp$str();if("number"===typeof a)a=Number.isFinite(a)?String(a):String(a).replace("Infinity","inf").replace("NaN","nan");else throw new Sk.builtin.TypeError("could not convert object of type '"+Sk.abstr.typeName(a)+
"' to str");}var b=n[a];if(void 0!==b)return b;n[a]=this;b=void 0===t[a]?a:a+"_$rw$";this.$mangled=b;this.$savedKeyHash=a.replace(g,"!$&");this.v=a},slots:{tp$getattr:Sk.generic.getAttr,tp$as_sequence_or_mapping:!0,tp$doc:"str(object='') -> str\nstr(bytes_or_buffer[, encoding[, errors]]) -> str\n\nCreate a new string object from the given object. If encoding or\nerrors is specified, then the object must expose a data buffer\nthat will be decoded using the given encoding and error handler.\nOtherwise, returns the result of object.__str__() (if defined)\nor repr(object).\nencoding defaults to sys.getdefaultencoding().\nerrors defaults to 'strict'.",
tp$new(a,b){b=b||[];if(this!==Sk.builtin.str.prototype)return this.$subtype_new(a,b);if(1>=a.length&&!b.length)return new Sk.builtin.str(a[0]);if(Sk.__future__.python3){const [c,d,e]=Sk.abstr.copyKeywordsToNamedArgs("str",["object","encoding","errors"],a,b);if(void 0===c||void 0===d&&void 0===e)return new Sk.builtin.str(c);Sk.builtin.bytes.check$encodeArgs("str",d,e);if(!Sk.builtin.checkBytes(c))throw new Sk.builtin.TypeError("decoding to str: need a bytes-like object, "+Sk.abstr.typeName(c)+" found");
return Sk.builtin.bytes.$decode.call(c,d,e)}throw new Sk.builtin.TypeError("str takes at most one argument ("+(a.length+b.length)+" given)");},$r(){let a="'";-1!==this.v.indexOf("'")&&-1===this.v.indexOf('"')&&(a='"');const b=this.v.length;let c=a;for(let f=0;f<b;f++){var d=this.v.charAt(f);var e=this.v.charCodeAt(f);d===a||"\\"===d?c+="\\"+d:"\t"===d?c+="\\t":"\n"===d?c+="\\n":"\r"===d?c+="\\r":(255<e&&55296>e||57344<=e)&&!Sk.__future__.python3?c+="\\u"+("000"+e.toString(16)).slice(-4):55296<=e&&
!Sk.__future__.python3?(d=this.v.codePointAt(f),f++,d=d.toString(16),e="0000000"+d.toString(16),c=4<d.length?c+("\\U"+e.slice(-8)):c+("\\u"+e.slice(-4))):255<e&&!Sk.__future__.python3?c+="\\ufffd":" ">d||127<=e&&!Sk.__future__.python3?(d=d.charCodeAt(0).toString(16),2>d.length&&(d="0"+d),c+="\\x"+d):c+=d}return new Sk.builtin.str(c+a)},tp$str(){return this.constructor===Sk.builtin.str?this:new Sk.builtin.str(this.v)},tp$iter(){return new A(this)},tp$richcompare(a,b){if(!(a instanceof Sk.builtin.str))return Sk.builtin.NotImplemented.NotImplemented$;
switch(b){case "Lt":return this.v<a.v;case "LtE":return this.v<=a.v;case "Eq":return this.v===a.v;case "NotEq":return this.v!==a.v;case "Gt":return this.v>a.v;case "GtE":return this.v>=a.v}},mp$subscript(a){let b;if(Sk.misceval.isIndex(a)){a=Sk.misceval.asIndexSized(a,Sk.builtin.OverflowError);b=this.sq$length();0>a&&(a+=b);if(0>a||a>=b)throw new Sk.builtin.IndexError("string index out of range");return this.codepoints?new Sk.builtin.str(this.v.substring(this.codepoints[a],this.codepoints[a+1])):
new Sk.builtin.str(this.v.charAt(a))}if(a instanceof Sk.builtin.slice){let c="";b=this.sq$length();this.codepoints?a.sssiter$(b,a=>{c+=this.v.substring(this.codepoints[a],this.codepoints[a+1])}):a.sssiter$(b,a=>{c+=this.v.charAt(a)});return new Sk.builtin.str(c)}throw new Sk.builtin.TypeError("string indices must be integers, not "+Sk.abstr.typeName(a));},sq$length(){return this.$hasAstralCodePoints()?this.codepoints.length:this.v.length},sq$concat(a){if(!(a instanceof Sk.builtin.str))throw new Sk.builtin.TypeError("cannot concatenate 'str' and '"+
Sk.abstr.typeName(a)+"' objects");return new Sk.builtin.str(this.v+a.v)},sq$repeat(a){if(!Sk.misceval.isIndex(a))throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '"+Sk.abstr.typeName(a)+"'");a=Sk.misceval.asIndexSized(a,Sk.builtin.OverflowError);if(a*this.v.length>Number.MAX_SAFE_INTEGER)throw new Sk.builtin.OverflowError;let b="";for(let c=0;c<a;c++)b+=this.v;return new Sk.builtin.str(b)},sq$contains(a){if(!(a instanceof Sk.builtin.str))throw new Sk.builtin.TypeError("'in <string>' requires string as left operand not "+
Sk.abstr.typeName(a));return-1!==this.v.indexOf(a.v)},tp$as_number:!0,nb$remainder:function(a){var b;const c=this.sk$builtinBase;a.constructor===Sk.builtin.tuple||a instanceof Sk.builtin.dict||a instanceof Sk.builtin.mappingproxy||(a=new Sk.builtin.tuple([a]));var d=0;var e=this.$jsstr().replace(/%(\([a-zA-Z0-9]+\))?([#0 +\-]+)?(\*|[0-9]+)?(\.(\*|[0-9]+))?[hlL]?([diouxXeEfFgGcrsb%])/g,function(e,f,g,k,h,l,p){var n,B,A,u,y;k=Sk.builtin.asnum$(k);h=Sk.builtin.asnum$(h);void 0!==f&&""!==f||"%"==p||(n=
d++);""===h&&(h=void 0);var t=B=A=u=y=!1;g&&(-1!==g.indexOf("-")?u=!0:-1!==g.indexOf("0")&&(y=!0),-1!==g.indexOf("+")?B=!0:-1!==g.indexOf(" ")&&(A=!0),t=-1!==g.indexOf("#"));h&&(h=parseInt(h.substr(1),10));g=function(a,b){var c;b=Sk.builtin.asnum$(b);var d=!1;if("number"===typeof a){0>a&&(a=-a,d=!0);var e=a.toString(b)}else a instanceof Sk.builtin.float_?(e=a.str$(b,!1),2<e.length&&".0"===e.substr(-2)&&(e=e.substr(0,e.length-2)),d=a.nb$isnegative()):a instanceof Sk.builtin.int_?(e=a.str$(b,!1),d=
a.nb$isnegative()):a instanceof Sk.builtin.lng&&(e=a.str$(b,!1),d=a.nb$isnegative());Sk.asserts.assert(void 0!==e,"unhandled number format");a=!1;if(h)for(c=e.length;c<h;++c)e="0"+e,a=!0;c="";d?c="-":B?c="+"+c:A&&(c=" "+c);t&&(16===b?c+="0x":8!==b||a||"0"===e||(c+="0"));return[c,e]};e=function(a){var b=a[0];a=a[1];if(k){k=parseInt(k,10);var c=a.length+b.length;if(y)for(;c<k;++c)a="0"+a;else if(u){for(;c<k;++c)a+=" ";Sk.__future__.python3&&(a+=b,b="")}else for(;c<k;++c)b=" "+b}return b+a};if(a.constructor===
Sk.builtin.tuple)f=a.v[n];else if(void 0!==a.mp$subscript&&void 0!==f)f=f.substring(1,f.length-1),f=a.mp$subscript(new c(f));else if(a.constructor===Sk.builtin.dict||a.constructor===Sk.builtin.list)f=a;else throw new Sk.builtin.AttributeError(a.tp$name+" instance has no attribute 'mp$subscript'");if("d"===p||"i"===p){var w=g(f,10);if(void 0===w[1])throw new Sk.builtin.TypeError("%"+p+" format: a number is required, not "+Sk.abstr.typeName(f));p=w[1];w[1]=-1!==p.indexOf(".")?parseInt(p,10).toString():
p;return e(w)}if("o"===p)return e(g(f,8));if("x"===p)return e(g(f,16));if("X"===p)return e(g(f,16)).toUpperCase();if("f"===p||"F"===p||"e"===p||"E"===p||"g"===p||"G"===p){w=Sk.builtin.asnum$(f);"string"===typeof w&&(w=Number(w));if(Infinity===w)return"inf";if(-Infinity===w)return"-inf";if(isNaN(w))return"nan";n=["toExponential","toFixed","toPrecision"]["efg".indexOf(p.toLowerCase())];if(void 0===h||""===h)if("e"===p||"E"===p)h=6;else if("f"===p||"F"===p)h=Sk.__future__.python3?6:7;n=w[n](h);Sk.builtin.checkFloat(f)&&
0===w&&-Infinity===1/w&&(n="-"+n);Sk.__future__.python3&&(7<=n.length&&"0.0000"==n.slice(0,6)&&(b=parseFloat(n),n=b.toExponential()),"-"==n.charAt(n.length-2)&&(n=n.slice(0,n.length-1)+"0"+n.charAt(n.length-1)));-1!=="EFG".indexOf(p)&&(n=n.toUpperCase());return e(["",n])}if("c"===p){if("number"===typeof f)return String.fromCharCode(f);if(f instanceof Sk.builtin.int_||f instanceof Sk.builtin.float_)return String.fromCharCode(f.v);if(f instanceof Sk.builtin.lng)return String.fromCharCode(f.str$(10,
!1)[0]);if(f.constructor===Sk.builtin.str)return f.v.substr(0,1);throw new Sk.builtin.TypeError("an integer is required");}if("r"===p)return p=Sk.builtin.repr(f),h?p.v.substr(0,h):p.v;if("s"===p&&c===Sk.builtin.str){p=new Sk.builtin.str(f);p=p.$jsstr();if(h)return p.substr(0,h);k&&(p=e([" ",p]));return p}if("b"===p||"s"===p){if(c===Sk.builtin.str)throw new Sk.builtin.ValueError("unsupported format character 'b'");if(!(f instanceof Sk.builtin.bytes)&&void 0===(w=Sk.abstr.lookupSpecial(f,Sk.builtin.str.$bytes)))throw new Sk.builtin.TypeError("%b requires a bytes-like object, or an object that implements __bytes__, not '"+
Sk.abstr.typeName(f)+"'");void 0!==w&&(f=new Sk.builtin.bytes(f));p=f.$jsstr();if(h)return p.substr(0,h);k&&(p=e([" ",p]));return p}if("%"===p)return"%"});return new c(e)}},proto:{toString(){return this.v},$subtype_new(a,b){const c=new this.constructor;a=Sk.builtin.str.prototype.tp$new(a,b);c.$mangled=a.$mangled;c.$savedKeyHash=a.$savedKeyHash;c.v=a.v;return c},$jsstr(){return this.v},$hasAstralCodePoints(){if(null===this.codepoints)return!1;if(void 0!==this.codepoints)return!0;for(var a=0;a<this.v.length;a++){let b=
this.v.charCodeAt(a);if(55296<=b&&57344>b){this.codepoints=[];for(a=0;a<this.v.length;a++)this.codepoints.push(a),b=this.v.charCodeAt(a),55296<=b&&56320>b&&a++;return!0}}this.codepoints=null;return!1},sk$asarray(){const a=[];if(this.$hasAstralCodePoints()){var b=this.codepoints;for(let c=0;c<b.length;c++)a.push(new Sk.builtin.str(this.v.substring(b[c],b[c+1])))}else for(b=0;b<this.v.length;b++)a.push(new Sk.builtin.str(this.v[b]));return a},find$left:h(!1),find$right:h(!0),get$tgt(a){if(a instanceof
Sk.builtin.str)return a.v;throw new Sk.builtin.TypeError("a str instance is required not '"+Sk.abstr.typeName(a)+"'");}},methods:{encode:{$meth:function(a,b){({encoding:a,errors:b}=Sk.builtin.bytes.check$encodeArgs("encode",a,b));a=Sk.builtin.bytes.str$encode(this,a,b);return Sk.__future__.python3?a:new Sk.builtin.str(a.$jsstr())},$flags:{NamedArgs:["encoding","errors"]},$textsig:"($self, /, encoding='utf-8', errors='strict')",$doc:"Encode the string using the codec registered for encoding.\n\n  encoding\n    The encoding in which to encode the string.\n  errors\n    The error handling scheme to use for encoding errors.\n    The default is 'strict' meaning that encoding errors raise a\n    UnicodeEncodeError.  Other possible values are 'ignore', 'replace' and\n    'xmlcharrefreplace' as well as any other name registered with\n    codecs.register_error that can handle UnicodeEncodeErrors."},
replace:{$meth(b,c,d){b=this.get$tgt(b);c=this.get$tgt(c);d=void 0===d?-1:Sk.misceval.asIndexSized(d,Sk.builtin.OverflowError);b=new RegExp(a(b),"g");if(0>d)return new Sk.builtin.str(this.v.replace(b,c));let e=0;b=this.v.replace(b,a=>e++<d?c:a);return new Sk.builtin.str(b)},$flags:{MinArgs:2,MaxArgs:3},$textsig:"($self, old, new, count=-1, /)",$doc:"Return a copy with all occurrences of substring old replaced by new.\n\n  count\n    Maximum number of occurrences to replace.\n    -1 (the default value) means replace all occurrences.\n\nIf the optional argument count is given, only the first count occurrences are\nreplaced."},
split:{$meth:function(a,b){b=Sk.misceval.asIndexSized(b,Sk.builtin.OverflowError);a=c(this,a,b);b=[];for(let c=0;c<a.length;c++)b.push(new Sk.builtin.str(this.v.substring(a[c],a[++c])));return new Sk.builtin.list(b)},$flags:{NamedArgs:["sep","maxsplit"],Defaults:[Sk.builtin.none.none$,-1]},$textsig:"($self, /, sep=None, maxsplit=-1)",$doc:"Return a list of the words in the string, using sep as the delimiter string.\n\n  sep\n    The delimiter according which to split the string.\n    None (the default value) means split according to any whitespace,\n    and discard empty strings from the result.\n  maxsplit\n    Maximum number of splits to do.\n    -1 (the default value) means no limit."},
rsplit:{$meth:function(a,b){b=Sk.misceval.asIndexSized(b,Sk.builtin.OverflowError);a=c(this,a,-1);var d=0>b?0:2*(a.length/2-b);b=[];for(0>=d?d=0:b.push(new Sk.builtin.str(this.v.slice(0,a[d-1])));d<a.length;d++)b.push(new Sk.builtin.str(this.v.substring(a[d],a[++d])));return new Sk.builtin.list(b)},$flags:{NamedArgs:["sep","maxsplit"],Defaults:[Sk.builtin.none.none$,-1]},$textsig:"($self, /, sep=None, maxsplit=-1)",$doc:"Return a list of the words in the string, using sep as the delimiter string.\n\n  sep\n    The delimiter according which to split the string.\n    None (the default value) means split according to any whitespace,\n    and discard empty strings from the result.\n  maxsplit\n    Maximum number of splits to do.\n    -1 (the default value) means no limit.\n\nSplits are done starting at the end of the string and working to the front."},
join:{$meth(a){const b=[];return Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(a),a=>{if(!(a instanceof Sk.builtin.str))throw new Sk.builtin.TypeError("sequence item "+b.length+": expected str, "+Sk.abstr.typeName(a)+" found");b.push(a.v)}),()=>new Sk.builtin.str(b.join(this.v)))},$flags:{OneArg:!0},$textsig:"($self, iterable, /)",$doc:"Concatenate any number of strings.\n\nThe string whose method is called is inserted in between each given string.\nThe result is returned as a new string.\n\nExample: '.'.join(['ab', 'pq', 'rs']) -> 'ab.pq.rs'"},
capitalize:{$meth:function(){return new Sk.builtin.str(this.v.charAt(0).toUpperCase()+this.v.slice(1).toLowerCase())},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return a capitalized version of the string.\n\nMore specifically, make the first character have upper case and the rest lower\ncase."},title:{$meth:function(){const a=this.v.replace(/[a-z][a-z]*/gi,a=>a[0].toUpperCase()+a.substr(1).toLowerCase());return new Sk.builtin.str(a)},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return a version of the string where each word is titlecased.\n\nMore specifically, words start with uppercased characters and all remaining\ncased characters have lower case."},
center:{$meth:f(!1,!0),$flags:{MinArgs:1,MaxArgs:2},$textsig:"($self, width, fillchar=' ', /)",$doc:"Return a centered string of length width.\n\nPadding is done using the specified fill character (default is a space)."},count:{$meth:function(a,b,c){a=this.get$tgt(a);({start:b,end:c}=l(this,b,c));if(c<b)return new Sk.builtin.int_(0);a=a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");a=new RegExp(a,"g");return(b=this.v.slice(b,c).match(a))?new Sk.builtin.int_(b.length):new Sk.builtin.int_(0)},$flags:{MinArgs:1,
MaxArgs:3},$textsig:null,$doc:"S.count(sub[, start[, end]]) -> int\n\nReturn the number of non-overlapping occurrences of substring sub in\nstring S[start:end].  Optional arguments start and end are\ninterpreted as in slice notation."},expandtabs:{$meth:function(a){if(Sk.builtin.checkInt(a))a=Sk.builtin.asnum$(a);else throw new Sk.builtin.TypeError("an integer is required, got type"+Sk.abstr.typeName(a));const b=Array(a+1).join(" "),c=this.v.replace(/([^\r\n\t]*)\t/g,(c,d)=>d+b.slice(d.length%a));
return new Sk.builtin.str(c)},$flags:{NamedArgs:["tabsize"],Defaults:[8]},$textsig:"($self, /, tabsize=8)",$doc:"Return a copy where all tab characters are expanded using spaces.\n\nIf tabsize is not given, a tab size of 8 characters is assumed."},find:{$meth:function(a,b,c){return new Sk.builtin.int_(this.find$left(a,b,c))},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:"S.find(sub[, start[, end]]) -> int\n\nReturn the lowest index in S where substring sub is found,\nsuch that sub is contained within S[start:end].  Optional\narguments start and end are interpreted as in slice notation.\n\nReturn -1 on failure."},
partition:{$meth:e(!1),$flags:{OneArg:!0},$textsig:"($self, sep, /)",$doc:"Partition the string into three parts using the given separator.\n\nThis will search for the separator in the string.  If the separator is found,\nreturns a 3-tuple containing the part before the separator, the separator\nitself, and the part after it.\n\nIf the separator is not found, returns a 3-tuple containing the original string\nand two empty strings."},index:{$meth:function(a,b,c){a=this.find$left(a,b,c);if(-1===a)throw new Sk.builtin.ValueError("substring not found");
return new Sk.builtin.int_(a)},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:"S.index(sub[, start[, end]]) -> int\n\nReturn the lowest index in S where substring sub is found, \nsuch that sub is contained within S[start:end].  Optional\narguments start and end are interpreted as in slice notation.\n\nRaises ValueError when the substring is not found."},ljust:{$meth:f(!1,!1),$flags:{MinArgs:1,MaxArgs:2},$textsig:"($self, width, fillchar=' ', /)",$doc:"Return a left-justified string of length width.\n\nPadding is done using the specified fill character (default is a space)."},
lower:{$meth(){return new Sk.builtin.str(this.v.toLowerCase())},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return a copy of the string converted to lowercase."},lstrip:{$meth:b(/^\s+/g,a=>"^["+a+"]+"),$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, chars=None, /)",$doc:"Return a copy of the string with leading whitespace removed.\n\nIf chars is given and not None, remove characters in chars instead."},rfind:{$meth(a,b,c){return new Sk.builtin.int_(this.find$right(a,b,c))},$flags:{MinArgs:1,MaxArgs:3},
$textsig:null,$doc:"S.rfind(sub[, start[, end]]) -> int\n\nReturn the highest index in S where substring sub is found,\nsuch that sub is contained within S[start:end].  Optional\narguments start and end are interpreted as in slice notation.\n\nReturn -1 on failure."},rindex:{$meth:function(a,b,c){a=this.find$right(a,b,c);if(-1===a)throw new Sk.builtin.ValueError("substring not found");return new Sk.builtin.int_(a)},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:"S.rindex(sub[, start[, end]]) -> int\n\nReturn the highest index in S where substring sub is found,\nsuch that sub is contained within S[start:end].  Optional\narguments start and end are interpreted as in slice notation.\n\nRaises ValueError when the substring is not found."},
rjust:{$meth:f(!0,!1),$flags:{MinArgs:1,MaxArgs:2},$textsig:"($self, width, fillchar=' ', /)",$doc:"Return a right-justified string of length width.\n\nPadding is done using the specified fill character (default is a space)."},rstrip:{$meth:b(/\s+$/g,a=>"["+a+"]+$"),$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, chars=None, /)",$doc:"Return a copy of the string with trailing whitespace removed.\n\nIf chars is given and not None, remove characters in chars instead."},rpartition:{$meth:e(!0),$flags:{OneArg:!0},
$textsig:"($self, sep, /)",$doc:"Partition the string into three parts using the given separator.\n\nThis will search for the separator in the string, starting at the end. If\nthe separator is found, returns a 3-tuple containing the part before the\nseparator, the separator itself, and the part after it.\n\nIf the separator is not found, returns a 3-tuple containing two empty strings\nand the original string."},splitlines:{$meth:function(a){a=Sk.misceval.isTrue(a);const b=this.v,c=[],d=b.length;var e=
0;for(let g=0;g<d;g++){var f=b.charAt(g);if("\n"===b.charAt(g+1)&&"\r"===f)f=g+2,e=b.slice(e,f),a||(e=e.replace(/(\r|\n)/g,"")),c.push(new Sk.builtin.str(e)),e=f;else if("\n"===f&&"\r"!==b.charAt(g-1)||"\r"===f)f=g+1,e=b.slice(e,f),a||(e=e.replace(/(\r|\n)/g,"")),c.push(new Sk.builtin.str(e)),e=f}e<d&&(e=b.slice(e,d),a||(e=e.replace(/(\r|\n)/g,"")),c.push(new Sk.builtin.str(e)));return new Sk.builtin.list(c)},$flags:{NamedArgs:["keepends"],Defaults:[!1]},$textsig:"($self, /, keepends=False)",$doc:"Return a list of the lines in the string, breaking at line boundaries.\n\nLine breaks are not included in the resulting list unless keepends is given and\ntrue."},
strip:{$meth:b(/^\s+|\s+$/g,a=>"^["+a+"]+|["+a+"]+$"),$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, chars=None, /)",$doc:"Return a copy of the string with leading and trailing whitespace remove.\n\nIf chars is given and not None, remove characters in chars instead."},swapcase:{$meth(){const a=this.v.replace(/[a-z]/gi,a=>{const b=a.toLowerCase();return b===a?a.toUpperCase():b});return new Sk.builtin.str(a)},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Convert uppercase characters to lowercase and lowercase characters to uppercase."},
upper:{$meth(){return new Sk.builtin.str(this.v.toUpperCase())},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return a copy of the string converted to uppercase."},startswith:{$meth:d("startswith",(a,b)=>0===a.indexOf(b)),$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:"S.startswith(prefix[, start[, end]]) -> bool\n\nReturn True if S starts with the specified prefix, False otherwise.\nWith optional start, test S beginning at that position.\nWith optional end, stop comparing S at that position.\nprefix can also be a tuple of strings to try."},
endswith:{$meth:d("endswith",(a,b)=>-1!==a.indexOf(b,a.length-b.length)),$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:"S.endswith(suffix[, start[, end]]) -> bool\n\nReturn True if S ends with the specified suffix, False otherwise.\nWith optional start, test S beginning at that position.\nWith optional end, stop comparing S at that position.\nsuffix can also be a tuple of strings to try."},isascii:{$meth(){return new Sk.builtin.bool(/^[\x00-\x7F]*$/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",
$doc:"Return True if all characters in the string are ASCII, False otherwise.\n\nASCII characters have code points in the range U+0000-U+007F.\nEmpty string is ASCII too."},islower:{$meth:function(){return new Sk.builtin.bool(this.v.length&&/[a-z]/.test(this.v)&&!/[A-Z]/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return True if the string is a lowercase string, False otherwise.\n\nA string is lowercase if all cased characters in the string are lowercase and\nthere is at least one cased character in the string."},
isupper:{$meth:function(){return new Sk.builtin.bool(this.v.length&&!/[a-z]/.test(this.v)&&/[A-Z]/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return True if the string is an uppercase string, False otherwise.\n\nA string is uppercase if all cased characters in the string are uppercase and\nthere is at least one cased character in the string."},istitle:{$meth:function(){const a=this.v;let b=!1,c=!1,d;for(let e=0;e<a.length;e++)if(d=a.charAt(e),!/[a-z]/.test(d)&&/[A-Z]/.test(d)){if(c)return Sk.builtin.bool.false$;
b=c=!0}else if(/[a-z]/.test(d)&&!/[A-Z]/.test(d)){if(!c)return Sk.builtin.bool.false$;b=!0}else c=!1;return new Sk.builtin.bool(b)},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return True if the string is a title-cased string, False otherwise.\n\nIn a title-cased string, upper- and title-case characters may only\nfollow uncased characters and lowercase characters only cased ones."},isspace:{$meth:function(){return new Sk.builtin.bool(/^\s+$/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",
$doc:"Return True if the string is a whitespace string, False otherwise.\n\nA string is whitespace if all characters in the string are whitespace and there\nis at least one character in the string."},isdigit:{$meth:function(){return new Sk.builtin.bool(/^\d+$/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return True if the string is a digit string, False otherwise.\n\nA string is a digit string if all characters in the string are digits and there\nis at least one character in the string."},
isnumeric:{$meth:function(){return new Sk.builtin.bool(this.v.length&&!/[^0-9]/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return True if the string is a numeric string, False otherwise.\n\nA string is numeric if all characters in the string are numeric and there is at\nleast one character in the string."},isalpha:{$meth:function(){return new Sk.builtin.bool(this.v.length&&!/[^a-zA-Z]/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return True if the string is an alphabetic string, False otherwise.\n\nA string is alphabetic if all characters in the string are alphabetic and there\nis at least one character in the string."},
isalnum:{$meth:function(){return new Sk.builtin.bool(this.v.length&&!/[^a-zA-Z0-9]/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return True if the string is an alpha-numeric string, False otherwise.\n\nA string is alpha-numeric if all characters in the string are alpha-numeric and\nthere is at least one character in the string."},zfill:{$meth:function(a){a=Sk.misceval.asIndexSized(a,Sk.builtin.OverflowError);let b="";a-=this.v.length;const c="+"===this.v[0]||"-"===this.v[0]?1:0;
for(let c=0;c<a;c++)b+="0";return new Sk.builtin.str(this.v.substr(0,c)+b+this.v.substr(c))},$flags:{OneArg:!0},$textsig:"($self, width, /)",$doc:"Pad a numeric string with zeros on the left, to fill a field of the given width.\n\nThe string is never truncated."},format:{$meth:Sk.formatting.format,$flags:{FastCall:!0},$textsig:null,$doc:"S.format(*args, **kwargs) -> str\n\nReturn a formatted version of S, using substitutions from args and kwargs.\nThe substitutions are identified by braces ('{' and '}')."},
__format__:{$meth:Sk.formatting.formatString,$flags:{OneArg:!0},$textsig:"($self, format_spec, /)",$doc:"Return a formatted version of the string as described by format_spec."},__getnewargs__:{$meth(){return new Sk.builtin.tuple(new Sk.builtin.str(this.v))},$flags:{NoArgs:!0},$textsig:null,$doc:null}}});Sk.exportSymbol("Sk.builtin.str",Sk.builtin.str);var k=/^[A-Za-z0-9]+$/,p=/([.*+?=|\\\/()\[\]\{\}^$])/g,w=/^[\s\xa0]+/;Sk.builtin.str.$py2decode=new Sk.builtin.method_descriptor(Sk.builtin.str,{$name:"decode",
$meth(a,b){const c=new Sk.builtin.bytes(this.v);return Sk.builtin.bytes.$decode.call(c,a,b)},$flags:{NamedArgs:["encoding","errors"]}});var A=Sk.abstr.buildIteratorClass("str_iterator",{constructor:function(a){this.$index=0;a.$hasAstralCodePoints()?(this.$seq=a.codepoints,this.tp$iternext=()=>{const b=this.$seq[this.$index];if(void 0!==b)return new Sk.builtin.str(a.v.substring(b,this.$seq[++this.$index]))}):(this.$seq=a.v,this.tp$iternext=()=>{const a=this.$seq[this.$index++];if(void 0!==a)return new Sk.builtin.str(a)})},
iternext(){return this.tp$iternext()},methods:{__length_hint__:Sk.generic.iterLengthHintWithArrayMethodDef},flags:{sk$acceptable_as_base_class:!1}}),t={abstract:!0,as:!0,boolean:!0,break:!0,byte:!0,case:!0,catch:!0,char:!0,class:!0,continue:!0,const:!0,debugger:!0,default:!0,delete:!0,do:!0,double:!0,else:!0,enum:!0,export:!0,extends:!0,false:!0,final:!0,finally:!0,float:!0,for:!0,function:!0,goto:!0,if:!0,implements:!0,import:!0,in:!0,instanceof:!0,int:!0,interface:!0,is:!0,long:!0,namespace:!0,
native:!0,new:!0,null:!0,package:!0,private:!0,protected:!0,public:!0,return:!0,short:!0,static:!0,super:!0,switch:!0,synchronized:!0,this:!0,throw:!0,throws:!0,transient:!0,true:!0,try:!0,typeof:!0,use:!0,var:!0,void:!0,volatile:!0,while:!0,with:!0,constructor:!0,__defineGetter__:!0,__defineSetter__:!0,apply:!0,arguments:!0,call:!0,caller:!0,eval:!0,hasOwnProperty:!0,isPrototypeOf:!0,__lookupGetter__:!0,__lookupSetter__:!0,__noSuchMethod__:!0,propertyIsEnumerable:!0,prototype:!0,toSource:!0,toLocaleString:!0,
toString:!0,unwatch:!0,valueOf:!0,watch:!0,length:!0,name:!0};Sk.builtin.str.reservedWords_=t},function(m,q){Sk.builtin.func=Sk.abstr.buildNativeClass("function",{constructor:function(a,c,b,e){Sk.asserts.assert(this instanceof Sk.builtin.func,"builtin func should be called as a class with `new`");this.func_code=a;this.func_globals=c||null;this.$name=a.co_name&&a.co_name.v||a.name||"<native JS>";this.$d=Sk.builtin.dict?new Sk.builtin.dict:void 0;this.$doc=a.co_docstring||Sk.builtin.none.none$;this.$module=
Sk.globals&&Sk.globals.__name__||Sk.builtin.none.none$;this.$qualname=a.co_qualname&&a.co_qualname.v||this.$name;if(void 0!==e)for(let a in e)b[a]=e[a];this.func_closure=b;this.$memoiseFlags();this.memoised=a.co_fastcall||null;this.tp$call=a.co_fastcall?a.bind(this):Sk.builtin.func.prototype.tp$call.bind(this)},slots:{tp$getattr:Sk.generic.getAttr,tp$descr_get(a,c){return null===a?this:new Sk.builtin.method(this,a)},$r(){return new Sk.builtin.str("<function "+this.$qualname+">")},tp$call(a,c){this.memoised||
(this.$memoiseFlags(),this.memoised=!0);if(void 0===this.co_argcount&&void 0===this.co_varnames&&!this.co_kwargs&&!this.func_closure){if(c&&0!==c.length)throw new Sk.builtin.TypeError(this.$name+"() takes no keyword arguments");return this.func_code.apply(this.func_globals,a)}a=this.$resolveArgs(a,c);this.func_closure&&a.push(this.func_closure);return this.func_code.apply(this.func_globals,a)}},getsets:{__name__:{$get(){return new Sk.builtin.str(this.$name)},$set(a){if(!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("__name__ must be set to a string object");
this.$name=a.$jsstr()}},__qualname__:{$get(){return new Sk.builtin.str(this.$qualname)},$set(a){if(!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("__qualname__ must be set to a string object");this.$qualname=a.$jsstr()}},__dict__:Sk.generic.getSetDict,__defaults__:{$get(){return new Sk.builtin.tuple(this.$defaults)}},__doc__:{$get(){return this.$doc},$set(a){this.$doc=a||Sk.builtin.none.none$}}},proto:{$memoiseFlags(){this.co_varnames=this.func_code.co_varnames;this.co_argcount=this.func_code.co_argcount;
void 0===this.co_argcount&&this.co_varnames&&(this.co_argcount=this.co_argcount=this.co_varnames.length);this.co_kwonlyargcount=this.func_code.co_kwonlyargcount||0;this.co_varargs=this.func_code.co_varargs;this.co_kwargs=this.func_code.co_kwargs;this.$defaults=this.func_code.$defaults||[];this.$kwdefs=this.func_code.$kwdefs||[]},$resolveArgs:function(a,c){var b=this.co_argcount;void 0===b&&(b=this.co_varnames?this.co_varnames.length:a.length);var e=this.co_varnames||[],f=this.co_kwonlyargcount||0;
let l=b+f;if(!(0!==f||this.co_kwargs||c&&0!==c.length||this.co_varargs)){if(a.length==b)return a;if(0===a.length&&this.$defaults&&this.$defaults.length===b){for(e=0;e!=this.$defaults.length;e++)a[e]=this.$defaults[e];return a}}let h;this.co_kwargs&&(h=[]);var d=a.length;let g=a.length<=b?a:a.slice(0,b);if(this.co_varargs)a=a.length>g.length?a.slice(g.length):[],g[l]=new Sk.builtin.tuple(a);else if(d>b)throw new Sk.builtin.TypeError(this.$name+"() takes "+b+" positional argument"+(1==b?"":"s")+" but "+
d+(1==d?" was ":" were ")+" given");if(c){if(this.func_code.no_kw)throw new Sk.builtin.TypeError(this.$name+"() takes no keyword arguments");for(a=0;a<c.length;a+=2){d=c[a];var n=c[a+1],k=e.indexOf(d);if(0<=k){if(void 0!==g[k])throw new Sk.builtin.TypeError(this.$name+"() got multiple values for argument '"+d+"'");g[k]=n}else if(h)h.push(new Sk.builtin.str(d),n);else throw new Sk.builtin.TypeError(this.$name+"() got an unexpected keyword argument '"+d+"'");}}c=this.$defaults||[];a=0;d=[];n=!1;for(k=
b-c.length;a<k;a++)void 0===g[a]&&(d.push(e[a]),void 0===e[a]&&(n=!0));if(0!=d.length&&(this.co_argcount||this.co_varnames))throw new Sk.builtin.TypeError(this.$name+"() missing "+d.length+" required argument"+(1==d.length?"":"s")+(n?"":": "+d.join(", ")));for(;a<b;a++)void 0===g[a]&&(g[a]=c[a-k]);if(0<f){f=[];c=this.$kwdefs;for(a=b;a<l;a++)void 0===g[a]&&(void 0!==c[a-b]?g[a]=c[a-b]:f.push(e[a]));if(0!==f.length)throw new Sk.builtin.TypeError(this.$name+"() missing "+f.length+" required keyword argument"+
(1==f.length?"":"s")+": "+f.join(", "));}if(this.func_closure&&e)for(b=g.length;b<e.length;b++)g.push(void 0);h&&g.unshift(h);return g}}})},function(m,q){Sk.builtin.asnum$=function(a){return void 0===a||null===a||"number"===typeof a?a:a instanceof Sk.builtin.int_?"number"===typeof a.v?a.v:a.v.toString():a instanceof Sk.builtin.float_?a.v:a===Sk.builtin.none.none$?null:a};Sk.exportSymbol("Sk.builtin.asnum$",Sk.builtin.asnum$);Sk.builtin.assk$=function(a){return 0===a%1?new Sk.builtin.int_(a):new Sk.builtin.float_(a)};
Sk.exportSymbol("Sk.builtin.assk$",Sk.builtin.assk$);Sk.builtin.asnum$nofloat=function(a){if(void 0===a||null===a)return a;if("number"===typeof a)a=a.toString();else if(a instanceof Sk.builtin.int_)a=a.v.toString();else if(a instanceof Sk.builtin.float_)a=a.v.toString();else{if(a===Sk.builtin.none.none$)return null;return}if(0>a.indexOf(".")&&0>a.indexOf("e")&&0>a.indexOf("E"))return a;var b=0;if(0<=a.indexOf("e")){var c=a.substr(0,a.indexOf("e"));b=a.substr(a.indexOf("e")+1)}else 0<=a.indexOf("E")?
(c=a.substr(0,a.indexOf("e")),b=a.substr(a.indexOf("E")+1)):c=a;b=parseInt(b,10);a=c.indexOf(".");if(0>a){if(0<=b){for(;0<b--;)c+="0";return c}return c.length>-b?c.substr(0,c.length+b):0}c=0===a?c.substr(1):a<c.length?c.substr(0,a)+c.substr(a+1):c.substr(0,a);for(a+=b;a>c.length;)c+="0";return c=0>=a?0:c.substr(0,a)};Sk.exportSymbol("Sk.builtin.asnum$nofloat",Sk.builtin.asnum$nofloat);Sk.builtin.round=function(a,c){if(void 0===a)throw new Sk.builtin.TypeError("a float is required");if(!Sk.__future__.dunder_round){if(!Sk.builtin.checkNumber(a))throw new Sk.builtin.TypeError("a float is required");
if(a.round$)return a.round$(c);throw new Sk.builtin.AttributeError(Sk.abstr.typeName(a)+" instance has no attribute '__float__'");}if(void 0!==c&&!Sk.builtin.checkNone(c)&&!Sk.misceval.isIndex(c))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(c)+"' object cannot be interpreted as an index");a=Sk.abstr.lookupSpecial(a,Sk.builtin.str.$round);if(void 0!==a)return void 0!==c?Sk.misceval.callsimArray(a,[c]):Sk.misceval.callsimArray(a,[]);throw new Sk.builtin.TypeError("a float is required");};Sk.builtin.len=
function(a){if(a.sq$length)a=a.sq$length(!0);else throw new Sk.builtin.TypeError("object of type '"+Sk.abstr.typeName(a)+"' has no len()");return Sk.misceval.chain(a,a=>new Sk.builtin.int_(a))};Sk.builtin.min=function(a,c){let b;const e=a.length;if(!e)throw new Sk.builtin.TypeError("min expected 1 argument, got 0");const [h,d]=Sk.abstr.copyKeywordsToNamedArgs("min",["default","key"],[],c,[null,Sk.builtin.none.none$]);if(1<e&&null!==h)throw new Sk.builtin.TypeError("Cannot specify a default for min() with multiple positional arguments");
b=1==e?Sk.abstr.iter(a[0]):Sk.abstr.iter(new Sk.builtin.tuple(a));if(!Sk.builtin.checkNone(d)&&!Sk.builtin.checkCallable(d))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(d)+"' object is not callable");let g;return Sk.misceval.chain(b.tp$iternext(!0),a=>{g=a;if(void 0!==g)return Sk.builtin.checkNone(d)?Sk.misceval.iterFor(b,a=>{Sk.misceval.richCompareBool(a,g,"Lt")&&(g=a)}):Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(d,[g]),a=>Sk.misceval.iterFor(b,b=>Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(d,
[b]),c=>{Sk.misceval.richCompareBool(c,a,"Lt")&&(g=b,a=c)})))},()=>{if(void 0===g){if(null===h)throw new Sk.builtin.ValueError("min() arg is an empty sequence");g=h}return g})};Sk.builtin.max=function(a,c){let b;const e=a.length;if(!e)throw new Sk.builtin.TypeError("max expected 1 argument, got 0");const [h,d]=Sk.abstr.copyKeywordsToNamedArgs("min",["default","key"],[],c,[null,Sk.builtin.none.none$]);if(1<e&&null!==h)throw new Sk.builtin.TypeError("Cannot specify a default for max() with multiple positional arguments");
b=1===e?Sk.abstr.iter(a[0]):Sk.abstr.iter(new Sk.builtin.tuple(a));if(!Sk.builtin.checkNone(d)&&!Sk.builtin.checkCallable(d))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(d)+"' object is not callable");let g;return Sk.misceval.chain(b.tp$iternext(!0),a=>{g=a;if(void 0!==g)return Sk.builtin.checkNone(d)?Sk.misceval.iterFor(b,a=>{Sk.misceval.richCompareBool(a,g,"Gt")&&(g=a)}):Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(d,[g]),a=>Sk.misceval.iterFor(b,b=>Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(d,
[b]),c=>{Sk.misceval.richCompareBool(c,a,"Gt")&&(g=b,a=c)})))},()=>{if(void 0===g){if(null===h)throw new Sk.builtin.ValueError("min() arg is an empty sequence");g=h}return g})};Sk.builtin.min.co_fastcall=Sk.builtin.max.co_fastcall=1;Sk.builtin.any=function(a){return Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(a),function(a){if(Sk.misceval.isTrue(a))return new Sk.misceval.Break(Sk.builtin.bool.true$)}),a=>a||Sk.builtin.bool.false$)};Sk.builtin.all=function(a){return Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(a),
function(a){if(!Sk.misceval.isTrue(a))return new Sk.misceval.Break(Sk.builtin.bool.false$)}),a=>a||Sk.builtin.bool.true$)};Sk.builtin.sum=function(a,c){function b(){return Sk.misceval.iterFor(d,a=>{if(a.constructor===Sk.builtin.int_)g=g.nb$add(a);else{if(a.constructor===Sk.builtin.float_)return g=g.nb$float().nb$add(a),new Sk.misceval.Break("float");g=Sk.abstr.numberBinOp(g,a,"Add");return new Sk.misceval.Break("slow")}})}function e(){return Sk.misceval.iterFor(d,a=>{if(a.constructor===Sk.builtin.float_||
a.constructor===Sk.builtin.int_)g=g.nb$add(a);else return g=Sk.abstr.numberBinOp(g,a,"Add"),new Sk.misceval.Break("slow")})}function h(){return Sk.misceval.iterFor(d,a=>{g=Sk.abstr.numberBinOp(g,a,"Add")})}const d=Sk.abstr.iter(a);if(void 0===c)var g=new Sk.builtin.int_(0);else{if(Sk.builtin.checkString(c))throw new Sk.builtin.TypeError("sum() can't sum strings [use ''.join(seq) instead]");g=c}a=void 0===c||c.constructor===Sk.builtin.int_?b():c.constructor===Sk.builtin.float_?"float":"slow";return Sk.misceval.chain(a,
a=>"float"===a?e():a,a=>{if("slow"===a)return h()},()=>g)};Sk.builtin.zip=function(){var a,c;if(0===arguments.length)return new Sk.builtin.list([]);var f=[];for(c=0;c<arguments.length;c++)if(Sk.builtin.checkIterable(arguments[c]))f.push(Sk.abstr.iter(arguments[c]));else throw new Sk.builtin.TypeError("argument "+c+" must support iteration");var l=[];for(a=!1;!a;){var h=[];for(c=0;c<arguments.length;c++){var d=f[c].tp$iternext();if(void 0===d){a=!0;break}h.push(d)}a||l.push(new Sk.builtin.tuple(h))}return new Sk.builtin.list(l)};
Sk.builtin.abs=function(a){if(a.nb$abs)return a.nb$abs();throw new TypeError("bad operand type for abs(): '"+Sk.abstr.typeName(a)+"'");};Sk.builtin.fabs=function(a){return Sk.builtin.abs(a)};Sk.builtin.ord=function(a){if(Sk.builtin.checkString(a)){if(1!==a.v.length&&1!==a.sq$length())throw new Sk.builtin.TypeError("ord() expected a character, but string of length "+a.v.length+" found");return new Sk.builtin.int_(a.v.codePointAt(0))}if(Sk.builtin.checkBytes(a)){if(1!==a.sq$length())throw new Sk.builtin.TypeError("ord() expected a character, but string of length "+
a.v.length+" found");return new Sk.builtin.int_(a.v[0])}throw new Sk.builtin.TypeError("ord() expected a string of length 1, but "+Sk.abstr.typeName(a)+" found");};Sk.builtin.chr=function(a){if(!Sk.builtin.checkInt(a))throw new Sk.builtin.TypeError("an integer is required");a=Sk.builtin.asnum$(a);if(Sk.__future__.python3){if(0>a||1114112<=a)throw new Sk.builtin.ValueError("chr() arg not in range(0x110000)");}else if(0>a||256<=a)throw new Sk.builtin.ValueError("chr() arg not in range(256)");return new Sk.builtin.str(String.fromCodePoint(a))};
Sk.builtin.unichr=function(a){if(!Sk.builtin.checkInt(a))throw new Sk.builtin.TypeError("an integer is required");a=Sk.builtin.asnum$(a);try{return new Sk.builtin.str(String.fromCodePoint(a))}catch(e){if(e instanceof RangeError)throw new Sk.builtin.ValueError(e.message);throw e;}};Sk.builtin.int2str_=function(a,c,f){let b;a.constructor===Sk.builtin.int_||a instanceof Sk.builtin.int_||(a=a.nb$index());b=a.v;let e=b.toString(c);e=a.nb$isnegative()?"-"+f+e.slice(1):f+e;2!==c&&!Sk.__future__.python3&&
(a instanceof Sk.builtin.lng||JSBI.__isBigInt(b))&&(e+="L");return new Sk.builtin.str(e)};Sk.builtin.hex=function(a){if(!Sk.misceval.isIndex(a))throw new Sk.builtin.TypeError("hex() argument can't be converted to hex");return Sk.builtin.int2str_(a,16,"0x")};Sk.builtin.oct=function(a){if(!Sk.misceval.isIndex(a))throw new Sk.builtin.TypeError("oct() argument can't be converted to hex");return Sk.__future__.octal_number_literal?Sk.builtin.int2str_(a,8,"0o"):Sk.builtin.int2str_(a,8,"0")};Sk.builtin.bin=
function(a){if(!Sk.misceval.isIndex(a))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(a)+"' object can't be interpreted as an index");return Sk.builtin.int2str_(a,2,"0b")};Sk.builtin.dir=function(a){if(void 0!==a)return a=Sk.abstr.lookupSpecial(a,Sk.builtin.str.$dir),Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(a,[]),a=>Sk.builtin.sorted(a));throw new Sk.builtin.NotImplementedError("skulpt does not yet support dir with no args");};Sk.builtin.repr=function(a){return a.$r()};Sk.builtin.ascii=
function(a){return Sk.misceval.chain(a.$r(),a=>{let b,c;for(c=0;c<a.v.length;c++)if(127<=a.v.charCodeAt(c)){b=a.v.substr(0,c);break}if(!b)return a;for(;c<a.v.length;c++){var e=a.v.charAt(c),d=a.v.charCodeAt(c);127<d&&255>=d?(e=d.toString(16),2>e.length&&(e="0"+e),b+="\\x"+e):127<d&&55296>d||57344<=d?b+="\\u"+("000"+d.toString(16)).slice(-4):55296<=d?(e=a.v.codePointAt(c),c++,e=e.toString(16),d="0000000"+e.toString(16),b=4<e.length?b+("\\U"+d.slice(-8)):b+("\\u"+d.slice(-4))):b+=e}return new Sk.builtin.str(b)})};
Sk.builtin.open=function(a,c,f){void 0===c&&(c=new Sk.builtin.str("r"));if(/\+/.test(c.v))throw"todo; haven't implemented read/write mode";if(("w"===c.v||"wb"===c.v||"a"===c.v||"ab"===c.v)&&!Sk.nonreadopen)throw"todo; haven't implemented non-read opens";return new Sk.builtin.file(a,c,f)};Sk.builtin.isinstance=function(a,c){if(!(Sk.builtin.checkClass(c)||c instanceof Sk.builtin.tuple))throw new Sk.builtin.TypeError("isinstance() arg 2 must be a class, type, or tuple of classes and types");var b=a.ob$type;
if(b===c)return Sk.builtin.bool.true$;if(!(c instanceof Sk.builtin.tuple)){if(b.$isSubType(c))return Sk.builtin.bool.true$;a=a.tp$getattr(Sk.builtin.str.$class);return a!=b&&Sk.builtin.checkClass(a)&&a.$isSubType(c)?Sk.builtin.bool.true$:Sk.builtin.bool.false$}for(b=0;b<c.v.length;++b)if(Sk.misceval.isTrue(Sk.builtin.isinstance(a,c.v[b])))return Sk.builtin.bool.true$;return Sk.builtin.bool.false$};Sk.builtin.hash=function(a){return new Sk.builtin.int_(Sk.abstr.objectHash(a))};Sk.builtin.getattr=function(a,
c,f){if(!Sk.builtin.checkString(c))throw new Sk.builtin.TypeError("attribute name must be string");const b=Sk.misceval.tryCatch(()=>a.tp$getattr(c,!0),a=>{if(!(a instanceof Sk.builtin.AttributeError))throw a;});return Sk.misceval.chain(b,b=>{if(void 0===b){if(void 0!==f)return f;throw new Sk.builtin.AttributeError(a.sk$attrError()+" has no attribute "+Sk.misceval.objectRepr(c));}return b})};Sk.builtin.setattr=function(a,c,f){if(!Sk.builtin.checkString(c))throw new Sk.builtin.TypeError("attribute name must be string");
return Sk.misceval.chain(a.tp$setattr(c,f,!0),()=>Sk.builtin.none.none$)};Sk.builtin.raw_input=function(a){var b=a?a:"";return Sk.misceval.chain(Sk.importModule("sys",!1,!0),function(a){return Sk.inputfunTakesPrompt?Sk.builtin.file.$readline(a.$d.stdin,null,b):Sk.misceval.chain(void 0,function(){return Sk.misceval.callsimOrSuspendArray(a.$d.stdout.write,[a.$d.stdout,new Sk.builtin.str(b)])},function(){return Sk.misceval.callsimOrSuspendArray(a.$d.stdin.readline,[a.$d.stdin])})})};Sk.builtin.input=
Sk.builtin.raw_input;Sk.builtin.jseval=function(a){a=Sk.global.eval(Sk.ffi.remapToJs(a));return Sk.ffi.remapToPy(a)};Sk.builtin.jsmillis=function(){console.warn("jsmillis is deprecated");return(new Date).valueOf()};Sk.builtin.eval_=function(){throw new Sk.builtin.NotImplementedError("eval is not yet implemented");};Sk.builtin.map=function(a,c){var b=[],e,h;Sk.builtin.pyCheckArgsLen("map",arguments.length,2);if(2<arguments.length){var d=[];var g=Array.prototype.slice.apply(arguments).slice(1);for(h=
0;h<g.length;h++){if(!Sk.builtin.checkIterable(g[h])){var n=parseInt(h,10)+2;throw new Sk.builtin.TypeError("argument "+n+" to map() must support iteration");}g[h]=Sk.abstr.iter(g[h])}for(;;){var k=[];for(h=e=0;h<g.length;h++)n=g[h].tp$iternext(),void 0===n?(k.push(Sk.builtin.none.none$),e++):k.push(n);if(e!==g.length)d.push(k);else break}c=new Sk.builtin.list(d)}if(!Sk.builtin.checkIterable(c))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(c)+"' object is not iterable");return Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(c),
function(c){if(a===Sk.builtin.none.none$)c instanceof Array&&(c=new Sk.builtin.tuple(c)),b.push(c);else return c instanceof Array||(c=[c]),Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(a,c),function(a){b.push(a)})}),function(){return new Sk.builtin.list(b)})};Sk.builtin.reduce=function(a,c,f){if(!Sk.builtin.checkIterable(c))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(c)+"' object is not iterable");c=Sk.abstr.iter(c);if(void 0===f&&(f=c.tp$iternext(),void 0===f))throw new Sk.builtin.TypeError("reduce() of empty sequence with no initial value");
var b=f;for(f=c.tp$iternext();void 0!==f;f=c.tp$iternext())b=Sk.misceval.callsimArray(a,[b,f]);return b};Sk.builtin.sorted=function(a,c,f,l){a=Sk.misceval.arrayFromIterable(a,!0);return Sk.misceval.chain(a,a=>{a=new Sk.builtin.list(a);a.list$sort(c,f,l);return a})};Sk.builtin.filter=function(a,c){var b;Sk.builtin.pyCheckArgsLen("filter",arguments.length,2,2);if(!Sk.builtin.checkIterable(c))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(c)+"' object is not iterable");var e=function(){return[]};
var h=function(a,b){a.push(b);return a};var d=function(a){return new Sk.builtin.list(a)};c.ob$type===Sk.builtin.str?(e=function(){return new Sk.builtin.str("")},h=function(a,b){return a.sq$concat(b)},d=function(a){return a}):c.ob$type===Sk.builtin.tuple&&(d=function(a){return new Sk.builtin.tuple(a)});var g=e();var n=Sk.abstr.iter(c);for(b=n.tp$iternext();void 0!==b;b=n.tp$iternext())e=a===Sk.builtin.none.none$?new Sk.builtin.bool(b):Sk.misceval.callsimArray(a,[b]),Sk.misceval.isTrue(e)&&(g=h(g,b));
return d(g)};Sk.builtin.hasattr=function(a,c){if(!Sk.builtin.checkString(c))throw new Sk.builtin.TypeError("hasattr(): attribute name must be string");const b=Sk.misceval.tryCatch(()=>a.tp$getattr(c,!0),a=>{if(!(a instanceof Sk.builtin.AttributeError))throw a;});return Sk.misceval.chain(b,a=>void 0===a?Sk.builtin.bool.false$:Sk.builtin.bool.true$)};Sk.builtin.pow=function(a,c,f){if(void 0===f||Sk.builtin.checkNone(f))return Sk.abstr.numberBinOp(a,c,"Pow");if(!(Sk.builtin.checkInt(a)&&Sk.builtin.checkInt(c)&&
Sk.builtin.checkInt(f))){if(Sk.builtin.checkFloat(a)||Sk.builtin.checkComplex(a))return a.nb$power(c,f);throw new Sk.builtin.TypeError("unsupported operand type(s) for ** or pow(): '"+Sk.abstr.typeName(a)+"', '"+Sk.abstr.typeName(c)+"', '"+Sk.abstr.typeName(f)+"'");}return a.nb$power(c,f)};Sk.builtin.quit=function(a){a=(new Sk.builtin.str(a)).v;throw new Sk.builtin.SystemExit(a);};Sk.builtin.issubclass=function(a,c){if(!Sk.builtin.checkClass(a))throw new Sk.builtin.TypeError("issubclass() arg 1 must be a class");
var b=Sk.builtin.checkClass(c);if(!(b||c instanceof Sk.builtin.tuple))throw new Sk.builtin.TypeError("issubclass() arg 2 must be a class or tuple of classes");if(b)return a.$isSubType(c)?Sk.builtin.bool.true$:Sk.builtin.bool.false$;for(b=0;b<c.v.length;++b)if(Sk.misceval.isTrue(Sk.builtin.issubclass(a,c.v[b])))return Sk.builtin.bool.true$;return Sk.builtin.bool.false$};Sk.builtin.globals=function(){var a,c=new Sk.builtin.dict([]);for(a in Sk.globals){var f=Sk.unfixReserved(a);c.mp$ass_subscript(new Sk.builtin.str(f),
Sk.globals[a])}return c};Sk.builtin.divmod=function(a,c){return Sk.abstr.numberBinOp(a,c,"DivMod")};Sk.builtin.format=function(a,c){void 0===c&&(c=Sk.builtin.str.$emptystr);return Sk.abstr.objectFormat(a,c)};const a=new Map;let c=0;Sk.builtin.id=function(b){const e=a.get(b);if(void 0!==e)return new Sk.builtin.int_(e);a.set(b,c);return new Sk.builtin.int_(c++)};Sk.builtin.bytearray=function(){throw new Sk.builtin.NotImplementedError("bytearray is not yet implemented");};Sk.builtin.callable=function(a){return Sk.builtin.checkCallable(a)?
Sk.builtin.bool.true$:Sk.builtin.bool.false$};Sk.builtin.delattr=function(a,c){return Sk.builtin.setattr(a,c,void 0)};Sk.builtin.execfile=function(){throw new Sk.builtin.NotImplementedError("execfile is not yet implemented");};Sk.builtin.help=function(){throw new Sk.builtin.NotImplementedError("help is not yet implemented");};Sk.builtin.iter=function(a,c){return 1===arguments.length?Sk.abstr.iter(a):Sk.abstr.iter(new Sk.builtin.callable_iter_(a,c))};Sk.builtin.locals=function(){throw new Sk.builtin.NotImplementedError("locals is not yet implemented");
};Sk.builtin.memoryview=function(){throw new Sk.builtin.NotImplementedError("memoryview is not yet implemented");};Sk.builtin.next_=function(a,c){if(!a.tp$iternext)throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(a)+"' object is not an iterator");a=a.tp$iternext();if(void 0===a){if(c)return c;throw new Sk.builtin.StopIteration;}return a};Sk.builtin.reload=function(){throw new Sk.builtin.NotImplementedError("reload is not yet implemented");};Sk.builtin.vars=function(){throw new Sk.builtin.NotImplementedError("vars is not yet implemented");
};Sk.builtin.apply_=function(){throw new Sk.builtin.NotImplementedError("apply is not yet implemented");};Sk.builtin.buffer=function(){throw new Sk.builtin.NotImplementedError("buffer is not yet implemented");};Sk.builtin.coerce=function(){throw new Sk.builtin.NotImplementedError("coerce is not yet implemented");};Sk.builtin.intern=function(){throw new Sk.builtin.NotImplementedError("intern is not yet implemented");}},function(m,q){Sk.builtin.BaseException=Sk.abstr.buildNativeClass("BaseException",
{constructor:function(...a){Sk.asserts.assert(this instanceof Sk.builtin.BaseException,"bad call to exception constructor, use 'new'");let c=a[0];"string"===typeof c&&(c=new Sk.builtin.str(c));this.args=new Sk.builtin.tuple(c?[c]:[]);this.traceback=[];this.$d=new Sk.builtin.dict;3<=a.length&&this.traceback.push({lineno:a[2],filename:a[1]||"<unknown>"})},slots:{tp$getattr:Sk.generic.getAttr,tp$doc:"Common base class for all exceptions",tp$new(a,c){this.hp$type?(c=new this.constructor,Sk.builtin.BaseException.call(c)):
c=new this.constructor;c.args=new Sk.builtin.tuple(a.slice());return c},tp$init(a,c){Sk.abstr.checkNoKwargs(Sk.abstr.typeName(this),c)},$r(){let a=this.tp$name;a+="("+this.args.v.map(a=>Sk.misceval.objectRepr(a)).join(", ")+")";return new Sk.builtin.str(a)},tp$str(){return 1>=this.args.v.length?new Sk.builtin.str(this.args.v[0]):this.args.$r()}},getsets:{args:{$get(){return this.args}},__dict__:Sk.generic.getSetDict},proto:{toString(){let a=this.tp$name;a+=": "+this.tp$str().v;return a=0!==this.traceback.length?
a+(" on line "+this.traceback[0].lineno):a+" at <unknown>"}}});Sk.exportSymbol("Sk.builtin.BaseException",Sk.builtin.BaseException);Sk.builtin.Exception=Sk.abstr.buildNativeClass("Exception",{constructor:function(...a){Sk.builtin.BaseException.apply(this,a)},base:Sk.builtin.BaseException});Sk.exportSymbol("Sk.builtin.Exception",Sk.builtin.Exception);Sk.builtin.AssertionError=Sk.abstr.buildNativeClass("AssertionError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});
Sk.exportSymbol("Sk.builtin.AssertionError",Sk.builtin.AssertionError);Sk.builtin.AttributeError=Sk.abstr.buildNativeClass("AttributeError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.builtin.ImportError=Sk.abstr.buildNativeClass("ImportError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.builtin.IndentationError=Sk.abstr.buildNativeClass("IndentationError",{constructor:function(...a){Sk.builtin.Exception.apply(this,
a)},base:Sk.builtin.Exception});Sk.builtin.IndexError=Sk.abstr.buildNativeClass("IndexError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.builtin.LookupError=Sk.abstr.buildNativeClass("LookupError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.builtin.KeyError=Sk.abstr.buildNativeClass("KeyError",{constructor:function(...a){Sk.builtin.LookupError.apply(this,a)},base:Sk.builtin.LookupError});Sk.builtin.NameError=
Sk.abstr.buildNativeClass("NameError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.builtin.UnboundLocalError=Sk.abstr.buildNativeClass("UnboundLocalError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.builtin.OverflowError=Sk.abstr.buildNativeClass("OverflowError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.builtin.SyntaxError=Sk.abstr.buildNativeClass("SyntaxError",
{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.builtin.RuntimeError=Sk.abstr.buildNativeClass("RuntimeError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.exportSymbol("Sk.builtin.RuntimeError",Sk.builtin.RuntimeError);Sk.builtin.SuspensionError=Sk.abstr.buildNativeClass("SuspensionError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.exportSymbol("Sk.builtin.SuspensionError",
Sk.builtin.SuspensionError);Sk.builtin.SystemExit=Sk.abstr.buildNativeClass("SystemExit",{constructor:function(...a){Sk.builtin.BaseException.apply(this,a)},base:Sk.builtin.BaseException});Sk.exportSymbol("Sk.builtin.SystemExit",Sk.builtin.SystemExit);Sk.builtin.TypeError=Sk.abstr.buildNativeClass("TypeError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.exportSymbol("Sk.builtin.TypeError",Sk.builtin.TypeError);Sk.builtin.ValueError=Sk.abstr.buildNativeClass("ValueError",
{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.exportSymbol("Sk.builtin.ValueError",Sk.builtin.ValueError);Sk.builtin.ZeroDivisionError=Sk.abstr.buildNativeClass("ZeroDivisionError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.builtin.TimeLimitError=Sk.abstr.buildNativeClass("TimeLimitError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.exportSymbol("Sk.builtin.TimeLimitError",
Sk.builtin.TimeLimitError);Sk.builtin.IOError=Sk.abstr.buildNativeClass("IOError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.exportSymbol("Sk.builtin.IOError",Sk.builtin.IOError);Sk.builtin.NotImplementedError=Sk.abstr.buildNativeClass("NotImplementedError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.exportSymbol("Sk.builtin.NotImplementedError",Sk.builtin.NotImplementedError);Sk.builtin.NegativePowerError=
Sk.abstr.buildNativeClass("NegativePowerError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.exportSymbol("Sk.builtin.NegativePowerError",Sk.builtin.NegativePowerError);Sk.builtin.ExternalError=Sk.abstr.buildNativeClass("ExternalError",{constructor:function(...a){this.nativeError=a[0];if(!Sk.builtin.checkString(this.nativeError)&&(a[0]=this.nativeError.toString(),a[0].startsWith("RangeError: Maximum call")))return a[0]="Maximum call stack size exceeded",
new Sk.builtin.RecursionError(...a);Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.exportSymbol("Sk.builtin.ExternalError",Sk.builtin.ExternalError);Sk.builtin.RecursionError=Sk.abstr.buildNativeClass("RecursionError",{constructor:function(...a){Sk.builtin.RuntimeError.apply(this,a)},base:Sk.builtin.Exception});Sk.exportSymbol("Sk.builtin.RecursionError",Sk.builtin.RecursionError);Sk.builtin.OperationError=Sk.abstr.buildNativeClass("OperationError",{constructor:function(...a){Sk.builtin.Exception.apply(this,
a)},base:Sk.builtin.Exception});Sk.exportSymbol("Sk.builtin.OperationError",Sk.builtin.OperationError);Sk.builtin.SystemError=Sk.abstr.buildNativeClass("SystemError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.exportSymbol("Sk.builtin.SystemError",Sk.builtin.SystemError);Sk.builtin.UnicodeDecodeError=Sk.abstr.buildNativeClass("UnicodeDecodeError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.exportSymbol("Sk.builtin.UnicodeDecodeError",
Sk.builtin.UnicodeDecodeError);Sk.builtin.UnicodeEncodeError=Sk.abstr.buildNativeClass("UnicodeEncodeError",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.exportSymbol("Sk.builtin.UnicodeEncodeError",Sk.builtin.UnicodeEncodeError);Sk.builtin.StopIteration=Sk.abstr.buildNativeClass("StopIteration",{constructor:function(...a){Sk.builtin.Exception.apply(this,a)},base:Sk.builtin.Exception});Sk.exportSymbol("Sk.builtin.StopIteration",Sk.builtin.StopIteration);
Sk.builtin.getExcInfo=function(a){return new Sk.builtin.tuple([a.ob$type||Sk.builtin.none.none$,a,Sk.builtin.none.none$])}},function(m,q){Sk.builtin.method=Sk.abstr.buildNativeClass("method",{constructor:function(a,c){Sk.asserts.assert(this instanceof Sk.builtin.method,"bad call to method constructor, use 'new'");this.im_func=a;this.im_self=c;this.im_call=a.tp$call},slots:{$r(){let a=this.im_func.tp$getattr(Sk.builtin.str.$qualname)||this.im_func.tp$getattr(Sk.builtin.str.$name);a=a&&a.v||"?";return new Sk.builtin.str("<bound method "+
a+" of "+Sk.misceval.objectRepr(this.im_self)+">")},tp$hash(){const a=Sk.abstr.objectHash(this.im_self),c=Sk.abstr.objectHash(this.im_func);return a+c},tp$call(a,c){var b=this.im_call;if(void 0===b)throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(this.im_func)+"' object is not callable");a=[this.im_self,...a];return b.call(this.im_func,a,c)},tp$new(a,c){Sk.abstr.checkNoKwargs("method",c);Sk.abstr.checkArgsLen("method",a,2,2);c=a[0];a=a[1];if(!Sk.builtin.checkCallable(c))throw new Sk.builtin.TypeError("first argument must be callable");
if(Sk.builtin.checkNone(a))throw new Sk.builtin.TypeError("self must not be None");return new Sk.builtin.method(c,a)},tp$richcompare(a,c){if("Eq"!=c&&"NotEq"!=c||!(a instanceof Sk.builtin.method))return Sk.builtin.NotImplemented.NotImplemented$;let b;try{b=Sk.misceval.richCompareBool(this.im_self,a.im_self,"Eq",!1)&&this.im_func==a.im_func}catch(e){b=!1}return"Eq"==c?b:!b},tp$descr_get(a,c){return this},tp$getattr(a,c){const b=Sk.abstr.lookupSpecial(this,a);return void 0!==b?b:this.im_func.tp$getattr(a,
c)}},getsets:{__func__:{$get(){return this.im_func}},__self__:{$get(){return this.im_self}},__doc__:{$get(){return this.im_func.tp$getattr(Sk.builtin.str.$doc)}}},flags:{sk$suitable_as_base_class:!1}})},function(m,q){function a(a){if(null!==a&&void 0!==a){if(a.nb$index)return a.nb$index();if("number"===typeof a&&Number.isInteger(a))return a}}function c(b,c){const e=a(b);if(void 0!==e)return e;c=(c||"'{tp$name}' object cannot be interpreted as an integer").replace("{tp$name}",Sk.abstr.typeName(b));
throw new Sk.builtin.TypeError(c);}Sk.misceval={};Sk.misceval.Suspension=function(a,c,f){this.$isSuspension=!0;void 0!==a&&void 0!==c&&(this.resume=function(){return a(c.resume())});this.child=c;this.optional=void 0!==c&&c.optional;this.data=void 0===f&&void 0!==c?c.data:f};Sk.exportSymbol("Sk.misceval.Suspension",Sk.misceval.Suspension);Sk.misceval.retryOptionalSuspensionOrThrow=function(a,c){for(;a instanceof Sk.misceval.Suspension;){if(!a.optional)throw new Sk.builtin.SuspensionError(c||"Cannot call a function that blocks or suspends here");
a=a.resume()}return a};Sk.exportSymbol("Sk.misceval.retryOptionalSuspensionOrThrow",Sk.misceval.retryOptionalSuspensionOrThrow);Sk.misceval.isIndex=function(a){return null!==a&&void 0!==a&&(void 0!==a.nb$index||"number"===typeof a&&Number.isInteger(a))};Sk.exportSymbol("Sk.misceval.isIndex",Sk.misceval.isIndex);Sk.misceval.asIndex=a;Sk.misceval.asIndexSized=function(a,e,f){f=c(a,f);if("number"===typeof f)return f;if(null==e)return JSBI.lessThan(f,JSBI.__ZERO)?-Number.MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER;
throw new e("cannot fit '"+Sk.abstr.typeName(a)+"' into an index-sized integer");};Sk.misceval.asIndexOrThrow=c;Sk.misceval.applySlice=function(a,c,f,l){return Sk.abstr.objectGetItem(a,new Sk.builtin.slice(c,f,null),l)};Sk.exportSymbol("Sk.misceval.applySlice",Sk.misceval.applySlice);Sk.misceval.assignSlice=function(a,c,f,l,h){c=new Sk.builtin.slice(c,f);return null===l?Sk.abstr.objectDelItem(a,c):Sk.abstr.objectSetItem(a,c,l,h)};Sk.exportSymbol("Sk.misceval.assignSlice",Sk.misceval.assignSlice);
Sk.misceval.arrayFromArguments=function(a){var b;if(1!=a.length)return a;var c=a[0];c instanceof Sk.builtin.set?c=c.tp$iter().$obj:c instanceof Sk.builtin.dict&&(c=Sk.builtin.dict.prototype.keys.func_code(c));if(c instanceof Sk.builtin.list||c instanceof Sk.builtin.tuple)return c.v;if(Sk.builtin.checkIterable(c)){a=[];c=Sk.abstr.iter(c);for(b=c.tp$iternext();void 0!==b;b=c.tp$iternext())a.push(b);return a}throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(c)+"' object is not iterable");};Sk.exportSymbol("Sk.misceval.arrayFromArguments",
Sk.misceval.arrayFromArguments);Sk.misceval.iterator=Sk.abstr.buildIteratorClass("iterator",{constructor:function(a,c){this.tp$iternext=c?a:function(b){let c=a();return b||!c.$isSuspension?c:Sk.misceval.retryOptionalSuspensionOrThrow(c)}},iternext:function(a){return this.tp$iternext(a)},flags:{sk$acceptable_as_base_class:!1}});Sk.misceval.swappedOp_={Eq:"Eq",NotEq:"NotEq",Lt:"Gt",LtE:"GtE",Gt:"Lt",GtE:"LtE"};Sk.misceval.opSymbols={Eq:"==",NotEq:"!=",Lt:"<",LtE:"<=",Gt:">",GtE:">=",Is:"is",IsNot:"is not",
In_:"in",NotIn:"not in"};Sk.misceval.richCompareBool=function(a,c,f,l){Sk.asserts.assert(a.sk$object&&c.sk$object,"JS object passed to richCompareBool");var b;var d=a.ob$type;var e=c.ob$type,n=e!==d&&void 0===e.sk$baseClass&&e.$isSubType(d);if(!Sk.__future__.python3&&d!==e&&("GtE"===f||"Gt"===f||"LtE"===f||"Lt"===f)){var k=[Sk.builtin.float_,Sk.builtin.int_,Sk.builtin.lng,Sk.builtin.bool],p=[Sk.builtin.dict,Sk.builtin.enumerate,Sk.builtin.filter_,Sk.builtin.list,Sk.builtin.map_,Sk.builtin.str,Sk.builtin.tuple,
Sk.builtin.zip_];const b=k.indexOf(d),g=p.indexOf(d);k=k.indexOf(e);p=p.indexOf(e);if(a===Sk.builtin.none.none$)switch(f){case "Lt":return!0;case "LtE":return!0;case "Gt":return!1;case "GtE":return!1}if(c===Sk.builtin.none.none$)switch(f){case "Lt":return!1;case "LtE":return!1;case "Gt":return!0;case "GtE":return!0}if(-1!==b&&-1!==p)switch(f){case "Lt":return!0;case "LtE":return!0;case "Gt":return!1;case "GtE":return!1}if(-1!==g&&-1!==k)switch(f){case "Lt":return!1;case "LtE":return!1;case "Gt":return!0;
case "GtE":return!0}if(-1!==g&&-1!==p)switch(f){case "Lt":return g<p;case "LtE":return g<=p;case "Gt":return g>p;case "GtE":return g>=p}}if("Is"===f){if(d===e){if(a===c)return!0;if(d===Sk.builtin.float_)return a.v===c.v;if(d===Sk.builtin.int_)return"number"===typeof a.v&&"number"===typeof a.v?a.v===c.v:JSBI.equal(JSBI.BigInt(a.v),JSBI.BigInt(c.v))}return!1}if("IsNot"===f)return d!==e?!0:d===Sk.builtin.float_?a.v!==c.v:d===Sk.builtin.int_?"number"===typeof a.v&&"number"===typeof a.v?a.v!==c.v:JSBI.notEqual(JSBI.BigInt(a.v),
JSBI.BigInt(c.v)):a!==c;if("In"===f)return Sk.misceval.chain(Sk.abstr.sequenceContains(c,a,l),Sk.misceval.isTrue);if("NotIn"===f)return Sk.misceval.chain(Sk.abstr.sequenceContains(c,a,l),function(a){return!Sk.misceval.isTrue(a)});e={Eq:"ob$eq",NotEq:"ob$ne",Gt:"ob$gt",GtE:"ob$ge",Lt:"ob$lt",LtE:"ob$le"};d=e[f];if(n&&(l=e[Sk.misceval.swappedOp_[f]],c[l]!==a[l]&&(b=c[l](a))!==Sk.builtin.NotImplemented.NotImplemented$)||(b=a[d](c))!==Sk.builtin.NotImplemented.NotImplemented$||!n&&(l=e[Sk.misceval.swappedOp_[f]],
(b=c[l](a))!==Sk.builtin.NotImplemented.NotImplemented$))return Sk.misceval.isTrue(b);if(!Sk.__future__.python3){if(n=Sk.abstr.lookupSpecial(a,Sk.builtin.str.$cmp))try{b=Sk.misceval.callsimArray(n,[c]);if(Sk.builtin.checkNumber(b)){b=Sk.builtin.asnum$(b);if("Eq"===f)return 0===b;if("NotEq"===f)return 0!==b;if("Lt"===f)return 0>b;if("Gt"===f)return 0<b;if("LtE"===f)return 0>=b;if("GtE"===f)return 0<=b}if(b!==Sk.builtin.NotImplemented.NotImplemented$)throw new Sk.builtin.TypeError("comparison did not return an int");
}catch(w){throw new Sk.builtin.TypeError("comparison did not return an int");}if(n=Sk.abstr.lookupSpecial(c,Sk.builtin.str.$cmp))try{b=Sk.misceval.callsimArray(n,[a]);if(Sk.builtin.checkNumber(b)){b=Sk.builtin.asnum$(b);if("Eq"===f)return 0===b;if("NotEq"===f)return 0!==b;if("Lt"===f)return 0<b;if("Gt"===f)return 0>b;if("LtE"===f)return 0<=b;if("GtE"===f)return 0>=b}if(b!==Sk.builtin.NotImplemented.NotImplemented$)throw new Sk.builtin.TypeError("comparison did not return an int");}catch(w){throw new Sk.builtin.TypeError("comparison did not return an int");
}if(a===Sk.builtin.none.none$&&c===Sk.builtin.none.none$){if("Eq"===f)return a.v===c.v;if("NotEq"===f)return a.v!==c.v;if("Gt"===f)return a.v>c.v;if("GtE"===f)return a.v>=c.v;if("Lt"===f)return a.v<c.v;if("LtE"===f)return a.v<=c.v}}if("Eq"===f)return a===c;if("NotEq"===f)return a!==c;a=Sk.abstr.typeName(a);c=Sk.abstr.typeName(c);throw new Sk.builtin.TypeError("'"+Sk.misceval.opSymbols[f]+"' not supported between instances of '"+a+"' and '"+c+"'");};Sk.exportSymbol("Sk.misceval.richCompareBool",Sk.misceval.richCompareBool);
Sk.misceval.objectRepr=function(a){Sk.asserts.assert(void 0!==a,"trying to repr undefined");if(null!==a&&a.$r)return a.$r().v;try{return(new Sk.builtin.str(a)).v}catch(e){if(e instanceof Sk.builtin.TypeError)return"<unknown>";throw e;}};Sk.exportSymbol("Sk.misceval.objectRepr",Sk.misceval.objectRepr);Sk.misceval.opAllowsEquality=function(a){switch(a){case "LtE":case "Eq":case "GtE":return!0}return!1};Sk.exportSymbol("Sk.misceval.opAllowsEquality",Sk.misceval.opAllowsEquality);Sk.misceval.isTrue=function(a){return!0===
a||a===Sk.builtin.bool.true$?!0:!1===a||a===Sk.builtin.bool.false$||null===a||void 0===a?!1:a.nb$bool?a.nb$bool():a.sq$length?0!==a.sq$length():!!a};Sk.exportSymbol("Sk.misceval.isTrue",Sk.misceval.isTrue);Sk.misceval.softspace_=!1;Sk.misceval.print_=function(a){Sk.misceval.softspace_&&("\n"!==a&&Sk.output(" "),Sk.misceval.softspace_=!1);var b=new Sk.builtin.str(a);return Sk.misceval.chain(Sk.importModule("sys",!1,!0),function(a){return Sk.misceval.apply(a.$d.stdout.write,void 0,void 0,void 0,[a.$d.stdout,
b])},function(){var a;(a=0===b.v.length)||(a=b.v[b.v.length-1],a=!("\n"===a||"\t"===a||"\r"===a));if(a||" "===b.v[b.v.length-1])Sk.misceval.softspace_=!0})};Sk.exportSymbol("Sk.misceval.print_",Sk.misceval.print_);Sk.misceval.loadname=function(a,c){c=c[a];if(void 0!==c)return c;c=Sk.builtins[a];if(void 0!==c)return c;throw new Sk.builtin.NameError("name '"+Sk.unfixReserved(a)+"' is not defined");};Sk.exportSymbol("Sk.misceval.loadname",Sk.misceval.loadname);Sk.misceval.call=function(a,c,f,l,h){h=
Array.prototype.slice.call(arguments,4);return Sk.misceval.apply(a,c,f,l,h)};Sk.exportSymbol("Sk.misceval.call",Sk.misceval.call);Sk.misceval.callAsync=function(a,c,f,l,h,d){d=Array.prototype.slice.call(arguments,5);return Sk.misceval.applyAsync(a,c,f,l,h,d)};Sk.exportSymbol("Sk.misceval.callAsync",Sk.misceval.callAsync);Sk.misceval.callOrSuspend=function(a,c,f,l,h){h=Array.prototype.slice.call(arguments,4);return Sk.misceval.applyOrSuspend(a,c,f,l,h)};Sk.exportSymbol("Sk.misceval.callOrSuspend",
Sk.misceval.callOrSuspend);Sk.misceval.callsim=function(a,c){c=Array.prototype.slice.call(arguments,1);return Sk.misceval.apply(a,void 0,void 0,void 0,c)};Sk.exportSymbol("Sk.misceval.callsim",Sk.misceval.callsim);Sk.misceval.callsimArray=function(a,c,f){c=c||[];return Sk.misceval.retryOptionalSuspensionOrThrow(Sk.misceval.callsimOrSuspendArray(a,c,f))};Sk.exportSymbol("Sk.misceval.callsimArray",Sk.misceval.callsimArray);Sk.misceval.callsimAsync=function(a,c,f){f=Array.prototype.slice.call(arguments,
2);return Sk.misceval.applyAsync(a,c,void 0,void 0,void 0,f)};Sk.exportSymbol("Sk.misceval.callsimAsync",Sk.misceval.callsimAsync);Sk.misceval.callsimOrSuspend=function(a,c){c=Array.prototype.slice.call(arguments,1);return Sk.misceval.applyOrSuspend(a,void 0,void 0,void 0,c)};Sk.exportSymbol("Sk.misceval.callsimOrSuspend",Sk.misceval.callsimOrSuspend);Sk.misceval.callsimOrSuspendArray=function(a,c,f){c=c||[];return void 0!==a&&a.tp$call?a.tp$call(c,f):Sk.misceval.applyOrSuspend(a,void 0,void 0,f,
c)};Sk.exportSymbol("Sk.misceval.callsimOrSuspendArray",Sk.misceval.callsimOrSuspendArray);Sk.misceval.apply=function(a,c,f,l,h){a=Sk.misceval.applyOrSuspend(a,c,f,l,h);return a instanceof Sk.misceval.Suspension?Sk.misceval.retryOptionalSuspensionOrThrow(a):a};Sk.exportSymbol("Sk.misceval.apply",Sk.misceval.apply);Sk.misceval.asyncToPromise=function(a,c){return new Promise(function(b,e){try{(function g(a){try{for(var d=function(){try{g(a.resume())}catch(t){e(t)}},f=function(b){try{a.data.result=b,
d()}catch(y){e(y)}},p=function(b){try{a.data.error=b,d()}catch(y){e(y)}};a instanceof Sk.misceval.Suspension;){var l=c&&(c[a.data.type]||c["*"]);if(l){var A=l(a);if(A){A.then(g,e);return}}if("Sk.promise"==a.data.type){a.data.promise.then(f,p);return}if("Sk.yield"==a.data.type){Sk.global.setImmediate(d);return}if("Sk.delay"==a.data.type){Sk.global.setImmediate(d);return}if(a.optional)a=a.resume();else throw new Sk.builtin.SuspensionError("Unhandled non-optional suspension of type '"+a.data.type+"'");
}b(a)}catch(t){e(t)}})(a())}catch(h){e(h)}})};Sk.exportSymbol("Sk.misceval.asyncToPromise",Sk.misceval.asyncToPromise);Sk.misceval.applyAsync=function(a,c,f,l,h,d){return Sk.misceval.asyncToPromise(function(){return Sk.misceval.applyOrSuspend(c,f,l,h,d)},a)};Sk.exportSymbol("Sk.misceval.applyAsync",Sk.misceval.applyAsync);Sk.misceval.chain=function(a,c){for(var b=1,e=a,h,d;;){if(b==arguments.length)return e;if(e&&e.$isSuspension)break;e=arguments[b](e);b++}d=Array(arguments.length-b);for(h=0;h<arguments.length-
b;h++)d[h]=arguments[b+h];h=0;return function k(a){for(;h<d.length;){if(a instanceof Sk.misceval.Suspension)return new Sk.misceval.Suspension(k,a);a=d[h](a);h++}return a}(e)};Sk.exportSymbol("Sk.misceval.chain",Sk.misceval.chain);Sk.misceval.tryCatch=function(a,c){try{var b=a()}catch(l){return c(l)}return b instanceof Sk.misceval.Suspension?(a=new Sk.misceval.Suspension(void 0,b),a.resume=function(){return Sk.misceval.tryCatch(b.resume,c)},a):b};Sk.exportSymbol("Sk.misceval.tryCatch",Sk.misceval.tryCatch);
Sk.misceval.iterFor=function(a,c,f){var b=f,e=function(c){b=c;return c instanceof Sk.misceval.Break?c:a.tp$iternext(!0)};return function n(a){for(;void 0!==a;){if(a instanceof Sk.misceval.Suspension)return new Sk.misceval.Suspension(n,a);if(a===Sk.misceval.Break||a instanceof Sk.misceval.Break)return a.brValue;a=Sk.misceval.chain(c(a,b),e)}return b}(a.tp$iternext(!0))};Sk.exportSymbol("Sk.misceval.iterFor",Sk.misceval.iterFor);Sk.misceval.iterArray=function(a,c,f){Sk.asserts.assert(Array.isArray(a),
"iterArgs requires an array");let b=0;return Sk.misceval.iterFor({tp$iternext:()=>a[b++]},c,f)};Sk.misceval.arrayFromIterable=function(a,c){if(void 0===a)return[];if(void 0===a.hp$type&&void 0!==a.sk$asarray)return a.sk$asarray();const b=[];a=Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(a),a=>{b.push(a)}),()=>b);return c?a:Sk.misceval.retryOptionalSuspensionOrThrow(a)};Sk.misceval.Break=function(a){if(!(this instanceof Sk.misceval.Break))return new Sk.misceval.Break(a);this.brValue=a};Sk.exportSymbol("Sk.misceval.Break",
Sk.misceval.Break);Sk.misceval.applyOrSuspend=function(a,c,f,l,h){var b;if(null==a||a===Sk.builtin.none.none$)throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(a)+"' object is not callable");"function"===typeof a&&void 0===a.tp$call&&(a=new Sk.builtin.func(a));var e=a.tp$call;if(void 0!==e){if(f)for(f=f.tp$iter(),b=f.tp$iternext();void 0!==b;b=f.tp$iternext())h.push(b);if(c)for(f=Sk.abstr.iter(c),b=f.tp$iternext();void 0!==b;b=f.tp$iternext()){if(!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("Function keywords must be strings");
l.push(b.v);l.push(Sk.abstr.objectGetItem(c,b,!1))}return e.call(a,h,l,c)}e=a.__call__;if(void 0!==e)return h.unshift(a),Sk.misceval.apply(e,c,f,l,h);throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(a)+"' object is not callable");};Sk.exportSymbol("Sk.misceval.applyOrSuspend",Sk.misceval.applyOrSuspend);Sk.misceval.promiseToSuspension=function(a){var b=new Sk.misceval.Suspension;b.resume=function(){if(b.data.error)throw b.data.error;return b.data.result};b.data={type:"Sk.promise",promise:a};return b};
Sk.exportSymbol("Sk.misceval.promiseToSuspension",Sk.misceval.promiseToSuspension);Sk.misceval.buildClass=function(a,c,f,l,h){var b=Sk.builtin.type,e={};c(a,e,void 0===h?{}:h);a.__name__&&(e.__module__=a.__name__);a=new Sk.builtin.str(f);l=new Sk.builtin.tuple(l);c=[];for(var n in e)e.hasOwnProperty(n)&&(c.push(new Sk.builtin.str(n)),c.push(e[n]));c=new Sk.builtin.dict(c);return Sk.misceval.callsimArray(b,[a,l,c])};Sk.exportSymbol("Sk.misceval.buildClass",Sk.misceval.buildClass)},function(m,q){Sk.builtin.callable_iter_=
Sk.abstr.buildIteratorClass("callable_iterator",{constructor:function(a,c){if(!Sk.builtin.checkCallable(a))throw new Sk.builtin.TypeError("iter(v, w): v must be callable");this.$callable=a;this.$sentinel=c;this.$flag=!1},iternext(a){if(!0!==this.$flag){if(a)return a=Sk.misceval.callsimOrSuspendArray(this.$callable,[]),Sk.misceval.chain(a,a=>{if(Sk.misceval.richCompareBool(a,this.$sentinel,"Eq",!0))this.$flag=!0;else return a});a=Sk.misceval.callsimArray(this.$callable,[]);if(Sk.misceval.richCompareBool(a,
this.$sentinel,"Eq",!1))this.$flag=!0;else return a}},flags:{sk$acceptable_as_base_class:!1}});Sk.builtin.seq_iter_=Sk.abstr.buildIteratorClass("iterator",{constructor:function(a){this.$index=0;this.$seq=a},iternext(a){let c;c=Sk.misceval.tryCatch(()=>this.$seq.mp$subscript(new Sk.builtin.int_(this.$index++),a),a=>{if(!(a instanceof Sk.builtin.IndexError||a instanceof Sk.builtin.StopIteration))throw a;});return a?c:Sk.misceval.retryOptionalSuspensionOrThrow(c)},methods:{__length_hint__:{$flags:{NoArgs:!0},
$meth(){if(this.$seq.sq$length)return this.$seq.sq$length()-this.$index;throw new Sk.builtin.NotImplementedError("len is not implemented for "+Sk.abstr.typeName(this.$seq));}}},flags:{sk$acceptable_as_base_class:!1}});Sk.exportSymbol("Sk.builtin.callable_iter_",Sk.builtin.callable_iter_)},function(m,q){Sk.builtin.list=Sk.abstr.buildNativeClass("list",{constructor:function(a){void 0===a?a=[]:Array.isArray(a)||(a=Sk.misceval.arrayFromIterable(a));Sk.asserts.assert(this instanceof Sk.builtin.list,"bad call to list, use 'new' with an Array of python objects");
this.v=a;this.in$repr=!1},slots:{tp$getattr:Sk.generic.getAttr,tp$as_sequence_or_mapping:!0,tp$hash:Sk.builtin.none.none$,tp$doc:"Built-in mutable sequence.\n\nIf no argument is given, the constructor creates a new empty list.\nThe argument must be an iterable if specified.",tp$new:Sk.generic.new,tp$init(a,c){Sk.abstr.checkNoKwargs("list",c);Sk.abstr.checkArgsLen("list",a,0,1);return Sk.misceval.chain(Sk.misceval.arrayFromIterable(a[0],!0),a=>{this.v=a})},$r(){if(this.in$repr)return new Sk.builtin.str("[...]");
this.in$repr=!0;const a=this.v.map(a=>Sk.misceval.objectRepr(a));this.in$repr=!1;return new Sk.builtin.str("["+a.join(", ")+"]")},tp$richcompare:Sk.generic.seqCompare,tp$iter(){return new a(this)},sq$length(){return this.v.length},sq$concat(a){if(!(a instanceof Sk.builtin.list))throw new Sk.builtin.TypeError("can only concatenate list to list");return new Sk.builtin.list(this.v.concat(a.v))},sq$contains(a){for(let b=this.tp$iter(),c=b.tp$iternext();void 0!==c;c=b.tp$iternext())if(c===a||Sk.misceval.richCompareBool(c,
a,"Eq"))return!0;return!1},sq$repeat(a){if(!Sk.misceval.isIndex(a))throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '"+Sk.abstr.typeName(a)+"'");a=Sk.misceval.asIndexSized(a,Sk.builtin.OverflowError);if(a*this.v.length>Number.MAX_SAFE_INTEGER)throw new Sk.builtin.OverflowError;const b=[];for(let c=0;c<a;c++)for(let a=0;a<this.v.length;a++)b.push(this.v[a]);return new Sk.builtin.list(b)},mp$subscript(a){if(Sk.misceval.isIndex(a))return a=Sk.misceval.asIndexSized(a,Sk.builtin.IndexError),
a=this.list$inRange(a,"list index out of range"),this.v[a];if(a instanceof Sk.builtin.slice){const b=[];a.sssiter$(this.v.length,a=>{b.push(this.v[a])});return new Sk.builtin.list(b)}throw new Sk.builtin.TypeError("list indices must be integers or slices, not "+Sk.abstr.typeName(a));},mp$ass_subscript(a,c){void 0===c?this.del$subscript(a):this.ass$subscript(a,c)},sq$inplace_concat(a){return a===this?(this.v.push(...this.v),this):Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(a),a=>{this.v.push(a)}),
()=>this)},sq$inplace_repeat(a){if(!Sk.misceval.isIndex(a))throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '"+Sk.abstr.typeName(a)+"'");a=Sk.misceval.asIndexSized(a,Sk.builtin.OverflowError);const b=this.v.length;if(0>=a)this.v.length=0;else if(a*b>Number.MAX_SAFE_INTEGER)throw new Sk.builtin.OverflowError;for(let c=1;c<a;c++)for(let a=0;a<b;a++)this.v.push(this.v[a]);return this}},methods:{__reversed__:{$meth(){return new c(this)},$flags:{NoArgs:!0},$textsig:"($self, /)",
$doc:"Return a reverse iterator over the list."},clear:{$meth(){this.v.length=0;return Sk.builtin.none.none$},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Remove all items from list."},copy:{$meth(){return new Sk.builtin.list(this.v.slice(0))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return a shallow copy of the list."},append:{$meth(a){this.v.push(a);return Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:"($self, object, /)",$doc:"Append object to the end of the list."},insert:{$meth(a,
c){a=Sk.misceval.asIndexSized(a,Sk.builtin.OverflowError);({start:a}=Sk.builtin.slice.startEnd$wrt(this,a));this.v.splice(a,0,c);return Sk.builtin.none.none$},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($self, index, object, /)",$doc:"Insert object before index."},extend:{$meth(a){return a===this?(this.v.push(...this.v),Sk.builtin.none.none$):Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(a),a=>{this.v.push(a)}),()=>Sk.builtin.none.none$)},$flags:{OneArg:!0},$textsig:"($self, iterable, /)",$doc:"Extend list by appending elements from the iterable."},
pop:{$meth(a){a=void 0===a?this.v.length-1:Sk.misceval.asIndexSized(a,Sk.builtin.OverflowError);a=this.list$inRange(a,"pop index out of range");const b=this.v[a];this.v.splice(a,1);return b},$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, index=-1, /)",$doc:"Remove and return item at index (default last).\n\nRaises IndexError if list is empty or index is out of range."},remove:{$meth(a){a=this.list$indexOf(a);if(-1===a)throw new Sk.builtin.ValueError("list.remove(x): x not in list");this.v.splice(a,
1);return Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:"($self, value, /)",$doc:"Remove first occurrence of value.\n\nRaises ValueError if the value is not present."},sort:{$meth(a,c){if(a.length)throw new Sk.builtin.TypeError("sort() takes no positional arguments");const [b,e]=Sk.abstr.copyKeywordsToNamedArgs("sort",["key","reverse"],a,c,[Sk.builtin.none.none$,Sk.builtin.bool.false$]);return this.list$sort(void 0,b,e)},$flags:{FastCall:!0},$textsig:"($self, /, *, key=None, reverse=False)",
$doc:"Stable sort *IN PLACE*."},index:{$meth(a,c,f){if(void 0!==c&&!Sk.misceval.isIndex(c)||void 0!==f&&!Sk.misceval.isIndex(f))throw new Sk.builtin.TypeError("slice indices must be integers or have an __index__ method");c=this.list$indexOf(a,c,f);if(-1===c)throw new Sk.builtin.ValueError(Sk.misceval.objectRepr(a)+" is not in list");return new Sk.builtin.int_(c)},$flags:{MinArgs:1,MaxArgs:3},$textsig:"($self, value, start=0, stop=sys.maxsize, /)",$doc:"Return first index of value.\n\nRaises ValueError if the value is not present."},
count:{$meth(a){let b=0;const c=this.v.length;for(let e=0;e<c;e++)if(this.v[e]===a||Sk.misceval.richCompareBool(this.v[e],a,"Eq"))b+=1;return new Sk.builtin.int_(b)},$flags:{OneArg:!0},$textsig:"($self, value, /)",$doc:"Return number of occurrences of value."},reverse:{$meth(){this.list$reverse();return Sk.builtin.none.none$},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Reverse *IN PLACE*."}},proto:{sk$asarray(){return this.v.slice(0)},list$sort:function(a,c,f){const b=null!=c&&c!==Sk.builtin.none.none$;
var e=null!=a&&a!==Sk.builtin.none.none$;let d;if(void 0===f)d=!1;else if(Sk.builtin.checkInt(f))d=Sk.misceval.isTrue(f);else throw new Sk.builtin.TypeError("an integer is required");f=new Sk.builtin.timSort(this);this.v=[];const g=new Sk.builtin.int_(0);if(b){f.lt=e?function(b,c){b=Sk.misceval.callsimArray(a,[b[0],c[0]]);return Sk.misceval.richCompareBool(b,g,"Lt")}:function(a,b){return Sk.misceval.richCompareBool(a[0],b[0],"Lt")};for(let a=0;a<f.listlength;a++){e=f.list.v[a];const b=Sk.misceval.callsimArray(c,
[e]);f.list.v[a]=[b,e]}}else e&&(f.lt=function(b,c){b=Sk.misceval.callsimArray(a,[b,c]);return Sk.misceval.richCompareBool(b,g,"Lt")});d&&f.list.list$reverse();f.sort();d&&f.list.list$reverse();if(b)for(c=0;c<f.listlength;c++)e=f.list.v[c][1],f.list.v[c]=e;c=0<this.sq$length();this.v=f.list.v;if(c)throw new Sk.builtin.ValueError("list modified during sort");return Sk.builtin.none.none$},list$inRange(a,c){0>a&&(a+=this.v.length);if(0<=a&&a<this.v.length)return a;throw new Sk.builtin.IndexError(c);
},list$indexOf(a,c,f){for({start:c,end:f}=Sk.builtin.slice.startEnd$wrt(this,c,f);c<f&&c<this.v.length;c++)if(this.v[c]===a||Sk.misceval.richCompareBool(this.v[c],a,"Eq"))return c;return-1},list$reverse(){this.v.reverse()},ass$subscript(a,c){if(Sk.misceval.isIndex(a))this.ass$index(a,c);else if(a instanceof Sk.builtin.slice){const {start:b,stop:e,step:h}=a.slice$indices(this.v.length);1===h?this.ass$slice(b,e,c):this.ass$ext_slice(a,c)}else throw new Sk.builtin.TypeError("list indices must be integers or slices, not "+
Sk.abstr.typeName(a));},ass$index(a,c){a=Sk.misceval.asIndexSized(a,Sk.builtin.IndexError);a=this.list$inRange(a,"list assignment index out of range");this.v[a]=c},ass$slice(a,c,f){if(!Sk.builtin.checkIterable(f))throw new Sk.builtin.TypeError("can only assign an iterable");f=Sk.misceval.arrayFromIterable(f);this.v.splice(a,c-a,...f)},ass$ext_slice(a,c){const b=[];a.sssiter$(this.v.length,a=>{b.push(a)});if(!Sk.builtin.checkIterable(c))throw new Sk.builtin.TypeError("must assign iterable to extended slice");
a=Sk.misceval.arrayFromIterable(c);if(b.length!==a.length)throw new Sk.builtin.ValueError("attempt to assign sequence of size "+a.length+" to extended slice of size "+b.length);for(c=0;c<b.length;c++)this.v.splice(b[c],1,a[c])},del$subscript(a){if(Sk.misceval.isIndex(a))this.del$index(a);else if(a instanceof Sk.builtin.slice){const {start:b,stop:c,step:l}=a.slice$indices(this.v.length);1===l?this.del$slice(b,c):this.del$ext_slice(a,0<l?1:0)}else throw new Sk.builtin.TypeError("list indices must be integers, not "+
Sk.abstr.typeName(a));},del$index(a){a=Sk.misceval.asIndexSized(a,Sk.builtin.IndexError);a=this.list$inRange(a,"list assignment index out of range");this.v.splice(a,1)},del$slice(a,c){this.v.splice(a,c-a)},del$ext_slice(a,c){let b=0;a.sssiter$(this.v.length,a=>{this.v.splice(a-b,1);b+=c})}}});Sk.exportSymbol("Sk.builtin.list",Sk.builtin.list);Sk.builtin.list.py2$methods={sort:{$name:"sort",$meth(a,c){const [b,e,h]=Sk.abstr.copyKeywordsToNamedArgs("sort",["cmp","key","reverse"],a,c,[Sk.builtin.none.none$,
Sk.builtin.none.none$,Sk.builtin.bool.false$]);return this.list$sort(b,e,h)},$flags:{FastCall:!0},$textsig:"($self, cmp=None, key=None, reverse=False)",$doc:"Stable sort *IN PLACE*."}};var a=Sk.abstr.buildIteratorClass("list_iterator",{constructor:function(a){this.$index=0;this.$seq=a.v},iternext:Sk.generic.iterNextWithArray,methods:{__length_hint__:Sk.generic.iterLengthHintWithArrayMethodDef},flags:{sk$acceptable_as_base_class:!1}}),c=Sk.abstr.buildIteratorClass("list_reverseiterator",{constructor:function(a){this.$index=
a.v.length-1;this.$seq=a.v},iternext(){const a=this.$seq[this.$index--];if(void 0===a)this.tp$iternext=()=>{};else return a},methods:{__length_hint__:Sk.generic.iterReverseLengthHintMethodDef},flags:{sk$acceptable_as_base_class:!1}})},function(m,q,a){function c(a){var b=a.replace(K,"").replace(G,"_").toLowerCase();b=F[b];return void 0===b?a:b}function b(a,b,c){if(void 0===b)b="utf-8";else if(Sk.builtin.checkString(b))b=b.$jsstr();else throw new Sk.builtin.TypeError(a+"() argument "+("bytesstr".includes(a)?
2:1)+" must be str not "+Sk.abstr.typeName(b));if(void 0===c)c="strict";else if(Sk.builtin.checkString(c))c=c.$jsstr();else throw new Sk.builtin.TypeError(a+"() argument "+("bytesstr".includes(a)?3:2)+" must be str not "+Sk.abstr.typeName(c));return{encoding:b,errors:c}}function e(a,b,d){a=a.$jsstr();b=c(b);if("strict"!==d&&"ignore"!==d&&"replace"!==d)throw new Sk.builtin.NotImplementedError("'"+d+"' error handling not implemented in Skulpt");if("ascii"===b){b=[];for(e in a){const c=a.charCodeAt(e);
if(127<c){if("strict"===d)throw d=f(c),new Sk.builtin.UnicodeEncodeError("'ascii' codec can't encode character '"+d+"' in position "+e+": ordinal not in range(128)");"replace"===d&&b.push(63)}else b.push(c)}var e=new Uint8Array(b)}else if("utf-8"===b)e=U.encode(a);else throw new Sk.builtin.LookupError("unknown encoding: "+b);return new Sk.builtin.bytes(e)}function f(a){var b=265>=a?"\\x":"\\u";a=a.toString(16);3===a.length&&(a=a.slice(1,3));return a=1===a.length?b+"0"+a:b+a}function l(a,d){({encoding:a,
errors:d}=b("decode",a,d));a=c(a);if("strict"!==d&&"ignore"!==d&&"replace"!==d)throw new Sk.builtin.NotImplementedError("'"+d+"' error handling not implemented in Skulpt");if("ascii"===a){a=this.v;var e="";for(let b=0;b<a.length;b++){const c=a[b];if(127<c){if("strict"===d)throw new Sk.builtin.UnicodeDecodeError("'ascii' codec can't decode byte 0x"+c.toString(16)+" in position "+b+": ordinal not in range(128)");"replace"===d&&(e+=String.fromCharCode(65533))}else e+=String.fromCharCode(c)}a=e}else if("utf-8"===
a)a:if(a=this.v,e=d,d=C.decode(a),"replace"===e)a=d;else{if("strict"===e){e=d.indexOf("\ufffd");if(-1===e){a=d;break a}throw new Sk.builtin.UnicodeDecodeError("'utf-8' codec can't decode byte 0x"+a[e].toString(16)+" in position "+e+": invalid start byte");}a=d.replace(/\ufffd/g,"")}else throw new Sk.builtin.LookupError("unknown encoding: "+a);return new Sk.builtin.str(a)}function h(a,b){return function(c,d,e){if(!(c instanceof Sk.builtin.bytes||c instanceof Sk.builtin.tuple))throw new Sk.builtin.TypeError(a+
" first arg must be bytes or a tuple of bytes, not "+Sk.abstr.typeName(c));({start:d,end:e}=Sk.builtin.slice.startEnd$wrt(this,d,e));if(e<d)return Sk.builtin.bool.false$;d=this.v.subarray(d,e);if(c instanceof Sk.builtin.tuple){for(let a=Sk.abstr.iter(c),e=a.tp$iternext();void 0!==e;e=a.tp$iternext())if(e=this.get$raw(e),b(d,e))return Sk.builtin.bool.true$;return Sk.builtin.bool.false$}return b(d,c.v)?Sk.builtin.bool.true$:Sk.builtin.bool.false$}}function d(a){return function(b,c,d){b=this.get$tgt(b);
({start:c,end:d}=Sk.builtin.slice.startEnd$wrt(this,c,d));return d<c?-1:"number"===typeof b?(b=a?this.v.lastIndexOf(b,d-1):this.v.indexOf(b,c),b>=c&&b<d?b:-1):a?this.find$subright(b,c,d):this.find$subleft(b,c,d)}}function g(a){return function(b){b=this.get$raw(b);let c;if(a){if(c=this.find$subright(b,0,this.v.length),0>c)return new Sk.builtin.tuple([new Sk.builtin.bytes,new Sk.builtin.bytes,this])}else if(c=this.find$subleft(b,0,this.v.length),0>c)return new Sk.builtin.tuple([this,new Sk.builtin.bytes,
new Sk.builtin.bytes]);return new Sk.builtin.tuple([new Sk.builtin.bytes(this.v.subarray(0,c)),new Sk.builtin.bytes(b),new Sk.builtin.bytes(this.v.subarray(c+b.length))])}}function n(a,b){return function(c){var d=void 0===c||c===Sk.builtin.none.none$?new Uint8Array([9,10,11,12,13,32,133]):this.get$raw(c);c=0;var e=this.v.length;if(a)for(;c<e&&d.includes(this.v[c]);)c++;if(b)for(;e>c&&d.includes(this.v[e-1]);)e--;d=new Uint8Array(e-c);for(e=0;e<d.length;e++)d[e]=this.v[e+c];return new Sk.builtin.bytes(d)}}
function k(a,b,c){return function(d,e){if(void 0===e)e=32;else if(e instanceof Sk.builtin.bytes&&1==e.v.length)e=e.v[0];else throw new Sk.builtin.TypeError(a+"() argument 2 must be a byte string of length 1, not "+Sk.abstr.typeName(e));const f=this.v.length;d=Sk.misceval.asIndexSized(d,Sk.builtin.OverflowError);if(d<=f)return new Sk.builtin.bytes(this.v);const g=new Uint8Array(d);let k,h;c?(k=Math.floor((d-f)/2),h=(d-f)%2?k+1:k):b?(k=d-f,h=0):(k=0,h=d-f);g.fill(e,0,k);for(let a=0;a<f;a++)g[a+k]=this.v[a];
g.fill(e,d-h);return new Sk.builtin.bytes(g)}}function p(a){return 9<=a&&13>=a||32===a}function w(a){return 97<=a&&122>=a}function A(a){return 65<=a&&90>=a}function t(a){return 48<=a&&57>=a}function y(a,b){return function(){return 0===this.v.length?b?Sk.builtin.bool.true$:Sk.builtin.bool.false$:this.v.every(b=>a(b))?Sk.builtin.bool.true$:Sk.builtin.bool.false$}}function B(a,b){return function(){let c=!1;for(let d=0;d<this.v.length;d++){if(b(this.v[d]))return Sk.builtin.bool.false$;!c&&a(this.v[d])&&
(c=!0)}return c?Sk.builtin.bool.true$:Sk.builtin.bool.false$}}function E(a){return function(){const b=new Uint8Array(this.v.length);for(let c=0;c<this.v.length;c++)b[c]=a(this.v[c]);return new Sk.builtin.bytes(b)}}a(30);const F={utf:"utf-8",utf8:"utf-8",utf_8:"utf-8",ascii:"ascii"};var K=/\s+/g,G=/[_-]+/g;const U=new TextEncoder,C=new TextDecoder;Sk.builtin.bytes=Sk.abstr.buildNativeClass("bytes",{constructor:function(a){if(!(this instanceof Sk.builtin.bytes))throw new TypeError("bytes is a constructor use 'new'");
if(void 0===a)this.v=new Uint8Array;else if(a instanceof Uint8Array)this.v=a;else if(Array.isArray(a))Sk.asserts.assert(a.every(a=>0<=a&&255>=a),"bad internal call to bytes with array"),this.v=new Uint8Array(a);else if("string"===typeof a){let b;const c=new Uint8Array(a.length),d=a.length;for(let e=0;e<d;e++){b=a.charCodeAt(e);if(255<b)throw new Sk.builtin.UnicodeDecodeError("invalid string at index "+e+" (possibly contains a unicode character)");c[e]=b}this.v=c}else if("number"===typeof a)this.v=
new Uint8Array(a);else throw new Sk.builtin.TypeError("bad argument to bytes constructor");},slots:{tp$getattr:Sk.generic.getAttr,tp$doc:"bytes(iterable_of_ints) -> bytes\nbytes(string, encoding[, errors]) -> bytes\nbytes(bytes_or_buffer) -> immutable copy of bytes_or_buffer\nbytes(int) -> bytes object of size given by the parameter initialized with null bytes\nbytes() -> empty bytes object\n\nConstruct an immutable array of bytes from:\n  - an iterable yielding integers in range(256)\n  - a text string encoded using the specified encoding\n  - any object implementing the buffer API.\n  - an integer",
tp$new(a,c){if(this!==Sk.builtin.bytes.prototype)return this.$subtype_new(a,c);c=c||[];if(1>=a.length&&0===+c.length)a=a[0];else{[a,d,c]=Sk.abstr.copyKeywordsToNamedArgs("bytes",[null,"pySource","errors"],a,c);({encoding:d,errors:c}=b("bytes",d,c));if(!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("encoding or errors without a string argument");return e(a,d,c)}if(void 0===a)return new Sk.builtin.bytes;if(void 0!==(c=Sk.abstr.lookupSpecial(a,Sk.builtin.str.$bytes))){var d=Sk.misceval.callsimOrSuspendArray(c,
[]);return Sk.misceval.chain(d,a=>{if(!Sk.builtin.checkBytes(a))throw new Sk.builtin.TypeError("__bytes__ returned non-bytes (type "+Sk.abstr.typeName(a)+")");return a})}if(Sk.misceval.isIndex(a)){d=Sk.misceval.asIndexSized(a,Sk.builtin.OverflowError);if(0>d)throw new Sk.builtin.ValueError("negative count");return new Sk.builtin.bytes(d)}if(Sk.builtin.checkBytes(a))return new Sk.builtin.bytes(a.v);if(Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("string argument without an encoding");if(Sk.builtin.checkIterable(a)){let b=
[];d=Sk.misceval.iterFor(Sk.abstr.iter(a),a=>{a=Sk.misceval.asIndexSized(a);if(0>a||255<a)throw new Sk.builtin.ValueError("bytes must be in range(0, 256)");b.push(a)});return Sk.misceval.chain(d,()=>new Sk.builtin.bytes(b))}throw new Sk.builtin.TypeError("cannot convert '"+Sk.abstr.typeName(d)+"' object into bytes");},$r(){let a,b="'";const c=-1!==this.v.indexOf(34);let d="";for(let e=0;e<this.v.length;e++)if(a=this.v[e],9>a||10<a&&13>a||13<a&&32>a||126<a)d+=f(a);else if(9===a||10===a||13===a||39===
a||92===a)switch(a){case 9:d+="\\t";break;case 10:d+="\\n";break;case 13:d+="\\r";break;case 39:c?d+="\\'":(d+="'",b='"');break;case 92:d+="\\\\"}else d+=String.fromCharCode(a);return new Sk.builtin.str("b"+b+d+b)},tp$str(){return this.$r()},tp$iter(){return new N(this)},tp$richcompare(a,b){if(this===a&&Sk.misceval.opAllowsEquality(b))return!0;if(!(a instanceof Sk.builtin.bytes))return Sk.builtin.NotImplemented.NotImplemented$;const c=this.v;a=a.v;if(c.length!==a.length&&("Eq"===b||"NotEq"===b))return"Eq"===
b?!1:!0;let d;const e=Math.min(c.length,a.length);for(d=0;d<e&&c[d]===a[d];d++);switch(b){case "Lt":return d===e&&c.length<a.length||c[d]<a[d];case "LtE":return d===e&&c.length<=a.length||c[d]<=a[d];case "Eq":return d===e;case "NotEq":return d<e;case "Gt":return d===e&&c.length>a.length||c[d]>a[d];case "GtE":return d===e&&c.length>=a.length||c[d]>=a[d]}},tp$hash(){return(new Sk.builtin.str(this.$jsstr())).tp$hash()},tp$as_sequence_or_mapping:!0,mp$subscript(a){if(Sk.misceval.isIndex(a)){let b=Sk.misceval.asIndexSized(a,
Sk.builtin.IndexError);if(void 0!==b){0>b&&(b=this.v.length+b);if(0>b||b>=this.v.length)throw new Sk.builtin.IndexError("index out of range");return new Sk.builtin.int_(this.v[b])}}else if(a instanceof Sk.builtin.slice){const b=[];a.sssiter$(this.v.length,a=>{b.push(this.v[a])});return new Sk.builtin.bytes(new Uint8Array(b))}throw new Sk.builtin.TypeError("byte indices must be integers or slices, not "+Sk.abstr.typeName(a));},sq$length(){return this.v.length},sq$concat(a){if(!(a instanceof Sk.builtin.bytes))throw new Sk.builtin.TypeError("can't concat "+
Sk.abstr.typeName(a)+" to bytes");const b=new Uint8Array(this.v.length+a.v.length);let c;for(c=0;c<this.v.length;c++)b[c]=this.v[c];for(let d=0;d<a.v.length;d++,c++)b[c]=a.v[d];return new Sk.builtin.bytes(b)},sq$repeat(a){if(!Sk.misceval.isIndex(a))throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '"+Sk.abstr.typeName(a)+"'");a=Sk.misceval.asIndexSized(a,Sk.builtin.OverflowError);const b=a*this.v.length;if(b>Number.MAX_SAFE_INTEGER)throw new Sk.builtin.OverflowError;if(0>=
a)return new Sk.builtin.bytes;a=new Uint8Array(b);let c=0;for(;c<b;)for(let b=0;b<this.v.length;b++)a[c++]=this.v[b];return new Sk.builtin.bytes(a)},sq$contains(a){return-1!==this.find$left(a)},tp$as_number:!0,nb$remainder:Sk.builtin.str.prototype.nb$remainder},proto:{$jsstr(){let a="";for(let b=0;b<this.v.length;b++)a+=String.fromCharCode(this.v[b]);return a},get$tgt(a){if(a instanceof Sk.builtin.bytes)return a.v;a=Sk.misceval.asIndexOrThrow(a,"argument should be integer or bytes-like object, not {tp$name}");
if(0>a||255<a)throw new Sk.builtin.ValueError("bytes must be in range(0, 256)");return a},get$raw(a){if(a instanceof Sk.builtin.bytes)return a.v;throw new Sk.builtin.TypeError("a bytes-like object is required, not '"+Sk.abstr.typeName(a)+"'");},get$splitArgs:function(a,b){b=Sk.misceval.asIndexSized(b,Sk.builtin.OverflowError);b=0>b?Infinity:b;a=Sk.builtin.checkNone(a)?null:this.get$raw(a);if(null!==a&&!a.length)throw new Sk.builtin.ValueError("empty separator");return{sep:a,maxsplit:b}},find$left:d(!1),
find$right:d(!0),find$subleft:function(a,b,c){c=c-a.length+1;let d=b;for(;d<c;){if(a.every((a,b)=>a===this.v[d+b]))return d;d++}return-1},find$subright(a,b,c){let d=c-a.length;for(;d>=b;){if(a.every((a,b)=>a===this.v[d+b]))return d;d--}return-1},$subtype_new(a,b){const c=new this.constructor;a=Sk.builtin.bytes.prototype.tp$new(a,b);c.v=a.v;return c},sk$asarray(){const a=[];this.v.forEach(b=>{a.push(new Sk.builtin.int_(b))});return a}},flags:{str$encode:e,$decode:l,check$encodeArgs:b},methods:{__getnewargs__:{$meth(){return new Sk.builtin.tuple(new Sk.builtin.bytes(this.v))},
$flags:{NoArgs:!0},$textsig:null,$doc:null},capitalize:{$meth(){const a=this.v.length;if(0===a)return new Sk.builtin.bytes(this.v);const b=new Uint8Array(a);let c=this.v[0];b[0]=w(c)?c-32:c;for(let d=1;d<a;d++)c=this.v[d],b[d]=A(c)?c+32:c;return new Sk.builtin.bytes(b)},$flags:{NoArgs:!0},$textsig:null,$doc:"B.capitalize() -> copy of B\n\nReturn a copy of B with only its first character capitalized (ASCII)\nand the rest lower-cased."},center:{$meth:k("center",!1,!0),$flags:{MinArgs:1,MaxArgs:2},$textsig:null,
$doc:"B.center(width[, fillchar]) -> copy of B\n\nReturn B centered in a string of length width.  Padding is\ndone using the specified fill character (default is a space)."},count:{$meth(a,b,c){a=this.get$tgt(a);({start:b,end:c}=Sk.builtin.slice.startEnd$wrt(this,b,c));let d=0;if("number"===typeof a)for(;b<c;b++)this.v[b]===a&&d++;else{c=c-a.length+1;for(let e=b;e<c;e++)a.every((a,b)=>a===this.v[e+b])&&(d++,e+=a.length-1)}return new Sk.builtin.int_(d)},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:"B.count(sub[, start[, end]]) -> int\n\nReturn the number of non-overlapping occurrences of subsection sub in\nbytes B[start:end].  Optional arguments start and end are interpreted\nas in slice notation."},
decode:{$meth:l,$flags:{NamedArgs:["encoding","errors"]},$textsig:"($self, /, encoding='utf-8', errors='strict')",$doc:"Decode the bytes using the codec registered for encoding.\n\n  encoding\n    The encoding with which to decode the bytes.\n  errors\n    The error handling scheme to use for the handling of decoding errors.\n    The default is 'strict' meaning that decoding errors raise a\n    UnicodeDecodeError. Other possible values are 'ignore' and 'replace'\n    as well as any other name registered with codecs.register_error that\n    can handle UnicodeDecodeErrors."},
endswith:{$meth:h("endswith",(a,b)=>{const c=a.length-b.length;return 0<=c&&b.every((b,d)=>b===a[c+d])}),$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:"B.endswith(suffix[, start[, end]]) -> bool\n\nReturn True if B ends with the specified suffix, False otherwise.\nWith optional start, test B beginning at that position.\nWith optional end, stop comparing B at that position.\nsuffix can also be a tuple of bytes to try."},expandtabs:{$meth(a){a=Sk.misceval.asIndexSized(a,Sk.builtin.OverflowError,"an integer is required (got type {tp$nam})");
const b=[];let c=0;for(let e=0;e<this.v.length;e++){var d=this.v[e];9===d?(d=a-c%a,b.push(...Array(d).fill(32)),c+=d):10===d||13===d?(b.push(d),c=0):(b.push(d),c++)}return new Sk.builtin.bytes(new Uint8Array(b))},$flags:{NamedArgs:["tabsize"],Defaults:[8]},$textsig:null,$doc:"B.expandtabs(tabsize=8) -> copy of B\n\nReturn a copy of B where all tab characters are expanded using spaces.\nIf tabsize is not given, a tab size of 8 characters is assumed."},find:{$meth:function(a,b,c){return new Sk.builtin.int_(this.find$left(a,
b,c))},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:"B.find(sub[, start[, end]]) -> int\n\nReturn the lowest index in B where subsection sub is found,\nsuch that sub is contained within B[start,end].  Optional\narguments start and end are interpreted as in slice notation.\n\nReturn -1 on failure."},hex:{$meth(){let a="";for(let b=0;b<this.v.length;b++)a+=this.v[b].toString(16).padStart(2,"0");return new Sk.builtin.str(a)},$flags:{NoArgs:!0},$textsig:null,$doc:"B.hex() -> string\n\nCreate a string of hexadecimal numbers from a bytes object.\nExample: b'\\xb9\\x01\\xef'.hex() -> 'b901ef'."},
index:{$meth:function(a,b,c){a=this.find$left(a,b,c);if(-1===a)throw new Sk.builtin.ValueError("subsection not found");return new Sk.builtin.int_(a)},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:"B.index(sub[, start[, end]]) -> int\n\nReturn the lowest index in B where subsection sub is found,\nsuch that sub is contained within B[start,end].  Optional\narguments start and end are interpreted as in slice notation.\n\nRaises ValueError when the subsection is not found."},isalnum:{$meth:y(a=>t(a)||
w(a)||A(a)),$flags:{NoArgs:!0},$textsig:null,$doc:"B.isalnum() -> bool\n\nReturn True if all characters in B are alphanumeric\nand there is at least one character in B, False otherwise."},isalpha:{$meth:y(a=>65<=a&&90>=a||97<=a&&122>=a),$flags:{NoArgs:!0},$textsig:null,$doc:"B.isalpha() -> bool\n\nReturn True if all characters in B are alphabetic\nand there is at least one character in B, False otherwise."},isascii:{$meth:y(a=>0<=a&&127>=a,!0),$flags:{NoArgs:!0},$textsig:null,$doc:"B.isascii() -> bool\n\nReturn True if B is empty or all characters in B are ASCII,\nFalse otherwise."},
isdigit:{$meth:y(t),$flags:{NoArgs:!0},$textsig:null,$doc:"B.isdigit() -> bool\n\nReturn True if all characters in B are digits\nand there is at least one character in B, False otherwise."},islower:{$meth:B(w,A),$flags:{NoArgs:!0},$textsig:null,$doc:"B.islower() -> bool\n\nReturn True if all cased characters in B are lowercase and there is\nat least one cased character in B, False otherwise."},isspace:{$meth:y(p),$flags:{NoArgs:!0},$textsig:null,$doc:"B.isspace() -> bool\n\nReturn True if all characters in B are whitespace\nand there is at least one character in B, False otherwise."},
istitle:{$meth:function(){let a=!1,b=!1;for(let c=0;c<this.v.length;c++){const d=this.v[c];if(A(d)){if(a)return Sk.builtin.bool.false$;b=a=!0}else if(w(d)){if(!a)return Sk.builtin.bool.false$;b=!0}else a=!1}return b?Sk.builtin.bool.true$:Sk.builtin.bool.false$},$flags:{NoArgs:!0},$textsig:null,$doc:"B.istitle() -> bool\n\nReturn True if B is a titlecased string and there is at least one\ncharacter in B, i.e. uppercase characters may only follow uncased\ncharacters and lowercase characters only cased ones. Return False\notherwise."},
isupper:{$meth:B(A,w),$flags:{NoArgs:!0},$textsig:null,$doc:"B.isupper() -> bool\n\nReturn True if all cased characters in B are uppercase and there is\nat least one cased character in B, False otherwise."},join:{$meth(a){const b=[];let c=0;return Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(a),a=>{if(!(a instanceof Sk.builtin.bytes))throw new Sk.builtin.TypeError("sequence item "+c+": expected a bytes-like object, "+Sk.abstr.typeName(a)+" found");c++;b.length&&b.push(...this.v);b.push(...a.v)}),
()=>new Sk.builtin.bytes(new Uint8Array(b)))},$flags:{OneArg:!0},$textsig:"($self, iterable_of_bytes, /)",$doc:"Concatenate any number of bytes objects.\n\nThe bytes whose method is called is inserted in between each pair.\n\nThe result is returned as a new bytes object.\n\nExample: b'.'.join([b'ab', b'pq', b'rs']) -> b'ab.pq.rs'."},ljust:{$meth:k("ljust",!1,!1),$flags:{MinArgs:1,MaxArgs:2},$textsig:null,$doc:"B.ljust(width[, fillchar]) -> copy of B\n\nReturn B left justified in a string of length width. Padding is\ndone using the specified fill character (default is a space)."},
lower:{$meth:E(a=>A(a)?a+32:a),$flags:{NoArgs:!0},$textsig:null,$doc:"B.lower() -> copy of B\n\nReturn a copy of B with all ASCII characters converted to lowercase."},lstrip:{$meth:n(!0,!1),$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, bytes=None, /)",$doc:"Strip leading bytes contained in the argument.\n\nIf the argument is omitted or None, strip leading  ASCII whitespace."},partition:{$meth:g(!1),$flags:{OneArg:!0},$textsig:"($self, sep, /)",$doc:"Partition the bytes into three parts using the given separator.\n\nThis will search for the separator sep in the bytes. If the separator is found,\nreturns a 3-tuple containing the part before the separator, the separator\nitself, and the part after it.\n\nIf the separator is not found, returns a 3-tuple containing the original bytes\nobject and two empty bytes objects."},
replace:{$meth(a,b,c){a=this.get$raw(a);b=this.get$raw(b);c=void 0===c?-1:Sk.misceval.asIndexSized(c,Sk.builtin.OverflowError);c=0>c?Infinity:c;const d=[];let e=0;for(var f=0;f<this.v.length&&e<c;){const c=this.find$subleft(a,f,this.v.length);if(-1===c)break;for(;f<c;f++)d.push(this.v[f]);d.push(...b);f=c+a.length;e++}for(f;f<this.v.length;f++)d.push(this.v[f]);return new Sk.builtin.bytes(new Uint8Array(d))},$flags:{MinArgs:2,MaxArgs:3},$textsig:"($self, old, new, count=-1, /)",$doc:"Return a copy with all occurrences of substring old replaced by new.\n\n  count\n    Maximum number of occurrences to replace.\n    -1 (the default value) means replace all occurrences.\n\nIf the optional argument count is given, only the first count occurrences are\nreplaced."},
rfind:{$meth(a,b,c){return new Sk.builtin.int_(this.find$right(a,b,c))},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:"B.rfind(sub[, start[, end]]) -> int\n\nReturn the highest index in B where subsection sub is found,\nsuch that sub is contained within B[start,end].  Optional\narguments start and end are interpreted as in slice notation.\n\nReturn -1 on failure."},rindex:{$meth:function(a,b,c){a=this.find$right(a,b,c);if(-1===a)throw new Sk.builtin.ValueError("subsection not found");return new Sk.builtin.int_(a)},
$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:"B.rindex(sub[, start[, end]]) -> int\n\nReturn the highest index in B where subsection sub is found,\nsuch that sub is contained within B[start,end].  Optional\narguments start and end are interpreted as in slice notation.\n\nRaise ValueError when the subsection is not found."},rjust:{$meth:k("rjust",!0,!1),$flags:{MinArgs:1,MaxArgs:2},$textsig:null,$doc:"B.rjust(width[, fillchar]) -> copy of B\n\nReturn B right justified in a string of length width. Padding is\ndone using the specified fill character (default is a space)"},
rpartition:{$meth:g(!0),$flags:{OneArg:!0},$textsig:"($self, sep, /)",$doc:"Partition the bytes into three parts using the given separator.\n\nThis will search for the separator sep in the bytes, starting at the end. If\nthe separator is found, returns a 3-tuple containing the part before the\nseparator, the separator itself, and the part after it.\n\nIf the separator is not found, returns a 3-tuple containing two empty bytes\nobjects and the original bytes object."},rsplit:{$meth:function(a,b){({sep:a,
maxsplit:b}=this.get$splitArgs(a,b));const c=[];let d=0,e=this.v.length;if(null!==a){for(;0<=e&&d<b;){const b=this.find$subright(a,0,e);if(-1===b)break;c.push(new Sk.builtin.bytes(this.v.subarray(b+a.length,e)));e=b;d++}c.push(new Sk.builtin.bytes(this.v.subarray(0,e)))}else{for(e--;d<b;){for(;p(this.v[e]);)e--;if(0>e)break;a=e+1;for(e--;0<=e&&!p(this.v[e]);)e--;c.push(new Sk.builtin.bytes(this.v.subarray(e+1,a)));d++}if(0<=e){for(;p(this.v[e]);)e--;0<=e&&c.push(new Sk.builtin.bytes(this.v.subarray(0,
e+1)))}}return new Sk.builtin.list(c.reverse())},$flags:{NamedArgs:["sep","maxsplit"],Defaults:[Sk.builtin.none.none$,-1]},$textsig:"($self, /, sep=None, maxsplit=-1)",$doc:"Return a list of the sections in the bytes, using sep as the delimiter.\n\n  sep\n    The delimiter according which to split the bytes.\n    None (the default value) means split on ASCII whitespace characters\n    (space, tab, return, newline, formfeed, vertical tab).\n  maxsplit\n    Maximum number of splits to do.\n    -1 (the default value) means no limit.\n\nSplitting is done starting at the end of the bytes and working to the front."},
rstrip:{$meth:n(!1,!0),$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, bytes=None, /)",$doc:"Strip trailing bytes contained in the argument.\n\nIf the argument is omitted or None, strip trailing ASCII whitespace."},split:{$meth:function(a,b){({sep:a,maxsplit:b}=this.get$splitArgs(a,b));const c=[],d=this.v.length;let e=0,f=0;if(null!==a){for(;f<d&&e<b;){const b=this.find$subleft(a,f,d);if(-1===b)break;c.push(new Sk.builtin.bytes(this.v.subarray(f,b)));f=b+a.length;e++}c.push(new Sk.builtin.bytes(this.v.subarray(f,
d)))}else{for(;e<b;){for(;p(this.v[f]);)f++;if(f===d)break;a=f;for(f++;f<d&&!p(this.v[f]);)f++;c.push(new Sk.builtin.bytes(this.v.subarray(a,f)));e++}if(f<d){for(;p(this.v[f]);)f++;f<d&&c.push(new Sk.builtin.bytes(this.v.subarray(f,d)))}}return new Sk.builtin.list(c)},$flags:{NamedArgs:["sep","maxsplit"],Defaults:[Sk.builtin.none.none$,-1]},$textsig:"($self, /, sep=None, maxsplit=-1)",$doc:"Return a list of the sections in the bytes, using sep as the delimiter.\n\n  sep\n    The delimiter according which to split the bytes.\n    None (the default value) means split on ASCII whitespace characters\n    (space, tab, return, newline, formfeed, vertical tab).\n  maxsplit\n    Maximum number of splits to do.\n    -1 (the default value) means no limit."},
splitlines:{$meth(a){a=Sk.misceval.isTrue(a);const b=[];let c=0;let d=0;const e=this.v.length;for(;d<e;){var f=this.v[d];if(13===f){const e=10===this.v[d+1];f=a?e?d+2:d+1:d;b.push(new Sk.builtin.bytes(this.v.subarray(c,f)));d=c=e?d+2:d+1}else 10===f?(f=a?d+1:d,b.push(new Sk.builtin.bytes(this.v.subarray(c,f))),d=c=d+1):d++}c<e&&b.push(new Sk.builtin.bytes(this.v.subarray(c,e)));return new Sk.builtin.list(b)},$flags:{NamedArgs:["keepends"],Defaults:[!1]},$textsig:"($self, /, keepends=False)",$doc:"Return a list of the lines in the bytes, breaking at line boundaries.\n\nLine breaks are not included in the resulting list unless keepends is given and\ntrue."},
startswith:{$meth:h("startswith",(a,b)=>b.length<=a.length&&b.every((b,c)=>b===a[c])),$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:"B.startswith(prefix[, start[, end]]) -> bool\n\nReturn True if B starts with the specified prefix, False otherwise.\nWith optional start, test B beginning at that position.\nWith optional end, stop comparing B at that position.\nprefix can also be a tuple of bytes to try."},strip:{$meth:n(!0,!0),$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, bytes=None, /)",$doc:"Strip leading and trailing bytes contained in the argument.\n\nIf the argument is omitted or None, strip leading and trailing ASCII whitespace."},
swapcase:{$meth:E(a=>A(a)?a+32:w(a)?a-32:a),$flags:{NoArgs:!0},$textsig:null,$doc:"B.swapcase() -> copy of B\n\nReturn a copy of B with uppercase ASCII characters converted\nto lowercase ASCII and vice versa."},title:{$meth(){const a=this.v.length,b=new Uint8Array(a);let c=!1;for(let d=0;d<a;d++){const a=this.v[d];A(a)?(b[d]=c?a+32:a,c=!0):w(a)?(b[d]=c?a:a-32,c=!0):(b[d]=a,c=!1)}return new Sk.builtin.bytes(b)},$flags:{NoArgs:!0},$textsig:null,$doc:"B.title() -> copy of B\n\nReturn a titlecased version of B, i.e. ASCII words start with uppercase\ncharacters, all remaining cased characters have lowercase."},
upper:{$meth:E(a=>w(a)?a-32:a),$flags:{NoArgs:!0},$textsig:null,$doc:"B.upper() -> copy of B\n\nReturn a copy of B with all ASCII characters converted to uppercase."},zfill:{$meth(a){a=Sk.misceval.asIndexSized(a,Sk.builtin.IndexError);const b=a-this.v.length;if(0>=b)return new Sk.builtin.bytes(this.v);const c=new Uint8Array(a);let d=0,e;if(43===this.v[0]||45===this.v[0])c[0]=this.v[0],d++;c.fill(48,d,d+b);e=d;for(d+=b;d<a;d++,e++)c[d]=this.v[e];return new Sk.builtin.bytes(c)},$flags:{OneArg:!0},$textsig:null,
$doc:"B.zfill(width) -> copy of B\n\nPad a numeric string B with zeros on the left, to fill a field\nof the specified width.  B is never truncated."}},classmethods:{fromhex:{$meth:function(a){function b(b){for(let c=f;c<b;c+=2){let b=a.substr(c,2);if(!d.test(b))throw new Sk.builtin.ValueError("non-hexadecimal number found in fromhex() arg at position "+(c+1));e.push(parseInt(b,16))}}if(!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("fromhex() argument must be str, not "+Sk.abstr.typeName(a));
a=a.$jsstr();const c=/\s+/g,d=/^[abcdefABCDEF0123456789]{2}$/,e=[];let f=0,g;for(;null!==(g=c.exec(a));)b(g.index),f=c.lastIndex;b(a.length);return new this(e)},$flags:{OneArg:!0},$textsig:"($type, string, /)",$doc:"Create a bytes object from a string of hexadecimal numbers.\n\nSpaces between two numbers are accepted.\nExample: bytes.fromhex('B9 01EF') -> b'\\\\xb9\\\\x01\\\\xef'."}}});var N=Sk.abstr.buildIteratorClass("bytes_iterator",{constructor:function(a){this.$index=0;this.$seq=a.v},iternext(){const a=
this.$seq[this.$index++];if(void 0!==a)return new Sk.builtin.int_(a)},methods:{__length_hint__:Sk.generic.iterLengthHintWithArrayMethodDef},flags:{sk$acceptable_as_base_class:!1}});Sk.exportSymbol("Sk.builtin.bytes",Sk.builtin.bytes)},function(m,q,a){(function(a){(function(a){function b(){}function c(){}var l=String.fromCharCode,h={}.toString,d=h.call(a.SharedArrayBuffer),g=h(),n=a.Uint8Array,k=n||Array,p=n?ArrayBuffer:k,w=p.isView||function(a){return a&&"length"in a},A=h.call(p.prototype);p=c.prototype;
var t=a.TextEncoder,m=new (n?Uint16Array:k)(32);b.prototype.decode=function(a){if(!w(a)){var b=h.call(a);if(b!==A&&b!==d&&b!==g)throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");a=n?new k(a):a||[]}for(var c=b="",e=0,f=a.length|0,p=f-32|0,B,t,y=0,q=0,O,S=0,V=-1;e<f;){for(B=e<=p?32:f-e|0;S<B;e=e+1|0,S=S+1|0){t=a[e]&255;switch(t>>4){case 15:O=a[e=e+1|0]&255;if(2!==O>>6||247<t){e=e-1|0;break}y=(t&7)<<6|O&63;q=5;t=256;case 14:O=
a[e=e+1|0]&255,y<<=6,y|=(t&15)<<6|O&63,q=2===O>>6?q+4|0:24,t=t+256&768;case 13:case 12:O=a[e=e+1|0]&255,y<<=6,y|=(t&31)<<6|O&63,q=q+7|0,e<f&&2===O>>6&&y>>q&&1114112>y?(t=y,y=y-65536|0,0<=y&&(V=(y>>10)+55296|0,t=(y&1023)+56320|0,31>S?(m[S]=V,S=S+1|0,V=-1):(O=V,V=t,t=O))):(t>>=8,e=e-t-1|0,t=65533),y=q=0,B=e<=p?32:f-e|0;default:m[S]=t;continue;case 11:case 10:case 9:case 8:}m[S]=65533}c+=l(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15],m[16],m[17],m[18],m[19],m[20],
m[21],m[22],m[23],m[24],m[25],m[26],m[27],m[28],m[29],m[30],m[31]);32>S&&(c=c.slice(0,S-32|0));if(e<f){if(m[0]=V,S=~V>>>31,V=-1,c.length<b.length)continue}else-1!==V&&(c+=l(V));b+=c;c=""}return b};p.encode=function(a){a=void 0===a?"":""+a;var b=a.length|0,c=new k((b<<1)+8|0),d,e=0,f=!n;for(d=0;d<b;d=d+1|0,e=e+1|0){var g=a.charCodeAt(d)|0;if(127>=g)c[e]=g;else{if(2047>=g)c[e]=192|g>>6;else{a:{if(55296<=g)if(56319>=g){var h=a.charCodeAt(d=d+1|0)|0;if(56320<=h&&57343>=h){g=(g<<10)+h-56613888|0;if(65535<
g){c[e]=240|g>>18;c[e=e+1|0]=128|g>>12&63;c[e=e+1|0]=128|g>>6&63;c[e=e+1|0]=128|g&63;continue}break a}g=65533}else 57343>=g&&(g=65533);!f&&d<<1<e&&d<<1<(e-7|0)&&(f=!0,h=new k(3*b),h.set(c),c=h)}c[e]=224|g>>12;c[e=e+1|0]=128|g>>6&63}c[e=e+1|0]=128|g&63}}return n?c.subarray(0,e):c.slice(0,e)};t||(a.TextDecoder=b,a.TextEncoder=c)})("undefined"==typeof a?"undefined"==typeof self?this:self:a)}).call(this,a(0))},function(m,q){Sk.builtin.tuple=Sk.abstr.buildNativeClass("tuple",{constructor:function(a){void 0===
a?a=[]:Array.isArray(a)||(a=Sk.misceval.arrayFromIterable(a));Sk.asserts.assert(this instanceof Sk.builtin.tuple,"bad call to tuple, use 'new' with an Array of python objects");this.v=a;this.in$repr=!1},slots:{tp$getattr:Sk.generic.getAttr,tp$as_sequence_or_mapping:!0,tp$doc:"Built-in immutable sequence.\n\nIf no argument is given, the constructor returns an empty tuple.\nIf iterable is specified the tuple is initialized from iterable's items.\n\nIf the argument is a tuple, the return value is the same object.",
$r(){if(this.in$repr)return new Sk.builtin.str("(...)");this.in$repr=!0;let a=this.v.map(a=>Sk.misceval.objectRepr(a));this.in$repr=!1;a=a.join(", ");1===this.v.length&&(a+=",");return new Sk.builtin.str("("+a+")")},tp$new(a,b){if(this!==Sk.builtin.tuple.prototype)return this.$subtype_new(a,b);Sk.abstr.checkNoKwargs("tuple",b);Sk.abstr.checkArgsLen("tuple",a,0,1);a=a[0];return void 0===a?new Sk.builtin.tuple([]):a.constructor===Sk.builtin.tuple?a:Sk.misceval.chain(Sk.misceval.arrayFromIterable(a,
!0),a=>new Sk.builtin.tuple(a))},tp$hash(){let a,b=3430008,e=1000003;const f=this.v.length;for(let c=0;c<f;++c){a=Sk.abstr.objectHash(this.v[c]);if(-1===a)return-1;b=(b^a)*e;e+=82520+f+f}b+=97531;-1===b&&(b=-2);return b|0},tp$richcompare:Sk.generic.seqCompare,tp$iter(){return new a(this)},mp$subscript(a){if(Sk.misceval.isIndex(a)){a=Sk.misceval.asIndexSized(a);0>a&&(a=this.v.length+a);if(0>a||a>=this.v.length)throw new Sk.builtin.IndexError("tuple index out of range");return this.v[a]}if(a instanceof
Sk.builtin.slice){const b=[];a.sssiter$(this.v.length,a=>{b.push(this.v[a])});return new Sk.builtin.tuple(b)}throw new Sk.builtin.TypeError("tuple indices must be integers or slices, not "+Sk.abstr.typeName(a));},sq$length(){return this.v.length},sq$repeat(a){a=Sk.misceval.asIndexSized(a,Sk.builtin.OverflowError);if(1===a&&this.constructor===Sk.builtin.tuple)return this;const b=[];for(let c=0;c<a;c++)for(let a=0;a<this.v.length;a++)b.push(this.v[a]);return new Sk.builtin.tuple(b)},sq$concat(a){if(!(a instanceof
Sk.builtin.tuple))throw new Sk.builtin.TypeError("can only concatenate tuple (not '"+Sk.abstr.typeName(a)+"') to tuple");return new Sk.builtin.tuple(this.v.concat(a.v))},sq$contains(a){for(let b=this.tp$iter(),c=b.tp$iternext();void 0!==c;c=b.tp$iternext())if(c===a||Sk.misceval.richCompareBool(c,a,"Eq"))return!0;return!1}},proto:{$subtype_new(a,b){b=new this.constructor;a=Sk.builtin.tuple.prototype.tp$new(a);b.v=a.v;return b},sk$asarray(){return this.v.slice(0)}},methods:{__getnewargs__:{$meth(){return new Sk.builtin.tuple(this.v.slice(0))},
$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:null},index:{$meth(a,b,e){if(void 0!==b&&!Sk.misceval.isIndex(b)||void 0!==e&&!Sk.misceval.isIndex(e))throw new Sk.builtin.TypeError("slice indices must be integers or have an __index__ method");({start:b,end:e}=Sk.builtin.slice.startEnd$wrt(this,b,e));const c=this.v;for(;b<e;b++)if(c[b]===a||Sk.misceval.richCompareBool(c[b],a,"Eq"))return new Sk.builtin.int_(b);throw new Sk.builtin.ValueError("tuple.index(x): x not in tuple");},$flags:{MinArgs:1,MaxArgs:3},
$textsig:"($self, value, start=0, stop=sys.maxsize, /)",$doc:"Return first index of value.\n\nRaises ValueError if the value is not present."},count:{$meth(a){const b=this.v.length,c=this.v;let f=0;for(let e=0;e<b;++e)if(c[e]===a||Sk.misceval.richCompareBool(c[e],a,"Eq"))f+=1;return new Sk.builtin.int_(f)},$flags:{OneArg:!0},$textsig:"($self, value, /)",$doc:"Return number of occurrences of value."}}});Sk.exportSymbol("Sk.builtin.tuple",Sk.builtin.tuple);var a=Sk.abstr.buildIteratorClass("tuple_iterator",
{constructor:function(a){this.$index=0;this.$seq=a.sk$asarray()},iternext:Sk.generic.iterNextWithArray,methods:{__length_hint__:Sk.generic.iterLengthHintWithArrayMethodDef},flags:{sk$acceptable_as_base_class:!1}})},function(m,q){function a(a){let b=a.$savedKeyHash;return void 0!==b?b:b=Sk.abstr.objectHash(a)}function c(a){return new Sk.builtin.set(Sk.misceval.arrayFromIterable(a))}function b(a,b){for(let c=Sk.abstr.iter(a),d=c.tp$iternext();void 0!==d;d=c.tp$iternext())if(!Sk.abstr.sequenceContains(b,
d))return!1;return!0}function e(a,b,d){const e={constructor:function(a){if(1!==arguments.length)throw new Sk.builtin.TypeError("cannot create '"+Sk.abstr.typeName(this)+"' instances");this.dict=a;this.in$repr=!1}};e.slots=Object.assign(b,h);e.methods={isdisjoint:{$meth(a){const b=c(this);return b.isdisjoint.$meth.call(b,a)},$flags:{OneArg:!0},$textsig:null,$doc:"Return True if the view and the given iterable have a null intersection."},__reversed__:{$meth:d,$flags:{NoArgs:!0},$textsig:null,$doc:"Return a reverse iterator over the dict keys."}};
e.flags={sk$acceptable_as_base:!1};"dict_values"===a&&(delete e.slots.tp$as_number,delete e.slots.tp$richcompare);return Sk.abstr.buildNativeClass(a,e)}function f(a,b,c){return Sk.abstr.buildIteratorClass(a,{constructor:function(a){this.$index=0;this.$orig=a;this.tp$iternext=()=>{this.$seq=a.$items();this.$version=a.$version;c&&(this.$seq=this.$seq.reverse());this.tp$iternext=this.constructor.prototype.tp$iternext;return this.tp$iternext()}},iternext:b,methods:{__length_hint__:Sk.generic.iterLengthHintWithArrayMethodDef},
flags:{sk$acceptable_as_base_class:!1},proto:{next$item:l}})}function l(){if(this.$version!==this.$orig.$version){if(this.$len!==this.$orig.get$size())throw new Sk.builtin.RuntimeError("dict changed size during iteration");throw new Sk.builtin.RuntimeError("dictionary keys changed during iteration");}return this.$seq[this.$index++]}Sk.builtin.dict=Sk.abstr.buildNativeClass("dict",{constructor:function(a){void 0===a&&(a=[]);Sk.asserts.assert(Array.isArray(a)&&0===a.length%2&&this instanceof Sk.builtin.dict,
"bad call to dict constructor");this.size=0;this.entries=Object.create(null);this.buckets={};for(let b=0;b<a.length;b+=2)this.set$item(a[b],a[b+1]);this.in$repr=!1;this.$version=0},slots:{tp$getattr:Sk.generic.getAttr,tp$as_sequence_or_mapping:!0,tp$as_number:!0,tp$hash:Sk.builtin.none.none$,tp$doc:"dict() -> new empty dictionary\ndict(mapping) -> new dictionary initialized from a mapping object's\n    (key, value) pairs\ndict(iterable) -> new dictionary initialized as if via:\n    d = {}\n    for k, v in iterable:\n        d[k] = v\ndict(**kwargs) -> new dictionary initialized with the name=value pairs\n    in the keyword argument list.  For example:  dict(one=1, two=2)",
$r(){if(this.in$repr)return new Sk.builtin.str("{...}");this.in$repr=!0;const a=this.$items().map(([a,b])=>Sk.misceval.objectRepr(a)+": "+Sk.misceval.objectRepr(b));this.in$repr=!1;return new Sk.builtin.str("{"+a.join(", ")+"}")},tp$new:Sk.generic.new,tp$init(a,b){return this.update$common(a,b,"dict")},tp$iter(){return new k(this)},tp$richcompare(a,b){let c;if(!(a instanceof Sk.builtin.dict)||"Eq"!==b&&"NotEq"!==b)return Sk.builtin.NotImplemented.NotImplemented$;if(a===this)c=!0;else if(this.size!==
a.size)c=!1;else{let b;c=this.$items().every(([c,d])=>{b=a.mp$lookup(c);return void 0!==b&&(b===d||Sk.misceval.richCompareBool(d,b,"Eq"))})}return"Eq"===b?c:!c},nb$or(a){if(!(a instanceof Sk.builtin.dict))return Sk.builtin.NotImplemented.NotImplemented$;const b=this.dict$copy();b.dict$merge(a);return b},nb$reflected_or(a){if(!(a instanceof Sk.builtin.dict))return Sk.builtin.NotImplemented.NotImplemented$;a=a.dict$copy();a.dict$merge(this);return a},nb$inplace_or(a){return Sk.misceval.chain(this.update$onearg(a),
()=>this)},sq$length(){return this.get$size()},sq$contains(a){return void 0!==this.mp$lookup(a)},mp$subscript(a,b){var c=this.mp$lookup(a);if(void 0!==c)return c;c=Sk.abstr.lookupSpecial(this,Sk.builtin.str.$missing);if(void 0!==c)return a=Sk.misceval.callsimOrSuspendArray(c,[a]),b?a:Sk.misceval.retryOptionalSuspensionOrThrow(a);throw new Sk.builtin.KeyError(a);},mp$ass_subscript(a,b){if(void 0===b){if(void 0===this.pop$item(a))throw new Sk.builtin.KeyError(a);}else this.set$item(a,b)}},methods:{__reversed__:{$meth(){return new A(this)},
$flags:{NoArgs:!0},$textsig:null,$doc:"Return a reverse iterator over the dict keys."},get:{$meth(a,b){return this.mp$lookup(a)||b||Sk.builtin.none.none$},$flags:{MinArgs:1,MaxArgs:2},$textsig:"($self, key, default=None, /)",$doc:"Return the value for key if key is in the dictionary, else default."},setdefault:{$meth(b,c){let d;const e=a(b);d="string"===typeof e?this.entries[e]:this.get$bucket_item(b,e);if(void 0!==d)return d[1];c=c||Sk.builtin.none.none$;"string"===typeof e?this.entries[e]=[b,c]:
this.set$bucket_item(b,c,e);this.size++;this.$version++;return c},$flags:{MinArgs:1,MaxArgs:2},$textsig:"($self, key, default=None, /)",$doc:"Insert key with a value of default if key is not in the dictionary.\n\nReturn the value for key if key is in the dictionary, else default."},pop:{$meth(a,b){const c=this.pop$item(a);if(void 0!==c)return c[1];if(void 0!==b)return b;throw new Sk.builtin.KeyError(a);},$flags:{MinArgs:1,MaxArgs:2},$textsig:null,$doc:"D.pop(k[,d]) -> v, remove specified key and return the corresponding value.\nIf key is not found, d is returned if given, otherwise KeyError is raised"},
popitem:{$meth(){const a=this.get$size();if(0===a)throw new Sk.builtin.KeyError("popitem(): dictionary is empty");const [b,c]=this.$items()[a-1];this.pop$item(b);return new Sk.builtin.tuple([b,c])},$flags:{NoArgs:!0},$textsig:null,$doc:"D.popitem() -> (k, v), remove and return some (key, value) pair as a\n2-tuple; but raise KeyError if D is empty."},keys:{$meth(){return new d(this)},$flags:{NoArgs:!0},$textsig:null,$doc:"D.keys() -> a set-like object providing a view on D's keys"},items:{$meth(){return new n(this)},
$flags:{NoArgs:!0},$textsig:null,$doc:"D.items() -> a set-like object providing a view on D's items"},values:{$meth(){return new g(this)},$flags:{NoArgs:!0},$textsig:null,$doc:"D.values() -> an object providing a view on D's values"},update:{$meth(a,b){return Sk.misceval.chain(this.update$common(a,b,"update"),()=>Sk.builtin.none.none$)},$flags:{FastCall:!0},$textsig:null,$doc:"D.update([E, ]**F) -> None.  Update D from dict/iterable E and F.\nIf E is present and has a .keys() method, then does:  for k in E: D[k] = E[k]\nIf E is present and lacks a .keys() method, then does:  for k, v in E: D[k] = v\nIn either case, this is followed by: for k in F:  D[k] = F[k]"},
clear:{$meth(){this.size=0;this.$version++;this.entries=Object.create(null);this.buckets={}},$flags:{NoArgs:!0},$textsig:null,$doc:"D.clear() -> None.  Remove all items from D."},copy:{$meth(){return this.dict$copy()},$flags:{NoArgs:!0},$textsig:null,$doc:"D.copy() -> a shallow copy of D"}},classmethods:{fromkeys:{$meth:function(a,b){b=b||Sk.builtin.none.none$;let c=this===Sk.builtin.dict?new this:this.tp$call([],[]);return Sk.misceval.chain(c,d=>{c=d;return Sk.misceval.iterFor(Sk.abstr.iter(a),a=>
c.mp$ass_subscript(a,b,!0))},()=>c)},$flags:{MinArgs:1,MaxArgs:2},$textsig:"($type, iterable, value=None, /)",$doc:"Create a new dictionary with keys from iterable and values set to value."}},proto:{quick$lookup:function(a){a=this.entries[a.$savedKeyHash];if(void 0!==a)return a[1]},mp$lookup:function(b){const c=a(b);b="string"===typeof c?this.entries[c]:this.get$bucket_item(b,c);if(void 0!==b)return b[1]},get$size(){return this.size},sk$asarray(){return Object.values(this.entries).map(a=>a[0])},update$common:function(a,
b,c){Sk.abstr.checkArgsLen(c,a,0,1);a=a[0];let d;void 0!==a&&(d=this.update$onearg(a));return Sk.misceval.chain(d,()=>{if(b)for(let a=0;a<b.length;a+=2)this.set$item(new Sk.builtin.str(b[a]),b[a+1])})},update$onearg(a){return a instanceof Sk.builtin.dict||void 0!==Sk.abstr.lookupSpecial(a,Sk.builtin.str.$keys)?this.dict$merge(a):this.dict$merge_seq(a)},dict$copy(){const a=new Sk.builtin.dict([]);a.size=this.size;var b=Object.entries(this.entries);for(var c in b){var d=b[c][1];a.entries[b[c][0]]=[d[0],
d[1]]}for(let e in this.buckets)for(c=this.buckets[e],a.buckets[e]=b=[],d=0;d<c.length;d++)b.push(a.entries["#"+e+"_"+d]);return a},$items(){return Object.values(this.entries)},set$item:function(b,c){const d=a(b);let e;"string"===typeof d?(e=this.entries[d],void 0===e?(this.entries[d]=[b,c],this.size++,this.$version++):e[1]=c):(e=this.get$bucket_item(b,d),void 0===e?(this.set$bucket_item(b,c,d),this.size++,this.$version++):e[1]=c)},get$bucket_item:function(a,b){b=this.buckets[b];if(void 0!==b)for(let d=
0;d<b.length;d++){var c=b[d];if(void 0!==c&&(c[0]===a||Sk.misceval.richCompareBool(a,c[0],"Eq")))return c}},pop$bucket_item:function(a,b){const c=this.buckets[b];let d;if(void 0!==c)for(let e=0;e<c.length;e++)if(d=c[e],void 0!==d&&(d[0]===a||Sk.misceval.richCompareBool(a,d[0],"Eq")))return delete this.entries["#"+b+"_"+e],c[e]=void 0,c.every(a=>void 0===a)&&delete this.buckets[b],d},set$bucket_item:function(a,b,c){let d=this.buckets[c];a=[a,b];void 0===d?(this.buckets[c]=[a],c="#"+c+"_0"):(b=d.indexOf(void 0),
-1!==b?(c="#"+c+"_"+b,d[b]=a):(c="#"+c+"_"+d.length,d.push(a)));this.entries[c]=a},pop$item:function(b){const c=a(b);"string"===typeof c?(b=this.entries[c],delete this.entries[c]):b=this.pop$bucket_item(b,c);if(void 0!==b)return this.size--,this.$version++,b},dict$merge:function(a){if(a.tp$iter===Sk.builtin.dict.prototype.tp$iter){var b=a.tp$iter();for(let c=b.tp$iternext();void 0!==c;c=b.tp$iternext()){const b=a.mp$subscript(c);this.set$item(c,b)}}else return b=Sk.abstr.lookupSpecial(a,Sk.builtin.str.$keys),
Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(b,[]),b=>Sk.misceval.iterFor(Sk.abstr.iter(b),b=>Sk.misceval.chain(a.mp$subscript(b,!0),a=>{this.set$item(b,a)})))},dict$merge_seq:function(a){let b=0;return Sk.misceval.iterFor(Sk.abstr.iter(a),a=>{if(!Sk.builtin.checkIterable(a))throw new Sk.builtin.TypeError("cannot convert dictionary update sequence element #"+b+" to a sequence");a=Sk.misceval.arrayFromIterable(a);if(2!==a.length)throw new Sk.builtin.ValueError("dictionary update sequence element #"+
b+" has length "+a.length+"; 2 is required");this.set$item(a[0],a[1]);b++})}}});const h={tp$getattr:Sk.generic.getAttr,tp$as_number:!0,tp$as_sequence_or_mapping:!0,tp$hash:Sk.builtin.none.none$,$r(){if(this.in$repr)return new Sk.builtin.str("...");this.in$repr=!0;let a=Sk.misceval.arrayFromIterable(this);a=a.map(a=>Sk.misceval.objectRepr(a));this.in$repr=!1;return new Sk.builtin.str(Sk.abstr.typeName(this)+"(["+a.join(", ")+"])")},tp$richcompare(a,c){if(!(Sk.builtin.checkAnySet(a)||a instanceof d||
a instanceof n))return Sk.builtin.NotImplemented.NotImplemented$;const e=this.sq$length(),f=a.sq$length();switch(c){case "NotEq":case "Eq":let d;this===a?d=!0:e===f&&(d=b(this,a));return"NotEq"===c?!d:d;case "Lt":return e<f&&b(this,a);case "LtE":return e<=f&&b(this,a);case "Gt":return e>f&&b(a,this);case "GtE":return e>=f&&b(a,this)}},nb$subtract(a){const b=c(this);return b.difference.$meth.call(b,a)},nb$and(a){const b=c(this);return b.intersection.$meth.call(b,a)},nb$or(a){const b=c(this);return b.union.$meth.call(b,
a)},nb$xor(a){const b=c(this);return b.symmetric_difference.$meth.call(b,a)},sq$length(){return this.dict.get$size()}};var d=e("dict_keys",{sq$contains(a){return void 0!==this.dict.mp$lookup(a)},tp$iter(){return new k(this.dict)}},function(){return new A(this.dict)}),g=e("dict_values",{tp$iter(){return new w(this.dict)}},function(){return new y(this.dict)}),n=e("dict_items",{sq$contains(a){if(!(a instanceof Sk.builtin.tuple&&2===a.sq$length()))return!1;var b=a.mp$subscript(new Sk.builtin.int_(0));
a=a.mp$subscript(new Sk.builtin.int_(1));b=this.dict.mp$lookup(b);return void 0===b?!1:b===a||Sk.misceval.richCompareBool(b,a,"Eq")},tp$iter(){return new p(this.dict)}},function(){return new t(this.dict)}),k=f("dict_keyiterator",function(){const a=this.next$item();return a&&a[0]}),p=f("dict_itemiterator",function(){const a=this.next$item();return a&&new Sk.builtin.tuple([a[0],a[1]])}),w=f("dict_valueiterator",function(){const a=this.next$item();return a&&a[1]}),A=f("dict_reversekeyiterator",k.prototype.tp$iternext,
!0),t=f("dict_reverseitemiterator",p.prototype.tp$iternext,!0),y=f("dict_reversevalueiterator",w.prototype.tp$iternext,!0);Sk.builtin.dict.py2$methods={has_key:{$name:"has_key",$flags:{OneArg:!0},$meth(a){return new Sk.builtin.bool(this.sq$contains(a))},$doc:"D.has_key(k) -> True if D has a key k, else False"},keys:{$name:"keys",$meth(){return new Sk.builtin.list(this.sk$asarray())},$flags:{NoArgs:!0},$textsig:null,$doc:"D.keys() -> a set-like object providing a view on D's keys"},items:{$name:"items",
$meth(){return new Sk.builtin.list(this.$items().map(([a,b])=>new Sk.builtin.tuple([a,b])))},$flags:{NoArgs:!0},$textsig:null,$doc:"D.items() -> a set-like object providing a view on D's items"},values:{$name:"values",$meth(){return new Sk.builtin.list(this.$items().map(([,a])=>a))},$flags:{NoArgs:!0},$textsig:null,$doc:"D.values() -> an object providing a view on D's values"}}},function(m,q){function a(a,b){Object.defineProperties(a,{entries:{get:()=>{const a=Object.create(null);Object.entries(b).forEach(([b,
c])=>{b=Sk.unfixReserved(b);b.includes("$")||(b=new Sk.builtin.str(b),a[b.$savedKeyHash]=[b,c])});return a},configurable:!0},size:{get:()=>Object.keys(b).map(a=>Sk.unfixReserved(a)).filter(a=>!a.includes("$")).length,configurable:!0}})}Sk.builtin.mappingproxy=Sk.abstr.buildNativeClass("mappingproxy",{constructor:function(c){Sk.asserts.assert(this instanceof Sk.builtin.mappingproxy,"bad call to mapping proxy, use 'new'");this.mapping=new Sk.builtin.dict([]);void 0!==c&&a(this.mapping,c)},slots:{tp$getattr:Sk.generic.getAttr,
tp$as_sequence_or_mapping:!0,tp$hash:Sk.builtin.none.none$,tp$new(a,b){Sk.abstr.checkNoKwargs("mappingproxy",b);Sk.abstr.checkOneArg("mappingproxy",a,b);a=a[0];if(!Sk.builtin.checkMapping(a))throw new Sk.builtin.TypeError("mappingproxy() argument must be a mapping, not "+Sk.abstr.typeName(a));b=new Sk.builtin.mappingproxy;b.mapping=a;return b},tp$richcompare(a,b){return Sk.misceval.richCompareBool(this.mapping,a,b)},tp$str(){return this.mapping.tp$str()},$r(){return new Sk.builtin.str("mappingproxy("+
Sk.misceval.objectRepr(this.mapping)+")")},mp$subscript(a,b){return this.mapping.mp$subscript(a,b)},sq$contains(a){return this.mapping.sq$contains(a)},sq$length(){return this.mapping.sq$length()},tp$iter(){return this.mapping.tp$iter()},tp$as_number:!0,nb$or(a){a instanceof Sk.builtin.mappingproxy&&(a=a.mapping);return Sk.abstr.numberBinOp(this.mapping,a,"BitOr")},nb$reflected_or(a){a instanceof Sk.builtin.mappingproxy&&(a=a.mapping);return Sk.abstr.numberBinOp(a,this.mapping,"BitOr")},nb$inplace_or(a){throw new Sk.builtin.TypeError("'|=' is not supported by "+
Sk.abstr.typeName(this)+"; use '|' instead");}},methods:{get:{$meth(a,b){return Sk.misceval.callsimArray(this.mapping.tp$getattr(this.str$get),a,b)},$flags:{FastCall:!0},$textsig:null,$doc:"D.get(k[,d]) -> D[k] if k in D, else d.  d defaults to None."},keys:{$meth(){return Sk.misceval.callsimArray(this.mapping.tp$getattr(this.str$keys),[])},$flags:{NoArgs:!0},$textsig:null,$doc:"D.keys() -> a set-like object providing a view on D's keys"},items:{$meth(){return Sk.misceval.callsimArray(this.mapping.tp$getattr(this.str$items),
[])},$flags:{NoArgs:!0},$textsig:null,$doc:"D.items() -> a set-like object providing a view on D's items"},values:{$meth(){return Sk.misceval.callsimArray(this.mapping.tp$getattr(this.str$values),[])},$flags:{NoArgs:!0},$textsig:null,$doc:"D.values() -> a set-like object providing a view on D's values"},copy:{$meth(){return Sk.misceval.callsimArray(this.mapping.tp$getattr(this.str$copy),[])},$flags:{NoArgs:!0},$textsig:null,$doc:"D.copy() -> a shallow copy of D"}},proto:{str$get:new Sk.builtin.str("get"),
str$copy:new Sk.builtin.str("copy"),str$keys:new Sk.builtin.str("keys"),str$items:new Sk.builtin.str("items"),str$values:new Sk.builtin.str("values"),mp$lookup(a){return this.mapping.mp$lookup(a)}},flags:{sk$acceptable_as_base_class:!1}})},function(m,q){Sk.builtin.property=Sk.abstr.buildNativeClass("property",{constructor:function(a,c,b,e){this.prop$get=a||Sk.builtin.none.none$;this.prop$set=c||Sk.builtin.none.none$;this.prop$del=b||Sk.builtin.none.none$;this.prop$doc=e||a&&a.$doc||Sk.builtin.none.none$},
slots:{tp$getattr:Sk.generic.getAttr,tp$new:Sk.generic.new,tp$init(a,c){a=Sk.abstr.copyKeywordsToNamedArgs("property",["fget","fset","fdel","doc"],a,c,Array(4).fill(Sk.builtin.none.none$));this.prop$get=a[0];this.prop$set=a[1];this.prop$del=a[2];Sk.builtin.checkNone(a[3])?Sk.builtin.checkNone(a[0])||(this.prop$doc=a[0].$doc||a[3]):this.prop$doc=a[3]},tp$doc:"Property attribute.\n\n  fget\n    function to be used for getting an attribute value\n  fset\n    function to be used for setting an attribute value\n  fdel\n    function to be used for del'ing an attribute\n  doc\n    docstring\n\nTypical use is to define a managed attribute x:\n\nclass C(object):\n    def getx(self): return self._x\n    def setx(self, value): self._x = value\n    def delx(self): del self._x\n    x = property(getx, setx, delx, 'I'm the 'x' property.')\n\nDecorators make defining new properties or modifying existing ones easy:\n\nclass C(object):\n    @property\n    def x(self):\n        'I am the 'x' property.'\n        return self._x\n    @x.setter\n    def x(self, value):\n        self._x = value\n    @x.deleter\n    def x(self):\n        del self._x",
tp$descr_get(a,c){if(null===a)return this;if(void 0===this.prop$get)throw new Sk.builtin.AttributeError("unreadable attribute");return Sk.misceval.callsimOrSuspendArray(this.prop$get,[a])},tp$descr_set(a,c){let b;b=null==c?this.prop$del:this.prop$set;if(Sk.builtin.checkNone(b))throw new Sk.builtin.AttributeError("can't "+(null==c?"delete":"set")+" attribute");if(!b.tp$call)throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(b)+"' is not callable");return null==c?b.tp$call([a]):b.tp$call([a,c])}},
methods:{getter:{$meth(a){return new Sk.builtin.property(a,this.prop$set,this.prop$del,this.prop$doc)},$flags:{OneArg:!0}},setter:{$meth(a){return new Sk.builtin.property(this.prop$get,a,this.prop$del,this.prop$doc)},$flags:{OneArg:!0}},deleter:{$meth(a){return new Sk.builtin.property(this.prop$get,this.prop$set,a,this.prop$doc)},$flags:{OneArg:!0}}},getsets:{fget:{$get(){return this.prop$get}},fset:{$get(){return this.prop$set}},fdel:{$get(){return this.prop$del}},__doc__:{$get(){return this.prop$doc},
$set(a){this.prop$doc=a=a||Sk.builtin.none.none$}}}});Sk.builtin.classmethod=Sk.abstr.buildNativeClass("classmethod",{constructor:function(a){this.cm$callable=a;this.$d=new Sk.builtin.dict},slots:{tp$getattr:Sk.generic.getAttr,tp$new:Sk.generic.new,tp$init(a,c){Sk.abstr.checkNoKwargs("classmethod",c);Sk.abstr.checkArgsLen("classmethod",a,1,1);this.cm$callable=a[0]},tp$doc:"classmethod(function) -> method\n\nConvert a function to be a class method.\n\nA class method receives the class as implicit first argument,\njust like an instance method receives the instance.\nTo declare a class method, use this idiom:\n\n  class C:\n      @classmethod\n      def f(cls, arg1, arg2, ...):\n          ...\n\nIt can be called either on the class (e.g. C.f()) or on an instance\n(e.g. C().f()).  The instance is ignored except for its class.\nIf a class method is called for a derived class, the derived class\nobject is passed as the implied first argument.\n\nClass methods are different than C++ or Java static methods.\nIf you want those, see the staticmethod builtin.",
tp$descr_get(a,c){const b=this.cm$callable;if(void 0===b)throw new Sk.builtin.RuntimeError("uninitialized classmethod object");void 0===c&&(c=a.ob$type);return(a=b.tp$descr_get)?a.call(b,c):new Sk.builtin.method(b,c)}},getsets:{__func__:{$get(){return this.cm$callable}},__dict__:Sk.generic.getSetDict}});Sk.builtin.staticmethod=Sk.abstr.buildNativeClass("staticmethod",{constructor:function(a){this.sm$callable=a;this.$d=new Sk.builtin.dict},slots:{tp$getattr:Sk.generic.getAttr,tp$new:Sk.generic.new,
tp$init(a,c){Sk.abstr.checkNoKwargs("staticmethod",c);Sk.abstr.checkArgsLen("staticmethod",a,1,1);this.sm$callable=a[0]},tp$doc:"staticmethod(function) -> method\n\nConvert a function to be a static method.\n\nA static method does not receive an implicit first argument.\nTo declare a static method, use this idiom:\n\n     class C:\n         @staticmethod\n         def f(arg1, arg2, ...):\n             ...\n\nIt can be called either on the class (e.g. C.f()) or on an instance\n(e.g. C().f()).  The instance is ignored except for its class.\n\nStatic methods in Python are similar to those found in Java or C++.\nFor a more advanced concept, see the classmethod builtin.",
tp$descr_get(a,c){if(void 0===this.sm$callable)throw new Sk.builtin.RuntimeError("uninitialized staticmethod object");return this.sm$callable}},getsets:{__func__:{$get(){return this.sm$callable}},__dict__:Sk.generic.getSetDict}})},function(m,q){function a(a,b){return function(c){if(c instanceof Sk.builtin.int_){let e=this.v;c=c.v;if("number"===typeof e&&"number"===typeof c){const b=a(e,c);if(d(b))return new Sk.builtin.int_(b)}e=n(e);c=n(c);return new Sk.builtin.int_(b(e,c))}return Sk.builtin.NotImplemented.NotImplemented$}}
function c(a,b){return function(c){if(c instanceof Sk.builtin.int_){let d=this.v;c=c.v;if("number"===typeof d&&"number"===typeof c)return a(d,c);d=n(d);c=n(c);return b(d,c)}return Sk.builtin.NotImplemented.NotImplemented$}}function b(a,b){return function(){const c=this.v;return"number"===typeof c?new Sk.builtin.int_(a(c)):new Sk.builtin.int_(b(c))}}function e(){return new Sk.builtin.int_(this.v)}function f(a,b){return function(c){if(c instanceof Sk.builtin.int_){let d=this.v;c=c.v;if(0===c)throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
if("number"===typeof d&&"number"===typeof c)return new Sk.builtin.int_(a(d,c));d=n(d);c=n(c);return new Sk.builtin.int_(JSBI.numberIfSafe(b(d,c)))}return Sk.builtin.NotImplemented.NotImplemented$}}function l(a,b){return function(c){if(c instanceof Sk.builtin.int_){let d=this.v;c=c.v;if(0===d)return new Sk.builtin.int_(this.v);if("number"===typeof c){if(0>c)throw new Sk.builtin.ValueError("negative shift count");if("number"===typeof d){const b=a(d,c);if(void 0!==b)return new Sk.builtin.int_(b)}c=JSBI.BigInt(c)}else if(JSBI.lessThan(JSBI.BigInt(0)))throw new Sk.builtin.ValueError("negative shift count");
d=n(d);return new Sk.builtin.int_(b(d,c))}return Sk.builtin.NotImplemented.NotImplemented$}}function h(a,b){return function(c){if(c instanceof Sk.builtin.int_){var d=this.v;c=c.v;if("number"===typeof d&&"number"===typeof c)return d=a(d,c),0>d&&(d+=4294967296),new Sk.builtin.int_(d);d=n(d);c=n(c);return new Sk.builtin.int_(JSBI.numberIfSafe(b(d,c)))}return Sk.builtin.NotImplemented.NotImplemented$}}function d(a){return a<=Number.MAX_SAFE_INTEGER&&a>=-Number.MAX_SAFE_INTEGER}function g(a){return a<=
Number.MAX_SAFE_INTEGER&&a>=-Number.MAX_SAFE_INTEGER?+a:JSBI.BigInt(a)}function n(a){return"number"===typeof a?JSBI.BigInt(a):a}Sk.builtin.int_=Sk.abstr.buildNativeClass("int",{constructor:function(a){Sk.asserts.assert(this instanceof Sk.builtin.int_,"bad call to int use 'new'");let b;if("number"===typeof a||JSBI.__isBigInt(a))b=a;else if(void 0===a)b=0;else if("string"===typeof a)b=g(a);else{if(a.nb$int)return a.nb$int();Sk.asserts.fail("bad argument to int constructor")}this.v=b},slots:{tp$as_number:!0,
tp$doc:"int(x=0) -> integer\nint(x, base=10) -> integer\n\nConvert a number or string to an integer, or return 0 if no arguments\nare given.  If x is a number, return x.__int__().  For floating point\nnumbers, this truncates towards zero.\n\nIf x is not a number or if base is given, then x must be a string,\nbytes, or bytearray instance representing an integer literal in the\ngiven base.  The literal can be preceded by '+' or '-' and be surrounded\nby whitespace.  The base defaults to 10.  Valid bases are 0 and 2-36.\nBase 0 means to interpret the base from the string as an integer literal.\n>>> int('0b100', base=0)\n4",
$r(){return new Sk.builtin.str(this.v.toString())},tp$hash(){const a=this.v;return"number"===typeof a?a:JSBI.toNumber(JSBI.remainder(a,JSBI.__MAX_SAFE))},tp$new(a,b){1===a.length+(b?b.length:0)?(b=a[0],a=Sk.builtin.none.none$):(a=Sk.abstr.copyKeywordsToNamedArgs("int",[null,"base"],a,b,[new Sk.builtin.int_(0),Sk.builtin.none.none$]),b=a[0],a=a[1]);a=a!==Sk.builtin.none.none$?Sk.misceval.asIndexOrThrow(a):null;if(b instanceof Sk.builtin.str)null===a&&(a=10),b=new Sk.builtin.int_(Sk.str2number(b.v,
a));else{if(null!==a)throw new Sk.builtin.TypeError("int() can't convert non-string with explicit base");if(b.nb$int)b=b.nb$int();else if(a=Sk.abstr.lookupSpecial(b,Sk.builtin.str.$trunc)){a=Sk.misceval.callsimArray(a,[]);if(!Sk.builtin.checkInt(a))throw new Sk.builtin.TypeError(Sk.builtin.str.$trunc.$jsstr()+" returned non-Integral (type "+Sk.abstr.typeName(b)+")");b=new Sk.builtin.int_(a.v)}else throw new Sk.builtin.TypeError("int() argument must be a string, a bytes-like object or a number, not '"+
Sk.abstr.typeName(b)+"'");}if(this===Sk.builtin.int_.prototype)return b;a=new this.constructor;a.v=b.v;return a},tp$getattr:Sk.generic.getAttr,ob$eq:c((a,b)=>a==b,JSBI.equal),ob$ne:c((a,b)=>a!=b,JSBI.notEqual),ob$gt:c((a,b)=>a>b,JSBI.greaterThan),ob$ge:c((a,b)=>a>=b,JSBI.greaterThanOrEqual),ob$lt:c((a,b)=>a<b,JSBI.lessThan),ob$le:c((a,b)=>a<=b,JSBI.lessThanOrEqual),nb$int:e,nb$index(){return this.v},nb$float(){var a=this.v;if("number"===typeof a)return new Sk.builtin.float_(a);a=parseFloat(JSBI.toNumber(a));
if(Infinity===a||-Infinity===a)throw new Sk.builtin.OverflowError("int too large to convert to float");return new Sk.builtin.float_(a)},nb$isnegative(){const a=this.v;return"number"===typeof a?0>a:JSBI.lessThan(a,JSBI.__ZERO)},nb$ispositive(){const a=this.v;return"number"===typeof a?0>a:JSBI.greaterThanOrEqual(a,JSBI.__ZERO)},nb$bool(){return 0!==this.v},nb$positive:e,nb$negative:b(a=>-a,JSBI.unaryMinus),nb$add:a((a,b)=>a+b,(a,b)=>JSBI.numberIfSafe(JSBI.add(a,b))),nb$subtract:a((a,b)=>a-b,(a,b)=>
JSBI.numberIfSafe(JSBI.subtract(a,b))),nb$multiply:a((a,b)=>a*b,JSBI.multiply),nb$divide(a){return Sk.__future__.division?this.nb$float().nb$divide(a):this.nb$floor_divide(a)},nb$floor_divide:f((a,b)=>Math.floor(a/b),JSBI.divide),nb$remainder:f((a,b)=>a-Math.floor(a/b)*b,JSBI.remainder),nb$divmod(a){const b=this.nb$floor_divide(a);a=this.nb$remainder(a);return b===Sk.builtin.NotImplemented.NotImplemented$||a===Sk.builtin.NotImplemented.NotImplemented$?Sk.builtin.NotImplemented.NotImplemented$:new Sk.builtin.tuple([b,
a])},nb$and:h((a,b)=>a&b,JSBI.bitwiseAnd),nb$or:h((a,b)=>a|b,JSBI.bitwiseOr),nb$xor:h((a,b)=>a^b,JSBI.bitwiseXor),nb$abs:b(Math.abs,a=>JSBI.lessThan(a,JSBI.__ZERO)?JSBI.unaryMinus(a):a),nb$lshift:l((a,b)=>{if(53>b&&(a=2*a*p[b],d(a)))return a},JSBI.leftShift),nb$rshift:l((a,b)=>{const c=a>>b;return 0<a&&0>c?c&Math.pow(2,32-b)-1:c},(a,b)=>JSBI.numberIfSafe(JSBI.signedRightShift(a,b))),nb$invert:b(a=>~a,JSBI.bitwiseNot),nb$power(a,b){let c;void 0!==b&&Sk.builtin.checkNone(b)&&(b=void 0);if(a instanceof
Sk.builtin.int_&&(void 0===b||b instanceof Sk.builtin.int_)){let e=this.v,f=a.v;if("number"===typeof e&&"number"===typeof f){const a=Math.pow(e,f);if(d(a)&&(c=0>f?new Sk.builtin.float_(a):new Sk.builtin.int_(a),void 0===b))return c}if(void 0!==b){if(a.nb$isnegative())throw new Sk.builtin.ValueError("pow() 2nd argument cannot be negative when 3rd argument specified");if(0===b.v)throw new Sk.builtin.ValueError("pow() 3rd argument cannot be 0");return void 0!==c?c.nb$remainder(b):new Sk.builtin.int_(JSBI.powermod(n(e),
n(f),n(b.v)))}return new Sk.builtin.int_(JSBI.exponentiate(n(e),n(f)))}return Sk.builtin.NotImplemented.NotImplemented$},nb$long(){return new Sk.builtin.lng(this.v)}},getsets:{real:{$get:e,$doc:"the real part of a complex number"},imag:{$get(){return new Sk.builtin.int_(0)},$doc:"the imaginary part of a complex number"}},methods:{conjugate:{$meth:e,$flags:{NoArgs:!0},$textsig:null,$doc:"Returns self, the complex conjugate of any int."},bit_length:{$meth(){return new Sk.builtin.int_(Sk.builtin.bin(this).sq$length()-
2)},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Number of bits necessary to represent self in binary.\n\n>>> bin(37)\n'0b100101'\n>>> (37).bit_length()\n6"},to_bytes:{$meth(){throw new Sk.builtin.NotImplementedError("Not yet implemented in Skulpt");},$flags:{FastCall:!0},$textsig:"($self, /, length, byteorder, *, signed=False)",$doc:"Return an array of bytes representing an integer.\n\n  length\n    Length of bytes object to use.  An OverflowError is raised if the\n    integer is not representable with the given number of bytes.\n  byteorder\n    The byte order used to represent the integer.  If byteorder is 'big',\n    the most significant byte is at the beginning of the byte array.  If\n    byteorder is 'little', the most significant byte is at the end of the\n    byte array.  To request the native byte order of the host system, use\n    `sys.byteorder' as the byte order value.\n  signed\n    Determines whether two's complement is used to represent the integer.\n    If signed is False and a negative integer is given, an OverflowError\n    is raised."},
__trunc__:{$meth:e,$flags:{NoArgs:!0},$textsig:null,$doc:"Truncating an Integral returns itself."},__floor__:{$meth:e,$flags:{NoArgs:!0},$textsig:null,$doc:"Flooring an Integral returns itself."},__ceil__:{$meth:e,$flags:{NoArgs:!0},$textsig:null,$doc:"Ceiling of an Integral returns itself."},__round__:{$meth(a){return this.round$(a)},$flags:{MinArgs:0,MaxArgs:1},$textsig:null,$doc:"Rounding an Integral returns itself.\nRounding with an ndigits argument also returns an integer."},__getnewargs__:{$meth(){return new Sk.builtin.tuple([new Sk.builtin.int_(this.v)])},
$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:Sk.builtin.none.none$},__format__:{$meth:Sk.formatting.mkNumber__format__(!1),$flags:{OneArg:!0},$textsig:"($self, format_spec, /)",$doc:Sk.builtin.none.none$}},proto:{str$(a,b){a=void 0===a||10===a?this.v.toString():this.v.toString(a);b||void 0===b||"-"===a[0]&&(a=a.substring(1));return a},round$(a){a=void 0===a?0:Sk.misceval.asIndexSized(a);var b=this.v,c=Math.pow(10,-a);if(0<a)return new Sk.builtin.int_(b);if("number"===typeof b&&Sk.__future__.bankers_rounding)return a=
b/c,b=Math.round(a),new Sk.builtin.int_((.5===(0<a?a:-a)%1?0===b%2?b:b-1:b)*c);if("number"===typeof b)return new Sk.builtin.int_(Math.round(b/c)*c);{c=JSBI.BigInt(10*c);a=JSBI.BigInt(10);b=JSBI.divide(b,c);const d=JSBI.divide(b,a),e=JSBI.subtract(b,JSBI.multiply(a,d));5>JSBI.toNumber(e)?b=JSBI.multiply(JSBI.multiply(d,a),c):JSBI.multiply(JSBI.multiply(JSBI.add(d,JSBI.BigInt(1),a),c));return new Sk.builtin.int_(b)}}}});Sk.exportSymbol("Sk.builtin.int_",Sk.builtin.int_);const k=/_(?=[^_])/g;Sk.str2number=
function(a,b){var c=a,e=!1,f;a=a.replace(/^\s+|\s+$/g,"");"-"===a.charAt(0)&&(e=!0,a=a.substring(1));"+"===a.charAt(0)&&(a=a.substring(1));if(null===b||void 0===b)b=10;if((2>b||36<b)&&0!==b)throw new Sk.builtin.ValueError("int() base must be >= 2 and <= 36");"string"===typeof b&&(b=Number(b));if("0x"===a.substring(0,2).toLowerCase())if(16===b||0===b)a=a.substring(2),b=16;else{if(34>b)throw new Sk.builtin.ValueError("invalid literal for int() with base "+b+": '"+c+"'");}else if("0b"===a.substring(0,
2).toLowerCase())if(2===b||0===b)a=a.substring(2),b=2;else{if(12>b)throw new Sk.builtin.ValueError("invalid literal for int() with base "+b+": '"+c+"'");}else if("0o"===a.substring(0,2).toLowerCase())if(8===b||0===b)a=a.substring(2),b=8;else{if(25>b)throw new Sk.builtin.ValueError("invalid literal for int() with base "+b+": '"+c+"'");}else if("0"===a.charAt(0)){if("0"===a)return 0;if(8===b||0===b)b=8}0===b&&(b=10);if(-1!==a.indexOf("_")){if(-1!==a.indexOf("__"))throw new Sk.builtin.ValueError("invalid literal for int() with base "+
b+": '"+c+"'");a=10!==b?a.replace(k,""):a.charAt(0)+a.substring(1).replace(k,"")}if(0===a.length)throw new Sk.builtin.ValueError("invalid literal for int() with base "+b+": '"+c+"'");for(f=0;f<a.length;f+=1){var g=a.charCodeAt(f);var h=b;48<=g&&57>=g?h=g-48:65<=g&&90>=g?h=g-65+10:97<=g&&122>=g&&(h=g-97+10);if(h>=b)throw new Sk.builtin.ValueError("invalid literal for int() with base "+b+": '"+c+"'");}e&&(a="-"+a);h=parseInt(a,b);if(d(h))return h;c=!1;"-"===a[0]&&(c=!0,a=a.substring(1));b=JSBI.BigInt(b);
e=JSBI.BigInt(1);f=JSBI.BigInt(0);for(g=a.length-1;0<=g;g--)h=a.charCodeAt(g),48<=h&&57>=h?h-=48:65<=h&&90>=h?h=h-65+10:97<=h&&122>=h&&(h=h-97+10),h=JSBI.multiply(JSBI.BigInt(h),e),f=JSBI.add(f,h),e=JSBI.multiply(e,b);c&&(f=JSBI.multiply(f,JSBI.BigInt(-1)));return a=f};Sk.builtin.int_.py2$methods={};Sk.longFromStr=function(a,b){if(Sk.__future__.python3)return new Sk.builtin.int_(g(a));a=Sk.str2number(a,b);return new Sk.builtin.lng(a)};Sk.exportSymbol("Sk.longFromStr",Sk.longFromStr);Sk.builtin.int_.withinThreshold=
d;Sk.builtin.int_.stringToNumberOrBig=g;const p=[.5,1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536,131072,262144,524288,1048576,2097152,4194304,8388608,16777216,33554432,67108864,134217728,268435456,536870912,1073741824,2147483648,4294967296,8589934592,17179869184,34359738368,68719476736,137438953472,274877906944,549755813888,1099511627776,2199023255552,4398046511104,8796093022208,17592186044416,35184372088832,70368744177664,0x800000000000,281474976710656,562949953421312,0x4000000000000,
0x8000000000000,4503599627370496,9007199254740992];Sk.builtin.lng=Sk.abstr.buildNativeClass("long",{base:Sk.builtin.int_,constructor:function(a){Sk.builtin.int_.call(this,a)},slots:{$r(){return new Sk.builtin.str(this.v.toString()+"L")},tp$as_number:!0,nb$negative(){return new Sk.builtin.lng(w.nb$negative.call(this).v)},nb$positive(){return new Sk.builtin.lng(w.nb$positive.call(this).v)}}});const w=Sk.builtin.int_.prototype},function(m,q){const a=Sk.builtin.int_.prototype;Sk.builtin.bool=Sk.abstr.buildNativeClass("bool",
{constructor:function(a){return Sk.misceval.isTrue(a)?Sk.builtin.bool.true$:Sk.builtin.bool.false$},base:Sk.builtin.int_,slots:{tp$doc:"bool(x) -> bool\n\nReturns True when the argument x is true, False otherwise.\nThe builtins True and False are the only two instances of the class bool.\nThe class bool is a subclass of the class int, and cannot be subclassed.",tp$new(a,b){Sk.abstr.checkNoKwargs("bool",b);Sk.abstr.checkArgsLen("bool",a,0,1);return new Sk.builtin.bool(a[0])},$r(){return this.v?this.str$True:
this.str$False},tp$as_number:!0,nb$and(c){return c.ob$type===Sk.builtin.bool?new Sk.builtin.bool(this.v&c.v):a.nb$and.call(this,c)},nb$or(c){return c.ob$type===Sk.builtin.bool?new Sk.builtin.bool(this.v|c.v):a.nb$or.call(this,c)},nb$xor(c){return c.ob$type===Sk.builtin.bool?new Sk.builtin.bool(this.v^c.v):a.nb$xor.call(this,c)}},flags:{sk$acceptable_as_base_class:!1},methods:{__format__:{$meth(){return this.$r()},$flags:{OneArg:!0}}},proto:{str$False:new Sk.builtin.str("False"),str$True:new Sk.builtin.str("True")}});
Sk.exportSymbol("Sk.builtin.bool",Sk.builtin.bool);Sk.builtin.bool.true$=Object.create(Sk.builtin.bool.prototype,{v:{value:1,enumerable:!0}});Sk.builtin.bool.false$=Object.create(Sk.builtin.bool.prototype,{v:{value:0,enumerable:!0}})},function(m,q){function a(){return new Sk.builtin.float_(this.v)}function c(a){return function(b){const c=this.v;b=b.v;if("number"!==typeof b)if(JSBI.__isBigInt(b)){if(b=parseFloat(JSBI.toNumber(b)),Infinity==b||-Infinity==b)throw new Sk.builtin.OverflowError("int too large to convert to float");
}else return Sk.builtin.NotImplemented.NotImplemented$;return a(c,b)}}function b(a){const b=c(a);return function(a,c){if(void 0!==c&&!Sk.builtin.checkNone(c))throw new Sk.builtin.TypeError("pow() 3rd argument not allowed unless all arguments are integers");return b.call(this,a)}}function e(a,b){if(0===b)throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");return Infinity===a?Infinity===b||-Infinity===a?new Sk.builtin.float_(NaN):0>b?new Sk.builtin.float_(-Infinity):new Sk.builtin.float_(Infinity):
-Infinity===a?Infinity===b||-Infinity===a?new Sk.builtin.float_(NaN):0>b?new Sk.builtin.float_(Infinity):new Sk.builtin.float_(-Infinity):new Sk.builtin.float_(a/b)}function f(a,b){if(Infinity===a||-Infinity===a)return new Sk.builtin.float_(NaN);if(0===b)throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");return Infinity===b?0>a?new Sk.builtin.float_(-1):new Sk.builtin.float_(0):-Infinity===b?0>a||0!==a?new Sk.builtin.float_(0):new Sk.builtin.float_(-1):new Sk.builtin.float_(Math.floor(a/
b))}function l(a,b){if(0===b)throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");if(0===a)return new Sk.builtin.float_(0);if(Infinity===b)return Infinity===a||-Infinity===this.v?new Sk.builtin.float_(NaN):0<a?new Sk.builtin.float_(a):new Sk.builtin.float_(Infinity);let c=a%b;0>a?0<b&&0>c&&(c+=b):0>b&&0!==c&&(c+=b);0===c&&(0>b?c=-0:-Infinity===Infinity/c&&(c=0));return new Sk.builtin.float_(c)}function h(a,b){if(0>a&&0!==b%1)throw new Sk.builtin.ValueError("negative number cannot be raised to a fractional power");
if(0===a&&0>b)throw new Sk.builtin.ZeroDivisionError("0.0 cannot be raised to a negative power");const c=Math.pow(a,b);if(Infinity===Math.abs(c)&&Infinity!==Math.abs(a)&&Infinity!==Math.abs(b))throw new Sk.builtin.OverflowError("Numerical result out of range");return new Sk.builtin.float_(c)}const d=Object.create(null,{Infinity:{value:314159},"-Infinity":{value:-314159},NaN:{value:0}});Sk.builtin.float_=Sk.abstr.buildNativeClass("float",{constructor:function(a){Sk.asserts.assert(this instanceof Sk.builtin.float_,
"bad call to float use 'new'");if("number"===typeof a)this.v=a;else if(void 0===a)this.v=0;else if("string"===typeof a)this.v=parseFloat(a);else{if(a.nb$float)return a.nb$float();Sk.asserts.fail("bad argument to float constructor")}},slots:{tp$gettattr:Sk.generic.getAttr,tp$as_number:!0,tp$doc:"Convert a string or number to a floating point number, if possible.",tp$hash(){const a=this.v;let b=d[a];if(void 0!==b)return b;b=Number.isInteger(a)?this.nb$int().tp$hash():Math.floor(Math.random()*Number.MAX_SAFE_INTEGER-
Number.MAX_SAFE_INTEGER/2);return d[this.v]=b},$r(){return new Sk.builtin.str(this.str$(10,!0))},tp$new(a,b){if(b&&b.length)throw new Sk.builtin.TypeError("float() takes no keyword arguments");if(a&&1<a.length)throw new Sk.builtin.TypeError("float expected at most 1 arguments, got "+a.length);a=a[0];if(void 0===a)var c=new Sk.builtin.float_(0);else if(a.nb$float)c=a.nb$float();else if(Sk.builtin.checkString(a)){c=a.v;a=c;if(-1!==c.indexOf("_")){if(g.test(c))throw new Sk.builtin.ValueError("could not convert string to float: '"+
c+"'");a=c.charAt(0)+c.substring(1).replace(n,"")}if(c.match(/^-inf$/i))var d=-Infinity;else c.match(/^[+]?inf$/i)?d=Infinity:c.match(/^[-+]?nan$/i)?d=NaN:isNaN(a)||(d=parseFloat(a),Number.isNaN(d)&&(d=void 0));if(void 0===d)throw new Sk.builtin.ValueError("could not convert string to float: "+Sk.misceval.objectRepr(new Sk.builtin.str(c)));c=new Sk.builtin.float_(d)}if(void 0===c)throw new Sk.builtin.TypeError("float() argument must be a string or a number");if(this===Sk.builtin.float_.prototype)return c;
d=new this.constructor;d.v=c.v;return d},nb$int(){let a=this.v;a=0>a?Math.ceil(a):Math.floor(a);if(!Number.isInteger(a))throw new Sk.builtin.ValueError("cannot convert float "+Sk.misceval.objectRepr(this)+" to integer");return Sk.builtin.int_.withinThreshold(a)?new Sk.builtin.int_(a):new Sk.builtin.int_(JSBI.BigInt(a))},nb$float:a,nb$long(){return new Sk.builtin.lng(this.nb$int().v)},nb$add:c((a,b)=>new Sk.builtin.float_(a+b)),nb$subtract:c((a,b)=>new Sk.builtin.float_(a-b)),nb$reflected_subtract:c((a,
b)=>new Sk.builtin.float_(b-a)),nb$multiply:c((a,b)=>new Sk.builtin.float_(a*b)),nb$divide:c(e),nb$reflected_divide:c((a,b)=>e(b,a)),nb$floor_divide:c(f),nb$reflected_floor_divide:c((a,b)=>f(b,a)),nb$remainder:c(l),nb$reflected_remainder:c((a,b)=>l(b,a)),nb$divmod:c((a,b)=>new Sk.builtin.tuple([f(a,b),l(a,b)])),nb$reflected_divmod:c((a,b)=>new Sk.builtin.tuple([f(b,a),l(b,a)])),nb$power:b(h),nb$reflected_power:b((a,b)=>h(b,a)),nb$abs(){return new Sk.builtin.float_(Math.abs(this.v))},nb$negative(){return new Sk.builtin.float_(-this.v)},
nb$positive(){return new Sk.builtin.float_(this.v)},nb$bool(){return 0!==this.v},nb$isnegative(){return 0>this.v},nb$ispositive(){return 0<=this.v},ob$eq:c((a,b)=>a==b),ob$ne:c((a,b)=>a!=b),ob$gt:c((a,b)=>a>b),ob$ge:c((a,b)=>a>=b),ob$lt:c((a,b)=>a<b),ob$le:c((a,b)=>a<=b)},getsets:{real:{$get:a,$doc:"the real part of a complex number"},imag:{$get(){return new Sk.builtin.float_(0)},$doc:"the imaginary part of a complex number"}},methods:{conjugate:{$meth:a,$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return self, the complex conjugate of any float."},
__trunc__:{$meth(){return this.nb$int()},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return the Integral closest to x between 0 and x."},__round__:{$meth(a){return this.round$(a)},$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, ndigits=None, /)",$doc:"Return the Integral closest to x, rounding half toward even.\n\nWhen an argument is passed, work like built-in round(x, ndigits)."},is_integer:{$meth(){return new Sk.builtin.bool(Number.isInteger(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",
$doc:"Return True if the float is an integer."},__getnewargs__:{$meth(){return new Sk.builtin.tuple([this])},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:Sk.builtin.none.none$},__format__:{$meth:Sk.formatting.mkNumber__format__(!0),$flags:{OneArg:!0},$textsig:"($self, format_spec, /)",$doc:Sk.builtin.none.none$}}});const g=/_[eE]|[eE]_|\._|_\.|[+-]_|__/,n=/_(?=[^_])/g;Sk.builtin.float_.PyFloat_Check=function(a){return void 0===a?!1:Sk.builtin.checkNumber(a)||Sk.builtin.checkFloat(a)||a.ob$type.$isSubType(Sk.builtin.float_)?
!0:!1};Sk.builtin.float_.prototype.toFixed=function(a){a=Sk.builtin.asnum$(a);return this.v.toFixed(a)};Sk.builtin.float_.prototype.round$=function(a){var b=Sk.builtin.asnum$(this);var c=void 0===a?0:Sk.misceval.asIndexSized(a);if(Sk.__future__.bankers_rounding){b*=Math.pow(10,c);var d=Math.round(b);c=(.5===(0<b?b:-b)%1?0===d%2?d:d-1:d)/Math.pow(10,c);return void 0===a?new Sk.builtin.int_(c):new Sk.builtin.float_(c)}a=Math.pow(10,c);c=Math.round(b*a)/a;return new Sk.builtin.float_(c)};Sk.builtin.float_.prototype.str$=
function(a,b){if(isNaN(this.v))return"nan";void 0===b&&(b=!0);if(Infinity==this.v)return"inf";if(-Infinity==this.v&&b)return"-inf";if(-Infinity==this.v&&!b)return"inf";b=b?this.v:Math.abs(this.v);if(void 0===a||10===a){var c=Sk.__future__.python3?b.toPrecision(16):b.toPrecision(12);var d=c.indexOf(".");a=b.toString().slice(0,d);d=b.toString().slice(d);a.match(/^-?0$/)&&d.slice(1).match(/^0{4,}/)&&(c=12>c.length?b.toExponential():b.toExponential(11));if(0>c.indexOf("e")&&0<=c.indexOf(".")){for(;"0"==
c.charAt(c.length-1);)c=c.substring(0,c.length-1);"."==c.charAt(c.length-1)&&(c+="0")}c=c.replace(/\.0+e/,"e","i");c=c.replace(/(e[-+])([1-9])$/,"$10$2");c=c.replace(/0+(e.*)/,"$1")}else c=b.toString(a);0===this.v&&-Infinity===1/this.v&&(c="-"+c);0>c.indexOf(".")&&0>c.indexOf("E")&&0>c.indexOf("e")&&(c+=".0");return c};Sk.builtin.float_.py2$methods={}},function(m,q){function a(a){let b=a.v;if("number"===typeof b)return b;a.nb$float&&(b=a.nb$float());if(void 0===b)throw new Sk.builtin.TypeError("a float is required");
return b.v}function c(a,b,c){if(c===Sk.builtin.complex.prototype)return new Sk.builtin.complex(a,b);c=new c.constructor;Sk.builtin.complex.call(c,a,b);return c}function b(a,b){return function(c){const d=this.real,e=this.imag;var f=c.real;const g=c.v;if("number"===typeof f)c=c.imag;else if("number"===typeof g)f=g,c=0;else if(JSBI.__isBigInt(g)){if(void 0===b){if(f=parseFloat(JSBI.toNumber(g)),Infinity==f||-Infinity==f)throw new Sk.builtin.OverflowError("int too large to convert to float");}else f=
g.toString();c=0}else return Sk.builtin.NotImplemented.NotImplemented$;return a(d,e,f,c)}}function e(a,b,c,d){var e=Math.abs(c);const f=Math.abs(d);if(e>=f){if(0===e)throw new Sk.builtin.ZeroDivisionError("complex division by zero");e=d/c;c+=d*e;d=(a+b*e)/c;a=(b-a*e)/c}else f>=e?(e=c/d,c=c*e+d,Sk.asserts.assert(0!==d),d=(a*e+b)/c,a=(b*e-a)/c):a=d=NaN;return new Sk.builtin.complex(d,a)}function f(a,b,c,d){if(0===c&&0===d){d=1;var e=0}else if(0===a&&0===b){if(0!==d||0>c)throw new Sk.builtin.ZeroDivisionError("complex division by zero");
e=d=0}else{const f=Math.hypot(a,b);e=Math.pow(f,c);a=Math.atan2(b,a);c*=a;0!==d&&(e/=Math.exp(a*d),c+=d*Math.log(f));d=e*Math.cos(c);e*=Math.sin(c)}return new Sk.builtin.complex(d,e)}function l(a,b,c){let d=1;var e=new Sk.builtin.complex(1,0);for(a=new Sk.builtin.complex(a,b);0<d&&c>=d;)c&d&&(e=new Sk.builtin.complex(e.real*a.real-e.imag*a.imag,e.real*a.imag+a.real*e.imag)),d<<=1,a=new Sk.builtin.complex(a.real*a.real-a.imag*a.imag,2*a.real*a.imag);return e}function h(a,b,c,d,e){e=!1;switch(b){case "e":case "f":case "g":break;
case "E":e=!0;b="e";break;case "F":e=!0;b="f";break;case "r":if(0!==c)throw Error("Bad internall call");c=17;b="g";break;default:throw Error("Bad internall call");}if(isNaN(a))a="nan";else if(Infinity===a)a="inf";else if(-Infinity===a)a="-inf";else{d&h.Py_DTSF_ADD_DOT_0&&(b="g");var f="%"+(d&h.Py_DTSF_ALT?"#":"");null!=c&&(f=f+"."+c);f=new Sk.builtin.str(f+b);a=f.nb$remainder(new Sk.builtin.float_(a));a=a.v}d&h.Py_DTSF_SIGN&&"-"!==a[0]&&(a="+"+a);e&&(a=a.toUpperCase());return a}Sk.builtin.complex=
Sk.abstr.buildNativeClass("complex",{constructor:function(a,b){Sk.asserts.assert(this instanceof Sk.builtin.complex,"bad call to complex constructor, use 'new'");this.real=a;this.imag=b},slots:{tp$as_number:!0,tp$doc:"Create a complex number from a real part and an optional imaginary part.\n\nThis is equivalent to (real + imag*1j) where imag defaults to 0.",tp$hash(){var a=(new Sk.builtin.float_(this.real)).tp$hash();a=1003*(new Sk.builtin.float_(this.imag)).tp$hash()+a;return Sk.builtin.int_.withinThreshold(a)?
a:(new Sk.builtin.int_(JSBI.BigInt(a))).tp$hash()},tp$getattr:Sk.generic.getAttr,tp$new(b,e){b=Sk.abstr.copyKeywordsToNamedArgs("complex",["real","imag"],b,e,[null,null]);{var f=b[1],g;let k=e=!1;var h=b[0];if(null!=h&&h.constructor===Sk.builtin.complex&&null==f)e=h;else if(Sk.builtin.checkString(h)){if(null!=f)throw new Sk.builtin.TypeError("complex() can't take second arg if first is a string");e=Sk.builtin.complex.complex_subtype_from_string(h,this)}else{if(null!=f&&Sk.builtin.checkString(f))throw new Sk.builtin.TypeError("complex() second arg can't be a string");
null==h?b=null:(b=Sk.abstr.lookupSpecial(h,Sk.builtin.str.$complex),b=void 0!==b?Sk.misceval.callsimArray(b,[]):null);if(null!=b&&b!==Sk.builtin.NotImplemented.NotImplemented$){if(!d(b))throw new Sk.builtin.TypeError("__complex__ should return a complex object");h=b}if(null!=h&&void 0===h.nb$float)throw new Sk.builtin.TypeError("complex() first argument must be a string or a number, not '"+Sk.abstr.typeName(h)+"'");if(null!=f&&void 0===f.nb$float)throw new Sk.builtin.TypeError("complex() second argument must be a number, not '"+
Sk.abstr.typeName(h)+"'");null==h?h=b=0:d(h)?(b=h.real,h=h.imag,e=!0):(b=a(h),h=0);null==f?f=g=0:d(f)?(g=f.real,f=f.imag,k=!0):(g=a(f),f=0);!0===k&&(b-=f);!0===e&&(g+=h);e=c(b,g,this)}}return e},tp$richcompare(a,c){if("Eq"!==c&&"NotEq"!==c){if(Sk.builtin.checkNumber(a)||d(a))throw new Sk.builtin.TypeError("no ordering relation is defined for complex numbers");return Sk.builtin.NotImplemented.NotImplemented$}return b(function(a,b,d,e){a=a==d&&b==e;return"Eq"===c?a:!a},!0).call(this,a)},$r(){{var a,
b;let e=a="";var c=this.real;var d=this.imag;if(b=0===c)b=1==(c?0>c?-1:1:0>1/c?-1:1);b?(c="",b=h(d,"g",null,0,null)):(c=a=h(c,"g",null,0,null),b=h(d,"g",null,h.Py_DTSF_SIGN,null),0===d&&-Infinity===1/d&&b&&"-"!==b[0]&&(b="-"+b),a="(",e=")");d=new Sk.builtin.str(""+a+c+b+"j"+e)}return d},nb$int(){throw new Sk.builtin.TypeError("can't convert complex to int");},nb$long(){throw new Sk.builtin.TypeError("can't convert complex to long");},nb$float(){throw new Sk.builtin.TypeError("can't convert complex to float");
},nb$positive(){return new Sk.builtin.complex(this.real,this.imag)},nb$negative(){return new Sk.builtin.complex(-this.real,-this.imag)},nb$bool(){return this.real||this.imag},nb$add:b((a,b,c,d)=>new Sk.builtin.complex(a+c,b+d)),nb$subtract:b((a,b,c,d)=>new Sk.builtin.complex(a-c,b-d)),nb$reflected_subtract:b((a,b,c,d)=>new Sk.builtin.complex(c-a,d-b)),nb$multiply:b((a,b,c,d)=>new Sk.builtin.complex(c*a-d*b,a*d+b*c)),nb$divide:b(e),nb$reflected_divide:b((a,b,c,d)=>e(c,d,a,b)),nb$floor_divide(a){throw new Sk.builtin.TypeError("can't take floor of complex number.");
},nb$reflected_floor_divide(a){throw new Sk.builtin.TypeError("can't take floor of complex number.");},nb$remainder(a){throw new Sk.builtin.TypeError("can't mod complex numbers.");},nb$reflected_remainder(a){throw new Sk.builtin.TypeError("can't mod complex numbers.");},nb$divmod(a){throw new Sk.builtin.TypeError("can't take floor or mod of complex number.");},nb$power(a,b){if(null!=b&&!Sk.builtin.checkNone(b))throw new Sk.builtin.ValueError("complex modulo");return k.call(this,a)},nb$abs(){var a=
this.real;const b=this.imag;if(!Number.isFinite(a)||!Number.isFinite(b))return Infinity===a||-Infinity===a?new Sk.builtin.float_(Math.abs(a)):Infinity===b||-Infinity===b?new Sk.builtin.float_(Math.abs(b)):new Sk.builtin.float_(NaN);a=Math.hypot(a,b);if(!Number.isFinite(a))throw new Sk.builtin.OverflowError("absolute value too large");return new Sk.builtin.float_(a)}},getsets:{real:{$get(){return new Sk.builtin.float_(this.real)},$doc:"the real part of a complex number"},imag:{$get(){return new Sk.builtin.float_(this.imag)},
$doc:"the imaginary part of a complex number"}},methods:{conjugate:{$meth(){return new Sk.builtin.complex(this.real,-this.imag)},$flags:{NoArgs:!0},$textsig:null,$doc:"complex.conjugate() -> complex\n\nReturn the complex conjugate of its argument. (3-4j).conjugate() == 3+4j."},__getnewargs__:{$meth(){return new Sk.builtin.tuple([new Sk.builtin.float_(this.real),new Sk.builtin.float_(this.imag)])},$flags:{NoArgs:!0},$textsig:null,$doc:Sk.builtin.none.none$},__format__:{$meth(a){if(Sk.builtin.checkString(a))throw new Sk.builtin.NotImplementedError("__format__ is not implemented for complex type.");
throw new Sk.builtin.TypeError("__format__ requires str");},$flags:{OneArg:!0},$textsig:null,$doc:"complex.__format__() -> str\n\nConvert to a string according to format_spec."}}});Sk.exportSymbol("Sk.builtin.complex",Sk.builtin.complex);const d=Sk.builtin.checkComplex,g=/_[eE]|[eE]_|\._|_\.|[+-]_|_j|j_/,n=/_(?=[^_])/g;Sk.builtin.complex.complex_subtype_from_string=function(a,b){b=b||Sk.builtin.complex.prototype;var d=0,e=0,f=!1;if(Sk.builtin.checkString(a))a=Sk.ffi.remapToJs(a);else if("string"!==
typeof a)throw new TypeError("provided unsupported string-alike argument");if(-1!==a.indexOf("\x00")||0===a.length||""===a)throw new Sk.builtin.ValueError("complex() arg is a malformed string");var h=0;a=a.replace(/inf|infinity/gi,"Infinity");for(a=a.replace(/nan/gi,"NaN");" "===a[h];)h++;if("("===a[h])for(f=!0,h++;" "===a[h];)h++;if(-1!==a.indexOf("_")){if(g.test(a))throw new Sk.builtin.ValueError("could not convert string to complex: '"+a+"'");a=a.charAt(0)+a.substring(1).replace(n,"")}var k=/^(?:[+-]?(?:(?:(?:\d*\.\d+)|(?:\d+\.?))(?:[eE][+-]?\d+)?|NaN|Infinity))/;
var l=a.substr(h);var p=l.match(k);if(null!==p)if(h+=p[0].length,"j"===a[h]||"J"===a[h])e=parseFloat(p[0]),h++;else if("+"===a[h]||"-"===a[h]){d=parseFloat(p[0]);p=a.substr(h).match(k);null!==p?(e=parseFloat(p[0]),h+=p[0].length):(e="+"===a[h]?1:-1,h++);if("j"!==a[h]&&"J"!==a[h])throw new Sk.builtin.ValueError("complex() arg is malformed string");h++}else d=parseFloat(p[0]);else p=p=l.match(/^([+-]?[jJ])/),null!==p&&(e=1===p[0].length?1:"+"===p[0][0]?1:-1,h+=p[0].length);for(;" "===a[h];)h++;if(f){if(")"!==
a[h])throw new Sk.builtin.ValueError("complex() arg is malformed string");for(h++;" "===a[h];)h++}if(a.length!==h)throw new Sk.builtin.ValueError("complex() arg is malformed string");return c(d,e,b)};const k=b((a,b,c,d)=>{const g=c|0;return 0===d&&c===g?(100<g||-100>g?a=f(a,b,g,0):0<g?a=l(a,b,g):(a=l(a,b,-g),a=e(1,0,a.real,a.imag)),a):f(a,b,c,d)});h.Py_DTSF_SIGN=1;h.Py_DTSF_ADD_DOT_0=2;h.Py_DTSF_ALT=4;h.Py_DTST_FINITE=0;h.Py_DTST_INFINITE=1;h.Py_DTST_NAN=2},function(m,q){Sk.builtin.slice=Sk.abstr.buildNativeClass("slice",
{constructor:function(a,c,b){void 0===c&&void 0===b&&(c=a,a=Sk.builtin.none.none$);void 0===c&&(c=Sk.builtin.none.none$);void 0===b&&(b=Sk.builtin.none.none$);this.start=a;this.stop=c;this.step=b},slots:{tp$getattr:Sk.generic.getAttr,tp$doc:"slice(stop)\nslice(start, stop[, step])\n\nCreate a slice object.  This is used for extended slicing (e.g. a[0:10:2]).",tp$hash:Sk.builtin.none.none$,tp$new(a,c){Sk.abstr.checkNoKwargs("slice",c);Sk.abstr.checkArgsLen("slice",a,1,3);return new Sk.builtin.slice(...a)},
$r(){const a=Sk.misceval.objectRepr(this.start),c=Sk.misceval.objectRepr(this.stop),b=Sk.misceval.objectRepr(this.step);return new Sk.builtin.str("slice("+a+", "+c+", "+b+")")},tp$richcompare(a,c){if(a.ob$type!==Sk.builtin.slice)return Sk.builtin.NotImplemented.NotImplemented$;const b=new Sk.builtin.tuple([this.start,this.stop,this.step]);a=new Sk.builtin.tuple([a.start,a.stop,a.step]);return b.tp$richcompare(a,c)}},getsets:{start:{$get(){return this.start}},step:{$get(){return this.step}},stop:{$get(){return this.stop}}},
methods:{indices:{$meth:function(a){a=Sk.misceval.asIndexSized(a,Sk.builtin.OverflowError);if(0>a)throw new Sk.builtin.TypeError("length should not be negative");const {start:c,stop:b,step:e}=this.slice$indices(a);return new Sk.builtin.tuple([new Sk.builtin.int_(c),new Sk.builtin.int_(b),new Sk.builtin.int_(e)])},$doc:"S.indices(len) -> (start, stop, stride)\n\nAssuming a sequence of length len, calculate the start and stop\nindices, and the stride length of the extended slice described by\nS. Out of bounds indices are clipped in a manner consistent with the\nhandling of normal slices.",
$textsig:null,$flags:{OneArg:!0}}},proto:{slice$as_indices(a){let c;var b=a?a=>Sk.misceval.asIndexSized(a,null,"slice indices must be integers or None or have an __index__ method"):a=>Sk.misceval.asIndexOrThrow(a,"slice indices must be integers or None or have an __index__ method");if(Sk.builtin.checkNone(this.step))c=1;else if(c=b(this.step),0===c)throw new Sk.builtin.ValueError("slice step cannot be zero");a=Sk.builtin.checkNone(this.start)?null:b(this.start);b=Sk.builtin.checkNone(this.stop)?null:
b(this.stop);return{start:a,stop:b,step:c}},$wrt(a,c,b,e,f){f=f?b=>JSBI.__isBigInt(b)?JSBI.add(b,JSBI.BigInt(a)):b+a:b=>b+a;0<e?(null===c?c=0:0>c&&(c=f(c),0>c&&(c=0)),null===b?b=a:b>a?b=a:0>b&&(b=f(b))):(null===c?c=a-1:c>=a?c=a-1:0>c&&(c=f(c)),null===b?b=-1:0>b&&(b=f(b),0>b&&(b=-1)));return{start:c,stop:b,step:e}},slice$indices(a,c){let {start:b,stop:e,step:f}=this.slice$as_indices(!0,c);return this.$wrt(a,b,e,f,c)},sssiter$(a,c){let {start:b,stop:e,step:f}=this.slice$indices(a,!0);if(0<f)for(a=b;a<
e;a+=f)c(a);else for(a=b;a>e;a+=f)c(a)}},flags:{sk$acceptable_as_base_class:!1}});Sk.builtin.slice.startEnd$wrt=function(a,c,b){a=a.sq$length();void 0===c||Sk.builtin.checkNone(c)?c=0:(c=Sk.misceval.asIndexSized(c,null,"slice indices must be integers or have an __index__ method"),0>c&&(c+=a,0>c&&(c=0)));void 0===b||Sk.builtin.checkNone(b)?b=a:(b=Sk.misceval.asIndexSized(b,null,"slice indices must be integers or have an __index__ method"),0>b?(b+=a,0>b&&(b=0)):b>a&&(b=a));return{start:c,end:b}}},function(m,
q){function a(a){return function(b){return Sk.builtin.checkAnySet(b)?a.call(this,b):Sk.builtin.NotImplemented.NotImplemented$}}function c(a){a instanceof Sk.builtin.set&&a.tp$hash===Sk.builtin.none.none$&&(a=new Sk.builtin.frozenset(Sk.misceval.arrayFromIterable(a)));return a}m={};Sk.builtin.set=Sk.abstr.buildNativeClass("set",{constructor:function(a){void 0===a?a=[]:Array.isArray(a)||(a=Sk.misceval.arrayFromIterable(a));Sk.asserts.assert(this instanceof Sk.builtin.set,"Bad call to set - must be called with an Array and 'new'");
const b=[];for(let c=0;c<a.length;c++)b.push(a[c]),b.push(!0);this.v=new Sk.builtin.dict(b);this.in$repr=!1},slots:{tp$getattr:Sk.generic.getAttr,tp$as_number:!0,tp$as_sequence_or_mapping:!0,tp$hash:Sk.builtin.none.none$,tp$doc:"set() -> new empty set object\nset(iterable) -> new set object\n\nBuild an unordered collection of unique elements.",tp$init(a,b){Sk.abstr.checkNoKwargs("set",b);Sk.abstr.checkArgsLen("set",a,0,1);this.set$clear();return(a=a[0])&&this.set$update(a)},tp$new:Sk.generic.new,
$r(){if(this.in$repr)return new Sk.builtin.str(Sk.abstr.typeName(this)+"(...)");this.in$repr=!0;const a=this.sk$asarray().map(a=>Sk.misceval.objectRepr(a));this.in$repr=!1;return Sk.__future__.python3?0===a.length?new Sk.builtin.str(Sk.abstr.typeName(this)+"()"):this.ob$type!==Sk.builtin.set?new Sk.builtin.str(Sk.abstr.typeName(this)+"({"+a.join(", ")+"})"):new Sk.builtin.str("{"+a.join(", ")+"}"):new Sk.builtin.str(Sk.abstr.typeName(this)+"(["+a.join(", ")+"])")},tp$iter(){return new b(this)},tp$richcompare(a,
b){if(!Sk.builtin.checkAnySet(a))return Sk.builtin.NotImplemented.NotImplemented$;switch(b){case "NotEq":case "Eq":return a=this===a?!0:this.get$size()!==a.get$size()?!1:Sk.misceval.isTrue(this.set$issubset(a)),"Eq"===b?a:!a;case "LtE":return this===a||Sk.misceval.isTrue(this.set$issubset(a));case "GtE":return this===a||Sk.misceval.isTrue(a.set$issubset(this));case "Lt":return this.get$size()<a.get$size()&&Sk.misceval.isTrue(this.set$issubset(a));case "Gt":return this.get$size()>a.get$size()&&Sk.misceval.isTrue(a.set$issubset(this))}},
nb$subtract:a(function(a){return this.difference.$meth.call(this,a)}),nb$and:a(function(a){return this.intersection.$meth.call(this,a)}),nb$or:a(function(a){return this.union.$meth.call(this,a)}),nb$xor:a(function(a){return this.symmetric_difference.$meth.call(this,a)}),nb$inplace_subtract:a(function(a){a===this&&(a=a.set$copy());return Sk.misceval.chain(this.difference_update.$meth.call(this,a),()=>this)}),nb$inplace_and:a(function(a){return Sk.misceval.chain(this.intersection_update.$meth.call(this,
a),()=>this)}),nb$inplace_or:a(function(a){return Sk.misceval.chain(this.update.$meth.call(this,a),()=>this)}),nb$inplace_xor:a(function(a){a===this&&(a=a.set$copy());return Sk.misceval.chain(this.symmetric_difference_update.$meth.call(this,a),()=>this)}),sq$length(){return this.get$size()},sq$contains(a){a=c(a);return this.v.sq$contains(a)}},methods:{add:{$meth(a){this.set$add(a);return Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:null,$doc:"Add an element to a set.\n\nThis has no effect if the element is already present."},
clear:{$meth(){this.set$clear();return Sk.builtin.none.none$},$flags:{NoArgs:!0},$textsig:null,$doc:"Remove all elements from this set."},copy:{$meth(){return this.set$copy()},$flags:{NoArgs:!0},$textsig:null,$doc:"Return a shallow copy of a set."},discard:{$meth(a){a=c(a);this.set$discard(a);return Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:null,$doc:"Remove an element from a set if it is a member.\n\nIf the element is not a member, do nothing."},difference:{$meth(...a){const b=this.set$copy();
return Sk.misceval.chain(Sk.misceval.iterArray(a,a=>b.set$difference_update(a)),()=>b)},$flags:{MinArgs:0},$textsig:null,$doc:"Return the difference of two or more sets as a new set.\n\n(i.e. all elements that are in this set but not the others.)"},difference_update:{$meth(...a){return Sk.misceval.chain(Sk.misceval.iterArray(a,a=>this.set$difference_update(a)),()=>Sk.builtin.none.none$)},$flags:{MinArgs:0},$textsig:null,$doc:"Remove all elements of another set from this set."},intersection:{$meth(...a){return this.set$intersection_multi(...a)},
$flags:{MinArgs:0},$textsig:null,$doc:"Return the intersection of two sets as a new set.\n\n(i.e. all elements that are in both sets.)"},intersection_update:{$meth(...a){return Sk.misceval.chain(this.set$intersection_multi(...a),a=>{this.swap$bodies(a);return Sk.builtin.none.none$})},$flags:{MinArgs:0},$textsig:null,$doc:"Update a set with the intersection of itself and another."},isdisjoint:{$meth(a){return Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(a),a=>{if(this.sq$contains(a))return new Sk.misceval.Break(Sk.builtin.bool.false$)}),
a=>a||Sk.builtin.bool.true$)},$flags:{OneArg:!0},$textsig:null,$doc:"Return True if two sets have a null intersection."},issubset:{$meth(a){Sk.builtin.checkAnySet(a)||(a=this.set$make_basetype(a));return Sk.misceval.chain(a,a=>this.set$issubset(a))},$flags:{OneArg:!0},$textsig:null,$doc:"Report whether another set contains this set."},issuperset:{$meth(a){Sk.builtin.checkAnySet(a)||(a=this.set$make_basetype(a));return Sk.misceval.chain(a,a=>a.set$issubset(this))},$flags:{OneArg:!0},$textsig:null,
$doc:"Report whether this set contains another set."},pop:{$meth(){if(0===this.get$size())throw new Sk.builtin.KeyError("pop from an empty set");return Sk.misceval.callsimArray(this.v.popitem,[this.v]).v[0]},$flags:{NoArgs:!0},$textsig:null,$doc:"Remove and return an arbitrary set element.\nRaises KeyError if the set is empty."},remove:{$meth(a){const b=c(a);if(this.v.mp$lookup(b))return this.v.mp$ass_subscript(b),Sk.builtin.none.none$;throw new Sk.builtin.KeyError(a);},$flags:{OneArg:!0},$textsig:null,
$doc:"Remove an element from a set; it must be a member.\n\nIf the element is not a member, raise a KeyError."},symmetric_difference:{$meth(a){let b;return Sk.misceval.chain(this.set$make_basetype(a),a=>{b=a;return b.set$symmetric_diff_update(this)},()=>b)},$flags:{OneArg:!0},$textsig:null,$doc:"Return the symmetric difference of two sets as a new set.\n\n(i.e. all elements that are in exactly one of the sets.)"},symmetric_difference_update:{$meth(a){Sk.builtin.checkAnySet(a)||(a=this.set$make_basetype(a));
return Sk.misceval.chain(a,a=>this.set$symmetric_diff_update(a),()=>Sk.builtin.none.none$)},$flags:{OneArg:!0},$textsig:null,$doc:"Update a set with the symmetric difference of itself and another."},union:{$meth(...a){const b=this.set$copy();return Sk.misceval.chain(Sk.misceval.iterArray(a,a=>b.set$update(a)),()=>b)},$flags:{MinArgs:0},$textsig:null,$doc:"Return the union of sets as a new set.\n\n(i.e. all elements that are in either set.)"},update:{$meth(...a){return Sk.misceval.chain(Sk.misceval.iterArray(a,
a=>this.set$update(a)),()=>Sk.builtin.none.none$)},$flags:{MinArgs:0},$textsig:null,$doc:"Update a set with the union of itself and others."}},proto:Object.assign(m,{sk$asarray(){return this.v.sk$asarray()},get$size(){return this.v.sq$length()},set$add(a){this.v.mp$ass_subscript(a,!0)},set$make_basetype(a){return Sk.misceval.chain(Sk.misceval.arrayFromIterable(a,!0),a=>new this.sk$builtinBase(a))},set$discard(a){return this.v.pop$item(a)},set$clear(){this.v=new Sk.builtin.dict([])},set$copy(){const a=
new this.sk$builtinBase;a.v=this.v.dict$copy();return a},set$difference_update(a){return Sk.misceval.iterFor(Sk.abstr.iter(a),a=>{this.set$discard(a)})},set$intersection(a){const b=new this.sk$builtinBase;return Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(a),a=>{this.sq$contains(a)&&b.set$add(a)}),()=>b)},set$intersection_multi(...a){if(!a.length)return this.set$copy();let b=this;return Sk.misceval.chain(Sk.misceval.iterArray(a,a=>Sk.misceval.chain(b.set$intersection(a),a=>{b=a})),()=>b)},
set$issubset(a){const b=this.get$size(),c=a.get$size();if(b>c)return Sk.builtin.bool.false$;for(let b=this.tp$iter(),c=b.tp$iternext();void 0!==c;c=b.tp$iternext())if(!a.sq$contains(c))return Sk.builtin.bool.false$;return Sk.builtin.bool.true$},set$symmetric_diff_update(a){return Sk.misceval.iterFor(Sk.abstr.iter(a),a=>{void 0===this.set$discard(a)&&this.set$add(a)})},set$update(a){return Sk.misceval.iterFor(Sk.abstr.iter(a),a=>{this.set$add(a)})},swap$bodies(a){this.v=a.v}})});Sk.exportSymbol("Sk.builtin.set",
Sk.builtin.set);q=Sk.builtin.set.prototype;Sk.builtin.frozenset=Sk.abstr.buildNativeClass("frozenset",{constructor:function(a){void 0===a&&(a=[]);Sk.asserts.assert(Array.isArray(a)&&this instanceof Sk.builtin.frozenset,"bad call to frozen set - must be called with an Array and 'new'");const b=[];for(let c=0;c<a.length;c++)b.push(a[c]),b.push(!0);this.v=new Sk.builtin.dict(b);this.in$repr=!1},slots:{tp$getattr:Sk.generic.getAttr,tp$as_number:!0,tp$as_sequence_or_mapping:!0,tp$doc:"frozenset() -> empty frozenset object\nfrozenset(iterable) -> frozenset object\n\nBuild an immutable unordered collection of unique elements.",
tp$hash(){let a=1927868237;const b=this.sk$asarray();a*=b.length+1;for(let c=0;c<b.length;c++){const e=Sk.abstr.objectHash(b[c]);a^=3644798167*(e^e<<16^89869747)}return 69069*a+907133923},tp$new(a,b){if(this!==Sk.builtin.frozenset.prototype)return this.$subtype_new(a,b);Sk.abstr.checkNoKwargs("frozenset",b);Sk.abstr.checkArgsLen("frozenset",a,0,1);a=a[0];return void 0!==a&&a.ob$type===Sk.builtin.frozenset?a:Sk.misceval.chain(Sk.misceval.arrayFromIterable(a,!0),a=>a.length?new Sk.builtin.frozenset(a):
Sk.builtin.frozenset.$emptyset)},$r:q.$r,tp$iter:q.tp$iter,tp$richcompare:q.tp$richcompare,nb$subtract:q.nb$subtract,nb$and:q.nb$and,nb$or:q.nb$or,nb$xor:q.nb$xor,sq$length:q.sq$length,sq$contains:q.sq$contains},methods:{copy:Object.assign({},q.copy.d$def,{$meth(){return this.constructor===this.sk$builtinBase?this:new Sk.builtin.frozenset(this.sk$asarray())}}),difference:q.difference.d$def,intersection:q.intersection.d$def,isdisjoint:q.isdisjoint.d$def,issubset:q.issubset.d$def,issuperset:q.issuperset.d$def,
symmetric_difference:q.symmetric_difference.d$def,union:q.union.d$def},proto:Object.assign({$subtype_new(a,b){const c=new this.constructor;return Sk.misceval.chain(Sk.builtin.frozenset.prototype.tp$new(a),a=>{c.v=a.v;return c})}},m)});Sk.builtin.frozenset.$emptyset=Object.create(Sk.builtin.frozenset.prototype,{v:{value:new Sk.builtin.dict([]),enumerable:!0},in$repr:{value:!1,enumerable:!0}});Sk.exportSymbol("Sk.builtin.frozenset",Sk.builtin.frozenset);var b=Sk.abstr.buildIteratorClass("set_iterator",
{constructor:function(a){this.$index=0;this.$seq=a.sk$asarray();this.$orig=a},iternext:Sk.generic.iterNextWithArrayCheckSize,methods:{__length_hint__:Sk.generic.iterLengthHintWithArrayMethodDef},flags:{sk$acceptable_as_base_class:!1}})},function(m,q){Sk.builtin.print=function(a,c){let [b,e,f]=Sk.abstr.copyKeywordsToNamedArgs("print",["sep","end","file","flush"],[],c);if(void 0===b||Sk.builtin.checkNone(b))b=" ";else if(Sk.builtin.checkString(b))b=b.$jsstr();else throw new Sk.builtin.TypeError("sep must be None or a string, not "+
Sk.abstr.typeName(b));if(void 0===e||Sk.builtin.checkNone(e))e="\n";else if(Sk.builtin.checkString(e))e=e.$jsstr();else throw new Sk.builtin.TypeError("end must be None or a string, not "+Sk.abstr.typeName(e));let l;if(void 0!==f&&!Sk.builtin.checkNone(f)&&(l=Sk.abstr.lookupSpecial(f,Sk.builtin.str.$write),void 0===l))throw new Sk.builtin.AttributeError("'"+Sk.abstr.typeName(f)+"' object has no attribute 'write'");const h=new Sk.builtin.str(a.map(a=>(new Sk.builtin.str(a)).toString()).join(b)+e);
if(void 0!==l)Sk.misceval.callsimArray(l,[h]);else return Sk.misceval.chain(Sk.importModule("sys",!1,!0),a=>(l=Sk.abstr.lookupSpecial(a.$d.stdout,Sk.builtin.str.$write))&&Sk.misceval.callsimOrSuspendArray(l,[h]))};Sk.builtin.print.co_fastcall=1},function(m,q){Sk.builtin.module=Sk.abstr.buildNativeClass("module",{constructor:function(){this.$d={}},slots:{tp$doc:"Create a module object.\n\nThe name must be a string; the optional doc argument can have any type.",tp$getattr(a,c){var b=this.$d[a.$mangled];
if(void 0!==b)return b;b=this.ob$type.$typeLookup(a);if(void 0!==b){const a=b.tp$descr_get;return a?a.call(b,this,this.ob$type,c):b}const e=this.$d.__getattr__;if(void 0!==e)return b=Sk.misceval.tryCatch(()=>Sk.misceval.callsimOrSuspendArray(e,[a]),a=>{if(!(a instanceof Sk.builtin.AttributeError))throw a;}),c?b:Sk.misceval.retryOptionalSuspensionOrThrow(b)},tp$setattr:Sk.generic.setAttr,tp$new:Sk.generic.new,tp$init(a,c){const [b,e]=Sk.abstr.copyKeywordsToNamedArgs("module",["name","doc"],a,c,[Sk.builtin.none.none$]);
Sk.builtin.pyCheckType("module","string",b);this.init$dict(b,e)},$r(){let a=this.get$name();if(void 0!==a){var c=this.get$mod_reprf();if(void 0!==c)return Sk.misceval.callsimOrSuspendArray(c,[this])}a=void 0===a?"'?'":a;c=this.from$file();c=void 0===c?this.empty_or$loader():c;return new Sk.builtin.str("<module "+a+c+">")}},getsets:{__dict__:{$get(){return new Sk.builtin.mappingproxy(this.$d)}}},methods:{__dir__:{$meth(){const a=this.tp$getattr(Sk.builtin.str.$dict);if(!Sk.builtin.checkMapping(a))throw new Sk.builtin.TypeError("__dict__ is not a dictionary");
const c=a.mp$lookup(Sk.builtin.str.$dir);return void 0!==c?Sk.misceval.callsimOrSuspendArray(c,[]):new Sk.builtin.list(Sk.misceval.arrayFromIterable(a))},$flags:{NoArgs:!0},$doc:"__dir__() -> list\nspecialized dir() implementation"}},proto:{init$dict(a,c){this.$d.__name__=a;this.$d.__doc__=c;this.$d.__package__=Sk.builtin.none.none$;this.$d.__spec__=Sk.builtin.none.none$;this.$d.__loader__=Sk.builtin.none.none$},sk$attrError(){const a=this.get$name();return void 0===a?"module":"module "+a},get$name(){const a=
this.tp$getattr(Sk.builtin.str.$name);return a&&Sk.misceval.objectRepr(a)},from$file(){const a=this.tp$getattr(Sk.builtin.str.$file);return a&&" from "+Sk.misceval.objectRepr(a)},empty_or$loader(){if(this.$js&&this.$js.includes("$builtinmodule"))return" (built-in)";const a=this.tp$getattr(Sk.builtin.str.$loader);return void 0===a||Sk.builtin.checkNone(a)?"":" ("+Sk.misceval.objectRepr(a)+")"},get$mod_reprf(){const a=this.tp$getattr(Sk.builtin.str.$loader);return a&&a.tp$getattr(this.str$mod_repr)},
str$mod_repr:new Sk.builtin.str("module_repr")}});Sk.exportSymbol("Sk.builtin.module",Sk.builtin.module)},function(m,q){Sk.builtin.structseq_types={};Sk.builtin.make_structseq=function(a,c,b,e){const f=a+"."+c,l=[];a=[];for(let c in b)l.push(c),a.push(b[c]);b={};for(let c=0;c<l.length;c++)b[l[c]]={$get(){return this.v[c]},$doc:a[c]};var h=Sk.abstr.buildNativeClass(f,{constructor:function(a){Sk.asserts.assert((Array.isArray(a)||void 0===a)&&this instanceof h);Sk.builtin.tuple.call(this,a)},base:Sk.builtin.tuple,
slots:{tp$new(a,b){Sk.abstr.checkOneArg(f,a,b);b=[];a=a[0];for(let c=Sk.abstr.iter(a),d=c.tp$iternext();void 0!==d;d=c.tp$iternext())b.push(d);if(b.length!=l.length)throw new Sk.builtin.TypeError(f+"() takes a "+l.length+"-sequence ("+b.length+"-sequence given)");return new h(b)},tp$doc:e?e:Sk.builtin.none.none$,$r(){var a;if(0===this.v.length)return new Sk.builtin.str(f+"()");var b=[];for(a=0;a<this.v.length;++a)b[a]=l[a]+"="+Sk.misceval.objectRepr(this.v[a]);a=b.join(", ");1===this.v.length&&(a+=
",");return new Sk.builtin.str(f+"("+a+")")}},methods:{__reduce__:{$meth(){throw new Sk.builtin.NotImplementedError("__reduce__ is not implemented");},$flags:{NoArgs:!0}}},getsets:b,proto:{num_sequence_fields:new Sk.builtin.int_(l.length)}});return h};Sk.exportSymbol("Sk.builtin.make_structseq",Sk.builtin.make_structseq)},function(m,q){Sk.builtin.generator=Sk.abstr.buildIteratorClass("generator",{constructor:function(a,c,b,e,f){var l;if(a){if(!(this instanceof Sk.builtin.generator))throw new TypeError("bad internal call to generator, use 'new'");
this.func_code=a;this.func_globals=c||null;this.gi$running=!1;this.gi$resumeat=0;this.gi$sentvalue=void 0;this.gi$locals={};this.gi$cells={};if(0<b.length)for(c=0;c<a.co_varnames.length;++c)this.gi$locals[a.co_varnames[c]]=b[c];if(void 0!==f)for(l in f)e[l]=f[l];this.func_closure=e}},slots:{$r(){return new Sk.builtin.str("<generator object "+this.func_code.co_name.v+">")}},iternext(a,c){var b=this;this.gi$running=!0;void 0===c&&(c=Sk.builtin.none.none$);this.gi$sentvalue=c;c=[this];this.func_closure&&
c.push(this.func_closure);return function l(c){if(c instanceof Sk.misceval.Suspension){if(a)return new Sk.misceval.Suspension(l,c);c=Sk.misceval.retryOptionalSuspensionOrThrow(c)}b.gi$running=!1;Sk.asserts.assert(void 0!==c);if(c!==Sk.builtin.none.none$)return b.gi$resumeat=c[0],c=c[1]}(this.func_code.apply(this.func_globals,c))},methods:{send:{$meth(a){return this.tp$iternext(!0,a)},$flags:{OneArg:!0},$doc:"send(arg) -> send 'arg' into generator,\nreturn next yielded value or raise StopIteration."}}});
Sk.exportSymbol("Sk.builtin.generator",Sk.builtin.generator);Sk.builtin.makeGenerator=function(a,c){var b,e=new Sk.builtin.generator(null,null,null);e.tp$iternext=a;for(b in c)c.hasOwnProperty(b)&&(e[b]=c[b]);return e};Sk.exportSymbol("Sk.builtin.makeGenerator",Sk.builtin.makeGenerator)},function(m,q){Sk.builtin.file=function(a,c,b){var e;if(!(this instanceof Sk.builtin.file))return new Sk.builtin.file(a,c,b);this.mode=c;this.name=Sk.ffi.remapToJs(a);this.closed=!1;if("/dev/stdout"===this.name)this.data$=
Sk.builtin.none.none$,this.fileno=1;else if("/dev/stdin"===this.name)this.fileno=0;else if("/dev/stderr"===this.name)this.fileno=2;else{if(Sk.inBrowser)if(this.fileno=10,b=document.getElementById(a.v),null==b)if("w"==c.v||"a"==c.v)this.data$="";else throw new Sk.builtin.IOError("[Errno 2] No such file or directory: '"+a.v+"'");else"textarea"==b.nodeName.toLowerCase()?this.data$=b.value:this.data$=b.textContent;else this.fileno=11,this.data$=Sk.read(a.v);this.lineList=this.data$.split("\n");this.lineList=
this.lineList.slice(0,-1);for(e in this.lineList)this.lineList[e]+="\n";this.currentLine=0}this.pos$=0;Sk.fileopen&&10<=this.fileno&&Sk.fileopen(this);return this};Sk.abstr.setUpInheritance("file",Sk.builtin.file,Sk.builtin.object);Sk.abstr.setUpBuiltinMro(Sk.builtin.file);Sk.builtin.file.prototype.$r=function(){return new Sk.builtin.str("<"+(this.closed?"closed":"open")+"file '"+this.name+"', mode '"+Sk.ffi.remapToJs(this.mode)+"'>")};Sk.builtin.file.prototype.tp$iter=function(){var a={tp$iter:function(){return a},
$obj:this,$index:this.currentLine,$lines:this.lineList,tp$iternext:function(){if(!(a.$index>=a.$lines.length))return new Sk.builtin.str(a.$lines[a.$index++])}};return a};Sk.abstr.setUpSlots(Sk.builtin.file);Sk.builtin.file.prototype.__enter__=new Sk.builtin.func(function(a){return a});Sk.builtin.file.prototype.__exit__=new Sk.builtin.func(function(a){return Sk.misceval.callsimArray(Sk.builtin.file.prototype.close,[a])});Sk.builtin.file.prototype.close=new Sk.builtin.func(function(a){a.closed=!0;return Sk.builtin.none.none$});
Sk.builtin.file.prototype.flush=new Sk.builtin.func(function(a){});Sk.builtin.file.prototype.fileno=new Sk.builtin.func(function(a){return this.fileno});Sk.builtin.file.prototype.isatty=new Sk.builtin.func(function(a){return!1});Sk.builtin.file.prototype.read=new Sk.builtin.func(function(a,c){var b=a.data$.length;if(a.closed)throw new Sk.builtin.ValueError("I/O operation on closed file");var e=void 0===c?b:Sk.ffi.remapToJs(c);e=new Sk.builtin.str(a.data$.substr(a.pos$,e));a.pos$=void 0===c?b:a.pos$+
Sk.ffi.remapToJs(c);a.pos$>=b&&(a.pos$=b);return e});Sk.builtin.file.$readline=function(a,c,b){if(0===a.fileno){a=Sk.ffi.remapToJs(b);a=Sk.inputfun(a?a:"");if(a instanceof Promise||a&&"function"===typeof a.then){var e=new Sk.misceval.Suspension;e.resume=function(){if(e.data.error)throw e.data.error;return new Sk.builtin.str(e.data.result)};e.data={type:"Sk.promise",promise:a};return e}return new Sk.builtin.str(a)}c="";a.currentLine<a.lineList.length&&(c=a.lineList[a.currentLine],a.currentLine++);
return new Sk.builtin.str(c)};Sk.builtin.file.prototype.readline=new Sk.builtin.func(function(a,c){return Sk.builtin.file.$readline(a,c,void 0)});Sk.builtin.file.prototype.readlines=new Sk.builtin.func(function(a,c){if(0===a.fileno)return new Sk.builtin.NotImplementedError("readlines ins't implemented because the web doesn't support Ctrl+D");var b=[];for(c=a.currentLine;c<a.lineList.length;c++)b.push(new Sk.builtin.str(a.lineList[c]));return new Sk.builtin.list(b)});Sk.builtin.file.prototype.seek=
new Sk.builtin.func(function(a,c,b){c=Sk.ffi.remapToJs(c);void 0===b&&(b=0);0===b?a.pos$=c:1==b?a.pos$=a.data$.length+c:2==b&&(a.pos$=a.data$.length+c);return Sk.builtin.none.none$});Sk.builtin.file.prototype.tell=new Sk.builtin.func(function(a){return Sk.ffi.remapToPy(a.pos$)});Sk.builtin.file.prototype.truncate=new Sk.builtin.func(function(a,c){Sk.asserts.fail()});Sk.builtin.file.prototype.write=new Sk.builtin.func(function(a,c){var b=Sk.ffi.remapToJs(a.mode);if("w"===b||"wb"===b||"a"===b||"ab"===
b)if(Sk.filewrite){if(a.closed)throw new Sk.builtin.ValueError("I/O operation on closed file");1===a.fileno?Sk.output(Sk.ffi.remapToJs(c)):Sk.filewrite(a,c)}else 1===a.fileno?Sk.output(Sk.ffi.remapToJs(c)):Sk.asserts.fail();else throw new Sk.builtin.IOError("File not open for writing");return Sk.builtin.none.none$});Sk.exportSymbol("Sk.builtin.file",Sk.builtin.file)},function(m,q){Sk.ffi=Sk.ffi||{};Sk.ffi.remapToPy=function(a){var c;if(null===a||"undefined"===typeof a)return Sk.builtin.none.none$;
if(a.ob$type||a instanceof Sk.misceval.Suspension)return a;if("[object Array]"===Object.prototype.toString.call(a)){var b=[];for(c=0;c<a.length;++c)b.push(Sk.ffi.remapToPy(a[c]));return new Sk.builtin.list(b)}if("object"===typeof a){b=[];for(c in a)b.push(Sk.ffi.remapToPy(c)),b.push(Sk.ffi.remapToPy(a[c]));return new Sk.builtin.dict(b)}if("string"===typeof a)return new Sk.builtin.str(a);if("number"===typeof a)return Sk.builtin.assk$(a);if("boolean"===typeof a)return new Sk.builtin.bool(a);if("undefined"===
typeof a)return Sk.builtin.none.none$;if("function"===typeof a)return new Sk.builtin.func(a);Sk.asserts.fail("unhandled remap type "+typeof a)};Sk.exportSymbol("Sk.ffi.remapToPy",Sk.ffi.remapToPy);Sk.ffi.remapToJs=function(a){var c,b;if(a instanceof Sk.builtin.dict){var e={};a.$items().forEach(([a,c])=>{b=Sk.ffi.remapToJs(a);e[b]=Sk.ffi.remapToJs(c)});return e}if(a instanceof Sk.builtin.list||a instanceof Sk.builtin.tuple){e=[];for(c=0;c<a.v.length;++c)e.push(Sk.ffi.remapToJs(a.v[c]));return e}if(a instanceof
Sk.builtin.bool)return a.v?!0:!1;if(a instanceof Sk.builtin.int_||a instanceof Sk.builtin.float_||a instanceof Sk.builtin.lng)return Sk.builtin.asnum$(a);if("number"===typeof a||"boolean"===typeof a||"string"===typeof a)return a;if(void 0!==a)return a.v};Sk.exportSymbol("Sk.ffi.remapToJs",Sk.ffi.remapToJs);Sk.ffi.callback=function(a){return void 0===a?a:function(){return Sk.misceval.apply(a,void 0,void 0,void 0,Array.prototype.slice.call(arguments,0))}};Sk.exportSymbol("Sk.ffi.callback",Sk.ffi.callback);
Sk.ffi.stdwrap=function(a,c){a=new a;a.v=c;return a};Sk.exportSymbol("Sk.ffi.stdwrap",Sk.ffi.stdwrap);Sk.ffi.basicwrap=function(a){if(a instanceof Sk.builtin.int_||a instanceof Sk.builtin.float_||a instanceof Sk.builtin.lng)return Sk.builtin.asnum$(a);if("number"===typeof a||"boolean"===typeof a)return a;if("string"===typeof a)return new Sk.builtin.str(a);Sk.asserts.fail("unexpected type for basicwrap")};Sk.exportSymbol("Sk.ffi.basicwrap",Sk.ffi.basicwrap);Sk.ffi.unwrapo=function(a){if(void 0!==a)return a.v};
Sk.exportSymbol("Sk.ffi.unwrapo",Sk.ffi.unwrapo);Sk.ffi.unwrapn=function(a){return null===a?null:a.v};Sk.exportSymbol("Sk.ffi.unwrapn",Sk.ffi.unwrapn)},function(m,q){function a(a,b,e){a=void 0===a?a:Sk.misceval.asIndexOrThrow(a);b=void 0===b?b:Sk.misceval.asIndexOrThrow(b);e=void 0===e?e:Sk.misceval.asIndexOrThrow(e);if(void 0===b&&void 0===e)b=a,a=0,e=1;else if(void 0===e)e=1;else if(0===e)throw new Sk.builtin.ValueError("range() step argument must not be zero");const d=[];if("number"===typeof a&&
"number"===typeof b&&"number"===typeof e)if(0<e)for(var f=a;f<b;f+=e)d.push(new Sk.builtin.int_(f));else for(f=a;f>b;f+=e)d.push(new Sk.builtin.int_(f));else{a=f=JSBI.BigInt(a);e=JSBI.BigInt(e);b=JSBI.BigInt(b);if(JSBI.greaterThan(e,JSBI.__ZERO))for(;JSBI.lessThan(f,b);)d.push(new Sk.builtin.int_(c(f))),f=JSBI.add(f,e);else for(;JSBI.greaterThan(f,b);)d.push(new Sk.builtin.int_(c(f))),f=JSBI.add(f,e);a=c(a);e=c(e);b=c(b)}return new Sk.builtin.range_(a,b,e,d)}function c(a){return JSBI.lessThan(a,JSBI.__MAX_SAFE)&&
JSBI.greaterThan(a,JSBI.__MIN_SAFE)?JSBI.toNumber(a):a}Sk.builtin.range_=Sk.abstr.buildNativeClass("range",{constructor:function(a,b,c,d){this.start=a;this.stop=b;this.step=c;this.v=d},slots:{tp$getattr:Sk.generic.getAttr,tp$as_sequence_or_mapping:!0,tp$doc:"range(stop) -> range object\nrange(start, stop[, step]) -> range object\n\nReturn an object that produces a sequence of integers from start (inclusive)\nto stop (exclusive) by step.  range(i, j) produces i, i+1, i+2, ..., j-1.\nstart defaults to 0, and stop is omitted!  range(4) produces 0, 1, 2, 3.\nThese are exactly the valid indices for a list of 4 elements.\nWhen step is given, it specifies the increment (or decrement).",
tp$new(b,c){Sk.abstr.checkNoKwargs("range",c);Sk.abstr.checkArgsLen("range",b,1,3);return a(b[0],b[1],b[2])},$r(){let a="range("+this.start+", "+this.stop;1!=this.step&&(a+=", "+this.step);return new Sk.builtin.str(a+")")},tp$richcompare(a,b){if("Eq"!==b&&"NotEq"!==b||a.ob$type!==Sk.builtin.range_)return Sk.builtin.NotImplemented.NotImplemented$;a=new Sk.builtin.list(a.v);return(new Sk.builtin.list(this.v)).tp$richcompare(a,b)},tp$iter(){return new b(this)},nb$bool(){return 0!==this.v.length},sq$contains(a){const b=
this.v;for(let c=0;c<b.length;c++)if(Sk.misceval.richCompareBool(a,b[c],"Eq"))return!0;return!1},sq$length(){return this.v.length},mp$subscript(a){if(Sk.misceval.isIndex(a)){a=Sk.misceval.asIndexSized(a);0>a&&(a=this.v.length+a);if(0>a||a>=this.v.length)throw new Sk.builtin.IndexError("range object index out of range");return this.v[a]}if(a.constructor===Sk.builtin.slice){const b=[],c=this.v;a.sssiter$(c.length,a=>{b.push(c[a])});let {start:d,stop:e,step:f}=a.slice$indices(c.length);d=Sk.misceval.asIndex(c[d])||
this.start;e=Sk.misceval.asIndex(c[e])||this.stop;f="number"===typeof this.step?f*this.step:JSBI.multiply(this.step,JSBI.BigInt(f));return new Sk.builtin.range_(d,e,f,b)}throw new Sk.builtin.TypeError("range indices must be integers or slices, not "+Sk.abstr.typeName(a));}},getsets:{start:{$get(){return new Sk.builtin.int_(this.start)}},step:{$get(){return new Sk.builtin.int_(this.step)}},stop:{$get(){return new Sk.builtin.int_(this.stop)}}},methods:{__reversed__:{$meth(){return new e(this)},$flags:{NoArgs:!0},
$textsig:null,$doc:"Return a reverse iterator."},count:{$meth(a){let b=0;for(let c=0;c<this.v.length;c++)Sk.misceval.richCompareBool(a,this.v[c],"Eq")&&b++;return new Sk.builtin.int_(b)},$flags:{OneArg:!0},$textsig:null,$doc:"rangeobject.count(value) -> integer -- return number of occurrences of value"},index:{$meth(a){for(let b=0;b<this.v.length;b++)if(Sk.misceval.richCompareBool(a,this.v[b],"Eq"))return new Sk.builtin.int_(b);throw new Sk.builtin.ValueError(Sk.misceval.objectRepr(a)+"is not in range");
},$flags:{OneArg:!0},$textsig:null,$doc:"rangeobject.index(value, [start, [stop]]) -> integer -- return index of value.\nRaise ValueError if the value is not present."}},proto:{sk$asarray(){return this.v.slice(0)}},flags:{sk$acceptable_as_base_class:!1}});var b=Sk.abstr.buildIteratorClass("range_iterator",{constructor:function(a){this.$index=0;this.$seq=a.v},iternext(){return this.$seq[this.$index++]},methods:{__length_hint__:Sk.generic.iterLengthHintWithArrayMethodDef},flags:{sk$acceptable_as_base_class:!1}}),
e=Sk.abstr.buildIteratorClass("range_reverseiterator",{constructor:function(a){this.$seq=a.v;this.$index=this.$seq.length-1},iternext(){return this.$seq[this.$index--]},methods:{__length_hint__:Sk.generic.iterReverseLengthHintMethodDef},flags:{sk$acceptable_as_base_class:!1}});Sk.builtin.range=Sk.builtin.xrange=function(b,c,e){b=a(b,c,e);return new Sk.builtin.list(b.v)}},function(m,q){Sk.builtin.enumerate=Sk.abstr.buildIteratorClass("enumerate",{constructor:function(a,c){if(!(this instanceof Sk.builtin.enumerate))throw TypeError("Failed to construct 'enumerate': Please use the 'new' operator");
this.$iterable=a;this.$index=c;return this},iternext(a){const c=Sk.misceval.chain(this.$iterable.tp$iternext(a),a=>{if(void 0!==a)return new Sk.builtin.tuple([new Sk.builtin.int_(this.$index++),a])});return a?c:Sk.misceval.retryOptionalSuspensionOrThrow(c)},slots:{tp$doc:"Return an enumerate object.\n\n  iterable\n    an object supporting iteration\n\nThe enumerate object yields pairs containing a count (from start, which\ndefaults to zero) and a value yielded by the iterable argument.\n\nenumerate is useful for obtaining an indexed list:\n    (0, seq[0]), (1, seq[1]), (2, seq[2]), ...",
tp$new(a,c){let [b,e]=Sk.abstr.copyKeywordsToNamedArgs("enumerate",["iterable","start"],a,c,[new Sk.builtin.int_(0)]);b=Sk.abstr.iter(b);e=Sk.misceval.asIndexOrThrow(e);if(this===Sk.builtin.enumerate.prototype)return new Sk.builtin.enumerate(b,e);a=new this.constructor;Sk.builtin.enumerate.call(a,b,e);return a}}});Sk.exportSymbol("Sk.builtin.enumerate",Sk.builtin.enumerate)},function(m,q){Sk.builtin.filter_=Sk.abstr.buildIteratorClass("filter",{constructor:function(a,c){this.$func=a;this.$iterable=
c},iternext(a){const c=Sk.misceval.iterFor(this.$iterable,a=>Sk.misceval.chain(this.check$filter(a),a=>a?new Sk.misceval.Break(a):void 0));return a?c:Sk.misceval.retryOptionalSuspensionOrThrow(c)},slots:{tp$doc:"Return an iterator yielding those items of iterable for which function(item)\nis true. If function is None, return the items that are true.",tp$new(a,c){let [b,e]=Sk.abstr.copyKeywordsToNamedArgs("filter",["predicate","iterable"],a,c,[]);b=Sk.builtin.checkNone(b)?null:b;e=Sk.abstr.iter(e);
if(this===Sk.builtin.filter_.prototype)return new Sk.builtin.filter_(b,e);a=new this.constructor;Sk.builtin.filter_.call(a,b,e);return a}},proto:{check$filter(a){let c;c=null===this.$func?a:Sk.misceval.callsimOrSuspendArray(this.$func,[a]);return Sk.misceval.chain(c,b=>Sk.misceval.isTrue(b)?a:void 0)}}});Sk.exportSymbol("Sk.builtin.filter_",Sk.builtin.filter_)},function(m,q){Sk.builtin.map_=Sk.abstr.buildIteratorClass("map",{constructor:function(a,c){this.$func=a;this.$iters=c},iternext(a){const c=
[],b=Sk.misceval.chain(Sk.misceval.iterArray(this.$iters,b=>Sk.misceval.chain(b.tp$iternext(a),a=>{if(void 0===a)return new Sk.misceval.Break(!0);c.push(a)})),a=>a?void 0:Sk.misceval.callsimOrSuspendArray(this.$func,c));return a?b:Sk.misceval.retryOptionalSuspensionOrThrow(b)},slots:{tp$doc:"map(func, *iterables) --\x3e map object\n\nMake an iterator that computes the function using arguments from\neach of the iterables.  Stops when the shortest iterable is exhausted.",tp$new(a,c){this===Sk.builtin.map_.prototype&&
Sk.abstr.checkNoKwargs("map",c);Sk.abstr.checkArgsLen("map",a,2);c=a[0];const b=[];for(let c=1;c<a.length;c++)b.push(Sk.abstr.iter(a[c]));if(this===Sk.builtin.map_.prototype)return new Sk.builtin.map_(c,b);a=new this.constructor;Sk.builtin.map_.call(a,c,b);return a}}});Sk.exportSymbol("Sk.builtin.map_",Sk.builtin.map_)},function(m,q){Sk.builtin.reversed=Sk.abstr.buildIteratorClass("reversed",{constructor:function(a){this.$idx=a.sq$length()-1;this.$seq=a;return this},iternext(a){if(!(0>this.$idx)){var c=
Sk.misceval.tryCatch(()=>Sk.abstr.objectGetItem(this.$seq,new Sk.builtin.int_(this.$idx--),a),a=>{if(a instanceof Sk.builtin.IndexError)this.$idx=-1;else throw a;});return a?c:Sk.misceval.retryOptionalSuspensionOrThrow(c)}},slots:{tp$doc:"Return a reverse iterator over the values of the given sequence.",tp$new(a,c){this===Sk.builtin.reversed.prototype&&Sk.abstr.checkNoKwargs("reversed",c);Sk.abstr.checkArgsLen("reversed",a,1,1);a=a[0];c=Sk.abstr.lookupSpecial(a,Sk.builtin.str.$reversed);if(void 0!==
c)return Sk.misceval.callsimArray(c,[]);if(!Sk.builtin.checkSequence(a)||void 0===Sk.abstr.lookupSpecial(a,Sk.builtin.str.$len))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(a)+"' object is not a sequence");if(this===Sk.builtin.reversed.prototype)return new Sk.builtin.reversed(a);c=new this.constructor;Sk.builtin.reversed.call(c,a);return c}},methods:{__length_hint__:{$meth:function(){return 0<=this.$idx?new Sk.builtin.int_(this.$idx):new Sk.builtin.int_(0)},$flags:{NoArgs:!0}}}})},function(m,
q){Sk.builtin.zip_=Sk.abstr.buildIteratorClass("zip",{constructor:function(a){this.$iters=a;0===a.length&&(this.tp$iternext=()=>{})},iternext(a){const c=[],b=Sk.misceval.chain(Sk.misceval.iterArray(this.$iters,b=>Sk.misceval.chain(b.tp$iternext(a),a=>{if(void 0===a)return new Sk.misceval.Break(!0);c.push(a)})),a=>a?void 0:new Sk.builtin.tuple(c));return a?b:Sk.misceval.retryOptionalSuspensionOrThrow(b)},slots:{tp$doc:"zip(iter1 [,iter2 [...]]) --\x3e zip object\n\nReturn a zip object whose .__next__() method returns a tuple where\nthe i-th element comes from the i-th iterable argument.  The .__next__()\nmethod continues until the shortest iterable in the argument sequence\nis exhausted and then it raises StopIteration.",
tp$new(a,c){this===Sk.builtin.zip_.prototype&&Sk.abstr.checkNoKwargs("zip",c);c=[];for(let b=0;b<a.length;b++)try{c.push(Sk.abstr.iter(a[b]))}catch(e){if(e instanceof Sk.builtin.TypeError)throw new Sk.builtin.TypeError("zip argument #"+(b+1)+" must support iteration");throw e;}if(this===Sk.builtin.zip_.prototype)return new Sk.builtin.zip_(c);a=new this.constructor;Sk.builtin.zip_.call(a,c);return a}}});Sk.exportSymbol("Sk.builtin.zip_",Sk.builtin.zip_)},function(m,q){var a={T_ENDMARKER:0,T_NAME:1,
T_NUMBER:2,T_STRING:3,T_NEWLINE:4,T_INDENT:5,T_DEDENT:6,T_LPAR:7,T_RPAR:8,T_LSQB:9,T_RSQB:10,T_COLON:11,T_COMMA:12,T_SEMI:13,T_PLUS:14,T_MINUS:15,T_STAR:16,T_SLASH:17,T_VBAR:18,T_AMPER:19,T_LESS:20,T_GREATER:21,T_EQUAL:22,T_DOT:23,T_PERCENT:24,T_LBRACE:25,T_RBRACE:26,T_EQEQUAL:27,T_NOTEQUAL:28,T_LESSEQUAL:29,T_GREATEREQUAL:30,T_TILDE:31,T_CIRCUMFLEX:32,T_LEFTSHIFT:33,T_RIGHTSHIFT:34,T_DOUBLESTAR:35,T_PLUSEQUAL:36,T_MINEQUAL:37,T_STAREQUAL:38,T_SLASHEQUAL:39,T_PERCENTEQUAL:40,T_AMPEREQUAL:41,T_VBAREQUAL:42,
T_CIRCUMFLEXEQUAL:43,T_LEFTSHIFTEQUAL:44,T_RIGHTSHIFTEQUAL:45,T_DOUBLESTAREQUAL:46,T_DOUBLESLASH:47,T_DOUBLESLASHEQUAL:48,T_AT:49,T_ATEQUAL:50,T_RARROW:51,T_ELLIPSIS:52,T_OP:53,T_AWAIT:54,T_ASYNC:55,T_ERRORTOKEN:56,T_NT_OFFSET:256,T_N_TOKENS:60,T_COMMENT:57,T_NL:58,T_ENCODING:59};m={"!=":a.T_NOTEQUAL,"%":a.T_PERCENT,"%=":a.T_PERCENTEQUAL,"&":a.T_AMPER,"&=":a.T_AMPEREQUAL,"(":a.T_LPAR,")":a.T_RPAR,"*":a.T_STAR,"**":a.T_DOUBLESTAR,"**=":a.T_DOUBLESTAREQUAL,"*=":a.T_STAREQUAL,"+":a.T_PLUS,"+=":a.T_PLUSEQUAL,
",":a.T_COMMA,"-":a.T_MINUS,"-=":a.T_MINEQUAL,"->":a.T_RARROW,".":a.T_DOT,"...":a.T_ELLIPSIS,"/":a.T_SLASH,"//":a.T_DOUBLESLASH,"//=":a.T_DOUBLESLASHEQUAL,"/=":a.T_SLASHEQUAL,":":a.T_COLON,";":a.T_SEMI,"<":a.T_LESS,"<<":a.T_LEFTSHIFT,"<<=":a.T_LEFTSHIFTEQUAL,"<=":a.T_LESSEQUAL,"=":a.T_EQUAL,"==":a.T_EQEQUAL,">":a.T_GREATER,">=":a.T_GREATEREQUAL,">>":a.T_RIGHTSHIFT,">>=":a.T_RIGHTSHIFTEQUAL,"@":a.T_AT,"@=":a.T_ATEQUAL,"[":a.T_LSQB,"]":a.T_RSQB,"^":a.T_CIRCUMFLEX,"^=":a.T_CIRCUMFLEXEQUAL,"{":a.T_LBRACE,
"|":a.T_VBAR,"|=":a.T_VBAREQUAL,"}":a.T_RBRACE,"~":a.T_TILDE};var c={};(function(){for(var b in a)c[a[b]]=b})();["tok_name","ISTERMINAL","ISNONTERMINAL","ISEOF"].concat(Object.keys(c).map(function(a){return c[a]}));Sk.token={};Sk.token.tokens=a;Sk.token.tok_name=c;Sk.token.EXACT_TOKEN_TYPES=m;Sk.token.ISTERMINAL=function(b){return b<a.T_NT_OFFSET};Sk.token.ISNONTERMINAL=function(b){return b>=a.T_NT_OFFSET};Sk.token.ISEOF=function(b){return b==a.T_ENDMARKER};Sk.exportSymbol("Sk.token",Sk.token);Sk.exportSymbol("Sk.token.tokens",
Sk.token.tokens);Sk.exportSymbol("Sk.token.tok_name",Sk.token.tok_name);Sk.exportSymbol("Sk.token.EXACT_TOKEN_TYPES");Sk.exportSymbol("Sk.token.ISTERMINAL",Sk.token.ISTERMINAL);Sk.exportSymbol("Sk.token.ISNONTERMINAL",Sk.token.ISNONTERMINAL);Sk.exportSymbol("Sk.token.ISEOF",Sk.token.ISEOF)},function(m,q){function a(a,b,c,d,e){this.type=a;this.string=b;this.start=c;this.end=d;this.line=e}function c(a){return"("+Array.prototype.slice.call(arguments).join("|")+")"}function b(a){return c.apply(null,arguments)+
"?"}function e(a,b){for(var c=a.length;c--;)if(a[c]===b)return!0;return!1}function f(){return" FR RF Br BR Fr r B R b bR f rb rB F Rf U rF u RB br fR fr rf Rb".split(" ")}function l(a){a?delete Sk.token.EXACT_TOKEN_TYPES["<>"]:Sk.token.EXACT_TOKEN_TYPES["<>"]=Sk.token.tokens.T_NOTEQUAL;t=Object.keys(Sk.token.EXACT_TOKEN_TYPES).sort();y=c.apply(this,t.reverse().map(function(a){return a&&k.test(a)?a.replace(n,"\\$&"):a}));B=c("\\r?\\n",y)}var h=Sk.token.tokens;const d=Sk.builtin.SyntaxError,g=Sk.builtin.SyntaxError;
a.prototype.exact_type=function(){return this.type==h.T_OP&&this.string in Sk.token.EXACT_TOKEN_TYPES?Sk.token.EXACT_TOKEN_TYPES[this.string]:this.type};var n=/[\\^$.*+?()[\]{}|]/g,k=RegExp(n.source);const p=function(){var a=c("[A-Z]","[a-z]","[\\u{10B99}-\\u{10B9C}\\u{112A9}\\u{115DC}-\\u{115DD}\\u034F\\u115F-\\u1160\\u17B4-\\u17B5\\u2065\\u3164\\uFFA0\\uFFF0-\\uFFF8\\u{E0000}\\u{E0002}-\\u{E001F}\\u{E0080}-\\u{E00FF}\\u{E01F0}-\\u{E0FFF}\\u{112A9}\\u00D7]","[\\u02B0-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0374\\u037A\\u0559\\u06E5-\\u06E6\\u07F4-\\u07F5\\u0971\\u1C78-\\u1C7D\\u1D2C-\\u1D6A\\u1DFD-\\u1DFF\\u2E2F\\u30FC\\uA67F\\uA69C-\\uA69D\\uA717-\\uA71F\\uA788\\uA7F8-\\uA7F9\\uAB5C-\\uAB5F\\uFF70\\uFF9E-\\uFF9F\\u{16F93}-\\u{16F9F}\\u02D0-\\u02D1\\u0640\\u07FA\\u0E46\\u0EC6\\u1843\\u1AA7\\u1C7B\\u3005\\u3031-\\u3035\\u309D-\\u309E\\u30FC-\\u30FE\\uA015\\uA60C\\uA9CF\\uA9E6\\uAA70\\uAADD\\uAAF3-\\uAAF4\\uFF70\\u{16B42}-\\u{16B43}\\u{16FE0}-\\u{16FE1}\\u02B0-\\u02B8\\u02C0-\\u02C1\\u02E0-\\u02E4\\u037A\\u1D2C-\\u1D6A\\u1D78\\u1D9B-\\u1DBF\\u2071\\u207F\\u2090-\\u209C\\u2C7C-\\u2C7D\\uA69C-\\uA69D\\uA770\\uA7F8-\\uA7F9\\uAB5C-\\uAB5F\\uFF9E-\\uFF9F\\u02B2\\u1D62\\u1DA4\\u1DA8\\u2071\\u2C7C\\u2E18-\\u2E19\\u2E2F]",
"[\\u2135-\\u2138\\u{1EE00}-\\u{1EE03}\\u{1EE05}-\\u{1EE1F}\\u{1EE21}-\\u{1EE22}\\u{1EE24}\\u{1EE27}\\u{1EE29}-\\u{1EE32}\\u{1EE34}-\\u{1EE37}\\u{1EE39}\\u{1EE3B}\\u{1EE42}\\u{1EE47}\\u{1EE49}\\u{1EE4B}\\u{1EE4D}-\\u{1EE4F}\\u{1EE51}-\\u{1EE52}\\u{1EE54}\\u{1EE57}\\u{1EE59}\\u{1EE5B}\\u{1EE5D}\\u{1EE5F}\\u{1EE61}-\\u{1EE62}\\u{1EE64}\\u{1EE67}-\\u{1EE6A}\\u{1EE6C}-\\u{1EE72}\\u{1EE74}-\\u{1EE77}\\u{1EE79}-\\u{1EE7C}\\u{1EE7E}\\u{1EE80}-\\u{1EE89}\\u{1EE8B}-\\u{1EE9B}\\u{1EEA1}-\\u{1EEA3}\\u{1EEA5}-\\u{1EEA9}\\u{1EEAB}-\\u{1EEBB}\\u3006\\u3400-\\u4DB5\\u4E00-\\u9FEF\\uF900-\\uFA6D\\uFA70-\\uFAD9\\u{17000}-\\u{187F1}\\u{18800}-\\u{18AF2}\\u{1B170}-\\u{1B2FB}\\u{20000}-\\u{2A6D6}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{2F800}-\\u{2FA1D}\\uAAC0\\uAAC2\\uFE20-\\uFE2F\\u{10D22}-\\u{10D23}\\u{1135D}\\u00AA\\u00BA\\u3400-\\u4DB5\\u4E00-\\u9FEF\\uFA0E-\\uFA0F\\uFA11\\uFA13-\\uFA14\\uFA1F\\uFA21\\uFA23-\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6D6}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u115F-\\u1160\\u3164\\uFFA0\\u0673\\u17A3-\\u17A4\\u0E40-\\u0E44\\u0EC0-\\u0EC4\\u19B5-\\u19B7\\u19BA\\uAAB5-\\uAAB6\\uAAB9\\uAABB-\\uAABC]",
"[\\u3007\\u3021-\\u3029\\u3038-\\u303A\\u2170-\\u217F\\u2160-\\u216F]","_","[\\u1885-\\u1886\\u2118\\u212E\\u309B-\\u309C]"),b=c(a,"[\\u104A-\\u104B\\u102B-\\u102C\\u102D-\\u1030\\u1031\\u1032-\\u1036\\u1038\\u103B-\\u103C\\u103D-\\u103E\\u1056-\\u1057\\u1058-\\u1059\\u105E-\\u1060\\u1062\\u1067-\\u1068\\u1071-\\u1074\\u1082\\u1083-\\u1084\\u1085-\\u1086\\u109C\\u109D\\u1037\\u1039-\\u103A\\u1087-\\u108C\\u108D\\u108F\\u109A-\\u109B\\uA9E5\\uAA7B\\uAA7C\\uAA7D\\uA9E6\\uAA70\\u104A-\\u104B]","[\\u0903\\u093B\\u093E-\\u0940\\u0949-\\u094C\\u094E-\\u094F\\u0982-\\u0983\\u09BE-\\u09C0\\u09C7-\\u09C8\\u09CB-\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB-\\u0ACC\\u0B02-\\u0B03\\u0B3E\\u0B40\\u0B47-\\u0B48\\u0B4B-\\u0B4C\\u0B57\\u0BBE-\\u0BBF\\u0BC1-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82-\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7-\\u0CC8\\u0CCA-\\u0CCB\\u0CD5-\\u0CD6\\u0D02-\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82-\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2-\\u0DF3\\u0F7F\\u102B-\\u102C\\u1031\\u1038\\u103B-\\u103C\\u1056-\\u1057\\u1062\\u1067-\\u1068\\u1083-\\u1084\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7-\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930-\\u1931\\u1933-\\u1938\\u1A19-\\u1A1A\\u1A55\\u1A57\\u1A61\\u1A63-\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43\\u1B82\\u1BA1\\u1BA6-\\u1BA7\\u1BE7\\u1BEA-\\u1BEC\\u1BEE\\u1C24-\\u1C2B\\u1C34-\\u1C35\\u1CF2-\\u1CF3\\uA823-\\uA824\\uA827\\uA880-\\uA881\\uA8B4-\\uA8C3\\uA952\\uA983\\uA9B4-\\uA9B5\\uA9BA-\\uA9BB\\uA9BD-\\uA9BF\\uAA2F-\\uAA30\\uAA33-\\uAA34\\uAA4D\\uAAEB\\uAAEE-\\uAAEF\\uAAF5\\uABE3-\\uABE4\\uABE6-\\uABE7\\uABE9-\\uABEA\\u{11000}\\u{11002}\\u{11082}\\u{110B0}-\\u{110B2}\\u{110B7}-\\u{110B8}\\u{1112C}\\u{11145}-\\u{11146}\\u{11182}\\u{111B3}-\\u{111B5}\\u{111BF}\\u{1122C}-\\u{1122E}\\u{11232}-\\u{11233}\\u{112E0}-\\u{112E2}\\u{11302}-\\u{11303}\\u{1133E}-\\u{1133F}\\u{11341}-\\u{11344}\\u{11347}-\\u{11348}\\u{1134B}-\\u{1134C}\\u{11357}\\u{11362}-\\u{11363}\\u{11435}-\\u{11437}\\u{11440}-\\u{11441}\\u{11445}\\u{114B0}-\\u{114B2}\\u{114B9}\\u{114BB}-\\u{114BE}\\u{114C1}\\u{115AF}-\\u{115B1}\\u{115B8}-\\u{115BB}\\u{115BE}\\u{11630}-\\u{11632}\\u{1163B}-\\u{1163C}\\u{1163E}\\u{116AC}\\u{116AE}-\\u{116AF}\\u{11720}-\\u{11721}\\u{11726}\\u{1182C}-\\u{1182E}\\u{11838}\\u{11A39}\\u{11A57}-\\u{11A58}\\u{11A97}\\u{11C2F}\\u{11C3E}\\u{11CA9}\\u{11CB1}\\u{11CB4}\\u{11D8A}-\\u{11D8E}\\u{11D93}-\\u{11D94}\\u{11D96}\\u{11EF5}-\\u{11EF6}\\u{16F51}-\\u{16F7E}\\u0F3E-\\u0F3F\\u1087-\\u108C\\u108F\\u109A-\\u109B\\u1B44\\u1BAA\\u1CE1\\u1CF7\\u302E-\\u302F\\uA953\\uA9C0\\uAA7B\\uAA7D\\uABEC\\u{111C0}\\u{11235}\\u{1134D}\\u{116B6}\\u{1D16D}-\\u{1D172}\\u09BE\\u09D7\\u0B3E\\u0B57\\u0BBE\\u0BD7\\u0CC2\\u0CD5-\\u0CD6\\u0D3E\\u0D57\\u0DCF\\u0DDF\\u302E-\\u302F\\u{1133E}\\u{11357}\\u{114B0}\\u{114BD}\\u{115AF}\\u{1D165}\\u{1D16E}-\\u{1D172}]",
"[\\u{1D7CE}-\\u{1D7FF}\\uFF10-\\uFF19]","\\u2040","[\\u00B7\\u0387\\u1369-\\u1371\\u19DA]");if(!1===RegExp().unicode)return new RegExp("^"+a+"+"+b+"*$","u");a=c("[A-Z]","[a-z]","_");b=c(a,"[0-9]");return new RegExp("^"+a+"+"+b+"*$")}();(function(a){return c.apply(null,arguments)+"*"})("\\\\\\r?\\n[ \\f\\t]*");b("#[^\\r\\n]*");m=c("[0-9](?:_?[0-9])*\\.(?:[0-9](?:_?[0-9])*)?","\\.[0-9](?:_?[0-9])*")+b("[eE][-+]?[0-9](?:_?[0-9])*");var w=c(m,"[0-9](?:_?[0-9])*[eE][-+]?[0-9](?:_?[0-9])*"),A=c("[0-9](?:_?[0-9])*[jJ]",
w+"[jJ]");m=c.apply(null,f());q=c(m+"'''",m+'"""');c(m+"'[^\\n'\\\\]*(?:\\\\.[^\\n'\\\\]*)*'",m+'"[^\\n"\\\\]*(?:\\\\.[^\\n"\\\\]*)*"');var t,y,B;l(!0);Sk.token.setupTokens=l;var E=c(m+"'[^\\n'\\\\]*(?:\\\\.[^\\n'\\\\]*)*"+c("'","\\\\\\r?\\n"),m+'"[^\\n"\\\\]*(?:\\\\.[^\\n"\\\\]*)*'+c('"',"\\\\\\r?\\n")),F=c("\\\\\\r?\\n|$","#[^\\r\\n]*",q),K={};m=f();for(let a of m)K[a+"'"]="^[^'\\\\]*(?:\\\\.[^'\\\\]*)*'",K[a+'"']='^[^"\\\\]*(?:\\\\.[^"\\\\]*)*"',K[a+"'''"]="^[^'\\\\]*(?:(?:\\\\.|'(?!''))[^'\\\\]*)*'''",
K[a+'"""']='^[^"\\\\]*(?:(?:\\\\.|"(?!""))[^"\\\\]*)*"""';let G=[],U=[];for(let a of m)G.push(a+'"'),G.push(a+"'"),U.push(a+'"""'),U.push(a+"'''");Sk._tokenize=function(b,f,k,n){var l=Sk.__future__.python3?"":"(?:L?)";l=c("0[xX](?:_?[0-9a-fA-F])+"+l,"0[bB](?:_?[01])+"+l,Sk.__future__.silent_octal_literal?"0([oO]?)(?:_?[0-7])+"+l:"0([oO])(?:_?[0-7])+"+l,"(?:0(?:_?0)*|[1-9](?:_?[0-9])*)"+l);l=c(A,w,l);l="[ \\f\\t]*"+c(F,l,B,E,"\\w+");l=new RegExp(l);var m=0,t=0,q=0,y="",u=0,C=null,N=[0],H,R=void 0,
X=void 0,J,T;void 0!==k&&("utf-8-sig"==k&&(k="utf-8"),n(new a(h.T_ENCODING,k,[0,0],[0,0],"")));for(var D=k="";;){try{k=D,D=f()}catch(Q){D=""}m+=1;var x=0,P=D.length;if(y){if(!D)throw new d("EOF in multi-line string",b,X[0],X[1]);R.lastIndex=0;var r=R.exec(D);if(r)x=J=r[0].length,n(new a(h.T_STRING,y+D.substring(0,J),X,[m,J],C+D)),y="",u=0,C=null;else{u&&"\\\n"!==D.substring(D.length-2)&&"\\\r\n"!==D.substring(D.length-3)?(n(new a(h.T_ERRORTOKEN,y+D,X,[m,D.length],C)),y="",C=null):(y+=D,C+=D);continue}}else if(0!=
t||q){if(!D)throw new d("EOF in multi-line statement",b,m,0);q=0}else{if(!D)break;for(H=0;x<P;){if(" "==D[x])H+=1;else if("\t"==D[x])H=8*Math.floor(H/8+1);else if("\f"==D[x])H=0;else break;x+=1}if(x==P)break;if(e("#\r\n",D[x])){if("#"==D[x]){H=D.substring(x);for(P=H.length;0<P&&-1!=="\r\n".indexOf(H.charAt(P-1));--P);P=H.substring(0,P);n(new a(h.T_COMMENT,P,[m,x],[m,x+P.length],D));x+=P.length}n(new a(h.T_NL,D.substring(x),[m,x],[m,D.length],D));continue}H>N[N.length-1]&&(N.push(H),n(new a(h.T_INDENT,
D.substring(x),[m,0],[m,x],D)));for(;H<N[N.length-1];){if(!e(N,H))throw new g("unindent does not match any outer indentation level",b,m,x);N=N.slice(0,-1);n(new a(h.T_DEDENT,"",[m,x],[m,x],D))}}for(;x<P;){for(H=D.charAt(x);" "===H||"\f"===H||"\t"===H;)x+=1,H=D.charAt(x);if(T=l.exec(D.substring(x))){if(H=x,J=H+T[1].length,T=[m,H],r=[m,J],x=J,H!=J){J=D.substring(H,J);var z=D[H];if(e("0123456789",z)||"."==z&&"."!=J&&"..."!=J)n(new a(h.T_NUMBER,J,T,r,D));else if(e("\r\n",z))0<t?n(new a(h.T_NL,J,T,r,D)):
n(new a(h.T_NEWLINE,J,T,r,D));else if("#"==z)n(new a(h.T_COMMENT,J,T,r,D));else if(e(U,J))if(R=RegExp(K[J]),r=R.exec(D.substring(x)))x=r[0].length+x,J=D.substring(H,x),n(new a(h.T_STRING,J,T,[m,x],D));else{X=[m,H];y=D.substring(H);C=D;break}else if(e(G,z)||e(G,J.substring(0,2))||e(G,J.substring(0,3)))if("\n"==J[J.length-1]){X=[m,H];R=RegExp(K[z]||K[J[1]]||K[J[2]]);y=D.substring(H);u=1;C=D;break}else n(new a(h.T_STRING,J,T,r,D));else H=z.normalize("NFKC"),p.test(H)?n(new a(h.T_NAME,J,T,r,D)):"\\"==
z?q=1:(e("([{",z)?t+=1:e(")]}",z)&&--t,n(new a(h.T_OP,J,T,r,D)))}}else n(new a(h.T_ERRORTOKEN,D[x],[m,x],[m,x+1],D)),x+=1}}k&&!e("\r\n",k[k.length-1])&&n(new a(h.T_NEWLINE,"",[m-1,k.length],[m-1,k.length+1],""));for(var Z in N.slice(1))n(new a(h.T_DEDENT,"",[m,0],[m,0],""));n(new a(h.T_ENDMARKER,"",[m,0],[m,0],""))};Sk.exportSymbol("Sk._tokenize",Sk._tokenize)},function(m,q){Sk.OpMap={"(":Sk.token.tokens.T_LPAR,")":Sk.token.tokens.T_RPAR,"[":Sk.token.tokens.T_LSQB,"]":Sk.token.tokens.T_RSQB,":":Sk.token.tokens.T_COLON,
",":Sk.token.tokens.T_COMMA,";":Sk.token.tokens.T_SEMI,"+":Sk.token.tokens.T_PLUS,"-":Sk.token.tokens.T_MINUS,"*":Sk.token.tokens.T_STAR,"/":Sk.token.tokens.T_SLASH,"|":Sk.token.tokens.T_VBAR,"&":Sk.token.tokens.T_AMPER,"<":Sk.token.tokens.T_LESS,">":Sk.token.tokens.T_GREATER,"=":Sk.token.tokens.T_EQUAL,".":Sk.token.tokens.T_DOT,"%":Sk.token.tokens.T_PERCENT,"`":Sk.token.tokens.T_BACKQUOTE,"{":Sk.token.tokens.T_LBRACE,"}":Sk.token.tokens.T_RBRACE,"@":Sk.token.tokens.T_AT,"@=":Sk.token.tokens.T_ATEQUAL,
"==":Sk.token.tokens.T_EQEQUAL,"!=":Sk.token.tokens.T_NOTEQUAL,"<>":Sk.token.tokens.T_NOTEQUAL,"<=":Sk.token.tokens.T_LESSEQUAL,">=":Sk.token.tokens.T_GREATEREQUAL,"~":Sk.token.tokens.T_TILDE,"^":Sk.token.tokens.T_CIRCUMFLEX,"<<":Sk.token.tokens.T_LEFTSHIFT,">>":Sk.token.tokens.T_RIGHTSHIFT,"**":Sk.token.tokens.T_DOUBLESTAR,"+=":Sk.token.tokens.T_PLUSEQUAL,"-=":Sk.token.tokens.T_MINEQUAL,"*=":Sk.token.tokens.T_STAREQUAL,"/=":Sk.token.tokens.T_SLASHEQUAL,"%=":Sk.token.tokens.T_PERCENTEQUAL,"&=":Sk.token.tokens.T_AMPEREQUAL,
"|=":Sk.token.tokens.T_VBAREQUAL,"^=":Sk.token.tokens.T_CIRCUMFLEXEQUAL,"<<=":Sk.token.tokens.T_LEFTSHIFTEQUAL,">>=":Sk.token.tokens.T_RIGHTSHIFTEQUAL,"**=":Sk.token.tokens.T_DOUBLESTAREQUAL,"//":Sk.token.tokens.T_DOUBLESLASH,"//=":Sk.token.tokens.T_DOUBLESLASHEQUAL,"->":Sk.token.tokens.T_RARROW,"...":Sk.token.tokens.T_ELLIPSIS};Sk.ParseTables={sym:{and_expr:257,and_test:258,annassign:259,arglist:260,argument:261,arith_expr:262,assert_stmt:263,async_funcdef:264,async_stmt:265,atom:266,atom_expr:267,
augassign:268,break_stmt:269,classdef:270,comp_for:271,comp_if:272,comp_iter:273,comp_op:274,comparison:275,compound_stmt:276,continue_stmt:277,debugger_stmt:278,decorated:279,decorator:280,decorators:281,del_stmt:282,dictorsetmaker:283,dotted_as_name:284,dotted_as_names:285,dotted_name:286,encoding_decl:287,eval_input:288,except_clause:289,expr:290,expr_stmt:291,exprlist:292,factor:293,file_input:294,flow_stmt:295,for_stmt:296,funcdef:297,global_stmt:298,if_stmt:299,import_as_name:300,import_as_names:301,
import_from:302,import_name:303,import_stmt:304,lambdef:305,lambdef_nocond:306,nonlocal_stmt:307,not_test:308,or_test:309,parameters:310,pass_stmt:311,power:312,print_stmt:313,raise_stmt:314,return_stmt:315,shift_expr:316,simple_stmt:317,single_input:256,sliceop:318,small_stmt:319,star_expr:320,stmt:321,subscript:322,subscriptlist:323,suite:324,term:325,test:326,test_nocond:327,testlist:328,testlist_comp:329,testlist_star_expr:330,tfpdef:331,trailer:332,try_stmt:333,typedargslist:334,varargslist:335,
vfpdef:336,while_stmt:337,with_item:338,with_stmt:339,xor_expr:340,yield_arg:341,yield_expr:342,yield_stmt:343},number2symbol:{256:"single_input",257:"and_expr",258:"and_test",259:"annassign",260:"arglist",261:"argument",262:"arith_expr",263:"assert_stmt",264:"async_funcdef",265:"async_stmt",266:"atom",267:"atom_expr",268:"augassign",269:"break_stmt",270:"classdef",271:"comp_for",272:"comp_if",273:"comp_iter",274:"comp_op",275:"comparison",276:"compound_stmt",277:"continue_stmt",278:"debugger_stmt",
279:"decorated",280:"decorator",281:"decorators",282:"del_stmt",283:"dictorsetmaker",284:"dotted_as_name",285:"dotted_as_names",286:"dotted_name",287:"encoding_decl",288:"eval_input",289:"except_clause",290:"expr",291:"expr_stmt",292:"exprlist",293:"factor",294:"file_input",295:"flow_stmt",296:"for_stmt",297:"funcdef",298:"global_stmt",299:"if_stmt",300:"import_as_name",301:"import_as_names",302:"import_from",303:"import_name",304:"import_stmt",305:"lambdef",306:"lambdef_nocond",307:"nonlocal_stmt",
308:"not_test",309:"or_test",310:"parameters",311:"pass_stmt",312:"power",313:"print_stmt",314:"raise_stmt",315:"return_stmt",316:"shift_expr",317:"simple_stmt",318:"sliceop",319:"small_stmt",320:"star_expr",321:"stmt",322:"subscript",323:"subscriptlist",324:"suite",325:"term",326:"test",327:"test_nocond",328:"testlist",329:"testlist_comp",330:"testlist_star_expr",331:"tfpdef",332:"trailer",333:"try_stmt",334:"typedargslist",335:"varargslist",336:"vfpdef",337:"while_stmt",338:"with_item",339:"with_stmt",
340:"xor_expr",341:"yield_arg",342:"yield_expr",343:"yield_stmt"},dfas:{256:[[[[1,1],[2,1],[3,2]],[[0,1]],[[2,1]]],{2:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,30:1,31:1,32:1,33:1,34:1,35:1,36:1,37:1,38:1,39:1,40:1,41:1,42:1,43:1}],257:[[[[44,1]],[[45,0],[0,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],258:[[[[46,1]],[[47,0],[0,1]]],{6:1,7:1,8:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,
35:1,38:1,43:1}],259:[[[[48,1]],[[49,2]],[[50,3],[0,2]],[[49,4]],[[0,4]]],{48:1}],260:[[[[51,1]],[[52,2],[0,1]],[[51,1],[0,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1,53:1}],261:[[[[49,1],[15,2],[53,2]],[[50,2],[54,3],[0,1]],[[49,3]],[[0,3]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1,53:1}],262:[[[[55,1]],[[30,0],[43,0],[0,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],263:[[[[24,1]],[[49,
2]],[[52,3],[0,2]],[[49,4]],[[0,4]]],{24:1}],264:[[[[10,1]],[[56,2]],[[0,2]]],{10:1}],265:[[[[10,1]],[[57,2],[56,2],[58,2]],[[0,2]]],{10:1}],266:[[[[6,1],[25,1],[33,1],[9,1],[11,1],[12,2],[35,3],[38,4],[19,1],[7,5]],[[0,1]],[[59,1],[60,6]],[[61,1],[62,7],[63,7]],[[64,1],[63,8]],[[7,5],[0,5]],[[59,1]],[[61,1]],[[64,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,25:1,33:1,35:1,38:1}],267:[[[[29,1],[65,2]],[[65,2]],[[66,2],[0,2]]],{6:1,7:1,9:1,11:1,12:1,19:1,25:1,29:1,33:1,35:1,38:1}],268:[[[[67,1],[68,1],[69,1],
[70,1],[71,1],[72,1],[73,1],[74,1],[75,1],[76,1],[77,1],[78,1],[79,1]],[[0,1]]],{67:1,68:1,69:1,70:1,71:1,72:1,73:1,74:1,75:1,76:1,77:1,78:1,79:1}],269:[[[[39,1]],[[0,1]]],{39:1}],270:[[[[13,1]],[[25,2]],[[48,3],[35,4]],[[80,5]],[[61,6],[81,7]],[[0,5]],[[48,3]],[[61,6]]],{13:1}],271:[[[[10,1],[34,2]],[[34,2]],[[82,3]],[[83,4]],[[84,5]],[[85,6],[0,5]],[[0,6]]],{10:1,34:1}],272:[[[[37,1]],[[86,2]],[[85,3],[0,2]],[[0,3]]],{37:1}],273:[[[[87,1],[54,1]],[[0,1]]],{10:1,34:1,37:1}],274:[[[[88,1],[89,1],
[8,2],[90,1],[88,1],[83,1],[91,1],[92,3],[93,1],[94,1]],[[0,1]],[[83,1]],[[8,1],[0,3]]],{8:1,83:1,88:1,89:1,90:1,91:1,92:1,93:1,94:1}],275:[[[[95,1]],[[96,0],[0,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],276:[[[[97,1],[98,1],[58,1],[99,1],[57,1],[100,1],[56,1],[101,1],[102,1]],[[0,1]]],{4:1,10:1,13:1,20:1,21:1,34:1,37:1,41:1,42:1}],277:[[[[40,1]],[[0,1]]],{40:1}],278:[[[[17,1]],[[0,1]]],{17:1}],279:[[[[103,1]],[[56,2],[104,2],[99,2]],[[0,2]]],{41:1}],280:[[[[41,1]],
[[105,2]],[[2,4],[35,3]],[[61,5],[81,6]],[[0,4]],[[2,4]],[[61,5]]],{41:1}],281:[[[[106,1]],[[106,1],[0,1]]],{41:1}],282:[[[[27,1]],[[82,2]],[[0,2]]],{27:1}],283:[[[[49,1],[107,2],[53,3]],[[48,4],[54,5],[52,6],[0,1]],[[54,5],[52,6],[0,2]],[[95,7]],[[49,7]],[[0,5]],[[49,8],[107,8],[0,6]],[[54,5],[52,9],[0,7]],[[52,6],[0,8]],[[49,10],[53,11],[0,9]],[[48,12]],[[95,13]],[[49,13]],[[52,9],[0,13]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1,53:1}],284:[[[[105,1]],[[108,
2],[0,1]],[[25,3]],[[0,3]]],{25:1}],285:[[[[109,1]],[[52,0],[0,1]]],{25:1}],286:[[[[25,1]],[[110,0],[0,1]]],{25:1}],287:[[[[25,1]],[[0,1]]],{25:1}],288:[[[[111,1]],[[2,1],[112,2]],[[0,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],289:[[[[113,1]],[[49,2],[0,1]],[[108,3],[52,3],[0,2]],[[49,4]],[[0,4]]],{113:1}],290:[[[[114,1]],[[115,0],[0,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],291:[[[[116,1]],[[117,2],[50,3],[118,4],[0,1]],[[111,
4],[62,4]],[[116,5],[62,5]],[[0,4]],[[50,3],[0,5]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],292:[[[[95,1],[107,1]],[[52,2],[0,1]],[[95,1],[107,1],[0,2]]],{6:1,7:1,9:1,11:1,12:1,15:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],293:[[[[119,2],[30,1],[22,1],[43,1]],[[120,2]],[[0,2]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],294:[[[[2,0],[112,1],[121,0]],[[0,1]]],{2:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,
17:1,18:1,19:1,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,30:1,31:1,32:1,33:1,34:1,35:1,36:1,37:1,38:1,39:1,40:1,41:1,42:1,43:1,112:1}],295:[[[[122,1],[123,1],[124,1],[125,1],[126,1]],[[0,1]]],{5:1,23:1,31:1,39:1,40:1}],296:[[[[34,1]],[[82,2]],[[83,3]],[[111,4]],[[48,5]],[[80,6]],[[127,7],[0,6]],[[48,8]],[[80,9]],[[0,9]]],{34:1}],297:[[[[4,1]],[[25,2]],[[128,3]],[[48,4],[129,5]],[[80,6]],[[49,7]],[[0,6]],[[48,4]]],{4:1}],298:[[[[26,1]],[[25,2]],[[52,1],[0,2]]],{26:1}],299:[[[[37,1]],[[49,2]],
[[48,3]],[[80,4]],[[127,5],[130,1],[0,4]],[[48,6]],[[80,7]],[[0,7]]],{37:1}],300:[[[[25,1]],[[108,2],[0,1]],[[25,3]],[[0,3]]],{25:1}],301:[[[[131,1]],[[52,2],[0,1]],[[131,1],[0,2]]],{25:1}],302:[[[[36,1]],[[105,2],[19,3],[110,3]],[[32,4]],[[105,2],[19,3],[32,4],[110,3]],[[132,5],[15,5],[35,6]],[[0,5]],[[132,7]],[[61,5]]],{36:1}],303:[[[[32,1]],[[133,2]],[[0,2]]],{32:1}],304:[[[[134,1],[135,1]],[[0,1]]],{32:1,36:1}],305:[[[[14,1]],[[48,2],[136,3]],[[49,4]],[[48,2]],[[0,4]]],{14:1}],306:[[[[14,1]],
[[48,2],[136,3]],[[86,4]],[[48,2]],[[0,4]]],{14:1}],307:[[[[18,1]],[[25,2]],[[52,1],[0,2]]],{18:1}],308:[[[[8,1],[137,2]],[[46,2]],[[0,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],309:[[[[138,1]],[[139,0],[0,1]]],{6:1,7:1,8:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],310:[[[[35,1]],[[61,2],[140,3]],[[0,2]],[[61,2]]],{35:1}],311:[[[[28,1]],[[0,1]]],{28:1}],312:[[[[141,1]],[[53,2],[0,1]],[[120,3]],[[0,3]]],{6:1,7:1,9:1,11:1,12:1,19:1,25:1,29:1,33:1,
35:1,38:1}],313:[[[[16,1]],[[49,2],[142,3],[0,1]],[[52,4],[0,2]],[[49,5]],[[49,2],[0,4]],[[52,6],[0,5]],[[49,7]],[[52,8],[0,7]],[[49,7],[0,8]]],{16:1}],314:[[[[5,1]],[[49,2],[0,1]],[[36,3],[52,3],[0,2]],[[49,4]],[[52,5],[0,4]],[[49,6]],[[0,6]]],{5:1}],315:[[[[23,1]],[[111,2],[0,1]],[[0,2]]],{23:1}],316:[[[[143,1]],[[144,0],[142,0],[0,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],317:[[[[145,1]],[[2,2],[146,3]],[[0,2]],[[145,1],[2,2]]],{5:1,6:1,7:1,8:1,9:1,11:1,12:1,14:1,
15:1,16:1,17:1,18:1,19:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,30:1,31:1,32:1,33:1,35:1,36:1,38:1,39:1,40:1,43:1}],318:[[[[48,1]],[[49,2],[0,1]],[[0,2]]],{48:1}],319:[[[[147,1],[148,1],[149,1],[150,1],[151,1],[152,1],[153,1],[154,1],[155,1],[156,1]],[[0,1]]],{5:1,6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,16:1,17:1,18:1,19:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,30:1,31:1,32:1,33:1,35:1,36:1,38:1,39:1,40:1,43:1}],320:[[[[15,1]],[[95,2]],[[0,2]]],{15:1}],321:[[[[1,1],[3,1]],[[0,1]]],{4:1,5:1,6:1,7:1,
8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,30:1,31:1,32:1,33:1,34:1,35:1,36:1,37:1,38:1,39:1,40:1,41:1,42:1,43:1}],322:[[[[49,1],[48,2]],[[48,2],[0,1]],[[49,3],[157,4],[0,2]],[[157,4],[0,3]],[[0,4]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1,48:1}],323:[[[[158,1]],[[52,2],[0,1]],[[158,1],[0,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1,48:1}],324:[[[[1,1],[2,2]],
[[0,1]],[[159,3]],[[121,4]],[[160,1],[121,4]]],{2:1,5:1,6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,16:1,17:1,18:1,19:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,30:1,31:1,32:1,33:1,35:1,36:1,38:1,39:1,40:1,43:1}],325:[[[[120,1]],[[161,0],[15,0],[162,0],[41,0],[163,0],[0,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],326:[[[[84,1],[164,2]],[[37,3],[0,1]],[[0,2]],[[84,4]],[[127,5]],[[49,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],327:[[[[165,
1],[84,1]],[[0,1]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],328:[[[[49,1]],[[52,2],[0,1]],[[49,1],[0,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],329:[[[[49,1],[107,1]],[[54,2],[52,3],[0,1]],[[0,2]],[[49,4],[107,4],[0,3]],[[52,3],[0,4]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],330:[[[[49,1],[107,1]],[[52,2],[0,1]],[[49,1],[107,1],[0,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,19:1,
22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],331:[[[[25,1]],[[48,2],[0,1]],[[49,3]],[[0,3]]],{25:1}],332:[[[[35,1],[110,2],[38,3]],[[61,4],[81,5]],[[25,4]],[[166,6]],[[0,4]],[[61,4]],[[64,4]]],{35:1,38:1,110:1}],333:[[[[20,1]],[[48,2]],[[80,3]],[[167,4],[168,5]],[[48,6]],[[48,7]],[[80,8]],[[80,9]],[[167,4],[127,10],[168,5],[0,8]],[[0,9]],[[48,11]],[[80,12]],[[168,5],[0,12]]],{20:1}],334:[[[[15,1],[169,2],[53,3]],[[169,4],[52,5],[0,1]],[[50,6],[52,7],[0,2]],[[169,8]],[[52,5],[0,4]],[[169,9],[53,3],[0,
5]],[[49,10]],[[15,11],[169,2],[53,3],[0,7]],[[52,12],[0,8]],[[50,13],[52,5],[0,9]],[[52,7],[0,10]],[[169,14],[52,15],[0,11]],[[0,12]],[[49,4]],[[52,15],[0,14]],[[169,16],[53,3],[0,15]],[[50,17],[52,15],[0,16]],[[49,14]]],{15:1,25:1,53:1}],335:[[[[15,1],[53,2],[170,3]],[[170,5],[52,4],[0,1]],[[170,6]],[[50,7],[52,8],[0,3]],[[53,2],[170,9],[0,4]],[[52,4],[0,5]],[[52,10],[0,6]],[[49,11]],[[15,12],[53,2],[170,3],[0,8]],[[50,13],[52,4],[0,9]],[[0,10]],[[52,8],[0,11]],[[52,15],[170,14],[0,12]],[[49,5]],
[[52,15],[0,14]],[[53,2],[170,16],[0,15]],[[50,17],[52,15],[0,16]],[[49,14]]],{15:1,25:1,53:1}],336:[[[[25,1]],[[0,1]]],{25:1}],337:[[[[21,1]],[[49,2]],[[48,3]],[[80,4]],[[127,5],[0,4]],[[48,6]],[[80,7]],[[0,7]]],{21:1}],338:[[[[49,1]],[[108,2],[0,1]],[[95,3]],[[0,3]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],339:[[[[42,1]],[[171,2]],[[48,3],[52,1]],[[80,4]],[[0,4]]],{42:1}],340:[[[[172,1]],[[173,0],[0,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,
35:1,38:1,43:1}],341:[[[[111,2],[36,1]],[[49,2]],[[0,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,36:1,38:1,43:1}],342:[[[[31,1]],[[174,2],[0,1]],[[0,2]]],{31:1}],343:[[[[62,1]],[[0,1]]],{31:1}]},states:[[[[1,1],[2,1],[3,2]],[[0,1]],[[2,1]]],[[[44,1]],[[45,0],[0,1]]],[[[46,1]],[[47,0],[0,1]]],[[[48,1]],[[49,2]],[[50,3],[0,2]],[[49,4]],[[0,4]]],[[[51,1]],[[52,2],[0,1]],[[51,1],[0,2]]],[[[49,1],[15,2],[53,2]],[[50,2],[54,3],[0,1]],[[49,3]],[[0,3]]],[[[55,1]],[[30,0],[43,0],
[0,1]]],[[[24,1]],[[49,2]],[[52,3],[0,2]],[[49,4]],[[0,4]]],[[[10,1]],[[56,2]],[[0,2]]],[[[10,1]],[[57,2],[56,2],[58,2]],[[0,2]]],[[[6,1],[25,1],[33,1],[9,1],[11,1],[12,2],[35,3],[38,4],[19,1],[7,5]],[[0,1]],[[59,1],[60,6]],[[61,1],[62,7],[63,7]],[[64,1],[63,8]],[[7,5],[0,5]],[[59,1]],[[61,1]],[[64,1]]],[[[29,1],[65,2]],[[65,2]],[[66,2],[0,2]]],[[[67,1],[68,1],[69,1],[70,1],[71,1],[72,1],[73,1],[74,1],[75,1],[76,1],[77,1],[78,1],[79,1]],[[0,1]]],[[[39,1]],[[0,1]]],[[[13,1]],[[25,2]],[[48,3],[35,4]],
[[80,5]],[[61,6],[81,7]],[[0,5]],[[48,3]],[[61,6]]],[[[10,1],[34,2]],[[34,2]],[[82,3]],[[83,4]],[[84,5]],[[85,6],[0,5]],[[0,6]]],[[[37,1]],[[86,2]],[[85,3],[0,2]],[[0,3]]],[[[87,1],[54,1]],[[0,1]]],[[[88,1],[89,1],[8,2],[90,1],[88,1],[83,1],[91,1],[92,3],[93,1],[94,1]],[[0,1]],[[83,1]],[[8,1],[0,3]]],[[[95,1]],[[96,0],[0,1]]],[[[97,1],[98,1],[58,1],[99,1],[57,1],[100,1],[56,1],[101,1],[102,1]],[[0,1]]],[[[40,1]],[[0,1]]],[[[17,1]],[[0,1]]],[[[103,1]],[[56,2],[104,2],[99,2]],[[0,2]]],[[[41,1]],[[105,
2]],[[2,4],[35,3]],[[61,5],[81,6]],[[0,4]],[[2,4]],[[61,5]]],[[[106,1]],[[106,1],[0,1]]],[[[27,1]],[[82,2]],[[0,2]]],[[[49,1],[107,2],[53,3]],[[48,4],[54,5],[52,6],[0,1]],[[54,5],[52,6],[0,2]],[[95,7]],[[49,7]],[[0,5]],[[49,8],[107,8],[0,6]],[[54,5],[52,9],[0,7]],[[52,6],[0,8]],[[49,10],[53,11],[0,9]],[[48,12]],[[95,13]],[[49,13]],[[52,9],[0,13]]],[[[105,1]],[[108,2],[0,1]],[[25,3]],[[0,3]]],[[[109,1]],[[52,0],[0,1]]],[[[25,1]],[[110,0],[0,1]]],[[[25,1]],[[0,1]]],[[[111,1]],[[2,1],[112,2]],[[0,2]]],
[[[113,1]],[[49,2],[0,1]],[[108,3],[52,3],[0,2]],[[49,4]],[[0,4]]],[[[114,1]],[[115,0],[0,1]]],[[[116,1]],[[117,2],[50,3],[118,4],[0,1]],[[111,4],[62,4]],[[116,5],[62,5]],[[0,4]],[[50,3],[0,5]]],[[[95,1],[107,1]],[[52,2],[0,1]],[[95,1],[107,1],[0,2]]],[[[119,2],[30,1],[22,1],[43,1]],[[120,2]],[[0,2]]],[[[2,0],[112,1],[121,0]],[[0,1]]],[[[122,1],[123,1],[124,1],[125,1],[126,1]],[[0,1]]],[[[34,1]],[[82,2]],[[83,3]],[[111,4]],[[48,5]],[[80,6]],[[127,7],[0,6]],[[48,8]],[[80,9]],[[0,9]]],[[[4,1]],[[25,
2]],[[128,3]],[[48,4],[129,5]],[[80,6]],[[49,7]],[[0,6]],[[48,4]]],[[[26,1]],[[25,2]],[[52,1],[0,2]]],[[[37,1]],[[49,2]],[[48,3]],[[80,4]],[[127,5],[130,1],[0,4]],[[48,6]],[[80,7]],[[0,7]]],[[[25,1]],[[108,2],[0,1]],[[25,3]],[[0,3]]],[[[131,1]],[[52,2],[0,1]],[[131,1],[0,2]]],[[[36,1]],[[105,2],[19,3],[110,3]],[[32,4]],[[105,2],[19,3],[32,4],[110,3]],[[132,5],[15,5],[35,6]],[[0,5]],[[132,7]],[[61,5]]],[[[32,1]],[[133,2]],[[0,2]]],[[[134,1],[135,1]],[[0,1]]],[[[14,1]],[[48,2],[136,3]],[[49,4]],[[48,
2]],[[0,4]]],[[[14,1]],[[48,2],[136,3]],[[86,4]],[[48,2]],[[0,4]]],[[[18,1]],[[25,2]],[[52,1],[0,2]]],[[[8,1],[137,2]],[[46,2]],[[0,2]]],[[[138,1]],[[139,0],[0,1]]],[[[35,1]],[[61,2],[140,3]],[[0,2]],[[61,2]]],[[[28,1]],[[0,1]]],[[[141,1]],[[53,2],[0,1]],[[120,3]],[[0,3]]],[[[16,1]],[[49,2],[142,3],[0,1]],[[52,4],[0,2]],[[49,5]],[[49,2],[0,4]],[[52,6],[0,5]],[[49,7]],[[52,8],[0,7]],[[49,7],[0,8]]],[[[5,1]],[[49,2],[0,1]],[[36,3],[52,3],[0,2]],[[49,4]],[[52,5],[0,4]],[[49,6]],[[0,6]]],[[[23,1]],[[111,
2],[0,1]],[[0,2]]],[[[143,1]],[[144,0],[142,0],[0,1]]],[[[145,1]],[[2,2],[146,3]],[[0,2]],[[145,1],[2,2]]],[[[48,1]],[[49,2],[0,1]],[[0,2]]],[[[147,1],[148,1],[149,1],[150,1],[151,1],[152,1],[153,1],[154,1],[155,1],[156,1]],[[0,1]]],[[[15,1]],[[95,2]],[[0,2]]],[[[1,1],[3,1]],[[0,1]]],[[[49,1],[48,2]],[[48,2],[0,1]],[[49,3],[157,4],[0,2]],[[157,4],[0,3]],[[0,4]]],[[[158,1]],[[52,2],[0,1]],[[158,1],[0,2]]],[[[1,1],[2,2]],[[0,1]],[[159,3]],[[121,4]],[[160,1],[121,4]]],[[[120,1]],[[161,0],[15,0],[162,
0],[41,0],[163,0],[0,1]]],[[[84,1],[164,2]],[[37,3],[0,1]],[[0,2]],[[84,4]],[[127,5]],[[49,2]]],[[[165,1],[84,1]],[[0,1]]],[[[49,1]],[[52,2],[0,1]],[[49,1],[0,2]]],[[[49,1],[107,1]],[[54,2],[52,3],[0,1]],[[0,2]],[[49,4],[107,4],[0,3]],[[52,3],[0,4]]],[[[49,1],[107,1]],[[52,2],[0,1]],[[49,1],[107,1],[0,2]]],[[[25,1]],[[48,2],[0,1]],[[49,3]],[[0,3]]],[[[35,1],[110,2],[38,3]],[[61,4],[81,5]],[[25,4]],[[166,6]],[[0,4]],[[61,4]],[[64,4]]],[[[20,1]],[[48,2]],[[80,3]],[[167,4],[168,5]],[[48,6]],[[48,7]],
[[80,8]],[[80,9]],[[167,4],[127,10],[168,5],[0,8]],[[0,9]],[[48,11]],[[80,12]],[[168,5],[0,12]]],[[[15,1],[169,2],[53,3]],[[169,4],[52,5],[0,1]],[[50,6],[52,7],[0,2]],[[169,8]],[[52,5],[0,4]],[[169,9],[53,3],[0,5]],[[49,10]],[[15,11],[169,2],[53,3],[0,7]],[[52,12],[0,8]],[[50,13],[52,5],[0,9]],[[52,7],[0,10]],[[169,14],[52,15],[0,11]],[[0,12]],[[49,4]],[[52,15],[0,14]],[[169,16],[53,3],[0,15]],[[50,17],[52,15],[0,16]],[[49,14]]],[[[15,1],[53,2],[170,3]],[[170,5],[52,4],[0,1]],[[170,6]],[[50,7],[52,
8],[0,3]],[[53,2],[170,9],[0,4]],[[52,4],[0,5]],[[52,10],[0,6]],[[49,11]],[[15,12],[53,2],[170,3],[0,8]],[[50,13],[52,4],[0,9]],[[0,10]],[[52,8],[0,11]],[[52,15],[170,14],[0,12]],[[49,5]],[[52,15],[0,14]],[[53,2],[170,16],[0,15]],[[50,17],[52,15],[0,16]],[[49,14]]],[[[25,1]],[[0,1]]],[[[21,1]],[[49,2]],[[48,3]],[[80,4]],[[127,5],[0,4]],[[48,6]],[[80,7]],[[0,7]]],[[[49,1]],[[108,2],[0,1]],[[95,3]],[[0,3]]],[[[42,1]],[[171,2]],[[48,3],[52,1]],[[80,4]],[[0,4]]],[[[172,1]],[[173,0],[0,1]]],[[[111,2],
[36,1]],[[49,2]],[[0,2]]],[[[31,1]],[[174,2],[0,1]],[[0,2]]],[[[62,1]],[[0,1]]]],labels:[[0,"EMPTY"],[317,null],[4,null],[276,null],[1,"def"],[1,"raise"],[1,"True"],[3,null],[1,"not"],[1,"null"],[55,null],[2,null],[25,null],[1,"class"],[1,"lambda"],[16,null],[1,"print"],[1,"debugger"],[1,"nonlocal"],[52,null],[1,"try"],[1,"while"],[31,null],[1,"return"],[1,"assert"],[1,null],[1,"global"],[1,"del"],[1,"pass"],[54,null],[15,null],[1,"yield"],[1,"import"],[1,"False"],[1,"for"],[7,null],[1,"from"],[1,
"if"],[9,null],[1,"break"],[1,"continue"],[49,null],[1,"with"],[14,null],[316,null],[19,null],[308,null],[1,"and"],[11,null],[326,null],[22,null],[261,null],[12,null],[35,null],[271,null],[325,null],[297,null],[339,null],[296,null],[26,null],[283,null],[8,null],[342,null],[329,null],[10,null],[266,null],[332,null],[45,null],[38,null],[40,null],[50,null],[46,null],[41,null],[42,null],[36,null],[43,null],[48,null],[44,null],[37,null],[39,null],[324,null],[260,null],[292,null],[1,"in"],[309,null],[273,
null],[327,null],[272,null],[28,null],[21,null],[27,null],[29,null],[1,"is"],[30,null],[20,null],[290,null],[274,null],[333,null],[299,null],[270,null],[337,null],[279,null],[265,null],[281,null],[264,null],[286,null],[280,null],[320,null],[1,"as"],[284,null],[23,null],[328,null],[0,null],[1,"except"],[340,null],[18,null],[330,null],[268,null],[259,null],[312,null],[293,null],[321,null],[269,null],[277,null],[314,null],[315,null],[343,null],[1,"else"],[310,null],[51,null],[1,"elif"],[300,null],[301,
null],[285,null],[303,null],[302,null],[335,null],[275,null],[258,null],[1,"or"],[334,null],[267,null],[34,null],[262,null],[33,null],[319,null],[13,null],[295,null],[263,null],[291,null],[311,null],[307,null],[313,null],[282,null],[298,null],[304,null],[278,null],[318,null],[322,null],[5,null],[6,null],[47,null],[17,null],[24,null],[305,null],[306,null],[323,null],[289,null],[1,"finally"],[331,null],[336,null],[338,null],[257,null],[32,null],[341,null]],keywords:{False:33,"null":9,True:6,and:47,
as:108,assert:24,"break":39,"class":13,"continue":40,"debugger":17,def:4,del:27,elif:130,"else":127,except:113,"finally":168,"for":34,from:36,global:26,"if":37,"import":32,"in":83,is:92,lambda:14,nonlocal:18,not:8,or:139,pass:28,print:16,raise:5,"return":23,"try":20,"while":21,"with":42,yield:31},tokens:{0:112,1:25,2:11,3:7,4:2,5:159,6:160,7:35,8:61,9:38,10:64,11:48,12:52,13:146,14:43,15:30,16:15,17:162,18:115,19:45,20:94,21:89,22:50,23:110,24:163,25:12,26:59,27:90,28:88,29:91,30:93,31:22,32:173,
33:144,34:142,35:53,36:74,37:78,38:68,39:79,40:69,41:72,42:73,43:75,44:77,45:67,46:71,47:161,48:76,49:41,50:70,51:129,52:19,54:29,55:10},start:256}},function(m,q){function a(a,c){this.filename=a;this.grammar=c;this.p_flags=0;return this}function c(b,c){void 0===c&&(c="file_input");b=new a(b,Sk.ParseTables);"file_input"===c?b.setup(Sk.ParseTables.sym.file_input):Sk.asserts.fail("todo;");return b}a.FUTURE_PRINT_FUNCTION="print_function";a.FUTURE_UNICODE_LITERALS="unicode_literals";a.FUTURE_DIVISION=
"division";a.FUTURE_ABSOLUTE_IMPORT="absolute_import";a.FUTURE_WITH_STATEMENT="with_statement";a.FUTURE_NESTED_SCOPES="nested_scopes";a.FUTURE_GENERATORS="generators";a.CO_FUTURE_PRINT_FUNCTION=65536;a.CO_FUTURE_UNICODE_LITERALS=131072;a.CO_FUTURE_DIVISON=8192;a.CO_FUTURE_ABSOLUTE_IMPORT=16384;a.CO_FUTURE_WITH_STATEMENT=32768;a.prototype.setup=function(a){a=a||this.grammar.start;this.stack=[{dfa:this.grammar.dfas[a],state:0,node:{type:a,value:null,context:null,children:[]}}];this.used_names={}};a.prototype.addtoken=
function(a,c,f){var b,e=this.classify(a,c,f);a:for(;;){var d=this.stack[this.stack.length-1];var g=d.dfa[0];var n=g[d.state];for(b=0;b<n.length;++b){var k=n[b][0];var p=n[b][1];var m=this.grammar.labels[k][0];if(e===k){Sk.asserts.assert(256>m);this.shift(a,c,p,f);for(f=p;1===g[f].length&&0===g[f][0][0]&&g[f][0][1]===f;){this.pop();if(0===this.stack.length)return!0;d=this.stack[this.stack.length-1];f=d.state;g=d.dfa[0]}return!1}if(256<=m&&(k=this.grammar.dfas[m],k=k[1],k.hasOwnProperty(e))){this.push(m,
this.grammar.dfas[m],p,f);continue a}}b:{g=[0,d.state];for(d=n.length;d--;)if(n[d][0]===g[0]&&n[d][1]===g[1]){n=!0;break b}n=!1}if(n){if(this.pop(),0===this.stack.length)throw new Sk.builtin.SyntaxError("too much input",this.filename);}else throw a=f[0][0],new Sk.builtin.SyntaxError("bad input",this.filename,a,f);}};a.prototype.classify=function(b,c,f){if(b===Sk.token.tokens.T_NAME){this.used_names[c]=!0;var e=this.grammar.keywords.hasOwnProperty(c)&&this.grammar.keywords[c];"print"===c&&(this.p_flags&
a.CO_FUTURE_PRINT_FUNCTION||!0===Sk.__future__.print_function)&&(e=!1);if(e)return e}e=this.grammar.tokens.hasOwnProperty(b)&&this.grammar.tokens[b];if(!e){c="#"+b;for(let a in Sk.token.tokens)if(Sk.token.tokens[a]==b){c=a;break}throw new Sk.builtin.SyntaxError("bad token "+c,this.filename,f[0][0],f);}return e};a.prototype.shift=function(a,c,f,l){var b=this.stack[this.stack.length-1].dfa,d=this.stack[this.stack.length-1].node;d.children.push({type:a,value:c,lineno:l[0][0],col_offset:l[0][1],children:null});
this.stack[this.stack.length-1]={dfa:b,state:f,node:d}};a.prototype.push=function(a,c,f,l){a={type:a,value:null,lineno:l[0][0],col_offset:l[0][1],children:[]};this.stack[this.stack.length-1]={dfa:this.stack[this.stack.length-1].dfa,state:f,node:this.stack[this.stack.length-1].node};this.stack.push({dfa:c,state:0,node:a})};a.prototype.pop=function(){var a=this.stack.pop().node;if(a)if(0!==this.stack.length){var c=this.stack[this.stack.length-1].node;c.children.push(a)}else this.rootnode=a,this.rootnode.used_names=
this.used_names};Sk.parse=function(a,e){var b=Sk.token.tokens.T_COMMENT,l=Sk.token.tokens.T_NL,h=Sk.token.tokens.T_OP,d=Sk.token.tokens.T_ENDMARKER,g=Sk.token.tokens.T_ENCODING,n=!1,k=c(a);Sk._tokenize(a,function(a){var b=a.split("\n").reverse().map(function(a){return a+"\n"});return function(){if(0===b.length)throw new Sk.builtin.Exception("EOF");return b.pop()}}(e),"utf-8",function(a){var c=null;a.type!==b&&a.type!==l&&a.type!==g&&(a.type===h&&(c=Sk.OpMap[a.string]),k.addtoken(c||a.type,a.string,
[a.start,a.end,a.line]),a.type===d&&(n=!0))});if(!n)throw new Sk.builtin.SyntaxError("incomplete input",this.filename);return{cst:k.rootnode,flags:k.p_flags}};Sk.parseTreeDump=function(a,c){var b;c=c||"";var e=""+c;if(256<=a.type)for(e+=Sk.ParseTables.number2symbol[a.type]+"\n",b=0;b<a.children.length;++b)e+=Sk.parseTreeDump(a.children[b],c+"  ");else e+=Sk.token.tok_name[a.type]+": "+(new Sk.builtin.str(a.value)).$r().v+"\n";return e};Sk.exportSymbol("Sk.Parser",a);Sk.exportSymbol("Sk.parse",Sk.parse);
Sk.exportSymbol("Sk.parseTreeDump",Sk.parseTreeDump)},function(m,q){Sk.astnodes={};Sk.astnodes.Load=function(){};Sk.astnodes.Store=function(){};Sk.astnodes.Del=function(){};Sk.astnodes.AugLoad=function(){};Sk.astnodes.AugStore=function(){};Sk.astnodes.Param=function(){};Sk.astnodes.And=function(){};Sk.astnodes.Or=function(){};Sk.astnodes.Add=function(){};Sk.astnodes.Sub=function(){};Sk.astnodes.Mult=function(){};Sk.astnodes.MatMult=function(){};Sk.astnodes.Div=function(){};Sk.astnodes.Mod=function(){};
Sk.astnodes.Pow=function(){};Sk.astnodes.LShift=function(){};Sk.astnodes.RShift=function(){};Sk.astnodes.BitOr=function(){};Sk.astnodes.BitXor=function(){};Sk.astnodes.BitAnd=function(){};Sk.astnodes.FloorDiv=function(){};Sk.astnodes.Invert=function(){};Sk.astnodes.Not=function(){};Sk.astnodes.UAdd=function(){};Sk.astnodes.USub=function(){};Sk.astnodes.Eq=function(){};Sk.astnodes.NotEq=function(){};Sk.astnodes.Lt=function(){};Sk.astnodes.LtE=function(){};Sk.astnodes.Gt=function(){};Sk.astnodes.GtE=
function(){};Sk.astnodes.Is=function(){};Sk.astnodes.IsNot=function(){};Sk.astnodes.In=function(){};Sk.astnodes.NotIn=function(){};Sk.astnodes.Module=function(a,c){this.body=a;this.docstring=c;return this};Sk.astnodes.Interactive=function(a){this.body=a;return this};Sk.astnodes.Expression=function(a){this.body=a;return this};Sk.astnodes.Suite=function(a){this.body=a;return this};Sk.astnodes.FunctionDef=function(a,c,b,e,f,l,h,d){Sk.asserts.assert(null!==h&&void 0!==h);Sk.asserts.assert(null!==d&&void 0!==
d);this.name=a;this.args=c;this.body=b;this.decorator_list=e;this.returns=f;this.docstring=l;this.lineno=h;this.col_offset=d;return this};Sk.astnodes.AsyncFunctionDef=function(a,c,b,e,f,l,h,d){Sk.asserts.assert(null!==h&&void 0!==h);Sk.asserts.assert(null!==d&&void 0!==d);this.name=a;this.args=c;this.body=b;this.decorator_list=e;this.returns=f;this.docstring=l;this.lineno=h;this.col_offset=d;return this};Sk.astnodes.ClassDef=function(a,c,b,e,f,l,h,d){Sk.asserts.assert(null!==h&&void 0!==h);Sk.asserts.assert(null!==
d&&void 0!==d);this.name=a;this.bases=c;this.keywords=b;this.body=e;this.decorator_list=f;this.docstring=l;this.lineno=h;this.col_offset=d;return this};Sk.astnodes.Return=function(a,c,b){Sk.asserts.assert(null!==c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==b);this.value=a;this.lineno=c;this.col_offset=b;return this};Sk.astnodes.Delete=function(a,c,b){Sk.asserts.assert(null!==c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==b);this.targets=a;this.lineno=c;this.col_offset=b;return this};Sk.astnodes.Assign=
function(a,c,b,e){Sk.asserts.assert(null!==b&&void 0!==b);Sk.asserts.assert(null!==e&&void 0!==e);this.targets=a;this.value=c;this.lineno=b;this.col_offset=e;return this};Sk.astnodes.AugAssign=function(a,c,b,e,f){Sk.asserts.assert(null!==e&&void 0!==e);Sk.asserts.assert(null!==f&&void 0!==f);this.target=a;this.op=c;this.value=b;this.lineno=e;this.col_offset=f;return this};Sk.astnodes.AnnAssign=function(a,c,b,e,f,l){Sk.asserts.assert(null!==f&&void 0!==f);Sk.asserts.assert(null!==l&&void 0!==l);this.target=
a;this.annotation=c;this.value=b;this.simple=e;this.lineno=f;this.col_offset=l;return this};Sk.astnodes.For=function(a,c,b,e,f,l){Sk.asserts.assert(null!==f&&void 0!==f);Sk.asserts.assert(null!==l&&void 0!==l);this.target=a;this.iter=c;this.body=b;this.orelse=e;this.lineno=f;this.col_offset=l;return this};Sk.astnodes.AsyncFor=function(a,c,b,e,f,l){Sk.asserts.assert(null!==f&&void 0!==f);Sk.asserts.assert(null!==l&&void 0!==l);this.target=a;this.iter=c;this.body=b;this.orelse=e;this.lineno=f;this.col_offset=
l;return this};Sk.astnodes.While=function(a,c,b,e,f){Sk.asserts.assert(null!==e&&void 0!==e);Sk.asserts.assert(null!==f&&void 0!==f);this.test=a;this.body=c;this.orelse=b;this.lineno=e;this.col_offset=f;return this};Sk.astnodes.If=function(a,c,b,e,f){Sk.asserts.assert(null!==e&&void 0!==e);Sk.asserts.assert(null!==f&&void 0!==f);this.test=a;this.body=c;this.orelse=b;this.lineno=e;this.col_offset=f;return this};Sk.astnodes.With=function(a,c,b,e){Sk.asserts.assert(null!==b&&void 0!==b);Sk.asserts.assert(null!==
e&&void 0!==e);this.items=a;this.body=c;this.lineno=b;this.col_offset=e;return this};Sk.astnodes.AsyncWith=function(a,c,b,e){Sk.asserts.assert(null!==b&&void 0!==b);Sk.asserts.assert(null!==e&&void 0!==e);this.items=a;this.body=c;this.lineno=b;this.col_offset=e;return this};Sk.astnodes.Raise=function(a,c,b,e,f,l){Sk.asserts.assert(null!==f&&void 0!==f);Sk.asserts.assert(null!==l&&void 0!==l);this.exc=a;this.cause=c;this.inst=b;this.tback=e;this.lineno=f;this.col_offset=l;return this};Sk.astnodes.Try=
function(a,c,b,e,f,l){Sk.asserts.assert(null!==f&&void 0!==f);Sk.asserts.assert(null!==l&&void 0!==l);this.body=a;this.handlers=c;this.orelse=b;this.finalbody=e;this.lineno=f;this.col_offset=l;return this};Sk.astnodes.Assert=function(a,c,b,e){Sk.asserts.assert(null!==b&&void 0!==b);Sk.asserts.assert(null!==e&&void 0!==e);this.test=a;this.msg=c;this.lineno=b;this.col_offset=e;return this};Sk.astnodes.Import=function(a,c,b){Sk.asserts.assert(null!==c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==
b);this.names=a;this.lineno=c;this.col_offset=b;return this};Sk.astnodes.ImportFrom=function(a,c,b,e,f){Sk.asserts.assert(null!==e&&void 0!==e);Sk.asserts.assert(null!==f&&void 0!==f);this.module=a;this.names=c;this.level=b;this.lineno=e;this.col_offset=f;return this};Sk.astnodes.Global=function(a,c,b){Sk.asserts.assert(null!==c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==b);this.names=a;this.lineno=c;this.col_offset=b;return this};Sk.astnodes.Nonlocal=function(a,c,b){Sk.asserts.assert(null!==
c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==b);this.names=a;this.lineno=c;this.col_offset=b;return this};Sk.astnodes.Expr=function(a,c,b){Sk.asserts.assert(null!==c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==b);this.value=a;this.lineno=c;this.col_offset=b;return this};Sk.astnodes.Pass=function(a,c){Sk.asserts.assert(null!==a&&void 0!==a);Sk.asserts.assert(null!==c&&void 0!==c);this.lineno=a;this.col_offset=c;return this};Sk.astnodes.Break=function(a,c){Sk.asserts.assert(null!==a&&void 0!==
a);Sk.asserts.assert(null!==c&&void 0!==c);this.lineno=a;this.col_offset=c;return this};Sk.astnodes.Continue=function(a,c){Sk.asserts.assert(null!==a&&void 0!==a);Sk.asserts.assert(null!==c&&void 0!==c);this.lineno=a;this.col_offset=c;return this};Sk.astnodes.Print=function(a,c,b,e,f){Sk.asserts.assert(null!==e&&void 0!==e);Sk.asserts.assert(null!==f&&void 0!==f);this.dest=a;this.values=c;this.nl=b;this.lineno=e;this.col_offset=f;return this};Sk.astnodes.Debugger=function(a,c){Sk.asserts.assert(null!==
a&&void 0!==a);Sk.asserts.assert(null!==c&&void 0!==c);this.lineno=a;this.col_offset=c;return this};Sk.astnodes.BoolOp=function(a,c,b,e){Sk.asserts.assert(null!==b&&void 0!==b);Sk.asserts.assert(null!==e&&void 0!==e);this.op=a;this.values=c;this.lineno=b;this.col_offset=e;return this};Sk.astnodes.BinOp=function(a,c,b,e,f){Sk.asserts.assert(null!==e&&void 0!==e);Sk.asserts.assert(null!==f&&void 0!==f);this.left=a;this.op=c;this.right=b;this.lineno=e;this.col_offset=f;return this};Sk.astnodes.UnaryOp=
function(a,c,b,e){Sk.asserts.assert(null!==b&&void 0!==b);Sk.asserts.assert(null!==e&&void 0!==e);this.op=a;this.operand=c;this.lineno=b;this.col_offset=e;return this};Sk.astnodes.Lambda=function(a,c,b,e){Sk.asserts.assert(null!==b&&void 0!==b);Sk.asserts.assert(null!==e&&void 0!==e);this.args=a;this.body=c;this.lineno=b;this.col_offset=e;return this};Sk.astnodes.IfExp=function(a,c,b,e,f){Sk.asserts.assert(null!==e&&void 0!==e);Sk.asserts.assert(null!==f&&void 0!==f);this.test=a;this.body=c;this.orelse=
b;this.lineno=e;this.col_offset=f;return this};Sk.astnodes.Dict=function(a,c,b,e){Sk.asserts.assert(null!==b&&void 0!==b);Sk.asserts.assert(null!==e&&void 0!==e);this.keys=a;this.values=c;this.lineno=b;this.col_offset=e;return this};Sk.astnodes.Set=function(a,c,b){Sk.asserts.assert(null!==c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==b);this.elts=a;this.lineno=c;this.col_offset=b;return this};Sk.astnodes.ListComp=function(a,c,b,e){Sk.asserts.assert(null!==b&&void 0!==b);Sk.asserts.assert(null!==
e&&void 0!==e);this.elt=a;this.generators=c;this.lineno=b;this.col_offset=e;return this};Sk.astnodes.SetComp=function(a,c,b,e){Sk.asserts.assert(null!==b&&void 0!==b);Sk.asserts.assert(null!==e&&void 0!==e);this.elt=a;this.generators=c;this.lineno=b;this.col_offset=e;return this};Sk.astnodes.DictComp=function(a,c,b,e,f){Sk.asserts.assert(null!==e&&void 0!==e);Sk.asserts.assert(null!==f&&void 0!==f);this.key=a;this.value=c;this.generators=b;this.lineno=e;this.col_offset=f;return this};Sk.astnodes.GeneratorExp=
function(a,c,b,e){Sk.asserts.assert(null!==b&&void 0!==b);Sk.asserts.assert(null!==e&&void 0!==e);this.elt=a;this.generators=c;this.lineno=b;this.col_offset=e;return this};Sk.astnodes.Await=function(a,c,b){Sk.asserts.assert(null!==c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==b);this.value=a;this.lineno=c;this.col_offset=b;return this};Sk.astnodes.Yield=function(a,c,b){Sk.asserts.assert(null!==c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==b);this.value=a;this.lineno=c;this.col_offset=
b;return this};Sk.astnodes.YieldFrom=function(a,c,b){Sk.asserts.assert(null!==c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==b);this.value=a;this.lineno=c;this.col_offset=b;return this};Sk.astnodes.Compare=function(a,c,b,e,f){Sk.asserts.assert(null!==e&&void 0!==e);Sk.asserts.assert(null!==f&&void 0!==f);this.left=a;this.ops=c;this.comparators=b;this.lineno=e;this.col_offset=f;return this};Sk.astnodes.Call=function(a,c,b,e,f){Sk.asserts.assert(null!==e&&void 0!==e);Sk.asserts.assert(null!==f&&
void 0!==f);this.func=a;this.args=c;this.keywords=b;this.lineno=e;this.col_offset=f;return this};Sk.astnodes.Num=function(a,c,b){Sk.asserts.assert(null!==c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==b);this.n=a;this.lineno=c;this.col_offset=b;return this};Sk.astnodes.Str=function(a,c,b){Sk.asserts.assert(null!==c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==b);this.s=a;this.lineno=c;this.col_offset=b;return this};Sk.astnodes.FormattedValue=function(a,c,b,e,f){Sk.asserts.assert(null!==
e&&void 0!==e);Sk.asserts.assert(null!==f&&void 0!==f);this.value=a;this.conversion=c;this.format_spec=b;this.lineno=e;this.col_offset=f;return this};Sk.astnodes.JoinedStr=function(a,c,b){Sk.asserts.assert(null!==c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==b);this.values=a;this.lineno=c;this.col_offset=b;return this};Sk.astnodes.Bytes=function(a,c,b){Sk.asserts.assert(null!==c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==b);this.s=a;this.lineno=c;this.col_offset=b;return this};Sk.astnodes.NameConstant=
function(a,c,b){Sk.asserts.assert(null!==c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==b);this.value=a;this.lineno=c;this.col_offset=b;return this};Sk.astnodes.Ellipsis=function(a,c){Sk.asserts.assert(null!==a&&void 0!==a);Sk.asserts.assert(null!==c&&void 0!==c);this.lineno=a;this.col_offset=c;return this};Sk.astnodes.Constant=function(a,c,b){Sk.asserts.assert(null!==c&&void 0!==c);Sk.asserts.assert(null!==b&&void 0!==b);this.value=a;this.lineno=c;this.col_offset=b;return this};Sk.astnodes.Attribute=
function(a,c,b,e,f){Sk.asserts.assert(null!==e&&void 0!==e);Sk.asserts.assert(null!==f&&void 0!==f);this.value=a;this.attr=c;this.ctx=b;this.lineno=e;this.col_offset=f;return this};Sk.astnodes.Subscript=function(a,c,b,e,f){Sk.asserts.assert(null!==e&&void 0!==e);Sk.asserts.assert(null!==f&&void 0!==f);this.value=a;this.slice=c;this.ctx=b;this.lineno=e;this.col_offset=f;return this};Sk.astnodes.Starred=function(a,c,b,e){Sk.asserts.assert(null!==b&&void 0!==b);Sk.asserts.assert(null!==e&&void 0!==e);
this.value=a;this.ctx=c;this.lineno=b;this.col_offset=e;return this};Sk.astnodes.Name=function(a,c,b,e){Sk.asserts.assert(null!==b&&void 0!==b);Sk.asserts.assert(null!==e&&void 0!==e);this.id=a;this.ctx=c;this.lineno=b;this.col_offset=e;return this};Sk.astnodes.List=function(a,c,b,e){Sk.asserts.assert(null!==b&&void 0!==b);Sk.asserts.assert(null!==e&&void 0!==e);this.elts=a;this.ctx=c;this.lineno=b;this.col_offset=e;return this};Sk.astnodes.Tuple=function(a,c,b,e){Sk.asserts.assert(null!==b&&void 0!==
b);Sk.asserts.assert(null!==e&&void 0!==e);this.elts=a;this.ctx=c;this.lineno=b;this.col_offset=e;return this};Sk.astnodes.Slice=function(a,c,b){this.lower=a;this.upper=c;this.step=b;return this};Sk.astnodes.ExtSlice=function(a){this.dims=a;return this};Sk.astnodes.Index=function(a){this.value=a;return this};Sk.astnodes.comprehension=function(a,c,b,e){this.target=a;this.iter=c;this.ifs=b;this.is_async=e;return this};Sk.astnodes.ExceptHandler=function(a,c,b,e,f){Sk.asserts.assert(null!==e&&void 0!==
e);Sk.asserts.assert(null!==f&&void 0!==f);this.type=a;this.name=c;this.body=b;this.lineno=e;this.col_offset=f;return this};Sk.astnodes.arguments_=function(a,c,b,e,f,l){this.args=a;this.vararg=c;this.kwonlyargs=b;this.kw_defaults=e;this.kwarg=f;this.defaults=l;return this};Sk.astnodes.arg=function a(a,c){this.arg=a;this.annotation=c;return this};Sk.astnodes.keyword=function(a,c){this.arg=a;this.value=c;return this};Sk.astnodes.alias=function(a,c){this.name=a;this.asname=c;return this};Sk.astnodes.withitem=
function(a,c){this.context_expr=a;this.optional_vars=c;return this};Sk.astnodes.Module.prototype._astname="Module";Sk.astnodes.Module.prototype._fields=["body",function(a){return a.body},"docstring",function(a){return a.docstring}];Sk.astnodes.Interactive.prototype._astname="Interactive";Sk.astnodes.Interactive.prototype._fields=["body",function(a){return a.body}];Sk.astnodes.Expression.prototype._astname="Expression";Sk.astnodes.Expression.prototype._fields=["body",function(a){return a.body}];Sk.astnodes.Suite.prototype._astname=
"Suite";Sk.astnodes.Suite.prototype._fields=["body",function(a){return a.body}];Sk.astnodes.FunctionDef.prototype._astname="FunctionDef";Sk.astnodes.FunctionDef.prototype._fields=["name",function(a){return a.name},"args",function(a){return a.args},"body",function(a){return a.body},"decorator_list",function(a){return a.decorator_list},"returns",function(a){return a.returns},"docstring",function(a){return a.docstring}];Sk.astnodes.AsyncFunctionDef.prototype._astname="AsyncFunctionDef";Sk.astnodes.AsyncFunctionDef.prototype._fields=
["name",function(a){return a.name},"args",function(a){return a.args},"body",function(a){return a.body},"decorator_list",function(a){return a.decorator_list},"returns",function(a){return a.returns},"docstring",function(a){return a.docstring}];Sk.astnodes.ClassDef.prototype._astname="ClassDef";Sk.astnodes.ClassDef.prototype._fields=["name",function(a){return a.name},"bases",function(a){return a.bases},"keywords",function(a){return a.keywords},"body",function(a){return a.body},"decorator_list",function(a){return a.decorator_list},
"docstring",function(a){return a.docstring}];Sk.astnodes.Return.prototype._astname="Return";Sk.astnodes.Return.prototype._fields=["value",function(a){return a.value}];Sk.astnodes.Delete.prototype._astname="Delete";Sk.astnodes.Delete.prototype._fields=["targets",function(a){return a.targets}];Sk.astnodes.Assign.prototype._astname="Assign";Sk.astnodes.Assign.prototype._fields=["targets",function(a){return a.targets},"value",function(a){return a.value}];Sk.astnodes.AugAssign.prototype._astname="AugAssign";
Sk.astnodes.AugAssign.prototype._fields=["target",function(a){return a.target},"op",function(a){return a.op},"value",function(a){return a.value}];Sk.astnodes.AnnAssign.prototype._astname="AnnAssign";Sk.astnodes.AnnAssign.prototype._fields=["target",function(a){return a.target},"annotation",function(a){return a.annotation},"value",function(a){return a.value},"simple",function(a){return a.simple}];Sk.astnodes.For.prototype._astname="For";Sk.astnodes.For.prototype._fields=["target",function(a){return a.target},
"iter",function(a){return a.iter},"body",function(a){return a.body},"orelse",function(a){return a.orelse}];Sk.astnodes.AsyncFor.prototype._astname="AsyncFor";Sk.astnodes.AsyncFor.prototype._fields=["target",function(a){return a.target},"iter",function(a){return a.iter},"body",function(a){return a.body},"orelse",function(a){return a.orelse}];Sk.astnodes.While.prototype._astname="While";Sk.astnodes.While.prototype._fields=["test",function(a){return a.test},"body",function(a){return a.body},"orelse",
function(a){return a.orelse}];Sk.astnodes.If.prototype._astname="If";Sk.astnodes.If.prototype._fields=["test",function(a){return a.test},"body",function(a){return a.body},"orelse",function(a){return a.orelse}];Sk.astnodes.With.prototype._astname="With";Sk.astnodes.With.prototype._fields=["items",function(a){return a.items},"body",function(a){return a.body}];Sk.astnodes.AsyncWith.prototype._astname="AsyncWith";Sk.astnodes.AsyncWith.prototype._fields=["items",function(a){return a.items},"body",function(a){return a.body}];
Sk.astnodes.Raise.prototype._astname="Raise";Sk.astnodes.Raise.prototype._fields=["exc",function(a){return a.exc},"cause",function(a){return a.cause},"inst",function(a){return a.inst},"tback",function(a){return a.tback}];Sk.astnodes.Try.prototype._astname="Try";Sk.astnodes.Try.prototype._fields=["body",function(a){return a.body},"handlers",function(a){return a.handlers},"orelse",function(a){return a.orelse},"finalbody",function(a){return a.finalbody}];Sk.astnodes.Assert.prototype._astname="Assert";
Sk.astnodes.Assert.prototype._fields=["test",function(a){return a.test},"msg",function(a){return a.msg}];Sk.astnodes.Import.prototype._astname="Import";Sk.astnodes.Import.prototype._fields=["names",function(a){return a.names}];Sk.astnodes.ImportFrom.prototype._astname="ImportFrom";Sk.astnodes.ImportFrom.prototype._fields=["module",function(a){return a.module},"names",function(a){return a.names},"level",function(a){return a.level}];Sk.astnodes.Global.prototype._astname="Global";Sk.astnodes.Global.prototype._fields=
["names",function(a){return a.names}];Sk.astnodes.Nonlocal.prototype._astname="Nonlocal";Sk.astnodes.Nonlocal.prototype._fields=["names",function(a){return a.names}];Sk.astnodes.Expr.prototype._astname="Expr";Sk.astnodes.Expr.prototype._fields=["value",function(a){return a.value}];Sk.astnodes.Pass.prototype._astname="Pass";Sk.astnodes.Pass.prototype._fields=[];Sk.astnodes.Break.prototype._astname="Break";Sk.astnodes.Break.prototype._fields=[];Sk.astnodes.Continue.prototype._astname="Continue";Sk.astnodes.Continue.prototype._fields=
[];Sk.astnodes.Print.prototype._astname="Print";Sk.astnodes.Print.prototype._fields=["dest",function(a){return a.dest},"values",function(a){return a.values},"nl",function(a){return a.nl}];Sk.astnodes.Debugger.prototype._astname="Debugger";Sk.astnodes.Debugger.prototype._fields=[];Sk.astnodes.BoolOp.prototype._astname="BoolOp";Sk.astnodes.BoolOp.prototype._fields=["op",function(a){return a.op},"values",function(a){return a.values}];Sk.astnodes.BinOp.prototype._astname="BinOp";Sk.astnodes.BinOp.prototype._fields=
["left",function(a){return a.left},"op",function(a){return a.op},"right",function(a){return a.right}];Sk.astnodes.UnaryOp.prototype._astname="UnaryOp";Sk.astnodes.UnaryOp.prototype._fields=["op",function(a){return a.op},"operand",function(a){return a.operand}];Sk.astnodes.Lambda.prototype._astname="Lambda";Sk.astnodes.Lambda.prototype._fields=["args",function(a){return a.args},"body",function(a){return a.body}];Sk.astnodes.IfExp.prototype._astname="IfExp";Sk.astnodes.IfExp.prototype._fields=["test",
function(a){return a.test},"body",function(a){return a.body},"orelse",function(a){return a.orelse}];Sk.astnodes.Dict.prototype._astname="Dict";Sk.astnodes.Dict.prototype._fields=["keys",function(a){return a.keys},"values",function(a){return a.values}];Sk.astnodes.Set.prototype._astname="Set";Sk.astnodes.Set.prototype._fields=["elts",function(a){return a.elts}];Sk.astnodes.ListComp.prototype._astname="ListComp";Sk.astnodes.ListComp.prototype._fields=["elt",function(a){return a.elt},"generators",function(a){return a.generators}];
Sk.astnodes.SetComp.prototype._astname="SetComp";Sk.astnodes.SetComp.prototype._fields=["elt",function(a){return a.elt},"generators",function(a){return a.generators}];Sk.astnodes.DictComp.prototype._astname="DictComp";Sk.astnodes.DictComp.prototype._fields=["key",function(a){return a.key},"value",function(a){return a.value},"generators",function(a){return a.generators}];Sk.astnodes.GeneratorExp.prototype._astname="GeneratorExp";Sk.astnodes.GeneratorExp.prototype._fields=["elt",function(a){return a.elt},
"generators",function(a){return a.generators}];Sk.astnodes.Await.prototype._astname="Await";Sk.astnodes.Await.prototype._fields=["value",function(a){return a.value}];Sk.astnodes.Yield.prototype._astname="Yield";Sk.astnodes.Yield.prototype._fields=["value",function(a){return a.value}];Sk.astnodes.YieldFrom.prototype._astname="YieldFrom";Sk.astnodes.YieldFrom.prototype._fields=["value",function(a){return a.value}];Sk.astnodes.Compare.prototype._astname="Compare";Sk.astnodes.Compare.prototype._fields=
["left",function(a){return a.left},"ops",function(a){return a.ops},"comparators",function(a){return a.comparators}];Sk.astnodes.Call.prototype._astname="Call";Sk.astnodes.Call.prototype._fields=["func",function(a){return a.func},"args",function(a){return a.args},"keywords",function(a){return a.keywords}];Sk.astnodes.Num.prototype._astname="Num";Sk.astnodes.Num.prototype._fields=["n",function(a){return a.n}];Sk.astnodes.Str.prototype._astname="Str";Sk.astnodes.Str.prototype._fields=["s",function(a){return a.s}];
Sk.astnodes.FormattedValue.prototype._astname="FormattedValue";Sk.astnodes.FormattedValue.prototype._fields=["value",function(a){return a.value},"conversion",function(a){return a.conversion},"format_spec",function(a){return a.format_spec}];Sk.astnodes.JoinedStr.prototype._astname="JoinedStr";Sk.astnodes.JoinedStr.prototype._fields=["values",function(a){return a.values}];Sk.astnodes.Bytes.prototype._astname="Bytes";Sk.astnodes.Bytes.prototype._fields=["s",function(a){return a.s}];Sk.astnodes.NameConstant.prototype._astname=
"NameConstant";Sk.astnodes.NameConstant.prototype._fields=["value",function(a){return a.value}];Sk.astnodes.Ellipsis.prototype._astname="Ellipsis";Sk.astnodes.Ellipsis.prototype._fields=[];Sk.astnodes.Constant.prototype._astname="Constant";Sk.astnodes.Constant.prototype._fields=["value",function(a){return a.value}];Sk.astnodes.Attribute.prototype._astname="Attribute";Sk.astnodes.Attribute.prototype._fields=["value",function(a){return a.value},"attr",function(a){return a.attr},"ctx",function(a){return a.ctx}];
Sk.astnodes.Subscript.prototype._astname="Subscript";Sk.astnodes.Subscript.prototype._fields=["value",function(a){return a.value},"slice",function(a){return a.slice},"ctx",function(a){return a.ctx}];Sk.astnodes.Starred.prototype._astname="Starred";Sk.astnodes.Starred.prototype._fields=["value",function(a){return a.value},"ctx",function(a){return a.ctx}];Sk.astnodes.Name.prototype._astname="Name";Sk.astnodes.Name.prototype._fields=["id",function(a){return a.id},"ctx",function(a){return a.ctx}];Sk.astnodes.List.prototype._astname=
"List";Sk.astnodes.List.prototype._fields=["elts",function(a){return a.elts},"ctx",function(a){return a.ctx}];Sk.astnodes.Tuple.prototype._astname="Tuple";Sk.astnodes.Tuple.prototype._fields=["elts",function(a){return a.elts},"ctx",function(a){return a.ctx}];Sk.astnodes.Load.prototype._astname="Load";Sk.astnodes.Load.prototype._isenum=!0;Sk.astnodes.Store.prototype._astname="Store";Sk.astnodes.Store.prototype._isenum=!0;Sk.astnodes.Del.prototype._astname="Del";Sk.astnodes.Del.prototype._isenum=!0;
Sk.astnodes.AugLoad.prototype._astname="AugLoad";Sk.astnodes.AugLoad.prototype._isenum=!0;Sk.astnodes.AugStore.prototype._astname="AugStore";Sk.astnodes.AugStore.prototype._isenum=!0;Sk.astnodes.Param.prototype._astname="Param";Sk.astnodes.Param.prototype._isenum=!0;Sk.astnodes.Slice.prototype._astname="Slice";Sk.astnodes.Slice.prototype._fields=["lower",function(a){return a.lower},"upper",function(a){return a.upper},"step",function(a){return a.step}];Sk.astnodes.ExtSlice.prototype._astname="ExtSlice";
Sk.astnodes.ExtSlice.prototype._fields=["dims",function(a){return a.dims}];Sk.astnodes.Index.prototype._astname="Index";Sk.astnodes.Index.prototype._fields=["value",function(a){return a.value}];Sk.astnodes.And.prototype._astname="And";Sk.astnodes.And.prototype._isenum=!0;Sk.astnodes.Or.prototype._astname="Or";Sk.astnodes.Or.prototype._isenum=!0;Sk.astnodes.Add.prototype._astname="Add";Sk.astnodes.Add.prototype._isenum=!0;Sk.astnodes.Sub.prototype._astname="Sub";Sk.astnodes.Sub.prototype._isenum=!0;
Sk.astnodes.Mult.prototype._astname="Mult";Sk.astnodes.Mult.prototype._isenum=!0;Sk.astnodes.MatMult.prototype._astname="MatMult";Sk.astnodes.MatMult.prototype._isenum=!0;Sk.astnodes.Div.prototype._astname="Div";Sk.astnodes.Div.prototype._isenum=!0;Sk.astnodes.Mod.prototype._astname="Mod";Sk.astnodes.Mod.prototype._isenum=!0;Sk.astnodes.Pow.prototype._astname="Pow";Sk.astnodes.Pow.prototype._isenum=!0;Sk.astnodes.LShift.prototype._astname="LShift";Sk.astnodes.LShift.prototype._isenum=!0;Sk.astnodes.RShift.prototype._astname=
"RShift";Sk.astnodes.RShift.prototype._isenum=!0;Sk.astnodes.BitOr.prototype._astname="BitOr";Sk.astnodes.BitOr.prototype._isenum=!0;Sk.astnodes.BitXor.prototype._astname="BitXor";Sk.astnodes.BitXor.prototype._isenum=!0;Sk.astnodes.BitAnd.prototype._astname="BitAnd";Sk.astnodes.BitAnd.prototype._isenum=!0;Sk.astnodes.FloorDiv.prototype._astname="FloorDiv";Sk.astnodes.FloorDiv.prototype._isenum=!0;Sk.astnodes.Invert.prototype._astname="Invert";Sk.astnodes.Invert.prototype._isenum=!0;Sk.astnodes.Not.prototype._astname=
"Not";Sk.astnodes.Not.prototype._isenum=!0;Sk.astnodes.UAdd.prototype._astname="UAdd";Sk.astnodes.UAdd.prototype._isenum=!0;Sk.astnodes.USub.prototype._astname="USub";Sk.astnodes.USub.prototype._isenum=!0;Sk.astnodes.Eq.prototype._astname="Eq";Sk.astnodes.Eq.prototype._isenum=!0;Sk.astnodes.NotEq.prototype._astname="NotEq";Sk.astnodes.NotEq.prototype._isenum=!0;Sk.astnodes.Lt.prototype._astname="Lt";Sk.astnodes.Lt.prototype._isenum=!0;Sk.astnodes.LtE.prototype._astname="LtE";Sk.astnodes.LtE.prototype._isenum=
!0;Sk.astnodes.Gt.prototype._astname="Gt";Sk.astnodes.Gt.prototype._isenum=!0;Sk.astnodes.GtE.prototype._astname="GtE";Sk.astnodes.GtE.prototype._isenum=!0;Sk.astnodes.Is.prototype._astname="Is";Sk.astnodes.Is.prototype._isenum=!0;Sk.astnodes.IsNot.prototype._astname="IsNot";Sk.astnodes.IsNot.prototype._isenum=!0;Sk.astnodes.In.prototype._astname="In";Sk.astnodes.In.prototype._isenum=!0;Sk.astnodes.NotIn.prototype._astname="NotIn";Sk.astnodes.NotIn.prototype._isenum=!0;Sk.astnodes.comprehension.prototype._astname=
"comprehension";Sk.astnodes.comprehension.prototype._fields=["target",function(a){return a.target},"iter",function(a){return a.iter},"ifs",function(a){return a.ifs},"is_async",function(a){return a.is_async}];Sk.astnodes.ExceptHandler.prototype._astname="ExceptHandler";Sk.astnodes.ExceptHandler.prototype._fields=["type",function(a){return a.type},"name",function(a){return a.name},"body",function(a){return a.body}];Sk.astnodes.arguments_.prototype._astname="arguments";Sk.astnodes.arguments_.prototype._fields=
["args",function(a){return a.args},"vararg",function(a){return a.vararg},"kwonlyargs",function(a){return a.kwonlyargs},"kw_defaults",function(a){return a.kw_defaults},"kwarg",function(a){return a.kwarg},"defaults",function(a){return a.defaults}];Sk.astnodes.arg.prototype._astname="arg";Sk.astnodes.arg.prototype._fields=["arg",function(a){return a.arg},"annotation",function(a){return a.annotation}];Sk.astnodes.keyword.prototype._astname="keyword";Sk.astnodes.keyword.prototype._fields=["arg",function(a){return a.arg},
"value",function(a){return a.value}];Sk.astnodes.alias.prototype._astname="alias";Sk.astnodes.alias.prototype._fields=["name",function(a){return a.name},"asname",function(a){return a.asname}];Sk.astnodes.withitem.prototype._astname="withitem";Sk.astnodes.withitem.prototype._fields=["context_expr",function(a){return a.context_expr},"optional_vars",function(a){return a.optional_vars}];Sk.exportSymbol("Sk.astnodes",Sk.astnodes)},function(m,q){function a(a,b,c){this.c_encoding=a;this.c_filename=b;this.c_flags=
c||0}function c(a){Sk.asserts.assert(void 0!==a,"node must be defined");return null===a.children?0:a.children.length}function b(a,b){Sk.asserts.assert(void 0!==a,"node must be defined");Sk.asserts.assert(void 0!==b,"index of child must be specified");return a.children[b]}function e(a,b){Sk.asserts.assert(a.type===b,"node wasn't expected type")}function f(a,b,c){throw new Sk.builtin.SyntaxError(c,a.c_filename,b.lineno);}function l(a){Sk.asserts.assert("string"===typeof a,"expecting string, got "+typeof a);
return new Sk.builtin.str(a)}function h(a){var d,e;switch(a.type){case r.single_input:if(b(a,0).type===z.T_NEWLINE)break;else return h(b(a,0));case r.file_input:for(d=e=0;d<c(a);++d){var f=b(a,d);f.type===r.stmt&&(e+=h(f))}return e;case r.stmt:return h(b(a,0));case r.compound_stmt:return 1;case r.simple_stmt:return Math.floor(c(a)/2);case r.suite:if(1===c(a))return h(b(a,0));e=0;for(d=2;d<c(a)-1;++d)e+=h(b(a,d));return e;default:Sk.asserts.fail("Non-statement found")}return 0}function d(a,b,c,d){c instanceof
Sk.builtin.str&&(c=c.v);if("None"===c)throw new Sk.builtin.SyntaxError("assignment to None",a.c_filename,d);if("True"===c||"False"===c)throw new Sk.builtin.SyntaxError("assignment to True or False is forbidden",a.c_filename,d);}function g(a,b,c,e){var f;Sk.asserts.assert(c!==Sk.astnodes.AugStore&&c!==Sk.astnodes.AugLoad,"context not AugStore or AugLoad");var h=f=null;switch(b.constructor){case Sk.astnodes.Attribute:case Sk.astnodes.Name:c===Sk.astnodes.Store&&d(a,e,b.attr,e.lineno);b.ctx=c;break;
case Sk.astnodes.Starred:b.ctx=c;g(a,b.value,c,e);break;case Sk.astnodes.Subscript:b.ctx=c;break;case Sk.astnodes.List:b.ctx=c;f=b.elts;break;case Sk.astnodes.Tuple:if(0===b.elts.length)throw new Sk.builtin.SyntaxError("can't assign to ()",a.c_filename,e.lineno);b.ctx=c;f=b.elts;break;case Sk.astnodes.Lambda:h="lambda";break;case Sk.astnodes.Call:h="function call";break;case Sk.astnodes.BoolOp:case Sk.astnodes.BinOp:case Sk.astnodes.UnaryOp:h="operator";break;case Sk.astnodes.GeneratorExp:h="generator expression";
break;case Sk.astnodes.Yield:h="yield expression";break;case Sk.astnodes.ListComp:h="list comprehension";break;case Sk.astnodes.SetComp:h="set comprehension";break;case Sk.astnodes.DictComp:h="dict comprehension";break;case Sk.astnodes.Dict:case Sk.astnodes.Set:case Sk.astnodes.Num:case Sk.astnodes.Str:h="literal";break;case Sk.astnodes.NameConstant:h="True, False or None";break;case Sk.astnodes.Compare:h="comparison";break;case Sk.astnodes.Repr:h="repr";break;case Sk.astnodes.IfExp:h="conditional expression";
break;default:Sk.asserts.fail("unhandled expression in assignment")}if(h)throw new Sk.builtin.SyntaxError("can't "+(c===Sk.astnodes.Store?"assign to":"delete")+" "+h,a.c_filename,e.lineno);if(f)for(b=0;b<f.length;++b)g(a,f[b],c,e)}function n(a){if(void 0===Q[a.type])throw new Sk.builtin.SyntaxError("invalid syntax",a.type,a.lineno);return Q[a.type]}function k(a,b){return a.value?new Sk.builtin.str(a.value):new Sk.builtin.str(a)}function p(a,d){e(d,r.comp_op);if(1===c(d))switch(d=b(d,0),d.type){case z.T_LESS:return Sk.astnodes.Lt;
case z.T_GREATER:return Sk.astnodes.Gt;case z.T_EQEQUAL:return Sk.astnodes.Eq;case z.T_LESSEQUAL:return Sk.astnodes.LtE;case z.T_GREATEREQUAL:return Sk.astnodes.GtE;case z.T_NOTEQUAL:return Sk.astnodes.NotEq;case z.T_NAME:if("in"===d.value)return Sk.astnodes.In;if("is"===d.value)return Sk.astnodes.Is}else if(2===c(d)&&b(d,0).type===z.T_NAME){if("in"===b(d,1).value)return Sk.astnodes.NotIn;if("is"===b(d,0).value)return Sk.astnodes.IsNot}Sk.asserts.fail("invalid comp_op")}function w(a,b){a&&(a.lineno=
b.lineno,a.col_offset=b.col_offset,a.end_lineno=b.end_lineno,a.end_col_offset=b.end_col_offset);return a}function A(a,d){var e,f=[];Sk.asserts.assert(d.type===r.testlist||d.type===r.testlist_star_expr||d.type===r.listmaker||d.type===r.testlist_comp||d.type===r.testlist_safe||d.type===r.testlist1,"node type must be listlike");for(e=0;e<c(d);e+=2)Sk.asserts.assert(b(d,e).type===r.test||b(d,e).type===r.old_test||b(d,e).type===r.star_expr),f[e/2]=x(a,b(d,e));return f}function t(a,d){var f;e(d,r.suite);
var g=[];var k=0;if(b(d,0).type===r.simple_stmt){d=b(d,0);var v=c(d)-1;b(d,v-1).type===z.T_SEMI&&--v;for(f=0;f<v;f+=2)g[k++]=P(a,b(d,f))}else for(f=2;f<c(d)-1;++f){v=b(d,f);e(v,r.stmt);var n=h(v);if(1===n)g[k++]=P(a,v);else for(v=b(v,0),e(v,r.simple_stmt),n=0;n<c(v);n+=2){if(0===c(b(v,n))){Sk.asserts.assert(n+1===c(v));break}g[k++]=P(a,b(v,n))}}Sk.asserts.assert(k===h(d));return g}function y(a,d,f){var h;e(d,r.exprlist);var k=[];for(h=0;h<c(d);h+=2){var v=x(a,b(d,h));k[h/2]=v;f&&g(a,v,f,b(d,h))}return k}
function B(a,d){a:for(;;)switch(d.type){case r.import_as_name:a=null;var e=l(b(d,0).value);3===c(d)&&(a=b(d,2).value);return new Sk.astnodes.alias(e,null==a?null:l(a));case r.dotted_as_name:if(1===c(d)){d=b(d,0);continue a}else return a=B(a,b(d,0)),Sk.asserts.assert(!a.asname),a.asname=l(b(d,2).value),a;case r.dotted_name:if(1===c(d))return new Sk.astnodes.alias(l(b(d,0).value),null);a="";for(e=0;e<c(d);e+=2)a+=b(d,e).value+".";return new Sk.astnodes.alias(l(a.substr(0,a.length-1)),null);case z.T_STAR:return new Sk.astnodes.alias(l("*"),
null);default:throw new Sk.builtin.SyntaxError("unexpected import name",a.c_filename,d.lineno);}}function E(a,b){Sk.asserts.assert(b.type==r.testlist_comp||b.type==r.argument);return aa(a,b,0)}function F(a,d){if(b(d,0).type===z.T_MINUS&&2===c(d)){var e=b(d,1);if(e.type===r.factor&&1===c(e)&&(e=b(e,0),e.type===r.power&&1===c(e))){var f=b(e,0);if(f.type===r.atom&&(e=b(f,0),e.type===z.T_NUMBER))return e.value="-"+e.value,T(a,f)}}a=x(a,b(d,1));switch(b(d,0).type){case z.T_PLUS:return new Sk.astnodes.UnaryOp(Sk.astnodes.UAdd,
a,d.lineno,d.col_offset);case z.T_MINUS:return new Sk.astnodes.UnaryOp(Sk.astnodes.USub,a,d.lineno,d.col_offset);case z.T_TILDE:return new Sk.astnodes.UnaryOp(Sk.astnodes.Invert,a,d.lineno,d.col_offset)}Sk.asserts.fail("unhandled factor")}function K(a,g,h,k){var v,n,l;e(g,r.arglist);for(v=l=n=0;v<c(g);v++){var I=b(g,v);I.type==r.argument&&(1==c(I)?n++:b(I,1).type==r.comp_for?(n++,k||f(a,I,"invalid syntax"),1<c(g)&&f(a,I,"Generator expression must be parenthesized")):b(I,0).type==z.T_STAR?n++:l++)}var p=
[];var m=[];for(v=k=l=n=0;v<c(g);v++)if(I=b(g,v),I.type==r.argument){var L=b(I,0);if(1==c(I)){l&&(k?f(a,L,"positional argument follows keyword argument unpacking"):f(a,L,"positional argument follows keyword argument"));var M=x(a,L);if(!M)return null;p[n++]=M}else if(L.type==z.T_STAR){if(k)return f(a,L,"iterable argument unpacking follows keyword argument unpacking"),null;M=x(a,b(I,1));if(!M)return null;I=new Sk.astnodes.Starred(M,Sk.astnodes.Load,L.lineno,L.col_offset);p[n++]=I}else if(L.type==z.T_DOUBLESTAR){v++;
M=x(a,b(I,1));if(!M)return null;I=new Sk.astnodes.keyword(null,M);m[l++]=I;k++}else if(b(I,1).type==r.comp_for){M=E(a,I);if(!M)return null;p[n++]=M}else{var t;M=x(a,L);if(!M)return null;if(M.constructor===Sk.astnodes.Lambda)return f(a,L,"lambda cannot contain assignment"),null;if(M.constructor!==Sk.astnodes.Name)return f(a,L,"keyword can't be an expression"),null;if(d(a,M.id,I,1))return null;var w=M.id;for(t=0;t<l;t++)if((M=m[t].arg)&&M===w)return f(a,L,"keyword argument repeated"),null;M=x(a,b(I,
2));if(!M)return null;I=new Sk.astnodes.keyword(w,M);m[l++]=I}}return new Sk.astnodes.Call(h,p,m,h.lineno,h.col_offset)}function G(a,d,f){e(d,r.trailer);if(b(d,0).type==z.T_LPAR)return 2==c(d)?new Sk.astnodes.Call(f,null,null,d.lineno,d.col_offset):K(a,b(d,1),f,!0);if(b(d,0).type==z.T_DOT){var g=k(b(d,1));return g?new Sk.astnodes.Attribute(f,g,Sk.astnodes.Load,d.lineno,d.col_offset):null}e(b(d,0),z.T_LSQB);e(b(d,2),z.T_RSQB);d=b(d,1);if(1==c(d))return(g=J(a,b(d,0)))?new Sk.astnodes.Subscript(f,g,
Sk.astnodes.Load,d.lineno,d.col_offset):null;var h,v=1,n=[];for(h=0;h<c(d);h+=2){g=J(a,b(d,h));if(!g)return null;g.kind!=Z.Index_kind&&(v=0);n[h/2]=g}if(!v)return new Sk.astnodes.Subscript(f,new Sk.astnodes.ExtSlice(n),Sk.astnodes.Load,d.lineno,d.col_offset);a=[];for(h=0;h<n.length;++h)g=n[h],Sk.asserts.assert(g.kind==Z.Index_kind&&g.v.Index.value),a[h]=g.v.Index.value;g=new Sk.astnodes.Tuple(a,Sk.astnodes.Load,d.lineno,d.col_offset);return new Sk.astnodes.Subscript(f,new Sk.astnodes.Index(g),Sk.astnodes.Load,
d.lineno,d.col_offset)}function U(a,d){e(d,r.flow_stmt);var g=b(d,0);switch(g.type){case r.break_stmt:return new Sk.astnodes.Break(d.lineno,d.col_offset,d.end_lineno,d.end_col_offset);case r.continue_stmt:return new Sk.astnodes.Continue(d.lineno,d.col_offset,d.end_lineno,d.end_col_offset);case r.yield_stmt:return(a=x(a,b(g,0)))?new Sk.astnodes.Expr(a,d.lineno,d.col_offset,d.end_lineno,d.end_col_offset):null;case r.return_stmt:if(1==c(g))return new Sk.astnodes.Return(null,d.lineno,d.col_offset,d.end_lineno,
d.end_col_offset);var h=W(a,b(g,1));return h?new Sk.astnodes.Return(h,d.lineno,d.col_offset,d.end_lineno,d.end_col_offset):null;case r.raise_stmt:if(1==c(g))return new Sk.astnodes.Raise(null,null,null,null,d.lineno,d.col_offset,d.end_lineno,d.end_col_offset);if(2<=c(g)){var k=null;h=x(a,b(g,1));var n=null,v=null;4==c(g)&&"from"==b(g,2).value?(Sk.__future__.python3||f(a,b(g,2),"raise ... from ... is not available in Python 2"),k=x(a,b(g,3))):4<=c(g)&&","==b(g,2).value&&(Sk.__future__.python3&&f(a,
d,"Old raise syntax is not available in Python 3"),n=x(a,b(g,3)),6==c(g)&&(v=x(a,b(g,5))));return new Sk.astnodes.Raise(h,k,n,v,d.lineno,d.col_offset,d.end_lineno,d.end_col_offset)}default:return Sk.asserts.fail("unexpected flow_stmt: ",g.type),null}}function C(a,e){var f=null;Sk.asserts.assert(e.type===r.tfpdef||e.type===r.vfpdef);var g=b(e,0);d(a,g,g.value,g.lineno);g=l(g.value);3==c(e)&&b(e,1).type===z.T_COLON&&(f=x(a,b(e,2)));return new Sk.astnodes.arg(g,f,e.lineno,e.col_offset)}function N(a,
e,g,h,k){var n=g,v=0;h||f(a,b(e,g),"named arguments must follow bare *");for(Sk.asserts.assert(k);n<c(e);){var p=b(e,n);switch(p.type){case r.vfpdef:case r.tfpdef:n+1<c(e)&&b(e,n+1).type==z.T_EQUAL?(k[v]=x(a,b(e,n+2)),n+=2):k[v]=null;var I=3==c(p)?x(a,b(p,2)):null;p=b(p,0);d(a,p,p.value,p.lineno);g=l(p.value);h[v++]=new Sk.astnodes.arg(g,I,p.lineno,p.col_offset);n+=2;break;case z.T_DOUBLESTAR:return n;default:f(a,p,"unexpected node")}}return n}function u(a,d){var e,f,g,h=[],k=[],n=[],v=[],l=null,
p=null;if(d.type===r.parameters){if(2===c(d))return new Sk.astnodes.arguments_([],null,[],[],null,[]);d=b(d,1)}Sk.asserts.assert(d.type===r.varargslist||d.type===r.typedargslist);for(e=f=g=0;g<c(d);){var m=b(d,g);switch(m.type){case r.tfpdef:case r.vfpdef:if(g+1<c(d)&&b(d,g+1).type==z.T_EQUAL){k[f++]=x(a,b(d,g+2));g+=2;var L=1}else if(L)throw new Sk.builtin.SyntaxError("non-default argument follows default argument",a.c_filename,d.lineno);h[e++]=C(a,m);g+=2;break;case z.T_STAR:if(g+1>=c(d)||g+2==
c(d)&&b(d,g+1).type==z.T_COMMA)throw new Sk.builtin.SyntaxError("named arguments must follow bare *",a.c_filename,d.lineno);m=b(d,g+1);m.type==z.T_COMMA?(g+=2,g=N(a,d,g,n,v)):(l=C(a,m),g+=3,g<c(d)&&(b(d,g).type==r.tfpdef||b(d,g).type==r.vfpdef)&&(g=N(a,d,g,n,v)));break;case z.T_DOUBLESTAR:m=b(d,g+1);Sk.asserts.assert(m.type==r.tfpdef||m.type==r.vfpdef);p=C(a,m);g+=3;break;default:Sk.asserts.fail("unexpected node in varargslist");return}}return new Sk.astnodes.arguments_(h,l,n,v,p,k)}function R(a,
g,h,n){var v=n?b(g,1):g,l=null,p=1,m=null;if(n&&5>a.c_feature_version)return f(a,v,"Async functions are only supported in Python 3.5 and greater"),null;e(v,r.funcdef);var I=k(b(v,p));if(d(a,I,b(v,p),0))return null;var L=u(a,b(v,p+1));if(!L)return null;if(b(v,p+2).type==z.T_RARROW){l=x(a,b(v,p+3));if(!l)return null;p+=2}if(b(v,p+3).type==z.T_TYPE_COMMENT){m=z.T_NEW_TYPE_COMMENT(b(v,p+3));if(!m)return null;p+=1}var M=t(a,b(v,p+3));if(!M)return null;if(1<c(b(v,p+3))&&(p=b(b(v,p+3),1),p.type==z.T_TYPE_COMMENT)){if(null!=
m)return f(a,v,"Cannot have two type comments on def"),null;m=z.T_NEW_TYPE_COMMENT(p);if(!m)return null}return n?new Sk.astnodes.AsyncFunctionDef(I,L,M,h,l,m,g.lineno,g.col_offset,void 0,void 0):new Sk.astnodes.FunctionDef(I,L,M,h,l,m,v.lineno,v.col_offset,void 0,void 0)}function O(a,f,g){e(f,r.classdef);if(4==c(f)){var h=t(a,b(f,3));var n=k(b(f,1).value);d(a,b(f,3),n,f.lineno);return new Sk.astnodes.ClassDef(n,[],[],h,g,null,f.lineno,f.col_offset)}if(b(f,3).type===z.T_RPAR)return h=t(a,b(f,5)),n=
k(b(f,1).value),d(a,b(f,3),n,b(f,3).lineno),new Sk.astnodes.ClassDef(n,[],[],h,g,null,f.lineno,f.col_offset);n=k(b(f,1));n=new Sk.astnodes.Name(n,Sk.astnodes.Load,f.lineno,f.col_offset);var l=K(a,b(f,3),n,!1);h=t(a,b(f,6));n=k(b(f,1).value);d(a,b(f,1),n,b(f,1).lineno);return new Sk.astnodes.ClassDef(n,l.args,l.keywords,h,g,null,f.lineno,f.col_offset)}function S(a,d){function f(a,d){for(a=0;;){e(d,r.comp_iter);if(b(d,0).type===r.comp_for)return a;d=b(d,0);e(d,r.comp_if);a++;if(2===c(d))return a;d=
b(d,2)}}var g;var h=function(a,d){a=0;a:for(;;){a++;e(d,r.comp_for);if(5===c(d))d=b(d,4);else return a;b:for(;;){e(d,r.comp_iter);d=b(d,0);if(d.type===r.comp_for)continue a;else if(d.type===r.comp_if)if(3===c(d)){d=b(d,2);continue b}else return a;break}break}Sk.asserts.fail("logic error in countCompFors")}(a,d);var k=[];for(g=0;g<h;++g){e(d,r.comp_for);var n=b(d,1);var l=y(a,n,Sk.astnodes.Store);var v=x(a,b(d,3));var p=1===c(n)?new Sk.astnodes.comprehension(l[0],v,[]):new Sk.astnodes.comprehension(new Sk.astnodes.Tuple(l,
Sk.astnodes.Store,d.lineno,d.col_offset),v,[]);if(5===c(d)){d=b(d,4);var m=f(a,d);n=[];for(l=0;l<m;++l)e(d,r.comp_iter),d=b(d,0),e(d,r.comp_if),v=x(a,b(d,1)),n[l]=v,3===c(d)&&(d=b(d,2));d.type===r.comp_iter&&(d=b(d,0));p.ifs=n}k[g]=p}return k}function V(a,d){var f=[];a:{var g=d;var h=0;b:for(;;){var k=0;h++;e(g,r.comp_for);b(g,0).type==z.T_ASYNC&&(k=1);if(c(g)==5+k)g=b(g,4+k);else break a;c:for(;;){e(g,r.comp_iter);g=b(g,0);if(g.type===r.comp_for)continue b;else if(g.type===r.comp_if)if(3===c(g)){g=
b(g,2);continue c}else break a;break}break}h=void 0}for(g=0;g<h;g++){var n=0;b(d,0).type==z.T_ASYNC&&(n=1);var l=b(d,1+n);var p=y(a,l,Sk.astnodes.Store);if(!p)return null;k=x(a,b(d,3+n));if(!k)return null;var v=p[0];p=1==c(l)?new Sk.astnodes.comprehension(v,k,null,n):new Sk.astnodes.comprehension(new Sk.astnodes.Tuple(p,Sk.astnodes.Store,v.lineno,v.col_offset,l.end_lineno,l.end_col_offset),k,null,n);if(c(d)==5+n){v=[];d=b(d,4+n);a:for(k=d,n=0;;){e(k,r.comp_iter);if(b(k,0).type==r.comp_for){l=n;break a}k=
b(k,0);e(k,r.comp_if);n++;if(2==c(k)){l=n;break a}k=b(k,2)}if(-1==l)return null;for(n=0;n<l;n++){e(d,r.comp_iter);d=b(d,0);e(d,r.comp_if);k=x(a,b(d,1));if(!k)return null;v[n]=k;3==c(d)&&(d=b(d,2))}d.type==r.comp_iter&&(d=b(d,0));p.ifs=v}f[g]=p}return f}function aa(a,d,e){Sk.asserts.assert(1<c(d));var g=b(d,0);var h=x(a,g);if(h.constructor===Sk.astnodes.Starred)return f(a,g,"iterable unpacking cannot be used in comprehension"),null;a=V(a,b(d,1));return 0==e?new Sk.astnodes.GeneratorExp(h,a,d.lineno,
d.col_offset,d.end_lineno,d.end_col_offset):1==e?new Sk.astnodes.ListComp(h,a,d.lineno,d.col_offset,d.end_lineno,d.end_col_offset):2==e?new Sk.astnodes.SetComp(h,a,d.lineno,d.col_offset,d.end_lineno,d.end_col_offset):null}function ca(a,c){e(c,r.augassign);c=b(c,0);switch(c.value.charAt(0)){case "+":return Sk.astnodes.Add;case "-":return Sk.astnodes.Sub;case "/":return"/"===c.value.charAt(1)?Sk.astnodes.FloorDiv:Sk.astnodes.Div;case "%":return Sk.astnodes.Mod;case "<":return Sk.astnodes.LShift;case ">":return Sk.astnodes.RShift;
case "&":return Sk.astnodes.BitAnd;case "^":return Sk.astnodes.BitXor;case "|":return Sk.astnodes.BitOr;case "*":return"*"===c.value.charAt(1)?Sk.astnodes.Pow:Sk.astnodes.Mult;case "@":if(Sk.__future__.python3)return Sk.astnodes.MatMult;default:Sk.asserts.fail("invalid augassign")}}function W(a,d){Sk.asserts.assert(0<c(d));d.type===r.testlist_comp?1<c(d)&&Sk.asserts.assert(b(d,1).type!==r.comp_for):Sk.asserts.assert(d.type===r.testlist||d.type===r.testlist_star_expr);return 1===c(d)?x(a,b(d,0)):new Sk.astnodes.Tuple(A(a,
d),Sk.astnodes.Load,d.lineno,d.col_offset)}function da(a,f){e(f,r.expr_stmt);if(1===c(f))return new Sk.astnodes.Expr(W(a,b(f,0)),f.lineno,f.col_offset);if(b(f,1).type===r.augassign){var h=b(f,0);var k=W(a,h);g(a,k,Sk.astnodes.Store,h);switch(k.constructor){case Sk.astnodes.Name:var n=k.id;d(a,h,n,f.lineno);break;case Sk.astnodes.Attribute:case Sk.astnodes.Subscript:break;case Sk.astnodes.GeneratorExp:throw new Sk.builtin.SyntaxError("augmented assignment to generator expression not possible",a.c_filename,
f.lineno);case Sk.astnodes.Yield:throw new Sk.builtin.SyntaxError("augmented assignment to yield expression not possible",a.c_filename,f.lineno);default:throw new Sk.builtin.SyntaxError("illegal expression for augmented assignment",a.c_filename,f.lineno);}h=b(f,2);n=h.type===r.testlist?W(a,h):x(a,h);return new Sk.astnodes.AugAssign(k,ca(a,b(f,1)),n,f.lineno,f.col_offset)}if(b(f,1).type===r.annassign){if(!Sk.__future__.python3)throw new Sk.builtin.SyntaxError("Annotated assignment is not supported in Python 2",
a.c_filename,f.lineno);h=b(f,0);var l=b(f,1);var p=1;for(k=h;1==c(k);)k=b(k,0);0<c(k)&&b(k,0).type==z.T_LPAR&&(p=0);k=W(a,h);switch(k.constructor){case Sk.astnodes.Name:n=k.id;d(a,h,n,f.lineno);g(a,k,Sk.astnodes.Store,h);break;case Sk.astnodes.Attribute:n=k.attr;d(a,h,n,f.lineno);g(a,k,Sk.astnodes.Store,h);break;case Sk.astnodes.Subscript:g(a,k,Sk.astnodes.Store,h);break;case Sk.astnodes.List:throw new Sk.builtin.SyntaxError("only single target (not list) can be annotated",a.c_filename,f.lineno);
case Sk.astnodes.Tuple:throw new Sk.builtin.SyntaxError("only single target (not tuple) can be annotated",a.c_filename,f.lineno);default:throw new Sk.builtin.SyntaxError("illegal target for annotation",a.c_filename,f.lineno);}k.constructor!=Sk.astnodes.Name&&(p=0);h=b(l,1);n=x(a,h);if(2==c(l))return new Sk.astnodes.AnnAssign(k,n,null,p,f.lineno,f.col_offset);h=b(l,3);a=x(a,h);return new Sk.astnodes.AnnAssign(k,n,a,p,f.lineno,f.col_offset)}e(b(f,1),z.T_EQUAL);p=[];for(k=0;k<c(f)-2;k+=2){h=b(f,k);if(h.type===
r.yield_expr)throw new Sk.builtin.SyntaxError("assignment to yield expression not possible",a.c_filename,f.lineno);h=W(a,h);g(a,h,Sk.astnodes.Store,b(f,k));p[k/2]=h}h=b(f,c(f)-1);a=h.type===r.testlist_star_expr?W(a,h):x(a,h);return new Sk.astnodes.Assign(p,a,f.lineno,f.col_offset)}function ea(a,b,c,d,e){Sk.asserts.assert(c>=b);Sk.asserts.assert("{"==a.charAt(b-1));Sk.asserts.assert("}"==a.charAt(c)||"!"==a.charAt(c)||":"==a.charAt(c));a=a.substring(b,c);/^\s*$/.test(a)&&f(d,e,"f-string: empty expression not allowed");
try{let b=Sk.parse("<fstring>","("+a+")");var g=Sk.astFromParse(b.cst,"<fstring>",b.flags)}catch(Y){throw Y.traceback&&Y.traceback[0]&&(g=Y.traceback[0],g.lineno=(g.lineno||1)-1+e.lineno,g.filename=d.c_filename),Y;}Sk.asserts.assert(1==g.body.length&&g.body[0].constructor===Sk.astnodes.Expr);return g.body[0].value}function H(a,b,c,d,e,g,h){Sk.asserts.assert("{"==a.charAt(b));b++;var k=b;let n=null,l=0,p=0,m,v,I=()=>f(g,h,"f-string: expecting '}'");for(Sk.asserts.assert(b<=c);b<c;b++){let d=a.charAt(b);
"\\"==d&&f(g,h,"f-string expression part cannot include a backslash");if(n)d==n&&(3==l?b+2<c&&a.charAt(b+1)==d&&a.charAt(b+2)==d&&(b+=2,n=l=0):l=n=0);else if("'"==d||'"'==d)b+2<c&&a.charAt(b+1)==d&&a.charAt(b+2)==d?(l=3,b+=2):l=1,n=d;else if("["==d||"{"==d||"("==d)p++;else if(0!=p&&("]"==d||"}"==d||")"==d))p--;else if("#"==d)f(g,h,"f-string expression part cannot include '#'");else if(!(0!=p||"!"!=d&&":"!=d&&"}"!=d||"!"==d&&b+1<c&&"="==a.charAt(b+1)))break}n&&f(g,h,"f-string: unterminated string");
p&&f(g,h,"f-string: mismatched '(', '{', or '['");k=ea(a,k,b,g,h);"!"==a.charAt(b)&&(b++,b>=c&&I(),v=a.charAt(b),b++,"s"!=v&&"r"!=v&&"a"!=v&&f(g,h,"f-string: invalid conversion character: expected 's', 'r', or 'a'"));b>=c&&I();":"==a.charAt(b)&&(b++,b>=c&&I(),[m,b]=ba(a,b,c,d,e+1,g,h));(b>=c||"}"!=a.charAt(b))&&I();b++;return[new Sk.astnodes.FormattedValue(k,v,m,h.lineno,h.col_offset),b]}function ba(a,b,c,d,e,f,g){let h=[],k=a=>{if(-1!==a.indexOf("}")){if(/(^|[^}])}(}})*($|[^}])/.test(a))throw new SyntaxError("f-string: single '}' is not allowed",
g.lineno,g.col_offset);a=a.replace(/}}/g,"}")}h.push(new Sk.astnodes.Str(new Sk.builtin.str(a),g.lineno,g.col_offset,f.end_lineno,g.end_col_offset))};for(;b<c;){let n=a.indexOf("{",b);if(0!==e){let d=a.indexOf("}",b);-1!==d&&(-1===n?c=d:n>d&&(n=-1,c=d))}if(-1===n){k(a.substring(b,c));b=c;break}else if(n+1<c&&"{"===a.charAt(n+1))k(a.substring(b,n+1)),b=n+2;else{k(a.substring(b,n));b=n;let [l,p]=H(a,n,c,d,e,f,g);h.push(l);b=p}}return[new Sk.astnodes.JoinedStr(h,g.lineno,g.col_offset),b]}function X(a,
b,c){var d=b.charAt(b.length-1);if(-1!==b.indexOf("_")){if(fa.test(b))throw new Sk.builtin.SyntaxError("invalid syntax",a.c_filename,c);if(ha.test(b))throw new Sk.builtin.SyntaxError("invalid decimal literal",a.c_filename,c);b=b.replace(ia,"")}if("j"===d||"J"===d)return Sk.builtin.complex.complex_subtype_from_string(b);if("l"===d||"L"===d)return Sk.longFromStr(b.substr(0,b.length-1),0);if(-1!==b.indexOf("."))return new Sk.builtin.float_(parseFloat(b));c=b;a=!1;"-"===b.charAt(0)&&(c=b.substr(1),a=
!0);if("0"!==c.charAt(0)||"x"!==c.charAt(1)&&"X"!==c.charAt(1)){if(-1!==b.indexOf("e")||-1!==b.indexOf("E"))return new Sk.builtin.float_(parseFloat(b));if("0"!==c.charAt(0)||"b"!==c.charAt(1)&&"B"!==c.charAt(1))if("0"===c.charAt(0))if("0"===c)c=0;else{c=c.substring(1);if("o"===c.charAt(0)||"O"===c.charAt(0))c=c.substring(1);c=parseInt(c,8)}else c=parseInt(c,10);else c=c.substring(2),c=parseInt(c,2)}else c=c.substring(2),c=parseInt(c,16);return c>Number.MAX_SAFE_INTEGER&&Math.floor(c)===c&&-1===b.indexOf("e")&&
-1===b.indexOf("E")?Sk.longFromStr(b,0):a?new Sk.builtin.int_(-c):new Sk.builtin.int_(c)}function J(a,d){var f,g;e(d,r.subscript);var h=b(d,0);var k=f=g=null;if(h.type===z.T_DOT)return new Sk.astnodes.Ellipsis;if(1===c(d)&&h.type===r.test)return new Sk.astnodes.Index(x(a,h));h.type===r.test&&(g=x(a,h));h.type===z.T_COLON?1<c(d)&&(h=b(d,1),h.type===r.test&&(f=x(a,h))):2<c(d)&&(h=b(d,2),h.type===r.test&&(f=x(a,h)));h=b(d,c(d)-1);h.type===r.sliceop&&(1===c(h)?(h=b(h,0),k=new Sk.astnodes.NameConstant(Sk.builtin.none.none$,
Sk.astnodes.Load,h.lineno,h.col_offset)):(h=b(h,1),h.type===r.test&&(k=x(a,h))));return new Sk.astnodes.Slice(g,f,k)}function T(a,d){var g=b(d,0);switch(g.type){case z.T_NAME:var h=g.value;if(4<=h.length&&5>=h.length){if("None"===h)return new Sk.astnodes.NameConstant(Sk.builtin.none.none$,d.lineno,d.col_offset);if("True"===h)return new Sk.astnodes.NameConstant(Sk.builtin.bool.true$,d.lineno,d.col_offset);if("False"===h)return new Sk.astnodes.NameConstant(Sk.builtin.bool.false$,d.lineno,d.col_offset)}a=
k(h,a);return new Sk.astnodes.Name(a,Sk.astnodes.Load,d.lineno,d.col_offset,d.end_lineno,d.end_col_offset);case z.T_STRING:g=[];for(var n=0;n<c(d);++n){var p=b(d,n).value;var m=a;var v=b(d,n);var t=p;var q=t.charAt(0);for(var L=!1,y=p=!1;;){if("u"!==q&&"U"!==q)if("r"===q||"R"===q)L=!0;else if("b"===q||"B"===q)y=!0;else if("f"===q||"F"===q)p=!0;else break;t=t.substr(1);q=t.charAt(0)}Sk.asserts.assert("'"===q||'"'===q&&t.charAt(t.length-1)===q);t=t.substr(1,t.length-2);4<=t.length&&t.charAt(0)===q&&
t.charAt(1)===q&&(Sk.asserts.assert(t.charAt(t.length-1)===q&&t.charAt(t.length-2)===q),t=t.substr(2,t.length-4));if(L||-1===t.indexOf("\\")){if(y)for(q=0;q<t.length;q++)127<t.charCodeAt(q)&&f(m,v,"bytes can only contain ASCII literal characters");m=[l(t),p,y]}else{L=t;var B=L.length,u="";for(t=0;t<B;++t)q=L.charAt(t),"\\"===q?(++t,q=L.charAt(t),"n"===q?u+="\n":"\\"===q?u+="\\":"t"===q?u+="\t":"r"===q?u+="\r":"b"===q?u+="\b":"f"===q?u+="\f":"v"===q?u+="\v":"0"===q?u+="\x00":'"'===q?u+='"':"'"===q?
u+="'":"\n"!==q&&("x"===q?(t+2>=B&&f(m,v,"Truncated \\xNN escape"),u+=String.fromCharCode(parseInt(L.substr(t+1,2),16)),t+=2):y||"u"!==q?y||"U"!==q?u+="\\"+q:(t+8>=B&&f(m,v,"Truncated \\UXXXXXXXX escape"),u+=String.fromCodePoint(parseInt(L.substr(t+1,8),16)),t+=8):(t+4>=B&&f(m,v,"Truncated \\uXXXX escape"),u+=String.fromCharCode(parseInt(L.substr(t+1,4),16)),t+=4))):y&&127<q.charCodeAt(0)?f(m,v,"bytes can only contain ASCII literal characters"):u+=q;m=u;m=[l(m),p,y]}p=m;m=p[0];v=p[1];p=p[2];0!=n&&
h!==p&&f(a,d,"cannot mix bytes and nonbytes literals");h=p;if(v){if(!Sk.__future__.python3)throw new Sk.builtin.SyntaxError("invalid string (f-strings are not supported in Python 2)",a.c_filename,b(d,n).lineno);var C=m.$jsstr();[C]=ba(C,0,C.length,!1,0,a,b(d,n));g.push.apply(g,C.values);C=null}else C?C.s=C.s.sq$concat(m):(C=new (h?Sk.astnodes.Bytes:Sk.astnodes.Str)(m,d.lineno,d.col_offset,a.end_lineno,d.end_col_offset),g.push(C))}d=1===g.length&&g[0].constructor===Sk.astnodes.Str?g[0]:new Sk.astnodes.JoinedStr(g,
d.lineno,d.col_offset,a.end_lineno,d.end_col_offset);return d;case z.T_NUMBER:return new Sk.astnodes.Num(X(a,g.value,d.lineno),d.lineno,d.col_offset);case z.T_ELLIPSIS:return new Sk.astnodes.Ellipsis(d.lineno,d.col_offset,d.end_lineno,d.end_col_offset);case z.T_LPAR:return g=b(d,1),g.type==z.T_RPAR?new Sk.astnodes.Tuple([],Sk.astnodes.Load,d.lineno,d.col_offset,d.end_lineno,d.end_col_offset):g.type==r.yield_expr?x(a,g):1==c(g)?W(a,g):b(g,1).type==r.comp_for?w(E(a,g),d):w(W(a,g),d);case z.T_LSQB:g=
b(d,1);if(g.type==z.T_RSQB)return new Sk.astnodes.List([],Sk.astnodes.Load,d.lineno,d.col_offset,d.end_lineno,d.end_col_offset);e(g,r.testlist_comp);if(1==c(g)||b(g,1).type==z.T_COMMA)return(a=A(a,g))?new Sk.astnodes.List(a,Sk.astnodes.Load,d.lineno,d.col_offset,d.end_lineno,d.end_col_offset):null;h=g;Sk.asserts.assert(h.type==r.testlist_comp);a=aa(a,h,1);return w(a,d);case z.T_LBRACE:g=b(d,1);if(g.type==z.T_RBRACE)return new Sk.astnodes.Dict(null,null,d.lineno,d.col_offset,d.end_lineno,d.end_col_offset);
h=b(g,0).type==z.T_DOUBLESTAR;if(1==c(g)||1<c(g)&&b(g,1).type==z.T_COMMA){h=g;n=[];Sk.asserts.assert(h.type===r.dictorsetmaker);for(g=0;g<c(h);g+=2)C=x(a,b(h,g)),n[g/2]=C;a=new Sk.astnodes.Set(n,h.lineno,h.col_offset)}else if(1<c(g)&&b(g,1).type==r.comp_for)h=g,Sk.asserts.assert(h.type===r.dictorsetmaker),Sk.asserts.assert(1<c(h)),g=x(a,b(h,0)),a=S(a,b(h,1)),a=new Sk.astnodes.SetComp(g,a,h.lineno,h.col_offset);else if(c(g)>3-h&&b(g,3-h).type==r.comp_for){if(h)return f(a,d,"dict unpacking cannot be used in dict comprehension"),
null;h=g;Sk.asserts.assert(3<c(h));e(b(h,1),z.T_COLON);g=x(a,b(h,0));n=x(a,b(h,2));a=S(a,b(h,3));a=new Sk.astnodes.DictComp(g,n,a,h.lineno,h.col_offset)}else{h=g;n=[];C=[];for(p=g=0;p<c(h);p++)m=a,v=h,y=p,b(v,y).type==z.T_DOUBLESTAR?(Sk.asserts.assert(2<=c(v)-y),p=x(m,b(v,y+1)),m={key:null,value:p,i:y+2}):(Sk.asserts.assert(3<=c(v)-y),(p=x(m,b(v,y)))?(t=p,e(b(v,y+1),z.T_COLON),m=(p=x(m,b(v,y+2)))?{key:t,value:p,i:y+3}:!1):m=0),p=m.i,n[g]=m.key,C[g]=m.value,g++;a=new Sk.astnodes.Dict(n,C,h.lineno,
h.col_offset,h.end_lineno,h.end_col_offset)}return w(a,d);default:return Sk.asserts.fail("unhandled atom "+g.type),null}}function D(a,d){var g,f=0;e(d,r.atom_expr);var h=c(d);b(d,0).type===z.T_AWAIT&&(f=1,Sk.asserts.assert(1<h));var k=T(a,b(d,f));if(!k)return null;if(1===h)return k;if(f&&2===h)return new Sk.astnodes.Await(k,d.lineno,d.col_offset);for(g=f+1;g<h;g++){var n=b(d,g);if(n.type!==r.trailer)break;n=G(a,n,k);if(!n)return null;n.lineno=k.lineno;n.col_offset=k.col_offset;k=n}return f?new Sk.astnodes.Await(k,
d.line,d.col_offset):k}function x(a,d){a:for(;;){switch(d.type){case r.test:case r.test_nocond:if(b(d,0).type===r.lambdef||b(d,0).type===r.lambdef_nocond){var g=b(d,0);3===c(g)?(d=new Sk.astnodes.arguments_([],null,null,[]),a=x(a,b(g,2))):(d=u(a,b(g,1)),a=x(a,b(g,3)));return new Sk.astnodes.Lambda(d,a,g.lineno,g.col_offset)}if(1<c(d))return Sk.asserts.assert(5===c(d)),new Sk.astnodes.IfExp(x(a,b(d,2)),x(a,b(d,0)),x(a,b(d,4)),d.lineno,d.col_offset);case r.or_test:case r.and_test:if(1===c(d)){d=b(d,
0);continue a}var f=[];for(g=0;g<c(d);g+=2)f[g/2]=x(a,b(d,g));if("and"===b(d,1).value)return new Sk.astnodes.BoolOp(Sk.astnodes.And,f,d.lineno,d.col_offset);Sk.asserts.assert("or"===b(d,1).value);return new Sk.astnodes.BoolOp(Sk.astnodes.Or,f,d.lineno,d.col_offset);case r.not_test:if(1===c(d)){d=b(d,0);continue a}else return new Sk.astnodes.UnaryOp(Sk.astnodes.Not,x(a,b(d,1)),d.lineno,d.col_offset);case r.comparison:if(1===c(d)){d=b(d,0);continue a}else{var h=[];f=[];for(g=1;g<c(d);g+=2)h[(g-1)/2]=
p(a,b(d,g)),f[(g-1)/2]=x(a,b(d,g+1));return new Sk.astnodes.Compare(x(a,b(d,0)),h,f,d.lineno,d.col_offset)}case r.star_expr:return e(d,r.star_expr),new Sk.astnodes.Starred(x(a,b(d,1)),Sk.astnodes.Load,d.lineno,d.col_offset);case r.expr:case r.xor_expr:case r.and_expr:case r.shift_expr:case r.arith_expr:case r.term:if(1===c(d)){d=b(d,0);continue a}var k=d,l=new Sk.astnodes.BinOp(x(a,b(k,0)),n(b(k,1)),x(a,b(k,2)),k.lineno,k.col_offset),m=(c(k)-1)/2;for(d=1;d<m;++d)g=b(k,2*d+1),f=n(g),h=x(a,b(k,2*d+
2)),l=new Sk.astnodes.BinOp(l,f,h,g.lineno,g.col_offset);return l;case r.yield_expr:return f=!1,h=null,1<c(d)&&(g=b(d,1)),g&&(h=b(g,c(g)-1),2==c(g)?(f=!0,h=x(a,h)):h=W(a,h)),f?new Sk.astnodes.YieldFrom(h,d.lineno,d.col_offset):new Sk.astnodes.Yield(h,d.lineno,d.col_offset);case r.factor:if(1===c(d)){d=b(d,0);continue a}return F(a,d);case r.power:return g=d,e(g,r.power),d=D(a,b(g,0)),1!==c(g)&&b(g,c(g)-1).type===r.factor&&(a=x(a,b(g,c(g)-1)),d=new Sk.astnodes.BinOp(d,Sk.astnodes.Pow,a,g.lineno,g.col_offset)),
d;default:Sk.asserts.fail("unhandled expr","n.type: %d",d.type)}break}}function P(a,d){d.type===r.stmt&&(Sk.asserts.assert(1===c(d)),d=b(d,0));d.type===r.simple_stmt&&(Sk.asserts.assert(1===h(d)),d=b(d,0));if(d.type===r.small_stmt)switch(d=b(d,0),d.type){case r.expr_stmt:return da(a,d);case r.del_stmt:var k=d;e(k,r.del_stmt);return new Sk.astnodes.Delete(y(a,b(k,1),Sk.astnodes.Del),k.lineno,k.col_offset);case r.pass_stmt:return new Sk.astnodes.Pass(d.lineno,d.col_offset);case r.flow_stmt:return U(a,
d);case r.import_stmt:var n=d,p;e(n,r.import_stmt);var m=n.lineno;d=n.col_offset;n=b(n,0);if(n.type===r.import_name){n=b(n,1);e(n,r.dotted_as_names);var q=[];for(p=0;p<c(n);p+=2)q[p/2]=B(a,b(n,p));a=new Sk.astnodes.Import(q,m,d)}else if(n.type===r.import_from){var w=null;k=0;for(q=1;q<c(n);++q)if(b(n,q).type===r.dotted_name){w=B(a,b(n,q));q++;break}else if(b(n,q).type===z.T_DOT)k++;else if(b(n,q).type===z.T_ELLIPSIS)k+=3;else break;++q;switch(b(n,q).type){case z.T_STAR:n=b(n,q);break;case z.T_LPAR:n=
b(n,q+1);c(n);break;case r.import_as_names:n=b(n,q);q=c(n);if(0===q%2)throw new Sk.builtin.SyntaxError("trailing comma not allowed without surrounding parentheses",a.c_filename,n.lineno);break;default:throw new Sk.builtin.SyntaxError("Unexpected node-type in from-import",a.c_filename,n.lineno);}q=[];if(n.type===z.T_STAR)q[0]=B(a,n);else for(p=0;p<c(n);p+=2)q[p/2]=B(a,b(n,p));a=w?w.name.v:"";a=new Sk.astnodes.ImportFrom(l(a),q,k,m,d)}else throw new Sk.builtin.SyntaxError("unknown import statement",
a.c_filename,n.lineno);return a;case r.global_stmt:a=d;d=[];e(a,r.global_stmt);for(k=1;k<c(a);k+=2)d[(k-1)/2]=l(b(a,k).value);return new Sk.astnodes.Global(d,a.lineno,a.col_offset);case r.nonlocal_stmt:f(a,d,"Not implemented: nonlocal");break;case r.assert_stmt:return k=d,e(k,r.assert_stmt),2===c(k)?a=new Sk.astnodes.Assert(x(a,b(k,1)),null,k.lineno,k.col_offset):4===c(k)?a=new Sk.astnodes.Assert(x(a,b(k,1)),x(a,b(k,3)),k.lineno,k.col_offset):(Sk.asserts.fail("improper number of parts to assert stmt"),
a=void 0),a;case r.print_stmt:k=d;Sk.__future__.print_function&&f(a,k,"Missing parentheses in call to 'print'");n=1;m=null;e(k,r.print_stmt);2<=c(k)&&b(k,1).type===z.T_RIGHTSHIFT&&(m=x(a,b(k,2)),n=4);d=[];for(w=0;n<c(k);n+=2,++w)d[w]=x(a,b(k,n));a=b(k,c(k)-1).type===z.T_COMMA?!1:!0;return new Sk.astnodes.Print(m,d,a,k.lineno,k.col_offset);case r.debugger_stmt:return new Sk.astnodes.Debugger(d.lineno,d.col_offset);default:Sk.asserts.fail("unhandled small_stmt")}else switch(k=b(d,0),e(d,r.compound_stmt),
k.type){case r.if_stmt:e(k,r.if_stmt);if(4===c(k))a=new Sk.astnodes.If(x(a,b(k,1)),t(a,b(k,3)),[],k.lineno,k.col_offset);else if(d=b(k,4).value.charAt(2),"s"===d)a=new Sk.astnodes.If(x(a,b(k,1)),t(a,b(k,3)),t(a,b(k,6)),k.lineno,k.col_offset);else if("i"===d){m=c(k)-4;n=!1;d=[];b(k,m+1).type===z.T_NAME&&"s"===b(k,m+1).value.charAt(2)&&(n=!0,m-=3);m/=4;n&&(d=[new Sk.astnodes.If(x(a,b(k,c(k)-6)),t(a,b(k,c(k)-4)),t(a,b(k,c(k)-1)),b(k,c(k)-6).lineno,b(k,c(k)-6).col_offset)],m--);for(w=0;w<m;++w)n=5+4*
(m-w-1),d=[new Sk.astnodes.If(x(a,b(k,n)),t(a,b(k,n+2)),d,b(k,n).lineno,b(k,n).col_offset)];a=new Sk.astnodes.If(x(a,b(k,1)),t(a,b(k,3)),d,k.lineno,k.col_offset)}else Sk.asserts.fail("unexpected token in 'if' statement"),a=void 0;return a;case r.while_stmt:return e(k,r.while_stmt),4===c(k)?a=new Sk.astnodes.While(x(a,b(k,1)),t(a,b(k,3)),[],k.lineno,k.col_offset):7===c(k)?a=new Sk.astnodes.While(x(a,b(k,1)),t(a,b(k,3)),t(a,b(k,6)),k.lineno,k.col_offset):(Sk.asserts.fail("wrong number of tokens for 'while' stmt"),
a=void 0),a;case r.for_stmt:return d=[],e(k,r.for_stmt),9===c(k)&&(d=t(a,b(k,8))),n=b(k,1),m=y(a,n,Sk.astnodes.Store),m=1===c(n)?m[0]:new Sk.astnodes.Tuple(m,Sk.astnodes.Store,k.lineno,k.col_offset),new Sk.astnodes.For(m,W(a,b(k,3)),t(a,b(k,5)),d,k.lineno,k.col_offset);case r.try_stmt:d=[];p=c(k);m=(p-3)/3;w=[];q=null;e(k,r.try_stmt);n=t(a,b(k,2));if(b(k,p-3).type===z.T_NAME)"finally"===b(k,p-3).value?(9<=p&&b(k,p-6).type===z.T_NAME&&(w=t(a,b(k,p-4)),m--),q=t(a,b(k,p-1))):w=t(a,b(k,p-1)),m--;else if(b(k,
p-3).type!==r.except_clause)throw new Sk.builtin.SyntaxError("malformed 'try' statement",a.c_filename,k.lineno);if(0<m)for(p=0;p<m;p++){var A=p;var u=a,v=b(k,3+3*p),C=b(k,5+3*p);e(v,r.except_clause);e(C,r.suite);if(1===c(v))var E=new Sk.astnodes.ExceptHandler(null,null,t(u,C),v.lineno,v.col_offset);else 2===c(v)?E=new Sk.astnodes.ExceptHandler(x(u,b(v,1)),null,t(u,C),v.lineno,v.col_offset):4===c(v)?(Sk.__future__.python3&&","==b(v,2).value&&f(u,v,"Old-style 'except' clauses are not supported in Python 3"),
x(u,b(v,1)),E=x(u,b(v,3)),g(u,E,Sk.astnodes.Store,b(v,3)),E=new Sk.astnodes.ExceptHandler(x(u,b(v,1)),E,t(u,C),v.lineno,v.col_offset)):(Sk.asserts.fail("wrong number of children for except clause"),E=void 0);d[A]=E}Sk.asserts.assert(!!q||0!=d.length);return new Sk.astnodes.Try(n,d,w,q,k.lineno,k.col_offset);case r.with_stmt:d=[];e(k,r.with_stmt);for(m=1;m<c(k)-2;m+=2)n=void 0,q=a,p=b(k,m),e(p,r.with_item),w=x(q,b(p,0)),3==c(p)&&(n=x(q,b(p,2)),g(q,n,Sk.astnodes.Store,p)),n=new Sk.astnodes.withitem(w,
n),d[(m-1)/2]=n;a=t(a,b(k,c(k)-1));a=new Sk.astnodes.With(d,a,k.lineno,k.col_offset);return a;case r.funcdef:return R(a,k,[],!1);case r.classdef:return O(a,k,[]);case r.decorated:m=null;e(k,r.decorated);n=b(k,0);e(n,r.decorators);d=[];for(w=0;w<c(n);++w){q=d;p=w;A=a;E=b(n,w);e(E,r.decorator);e(b(E,0),z.T_AT);e(b(E,c(E)-1),z.T_NEWLINE);var F,D=b(E,1);e(D,r.dotted_name);u=D.lineno;v=D.col_offset;C=l(b(D,0).value);var G=new Sk.astnodes.Name(C,Sk.astnodes.Load,u,v);for(F=2;F<c(D);F+=2)C=l(b(D,F).value),
G=new Sk.astnodes.Attribute(G,C,Sk.astnodes.Load,u,v);u=G;A=3===c(E)?u:5===c(E)?new Sk.astnodes.Call(u,[],[],null,null,E.lineno,E.col_offset):K(A,b(E,3),u);q[p]=A}Sk.asserts.assert(b(k,1).type==r.funcdef||b(k,1).type==r.async_funcdef||b(k,1).type==r.classdef);b(k,1).type==r.funcdef?(m=b(k,1),m=R(a,m,d,!1)):b(k,1).type==r.classdef?m=O(a,b(k,1),d):b(k,1).type==r.async_funcdef&&(m=b(k,1),e(m,r.async_funcdef),e(b(m,0),z.T_NAME),Sk.asserts.assert(("async"===b(m,0)).value),e(b(m,1),r.funcdef),m=R(a,m,d,
!0));m&&(m.lineno=k.lineno,m.col_offset=k.col_offset);return m;case r.async_stmt:f(a,k,"Not implemented: async");break;default:Sk.asserts.assert("unhandled compound_stmt")}}var r=Sk.ParseTables.sym,z=Sk.token.tokens,Z={Slice_kind:1,ExtSlice_kind:2,Index_kind:3},Q={};Q[z.T_VBAR]=Sk.astnodes.BitOr;Q[z.T_CIRCUMFLEX]=Sk.astnodes.BitXor;Q[z.T_AMPER]=Sk.astnodes.BitAnd;Q[z.T_LEFTSHIFT]=Sk.astnodes.LShift;Q[z.T_RIGHTSHIFT]=Sk.astnodes.RShift;Q[z.T_PLUS]=Sk.astnodes.Add;Q[z.T_MINUS]=Sk.astnodes.Sub;Q[z.T_STAR]=
Sk.astnodes.Mult;Q[z.T_SLASH]=Sk.astnodes.Div;Q[z.T_DOUBLESLASH]=Sk.astnodes.FloorDiv;Q[z.T_PERCENT]=Sk.astnodes.Mod;Sk.setupOperators=function(a){a?Q[z.T_AT]=Sk.astnodes.MatMult:Q[z.T_AT]&&delete Q[z.T_AT]};Sk.exportSymbol("Sk.setupOperators",Sk.setupOperators);const fa=/_[eE]|[eE]_|\._|j_/,ha=/_\.|[+-]_|^0_\D|_j/,ia=/_(?=[^_])/g;Sk.astFromParse=function(d,g,f){var k,n=new a("utf-8",g,f),l=[],p=0;switch(d.type){case r.file_input:for(k=0;k<c(d)-1;++k){var m=b(d,k);if(d.type!==z.T_NEWLINE)if(e(m,r.stmt),
f=h(m),1===f)l[p++]=P(n,m);else for(m=b(m,0),e(m,r.simple_stmt),g=0;g<f;++g)l[p++]=P(n,b(m,2*g))}return new Sk.astnodes.Module(l);case r.eval_input:Sk.asserts.fail("todo;");case r.single_input:Sk.asserts.fail("todo;");default:Sk.asserts.fail("todo;")}};Sk.astDump=function(a){var b=function(a){var b,c="";for(b=0;b<a;++b)c+=" ";return c},c=function(a,d){var e;if(null===a)return d+"None";if(a.prototype&&void 0!==a.prototype._astname&&a.prototype._isenum)return d+a.prototype._astname+"()";if(void 0!==
a._astname){var g=b(a._astname.length+1);var f=[];for(e=0;e<a._fields.length;e+=2){var h=a._fields[e];var k=a._fields[e+1](a);var n=b(h.length+1);f.push([h,c(k,d+g+n)])}k=[];for(e=0;e<f.length;++e)n=f[e],k.push(n[0]+"="+n[1].replace(/^\s+/,""));e=k.join(",\n"+d+g);return d+a._astname+"("+e+")"}if(Sk.isArrayLike(a)){g=[];for(e=0;e<a.length;++e)f=a[e],g.push(c(f,d+" "));a=g.join(",\n");return d+"["+a.replace(/^\s+/,"")+"]"}a=!0===a?"True":!1===a?"False":a instanceof Sk.builtin.lng?a.tp$str().v:a instanceof
Sk.builtin.str?a.$r().v:""+a;return d+a};return c(a,"")};Sk.exportSymbol("Sk.astFromParse",Sk.astFromParse);Sk.exportSymbol("Sk.astDump",Sk.astDump)},function(m,q){function a(a,b,c){this.__name=a;this.__flags=b;this.__scope=b>>11&7;this.__namespaces=c||[]}function c(a,b,c,e,f){this.symFlags={};this.name=b;this.varnames=[];this.children=[];this.blockType=c;this.returnsValue=this.varkeywords=this.varargs=this.generator=this.childHasFree=this.hasFree=this.isNested=!1;this.lineno=f;this.table=a;a.cur&&
(a.cur.nested||"function"===a.cur.blockType)&&(this.isNested=!0);e.scopeId=l++;a.stss[e.scopeId]=this;this.symbols={}}function b(a){this.filename=a;this.top=this.cur=null;this.stack=[];this.curClass=this.global=null;this.tmpname=0;this.stss={}}function e(a,b){var c;for(c=0;c<b.length;c++)a(b[c])}function f(a,b){for(var c in b)a[c]=b[c]}Sk.exportSymbol("Sk.SYMTAB_CONSTS",{DEF_GLOBAL:1,DEF_LOCAL:2,DEF_PARAM:4,USE:8,DEF_STAR:16,DEF_DOUBLESTAR:32,DEF_INTUPLE:64,DEF_FREE:128,DEF_FREE_GLOBAL:256,DEF_FREE_CLASS:512,
DEF_IMPORT:1024,DEF_BOUND:1030,SCOPE_OFF:11,SCOPE_MASK:7,LOCAL:1,GLOBAL_EXPLICIT:2,GLOBAL_IMPLICIT:3,FREE:4,CELL:5,OPT_IMPORT_STAR:1,OPT_EXEC:2,OPT_BARE_EXEC:4,OPT_TOPLEVEL:8,GENERATOR:2,GENERATOR_EXPRESSION:2,ModuleBlock:"module",FunctionBlock:"function",ClassBlock:"class"});a.prototype.get_name=function(){return this.__name};a.prototype.is_referenced=function(){return!!(this.__flags&8)};a.prototype.is_parameter=function(){return!!(this.__flags&4)};a.prototype.is_global=function(){return 3===this.__scope||
2==this.__scope};a.prototype.is_declared_global=function(){return 2==this.__scope};a.prototype.is_local=function(){return!!(this.__flags&1030)};a.prototype.is_free=function(){return 4==this.__scope};a.prototype.is_imported=function(){return!!(this.__flags&1024)};a.prototype.is_assigned=function(){return!!(this.__flags&2)};a.prototype.is_namespace=function(){return this.__namespaces&&0<this.__namespaces.length};a.prototype.get_namespaces=function(){return this.__namespaces};var l=0;c.prototype.get_type=
function(){return this.blockType};c.prototype.get_name=function(){return this.name};c.prototype.get_lineno=function(){return this.lineno};c.prototype.is_nested=function(){return this.isNested};c.prototype.has_children=function(){return 0<this.children.length};c.prototype.get_identifiers=function(){return this._identsMatching(function(){return!0})};c.prototype.lookup=function(b){if(this.symbols.hasOwnProperty(b))b=this.symbols[b];else{var c=this.symFlags[b];var e=this.__check_children(b);b=this.symbols[b]=
new a(b,c,e)}return b};c.prototype.__check_children=function(a){var b,c=[];for(b=0;b<this.children.length;++b){var e=this.children[b];e.name===a&&c.push(e)}return c};c.prototype._identsMatching=function(a){var b,c=[];for(b in this.symFlags)this.symFlags.hasOwnProperty(b)&&a(this.symFlags[b])&&c.push(b);c.sort();return c};c.prototype.get_parameters=function(){Sk.asserts.assert("function"==this.get_type(),"get_parameters only valid for function scopes");this._funcParams||(this._funcParams=this._identsMatching(function(a){return a&
4}));return this._funcParams};c.prototype.get_locals=function(){Sk.asserts.assert("function"==this.get_type(),"get_locals only valid for function scopes");this._funcLocals||(this._funcLocals=this._identsMatching(function(a){return a&1030}));return this._funcLocals};c.prototype.get_globals=function(){Sk.asserts.assert("function"==this.get_type(),"get_globals only valid for function scopes");this._funcGlobals||(this._funcGlobals=this._identsMatching(function(a){a=a>>11&7;return 3==a||2==a}));return this._funcGlobals};
c.prototype.get_frees=function(){Sk.asserts.assert("function"==this.get_type(),"get_frees only valid for function scopes");this._funcFrees||(this._funcFrees=this._identsMatching(function(a){return 4==(a>>11&7)}));return this._funcFrees};c.prototype.get_methods=function(){var a;Sk.asserts.assert("class"==this.get_type(),"get_methods only valid for class scopes");if(!this._classMethods){var b=[];for(a=0;a<this.children.length;++a)b.push(this.children[a].name);b.sort();this._classMethods=b}return this._classMethods};
c.prototype.getScope=function(a){a=this.symFlags[a];return void 0===a?0:a>>11&7};b.prototype.getStsForAst=function(a){Sk.asserts.assert(void 0!==a.scopeId,"ast wasn't added to st?");a=this.stss[a.scopeId];Sk.asserts.assert(void 0!==a,"unknown sym tab entry");return a};b.prototype.SEQStmt=function(a){var b,c;if(null!==a){Sk.asserts.assert(Sk.isArrayLike(a),"SEQ: nodes isn't array? got "+a.toString());var e=a.length;for(c=0;c<e;++c)(b=a[c])&&this.visitStmt(b)}};b.prototype.SEQExpr=function(a){var b,
c;if(null!==a){Sk.asserts.assert(Sk.isArrayLike(a),"SEQ: nodes isn't array? got "+a.toString());var e=a.length;for(c=0;c<e;++c)(b=a[c])&&this.visitExpr(b)}};b.prototype.enterBlock=function(a,b,e,f){a=Sk.fixReserved(a);var d=null;this.cur&&(d=this.cur,this.stack.push(this.cur));this.cur=new c(this,a,b,e,f);"top"===a&&(this.global=this.cur.symFlags);d&&d.children.push(this.cur)};b.prototype.exitBlock=function(){this.cur=null;0<this.stack.length&&(this.cur=this.stack.pop())};b.prototype.visitParams=
function(a,b){var c;for(c=0;c<a.length;++c)if(b=a[c],b.constructor===Sk.astnodes.arg)this.addDef(b.arg,4,b.lineno);else throw new Sk.builtin.SyntaxError("invalid expression in parameter list",this.filename);};b.prototype.visitArguments=function(a,b){a.args&&this.visitParams(a.args,!0);a.kwonlyargs&&this.visitParams(a.kwonlyargs,!0);a.vararg&&(this.addDef(a.vararg.arg,4,b),this.cur.varargs=!0);a.kwarg&&(this.addDef(a.kwarg.arg,4,b),this.cur.varkeywords=!0)};b.prototype.newTmpname=function(a){this.addDef(new Sk.builtin.str("_["+
++this.tmpname+"]"),2,a)};b.prototype.addDef=function(a,b,c){var d=Sk.mangleName(this.curClass,a).v;d=Sk.fixReserved(d);var e=this.cur.symFlags[d];if(void 0!==e){if(b&4&&e&4)throw new Sk.builtin.SyntaxError("duplicate argument '"+a.v+"' in function definition",this.filename,c);e|=b}else e=b;this.cur.symFlags[d]=e;b&4?this.cur.varnames.push(d):b&1&&(e=b,a=this.global[d],void 0!==a&&(e|=a),this.global[d]=e)};b.prototype.visitSlice=function(a){var b;switch(a.constructor){case Sk.astnodes.Slice:a.lower&&
this.visitExpr(a.lower);a.upper&&this.visitExpr(a.upper);a.step&&this.visitExpr(a.step);break;case Sk.astnodes.ExtSlice:for(b=0;b<a.dims.length;++b)this.visitSlice(a.dims[b]);break;case Sk.astnodes.Index:this.visitExpr(a.value)}};b.prototype.visitStmt=function(a){var b;Sk.asserts.assert(void 0!==a,"visitStmt called with undefined");switch(a.constructor){case Sk.astnodes.FunctionDef:this.addDef(a.name,2,a.lineno);a.args.defaults&&this.SEQExpr(a.args.defaults);a.decorator_list&&this.SEQExpr(a.decorator_list);
this.enterBlock(a.name.v,"function",a,a.lineno);this.visitArguments(a.args,a.lineno);this.SEQStmt(a.body);this.exitBlock();break;case Sk.astnodes.ClassDef:this.addDef(a.name,2,a.lineno);this.SEQExpr(a.bases);a.decorator_list&&this.SEQExpr(a.decorator_list);this.enterBlock(a.name.v,"class",a,a.lineno);this.curClass=a.name;this.SEQStmt(a.body);this.exitBlock();break;case Sk.astnodes.Return:if(a.value&&(this.visitExpr(a.value),this.cur.returnsValue=!0,this.cur.generator))throw new Sk.builtin.SyntaxError("'return' with argument inside generator",
this.filename);break;case Sk.astnodes.Delete:this.SEQExpr(a.targets);break;case Sk.astnodes.Assign:this.SEQExpr(a.targets);this.visitExpr(a.value);break;case Sk.astnodes.AnnAssign:if(a.target.constructor==Sk.astnodes.Name){var c=a.target;var f=Sk.mangleName(this.curClass,c.id).v;f=Sk.fixReserved(f);c=this.cur.symFlags[f];if(c&2049&&this.global!=this.cur.symFlags&&a.simple)throw new Sk.builtin.SyntaxError("annotated name '"+f+"' can't be global",this.filename,a.lineno);a.simple?this.addDef(new Sk.builtin.str(f),
4098,a.lineno):a.value&&this.addDef(new Sk.builtin.str(f),2,a.lineno)}else this.visitExpr(a.target);this.visitExpr(a.annotation);a.value&&this.visitExpr(a.value);break;case Sk.astnodes.AugAssign:this.visitExpr(a.target);this.visitExpr(a.value);break;case Sk.astnodes.Print:a.dest&&this.visitExpr(a.dest);this.SEQExpr(a.values);break;case Sk.astnodes.For:this.visitExpr(a.target);this.visitExpr(a.iter);this.SEQStmt(a.body);a.orelse&&this.SEQStmt(a.orelse);break;case Sk.astnodes.While:this.visitExpr(a.test);
this.SEQStmt(a.body);a.orelse&&this.SEQStmt(a.orelse);break;case Sk.astnodes.If:this.visitExpr(a.test);this.SEQStmt(a.body);a.orelse&&this.SEQStmt(a.orelse);break;case Sk.astnodes.Raise:a.exc&&(this.visitExpr(a.exc),a.inst&&(this.visitExpr(a.inst),a.tback&&this.visitExpr(a.tback)),a.cause&&this.visitExpr(a.cause));break;case Sk.astnodes.Assert:this.visitExpr(a.test);a.msg&&this.visitExpr(a.msg);break;case Sk.astnodes.Import:case Sk.astnodes.ImportFrom:this.visitAlias(a.names,a.lineno);break;case Sk.astnodes.Global:var k=
a.names.length;for(b=0;b<k;++b){f=Sk.mangleName(this.curClass,a.names[b]).v;f=Sk.fixReserved(f);c=this.cur.symFlags[f];if(c&10){if(c&2)throw new Sk.builtin.SyntaxError("name '"+f+"' is assigned to before global declaration",this.filename,a.lineno);throw new Sk.builtin.SyntaxError("name '"+f+"' is used prior to global declaration",this.filename,a.lineno);}this.addDef(new Sk.builtin.str(f),1,a.lineno)}break;case Sk.astnodes.Expr:this.visitExpr(a.value);break;case Sk.astnodes.Pass:case Sk.astnodes.Break:case Sk.astnodes.Continue:case Sk.astnodes.Debugger:break;
case Sk.astnodes.With:e(this.visit_withitem.bind(this),a.items);e(this.visitStmt.bind(this),a.body);break;case Sk.astnodes.Try:this.SEQStmt(a.body);this.visitExcepthandlers(a.handlers);this.SEQStmt(a.orelse);this.SEQStmt(a.finalbody);break;default:Sk.asserts.fail("Unhandled type "+a.constructor.name+" in visitStmt")}};b.prototype.visit_withitem=function(a){this.visitExpr(a.context_expr);a.optional_vars&&this.visitExpr(a.optional_vars)};b.prototype.visitExpr=function(a){Sk.asserts.assert(void 0!==
a,"visitExpr called with undefined");switch(a.constructor){case Sk.astnodes.BoolOp:this.SEQExpr(a.values);break;case Sk.astnodes.BinOp:this.visitExpr(a.left);this.visitExpr(a.right);break;case Sk.astnodes.UnaryOp:this.visitExpr(a.operand);break;case Sk.astnodes.Lambda:this.addDef(new Sk.builtin.str("lambda"),2,a.lineno);a.args.defaults&&this.SEQExpr(a.args.defaults);this.enterBlock("lambda","function",a,a.lineno);this.visitArguments(a.args,a.lineno);this.visitExpr(a.body);this.exitBlock();break;case Sk.astnodes.IfExp:this.visitExpr(a.test);
this.visitExpr(a.body);this.visitExpr(a.orelse);break;case Sk.astnodes.Dict:this.SEQExpr(a.keys);this.SEQExpr(a.values);break;case Sk.astnodes.DictComp:case Sk.astnodes.SetComp:this.visitComprehension(a.generators,0);break;case Sk.astnodes.ListComp:this.newTmpname(a.lineno);this.visitExpr(a.elt);this.visitComprehension(a.generators,0);break;case Sk.astnodes.GeneratorExp:this.visitGenexp(a);break;case Sk.astnodes.Yield:a.value&&this.visitExpr(a.value);this.cur.generator=!0;if(this.cur.returnsValue)throw new Sk.builtin.SyntaxError("'return' with argument inside generator",
this.filename);break;case Sk.astnodes.Compare:this.visitExpr(a.left);this.SEQExpr(a.comparators);break;case Sk.astnodes.Call:this.visitExpr(a.func);if(a.args)for(let b of a.args)b.constructor===Sk.astnodes.Starred?this.visitExpr(b.value):this.visitExpr(b);if(a.keywords)for(let b of a.keywords)this.visitExpr(b.value);break;case Sk.astnodes.Num:case Sk.astnodes.Str:case Sk.astnodes.Bytes:break;case Sk.astnodes.JoinedStr:for(let b of a.values)this.visitExpr(b);break;case Sk.astnodes.FormattedValue:this.visitExpr(a.value);
a.format_spec&&this.visitExpr(a.format_spec);break;case Sk.astnodes.Attribute:this.visitExpr(a.value);break;case Sk.astnodes.Subscript:this.visitExpr(a.value);this.visitSlice(a.slice);break;case Sk.astnodes.Name:this.addDef(a.id,a.ctx===Sk.astnodes.Load?8:2,a.lineno);break;case Sk.astnodes.NameConstant:break;case Sk.astnodes.List:case Sk.astnodes.Tuple:case Sk.astnodes.Set:this.SEQExpr(a.elts);break;case Sk.astnodes.Starred:this.visitExpr(a.value);break;default:Sk.asserts.fail("Unhandled type "+a.constructor.name+
" in visitExpr")}};b.prototype.visitComprehension=function(a,b){var c,d=a.length;for(c=b;c<d;++c)b=a[c],this.visitExpr(b.target),this.visitExpr(b.iter),this.SEQExpr(b.ifs)};b.prototype.visitAlias=function(a,b){var c,d;for(d=0;d<a.length;++d){var e=a[d];var f=c=null===e.asname?e.name.v:e.asname.v;e=c.indexOf(".");-1!==e&&(f=c.substr(0,e));if("*"!==c)this.addDef(new Sk.builtin.str(f),1024,b);else if("module"!==this.cur.blockType)throw new Sk.builtin.SyntaxError("import * only allowed at module level",
this.filename);}};b.prototype.visitGenexp=function(a){var b=a.generators[0];this.visitExpr(b.iter);this.enterBlock("genexpr","function",a,a.lineno);this.cur.generator=!0;this.addDef(new Sk.builtin.str(".0"),4,a.lineno);this.visitExpr(b.target);this.SEQExpr(b.ifs);this.visitComprehension(a.generators,1);this.visitExpr(a.elt);this.exitBlock()};b.prototype.visitExcepthandlers=function(a){var b,c;for(b=0;c=a[b];++b)c.type&&this.visitExpr(c.type),c.name&&this.visitExpr(c.name),this.SEQStmt(c.body)};b.prototype.analyzeBlock=
function(a,b,c,e){var d={};var g={},h={},n={},l={};"class"==a.blockType&&(f(h,e),b&&f(n,b));for(q in a.symFlags){var m=a.symFlags[q];this.analyzeName(a,g,q,m,b,d,c,e)}"class"!==a.blockType&&("function"===a.blockType&&f(n,d),b&&f(n,b),f(h,e));d={};var q=a.children.length;for(m=0;m<q;++m)if(e=a.children[m],this.analyzeChildBlock(e,n,l,h,d),e.hasFree||e.childHasFree)a.childHasFree=!0;f(l,d);"function"===a.blockType&&this.analyzeCells(g,l);b=this.updateSymbols(a.symFlags,g,b,l,"class"===a.blockType);
a.hasFree=a.hasFree||b;f(c,l)};b.prototype.analyzeChildBlock=function(a,b,c,e,k){var d={};f(d,b);b={};f(b,c);c={};f(c,e);this.analyzeBlock(a,d,b,c);f(k,b)};b.prototype.analyzeCells=function(a,b){var c;for(c in a){var d=a[c];1===d&&void 0!==b[c]&&(a[c]=5,delete b[c])}};b.prototype.updateSymbols=function(a,b,c,e,f){var d,g=!1;for(d in a){var k=a[d];var h=b[d];k|=h<<11;a[d]=k}for(d in e)b=a[d],void 0!==b?f&&b&1031&&(b|=512,a[d]=b):void 0!==c[d]&&(a[d]=8192,g=!0);return g};b.prototype.analyzeName=function(a,
b,c,e,f,l,m,q){if(e&1){if(e&4)throw new Sk.builtin.SyntaxError("name '"+c+"' is local and global",this.filename,a.lineno);b[c]=2;q[c]=null;f&&void 0!==f[c]&&delete f[c]}else e&1030?(b[c]=1,l[c]=null,delete q[c]):f&&void 0!==f[c]?(b[c]=4,a.hasFree=!0,m[c]=null):(q&&void 0!==q[c]||!a.isNested||(a.hasFree=!0),b[c]=3)};b.prototype.analyze=function(){this.analyzeBlock(this.top,null,{},{})};Sk.symboltable=function(a,c){var d=new b(c);d.enterBlock("top","module",a,0);d.top=d.cur;for(c=0;c<a.body.length;++c)d.visitStmt(a.body[c]);
d.exitBlock();d.analyze();return d};Sk.dumpSymtab=function(a){var b=function(a){return a?"True":"False"},c=function(a){var b,c=[];for(b=0;b<a.length;++b)c.push((new Sk.builtin.str(a[b])).$r().v);return"["+c.join(", ")+"]"},e=function(a,d){var f,g;void 0===d&&(d="");var k=d+"Sym_type: "+a.get_type()+"\n";k+=d+"Sym_name: "+a.get_name()+"\n";k+=d+"Sym_lineno: "+a.get_lineno()+"\n";k+=d+"Sym_nested: "+b(a.is_nested())+"\n";k+=d+"Sym_haschildren: "+b(a.has_children())+"\n";"class"===a.get_type()?k+=d+
"Class_methods: "+c(a.get_methods())+"\n":"function"===a.get_type()&&(k+=d+"Func_params: "+c(a.get_parameters())+"\n",k+=d+"Func_locals: "+c(a.get_locals())+"\n",k+=d+"Func_globals: "+c(a.get_globals())+"\n",k+=d+"Func_frees: "+c(a.get_frees())+"\n");k+=d+"-- Identifiers --\n";var h=a.get_identifiers();var n=h.length;for(g=0;g<n;++g){var l=a.lookup(h[g]);k+=d+"name: "+l.get_name()+"\n";k+=d+"  is_referenced: "+b(l.is_referenced())+"\n";k+=d+"  is_imported: "+b(l.is_imported())+"\n";k+=d+"  is_parameter: "+
b(l.is_parameter())+"\n";k+=d+"  is_global: "+b(l.is_global())+"\n";k+=d+"  is_declared_global: "+b(l.is_declared_global())+"\n";k+=d+"  is_local: "+b(l.is_local())+"\n";k+=d+"  is_free: "+b(l.is_free())+"\n";k+=d+"  is_assigned: "+b(l.is_assigned())+"\n";k+=d+"  is_namespace: "+b(l.is_namespace())+"\n";var m=l.get_namespaces();var p=m.length;k+=d+"  namespaces: [\n";var q=[];for(f=0;f<p;++f)l=m[f],q.push(e(l,d+"    "));k+=q.join("\n");k+=d+"  ]\n"}return k};return e(a.top,"")};Sk.exportSymbol("Sk.symboltable",
Sk.symboltable);Sk.exportSymbol("Sk.dumpSymtab",Sk.dumpSymtab)},function(m,q){function a(a,b,c,e,f){this.filename=a;this.st=b;this.flags=c;this.canSuspend=e;this.interactive=!1;this.nestlevel=0;this.u=null;this.stack=[];this.result=[];this.allUnits=[];this.source=f?f.split("\n"):!1}function c(){this.name=this.ste=null;this.doesSuspend=this.canSuspend=!1;this.private_=null;this.lineno=this.firstlineno=0;this.linenoSet=!1;this.localnames=[];this.localtemps=[];this.tempsToSave=[];this.blocknum=0;this.blocks=
[];this.curblock=0;this.consts={};this.scopename=null;this.suffixCode=this.switchCode=this.varDeclsCode=this.prefixCode="";this.breakBlocks=[];this.continueBlocks=[];this.exceptBlocks=[];this.finallyBlocks=[]}function b(a){return void 0===h[a]?a:a+"_$rw$"}function e(a,b){var c=b.v;if(null===a||null===c||"_"!==c.charAt(0)||"_"!==c.charAt(1)||"_"===c.charAt(c.length-1)&&"_"===c.charAt(c.length-2))return b;var d=a.v;d.replace(/_/g,"");if(""===d)return b;d=a.v;d.replace(/^_*/,"");return d=new Sk.builtin.str("_"+
d+c)}function f(a){let b='"';for(let c=0;c<a.length;c++){let d=a.charCodeAt(c);b=10==d?b+"\\n":92==d?b+"\\\\":34==d||32>d||127<=d&&256>d?b+("\\x"+("0"+d.toString(16)).substr(-2)):256<=d?b+("\\u"+("000"+d.toString(16)).substr(-4)):b+a.charAt(c)}return b+'"'}var l;Sk.gensymcount=0;c.prototype.activateScope=function(){var a=this;l=function(){var b,c=a.blocks[a.curblock];if(null===c._next)for(b=0;b<arguments.length;++b)c.push(arguments[b])}};a.prototype.getSourceLine=function(a){Sk.asserts.assert(this.source);
return this.source[a-1]};a.prototype.annotateSource=function(a){var b;if(this.source){var c=a.lineno;var d=a.col_offset;l("\n//\n// line ",c,":\n// ",this.getSourceLine(c),"\n// ");for(b=0;b<d;++b)l(" ");l("^\n//\n");Sk.asserts.assert(void 0!==a.lineno&&void 0!==a.col_offset);l("$currLineNo = ",c,";\n$currColNo = ",d,";\n\n")}};a.prototype.gensym=function(a){return a="$"+(a||"")+Sk.gensymcount++};a.prototype.niceName=function(a){return this.gensym(a.replace("<","").replace(">","").replace(" ","_"))};
var h=Sk.builtin.str.reservedWords_;a.prototype.makeConstant=function(a){var b,c="";for(b=0;b<arguments.length;++b)c+=arguments[b];for(d in this.u.consts)if(this.u.consts.hasOwnProperty(d)&&(b=this.u.consts[d],b==c))return d;var d=this.u.scopename+"."+this.gensym("const");this.u.consts[d]=c;return d};a.prototype._gr=function(a,b){var c,d=this.gensym(a);this.u.localtemps.push(d);l("var ",d,"=");for(c=1;c<arguments.length;++c)l(arguments[c]);l(";");return d};a.prototype.outputInterruptTest=function(){var a=
"";if(null!==Sk.execLimit||null!==Sk.yieldLimit&&this.u.canSuspend)a+="var $dateNow = Date.now();",null!==Sk.execLimit&&(a+="if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())}"),null!==Sk.yieldLimit&&this.u.canSuspend&&(a=a+"if ($dateNow - Sk.lastYield > Sk.yieldLimit) {"+("var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '"+this.filename+"',$currLineNo,$currColNo);"),a+="$susp.$blk = $blk;$susp.optional = true;return $susp;}",
this.u.doesSuspend=!0);return a};a.prototype._jumpfalse=function(a,b){a=this._gr("jfalse","(",a,"===false||!Sk.misceval.isTrue(",a,"))");l("if(",a,"){/*test failed */$blk=",b,";continue;}")};a.prototype._jumpundef=function(a,b){l("if(",a,"===undefined){$blk=",b,";continue;}")};a.prototype._jumpnotundef=function(a,b){l("if(",a,"!==undefined){$blk=",b,";continue;}")};a.prototype._jumptrue=function(a,b){a=this._gr("jtrue","(",a,"===true||Sk.misceval.isTrue(",a,"))");l("if(",a,"){/*test passed */$blk=",
b,";continue;}")};a.prototype._jump=function(a){null===this.u.blocks[this.u.curblock]._next&&(l("$blk=",a,";"),this.u.blocks[this.u.curblock]._next=a)};a.prototype._checkSuspension=function(a){if(this.u.canSuspend){var b=this.newBlock("function return or resume suspension");this._jump(b);this.setBlock(b);a=a||{lineno:"$currLineNo",col_offset:"$currColNo"};l("if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'"+this.filename+"',"+a.lineno+","+a.col_offset+"); }");this.u.doesSuspend=!0;
this.u.tempsToSave=this.u.tempsToSave.concat(this.u.localtemps)}else l("if ($ret && $ret.$isSuspension) { $ret = Sk.misceval.retryOptionalSuspensionOrThrow($ret); }")};a.prototype.cunpackstarstoarray=function(a,b){if(!a||0==a.length)return"[]";let c=!1;for(let d of a){if(b&&c)throw new Sk.builtin.SyntaxError("Extended argument unpacking is not permitted in Python 2");d.constructor===Sk.astnodes.Starred&&(c=!0)}if(c){b=this._gr("unpack","[]");for(let c of a)c.constructor!==Sk.astnodes.Starred?l(b,
".push(",this.vexpr(c),");"):(l("$ret = Sk.misceval.iterFor(Sk.abstr.iter(",this.vexpr(c.value),"), function(e) { ",b,".push(e); });"),this._checkSuspension());return b}return"["+a.map(a=>this.vexpr(a)).join(",")+"]"};a.prototype.ctuplelistorset=function(a,b,c){var d;Sk.asserts.assert("tuple"===c||"list"===c||"set"===c);var e=!1;for(d=0;d<a.elts.length;d++)if(a.elts[d].constructor===Sk.astnodes.Starred){e=!0;var f=d;break}if(a.ctx===Sk.astnodes.Store){if(e){if(!Sk.__future__.python3)throw new Sk.builtin.SyntaxError("assignment unpacking with stars is not supported in Python 2",
this.filename,a.lineno);for(d=f+1;d<a.elts.length;d++)if(a.elts[d].constructor===Sk.astnodes.Starred)throw new Sk.builtin.SyntaxError("multiple starred expressions in assignment",this.filename,a.lineno);}c=e?f:a.elts.length;l("$ret = Sk.abstr.sequenceUnpack("+b+","+c+","+(e?a.elts.length-1:c)+", "+e+");");this._checkSuspension();b=this._gr("items","$ret");for(d=0;d<a.elts.length;++d)d===f?this.vexpr(a.elts[d].value,b+"["+d+"]"):this.vexpr(a.elts[d],b+"["+d+"]")}else if(a.ctx===Sk.astnodes.Load||"set"===
c){if(e){if(!Sk.__future__.python3)throw new Sk.builtin.SyntaxError("List packing with stars is not supported in Python 2");return this._gr("load"+c,"new Sk.builtins['",c,"'](",this.cunpackstarstoarray(a.elts),")")}if("tuple"===c){e=!0;b=[];for(d=0;d<a.elts.length;++d)f=this.vexpr(a.elts[d]),e&&-1==f.indexOf("$const")&&(e=!1),b.push(f);if(e)return this.makeConstant("new Sk.builtin.tuple(["+b+"])");for(d=0;d<b.length;++d)b[d]=this._gr("elem",b[d]);return this._gr("load"+c,"new Sk.builtins['",c,"']([",
b,"])")}b=[];for(d=0;d<a.elts.length;++d)b.push(this._gr("elem",this.vexpr(a.elts[d])));return this._gr("load"+c,"new Sk.builtins['",c,"']([",b,"])")}};a.prototype.cdict=function(a){var b;var c=[];if(null!==a.keys)for(Sk.asserts.assert(a.values.length===a.keys.length),b=0;b<a.values.length;++b){var d=this.vexpr(a.values[b]);c.push(this.vexpr(a.keys[b]));c.push(d)}return this._gr("loaddict","new Sk.builtins['dict']([",c,"])")};a.prototype.clistcomp=function(a){Sk.asserts.assert(a instanceof Sk.astnodes.ListComp);
var b=this._gr("_compr","new Sk.builtins['list']([])");return this.ccompgen("list",b,a.generators,0,a.elt,null,a)};a.prototype.cdictcomp=function(a){Sk.asserts.assert(a instanceof Sk.astnodes.DictComp);var b=this._gr("_dcompr","new Sk.builtins.dict([])");return this.ccompgen("dict",b,a.generators,0,a.value,a.key,a)};a.prototype.csetcomp=function(a){Sk.asserts.assert(a instanceof Sk.astnodes.SetComp);var b=this._gr("_setcompr","new Sk.builtins.set([])");return this.ccompgen("set",b,a.generators,0,
a.elt,null,a)};a.prototype.ccompgen=function(a,b,c,e,f,h,m){var d=this.newBlock(a+" comp start"),g=this.newBlock(a+" comp skip"),k=this.newBlock(a+" comp anchor"),n=c[e],p=this.vexpr(n.iter);p=this._gr("iter","Sk.abstr.iter(",p,")");var q;this._jump(d);this.setBlock(d);l("$ret = Sk.abstr.iternext(",p,", true);");this._checkSuspension(m);p=this._gr("next","$ret");this._jumpundef(p,k);this.vexpr(n.target,p);var w=n.ifs?n.ifs.length:0;for(q=0;q<w;++q)p=this.vexpr(n.ifs[q]),this._jumpfalse(p,d);++e<c.length&&
this.ccompgen(a,b,c,e,f,h,m);e>=c.length&&(c=this.vexpr(f),"dict"===a?(a=this.vexpr(h),l(b,".mp$ass_subscript(",a,",",c,");")):"list"===a?l(b,".v.push(",c,");"):"set"===a&&l(b,".v.mp$ass_subscript(",c,", true);"),this._jump(g),this.setBlock(g));this._jump(d);this.setBlock(k);return b};a.prototype.cyield=function(a){if(this.u.ste.blockType!==Sk.SYMTAB_CONSTS.FunctionBlock)throw new Sk.builtin.SyntaxError("'yield' outside function",this.filename,a.lineno);var b="Sk.builtin.none.none$";a.value&&(b=this.vexpr(a.value));
a=this.newBlock("after yield");l("return [/*resume*/",a,",/*ret*/",b,"];");this.setBlock(a);return"$gen.gi$sentvalue"};a.prototype.ccompare=function(a){var b;Sk.asserts.assert(a.ops.length===a.comparators.length);var c=this.vexpr(a.left);var d=a.ops.length;var e=this.newBlock("done");var f=this._gr("compareres","null");for(b=0;b<d;++b){var h=this.vexpr(a.comparators[b]);l("$ret = Sk.builtin.bool(Sk.misceval.richCompareBool(",c,",",h,",'",a.ops[b].prototype._astname,"', true));");this._checkSuspension(a);
l(f,"=$ret;");this._jumpfalse("$ret",e);c=h}this._jump(e);this.setBlock(e);return f};a.prototype.ccall=function(a){var b=this.vexpr(a.func);let c=this.cunpackstarstoarray(a.args,!Sk.__future__.python3);var d="undefined";if(a.keywords&&0<a.keywords.length){let c=!1;d=[];for(let b of a.keywords){if(c&&!Sk.__future__.python3)throw new SyntaxError("Advanced unpacking of function arguments is not supported in Python 2");b.arg?(d.push("'"+b.arg.v+"'"),d.push(this.vexpr(b.value))):c=!0}d="["+d.join(",")+
"]";if(c){d=this._gr("keywordArgs",d);for(let c of a.keywords)c.arg||(l("$ret = Sk.abstr.mappingUnpackIntoKeywordArray(",d,",",this.vexpr(c.value),",",b,");"),this._checkSuspension())}}Sk.__future__.super_args&&a.func.id&&"super"===a.func.id.v&&"[]"===c&&(l('if (typeof self === "undefined" || self.toString().indexOf("Window") > 0) { throw new Sk.builtin.RuntimeError("super(): no arguments") };'),c="[$gbl.__class__,self]");l("$ret = (",b,".tp$call)?",b,".tp$call(",c,",",d,") : Sk.misceval.applyOrSuspend(",
b,",undefined,undefined,",d,",",c,");");this._checkSuspension(a);return this._gr("call","$ret")};a.prototype.cslice=function(a){Sk.asserts.assert(a instanceof Sk.astnodes.Slice);if(Sk.__future__.python3){var b=a.lower?this.vexpr(a.lower):"Sk.builtin.none.none$";var c=a.upper?this.vexpr(a.upper):"Sk.builtin.none.none$"}else b=a.lower?this.vexpr(a.lower):a.step?"Sk.builtin.none.none$":"new Sk.builtin.int_(0)",c=a.upper?this.vexpr(a.upper):a.step?"Sk.builtin.none.none$":"new Sk.builtin.int_(2147483647)";
a=a.step?this.vexpr(a.step):"Sk.builtin.none.none$";return this._gr("slice","new Sk.builtins['slice'](",b,",",c,",",a,")")};a.prototype.eslice=function(a){var b;Sk.asserts.assert(a instanceof Array);var c=[];for(b=0;b<a.length;b++)c.push(this.vslicesub(a[b]));return this._gr("extslice","new Sk.builtins['tuple']([",c,"])")};a.prototype.vslicesub=function(a){switch(a.constructor){case Sk.astnodes.Index:var b=this.vexpr(a.value);break;case Sk.astnodes.Slice:b=this.cslice(a);break;case Sk.astnodes.Ellipsis:Sk.asserts.fail("todo compile.js Ellipsis;");
break;case Sk.astnodes.ExtSlice:b=this.eslice(a.dims);break;default:Sk.asserts.fail("invalid subscript kind")}return b};a.prototype.vslice=function(a,b,c,e){a=this.vslicesub(a);return this.chandlesubscr(b,c,a,e)};a.prototype.chandlesubscr=function(a,b,c,e){if(a===Sk.astnodes.Load||a===Sk.astnodes.AugLoad)return l("$ret = Sk.abstr.objectGetItem(",b,",",c,", true);"),this._checkSuspension(),this._gr("lsubscr","$ret");a===Sk.astnodes.Store||a===Sk.astnodes.AugStore?(l("$ret = Sk.abstr.objectSetItem(",
b,",",c,",",e,", true);"),this._checkSuspension()):a===Sk.astnodes.Del?l("Sk.abstr.objectDelItem(",b,",",c,");"):Sk.asserts.fail("handlesubscr fail")};a.prototype.cboolop=function(a){var b,c;Sk.asserts.assert(a instanceof Sk.astnodes.BoolOp);var d=a.op===Sk.astnodes.And?this._jumpfalse:this._jumptrue;var e=this.newBlock("end of boolop");var f=a.values;var h=f.length;for(b=0;b<h;++b)a=this.vexpr(f[b]),0===b&&(c=this._gr("boolopsucc",a)),l(c,"=",a,";"),d.call(this,a,e);this._jump(e);this.setBlock(e);
return c};a.prototype.cjoinedstr=function(a){let b;Sk.asserts.assert(a instanceof Sk.astnodes.JoinedStr);for(let c of a.values)a=this.vexpr(c),b?l(b,"=",b,".sq$concat(",a,");"):b=this._gr("joinedstr",a);b||(b="Sk.builtin.str.$emptystr");return b};a.prototype.cformattedvalue=function(a){let b=this.vexpr(a.value);switch(a.conversion){case "s":b=this._gr("value","new Sk.builtin.str(",b,")");break;case "a":b=this._gr("value","Sk.builtin.ascii(",b,")");break;case "r":b=this._gr("value","Sk.builtin.repr(",
b,")")}a=a.format_spec?this.vexpr(a.format_spec):"Sk.builtin.str.$emptystr";return this._gr("formatted","Sk.abstr.objectFormat("+b+","+a+")")};a.prototype.vexpr=function(a,b,c,k){var d;a.lineno>this.u.lineno&&(this.u.lineno=a.lineno,this.u.linenoSet=!1);switch(a.constructor){case Sk.astnodes.BoolOp:return this.cboolop(a);case Sk.astnodes.BinOp:return this._gr("binop","Sk.abstr.numberBinOp(",this.vexpr(a.left),",",this.vexpr(a.right),",'",a.op.prototype._astname,"')");case Sk.astnodes.UnaryOp:return this._gr("unaryop",
"Sk.abstr.numberUnaryOp(",this.vexpr(a.operand),",'",a.op.prototype._astname,"')");case Sk.astnodes.Lambda:return this.clambda(a);case Sk.astnodes.IfExp:return this.cifexp(a);case Sk.astnodes.Dict:return this.cdict(a);case Sk.astnodes.ListComp:return this.clistcomp(a);case Sk.astnodes.DictComp:return this.cdictcomp(a);case Sk.astnodes.SetComp:return this.csetcomp(a);case Sk.astnodes.GeneratorExp:return this.cgenexp(a);case Sk.astnodes.Yield:return this.cyield(a);case Sk.astnodes.Compare:return this.ccompare(a);
case Sk.astnodes.Call:return b=this.ccall(a),this.annotateSource(a),b;case Sk.astnodes.Num:if("number"===typeof a.n)return a.n;if(a.n instanceof Sk.builtin.lng)return this.makeConstant("new Sk.builtin.lng('"+a.n.v.toString()+"')");if(a.n instanceof Sk.builtin.int_)return"number"===typeof a.n.v?this.makeConstant("new Sk.builtin.int_("+a.n.v+")"):this.makeConstant("new Sk.builtin.int_('"+a.n.v.toString()+"')");if(a.n instanceof Sk.builtin.float_)return a=0===a.n.v&&-Infinity===1/a.n.v?"-0":a.n.v,this.makeConstant("new Sk.builtin.float_("+
a+")");if(a.n instanceof Sk.builtin.complex)return this.makeConstant("new Sk.builtin.complex("+(0===a.n.real&&-Infinity===1/a.n.real?"-0":a.n.real)+", "+(0===a.n.imag&&-Infinity===1/a.n.imag?"-0":a.n.imag)+")");Sk.asserts.fail("unhandled Num type");case Sk.astnodes.Bytes:if(Sk.__future__.python3){b=[];a=a.s.$jsstr();for(c=0;c<a.length;c++)b.push(a.charCodeAt(c));return this.makeConstant("new Sk.builtin.bytes([",b.join(", "),"])")}case Sk.astnodes.Str:return this.makeConstant("new Sk.builtin.str(",
f(a.s.$jsstr()),")");case Sk.astnodes.Attribute:a.ctx!==Sk.astnodes.AugLoad&&a.ctx!==Sk.astnodes.AugStore&&(d=this.vexpr(a.value));k=a.attr.$r().v;k=k.substring(1,k.length-1);k=e(this.u.private_,new Sk.builtin.str(k)).v;k=this.makeConstant("new Sk.builtin.str('"+k+"')");switch(a.ctx){case Sk.astnodes.AugLoad:return l("$ret = ",c,".tp$getattr(",k,", true);"),this._checkSuspension(a),l("\nif ($ret === undefined) {"),l("\nthrow new Sk.builtin.AttributeError(",c,'.sk$attrError() + " has no attribute \'" + ',
k,'.$jsstr() + "\'");'),l("\n};"),this._gr("lattr","$ret");case Sk.astnodes.Load:return l("$ret = ",d,".tp$getattr(",k,", true);"),this._checkSuspension(a),l("\nif ($ret === undefined) {"),l("\nthrow new Sk.builtin.AttributeError(",d,'.sk$attrError() + " has no attribute \'" + ',k,'.$jsstr() + "\'");'),l("\n};"),this._gr("lattr","$ret");case Sk.astnodes.AugStore:l("$ret = undefined;");l("if(",b,"!==undefined){");l("$ret = ",c,".tp$setattr(",k,",",b,", true);");l("}");this._checkSuspension(a);break;
case Sk.astnodes.Store:l("$ret = ",d,".tp$setattr(",k,",",b,", true);");this._checkSuspension(a);break;case Sk.astnodes.Del:l("$ret = ",d,".tp$setattr(",k,", undefined, true);");this._checkSuspension(a);break;default:Sk.asserts.fail("invalid attribute expression")}break;case Sk.astnodes.Subscript:switch(a.ctx){case Sk.astnodes.AugLoad:return l("$ret = Sk.abstr.objectGetItem(",c,",",k,", true);"),this._checkSuspension(a),this._gr("gitem","$ret");case Sk.astnodes.Load:case Sk.astnodes.Store:case Sk.astnodes.Del:return this.vslice(a.slice,
a.ctx,this.vexpr(a.value),b);case Sk.astnodes.AugStore:l("$ret=undefined;");l("if(",b,"!==undefined){");l("$ret=Sk.abstr.objectSetItem(",c,",",k,",",b,", true)");l("}");this._checkSuspension(a);break;default:Sk.asserts.fail("invalid subscript expression")}break;case Sk.astnodes.Name:return this.nameop(a.id,a.ctx,b);case Sk.astnodes.NameConstant:if(a.ctx===Sk.astnodes.Store||a.ctx===Sk.astnodes.AugStore||a.ctx===Sk.astnodes.Del)throw new Sk.builtin.SyntaxError("can not assign to a constant name");
switch(a.value){case Sk.builtin.none.none$:return"Sk.builtin.none.none$";case Sk.builtin.bool.true$:return"Sk.builtin.bool.true$";case Sk.builtin.bool.false$:return"Sk.builtin.bool.false$";default:Sk.asserts.fail("invalid named constant")}break;case Sk.astnodes.List:return this.ctuplelistorset(a,b,"list");case Sk.astnodes.Tuple:return this.ctuplelistorset(a,b,"tuple");case Sk.astnodes.Set:return this.ctuplelistorset(a,b,"set");case Sk.astnodes.Starred:switch(a.ctx){case Sk.astnodes.Store:throw new Sk.builtin.SyntaxError("starred assignment target must be in a list or tuple",
this.filename,a.lineno);default:throw new Sk.builtin.SyntaxError("can't use starred expression here",this.filename,a.lineno);}case Sk.astnodes.JoinedStr:return this.cjoinedstr(a);case Sk.astnodes.FormattedValue:return this.cformattedvalue(a);default:Sk.asserts.fail("unhandled case "+a.constructor.name+" vexpr")}};a.prototype.vseqexpr=function(a,b){var c;Sk.asserts.assert(void 0===b||a.length===b.length);var d=[];for(c=0;c<a.length;++c)d.push(this.vexpr(a[c],void 0===b?void 0:b[c]));return d};a.prototype.caugassign=
function(a){Sk.asserts.assert(a instanceof Sk.astnodes.AugAssign);var b=a.target;switch(b.constructor){case Sk.astnodes.Attribute:var c=this.vexpr(b.value);b=new Sk.astnodes.Attribute(b.value,b.attr,Sk.astnodes.AugLoad,b.lineno,b.col_offset);var d=this.vexpr(b,void 0,c);var e=this.vexpr(a.value);a=this._gr("inplbinopattr","Sk.abstr.numberInplaceBinOp(",d,",",e,",'",a.op.prototype._astname,"')");b.ctx=Sk.astnodes.AugStore;return this.vexpr(b,a,c);case Sk.astnodes.Subscript:c=this.vexpr(b.value);var f=
this.vslicesub(b.slice);b=new Sk.astnodes.Subscript(b.value,f,Sk.astnodes.AugLoad,b.lineno,b.col_offset);d=this.vexpr(b,void 0,c,f);e=this.vexpr(a.value);a=this._gr("inplbinopsubscr","Sk.abstr.numberInplaceBinOp(",d,",",e,",'",a.op.prototype._astname,"')");b.ctx=Sk.astnodes.AugStore;return this.vexpr(b,a,c,f);case Sk.astnodes.Name:return c=this.nameop(b.id,Sk.astnodes.Load),e=this.vexpr(a.value),a=this._gr("inplbinop","Sk.abstr.numberInplaceBinOp(",c,",",e,",'",a.op.prototype._astname,"')"),this.nameop(b.id,
Sk.astnodes.Store,a);default:Sk.asserts.fail("unhandled case in augassign")}};a.prototype.exprConstant=function(a){switch(a.constructor){case Sk.astnodes.Num:return Sk.misceval.isTrue(a.n)?1:0;case Sk.astnodes.Str:return Sk.misceval.isTrue(a.s)?1:0;default:return-1}};a.prototype.newBlock=function(a){var b=this.u.blocknum++;this.u.blocks[b]=[];this.u.blocks[b]._name=a||"<unnamed>";this.u.blocks[b]._next=null;return b};a.prototype.setBlock=function(a){Sk.asserts.assert(0<=a&&a<this.u.blocknum);this.u.curblock=
a};a.prototype.pushBreakBlock=function(a){Sk.asserts.assert(0<=a&&a<this.u.blocknum);this.u.breakBlocks.push(a)};a.prototype.popBreakBlock=function(){this.u.breakBlocks.pop()};a.prototype.pushContinueBlock=function(a){Sk.asserts.assert(0<=a&&a<this.u.blocknum);this.u.continueBlocks.push(a)};a.prototype.popContinueBlock=function(){this.u.continueBlocks.pop()};a.prototype.pushExceptBlock=function(a){Sk.asserts.assert(0<=a&&a<this.u.blocknum);this.u.exceptBlocks.push(a)};a.prototype.popExceptBlock=function(){this.u.exceptBlocks.pop()};
a.prototype.pushFinallyBlock=function(a){Sk.asserts.assert(0<=a&&a<this.u.blocknum);Sk.asserts.assert(this.u.breakBlocks.length===this.u.continueBlocks.length);this.u.finallyBlocks.push({blk:a,breakDepth:this.u.breakBlocks.length})};a.prototype.popFinallyBlock=function(){this.u.finallyBlocks.pop()};a.prototype.peekFinallyBlock=function(){return 0<this.u.finallyBlocks.length?this.u.finallyBlocks[this.u.finallyBlocks.length-1]:void 0};a.prototype.setupExcept=function(a){l("$exc.push(",a,");")};a.prototype.endExcept=
function(){l("$exc.pop();")};a.prototype.outputLocals=function(a){var b,c={};for(b=0;a.argnames&&b<a.argnames.length;++b)c[a.argnames[b]]=!0;a.localnames.sort();var d=[];for(b=0;b<a.localnames.length;++b){var e=a.localnames[b];void 0===c[e]&&(d.push(e),c[e]=!0)}return 0<d.length?"var "+d.join(",")+"; /* locals */":""};a.prototype.outputSuspensionHelpers=function(a){var b,c=[],d=a.localnames.concat(a.tempsToSave),e={},f=a.ste.blockType===Sk.SYMTAB_CONSTS.FunctionBlock&&a.ste.childHasFree,h=(0<d.length?
"var "+d.join(",")+";":"")+"var $wakeFromSuspension = function() {var susp = "+a.scopename+".$wakingSuspension; "+a.scopename+".$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();"+(f?"$cell=susp.$cell;":"");for(b=0;b<d.length;b++){var l=d[b];void 0===e[l]&&(h+=l+"=susp.$tmps."+l+";",e[l]=!0)}h+="try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '"+
this.filename+"'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};";h+="var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){"+a.scopename+".$wakingSuspension=susp; return "+a.scopename+"("+(a.ste.generator?"$gen":"")+"); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;"+
(f?"susp.$cell=$cell;":"");e={};for(b=0;b<d.length;b++)l=d[b],void 0===e[l]&&(c.push('"'+l+'":'+l),e[l]=!0);return h+="susp.$tmps={"+c.join(",")+"};return susp;};"};a.prototype.outputAllUnits=function(){var a,b,c="";for(b=0;b<this.allUnits.length;++b){var e=this.allUnits[b];c+=e.prefixCode;c+=this.outputLocals(e);e.doesSuspend&&(c+=this.outputSuspensionHelpers(e));c+=e.varDeclsCode;c+=e.switchCode;var f=e.blocks;var h=Object.create(null);for(a=0;a<f.length;++a){var l=a;if(!(l in h))for(;;)if(h[l]=
!0,c+="case "+l+": /* --- "+f[l]._name+" --- */",c+=f[l].join(""),null!==f[l]._next)if(f[l]._next in h){c+="/* jump */ continue;";break}else c+="/* allowing case fallthrough */",l=f[l]._next;else{c+="throw new Sk.builtin.SystemError('internal error: unterminated block');";break}}c+=e.suffixCode}return c};a.prototype.cif=function(a){var b;Sk.asserts.assert(a instanceof Sk.astnodes.If);var c=this.exprConstant(a.test);if(0===c)a.orelse&&0<a.orelse.length&&this.vseqstmt(a.orelse);else if(1===c)this.vseqstmt(a.body);
else{var d=this.newBlock("end of if");a.orelse&&0<a.orelse.length&&(b=this.newBlock("next branch of if"));c=this.vexpr(a.test);a.orelse&&0<a.orelse.length?(this._jumpfalse(c,b),this.vseqstmt(a.body),this._jump(d),this.setBlock(b),this.vseqstmt(a.orelse)):(this._jumpfalse(c,d),this.vseqstmt(a.body));this._jump(d);this.setBlock(d)}};a.prototype.cwhile=function(a){if(0===this.exprConstant(a.test))a.orelse&&this.vseqstmt(a.orelse);else{var b=this.newBlock("while test");this._jump(b);this.setBlock(b);
var c=this.newBlock("after while");var d=0<a.orelse.length?this.newBlock("while orelse"):null;var e=this.newBlock("while body");this.annotateSource(a);this._jumpfalse(this.vexpr(a.test),d?d:c);this._jump(e);this.pushBreakBlock(c);this.pushContinueBlock(b);this.setBlock(e);(Sk.debugging||Sk.killableWhile)&&this.u.canSuspend&&(e=this.newBlock("debug breakpoint for line "+a.lineno),l("if (Sk.breakpoints('"+this.filename+"',"+a.lineno+","+a.col_offset+")) {","var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '"+
this.filename+"',"+a.lineno+","+a.col_offset+");","$susp.$blk = "+e+";","$susp.optional = true;","return $susp;","}"),this._jump(e),this.setBlock(e),this.u.doesSuspend=!0);this.vseqstmt(a.body);this._jump(b);this.popContinueBlock();this.popBreakBlock();0<a.orelse.length&&(this.setBlock(d),this.vseqstmt(a.orelse),this._jump(c));this.setBlock(c)}};a.prototype.cfor=function(a){var b=this.newBlock("for start"),c=this.newBlock("for cleanup"),d=this.newBlock("for end");this.pushBreakBlock(d);this.pushContinueBlock(b);
var e=this.vexpr(a.iter);if(this.u.ste.generator){var f="$loc."+this.gensym("iter");l(f,"=Sk.abstr.iter(",e,");")}else f=this._gr("iter","Sk.abstr.iter(",e,")"),this.u.tempsToSave.push(f);this._jump(b);this.setBlock(b);l("$ret = Sk.abstr.iternext(",f,this.u.canSuspend?", true":", false",");");this._checkSuspension(a);f=this._gr("next","$ret");this._jumpundef(f,c);this.vexpr(a.target,f);(Sk.debugging||Sk.killableFor)&&this.u.canSuspend&&(f=this.newBlock("debug breakpoint for line "+a.lineno),l("if (Sk.breakpoints('"+
this.filename+"',"+a.lineno+","+a.col_offset+")) {","var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '"+this.filename+"',"+a.lineno+","+a.col_offset+");","$susp.$blk = "+f+";","$susp.optional = true;","return $susp;","}"),this._jump(f),this.setBlock(f),this.u.doesSuspend=!0);this.vseqstmt(a.body);this._jump(b);this.setBlock(c);this.popContinueBlock();this.popBreakBlock();this.vseqstmt(a.orelse);this._jump(d);this.setBlock(d)};a.prototype.craise=function(a){if(a.exc){var b=
this._gr("exc",this.vexpr(a.exc)),c=this.newBlock("exception now instantiated"),d=this._gr("isclass",b+".prototype instanceof Sk.builtin.BaseException");this._jumpfalse(d,c);a.inst?(d=this._gr("inst",this.vexpr(a.inst)),l("if(!(",d," instanceof Sk.builtin.tuple)) {",d,"= new Sk.builtin.tuple([",d,"]);","}"),l("$ret = Sk.misceval.callsimOrSuspendArray(",b,",",d,".v);")):l("$ret = Sk.misceval.callsimOrSuspend(",b,");");this._checkSuspension(a);l(b,"=$ret;");this._jump(c);this.setBlock(c);l("if (",b,
" instanceof Sk.builtin.BaseException) {throw ",b,";} else {throw new Sk.builtin.TypeError('exceptions must derive from BaseException');};")}else l("throw $err;")};a.prototype.outputFinallyCascade=function(a){if(0==this.u.finallyBlocks.length)l("if($postfinally!==undefined) { if ($postfinally.returning) { return $postfinally.returning; } else { $blk=$postfinally.gotoBlock; $postfinally=undefined; continue; } }");else{var b=this.peekFinallyBlock();l("if($postfinally!==undefined) {","if ($postfinally.returning",
b.breakDepth==a.breakDepth?"|| $postfinally.isBreak":"",") {","$blk=",b.blk,";continue;","} else {","$blk=$postfinally.gotoBlock;$postfinally=undefined;continue;","}","}")}};a.prototype.ctry=function(a){var b,c=a.handlers.length;if(a.finalbody){var d=this.newBlock("finalbody");var e=this.newBlock("finalexh");var f=this._gr("finally_reraise","undefined");this.u.tempsToSave.push(f);this.pushFinallyBlock(d);var h=this.peekFinallyBlock();this.setupExcept(e)}var m=[];for(b=0;b<c;++b)m.push(this.newBlock("except_"+
b+"_"));var q=this.newBlock("unhandled");var B=this.newBlock("orelse");var E=this.newBlock("end");0!=m.length&&this.setupExcept(m[0]);this.vseqstmt(a.body);0!=m.length&&this.endExcept();this._jump(B);for(b=0;b<c;++b){this.setBlock(m[b]);var F=a.handlers[b];if(!F.type&&b<c-1)throw new Sk.builtin.SyntaxError("default 'except:' must be last",this.filename,F.lineno);if(F.type){var K=this.vexpr(F.type);var G=b==c-1?q:m[b+1];K=this._gr("instance","Sk.misceval.isTrue(Sk.builtin.isinstance($err, ",K,"))");
this._jumpfalse(K,G)}F.name&&this.vexpr(F.name,"$err");this.vseqstmt(F.body);this._jump(E)}this.setBlock(q);l("throw $err;");this.setBlock(B);this.vseqstmt(a.orelse);this._jump(E);this.setBlock(E);a.finalbody&&(this.endExcept(),this._jump(d),this.setBlock(e),l(f,"=$err;"),this._jump(d),this.setBlock(d),this.popFinallyBlock(),this.vseqstmt(a.finalbody),l("if(",f,"!==undefined) { throw ",f,";}"),this.outputFinallyCascade(h))};a.prototype.cwith=function(a,b){var c=this.newBlock("withexh"),d=this.newBlock("withtidyup"),
e=this.newBlock("withcarryon");var f=this._gr("mgr",this.vexpr(a.items[b].context_expr));l("$ret = Sk.abstr.lookupSpecial(",f,",Sk.builtin.str.$exit);");this._checkSuspension(a);var g=this._gr("exit","$ret");this.u.tempsToSave.push(g);l("$ret = Sk.abstr.lookupSpecial(",f,",Sk.builtin.str.$enter);");this._checkSuspension(a);l("$ret = Sk.misceval.callsimOrSuspendArray($ret);");this._checkSuspension(a);f=this._gr("value","$ret");this.pushFinallyBlock(d);var h=this.u.finallyBlocks[this.u.finallyBlocks.length-
1];this.setupExcept(c);a.items[b].optional_vars&&this.nameop(a.items[b].optional_vars.id,Sk.astnodes.Store,f);b+1<a.items.length?this.cwith(a,b+1):this.vseqstmt(a.body);this.endExcept();this._jump(d);this.setBlock(c);l("$ret = Sk.misceval.applyOrSuspend(",g,",undefined,Sk.builtin.getExcInfo($err),undefined,[]);");this._checkSuspension(a);this._jumptrue("$ret",e);l("throw $err;");this.setBlock(d);this.popFinallyBlock();l("$ret = Sk.misceval.callsimOrSuspendArray(",g,",[Sk.builtin.none.none$,Sk.builtin.none.none$,Sk.builtin.none.none$]);");
this._checkSuspension(a);this.outputFinallyCascade(h);this._jump(e);this.setBlock(e)};a.prototype.cassert=function(a){var b=this.vexpr(a.test),c=this.newBlock("end");this._jumptrue(b,c);l("throw new Sk.builtin.AssertionError(",a.msg?this.vexpr(a.msg):"",");");this.setBlock(c)};a.prototype.cimportas=function(a,b,c){a=a.v;var d=a.indexOf("."),e=c;if(-1!==d)for(a=a.substr(d+1);-1!==d;)d=a.indexOf("."),c=-1!==d?a.substr(0,d):a,e=this._gr("lattr","Sk.abstr.gattr(",e,", new Sk.builtin.str('",c,"'))"),a=
a.substr(d+1);return this.nameop(b,Sk.astnodes.Store,e)};a.prototype.cimport=function(a){var b,c=a.names.length;for(b=0;b<c;++b){var d=a.names[b];l("$ret = Sk.builtin.__import__(",d.name.$r().v,",$gbl,$loc,[],",Sk.__future__.absolute_import?0:-1,");");this._checkSuspension(a);var e=this._gr("module","$ret");if(d.asname)this.cimportas(d.name,d.asname,e);else{var f=d.name;d=f.v.indexOf(".");-1!==d&&(f=new Sk.builtin.str(f.v.substr(0,d)));this.nameop(f,Sk.astnodes.Store,e)}}};a.prototype.cfromimport=
function(a){var c,d=a.names.length;var e=[];var f=a.level;0!=f||Sk.__future__.absolute_import||(f=-1);for(c=0;c<d;++c)e[c]="'"+b(a.names[c].name.v)+"'";l("$ret = Sk.builtin.__import__(",a.module.$r().v,",$gbl,$loc,[",e,"],",f,");");this._checkSuspension(a);f=this._gr("module","$ret");for(c=0;c<d;++c){e=a.names[c];var h="'"+e.name.v+"'";if(0===c&&"*"===e.name.v){Sk.asserts.assert(1===d);l("Sk.importStar(",f,",$loc, $gbl);");break}var m=this._gr("item","Sk.abstr.gattr(",f,", new Sk.builtin.str(",h,
"), undefined)");h=e.name;e.asname&&(h=e.asname);this.nameop(h,Sk.astnodes.Store,m)}};a.prototype.buildcodeobj=function(a,c,f,k,h,m){var d=[],g,n=[],p=[],q=[],w=null,K=null;f&&(n=this.vseqexpr(f));k&&k.defaults&&(p=this.vseqexpr(k.defaults));k&&k.kw_defaults&&(q=k.kw_defaults.map(a=>a?this.vexpr(a):"undefined"));k&&k.vararg&&(w=k.vararg);k&&k.kwarg&&(K=k.kwarg);if(!Sk.__future__.python3&&k&&k.kwonlyargs&&0!=k.kwonlyargs.length)throw new Sk.builtin.SyntaxError("Keyword-only arguments are not supported in Python 2");
var G=this.enterScope(c,a,a.lineno,this.canSuspend);f=this.u.ste.generator;var U=this.u.ste.hasFree;var C=this.u.ste.childHasFree;var N=this.newBlock("codeobj entry");this.u.prefixCode="var "+G+"=(function "+this.niceName(c.v)+"$(";var u=[];if(f){if(K)throw new Sk.builtin.SyntaxError(c.v+"(): keyword arguments in generators not supported",this.filename,a.lineno);if(w)throw new Sk.builtin.SyntaxError(c.v+"(): variable number of arguments in generators not supported",this.filename,a.lineno);u.push("$gen")}else{K&&
(u.push("$kwa"),this.u.tempsToSave.push("$kwa"));for(g=0;k&&g<k.args.length;++g)u.push(this.nameop(k.args[g].arg,Sk.astnodes.Param));for(g=0;k&&k.kwonlyargs&&g<k.kwonlyargs.length;++g)u.push(this.nameop(k.kwonlyargs[g].arg,Sk.astnodes.Param));w&&u.push(this.nameop(k.vararg.arg,Sk.astnodes.Param))}let R=!f;U&&(R||u.push("$free"),this.u.tempsToSave.push("$free"));this.u.prefixCode=R?this.u.prefixCode+"$posargs,$kwargs":this.u.prefixCode+u.join(",");this.u.prefixCode+="){";f&&(this.u.prefixCode+="\n// generator\n");
U&&(this.u.prefixCode+="\n// has free\n");C&&(this.u.prefixCode+="\n// has cell\n");R&&(this.u.prefixCode+="\n// fast call\n");var O="{}";f&&(N="$gen.gi$resumeat",O="$gen.gi$locals");g=",$cell={}";C&&f&&(g=",$cell=$gen.gi$cells");this.u.varDeclsCode+="var $blk="+N+",$exc=[],$loc="+O+g+",$gbl="+(R?"this && this.func_globals":"this")+(R&&U?",$free=this && this.func_closure":"")+",$err=undefined,$ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;";null!==Sk.execLimit&&(this.u.varDeclsCode+=
"if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}");null!==Sk.yieldLimit&&this.u.canSuspend&&(this.u.varDeclsCode+="if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}");this.u.varDeclsCode+="if ("+G+".$wakingSuspension!==undefined) { $wakeFromSuspension(); } else {";if(R){this.u.varDeclsCode=K||w||k&&k.kwonlyargs&&0!==k.kwonlyargs.length?this.u.varDeclsCode+"\nvar $args = this.$resolveArgs($posargs,$kwargs)\n":this.u.varDeclsCode+("var $args = ((!$kwargs || $kwargs.length===0) && $posargs.length==="+
u.length+") ? $posargs : this.$resolveArgs($posargs,$kwargs)");for(g=0;g<u.length;g++)this.u.varDeclsCode+=","+u[g]+"=$args["+g+"]";this.u.varDeclsCode+=";\n"}if(f&&0<p.length)for(N=k.args.length-p.length,g=0;g<p.length;++g)u=this.nameop(k.args[g+N].arg,Sk.astnodes.Param),this.u.varDeclsCode+="if("+u+"===undefined)"+u+"="+G+".$defaults["+g+"];";for(g=0;k&&g<k.args.length;++g)u=k.args[g].arg,this.isCell(u)&&(u=b(e(this.u.private_,u).v),this.u.varDeclsCode+="$cell."+u+"="+u+";");for(g=0;k&&k.kwonlyargs&&
g<k.kwonlyargs.length;++g)u=k.kwonlyargs[g].arg,this.isCell(u)&&(u=b(e(this.u.private_,u).v),this.u.varDeclsCode+="$cell."+u+"="+u+";");w&&this.isCell(w.arg)&&(g=b(e(this.u.private_,w.arg).v),this.u.varDeclsCode+="$cell."+g+"="+g+";");K&&(this.u.localnames.push(K.arg.v),this.u.varDeclsCode+=K.arg.v+"=new Sk.builtins['dict']($kwa);",this.isCell(K.arg)&&(g=b(e(this.u.private_,K.arg).v),this.u.varDeclsCode+="$cell."+g+"="+g+";"));this.u.varDeclsCode+="}";Sk.__future__.python3&&m&&(this.u.varDeclsCode+=
"$gbl.__class__=$gbl."+m.v+";");this.u.switchCode="while(true){try{";this.u.switchCode+=this.outputInterruptTest();this.u.switchCode+="switch($blk){";this.u.suffixCode="} }catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '"+this.filename+"'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} }});";h.call(this,G);if(k){for(let a of k.args)d.push(a.arg.v);
for(let a of k.kwonlyargs||[])d.push(a.arg.v);this.u.argnames=d}this.exitScope();0<p.length&&l(G,".$defaults=[",p.join(","),"];");k&&k.kwonlyargs&&0<k.kwonlyargs.length&&(l(G,".co_argcount=",k.args.length,";"),l(G,".co_kwonlyargcount=",k.kwonlyargs.length,";"),l(G,".$kwdefs=[",q.join(","),"];"));0<d.length?l(G,".co_varnames=['",d.join("','"),"'];"):l(G,".co_varnames=[];");l(G,".co_docstring=",this.cDocstringOfCode(a),";");K&&l(G,".co_kwargs=1;");w&&l(G,".co_varargs=1;");f||l(G,".co_fastcall=1;");
a="";U&&(a=",$cell",(h=this.u.ste.hasFree)&&(a+=",$free"));if(f)return k&&0<k.args.length?this._gr("gener","new Sk.builtins['function']((function(){var $origargs=Array.prototype.slice.call(arguments);Sk.builtin.pyCheckArgsLen(\"",c.v,'",arguments.length,',k.args.length-p.length,",",k.args.length,");return new Sk.builtins['generator'](",G,",$gbl,$origargs",a,");}))"):this._gr("gener","new Sk.builtins['function']((function(){Sk.builtin.pyCheckArgsLen(\"",c.v,"\",arguments.length,0,0);return new Sk.builtins['generator'](",
G,",$gbl,[]",a,");}))");if(0<n.length){l("$ret = new Sk.builtins['function'](",G,",$gbl",a,");");for(let a of n.reverse())l("$ret = Sk.misceval.callsimOrSuspendArray(",a,",[$ret]);"),this._checkSuspension();return this._gr("funcobj","$ret")}return this._gr("funcobj","new Sk.builtins['function'](",G,",$gbl",a,")")};a.prototype.maybeCDocstringOfBody=function(a){if(0===a.length)return null;a=a[0];if(a.constructor!==Sk.astnodes.Expr)return null;a=a.value;return a.constructor!==Sk.astnodes.Str?null:this.vexpr(a)};
a.prototype.cDocstringOfCode=function(a){switch(a.constructor){case Sk.astnodes.AsyncFunctionDef:case Sk.astnodes.FunctionDef:return this.maybeCDocstringOfBody(a.body)||"Sk.builtin.none.none$";case Sk.astnodes.Lambda:case Sk.astnodes.GeneratorExp:return"Sk.builtin.none.none$";default:Sk.asserts.fail(`unexpected node kind ${a.constructor.name}`)}};a.prototype.cfunction=function(a,b){Sk.asserts.assert(a instanceof Sk.astnodes.FunctionDef);b=this.buildcodeobj(a,a.name,a.decorator_list,a.args,function(b){this.vseqstmt(a.body);
l("return Sk.builtin.none.none$;")},b);this.nameop(a.name,Sk.astnodes.Store,b)};a.prototype.clambda=function(a){Sk.asserts.assert(a instanceof Sk.astnodes.Lambda);return this.buildcodeobj(a,new Sk.builtin.str("<lambda>"),null,a.args,function(b){b=this.vexpr(a.body);l("return ",b,";")})};a.prototype.cifexp=function(a){var b=this.newBlock("next of ifexp"),c=this.newBlock("end of ifexp"),d=this._gr("res","null"),e=this.vexpr(a.test);this._jumpfalse(e,b);l(d,"=",this.vexpr(a.body),";");this._jump(c);
this.setBlock(b);l(d,"=",this.vexpr(a.orelse),";");this._jump(c);this.setBlock(c);return d};a.prototype.cgenexpgen=function(a,b,c){var d=this.newBlock("start for "+b),e=this.newBlock("skip for "+b);this.newBlock("if cleanup for "+b);var f=this.newBlock("end for "+b),g=a[b];if(0===b)var h="$loc.$iter0";else{var m=this.vexpr(g.iter);h="$loc."+this.gensym("iter");l(h,"=","Sk.abstr.iter(",m,");")}this._jump(d);this.setBlock(d);this.annotateSource(c);l("$ret = Sk.abstr.iternext(",h,this.u.canSuspend?", true":
", false",");");this._checkSuspension(c);m=this._gr("next","$ret");this._jumpundef(m,f);this.vexpr(g.target,m);var n=g.ifs?g.ifs.length:0;for(h=0;h<n;++h)this.annotateSource(g.ifs[h]),m=this.vexpr(g.ifs[h]),this._jumpfalse(m,d);++b<a.length&&this.cgenexpgen(a,b,c);b>=a.length&&(this.annotateSource(c),a=this.vexpr(c),l("return [",e,"/*resume*/,",a,"/*ret*/];"),this.setBlock(e));this._jump(d);this.setBlock(f);1===b&&l("return Sk.builtin.none.none$;")};a.prototype.cgenexp=function(a){var b=this.buildcodeobj(a,
new Sk.builtin.str("<genexpr>"),null,null,function(b){this.cgenexpgen(a.generators,0,a.elt)});b=this._gr("gener","Sk.misceval.callsimArray(",b,");");l(b,".gi$locals.$iter0=Sk.abstr.iter(",this.vexpr(a.generators[0].iter),");");return b};a.prototype.cclass=function(a){Sk.asserts.assert(a instanceof Sk.astnodes.ClassDef);var b=this.vseqexpr(a.decorator_list);var c=this.vseqexpr(a.bases);var d=this.enterScope(a.name,a,a.lineno);var e=this.newBlock("class entry");this.u.prefixCode="var "+d+"=(function $"+
a.name.v+"$class_outer($globals,$locals,$cell){var $gbl=$globals,$loc=$locals;$free=$globals;";this.u.switchCode+="(function $"+a.name.v+"$_closure($cell){";this.u.switchCode+="var $blk="+e+",$exc=[],$ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;";null!==Sk.execLimit&&(this.u.switchCode+="if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}");null!==Sk.yieldLimit&&this.u.canSuspend&&(this.u.switchCode+="if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}");
this.u.switchCode+="while(true){try{";this.u.switchCode+=this.outputInterruptTest();this.u.switchCode+="switch($blk){";this.u.suffixCode="}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '"+this.filename+"'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }}}";this.u.suffixCode+="}).call(null, $cell);});";this.u.private_=a.name;this.cbody(a.body,
a.name);l("return;");this.exitScope();l("$ret = Sk.misceval.buildClass($gbl,",d,",",a.name.$r().v,",[",c,"], $cell);");for(let a of b)l("$ret = Sk.misceval.callsimOrSuspendArray(",a,", [$ret]);"),this._checkSuspension();this.nameop(a.name,Sk.astnodes.Store,"$ret")};a.prototype.ccontinue=function(a){var b=this.peekFinallyBlock();if(0==this.u.continueBlocks.length)throw new Sk.builtin.SyntaxError("'continue' outside loop",this.filename,a.lineno);a=this.u.continueBlocks[this.u.continueBlocks.length-
1];Sk.asserts.assert(this.u.breakBlocks.length===this.u.continueBlocks.length);b&&b.breakDepth==this.u.continueBlocks.length?l("$postfinally={isBreak:true,gotoBlock:",a,"};"):this._jump(a)};a.prototype.cbreak=function(a){var b=this.peekFinallyBlock();if(0===this.u.breakBlocks.length)throw new Sk.builtin.SyntaxError("'break' outside loop",this.filename,a.lineno);a=this.u.breakBlocks[this.u.breakBlocks.length-1];b&&b.breakDepth==this.u.breakBlocks.length?l("$postfinally={isBreak:true,gotoBlock:",a,
"};"):this._jump(a)};a.prototype.vstmt=function(a,b){this.u.lineno=a.lineno;this.u.linenoSet=!1;this.u.localtemps=[];if(Sk.debugging&&this.u.canSuspend){var c=this.newBlock("debug breakpoint for line "+a.lineno);l("if (Sk.breakpoints('"+this.filename+"',"+a.lineno+","+a.col_offset+")) {","var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '"+this.filename+"',"+a.lineno+","+a.col_offset+");","$susp.$blk = "+c+";","$susp.optional = true;","return $susp;","}");this._jump(c);
this.setBlock(c);this.u.doesSuspend=!0}this.annotateSource(a);switch(a.constructor){case Sk.astnodes.FunctionDef:this.cfunction(a,b);break;case Sk.astnodes.ClassDef:this.cclass(a);break;case Sk.astnodes.Return:if(this.u.ste.blockType!==Sk.SYMTAB_CONSTS.FunctionBlock)throw new Sk.builtin.SyntaxError("'return' outside function",this.filename,a.lineno);c=a.value?this.vexpr(a.value):"Sk.builtin.none.none$";0==this.u.finallyBlocks.length?l("return ",c,";"):(l("$postfinally={returning:",c,"};"),this._jump(this.peekFinallyBlock().blk));
break;case Sk.astnodes.Delete:this.vseqexpr(a.targets);break;case Sk.astnodes.Assign:var d=a.targets.length;c=this.vexpr(a.value);for(b=0;b<d;++b)this.vexpr(a.targets[b],c);break;case Sk.astnodes.AnnAssign:c=this.vexpr(a.value);this.vexpr(a.target,c);this.vexpr(a.annotation);break;case Sk.astnodes.AugAssign:return this.caugassign(a);case Sk.astnodes.Print:this.cprint(a);break;case Sk.astnodes.For:return this.cfor(a);case Sk.astnodes.While:return this.cwhile(a);case Sk.astnodes.If:return this.cif(a);
case Sk.astnodes.Raise:return this.craise(a);case Sk.astnodes.Try:return this.ctry(a);case Sk.astnodes.With:return this.cwith(a,0);case Sk.astnodes.Assert:return this.cassert(a);case Sk.astnodes.Import:return this.cimport(a);case Sk.astnodes.ImportFrom:return this.cfromimport(a);case Sk.astnodes.Global:break;case Sk.astnodes.Expr:this.vexpr(a.value);break;case Sk.astnodes.Pass:break;case Sk.astnodes.Break:this.cbreak(a);break;case Sk.astnodes.Continue:this.ccontinue(a);break;case Sk.astnodes.Debugger:l("debugger;");
break;default:Sk.asserts.fail("unhandled case in vstmt: "+JSON.stringify(a))}};a.prototype.vseqstmt=function(a){var b;for(b=0;b<a.length;++b)this.vstmt(a[b])};a.prototype.isCell=function(a){a=b(e(this.u.private_,a).v);return this.u.ste.getScope(a)===Sk.SYMTAB_CONSTS.CELL};a.prototype.nameop=function(a,c,f){if((c===Sk.astnodes.Store||c===Sk.astnodes.AugStore||c===Sk.astnodes.Del)&&"__debug__"===a.v)throw new Sk.builtin.SyntaxError("can not assign to __debug__",this.filename,this.u.lineno);Sk.asserts.assert("None"!==
a.v);if("NotImplemented"===a.v)return"Sk.builtin.NotImplemented.NotImplemented$";var d=e(this.u.private_,a).v;d=b(d);var g=3;var h=this.u.ste.getScope(d);var m=null;switch(h){case Sk.SYMTAB_CONSTS.FREE:m="$free";g=2;break;case Sk.SYMTAB_CONSTS.CELL:m="$cell";g=2;break;case Sk.SYMTAB_CONSTS.LOCAL:this.u.ste.blockType!==Sk.SYMTAB_CONSTS.FunctionBlock||this.u.ste.generator||(g=0);break;case Sk.SYMTAB_CONSTS.GLOBAL_IMPLICIT:this.u.ste.blockType===Sk.SYMTAB_CONSTS.FunctionBlock&&(g=1);break;case Sk.SYMTAB_CONSTS.GLOBAL_EXPLICIT:g=
1}Sk.asserts.assert(h||"_"===a.v.charAt(1));a=d;this.u.ste.generator||this.u.ste.blockType!==Sk.SYMTAB_CONSTS.FunctionBlock?d="$loc."+d:(0===g||3===g)&&this.u.localnames.push(d);switch(g){case 0:switch(c){case Sk.astnodes.Load:case Sk.astnodes.Param:return l("if (",d," === undefined) { throw new Sk.builtin.UnboundLocalError('local variable \\'",d,"\\' referenced before assignment'); }\n"),d;case Sk.astnodes.Store:l(d,"=",f,";");break;case Sk.astnodes.Del:l("delete ",d,";");break;default:Sk.asserts.fail("unhandled")}break;
case 3:switch(c){case Sk.astnodes.Load:return this._gr("loadname",d,"!==undefined?",d,":Sk.misceval.loadname('",a,"',$gbl);");case Sk.astnodes.Store:l(d,"=",f,";");break;case Sk.astnodes.Del:l("delete ",d,";");break;case Sk.astnodes.Param:return d;default:Sk.asserts.fail("unhandled")}break;case 1:switch(c){case Sk.astnodes.Load:return this._gr("loadgbl","Sk.misceval.loadname('",a,"',$gbl)");case Sk.astnodes.Store:l("$gbl.",a,"=",f,";");break;case Sk.astnodes.Del:l("delete $gbl.",a);break;default:Sk.asserts.fail("unhandled case in name op_global")}break;
case 2:switch(c){case Sk.astnodes.Load:return m+"."+a;case Sk.astnodes.Store:l(m,".",a,"=",f,";");break;case Sk.astnodes.Param:return a;default:Sk.asserts.fail("unhandled case in name op_deref")}break;default:Sk.asserts.fail("unhandled case")}};a.prototype.enterScope=function(a,b,e,f){var d=new c;d.ste=this.st.getStsForAst(b);d.name=a;d.firstlineno=e;d.canSuspend=f||!1;this.u&&this.u.private_&&(d.private_=this.u.private_);this.stack.push(this.u);this.allUnits.push(d);a=this.gensym("scope");d.scopename=
a;this.u=d;this.u.activateScope();this.nestlevel++;return a};a.prototype.exitScope=function(){var a=this.u;this.nestlevel--;(this.u=0<=this.stack.length-1?this.stack.pop():null)&&this.u.activateScope();if("<module>"!==a.name.v){var b=a.name.$r().v;b=b.substring(1,b.length-1);l(a.scopename,".co_name=new Sk.builtins['str']('",b,"');");this.stack.length&&"class"==this.u.ste.blockType&&l(a.scopename,".co_qualname=new Sk.builtins['str']('"+this.u.name.v+"."+b+"');")}for(var c in a.consts)a.consts.hasOwnProperty(c)&&
(a.suffixCode+=c+" = "+a.consts[c]+";")};a.prototype.cbody=function(a,b){var c=0;const d=this.maybeCDocstringOfBody(a);null!==d&&(l("$loc.__doc__ = ",d,";"),c=1);for(;c<a.length;++c)this.vstmt(a[c],b)};a.prototype.cprint=function(a){var b;Sk.asserts.assert(a instanceof Sk.astnodes.Print);a.dest&&this.vexpr(a.dest);var c=a.values.length;for(b=0;b<c;++b)l("$ret = Sk.misceval.print_(","new Sk.builtins['str'](",this.vexpr(a.values[b]),").v);"),this._checkSuspension(a);a.nl&&(l("$ret = Sk.misceval.print_(",
'"\\n");'),this._checkSuspension(a))};a.prototype.cmod=function(a){var b=this.enterScope(new Sk.builtin.str("<module>"),a,0,this.canSuspend),c=this.newBlock("module entry");this.u.prefixCode="var "+b+"=(function($forcegbl){";this.u.varDeclsCode="var $gbl = $forcegbl || {}, $blk="+c+",$exc=[],$loc=$gbl,$cell={},$err=undefined;$loc.__file__=new Sk.builtins.str('"+this.filename+"');var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;";null!==Sk.execLimit&&(this.u.varDeclsCode+=
"if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}");null!==Sk.yieldLimit&&this.u.canSuspend&&(this.u.varDeclsCode+="if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}");this.u.varDeclsCode+="if ("+b+".$wakingSuspension!==undefined) { $wakeFromSuspension(); }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; $loc.__file__=new Sk.builtins.str('"+
this.filename+"');}    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }";this.u.switchCode="while(true){try{";this.u.switchCode+=this.outputInterruptTest();this.u.switchCode+="switch($blk){";this.u.suffixCode="}";this.u.suffixCode+="}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '"+this.filename+"'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });";
switch(a.constructor){case Sk.astnodes.Module:this.cbody(a.body);l("return $loc;");break;default:Sk.asserts.fail("todo; unhandled case in compilerMod")}this.exitScope();this.result.push(this.outputAllUnits());return b};Sk.compile=function(b,c,e,f){e=Sk.__future__;Sk.__future__=Object.create(Sk.__future__);var d=Sk.parse(c,b),g=Sk.astFromParse(d.cst,c,d.flags);d=d.flags;var h=Sk.symboltable(g,c);b=new a(c,h,d,f,b);c=b.cmod(g);Sk.__future__=e;return{funcname:"$compiledmod",code:"$compiledmod = function() {"+
b.result.join("")+"\nreturn "+c+";}();"}};Sk.exportSymbol("Sk.compile",Sk.compile);Sk.resetCompiler=function(){Sk.gensymcount=0};Sk.exportSymbol("Sk.resetCompiler",Sk.resetCompiler);Sk.fixReserved=b;Sk.exportSymbol("Sk.fixReserved",Sk.fixReserved);Sk.unfixReserved=function(a){return a.replace(/_\$rw\$$/,"")};Sk.exportSymbol("Sk.unfixReserved",Sk.unfixReserved);Sk.mangleName=e;Sk.exportSymbol("Sk.mangleName",Sk.mangleName);Sk.reservedWords_=h;Sk.exportSymbol("Sk.reservedWords_",Sk.reservedWords_)},
function(m,q){Sk.sysmodules=new Sk.builtin.dict([]);Sk.realsyspath=void 0;Sk.importSearchPathForName=function(a,c,b){var e=a.replace(/\./g,"/"),f=function(a,b){return Sk.misceval.chain(Sk.misceval.tryCatch(function(){return Sk.read(a)},function(a){}),function(c){if(void 0!==c)return new Sk.misceval.Break({filename:a,code:c,packagePath:b})})};void 0===b&&(b=Sk.realsyspath);return Sk.misceval.iterFor(b.tp$iter(),function(a){return Sk.misceval.chain(f(a.v+"/"+e+c,!1),function(b){return b?b:f(a.v+"/"+
e+"/__init__"+c,a.v+"/"+e)})})};Sk.importSetUpPath=function(a){if(!Sk.realsyspath){var c=[new Sk.builtin.str("src/builtin"),new Sk.builtin.str("src/lib"),new Sk.builtin.str(".")];for(a=0;a<Sk.syspath.length;++a)c.push(new Sk.builtin.str(Sk.syspath[a]));Sk.realsyspath=new Sk.builtin.list(c)}};Sk.importModuleInternal_=function(a,c,b,e,f,l,h){var d,g,m,k,p=null,q=void 0!==f?f.tp$getattr(Sk.builtin.str.$name):void 0,A=void 0!==q?q.v+".":"",t=void 0!==f?f.tp$getattr(Sk.builtin.str.$path):void 0;Sk.importSetUpPath(h);
if(f&&!q){if(l)return;throw new Sk.builtin.ValueError("Attempted to import relative to invalid package (no name)");}void 0===b&&(b=A+a);var y=a.split(".");if(1<y.length){var B=y.slice(0,y.length-1).join(".");p=Sk.importModuleInternal_(B,c,void 0,void 0,f,l,h)}var E=Sk.misceval.chain(p,function(n){p=n;g=Sk.sysmodules.quick$lookup(new Sk.builtin.str(b));return void 0!==g?p||g:Sk.misceval.chain(void 0,function(){var b=a;if(1<y.length){if(!p)return;m=Sk.sysmodules.mp$subscript(new Sk.builtin.str(A+B));
b=y[y.length-1];t=m.tp$getattr(Sk.builtin.str.$path)}k=new Sk.builtin.module;if("string"===typeof e){d=a+".py";var c=Sk.compile(e,d,"exec",h)}else c=Sk.misceval.chain(void 0,function(){if(Sk.onBeforeImport&&"function"===typeof Sk.onBeforeImport)return Sk.onBeforeImport(a)},function(c){if(!1===c)throw new Sk.builtin.ImportError("Importing "+a+" is not allowed");if("string"===typeof c)throw new Sk.builtin.ImportError(c);return Sk.importSearchPathForName(b,".js",t)},function(a){return a?{funcname:"$builtinmodule",
code:a.code,filename:a.filename,packagePath:a.packagePath}:Sk.misceval.chain(Sk.importSearchPathForName(b,".py",t),function(b){if(a=b)return Sk.compile(a.code,a.filename,"exec",h)},function(b){if(b)return b.packagePath=a.packagePath,b})});return c},function(a){if(a){Sk.sysmodules.mp$ass_subscript(new Sk.builtin.str(b),k);var e=k.$js=a.code;null==d&&(d=a.filename);null!=Sk.dateSet&&Sk.dateSet||(e="Sk.execStart = Sk.lastYield = new Date();\n"+a.code,Sk.dateSet=!0);if(c){var f=function(a){var b,c=Sk.js_beautify(a).split("\n");
for(b=1;b<=c.length;++b){var d=(""+b).length;for(a="";5>d;++d)a+=" ";c[b-1]="/* "+a+b+" */ "+c[b-1]}return c.join("\n")};e=f(e);Sk.debugout(e)}e+="\n"+a.funcname+";";e=Sk.global.eval(e);k.$d={__name__:new Sk.builtin.str(b),__doc__:Sk.builtin.none.none$,__package__:a.packagePath?new Sk.builtin.str(b):B?new Sk.builtin.str(A+B):q?q:Sk.builtin.none.none$};a.packagePath&&(k.$d.__path__=new Sk.builtin.tuple([new Sk.builtin.str(a.packagePath)]));return e(k.$d)}},function(b){var c;if(void 0===b){if(l&&!p)return;
throw new Sk.builtin.ImportError("No module named "+a);}if(b!==k.$d){for(c in k.$d)b[c]||(b[c]=k.$d[c]);k.$d=b}if(Sk.onAfterImport&&"function"===typeof Sk.onAfterImport)try{Sk.onAfterImport(a)}catch(U){}if(p)return m.tp$setattr(new Sk.builtin.str(y[y.length-1]),k),p;f&&f.tp$setattr(new Sk.builtin.str(a),k);return k})});return h?E:Sk.misceval.retryOptionalSuspensionOrThrow(E)};Sk.importModule=function(a,c,b){return Sk.importModuleInternal_(a,c,void 0,void 0,void 0,!1,b)};Sk.importMain=function(a,c,
b){Sk.dateSet=!1;Sk.filesLoaded=!1;Sk.sysmodules=new Sk.builtin.dict([]);Sk.realsyspath=void 0;Sk.resetCompiler();return Sk.importModuleInternal_(a,c,"__main__",void 0,void 0,!1,b)};Sk.importMainWithBody=function(a,c,b,e){Sk.dateSet=!1;Sk.filesLoaded=!1;Sk.sysmodules=new Sk.builtin.dict([]);Sk.realsyspath=void 0;Sk.resetCompiler();return Sk.importModuleInternal_(a,c,"__main__",b,void 0,!1,e)};Sk.importBuiltinWithBody=function(a,c,b,e){return Sk.importModuleInternal_(a,c,"__builtin__."+a,b,void 0,
!1,e)};Sk.builtin.__import__=function(a,c,b,e,f){var l=Sk.globals,h;void 0===f&&(f=Sk.__future__.absolute_import?0:-1);if(0!==f&&c.__package__&&c.__package__!==Sk.builtin.none.none$){if((h=c.__package__.v)&&0<f){c=h.split(".");if(f-1>=c.length)throw new Sk.builtin.ValueError("Attempted relative import beyond toplevel package");c.length-=f-1;h=c.join(".")}var d=Sk.sysmodules.quick$lookup(new Sk.builtin.str(h))}if(0<f&&void 0===d)throw new Sk.builtin.ValueError("Attempted relative import in non-package");
a.split(".");return Sk.misceval.chain(void 0,function(){if(0!==f&&void 0!==d)return""===a?d:Sk.importModuleInternal_(a,void 0,h+"."+a,void 0,d,-1==f,!0)},function(b){return void 0===b?(h=d=void 0,Sk.importModuleInternal_(a,void 0,void 0,void 0,void 0,!1,!0)):b},function(b){if(e&&0!==e.length){var c;var d=Sk.sysmodules.mp$subscript(new Sk.builtin.str((h||"")+(h&&a?".":"")+a));for(b=0;b<e.length;b++){var f=e[b];"*"!=f&&void 0===d.tp$getattr(new Sk.builtin.str(f))&&(c=Sk.misceval.chain(c,Sk.importModuleInternal_.bind(null,
f,void 0,void 0,void 0,d,!0,!0)))}return Sk.misceval.chain(c,function(){Sk.asserts.assert(d);return d})}return b},function(a){l!==Sk.globals&&(Sk.globals=l);return a})};Sk.importStar=function(a,c,b){if(b=a.tp$getattr(new Sk.builtin.str("__all__")))for(let e=Sk.abstr.iter(b),f=e.tp$iternext();void 0!==f;f=e.tp$iternext())c[f.v]=Sk.abstr.gattr(a,f);else{b=Object.getOwnPropertyNames(a.$d);for(let e in b)"_"!=b[e].charAt(0)&&(c[b[e]]=a.$d[b[e]])}};Sk.exportSymbol("Sk.importMain",Sk.importMain);Sk.exportSymbol("Sk.importMainWithBody",
Sk.importMainWithBody);Sk.exportSymbol("Sk.importBuiltinWithBody",Sk.importBuiltinWithBody);Sk.exportSymbol("Sk.builtin.__import__",Sk.builtin.__import__);Sk.exportSymbol("Sk.importStar",Sk.importStar)},function(m,q){Sk.builtin.timSort=function(a,c){this.list=new Sk.builtin.list(a.v);this.MIN_GALLOP=7;this.listlength=c?c:a.sq$length()};Sk.builtin.timSort.prototype.lt=function(a,c){return Sk.misceval.richCompareBool(a,c,"Lt")};Sk.builtin.timSort.prototype.le=function(a,c){return!this.lt(c,a)};Sk.builtin.timSort.prototype.setitem=
function(a,c){this.list.v[a]=c};Sk.builtin.timSort.prototype.binary_sort=function(a,c){var b;for(b=a.base+c;b<a.base+a.len;b++){var e=a.base;var f=b;for(c=a.getitem(f);e<f;){var l=e+(f-e>>1);this.lt(c,a.getitem(l))?f=l:e=l+1}Sk.asserts.assert(e===f);for(l=b;l>e;l--)a.setitem(l,a.getitem(l-1));a.setitem(e,c)}};Sk.builtin.timSort.prototype.count_run=function(a){var c;if(1>=a.len){var b=a.len;var e=!1}else if(b=2,this.lt(a.getitem(a.base+1),a.getitem(a.base)))for(e=!0,c=a.base+2;c<a.base+a.len;c++)if(this.lt(a.getitem(c),
a.getitem(c-1)))b++;else break;else for(e=!1,c=a.base+2;c<a.base+a.len&&!this.lt(a.getitem(c),a.getitem(c-1));c++)b++;return{run:new Sk.builtin.listSlice(a.list,a.base,b),descending:e}};Sk.builtin.timSort.prototype.sort=function(){var a,c=new Sk.builtin.listSlice(this.list,0,this.listlength);if(!(2>c.len)){this.merge_init();for(a=this.merge_compute_minrun(c.len);0<c.len;){var b=this.count_run(c);b.descending&&b.run.reverse();if(b.run.len<a){var e=b.run.len;b.run.len=a<c.len?a:c.len;this.binary_sort(b.run,
e)}c.advance(b.run.len);this.pending.push(b.run);this.merge_collapse()}Sk.asserts.assert(c.base==this.listlength);this.merge_force_collapse();Sk.asserts.assert(1==this.pending.length);Sk.asserts.assert(0===this.pending[0].base);Sk.asserts.assert(this.pending[0].len==this.listlength)}};Sk.builtin.timSort.prototype.gallop=function(a,c,b,e){var f;Sk.asserts.assert(0<=b&&b<c.len);var l=this;e=e?function(a,b){return l.le(a,b)}:function(a,b){return l.lt(a,b)};var h=c.base+b;var d=0;var g=1;if(e(c.getitem(h),
a)){for(f=c.len-b;g<f;)if(e(c.getitem(h+g),a)){d=g;try{g=(g<<1)+1}catch(n){g=f}}else break;g>f&&(g=f);d+=b;g+=b}else{for(f=b+1;g<f&&!e(c.getitem(h-g),a);){d=g;try{g=(g<<1)+1}catch(n){g=f}}g>f&&(g=f);h=b-d;d=b-g;g=h}Sk.asserts.assert(-1<=d<g<=c.len);for(d+=1;d<g;)b=d+(g-d>>1),e(c.getitem(c.base+b),a)?d=b+1:g=b;Sk.asserts.assert(d==g);return g};Sk.builtin.timSort.prototype.merge_init=function(){this.min_gallop=this.MIN_GALLOP;this.pending=[]};Sk.builtin.timSort.prototype.merge_lo=function(a,c){var b,
e,f;Sk.asserts.assert(0<a.len&&0<c.len&&a.base+a.len==c.base);var l=this.min_gallop;var h=a.base;a=a.copyitems();try{if(this.setitem(h,c.popleft()),h++,1!=a.len&&0!==c.len)for(;;){for(e=b=0;;)if(this.lt(c.getitem(c.base),a.getitem(a.base))){this.setitem(h,c.popleft());h++;if(0===c.len)return;e++;b=0;if(e>=l)break}else{this.setitem(h,a.popleft());h++;if(1==a.len)return;b++;e=0;if(b>=l)break}for(l+=1;;){this.min_gallop=l-=1<l;b=this.gallop(c.getitem(c.base),a,0,!0);for(f=a.base;f<a.base+b;f++)this.setitem(h,
a.getitem(f)),h++;a.advance(b);if(1>=a.len)return;this.setitem(h,c.popleft());h++;if(0===c.len)return;e=this.gallop(a.getitem(a.base),c,0,!1);for(f=c.base;f<c.base+e;f++)this.setitem(h,c.getitem(f)),h++;c.advance(e);if(0===c.len)return;this.setitem(h,a.popleft());h++;if(1==a.len)return;if(b<this.MIN_GALLOP&&e<this.MIN_GALLOP)break;l++;this.min_gallop=l}}}finally{Sk.asserts.assert(0<=a.len&&0<=c.len);for(f=c.base;f<c.base+c.len;f++)this.setitem(h,c.getitem(f)),h++;for(f=a.base;f<a.base+a.len;f++)this.setitem(h,
a.getitem(f)),h++}};Sk.builtin.timSort.prototype.merge_hi=function(a,c){var b,e,f;Sk.asserts.assert(0<a.len&&0<c.len&&a.base+a.len==c.base);var l=this.min_gallop;var h=c.base+c.len;c=c.copyitems();try{if(h--,this.setitem(h,a.popright()),0!==a.len&&1!=c.len)for(;;){for(e=b=0;;){var d=a.getitem(a.base+a.len-1);var g=c.getitem(c.base+c.len-1);if(this.lt(g,d)){h--;this.setitem(h,d);a.len--;if(0===a.len)return;b++;e=0;if(b>=l)break}else{h--;this.setitem(h,g);c.len--;if(1==c.len)return;e++;b=0;if(e>=l)break}}for(l+=
1;;){this.min_gallop=l-=1<l;g=c.getitem(c.base+c.len-1);var m=this.gallop(g,a,a.len-1,!0);b=a.len-m;for(f=a.base+a.len-1;f>a.base+m-1;f--)h--,this.setitem(h,a.getitem(f));a.len-=b;if(0===a.len)return;h--;this.setitem(h,c.popright());if(1==c.len)return;d=a.getitem(a.base+a.len-1);m=this.gallop(d,c,c.len-1,!1);e=c.len-m;for(f=c.base+c.len-1;f>c.base+m-1;f--)h--,this.setitem(h,c.getitem(f));c.len-=e;if(1>=c.len)return;h--;this.setitem(h,a.popright());if(0===a.len)return;if(b<this.MIN_GALLOP&&e<this.MIN_GALLOP)break;
l++;this.min_gallop=l}}}finally{Sk.asserts.assert(0<=a.len&&0<=c.len);for(f=a.base+a.len-1;f>a.base-1;f--)h--,this.setitem(h,a.getitem(f));for(f=c.base+c.len-1;f>c.base-1;f--)h--,this.setitem(h,c.getitem(f))}};Sk.builtin.timSort.prototype.merge_at=function(a){0>a&&(a=this.pending.length+a);var c=this.pending[a];var b=this.pending[a+1];Sk.asserts.assert(0<c.len&&0<b.len);Sk.asserts.assert(c.base+c.len==b.base);this.pending[a]=new Sk.builtin.listSlice(this.list,c.base,c.len+b.len);this.pending.splice(a+
1,1);a=this.gallop(b.getitem(b.base),c,0,!0);c.advance(a);0!==c.len&&(b.len=this.gallop(c.getitem(c.base+c.len-1),b,b.len-1,!1),0!==b.len&&(c.len<=b.len?this.merge_lo(c,b):this.merge_hi(c,b)))};Sk.builtin.timSort.prototype.merge_collapse=function(){for(var a=this.pending;1<a.length;)if(3<=a.length&&a[a.length-3].len<=a[a.length-2].len+a[a.length-1].len)a[a.length-3].len<a[a.length-1].len?this.merge_at(-3):this.merge_at(-2);else if(a[a.length-2].len<=a[a.length-1].len)this.merge_at(-2);else break};
Sk.builtin.timSort.prototype.merge_force_collapse=function(){for(var a=this.pending;1<a.length;)3<=a.length&&a[a.length-3].len<a[a.length-1].len?this.merge_at(-3):this.merge_at(-2)};Sk.builtin.timSort.prototype.merge_compute_minrun=function(a){for(var c=0;64<=a;)c|=a&1,a>>=1;return a+c};Sk.builtin.listSlice=function(a,c,b){this.list=a;this.base=c;this.len=b};Sk.builtin.listSlice.prototype.copyitems=function(){var a=this.base,c=this.base+this.len;Sk.asserts.assert(0<=a<=c);return new Sk.builtin.listSlice(new Sk.builtin.list(this.list.v.slice(a,
c)),0,this.len)};Sk.builtin.listSlice.prototype.advance=function(a){this.base+=a;this.len-=a;Sk.asserts.assert(this.base<=this.list.sq$length())};Sk.builtin.listSlice.prototype.getitem=function(a){return this.list.v[a]};Sk.builtin.listSlice.prototype.setitem=function(a,c){this.list.v[a]=c};Sk.builtin.listSlice.prototype.popleft=function(){var a=this.list.v[this.base];this.base++;this.len--;return a};Sk.builtin.listSlice.prototype.popright=function(){this.len--;return this.list.v[this.base+this.len]};
Sk.builtin.listSlice.prototype.reverse=function(){for(var a,c,b=this.list,e=this.base,f=e+this.len-1;e<f;)a=b.v[f],c=b.v[e],b.v[e]=a,b.v[f]=c,e++,f--};Sk.exportSymbol("Sk.builtin.listSlice",Sk.builtin.listSlice);Sk.exportSymbol("Sk.builtin.timSort",Sk.builtin.timSort)},function(m,q){Sk.builtin.super_=Sk.abstr.buildNativeClass("super",{constructor:function(a,c){Sk.asserts.assert(this instanceof Sk.builtin.super_,"bad call to super, use 'new'");this.type=a;this.obj=c;if(void 0!==a&&!Sk.builtin.checkClass(a))throw new Sk.builtin.TypeError("must be type, not "+
Sk.abstr.typeName(a));this.obj_type=void 0!==this.obj?this.$supercheck(a,this.obj):null},slots:{tp$doc:"super() -> same as super(__class__, <first argument>)\nsuper(type) -> unbound super object\nsuper(type, obj) -> bound super object; requires isinstance(obj, type)\nsuper(type, type2) -> bound super object; requires issubclass(type2, type)\nTypical use to call a cooperative superclass method:\nclass C(B):\n    def meth(self, arg):\n        super().meth(arg)\nThis works for class methods too:\nclass C(B):\n    @classmethod\n    def cmeth(cls, arg):\n        super().cmeth(arg)\n",
tp$new:Sk.generic.new,tp$init(a,c){Sk.abstr.checkNoKwargs("super",c);Sk.abstr.checkArgsLen("super",a,1,2);c=a[0];a=a[1];if(!Sk.builtin.checkClass(c))throw new Sk.builtin.TypeError("must be type, not "+Sk.abstr.typeName(c));this.obj=a;this.type=c;null!=this.obj&&(this.obj_type=this.$supercheck(c,this.obj))},$r(){return this.obj?new Sk.builtin.str("<super: <class '"+this.type.prototype.tp$name+"'>, <"+Sk.abstr.typeName(this.obj)+" object>>"):new Sk.builtin.str("<super: <class '"+this.type.prototype.tp$name+
"'>, NULL>")},tp$getattr(a,c){let b=this.obj_type;if(null==b)return Sk.generic.getAttr.call(this,a,c);var e=b.prototype.tp$mro;const f=e.length;if(a===Sk.builtin.str.$class)return Sk.generic.getAttr.call(this,a,c);let l;for(l=0;l+1<f&&this.type!==e[l];l++);l++;if(l>=f)return Sk.generic.getAttr.call(this,a,c);a=a.$mangled;let h;for(;l<f;){c=e[l].prototype;c.hasOwnProperty(a)&&(h=c[a]);if(void 0!==h)return e=h.tp$descr_get,void 0!==e&&(h=e.call(h,this.obj===b?null:this.obj,b)),h;l++}},tp$descr_get(a,
c){if(null===a||null!=this.obj)return this;if(this.ob$type!==Sk.builtin.super_)return Sk.misceval.callsimOrSuspendArray(this.ob$type,[this.type,a]);{c=this.$supercheck(this.type,a);const b=new Sk.builtin.super_;b.type=this.type;b.obj=a;b.obj_type=c;return b}}},getsets:{__thisclass__:{$get(){return this.type},$doc:"the class invoking super()"},__self__:{$get(){return this.obj||Sk.builtin.none.none$},$doc:"the instance invoking super(); may be None"},__self_class__:{$get(){return this.obj_type||Sk.builtin.none.none$},
$doc:"the type of the instance invoking super(); may be None"}},proto:{$supercheck(a,c){if(Sk.builtin.checkClass(c)&&c.$isSubType(a))return c;if(c.ob$type.$isSubType(a))return c.ob$type;{const b=c.tp$getattr(Sk.builtin.str.$class);if(void 0!==b&&b!==c.ob$type&&Sk.builtin.checkClass(b)&&b.$isSubType(a))return b}throw new Sk.builtin.TypeError("super(type, obj): obj must be an instance or subtype of type");}}})},function(m,q){Sk.builtins={round:null,len:null,min:null,max:null,sum:null,abs:null,fabs:null,
ord:null,chr:null,hex:null,oct:null,bin:null,dir:null,repr:null,open:null,isinstance:null,hash:null,getattr:null,hasattr:null,id:null,reduce:new Sk.builtin.func(Sk.builtin.reduce),sorted:null,any:null,all:null,enumerate:Sk.builtin.enumerate,filter:Sk.builtin.filter_,map:Sk.builtin.map_,range:Sk.builtin.range_,reversed:Sk.builtin.reversed,zip:Sk.builtin.zip_,BaseException:Sk.builtin.BaseException,AttributeError:Sk.builtin.AttributeError,ValueError:Sk.builtin.ValueError,Exception:Sk.builtin.Exception,
ZeroDivisionError:Sk.builtin.ZeroDivisionError,AssertionError:Sk.builtin.AssertionError,ImportError:Sk.builtin.ImportError,IndentationError:Sk.builtin.IndentationError,IndexError:Sk.builtin.IndexError,LookupError:Sk.builtin.LookupError,KeyError:Sk.builtin.KeyError,TypeError:Sk.builtin.TypeError,UnicodeDecodeError:Sk.builtin.UnicodeDecodeError,UnicodeEncodeError:Sk.builtin.UnicodeEncodeError,NameError:Sk.builtin.NameError,IOError:Sk.builtin.IOError,NotImplementedError:Sk.builtin.NotImplementedError,
SystemExit:Sk.builtin.SystemExit,OverflowError:Sk.builtin.OverflowError,OperationError:Sk.builtin.OperationError,NegativePowerError:Sk.builtin.NegativePowerError,RuntimeError:Sk.builtin.RuntimeError,RecursionError:Sk.builtin.RecursionError,StopIteration:Sk.builtin.StopIteration,SyntaxError:Sk.builtin.SyntaxError,SystemError:Sk.builtin.SystemError,float_$rw$:Sk.builtin.float_,int_$rw$:Sk.builtin.int_,bool:Sk.builtin.bool,complex:Sk.builtin.complex,dict:Sk.builtin.dict,file:Sk.builtin.file,frozenset:Sk.builtin.frozenset,
"function":Sk.builtin.func,generator:Sk.builtin.generator,list:Sk.builtin.list,long_$rw$:Sk.builtin.lng,method:Sk.builtin.method,object:Sk.builtin.object,slice:Sk.builtin.slice,str:Sk.builtin.str,set:Sk.builtin.set,tuple:Sk.builtin.tuple,type:Sk.builtin.type,input:null,raw_input:new Sk.builtin.func(Sk.builtin.raw_input),setattr:null,jseval:Sk.builtin.jseval,jsmillis:Sk.builtin.jsmillis,quit:new Sk.builtin.func(Sk.builtin.quit),exit:new Sk.builtin.func(Sk.builtin.quit),print:null,divmod:null,format:null,
globals:null,issubclass:null,iter:null,execfile:Sk.builtin.execfile,help:Sk.builtin.help,memoryview:Sk.builtin.memoryview,reload:Sk.builtin.reload,super_$rw$:Sk.builtin.super_,unichr:Sk.builtin.unichr,vars:Sk.builtin.vars,apply_$rw$:Sk.builtin.apply_,buffer:Sk.builtin.buffer,coerce:Sk.builtin.coerce,intern:Sk.builtin.intern,property:Sk.builtin.property,classmethod:Sk.builtin.classmethod,staticmethod:Sk.builtin.staticmethod};Sk.abstr.setUpModuleMethods("builtins",Sk.builtins,{__import__:{$meth:Sk.builtin.__import__,
$flags:{NamedArgs:["name","globals","locals","fromlist","level"]},$textsig:null,$doc:"__import__(name, globals=None, locals=None, fromlist=(), level=0) -> module\n\nImport a module. Because this function is meant for use by the Python\ninterpreter and not for general use, it is better to use\nimportlib.import_module() to programmatically import a module.\n\nThe globals argument is only used to determine the context;\nthey are not modified.  The locals argument is unused.  The fromlist\nshould be a list of names to emulate ``from name import ...'', or an\nempty list to emulate ``import name''.\nWhen importing a module from a package, note that __import__('A.B', ...)\nreturns package A when fromlist is empty, but its submodule B when\nfromlist is not empty.  The level argument is used to determine whether to\nperform absolute or relative imports: 0 is absolute, while a positive number\nis the number of parent directories to search relative to the current module."},
abs:{$meth:Sk.builtin.abs,$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the absolute value of the argument."},all:{$meth:Sk.builtin.all,$flags:{OneArg:!0},$textsig:"($module, iterable, /)",$doc:"Return True if bool(x) is True for all values x in the iterable.\n\nIf the iterable is empty, return True."},any:{$meth:Sk.builtin.any,$flags:{OneArg:!0},$textsig:"($module, iterable, /)",$doc:"Return True if bool(x) is True for any x in the iterable.\n\nIf the iterable is empty, return False."},
ascii:{$meth:Sk.builtin.ascii,$flags:{OneArg:!0},$textsig:"($module, obj, /)",$doc:"Return an ASCII-only representation of an object.\n\nAs repr(), return a string containing a printable representation of an\nobject, but escape the non-ASCII characters in the string returned by\nrepr() using \\\\x, \\\\u or \\\\U escapes. This generates a string similar\nto that returned by repr() in Python 2."},bin:{$meth:Sk.builtin.bin,$flags:{OneArg:!0},$textsig:"($module, number, /)",$doc:"Return the binary representation of an integer.\n\n   >>> bin(2796202)\n   '0b1010101010101010101010'"},
callable:{$meth:Sk.builtin.callable,$flags:{OneArg:!0},$textsig:"($module, obj, /)",$doc:"Return whether the object is callable (i.e., some kind of function).\n\nNote that classes are callable, as are instances of classes with a\n__call__() method."},chr:{$meth:Sk.builtin.chr,$flags:{OneArg:!0},$textsig:"($module, i, /)",$doc:"Return a Unicode string of one character with ordinal i; 0 <= i <= 0x10ffff."},delattr:{$meth:Sk.builtin.delattr,$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, obj, name, /)",
$doc:"Deletes the named attribute from the given object.\n\ndelattr(x, 'y') is equivalent to ``del x.y''"},dir:{$meth:Sk.builtin.dir,$flags:{MinArgs:0,MaxArgs:1},$textsig:null,$doc:"dir([object]) -> list of strings\n\nIf called without an argument, return the names in the current scope.\nElse, return an alphabetized list of names comprising (some of) the attributes\nof the given object, and of attributes reachable from it.\nIf the object supplies a method named __dir__, it will be used; otherwise\nthe default dir() logic is used and returns:\n  for a module object: the module's attributes.\n  for a class object:  its attributes, and recursively the attributes\n    of its bases.\n  for any other object: its attributes, its class's attributes, and\n    recursively the attributes of its class's base classes."},
divmod:{$meth:Sk.builtin.divmod,$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, y, /)",$doc:"Return the tuple (x//y, x%y).  Invariant: div*y + mod == x."},eval_$rw$:{$name:"eval",$meth:Sk.builtin.eval_,$flags:{MinArgs:1,MaxArgs:3},$textsig:"($module, source, globals=None, locals=None, /)",$doc:"Evaluate the given source in the context of globals and locals.\n\nThe source may be a string representing a Python expression\nor a code object as returned by compile().\nThe globals must be a dictionary and locals can be any mapping,\ndefaulting to the current globals and locals.\nIf only globals is given, locals defaults to it."},
format:{$meth:Sk.builtin.format,$flags:{MinArgs:1,MaxArgs:2},$textsig:"($module, value, format_spec='', /)",$doc:"Return value.__format__(format_spec)\n\nformat_spec defaults to the empty string.\nSee the Format Specification Mini-Language section of help('FORMATTING') for\ndetails."},getattr:{$meth:Sk.builtin.getattr,$flags:{MinArgs:2,MaxArgs:3},$textsig:null,$doc:"getattr(object, name[, default]) -> value\n\nGet a named attribute from an object; getattr(x, 'y') is equivalent to x.y.\nWhen a default argument is given, it is returned when the attribute doesn't\nexist; without it, an exception is raised in that case."},
globals:{$meth:Sk.builtin.globals,$flags:{NoArgs:!0},$textsig:"($module, /)",$doc:"Return the dictionary containing the current scope's global variables.\n\nNOTE: Updates to this dictionary *will* affect name lookups in the current\nglobal scope and vice-versa."},hasattr:{$meth:Sk.builtin.hasattr,$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, obj, name, /)",$doc:"Return whether the object has an attribute with the given name.\n\nThis is done by calling getattr(obj, name) and catching AttributeError."},
hash:{$meth:Sk.builtin.hash,$flags:{OneArg:!0},$textsig:"($module, obj, /)",$doc:"Return the hash value for the given object.\n\nTwo objects that compare equal must also have the same hash value, but the\nreverse is not necessarily true."},hex:{$meth:Sk.builtin.hex,$flags:{OneArg:!0},$textsig:"($module, number, /)",$doc:"Return the hexadecimal representation of an integer.\n\n   >>> hex(12648430)\n   '0xc0ffee'"},id:{$meth:Sk.builtin.id,$flags:{OneArg:!0},$textsig:"($module, obj, /)",$doc:"Return the identity of an object.\n\nThis is guaranteed to be unique among simultaneously existing objects.\n(CPython uses the object's memory address.)"},
input:{$meth:Sk.builtin.input,$flags:{MinArgs:0,MaxArgs:1},$textsig:"($module, prompt=None, /)",$doc:"Read a string from standard input.  The trailing newline is stripped.\n\nThe prompt string, if given, is printed to standard output without a\ntrailing newline before reading input.\n\nIf the user hits EOF (*nix: Ctrl-D, Windows: Ctrl-Z+Return), raise EOFError.\nOn *nix systems, readline is used if available."},isinstance:{$meth:Sk.builtin.isinstance,$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, obj, class_or_tuple, /)",
$doc:"Return whether an object is an instance of a class or of a subclass thereof.\n\nA tuple, as in ``isinstance(x, (A, B, ...))``, may be given as the target to\ncheck against. This is equivalent to ``isinstance(x, A) or isinstance(x, B)\nor ...`` etc."},issubclass:{$meth:Sk.builtin.issubclass,$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, cls, class_or_tuple, /)",$doc:"Return whether 'cls' is a derived from another class or is the same class.\n\nA tuple, as in ``issubclass(x, (A, B, ...))``, may be given as the target to\ncheck against. This is equivalent to ``issubclass(x, A) or issubclass(x, B)\nor ...`` etc."},
iter:{$meth:Sk.builtin.iter,$flags:{MinArgs:1,MaxArgs:2},$textsig:"($module, iterable /)",$doc:"iter(iterable) -> iterator\niter(callable, sentinel) -> iterator\n\nGet an iterator from an object.  In the first form, the argument must\nsupply its own iterator, or be a sequence.\nIn the second form, the callable is called until it returns the sentinel."},len:{$meth:Sk.builtin.len,$flags:{OneArg:!0},$textsig:"($module, obj, /)",$doc:"Return the number of items in a container."},locals:{$meth:Sk.builtin.locals,
$flags:{NoArgs:!0},$textsig:"($module, /)",$doc:"Return a dictionary containing the current scope's local variables.\n\nNOTE: Whether or not updates to this dictionary will affect name lookups in\nthe local scope and vice-versa is *implementation dependent* and not\ncovered by any backwards compatibility guarantees."},max:{$meth:Sk.builtin.max,$flags:{FastCall:!0},$textsig:null,$doc:"max(iterable, *[, default=obj, key=func]) -> value\nmax(arg1, arg2, *args, *[, key=func]) -> value\n\nWith a single iterable argument, return its biggest item. The\ndefault keyword-only argument specifies an object to return if\nthe provided iterable is empty.\nWith two or more arguments, return the largest argument."},
min:{$meth:Sk.builtin.min,$flags:{FastCall:!0},$textsig:null,$doc:"min(iterable, *[, default=obj, key=func]) -> value\nmin(arg1, arg2, *args, *[, key=func]) -> value\n\nWith a single iterable argument, return its smallest item. The\ndefault keyword-only argument specifies an object to return if\nthe provided iterable is empty.\nWith two or more arguments, return the smallest argument."},next:{$name:"next",$meth:Sk.builtin.next_,$flags:{MinArgs:1,MaxArgs:2},$textsig:null,$doc:"next(iterator[, default])\n\nReturn the next item from the iterator. If default is given and the iterator\nis exhausted, it is returned instead of raising StopIteration."},
oct:{$meth:Sk.builtin.oct,$flags:{OneArg:!0},$textsig:"($module, number, /)",$doc:"Return the octal representation of an integer.\n\n   >>> oct(342391)\n   '0o1234567'"},open:{$meth:Sk.builtin.open,$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:"open(name[, mode[, buffering]]) -> file object\n\nOpen a file using the file() type, returns a file object.  This is the\npreferred way to open a file.  See file.__doc__ for further information."},ord:{$meth:Sk.builtin.ord,$flags:{OneArg:!0},$textsig:"($module, c, /)",
$doc:"Return the Unicode code point for a one-character string."},pow:{$meth:Sk.builtin.pow,$flags:{MinArgs:2,MaxArgs:3},$textsig:"($module, x, y, z=None, /)",$doc:"Equivalent to x**y (with two arguments) or x**y % z (with three arguments)\n\nSome types, such as ints, are able to use a more efficient algorithm when\ninvoked using the three argument form."},print:{$meth:Sk.builtin.print,$flags:{FastCall:!0},$textsig:null,$doc:"print(value, ..., sep=' ', end='\\n', file=sys.stdout, flush=False)\n\nPrints the values to a stream, or to sys.stdout by default.\nOptional keyword arguments:\nfile:  a file-like object (stream); defaults to the current sys.stdout.\nsep:   string inserted between values, default a space.\nend:   string appended after the last value, default a newline.\nflush: whether to forcibly flush the stream."},
repr:{$meth:Sk.builtin.repr,$flags:{OneArg:!0},$textsig:"($module, obj, /)",$doc:"Return the canonical string representation of the object.\n\nFor many object types, including most builtins, eval(repr(obj)) == obj."},round:{$meth:Sk.builtin.round,$flags:{NamedArgs:["number","ndigits"]},$textsig:"($module, /, number, ndigits=None)",$doc:"Round a number to a given precision in decimal digits.\n\nThe return value is an integer if ndigits is omitted or None.  Otherwise\nthe return value has the same type as the number.  ndigits may be negative."},
setattr:{$meth:Sk.builtin.setattr,$flags:{MinArgs:3,MaxArgs:3},$textsig:"($module, obj, name, value, /)",$doc:"Sets the named attribute on the given object to the specified value.\n\nsetattr(x, 'y', v) is equivalent to ``x.y = v''"},sorted:{$meth:Sk.builtin.sorted,$flags:{NamedArgs:[null,"cmp","key","reverse"],Defaults:[Sk.builtin.none.none$,Sk.builtin.none.none$,Sk.builtin.bool.false$]},$textsig:"($module, iterable, /, *, key=None, reverse=False)",$doc:"Return a new list containing all items from the iterable in ascending order.\n\nA custom key function can be supplied to customize the sort order, and the\nreverse flag can be set to request the result in descending order."},
sum:{$meth:Sk.builtin.sum,$flags:{NamedArgs:[null,"start"],Defaults:[new Sk.builtin.int_(0)]},$textsig:"($module, iterable, /, start=0)",$doc:"Return the sum of a 'start' value (default: 0) plus an iterable of numbers\n\nWhen the iterable is empty, return the start value.\nThis function is intended specifically for use with numeric values and may\nreject non-numeric types."},vars:{$meth:Sk.builtin.vars,$flags:{MinArgs:0,MaxArgs:1},$textsig:null,$doc:"vars([object]) -> dictionary\n\nWithout arguments, equivalent to locals().\nWith an argument, equivalent to object.__dict__."}});
Sk.setupObjects=function(a){a?(Sk.builtins.filter=Sk.builtin.filter_,Sk.builtins.map=Sk.builtin.map_,Sk.builtins.zip=Sk.builtin.zip_,Sk.builtins.range=Sk.builtin.range_,delete Sk.builtins.xrange,delete Sk.builtins.StandardError,delete Sk.builtins.unicode,delete Sk.builtins.basestring,delete Sk.builtins.long_$rw$,Sk.builtin.int_.prototype.$r=function(){return new Sk.builtin.str(this.v.toString())},delete Sk.builtin.int_.prototype.tp$str,delete Sk.builtin.bool.prototype.tp$str,delete Sk.builtins.raw_input,
delete Sk.builtin.str.prototype.decode,Sk.builtins.bytes=Sk.builtin.bytes,Sk.builtins.ascii=new Sk.builtin.sk_method({$meth:Sk.builtin.ascii,$flags:{OneArg:!0},$textsig:"($module, obj, /)",$doc:"Return an ASCII-only representation of an object.\n\nAs repr(), return a string containing a printable representation of an\nobject, but escape the non-ASCII characters in the string returned by\nrepr() using \\\\x, \\\\u or \\\\U escapes. This generates a string similar\nto that returned by repr() in Python 2."},
null,"builtins")):(Sk.builtins.range=new Sk.builtin.sk_method({$meth:Sk.builtin.range,$name:"range",$flags:{MinArgs:1,MaxArgs:3}},void 0,"builtins"),Sk.builtins.xrange=new Sk.builtin.sk_method({$meth:Sk.builtin.xrange,$name:"xrange",$flags:{MinArgs:1,MaxArgs:3}},null,"builtins"),Sk.builtins.filter=new Sk.builtin.func(Sk.builtin.filter),Sk.builtins.map=new Sk.builtin.func(Sk.builtin.map),Sk.builtins.zip=new Sk.builtin.func(Sk.builtin.zip),Sk.builtins.StandardError=Sk.builtin.Exception,Sk.builtins.unicode=
Sk.builtin.str,Sk.builtins.basestring=Sk.builtin.str,Sk.builtins.long_$rw$=Sk.builtin.lng,Sk.builtin.int_.prototype.$r=function(){const a=this.v;return"number"===typeof a?new Sk.builtin.str(a.toString()):new Sk.builtin.str(a.toString()+"L")},Sk.builtin.int_.prototype.tp$str=function(){return new Sk.builtin.str(this.v.toString())},Sk.builtin.bool.prototype.tp$str=function(){return this.$r()},Sk.builtins.raw_input=new Sk.builtin.func(Sk.builtin.raw_input),Sk.builtin.str.prototype.decode=Sk.builtin.str.$py2decode,
delete Sk.builtins.bytes,delete Sk.builtins.ascii)};Sk.exportSymbol("Sk.setupObjects",Sk.setupObjects);Sk.exportSymbol("Sk.builtins",Sk.builtins)},function(m,q){Sk.builtin.str.$empty=new Sk.builtin.str("");Sk.builtin.str.$emptystr=Sk.builtin.str.$empty;Sk.builtin.str.$utf8=new Sk.builtin.str("utf-8");Sk.builtin.str.$ascii=new Sk.builtin.str("ascii");Sk.builtin.str.$default_factory=new Sk.builtin.str("default_factory");Sk.builtin.str.$imag=new Sk.builtin.str("imag");Sk.builtin.str.$real=new Sk.builtin.str("real");
Sk.builtin.str.$abs=new Sk.builtin.str("__abs__");Sk.builtin.str.$bytes=new Sk.builtin.str("__bytes__");Sk.builtin.str.$call=new Sk.builtin.str("__call__");Sk.builtin.str.$class=new Sk.builtin.str("__class__");Sk.builtin.str.$cmp=new Sk.builtin.str("__cmp__");Sk.builtin.str.$complex=new Sk.builtin.str("__complex__");Sk.builtin.str.$contains=new Sk.builtin.str("__contains__");Sk.builtin.str.$copy=new Sk.builtin.str("__copy__");Sk.builtin.str.$dict=new Sk.builtin.str("__dict__");Sk.builtin.str.$dir=
new Sk.builtin.str("__dir__");Sk.builtin.str.$doc=new Sk.builtin.str("__doc__");Sk.builtin.str.$enter=new Sk.builtin.str("__enter__");Sk.builtin.str.$eq=new Sk.builtin.str("__eq__");Sk.builtin.str.$exit=new Sk.builtin.str("__exit__");Sk.builtin.str.$index=new Sk.builtin.str("__index__");Sk.builtin.str.$init=new Sk.builtin.str("__init__");Sk.builtin.str.$int_=new Sk.builtin.str("__int__");Sk.builtin.str.$iter=new Sk.builtin.str("__iter__");Sk.builtin.str.$file=new Sk.builtin.str("__file__");Sk.builtin.str.$float_=
new Sk.builtin.str("__float__");Sk.builtin.str.$format=new Sk.builtin.str("__format__");Sk.builtin.str.$ge=new Sk.builtin.str("__ge__");Sk.builtin.str.$getattr=new Sk.builtin.str("__getattr__");Sk.builtin.str.$getattribute=new Sk.builtin.str("__getattribute__");Sk.builtin.str.$getitem=new Sk.builtin.str("__getitem__");Sk.builtin.str.$gt=new Sk.builtin.str("__gt__");Sk.builtin.str.$keys=new Sk.builtin.str("keys");Sk.builtin.str.$le=new Sk.builtin.str("__le__");Sk.builtin.str.$len=new Sk.builtin.str("__len__");
Sk.builtin.str.$length_hint=new Sk.builtin.str("__length_hint__");Sk.builtin.str.$loader=new Sk.builtin.str("__loader__");Sk.builtin.str.$lt=new Sk.builtin.str("__lt__");Sk.builtin.str.$module=new Sk.builtin.str("__module__");Sk.builtin.str.$missing=new Sk.builtin.str("__missing__");Sk.builtin.str.$name=new Sk.builtin.str("__name__");Sk.builtin.str.$ne=new Sk.builtin.str("__ne__");Sk.builtin.str.$new=new Sk.builtin.str("__new__");Sk.builtin.str.$next=new Sk.builtin.str("__next__");Sk.builtin.str.$path=
new Sk.builtin.str("__path__");Sk.builtin.str.$qualname=new Sk.builtin.str("__qualname__");Sk.builtin.str.$repr=new Sk.builtin.str("__repr__");Sk.builtin.str.$reversed=new Sk.builtin.str("__reversed__");Sk.builtin.str.$round=new Sk.builtin.str("__round__");Sk.builtin.str.$setattr=new Sk.builtin.str("__setattr__");Sk.builtin.str.$setitem=new Sk.builtin.str("__setitem__");Sk.builtin.str.$str=new Sk.builtin.str("__str__");Sk.builtin.str.$trunc=new Sk.builtin.str("__trunc__");Sk.builtin.str.$write=new Sk.builtin.str("write");
Sk.misceval.op2method_={Eq:Sk.builtin.str.$eq,NotEq:Sk.builtin.str.$ne,Gt:Sk.builtin.str.$gt,GtE:Sk.builtin.str.$ge,Lt:Sk.builtin.str.$lt,LtE:Sk.builtin.str.$le}}]);}).call(this || window)

//# sourceMappingURL=skulpt.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 29 */
/***/ (function(module, exports) {


/***/ })
/******/ ]);
});