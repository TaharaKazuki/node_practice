var express = require('express');
var ejs = require('ejs');
var app = express();
var session = require('express-session');

app.engine('ejs',ejs.renderFile);
app.use(session({
  secret: 'hoge',
  resave: true,
  saveUninitialized: true,
}));

app.get('/',(req,res)=>{
  var cnt = req.session.cnt == undefined ? 0 : req.session.cnt;

  cnt ++;
  req.session.cnt = cnt;

  res.render('temp.ejs',{
    cnt: cnt    
  });

});

var server = app.listen(1234,()=>{
  console.log('-- sever start ---');
});

