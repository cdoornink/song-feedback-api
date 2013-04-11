exports.find = function(req, res) {
  var id = req.params.id;
  console.log('Retrieving songs from user: ' + id);
  db.collection('songs', function(err, collection) {
    if(err){console.log('ERROR 1.0.0 :: '+err)}else{console.log("retrieved songs collection")}
    console.log(collection);
    collection.findOne({'user': id}, function(err, item) {
      if(err){console.log('ERROR 1.0.1 :: '+err)}else{console.log("found song item: "+item)}
        res.send(item);
    });
  });
};
 
exports.findAll = function(req, res) {
  console.log("retrieving all songs");
  db.collection('songs', function(err, collection) {
    if(err){console.log('ERROR 1.1.0 :: '+err)}else{console.log("retrieved songs collection")}
    collection.find().toArray(function(err, items) {
      if(err){console.log('ERROR 1.1.1 :: '+err)}else{console.log("found all song items")}
      res.send(items);
    });
  });
};
 
exports.add = function(req, res) {
    var song = req.body;
    console.log('Adding song: ' + JSON.stringify(song));
    db.collection('songs', function(err, collection) {
        collection.insert(song, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
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
        collection.update({'_id':new BSON.ObjectID(id)}, song, {safe:true}, function(err, result) {
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