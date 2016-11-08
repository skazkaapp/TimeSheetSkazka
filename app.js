
/**
 * Module dependencies.
 */
var express  = require('express');
var connect = require('connect');
var fs = require('fs')
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var net = require('net');
var app      = express();

// var port     = process.env.PORT || 8080;
//
// // Configuration
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes

require('./routes/routes.js')(app);

// app.listen(port);
//
// console.log('The App runs on port ' + port);
//
// var sockets = [];
//
// var svr = net.createServer(function(sock) {
//     console.log('Connected: ' + sock.remoteAddress + ':' + sock.remotePort);
//     sockets.push(sock);
//
//     sock.write('Welcome to the server!\n');
//
//     sock.on('data', function(data) {
//         for (var i=0; i<sockets.length ; i++) {
//             if (sockets[i] != sock) {
//                 if (sockets[i]) {
//                     sockets[i].write(data);
//                 }
//             }
//         }
//     });
//
//     sock.on('end', function() {
//         console.log('Disconnected: ' + sock.remoteAddress + ':' + sock.remotePort);
//         var idx = sockets.indexOf(sock);
//         if (idx != -1) {
//             delete sockets[idx];
//         }
//     });
// });

var app = express();
app.set('port', process.env.PORT );
app.set('host', process.env.HOST );

app.listen(app.get('port'), app.set('host'));
console.log('Express server listening on port ' + app.get('host') + ':' + app.get('port'));

// var svraddr = '0.0.0.0';
// var svrport = 8080;
//
// svr.listen(svrport, svraddr);
// console.log('Server Created at ' + svraddr + ':' + svrport + '\n');
