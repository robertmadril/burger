var orm = require("../config/orm.js");

var burger = {

    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
          });
    },

    insert: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
          cb(res);
        });
    },

    update: function() {
        console.log("mod update");
        orm.updateOne();
    }

}

module.exports = burger;