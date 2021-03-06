var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

exports.find = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving user: ' + id);
    db.collection('osmpusers', function(err, collection) {
        collection.findOne({'osmpid':id}, function(err, item) {
          response = {"user":item}
          res.send(response);
        });
    });
};

exports.auth = function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    console.log('Retrieving user: ' + email);
    db.collection('osmpusers', function(err, collection) {
        collection.findOne({'email':email, 'password':password}, function(err, item) {
          response = {"user":item}
          res.send(response);
        });
    });
};

exports.email_check = function(req, res) {
    var email = req.body.email;
    console.log('Checking for current user: ' + email);
    db.collection('osmpusers', function(err, collection) {
        collection.findOne({'email':email}, function(err, item) {
          state = item ? false : true
          response = {"available":state}
          res.send(response);
        });
    });
};
 
exports.findAll = function(req, res) {
    db.collection('osmpusers', function(err, collection) {
        collection.find().toArray(function(err, items) {
          response = {"users":items};
          res.send(response);
        });
    });
};
 
exports.add = function(req, res) {
    var user = req.body;
    console.log('Adding user: ' + JSON.stringify(user));
    db.collection('osmpusers', function(err, collection) {
        collection.insert(user, {safe:true}, function(err, result) {
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
    var user = req.body;
    console.log('Updating user: ' + id);
    console.log(JSON.stringify(user));
    db.collection('osmpusers', function(err, collection) {
        collection.update({'osmpid':id}, user, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating user: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(user);
            }
        });
    });
}
 
exports.delete = function(req, res) {
    var id = req.params.id;
    console.log('Deleting user: ' + id);
    db.collection('osmpusers', function(err, collection) {
        collection.remove({'osmpid':id}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}