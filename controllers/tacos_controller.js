// Importing express
var express = require("express");
var router = express.Router();

// Import the taco.js model to use its database functions
var taco = require("../models/taco.js");

// Create all our routes and set up logic within those routes where required.
// This route is to get all of the tacos from database
router.get("/", function (req, res) {
    taco.selectAll(function (data) {
        var hbsObject = {
            tacos: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// This route is for posting a new taco to the database
router.post("/api/tacos", function (req, res) {
    taco.createOne([
        "taco_name"
    ], [
        req.body.name
    ], function (result) {
        // Send back the ID of the new taco
        res.json({ id: result.insertId });
    });
});
// This route is to update a taco's data such as it being devoured 
router.put("/api/tacos/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    taco.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
