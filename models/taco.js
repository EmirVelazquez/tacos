// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var taco = {
    selectAll: function (cb) {
        orm.selectAll("tacos", function (res) {
            cb(res);
        });
    },
    createOne: function (cols, vals, cb) {
        orm.createOne("tacos", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("tacos", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

// Export the database function for the controller 
module.exports = taco;