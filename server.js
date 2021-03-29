// Loads my express module
const express = require("express");
// Sets the port for the application
const PORT = process.env.PORT || 3000;
// Creates my express application.
const app = express();
// Set Handlebars
var expressHandleBars = require("express-handlebars");
// Import routes to the server.
const routes = require("./controllers/burgers_controllers.js");
// App will serve static content from the "public" folder
app.use(express.static("public"));

app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// App will serve the routes
app.use(routes);
