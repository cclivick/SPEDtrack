var path = require("path");

module.exports = function(app) {
    app.get("/", function(req,res) {
        res.render("index")
    });
    
    app.get("/teacher-login", function(req,res) {
        res.render("teacher-login")
    });

    app.get("/parent-login", function(req,res) {
        res.render("parent-login")
    });

    app.get("/SPED-login", function(req,res) {
        res.render("SPED-login");
    })

    app.get("/SPED-dashboard", function(req,res) {
        res.render("SPED-dashboard")
    });

    app.get("/new-student", function(req,res) {
        res.render("newStudent");
    })
};