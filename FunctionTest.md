# Python on Drag and Drop 功能测试计划

## 版本历史

| 版本号 | 测试时间            | 版本说明/变更理由/变更内容 | 备注 |
| ------ | ------------------- | -------------------------- | ---- |
| V1.0   | 2022-8-25至2022-8-26 | 测试计划初稿               | 无   |
|        |                     |                            |      |

## 一、编写目的

本测试计划为 Python on Drag and Drop 的测试计划。编写本测试计划的目的是为整个测试阶段的管理工作和技术工作提供指南；同时确定测试的内容、范围以及测试的策略等一系列相关内容，为最终评价系统提供重要依据；此外还帮助相关测试人员安排测试活动，说明对设备器材和机构人员的资源需求；说明测试结果的评价指标。

预期参考人员包括测试人员、开发人员、项目管理者、其他质量管理人员和需要阅读本计划的高层管理人员。

## 二、项目背景

项目名称：Python on Drag and Drop

项目概述：本项目主要是面向开发者的，可以基本实现 Python3 与 Blockly 的相互转换。

## 三、测试文档

测试文档有[测试计划](https://nankai.feishu.cn/docx/doxcnzx6RfAPPzmO7Up8Z0E8uXo?from=from_copylink)、[测试报告](https://nankai.feishu.cn/docx/doxcnQ3pT2XmjLxQUs5ISdaNNis?from=from_copylink)、[缺陷报告单](https://nankai.feishu.cn/docx/doxcnn4N8xbgrkSOKjF1ew9KDKf?from=from_copylink)

## 四、测试内容

### 1.测试范围

| 序号 | 项目名称                | 测试文件（以下文件均为与 src/generator 文件夹下的两个同名都是不同功能的文件） | 功能                     | 测试方法 | 备注 |
| ---- | ----------------------- | ----------------------------------------------------------------------------- | ------------------------ | -------- | ---- |
| 1    | Python on Drag and Drop | src/blocks/addtional.js src/generator/addtional.js                            | 模块的定义以及模块转代码 | 白盒测试 |      |
| 2    |                         | src/blocks/assignment.js src/generator/assignment.js                          |                          | 白盒测试 |      |
| 3    |                         | src/blocks/classes.js src/generator/classes.js                                |                          | 白盒测试 |      |
| 4    |                         | src/blocks/dataType.js src/generator/dataType.js                              |                          | 白盒测试 |      |
| 5    |                         | src/blocks/exception.js src/generator/exception.js                            |                          | 白盒测试 |      |
| 6    |                         | src/blocks/file.js src/generator/file.js                                      |                          | 白盒测试 |      |
| 7    |                         | src/blocks/importModule.js src/generator/importModule.js                      |                          | 白盒测试 |      |
| 8    |                         | src/blocks/innerFunction.js src/generator/innerFunction.js                    |                          | 白盒测试 |      |
| 9    |                         | src/blocks/iterator.js src/generator/iterator.js                              |                          | 白盒测试 |      |
| 10   |                         | src/blocks/operators.js src/generator/operators.js                            |                          | 白盒测试 |      |
| 11   |                         | src/blocks/re.js src/generator/re.js                                          |                          | 白盒测试 |      |
| 12   |                         | PythonToBlock.js                                                              | 代码转模块               | 黑盒测试 |      |

### 2.测试目的

本测试计划的目的是：完成整个系统的测试及验证软件的基本可用性，功能的完整性，数据的准确性等。

### 3.测试人员和环境

| 角色     | 职责         | 软件测试环境    | 缺陷管理工具                                                                                                                                                                                       |
| -------- | ------------ | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 测试人员 | 进行功能测试 | 测试使用 VSCode | [缺陷报告单](https://nankai.feishu.cn/docx/doxcnQ3pT2XmjLxQUs5ISdaNNis?from=from_copylink)、在[gitlab](https://se.jisuanke.com/project1/equation/python-language-based-on-drag-and-drop)上提出 issue |

## 五、风险评估

### 1、可能存在的问题:

1.同时进行的测试任务过于多，测试人员不足以满足测试任务的分配，使得测试不全面。

2.测试时出现 TypeError 等（Blockly 的 blockToCode 函数无法测试没有输出值的 Blockly 块转成的代码）

### 2.应急措施

1.如同时进行的测试项目较多，且按照项目的重要性进行优先级排。

2.可以在测试时临时加上 Blockly 块的输出值，待测试完毕再删去。

## 七、测试标准

1.代码转模块都能够生成正确的 Blockly 代码，代码覆盖率在 80%以上

2.模块转代码部分能够成功生成对应的模块。

## 八、测试示例

``` JavaScript
import functions from '../src/function' const workspace = new functions.Workspace() const generator = functions.Python generator.init(workspace)
// 生成 type 为 function_length 的 Blockly 块
const lengthrowBlock = workspace.newBlock('function_length')
const lengthstackBlock = workspace.newBlock('text')
lengthrowBlock.disabled = false
// 将 lengthrowBlock 与 lengthstackBlock 相连
// 注意：lengthrowBlock 的输入的类型应该和 lengthstackBlock 的输出相配
lengthrowBlock .getInput('function_length_inputtext') .connection.connect(lengthstackBlock.outputConnection)
// 进行测试 'block generator 测试'为测试名 ["len('')", 99]为预期的输出
test('block generator 测试', () =\> { expect(generator.blockToCode(lengthrowBlock)).toEqual(["len('')", 99]) })
```
