var db = require("../models/studentModel.js")
var mongoose = require("mongoose");

module.exports = function(app) {
    app.post(function(req,res) {
        db.Student.create(req.body)
        .then(function(dbStudent) {
            res.json(dbStudent);
        }).catch(function(err) {
            res.json(err);
        })
    })
}

