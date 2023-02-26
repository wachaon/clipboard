const { existsFileSync } = require('filesystem')
const { resolve } = require('pathname')
const { execCommand } = require('utility')
const argv = require('argv')
const isCLI = require('isCLI')
const { execScript, compile } = require('csharpscript')

// mouse
const clipboard_cs = resolve(__dirname, 'src/clipboard.cs')
const clipboard_exe = resolve(__dirname, 'clipboard.exe')
const exists_clipboard_exe = existsFileSync(clipboard_exe)

function setData(text = '') {
    if (!exists_clipboard_exe) compile(clipboard_cs, { out: clipboard_exe })
    execCommand(`${clipboard_exe} setData Text "${text}"`)
}

function getData() {
    if (!exists_clipboard_exe) compile(clipboard_cs, { out: clipboard_exe })
    return execCommand(`${clipboard_exe} getData Text"`)
}

if (isCLI(__filename)) {
    if (argv.get('c') || argv.get('compile') || argv.unnamed[1] === 'compile') compile(clipboard_cs, { out: clipboard_exe })
} else module.exports = {
    setData,
    getData
}