var express = require('express'),
    config = require('./config/config'),
    headers = require('./config/headers'),
    bodyParser = require('body-parser');


var app = express();
require('./routes')(app, {});


app.use(headers.allowMethods);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen(config.port);