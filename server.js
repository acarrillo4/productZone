var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var htmlRouter = require("./routes/htmlRoutes");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(htmlRouter);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});