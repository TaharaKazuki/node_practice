var express = require('express');
var app = express();

app.get('/',(req,res)=>{
  res.send('Hello Express');
});

var server = app.listen(1234,()=>{
  console.log('サーバーを起動しました');
});

