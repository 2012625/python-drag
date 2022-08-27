# Python on Drag and Drop 使用说明书

## 一、引言

- 编写目的

本使用说明书为 Python on Drag and Drop 的使用说明。本项目主要是面向开发者的，可以基本实现 Python3 与 Blockly 的相互转换，编辑区支持 CodemMrror。

- 项目背景

项目开发者为计蒜客与四元二次方程组成员

## 二、软件概述

- 目标

此项目面向在开源平台寻找⻘少年编程学习平台的开发者，以解决打字能⼒不⾜的学⽣⼊⻔ Python 的问题以及⾮计算机专业⼈⼠使⽤ Python ⼊⻔难度⼤的问题。

- 功能

此项目可基于拖拽实现 Python 语言及其应用，是一个可以实现 Python 语言与 Blockly 模块互相转换的库，最高支持到 Python 3.10 语法。所有的代码都是免费和开源的。

## 三、运行环境

- 必要支持软件

VSCode；浏览器

## 四、使用说明

1.  安装和初始化

以 npm 安装为例：

```bash

npm install python-drag

```

1.  项目使用

您可以在 Vue 文件中引用我们的包,然后使用我们事先准备的块或在工作区输入正确的 Python 代码

```Vue
<script>
import { init, PythonToBlocks } from 'python-drag'
import Blockly from 'blockly'
import 'blockly/python'
import * as Ch from 'blockly/msg/en'
init(Blockly)
Blockly.setlocale(Ch)
</script>
```

具体操作可以在[demo](https://se.jisuanke.com/project1/equation/pythondrag-demo)中进行实践

1.  新块编写

若果您希望生成更多的块方便在您的项目中使用，可以参考如下实例：

模块转代码部分：

```JavaScript
// 调用blockly生成块函数
Blockly.defineBlocksWithJsonArray([
  {  type: 'function_length_temporary',
  // 参数数量
  message0: 'len %1',
  args0: [  {  type: 'input_value',
  name: 'VALUE',
  // 检查类型
  check: [  'String',  'Array',  'List',  'Dictionary',  'Set',  'Tuple',  'Bytes',  'Range'  ]  }  ],
  // 输出类型
  output: ['Number', 'Boolean'],  colour: 230,  tooltip: '',  helpUrl: ''  }
])
```

```javascript
// 调用blockly内置的块转成python的函数
Blockly.Python.function_length_temporary = function (block) {
  const valueInput = Blockly.Python.valueToCode(  block,  'VALUE',  Blockly.Python.ORDER_ATOMIC  )
  // 编写输出格式
  const code = 'len(' + valueInput + ')'  return [code, Blockly.Python.ORDER_NONE]  }
```

更多代码转模块部分可以参考[blockly 官方文档](https://blockly.tortorse.com/)。

代码转模块部分：

```JavaScript
// 以函数为例，调用call函数
Call ({ func, args, lineno }) {
  if (func._astname === 'Name') {
    const functionName = identifier(func.id)
    if (functionName === 'input') {
      const promptBlock = args ? this.convert(args[0]) : null
      return inputBlock(promptBlock, lineno)
    }
    // 根据函数内参数不同分成不同板块
    if (args === null) {
      // 无参数
      switch (functionName) {
        case 'locals':
        return buildlocals(lineno)
        // ·····
      }
    }  else if (args.length === 1) {
      // 一个参数
      switch (functionName) {
        case 'type':
        return TypeWithOne(this.convert(args[0]), lineno)
        // ······
        }
      } else if (args.length === 2) {
        // 两个参数
        switch (functionName) {
          case 'sum':
            return functionSum(  this.convert(args[0]),  this.convert(args[1]),  lineno  )
        }
        // ......
      }
    }
  }
```

```JavaScript
  // 以上图中local函数为例
  const buildlocals = function (lineno) {
    // function_local为对应local函数块定义的type
    return blockBuilder('function_local', lineno)
  }
```

1.  demo 实例

输入正确的 python 代码后：

![](example/demo_show_true.png)

输入错误的 Python 代码后：

![](example/demo_show_false.png)
