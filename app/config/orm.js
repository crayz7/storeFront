var connection = require("./connection.js");

// Callback to ensure data is returned only when query is done
var orm = {
    selectAll: function(tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            } else {
                callback(result);
            }
        })
    }


}