var express = require('express'),
    setup = require('./routes/setup'),
    songs = require('./routes/songs'),
    users = require('./routes/users'),
    comments = require('./routes/comments'),
    reviews = require('./routes/reviews'),
    genres = require('./routes/genres');
 
var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/songs', songs.findAll);
app.get('/songs/:id', songs.find);
app.post('/songs', songs.add);
app.put('/songs/:id', songs.update);
app.delete('/songs/:id', songs.delete);

app.get('/users', users.findAll);
app.get('/users/:id', users.find);
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
 
app.listen(8080);
console.log('Listening on port 8080...');