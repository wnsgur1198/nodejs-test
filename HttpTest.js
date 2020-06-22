var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.write("<H1>Hello World!</H1>");
  res.end('<H2>Nodejs 웹서버입니다.</H2>'); 
}).listen(8080);