var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");
let jwt = require("express-jwt");
let Break = mongoose.model("Break");

let auth = jwt({
  secret: "ifthisendsupingithubyoufailtheclass",
  userProperty: "payload"
});
/* GET home page. */

router.get("/snookerapplicatie/breaks/", auth, function (req, res, next) {
  let query = Break.find(user="dennis");
  query.exec(function (err, breaks) {
    if (err) {
      res.json(breaks);
      return next(err);
    }
    res.json(breaks);
  });
});



router.post("/snookerapplicatie/breaks/", auth, function (req, res, next) {
  console.log("h");
  let brek = new Break({
    aantalpunten: parseInt(req.body.aantalpunten),
    datum: req.body.datum,    
    user: req.body.user,
    typeGemaakt: req.body.typeGemaakt,
    tegenstander: req.body.tegenstander
  });

  brek.save(function (err, post) {
    if (err) {
      res.json(brek);
      return next(err);
    }
    res.json(brek);
  });
});



router.put("/snookerapplicatie/breaks/:id", auth, function (req, res) {
  console.log("k");
  Break.findById(req.params.id, function (err, Break) {
    if (err) {
      res.send(err);
    }
    Break.save(function (err) {
      if (err)
        res.send(err);
      res.json({ message: 'Break updated!' });
    });
  });
});





router.param("break", function (req, res, next, id) {
  let query = Break.findById(id);
  query.exec(function (err, brek) {
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







router.get("/snookerapplicatie/breaks/:break", function (req, res) {
  req.break.populate("opmerkingen", function (err, rec) {
    if (err) return next(err);
    res.json(rec);
  });
});

module.exports = router;