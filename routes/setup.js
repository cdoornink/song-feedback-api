var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('ds033487.mongolab.com', 33487, {auto_reconnect: true});
db = new Db('heroku_app14829754', server);

db.open(function(err, db) {
  db.authenticate('heroku_app14829754', 'mctvcf7c9bneljjuam960l2ibp', function(err, success) {
    if(!err) {
        // console.log("Supposedly connected to 'testdb' database");
        // populateSongsDB();
        // populateGenresDB();
        // populateUsersDB();
        // populateCommentsDB();
        // populateReviewsDB();
    }       
  });
});

var populateGenresDB = function() {
  console.log("populating genres db");
    var genres = [{
      name: 'Rock/Pop'
    }, {
      name: 'Rap/Hip-Hop'
    }, {
      name: 'Country'
    }, {
      name: 'Alt/Indie'
    }];
 
    db.collection('genres', function(err, collection) {
      collection.insert(genres, {safe:false}, function(err, result) {});
    });
 
};

var populateSongsDB = function() {
 
    var songs = [{
      name: "I Cut Myself (Shaving)",
      artist: "Hermaphrodactyl",
      user: 1,
      file: null,
      description: "Funny, NOT depressing.",
      genre: 1,
      reviews: [1,2],
      comments: [1,2,3,4],
      date: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)"
    }, {
      name: "A New Life",
      artist: "Jim James",
      user: 2,
      file: null,
      description: "Simple love song",
      genre: 4,
      reviews: [3,4],
      comments: [5],
      date: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)"
    }, {
      name: "Serinity Now!",
      artist: "Lloyd",
      user: 1,
      file: null,
      description: "Serenity now, insanity later",
      genre: 4,
      reviews: [5],
      comments: [],
      date: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)"
    }, {
      name: "Dondante",
      artist: "My Morning Jacket",
      user: 2,
      file: null,
      description: "Epic bluesy song, please listen the whole thing.",
      genre: 1,
      reviews: [6],
      comments: [],
      date: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)"
    }];
 
    db.collection('songs', function(err, collection) {
        collection.insert(songs, {safe:false}, function(err, result) {});
    });
 
};

var populateCommentsDB = function() {
 
    var comments = [{
      song: 1,
      message: "You Rock!",
      user: 2,
      date: "Thu Mar 14 2013 11:06:22 GMT-0700 (PDT)"
    }, {
      song: 1,
      message: "I wish you would have actually recorded a real song to upload, when I try to listen, all I hear is the silence that tortures me every other waking moment of my entire life. Why did you just pretend to make a song? WHY???",
      user: 1,
      date: "Fri Mar 15 2013 11:06:22 GMT-0700 (PDT)"
    }, {
      song: 1,
      message: "Tthis song lacks a certain amount of awesome I was hoping to hear inside of it!",
      user: 2,
      date: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)"
    }, {
      song: 1,
      message: "I say that for every song I listen to btw.",
      user: 2,
      date: "Mon Mar 18 2013 11:07:13 GMT-0700 (PDT)"
    }, {
      song: 3,
      message: "this song lacks a certain amount of awesome I was hoping to hear inside of it",
      user: 1,
      date: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)"
    }];
 
    db.collection('comments', function(err, collection) {
        collection.insert(comments, {safe:false}, function(err, result) {});
    });
 
};

var populateReviewsDB = function() {
 
    var reviews = [{
      song: 1,
      overall: 8,
      vocals: 6,
      songwriting: 5,
      musicianship: 4,
      creativity: 6,
      production: 5,
        user: 2,
        date: "Thu Mar 14 2013 11:06:22 GMT-0700 (PDT)"
    }, {
      song: 1,
      overall: 9,
      vocals: 7,
      songwriting: 5,
      musicianship: 6,
      creativity: 8,
      production: 8,
      user: 1,
      date: "Tue Mar 12 2013 11:06:22 GMT-0700 (PDT)"
    }, {
      song: 2,
      overall: 10,
      vocals: 6,
      songwriting: 6,
      musicianship: 6,
      creativity: 9,
      production: 9,
      user: 1,
      date: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)"
    }, {
      song: 2,
      overall: 7,
      vocals: 5,
      songwriting: 7,
      musicianship: 8,
      creativity: 7,
      production: 7,
      user: 2,
      date: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)"
    }, {
      song: 3,
      overall: 4,
      vocals: 6,
      songwriting: 6,
      musicianship: 6,
      creativity: 6,
      production: 6,
      user: 2,
      date: "Tue Mar 19 2013 11:06:22 GMT-0700 (PDT)"
    }, {
      song: 4,
      overall: 10,
      vocals: 10,
      songwriting: 7,
      musicianship: 6,
      creativity: 5,
      production: 7,
      user: 1,
      date: "Wed Mar 20 2013 11:06:22 GMT-0700 (PDT)"
    }];
 
    db.collection('reviews', function(err, collection) {
        collection.insert(reviews, {safe:false}, function(err, result) {});
    });
 
};

var populateUsersDB = function() {
 
    var users = [{
      firstName: "Chris",
      lastName: "Doornink",
      email: "chrisdoornink@gmail.com",
      password: "listen",
      songs: [1,3],
      memberSince: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)",
      comments: [2,3,6],
      reviews: [2,3,6]
    }, {
      firstName: "Bill",
      lastName: "Slimeface",
      email: "slimybill@gmail.com",
      password: "listen",
      songs: [2,4],
      memberSince: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)",
      comments: [1,4,5],
      reviews: [1,4,5]
    }];
 
    db.collection('users', function(err, collection) {
        collection.insert(users, {safe:false}, function(err, result) {});
    });
 
};

