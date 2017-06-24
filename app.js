var express = require('express');
var swig = require('swig');
var app = express();

app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html');
swig.setDefaults({cache:false});
app.get('/',function (req,res,next) {
    // res.send('<h1>欢迎光临我的博客！</h1>');
    res.render('index');
});
app.listen(8081);