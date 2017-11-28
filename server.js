/*const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});*/

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
let mongodb = require("mongodb"); 
let crypto = require('crypto');
let jwt = require('jsonwebtoken');
//var ObjectID = mongodb.ObjectID;

var TOPICS_COLLECTION = "topics";
var USERS_COLLECTION = "users";

var app = express();
app.use(express.static(__dirname + "/dist"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect('mongodb://Dennisder:denny1997@ds113136.mlab.com:13136/webapptaak', function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  //process.env.MONGODB_URI
  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

});

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get("/webapptaak/topics", function(req, res) {
  console.log(db);
  db.collection(TOPICS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get topics.");
    } else {
      res.status(200).json(docs);
    }
  });

});

app.post("/webapptaak/topics", function(req, res) {
  var newTopic = req.body;
  
    if (!req.body.name) {
      handleError(res, "Invalid user input", "Must provide a name.", 400);
    }
  
    db.collection(TOPICS_COLLECTION).insertOne(newTopic, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new contact.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });

});

app.get("/webapptaak/users", function(req, res) {

  db.collection(USERS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get topics.");
    } else {
      res.status(200).json(docs);
    }
  });

});

app.post("/webapptaak/users", function(req, res) {
  var newUser = req.body;
  newUser.salt = crypto.randomBytes(32).toString('hex');
  newUser.hash = crypto.pbkdf2Sync(newUser.password, newUser.salt, 10000, 64, 'sha512').toString('hex');
  newUser.password = newUser.hash;
  newUser.passwordConfirm = newUser.hash;
  
  
    if (!req.body.name) {
      handleError(res, "Invalid user input", "Must provide a name.", 400);
    }

    db.collection(USERS_COLLECTION).insertOne(newUser, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new contact.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });

});

app.get("/webapptaak/users/:name", function(req, res) {
  var getUser = req.body;
  db.collection(CONTACTS_COLLECTION).findOne({ name: new ObjectID(req.params.name) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get contact");
    } else {
      res.status(200).json(doc);
    }
    // passwoord controle
    //let hash = crypto.pbkdf2Sync(getUser.password, req.params.salt, 
    //  10000, 64, 'sha512').toString('hex');
    //  return this.hash === hash;
  });

});
/*
app.post("/webapptaak/users", function(req, res) {
  var newTopic = req.body;
  
    if (!req.body.name) {
      handleError(res, "Invalid user input", "Must provide a name.", 400);
    }
  
    db.collection(TOPICS_COLLECTION).insertOne(newTopic, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new contact.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });

});*/


/*  "/api/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */
/*
app.get("/api/topic/:id", function(req, res) {
});

app.put("/api/topic/:id", function(req, res) {
});

app.delete("/api/topic/:id", function(req, res) {
});*/