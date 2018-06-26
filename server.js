var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

var routes = require('./controllers/storeFront_controller.js')
app.use('/', routes);

app.listen(PORT, function() {
    console.log("Listening on port " + PORT)
})