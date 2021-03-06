/**
  Wite a TCP time server!

  Your server should listen to TCP connections on port 8000. For each
  connection you must write the current date & time in the format:

  YYYY-MM-DD HH:MM

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

  2013-07-06 07:42
 */

var net = require('net');
var moment = require('moment');

function printData() {
  return moment().format('YYYY-MM-DD HH:MM');
}

var server = net.createServer(function(socket) {
  socket.end(printData() + '\n');
});

server.listen(8000);