const net = require('net');
const request = require('request');


const connect = function(name) {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
}