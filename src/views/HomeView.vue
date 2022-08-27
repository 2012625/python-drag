<template>

  <div  id = 'home'>
    <div id="blocklyDiv" ></div>
    <div class='editor'>
     <textarea  ref="editor" id="textarea"></textarea>
    </div>
 </div>
</template>

<script>
import '../../node_modules/codemirror/lib/codemirror.css'
import codemirror from '../../node_modules/codemirror'
import 'codemirror/theme/material.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/go/go'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/http/http'
import 'codemirror/mode/php/php'
import 'codemirror/mode/python/python'
import 'codemirror/mode/sql/sql'
import 'codemirror/mode/vue/vue'
import 'codemirror/mode/xml/xml'
import { init, PythonToBlocks } from 'python-drag'
import Blockly from '../../node_modules/blockly'
import '../../node_modules/blockly/python'
import * as Ch from 'blockly/msg/en'
init(Blockly)
Blockly.setLocale(Ch)
export default {
  data () {
    return {
      editor: '',
      options: {
        mode: 'python',
        theme: 'material',
        line: true,
        lineNumbers: true,
        // 软换行
        lineWrapping: true,
        // tab宽度
        tabSize: 2,
        // 在行槽中添加行号显示器、折叠器、语法检测器
        gutters: [
          'CodeMirror-linenumbers',
          'CodeMirror-foldgutter',
          'CodeMirror-lint-markers'
        ],
        foldGutter: true, // 启用行槽中的代码折叠
        autofocus: true, // 自动聚焦
        matchBrackets: true, // 匹配结束符号，比如"]、}"
        autoCloseBrackets: true, // 自动闭合符号
        styleActiveLine: true // 显示选中行的样式
      },
      state: 0,
      xmlBlock: null,
      workspace: null,
      toolboxXml: ` 
       <xml>
    <category name="变量" colour='0'>
      <category name="静态变量" id="variable" colour='0'>
        <block type="variables_get"></block>
        <block type="variables_set"></block>
      </category>
      <category name="动态变量" id="variable-dynamic" colour='0'>
        <block type="variables_get_dynamic"></block>
        <block type="variables_set_dynamic"></block>
      </category>
    </category>
    <category name="赋值" colour='25'>
      <block type="logic_boolean"></block>
      <block type="logic_null"></block>
      <block type="text"></block>
      <block type="math_number"></block>
      <block type="set_complex"></block>
      <category name="强制类型转换" colour='25'>
        <block type="binary_type"></block>
        <block type="global"></block>
        <block type="type_specify"></block>
        <block type="get_type"></block>
      </category>
    </category>
    <category name="类" colour='50'>
      <block type="extend_class"></block>
    </category>
    <category name="流程控制" colour='75'>
      <category name="for循环" colour='75'>
        <block type="controls_repeat_ext"></block>
        <block type="controls_repeat"></block>
        <block type="controls_for"></block>
        <block type="controls_forEach"></block>
      </category>
      <category name="if语句" colour='75'>
        <block type="controls_if"></block>
        <block type="controls_ifelse"></block>
        <block type="controls_if_if"></block>
        <block type="controls_if_elseif"></block>
        <block type="controls_if_else"></block>
      </category>
      <category name="while循环" colour='75'>
        <block type="controls_whileUntil"></block>
      </category>
      <block type="controls_flow_statements"></block>
    </category>
    <category name="输入输出" colour='100'>
      <block type="input"></block>
      <block type="empty_input"></block>
      <block type="raw_input"></block>
      <block type="text_print"></block>
    </category>
    <category name="运算符" colour='125'>
      <block type="arithmetic_operator"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="in"></block>
      <block type="bitwise_operators"></block>
      <block type="identity_operators"></block>
      <block type="assign_operator"></block>
    </category>
    <category name="逻辑"  colour='150'>
      <block type="lists_setIndex"></block>
    </category>
    <category name="算数"  colour='175'>
      <block type="math_single"></block>
      <block type="math_trig"></block>
      <block type="math_constant"></block>
      <block type="math_number_property"></block>
      <block type="math_change"></block>
      <block type="math_round"></block>
      <block type="math_on_list"></block>
      <block type="math_modulo"></block>
      <block type="math_constrain"></block>
      <block type="math_random_int"></block>
      <block type="math_random_float"></block>
    </category>
    <category name="集合数据类型" colour='200'>
      <category name="列表" id="list" colour='200'>
        <block type="lists_create_empty"></block>
        <block type="lists_repeat"></block>
        <block type="lists_reverse"></block>
        <block type="lists_isEmpty"></block>
        <block type="lists_length"></block>
        <block type="lists_create_with"></block>
        <block type="lists_indexOf"></block>
        <block type="lists_getIndex"></block>
        <block type="lists_setIndex"></block>
        <block type="lists_getSublist"></block>
        <block type="lists_sort"></block>
        <block type="lists_split"></block>
      </category>
      <category name="字典"  colour='200'>
        <block type="dict_create_with"></block>
      </category>
      <category name="元组"  colour='200'>
        <block type="tuple"></block>
      </category>
      <category name="集合" colour='200'>
        <block type="create_empty_set"></block>
        <block type="create_set_one"></block>
        <block type="create_set_two"></block>
        <block type="del_set"></block>
        <block type="clear_set"></block>
        <block type="set_functions"></block>
        <block type="set_function_of_num"></block>
      </category>
    </category>
    <category name="自定义函数"  colour='225'>
      <block type="procedures_defnoreturn"></block>
      <block type="procedures_defreturn"></block>
      <block type="procedures_callnoreturn"></block>
      <block type="procedures_callreturn"></block>
      <block type="procedures_ifreturn"></block>
    </category>
    <category name="文本"  colour='250'>
      <block type="text"></block>
      <block type="text_multiline"></block>
      <block type="text_join"></block>
      <block type="text_append"></block>
      <block type="text_length"></block>
      <block type="text_isEmpty"></block>
      <block type="text_indexOf"></block>
      <block type="text_charAt"></block>
      <block type="text_getSubstring"></block>
      <block type="text_changeCase"></block>
      <block type="text_trim"></block>
      <block type="text_prompt_ext"></block>
      <block type="text_prompt"></block>
      <block type="text_count"></block>
      <block type="text_replace"></block>
      <block type="text_reverse"></block>
    </category>
    <category name="导入模块" colour='275'>
      <block type="import_modules"></block>
      <block type="import_module_as"></block>
      <block type="from_package_import_modules"></block>
      <block type="from_package_import_module_as"></block>
    </category>
    <category name="正则"  colour='300'>
      <block type="find_all"></block>
      <block type="search"></block>
      <block type="resplit"></block>
      <block type="sub"></block>
      <block type="control_sub"></block>
    </category>
    <category name="内置函数" colour='325'>
      <block type="abs"></block>
      <block type="aiter"></block>
      <block type="all"></block>
      <block type="any"></block>
      <block type="anext"></block>
      <block type="ascii"></block>
      <block type="bin"></block>
      <block type="bool"></block>
      <block type="break_point"></block>
      <block type="byte_array"></block>
      <block type="bytes"></block>
      <block type="callable"></block>
      <block type="chr"></block>
      <block type="class_method"></block>
      <block type="class_build"></block>
      <block type="class_method"></block>
      <block type="class_method_return"></block>
      <block type="compile"></block>
      <block type="complex"></block>
      <block type="delattr"></block>
      <block type="dir"></block>
      <block type="divmod"></block>
      <block type="enumerate"></block>
      <block type="filter"></block>
      <block type="eval"></block>
      <block type="exec"></block>
      <block type="format"></block>
      <block type="float"></block>
      <block type="frozenset"></block>
      <block type="getattr"></block>
      <block type="globals"></block>
      <block type="hasattr"></block>
      <block type="hash"></block>
      <block type="help"></block>
      <block type="hex"></block>
      <block type="id_function"></block>
      <block type="input"></block>
      <block type="int_class"></block>
      <block type="function_length"></block>
      <block type="function_local"></block>
      <block type="function_object"></block>
      <block type="function_isinstance"></block>
      <block type="function_issubclass"></block>
      <block type="function_next"></block>
      <block type="function_map"></block>
      <block type="function_memoryview"></block>
      <block type="function_max"></block>
      <block type="function_min"></block>
      <block type="type_value"></block>
      <block type="type_state"></block>
      <block type="notes"></block>
      <block type="index1"></block>
      <block type="index2"></block>
      <block type="round_function"></block>
      <block type="reverse"></block>
      <block type="open_file"></block>
      <block type="ord"></block>
      <block type="inner_pow"></block>
      <block type="property"></block>
      <block type="range__"></block>
      <block type="repr"></block>
      <block type="set_func"></block>
      <block type="oct"></block>
      <block type="function_sum"></block>
      <block type="xrange"></block>
      <block type="type_with_one_argument"></block>
      <block type="type_with_three_argument"></block>
      <block type="datetime_now"></block>
      <block type="datetime"></block>
      <block type="strftime"></block>              
    </category>
    <category name="文件"  colour='350'>
      <block type="open"></block>
      <block type="readfile"></block>
      <block type="control_readfile"></block>
      <block type="readline"></block>
      <block type="closefile"></block>
      <block type="writefile"></block>
      <block type="removefile"></block>
      <block type="remove_all_file"></block>
      <block type="if_exist_file"></block>
    </category>
    <category name="try except" colour='375'>
      <block type="try_sentence"></block>
      <block type="except_sentence"></block>
      <block type="except_add"></block>
      <block type="else_sentence"></block>
      <block type="finally_sentence"></block>
      <block type="raise_sentence"></block>
    </category>
    <category name="迭代器"  colour='400'>
      <block type="iter"></block>
      <block type="next"></block>
      <block type="__iter__function"></block>
      <block type="__next__function"></block>
      <block type="stopiterationmsg"></block>
    </category>
  </xml>

      `
    }
  },
  mounted () {
    this.initeditor()
    this.workspace = Blockly.inject('blocklyDiv', {
      toolbox: this.toolboxXml,
      media: './media/',
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
      },
      trashcan: true
    })
    this.editor.on('blur', this.workspaceTime)
    this.editor.on('focus', this.textareaTime)
    this.workspace.addChangeListener(this.myUpdateFunction)
    this.editor.on('change', this.myUpdateFunction_codetoblock)
  },
  methods: {
    initeditor () {
      this.editor = codemirror.fromTextArea(this.$refs.editor, this.options)
    },
    textareaTime () {
      this.state = 1
      this.workspace.removeChangeListener(this.myUpdateFunction)
    },
    workspaceTime () {
      this.state = 0
      this.workspace.addChangeListener(this.myUpdateFunction)
    },
    myUpdateFunction (event) {
      const code = Blockly.Python.workspaceToCode(this.workspace)
      // document.getElementById('textarea').value = code
      if (code !== this.editor.getValue()) {
        this.editor.setValue(code)
      }
    },
    myUpdateFunction_codetoblock (event) {
      if (this.state === 1) {
        const newword = this.editor.getValue()
        console.log('newword :' + newword)
        // 获取textarea中的字符串

        const pythonSource = newword
        // 通过textarea中的字符串生成xml字符串
        const xmlString = PythonToBlocks.prototype.convertSource(pythonSource).xml

        console.log('xmlString: ' + xmlString)
        // 通过xml字符串生成xml对象
        if (xmlString !== undefined) {
          this.xmlBlock = Blockly.Xml.textToDom(xmlString)
        } else {
          this.xmlBlock = 'WrongMatch'
        }
        if (this.xmlBlock !== 'WrongMatch') {
          // 记录此次符合格式的xml对象
          console.log('get')
          // 调用Blockly.Xml中的函数，此函数功能为：清除工作区中的blocks，根据lastRightXml重新加载blocks到工作区
          Blockly.Xml.clearWorkspaceAndLoadFromXml(this.xmlBlock, this.workspace)
        }
      }
    }
  },
  name: 'HomeView'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#home {
  height: 1080px;
  background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.ik123.com%2Fuploads%2Fallimg%2F190402%2F12-1Z402133259.jpg&refer=http%3A%2F%2Fpic.ik123.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663998621&t=ce088de1cef40eea4f3c37f00d77f32b);
}
.CodeMirror-scroll{
  height: 580px
}
.CodeMirror.cm-s-material.CodeMirror-wrap{
  height: 580px;
}
.editor{
  float: right;
  height: 580px;
  width: 40%;
  background-color: #d9d9d9;
}
#blocklyDiv{
  height: 580px;
  width: 800px;
}

#home{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
