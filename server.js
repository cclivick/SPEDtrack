var express = require("express")
var exphbs = require("express-handlebars");
// var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var app = express();

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);


var PORT = process.argv.PORT || 8080


app.use(logger("dev"));

app.use(express.static('public'))
//app.use(bodyParser.static('public'))

app.use(express.urlencoded({ extended:true }))
app.use(express.json());

// app.use(bodyParser.urlencoded({ limit:false }))
// app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mongoose.connect("mongodb://localhost/SPEDtrack", { useNewUrlParser: true });


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });

module.exports = app;

