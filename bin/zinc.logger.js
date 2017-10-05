const chalk = require('chalk'), term = require('terminal-kit').terminal;
// System Logging Variables
var sv = { tag: chalk.bold.rgb(10, 100, 200)('=> '), er: '[' + chalk.red('×') + '] ', chk: '[' + chalk.green('✓') + '] ' }

// Zinc Loggin Controller
function zlog(msg, error) { normalizeMssg(msg, error) }

function normalizeMssg(msg, error) {
    if (error) { var output = chalk.red('ERROR: ') + error }
    else { var output = msg }

    log(output)
}
function log(output) { term(sv.tag + output + '\n') }

module.exports.log = function (msg, error) { zlog(msg, error) }
