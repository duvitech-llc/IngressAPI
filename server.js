'use strict';

var port = process.env.PORT || 8000; // first change

var Http = require('http');
var Express = require('express');
var BodyParser = require('body-parser');
var Swaggerize = require('swaggerize-express');
var swaggerUi = require('swaggerize-ui'); // second change
var Path = require('path');

var App = Express();

var Server = Http.createServer(App);

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({
    extended: true
}));

App.use(Swaggerize({
    api: Path.resolve('./config/api.json'), // third change
    handlers: Path.resolve('./handlers'),
    docspath: '/swagger' // fourth change
}));

// change four
App.use('/docs', swaggerUi({
    docs: '/swagger'  
}));

Server.listen(port, function () { // fifth and final change
});

console.log("listening on port " + port)