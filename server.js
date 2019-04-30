var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});

/* TODO

Add orm functions to handle selectAll, insert, update queries with no data
Add model information to require specific burger info
Set up controller to input appropriate data from client request
Set-up HTML main and view pages on handlebars

*/