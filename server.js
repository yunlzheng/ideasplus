var express = require('express');
var path = require('path');
var routes = require("./routes/index")

var app = module.exports = express();

/**
 * Configuration
 */
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.resolve('./public')));

app.get('/', routes.index);
app.get('/partial/:name', routes.partial);

/**
 * Start Server
 */
var server = app.listen(app.get("port"), function () {
    console.log('Listening on port %d', server.address().port);
});