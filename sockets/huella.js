const Fingerprint = require('fingerprintjs2');
const io = require('socket.io-client');

const socket = io('http://localhost:3007'); // Cambiar "http://localhost:3000" por la dirección del servidor correspondiente

console.log(socket.toString());

Fingerprint.get(function(result, components) {
  console.log('Entramos');
    socket.emit('fingerprint', result);
});

