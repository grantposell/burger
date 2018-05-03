// Import MySQL connection.
var connection = require("../config/connection.js");

//Mapping the object relationships
var orm = {
    selectAll: function (table, callback){
        var queryString = `Select * FROM ${table}`;
        connection.query(queryString, function (err,res){
            if(err){throw err;}
            callback(res);
        });
    },
    create: function (table, colname, value, callback) {
        var queryString = `INSERT INTO ${table} (${colname}) VALUES('${value}');`;
        
        connection.query(queryString, function (err, res) {
            if (err) { throw err; }

            callback(res);
        });
    },
    update: function (table, condition, updateCol, updateVal, callback) {
        var queryString = `UPDATE ${table} SET ${updateCol}='${updateVal}' WHERE ${condition};` ;
       
        connection.query(queryString, function (err, res) {
            if (err) { throw err; }

            callback(res);
        });
    }
}

module.exports = orm;