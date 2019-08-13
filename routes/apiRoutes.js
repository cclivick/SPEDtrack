var path = require("path");
var db = require("../models/studentModel.js")
var mongoose = require("mongoose");

module.exports = function(app) {
    app.post("/submitStudent",function(req,res) {
        //insert new Student into student table
        db.Student.create(req.body)
        .then(function(dbStudent) {
            res.json(dbStudent);
        }).catch(function(err) {
            res.json(err);
        })
    })
};

