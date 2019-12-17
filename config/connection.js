// Requiring connection to mysql & dotenv
require("dotenv").config();
var keys = require("../keys.js");
var mysql = require("mysql");

// Creating the connection here, password has to be changed or use a dotenv
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: keys.server.password, // Must create a .env file with password to MySQL
        database: "tacos_db"
    });
};

// Making the connection here
connection.connect(function (err) {
    if (err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;