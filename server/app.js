
/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , routes = require('./routes')
  , decks = require('./routes/decks')
  , path = require('path');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/../client/views');
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + '/../client/images/teeth.png'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/../client'));
app.use(express.static(path.join(__dirname, '/../client')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/cheeps', routes.getCheeps);
app.get('/cheeps/:id', routes.getCheep);
app.post('/cheeps', routes.postCheep(io));

// decks
app.get('/decks/design', decks.design);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
