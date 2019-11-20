var express= require("express");
var bodyParser= require("body-parser");
var path = require("path");

var PORT = process.env.port||8080;

var app = express();

app.use(bodyParser.urlencoded({extended: true})) ;

// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/**json"}));


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});