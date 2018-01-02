
var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");
let jwt = require("express-jwt");

let Break = mongoose.model("Break");
let Opmerking = mongoose.model("Opmerking");

let auth = jwt({
  secret:  "ifthisendsupingithubyoufailtheclass",
  userProperty: "payload"
});

/* GET home page. */
router.get("/snookerapplicatie/breaks/", function(req, res, next) {
  let query = Break.find();
  query.exec(function(err, breaks) {
    if (err) return next(err);
    res.json(breaks);
  });
});

router.post("/snookerapplicatie/breaks/", auth, function(req, res, next) {
  console.log("h");
  res.json(req.body);
  let brek = new Break({
    aantalpunten: parseInt(req.body.aantalpunten),
    date: "02/01/2018",
    user: req.body.user
  });
  brek.save(function(err, post) {
    if (err) {
      return next(err);
    }
    res.json(brek);
  });
});

router.put("/snookerapplicatie/breaks/:id", auth, function(req, res) {
  console.log("k");
/*
  let opm = new Opmerking(req.body);
  console.log(opm);
  opm.save(function(err, opmerking) {
    if (err) return next(err);

    req.Topic.opmerkingen.push(opmerking);
    req.Topic.save(function(err, rec) {
      if (err) return next(err);
      res.json(opmerking);
    })
  });*/

Break.findById(req.params.id, function(err, Break) {
  if(err) {
    res.send(err);
  }
  //Topic.opmerkingen = req.body.opmerkingen;

  Break.save(function(err) {
    if (err)
        res.send(err);

    res.json({ message: 'Break updated!' });
  });
});

/*
  Topic.findOneAndUpdate({
      _id: req.params.id
  },{$set: {
    opmerkingen: req.body.opmerkingen
  }}, {upsert: true}, function(err, Topic) {
    if(err) {
      console.log(Topic);
      res.status(500).send(err)
    } else {
      console.log(Topic);
      console.log("gelukt");
      res.status(204).send()
    }
  });
  /*let topic = new Topic({
    name: req.body.name,
    vraag: req.body.vraag,
    opmerkingen: req.body.opmerkingen
  });
  topic.save(function(err, post) {
    if (err) {
      return next(err);
    }
    res.json(topic);
  });*/
});


router.param("break", function(req, res, next, id) {
  let query = Break.findById(id);
  query.exec(function(err, brek) {
    if (err) {
      return next(err);
    }
    if (!brek) {
      return next(new Error("not found " + id));
    }
    req.brek = brek;
    return next();
  });
});



router.get("/snookerapplicatie/breaks/:break", function(req, res) {
  req.break.populate("opmerkingen", function(err, rec) {
    if (err) return next(err);
    res.json(rec);
  });
});
/*
router.post("/snookerapplicatie/topic/:topic/opmerkingen", function(req, res, next) {
  let opm = new Opmerking(req.body);
  console.log(opm);
  opm.save(function(err, opmerking) {
    if (err) return next(err);

    req.topic.opmerkingen.push(opmerking);
    req.topic.save(function(err, rec) {
      if (err) return next(err);
      res.json(opmerking);
    });
  });
});*/

module.exports = router;
