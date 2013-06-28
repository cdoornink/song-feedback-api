var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

exports.find = function(req, res) {
  var id = req.params.id;
  console.log('Retrieving project: ' + id);
  db.collection('projects', function(err, collection) {
    collection.find({osmpid: id}).toArray(function(err, item) {
      response = {"project":item};
      res.send(response);
    });
  });
};
 
exports.findAll = function(req, res) {
  console.log("retrieving all projects");
  db.collection('projects', function(err, collection) {
    collection.find().toArray(function(err, items) {
      response = {"projects":items};
      res.send(response);
    });
  });
};

exports.findRecent = function(req, res) {
  console.log("retrieving all projects by most recent");
  db.collection('projects', function(err, collection) {
    collection.find().sort( { _id: -1 } ).toArray(function(err, items) {
      response = {"projects":items};
      res.send(response);
    });
  });
};

exports.findAllForUser = function(req, res) {
  var id = req.params.id;
  console.log("retrieving all projects for user:"+id);
  db.collection('projects', function(err, collection) {
    collection.find({'creator.id':id}).toArray(function(err, items) {
      response = {"projects":items};
      res.send(response);
    });
  });
};

exports.findAllListed = function(req, res) {
  var ids = req.body.ids;
  console.log("retrieving an array of projects");
  console.log(ids)
  db.collection('projects', function(err, collection) {
    collection.find({'osmpid':{$in:ids}}).toArray(function(err, items) {
      response = {"projects":items};
      res.send(response);
    });
  });
};
 
exports.add = function(req, res) {
    var project = req.body.project;
    console.log('Adding project: ' + JSON.stringify(project));
    db.collection('projects', function(err, collection) {
        collection.insert(project, {safe:true}, function(err, result) {
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
    var project = req.body;
    console.log('Updating project: ' + id);
    console.log(JSON.stringify(project));
    db.collection('projects', function(err, collection) {
        collection.update({osmpid: id}, project, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating project: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(project);
            }
        });
    });
}
 
exports.delete = function(req, res) {
    var id = req.params.id;
    console.log('Deleting project: ' + id);
    db.collection('projects', function(err, collection) {
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