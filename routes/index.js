var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");
let jwt = require("express-jwt");

let Topic = mongoose.model("Topic");
let Ingredient = mongoose.model("Ingredient");

let auth = jwt({
  secret:  "ifthisendsupingithubyoufailtheclass",
  userProperty: "payload"
});

/* GET home page. */
router.get("/webapptaak/topics/", function(req, res, next) {
  console.log("ja");
  let query = Topic.find();
  query.exec(function(err, topics) {
    if (err) return next(err);
    res.json(topics);
  });
});

router.post("/webapptaak/topics/", auth, function(req, res, next) {
  let topic = new Topic({
    name: req.body.name
  });
  topic.save(function(err, post) {
    if (err) {
      return next(err);
    }
    res.json(topic);
  });
});

router.param("topic", function(req, res, next, id) {
  let query = Topic.findById(id);
  query.exec(function(err, topic) {
    if (err) {
      return next(err);
    }
    if (!topic) {
      return next(new Error("not found " + id));
    }
    req.topic = topic;
    return next();
  });
});
/*
router.param("ingredient", function(req, res, next, id) {
  let query = Ingredient.findById(id);
  query.exec(function(err, ing) {
    if (err) {
      return next(err);
    }
    if (!ing) {
      return next(new Error("ingredient not found " + id));
    }
    req.ingredient = ing;
    return next();
  });
});

router.get("/API/recipe/:recipe", function(req, res) {
  req.recipe.populate("ingredients", function(err, rec) {
    if (err) return next(err);
    res.json(rec);
  });
});

router.delete("/API/ingredient/:ingredient", function(req, res, next) {
  req.ingredient.remove(function(err) {
    if (err) {
      return next(err);
    }
    res.json(req.ingredient);
  });
});

router.delete("/API/recipe/:recipe", function(req, res, next) {
  Ingredient.remove({ _id: { $in: req.recipe.ingredients } }, function(err) {
    if (err) return next(err);
    req.recipe.remove(function(err) {
      if (err) {
        return next(err);
      }
      res.json(req.recipe);
    });
  });
});

router.post("/API/recipe/:recipe/ingredients", function(req, res, next) {
  let ing = new Ingredient(req.body);

  ing.save(function(err, ingredient) {
    if (err) return next(err);

    req.recipe.ingredients.push(ingredient);
    req.recipe.save(function(err, rec) {
      if (err) return next(err);
      res.json(ingredient);
    });
  });
});*/

module.exports = router;
