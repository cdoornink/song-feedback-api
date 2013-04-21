var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;


exports.find = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving review: ' + id);
    db.collection('reviews', function(err, collection) {
        // collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
        collection.findOne({'_id':id}, function(err, item) {
          response = {"review":item};
          res.send(response);
        });
    });
};
 
exports.findAll = function(req, res) {
    db.collection('reviews', function(err, collection) {
        collection.find().toArray(function(err, items) {
          response = {"reviews":items};
          res.send(response);
        });
    });
};
 
exports.add = function(req, res) {
    var review = req.body;
    console.log('Adding review: ' + JSON.stringify(review));
    db.collection('reviews', function(err, collection) {
        collection.insert(review, {safe:true}, function(err, result) {
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
    var review = req.body;
    console.log('Updating review: ' + id);
    console.log(JSON.stringify(review));
    db.collection('reviews', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, review, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating review: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(review);
            }
        });
    });
}
 
exports.delete = function(req, res) {
    var id = req.params.id;
    console.log('Deleting review: ' + id);
    db.collection('reviews', function(err, collection) {
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