import ace from 'brace'
import 'brace/ext/language_tools'
import 'brace/theme/monokai'
import 'brace/mode/javascript'

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");