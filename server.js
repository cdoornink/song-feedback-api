var express = require('express'),
    setup = require('./routes/setup'),
    songs = require('./routes/songs'),
    users = require('./routes/users'),
    comments = require('./routes/comments'),
    reviews = require('./routes/reviews'),
    genres = require('./routes/genres'),
    projects = require('./osmp/projects'),
    osmpusers = require('./osmp/users');
 
var app = express();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

app.configure(function () {
  app.use(allowCrossDomain);
  app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
  app.use(express.bodyParser());
});


//SongFeedback APIs 
app.get('/songs', songs.findAll);
app.get('/songs/:id', songs.find);
app.get('/songs/recent/all', songs.findRecent);
app.get('/songs/user/:id', songs.findAllForUser);
app.post('/songs', songs.add);
app.put('/songs/:id', songs.update);
app.delete('/songs/:id', songs.delete);

app.get('/users', users.findAll);
app.get('/users/:id', users.find);
app.post('/auth', users.auth);
app.post('/check_availability', users.email_check);
app.post('/users', users.add);
app.put('/users/:id', users.update);
app.delete('/users/:id', users.delete);

app.get('/comments', comments.findAll);
app.get('/comments/:id', comments.find);
app.post('/comments', comments.add);
app.put('/comments/:id', comments.update);
app.delete('/comments/:id', comments.delete);

app.get('/reviews', reviews.findAll);
app.get('/reviews/:id', reviews.find);
app.post('/reviews', reviews.add);
app.put('/reviews/:id', reviews.update);
app.delete('/reviews/:id', reviews.delete);

app.get('/genres', genres.findAll);
app.get('/genres/:id', genres.find);

//Open Source Music Project APIs
app.get('/osmp/projects', projects.findAll);
app.get('/osmp/projects/:id', projects.find);
app.get('/osmp/projects/recent/all', projects.findRecent);
app.get('/osmp/projects/user/:id', projects.findAllForUser);
app.post('/osmp/projects', projects.add);
app.put('/osmp/projects/:id', projects.update);
app.delete('/osmp/projects/:id', projects.delete);

app.get('/osmp/users', osmpusers.findAll);
app.get('/osmp/users/:id', osmpusers.find);
app.post('/osmp/auth', osmpusers.auth);
app.post('/osmp/check_availability', osmpusers.email_check);
app.post('/osmp/users', osmpusers.add);
app.put('/osmp/users/:id', osmpusers.update);
app.delete('/osmp/users/:id', osmpusers.delete);

app.get('/', function(request, response) {
  response.send('Welcome to the SongFeedback/OpenSourceMusicProject APIs, heres where I might include some helpful information, or just never change this sentence...');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});