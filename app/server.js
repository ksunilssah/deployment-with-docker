const express = require('express');
app = express();

app.get('/', (req, res) => {
  res.send('Hello how are you?  helloooo');
});

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log('server listening at', port);
});

// var http = require('http');

// var server = http.createServer(function(request, response) {
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end('Hello World!');
// });

// var port = process.env.PORT || 1337;
// server.listen(port);

// console.log('Server running at http://localhost:%d', port);
