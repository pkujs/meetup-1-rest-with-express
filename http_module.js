const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('Hello, Pekanbaru\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://localhost:1337');
