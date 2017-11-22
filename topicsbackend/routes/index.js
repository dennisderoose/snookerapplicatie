var express = require('express');
let mongoose = require('mongoose');
let Topic = mongoose.model('Topic');
var router = express.Router();

/* GET home page. */
router.get('/API/topics/', function(req, res, next) {
  Topic.find(function(err, topics) {
    if (err) { return next(err); }
    res.json(topics);
  });
});

router.post('/API/topics/', function (req, res, next) {
  let topic = new Topic(req.body);
  topic.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
});

module.exports = router;
