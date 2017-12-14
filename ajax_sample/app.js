var express = require('express');
var ejs = require('ejs');
var app = express();

var msg = '';

app.get('/',(req,res)=>{
  res.render('temp.ejs',{});
});

app.post('/ajax',(req,res)=>{
  msg += 'hoge';
  res.json({
    msg: msg
  });
});

var server = app.listen(1234,()=>{
  console.log('--- server start ---');
});