const app = require('./api.js');
var Etcd = require('node-etcd');

var etcd = new Etcd('127.0.0.1:8080');

var port;
etcd.get('port', port)

const puerto = port || 8080;

app.listen(puerto, () => {
  console.log('Escuchando en el puerto ' + puerto);
})