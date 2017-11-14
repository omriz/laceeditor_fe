import ace from 'brace'
import 'brace/ext/language_tools'
import 'brace/theme/monokai'
import 'brace/mode/javascript'
import 'brace/mode/python'
import 'brace/keybinding/vim'
import 'material-design-lite/material.min'

/* global ace */
var editor = ace.edit("editor");

/* Binding Save and Load commands */
function saveBuffer() {
    alert('Save!');
}

function loadBuffer() {
    alert('Load!');
}

/* Binding the save and load */
editor.commands.addCommand({
     name: 'save',
     bindKey: { win: "Ctrl-S", mac: "Command-S" },                
     exec: saveBuffer
});

editor.commands.addCommand({
     name: 'load',
     bindKey: { win: "Ctrl-O", mac: "Command-O" },                
     exec: loadBuffer
});

document.getElementById('save_button').addEventListener('click', saveBuffer);

/* initalization*/
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/python");
//editor.setKeyboardHandler("ace/keyboard/vim");
editor.setAutoScrollEditorIntoView(true);
window.onload=function(){editor.resize(true)};
