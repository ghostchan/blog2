var express = require('express');
var swig = require('swig');
var app = express();

app.use('/public',express.static(__dirname + '/public'));
app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html');
swig.setDefaults({cache:false});

app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));
app.listen(8081);