var path = require('path');
// var friends = require (" ../data/friends");

//Two HTML Routes
module.exports = function(app){
//Get route to display the survey page
 app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

 //USE route to display the home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,  '/../public/home.html'));
  });

  // app.get("/api/friends", function(req, res) {
  //   res.sendFile(path.join(friends.friends));
  // });

}; 