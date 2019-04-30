var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {

        console.log(data);

    });
});

router.post("/api/burger/", function (req, res) {
    burger.insert(function (data) {

        console.log(data);

    });
});

router.put("/api/burger/:id", function (req, res) {
    var burgboyID = req.params.id;

    burger.update(function (data) {

        console.log(data);

    });
});


module.exports = router;