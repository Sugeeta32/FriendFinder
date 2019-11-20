var friendData = require("../data/friends.js");
//routing

//tow routes with express parameters

module.exports = function (app) {

    //GET route to display all friends
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    //POST to handle survey data
    app.post("/api/friends", function (req, res) {

        //body-parser middleware helps in getting req.body
        var newEntryScores = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;
    
        //runs through all current friends 
        for(var i=0; i<friendData.length; i++){
          var scoresDiff = 0;
          //run through scores to compare friends
          for(var j=0; j<newEntryScores.length; j++){
            scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newEntryScores[j])));
          }
    
          //push results into scoresArray
          scoresArray.push(scoresDiff);
        }
    
        //after all friends are compared, find best match
        for(var i=0; i<scoresArray.length; i++){
          if(scoresArray[i] <= scoresArray[bestMatch]){
            bestMatch = i;
          }
        }
    
        //return bestMatch data
        var bff = friendData[bestMatch];
        res.json(bff);
    
        //pushes new submission into the friends array
        friendData.push(req.body);
    });

};