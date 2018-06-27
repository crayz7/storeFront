var mysql = require("mysql");

if(process.env.JAWSDB_URL) {
  CONNECTION = MYSQL.createCONNECTION(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "storefront",
    port: 3306
  })
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;