var express = require("express");
var burger = require("../models/burger.js");

var app = express();
var router = express.Router();



// Create all our routes and set up logic within those routes.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var burgers = [];
      data.forEach(element => {
          burgers.push(element);
      });
      var hbsObject = {
        burgers: burgers
    }
      res.render("index", hbsObject);
    });
  });
  router.post("/burger/create", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  router.put("/burger/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    // console.log("condition", condition);
  
    burger.update(condition, 'devoured', 1, function(result){
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  