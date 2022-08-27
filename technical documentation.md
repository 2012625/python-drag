**Python on Drag and Drop 技术文档**

# 第一章 引言

## 1.1 目的

开发出基于拖拽的 Python 语言（包含 Python3.6 后的版本）及其应用并且可以实现 python 语言与 Blockly 互相转换的库。

## 1.2 文档约定

标准排版

## 1.3 预期读者和阅读建议

预期读者为在使用 Python on Drag and Drop 项目前想要完全了解其功能技术的客户，或是想在此项目基础上进行深度开发的开发者。

## 1.4 产品的范围

可以在被使用后直接根据所编写的代码生成对应的基于 Python 语言的模块代码相互转换的页面，也可以作为源码的一部分供开发者借鉴或是基于此项目进行进一步的深度二次开发。

## 1.5 参考文献

[Blockly 中文文档](https://blockly.tortorse.com/)

# 第二章 综合描叙

## 2.1 产品的前景

可以为想要深度开发图形化 python 编程的开发者提供极大的代码简化空间，并且可以根据他们的反馈进行模块的进一步调整和改善，最终趋于完美。

## 2.2 产品的功能

在成功引入本项目的包之后，即可按照使用说明文档进行代码的编写来搭建对应的图形化编程页面。在进入页面后，当进行左侧模块的拖拽时，右方文本框便会生成其所对应的代码；相应的，当在右侧文本框中进行合法的代码编写时，左侧也会进行识别生成相应的模块。

## 2.3 用户类和特征

此项目主要面对开发者，帮助其减少代码和前端开发方面的工作量。

## 2.4 运行环境

Visual Studio Code

## 2.5 设计和实现上的限制

模块设计数量有限，若想实现其他功能需进行自定义块的操作

# 第三章 系统特性

## 3.1 说明和优先级

关于代码转模块和模块转代码的优先级说明：

取决于你的鼠标点击在哪个位置。当你鼠标点击模块时，本项目会进行模块转代码功能；相反， 当你点击文本区域时，会进行代码转模块功能。

## 3.2 激励响应

同上一条所说， 鼠标的点击便是激励信号。除了点击模块和文本区域外，还可以点击位于最左侧的选择框进行模块类别的筛选。

## 3.3 功能需求

1.能够正确的识别模块种类，自行判断插入模块类型是否符合规定，不合法的插入无法进行

2.对写入的代码文本进行正确的识别，判断出所需建立的具体模块并按照代码将其组合到一起

以上需求均可得到实现。

# 第四章 项目部署

## 4.1 使用前部署

在开始正式使用我们的项目之前，使用者首先需要进行以下的操作：

1.进行 Python on Drag and Drop 项目和 blockly 的安装

```php
npm install python-drag
npm install blockly
```

2.在 vue 框架中从我们的 python-drag 的包和 blockly 包中引入所需的方法

```javascript
import { init, PythonToBlocks } from 'python-drag'
import Blockly from 'blockly'
```

3.对 Blockly 进行初始化

```javascript
init(Blockly)
```

4.引入相应的语言

```javascript
import 'blockly/python'
import \* as Ch from 'blockly/msg/en'
Blockly.setlocale(Ch)
```

# 第五章 其他需求

## 5.1 用户文档

包括[功能测试文档](https://nankai.feishu.cn/docx/doxcnzx6RfAPPzmO7Up8Z0E8uXo?from=from_copylink)，
[使用说明书](https://nankai.feishu.cn/docx/doxcnBa7HOMoxhkWaP6DVpvhi0d?from=from_copylink)和
[技术文档](https://nankai.feishu.cn/docx/doxcnTVm162kviVYP0W4GXixLqd?from=from_copylink)，均可直接进行查看。
