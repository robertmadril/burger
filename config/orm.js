var connection = require("../config/connection.js");

var orm = {
    selectAll: function() {

        console.log("select all");

    },

    insertOne: function() {
        
        console.log("insert one");

    },

    updateOne: function() {

        console.log("update one");

    }
};

module.exports = orm;