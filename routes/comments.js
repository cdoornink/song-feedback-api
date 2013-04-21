var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;


exports.find = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving comment: ' + id);
    db.collection('comments', function(err, collection) {
        // collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
        collection.findOne({'_id':id}, function(err, item) {
          response = {"comment":item}
          res.send(response);
        });
    });
};
 
exports.findAll = function(req, res) {
    db.collection('comments', function(err, collection) {
        collection.find().toArray(function(err, items) {
          response = {"comments":items};
          res.send(response);
        });
    });
};
 
exports.add = function(req, res) {
    var comment = req.body;
    console.log('Adding comment: ' + JSON.stringify(comment));
    db.collection('comments', function(err, collection) {
        collection.insert(comment, {safe:true}, function(err, result) {
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
    var comment = req.body;
    console.log('Updating comment: ' + id);
    console.log(JSON.stringify(comment));
    db.collection('comments', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, comment, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating comment: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(comment);
            }
        });
    });
}
 
exports.delete = function(req, res) {
    var id = req.params.id;
    console.log('Deleting comment: ' + id);
    db.collection('comments', function(err, collection) {
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