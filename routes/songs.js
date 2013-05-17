var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

exports.find = function(req, res) {
  var id = req.params.id;
  console.log('Retrieving song: ' + id);
  db.collection('songs', function(err, collection) {
    collection.find({sfid: id}).toArray(function(err, item) {
      response = {"song":item};
      res.send(response);
    });
  });
};
 
exports.findAll = function(req, res) {
  console.log("retrieving all songs");
  db.collection('songs', function(err, collection) {
    collection.find().toArray(function(err, items) {
      response = {"songs":items};
      res.send(response);
    });
  });
};

exports.findRecent = function(req, res) {
  console.log("retrieving all songs by most recent");
  db.collection('songs', function(err, collection) {
    collection.find().sort( { _id: -1 } ).toArray(function(err, items) {
      response = {"songs":items};
      res.send(response);
    });
  });
};

exports.findAllForUser = function(req, res) {
  var id = req.params.id;
  console.log("retrieving all songs for user:"+id);
  db.collection('songs', function(err, collection) {
    collection.find({'user':id}).toArray(function(err, items) {
      response = {"songs":items};
      res.send(response);
    });
  });
};
 
exports.add = function(req, res) {
    var song = req.body.song;
    console.log('Adding song: ' + JSON.stringify(song));
    db.collection('songs', function(err, collection) {
        collection.insert(song, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send("OK");
            }
        });
    });
}
 
exports.update = function(req, res) {
    var id = req.params.id;
    var song = req.body;
    console.log('Updating song: ' + id);
    console.log(JSON.stringify(song));
    db.collection('songs', function(err, collection) {
        collection.update({sfid: id}, song, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating song: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(song);
            }
        });
    });
}
 
exports.delete = function(req, res) {
    var id = req.params.id;
    console.log('Deleting song: ' + id);
    db.collection('songs', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}