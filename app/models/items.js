// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var item = {
    selectAll: function(callback) {
        orm.selectAll("items", function(res) {
        callback(res);
        })
    },

    insertOne: function(table, colName, callback) {
        orm.insertOne("items", colName, function(res) {
            callback(res);
        })
    },

    updateOne: function(table, condition, callback) {
        orm.updateOne("items", condition, function(res) {
            callback(res);
        })
    }
}

module.exports = items;