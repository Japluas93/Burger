// Loads my express module
const express = require("express");
// Creates my express application
const app = express();
// Set Handlebars.
var expressHandleBars = require("express-handlebars");
// App will serve static content from the "public" folder.
app.use(express.static("public"));

app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
