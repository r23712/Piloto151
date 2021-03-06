
/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  http = require('http'),
  path = require('path');

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'aloha' }));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.csrf());
  app.use(express.static(path.join(__dirname, 'public')));
});

function csrf(req, res, next) {
  res.locals.tokens = req.session._csrf;
  next();
}

app.configure('development', function () {
  app.use(express.errorHandler());
});


app.get('/', csrf, routes.index);
app.post('/save', csrf, routes.save);

http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});
