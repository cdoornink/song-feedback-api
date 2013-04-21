var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('ds033487.mongolab.com', 33487, {auto_reconnect: true});
db = new Db('heroku_app14829754', server);

db.open(function(err, db) {
  db.authenticate('heroku_app14829754', 'mctvcf7c9bneljjuam960l2ibp', function(err, success) {
    if(!err) {
        // console.log("Supposedly connected to 'heroku_app14829754' database");
        // populateSongsDB();
        // populateUsersDB();        
        // destroySongsDB();
        // destroyGenresDB();
        // destroyUsersDB();
        // destroyCommentsDB();
        // destroyReviewsDB();
    }       
  });
});

var populateSongsDB = function() {
 
    var songs = [{
      _id: "100000000010",
      name: "I Cut Myself (Shaving)",
      artist: "Hermaphrodactyl",
      user_id: "100000000000",
      file: null,
      description: "Funny, NOT depressing.",
      genre: "Rock/Pop",
      reviews: [{
        overall: 8,
        vocals: 6,
        songwriting: 5,
        musicianship: 4,
        creativity: 6,
        production: 5,
        user_id: "100000000001",
        date: "Thu Mar 14 2013 11:06:22 GMT-0700 (PDT)"
      }, {
        overall: 9,
        vocals: 7,
        songwriting: 5,
        musicianship: 6,
        creativity: 8,
        production: 8,
        user_id: "100000000000",
        date: "Tue Mar 12 2013 11:06:22 GMT-0700 (PDT)"
      }],
      comments: [{
        message: "You Rock!",
        user_id: "100000000001",
        date: "Thu Mar 14 2013 11:06:22 GMT-0700 (PDT)"
      }, {
        message: "I wish you would have actually recorded a real song to upload, when I try to listen, all I hear is the silence that tortures me every other waking moment of my entire life. Why did you just pretend to make a song? WHY???",
        user_id: "100000000000",
        date: "Fri Mar 15 2013 11:06:22 GMT-0700 (PDT)"
      }, {
        message: "Tthis song lacks a certain amount of awesome I was hoping to hear inside of it!",
        user_id: "100000000001",
        date: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)"
      }, {
        message: "I say that for every song I listen to btw.",
        user_id: "100000000001",
        date: "Mon Mar 18 2013 11:07:13 GMT-0700 (PDT)"
      }, {
        message: "this song lacks a certain amount of awesome I was hoping to hear inside of it",
        user_id: "100000000000",
        date: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)"
      }],
      date: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)"
    }, {
      _id: "100000000011",
      name: "A New Life",
      artist: "Jim James",
      user_id: "100000000001",
      file: null,
      description: "Simple love song",
      genre: "Alt/Indie",
      reviews: [{
        overall: 4,
        vocals: 6,
        songwriting: 3,
        musicianship: 4,
        creativity: 4,
        production: 8,
        user_id: "100000000001",
        date: "Thu Mar 14 2013 11:06:22 GMT-0700 (PDT)"
      }, {
        overall: 9,
        vocals: 10,
        songwriting: 5,
        musicianship: 6,
        creativity: 5,
        production: 7,
        user_id: "100000000000",
        date: "Tue Mar 12 2013 11:06:22 GMT-0700 (PDT)"
      }],
      comments: [{
        message: "Awesome song dude!",
        user_id: "100000000001",
        date: "Thu Mar 14 2013 11:06:22 GMT-0700 (PDT)"
      }, {
        message: "I wish you would have actually recorded a real song to upload, when I try to listen, all I hear is the silence that tortures me every other waking moment of my entire life. Why did you just pretend to make a song? WHY???",
        user_id: "100000000000",
        date: "Fri Mar 15 2013 11:06:22 GMT-0700 (PDT)"
      }],
      date: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)"
    }, {
      _id: "100000000012",
      name: "Serinity Now!",
      artist: "Lloyd",
      user_id: "100000000000",
      file: null,
      description: "Serenity now, insanity later",
      genre: "Alt/Indie",
      reviews: [{
        overall: 3,
        vocals: 6,
        songwriting: 4,
        musicianship: 5,
        creativity: 6,
        production: 7,
        user_id: "100000000001",
        date: "Thu Mar 14 2013 11:06:22 GMT-0700 (PDT)"
      }, {
        overall: 1,
        vocals: 2,
        songwriting: 2,
        musicianship: 7,
        creativity: 6,
        production: 5,
        user_id: "100000000000",
        date: "Tue Mar 12 2013 11:06:22 GMT-0700 (PDT)"
      }],
      comments: [{
        message: "This one really sucks, bad!",
        user_id: "100000000001",
        date: "Thu Mar 14 2013 11:06:22 GMT-0700 (PDT)"
      }],
      date: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)"
    }, {
      _id: "100000000013",
      name: "Dondante",
      artist: "My Morning Jacket",
      user_id: "100000000001",
      file: null,
      description: "Epic bluesy song, please listen the whole thing.",
      genre: "Rock/Pop",
      reviews: [{
        overall: 5,
        vocals: 5,
        songwriting: 5,
        musicianship: 5,
        creativity: 5,
        production: 5,
        user_id: "100000000001",
        date: "Thu Mar 14 2013 11:06:22 GMT-0700 (PDT)"
      }, {
        overall: 9,
        vocals: 7,
        songwriting: 5,
        musicianship: 6,
        creativity: 8,
        production: 8,
        user_id: "100000000000",
        date: "Tue Mar 12 2013 11:06:22 GMT-0700 (PDT)"
      }],
      comments: [],
      date: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)"
    }];
 
    db.collection('songs', function(err, collection) {
        collection.insert(songs, {safe:false}, function(err, result) {});
    });
 
};

var destroyReviewsDB = function(){
  db.collection('reviews', function(err, collection) {
    collection.remove({}, {safe:true}, function(err, result) {
        console.log(result)
    });
  });
}
var destroyCommentsDB = function(){
  db.collection('comments', function(err, collection) {
    collection.remove({}, {safe:true}, function(err, result) {
        console.log(result)
    });
  });
}
var destroySongsDB = function(){
  db.collection('songs', function(err, collection) {
    collection.remove({}, {safe:true}, function(err, result) {
        console.log(result)
    });
  });
}
var destroyUsersDB = function(){
  db.collection('users', function(err, collection) {
    collection.remove({}, {safe:true}, function(err, result) {
        console.log(result)
    });
  });
}
var destroyGenresDB = function(){
  db.collection('genres', function(err, collection) {
    collection.remove({}, {safe:true}, function(err, result) {
        console.log(result)
    });
  });
}

var populateUsersDB = function() {
  console.log("populating users")
    var users = [{
      sfid: "1",
      first_name: "Chris",
      last_name: "Doornink",
      email: "chrisdoornink@gmail.com",
      password: "listen",
      songs: ["1","3"],
      member_since: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)",
      comments: ["2","3","6"],
      reviews: ["2","3","6"]
    }, {
      sfid: "2",
      first_name: "Bill",
      last_name: "Slimeface",
      email: "slimybill@gmail.com",
      password: "listen",
      songs: ["2","4"],
      member_since: "Mon Mar 18 2013 11:06:22 GMT-0700 (PDT)",
      comments: ["1","4","5"],
      reviews: ["1","4","5"]
    }];
 
    db.collection('users', function(err, collection) {
        collection.insert(users, {safe:false}, function(err, result) {});
    });
 
};

