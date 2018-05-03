// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (value, cb) {
        orm.create("burgers", 'burger_name', value, function (res) {
            cb(res);
        });
    },
    update: function (conditionVal, updateCol, updateVal, cb) {
        orm.update("burgers", conditionVal, updateCol,updateVal, function (res) {
            cb(res);
        });
    }
};
// Export the database functions for the controller (burgerController.js).
module.exports = burger;