// Loads my express module
var express = require("express");
// Sets up the connection to burger js
var burger = require("../models/burger.js");
// Creates router for the application
var router = express.Router();
// Exporting router
module.exports = router;
