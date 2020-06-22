var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + "년 " + q.month + "월 " + q.day + "일";
  res.write("<H1>" + txt + "</H1>");
  res.end();
}).listen(8080);