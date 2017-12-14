var http = require('http');
var setting = require('./setting');
var server = http.createServer();

server.on('request',(req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write('hello world');
  res.end();
});

server.listen(setting.post);
console.log('server start');