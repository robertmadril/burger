var orm = require("../config/orm.js");

var burger = {

    all: function() {
        console.log("mod all");
        orm.selectAll();
    },

    insert: function() {
        console.log("mod insert");
        orm.insertOne();
    },

    update: function() {
        console.log("mod update");
        orm.updateOne();
    }

}

module.exports = burger;