var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
    
exports.find = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving genre: ' + id);
    db.collection('genres', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};
 
exports.findAll = function(req, res) {
    db.collection('genres', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};