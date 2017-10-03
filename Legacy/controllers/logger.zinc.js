/**
 * Zinc Error Handler and Logger 
 * Find what the Morgan Package does and how to manipulate 
 * it to work for Zinc wit Zinc Tag (=>) at least
 */
const term = require('terminal-kit').terminal, chalk = require('chalk')

var tag = chalk.blue('=> '),
  nxt = '\n', note = "Hello World"

function motd() {
  note = message
  var message = term(
  "+-----------------------------------+" + nxt +
  "|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|" + nxt +
  "|  ZINC-CSM                 v0.0.0  |" + nxt +
  "|                                   |" + nxt +
  "| https://github.com/dbarroso1/Zinc |" + nxt +
  "|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|" + nxt +
  "+-----------------------------------+" + nxt)
}

function zincLogger(note) {
  var err = note
  var output = term(tag + note + nxt)
  return output
}
// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== 'listen') { throw error; }
  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

module.exports = { onError, zincLogger, motd }