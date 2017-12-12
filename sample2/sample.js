var http = require('http');
var fs = require('fs');

var indexPage = fs.readdirSync('./index.html','utf-8');
var nextPage = fs.readFileSync('./next.html','utf-8');

var server = http.createServer(function(req,res){
  var target = '';
  switch (req.url) {
    case '/':
    case '/index':
      target = indexPage;
      break;
    case '/next':
      target = nextPage;
      break;
    default:
      res.writeHead(404,{'Content-Type':'text/plain'});
      res.end('not found');
      return;
  }

  fs.readFile(target,'utf-8',function(err, data){
    res.write(target);
    res.end();
  });
});

server.listen(1234);
console.log('サーバーを起動しました');