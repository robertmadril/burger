var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);

    });
});

router.post("/api/burger/", function (req, res) {
    burger.insert(function (data) {
    [
        "burger_name", "devoured"
    ], [
            req.body.burger_name, req.body.devoured
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        };
    });

});


router.put("/api/burger/:id", function (req, res) {
    var burgboyID = req.params.id;

    burger.update(function (data) {

        console.log(data);

    });
});


module.exports = router;