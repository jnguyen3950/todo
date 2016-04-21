var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost/test';

app.use(express.static('./public'));

app.get('/user', function(req, res) {
  var user = {name: 'Justin'};
  res.json(user);
});

app.get('/todo/:user', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if(!err) {
      var tasks = db.collection('tasks');
      tasks.find({user: req.params.user}).toArray(function(error, docs) {
        res.send(docs);
        db.close();
      });
    }
    else {
      res.sendStatus(err);
      db.close();
    }
  });
});

app.post('/todo/:user/:newExercise', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if(!err) {
      insertDocument(db, req.params.user, req.params.newExercise, function(results) {
      });
      res.send();
      db.close();
    }
    else {
      res.sendStatus(err);
      db.close();
    }
  });
});

app.delete('/todo/:user/:exercise', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if(!err) {
      deleteItem(db, req.params.user, req.params.exercise, function(results) {
      });
      res.send();
      db.close();
    }
    else {
      res.sendStatus(err);
      db.close();
    }
  });
});

var insertDocument = function(db, user, exercise, callback) {
  var date = new Date();
  date.setDate(date.getDate() + 3);
  var tasks = db.collection('tasks');
  tasks.insert({user: user, exercise: exercise, date: date}), function(err, result) {
    callback(result);
  }
}

var deleteItem = function(db, user, exercise, callback) {
  var tasks = db.collection('tasks');
  tasks.removeOne({user: user, exercise: exercise}, function(err, result) {
    callback(result);
  });
}

if(!require.main.loaded) {
  var server = app.listen(8080);
}

module.exports = app;
