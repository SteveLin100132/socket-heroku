var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 8080, path: '/ws' });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
