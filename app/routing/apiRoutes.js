var friendData = require("../data/friends.js");
var path = require ("path");
//routing

//tow routes with express parameters

module.exports = function (app) {

    //GET route to display all friends
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    //POST to handle survey data
    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: 100
        };
        //body-parser middleware helps in getting req.body
        var newEntry = req.body;
        var userScores = newEntry.scores;
        var scoresDiff = 0;

        //runs through all current friends 
        for (var i = 0; i < friendData.length; i++) {
            scoresDiff = 0;
            //run through scores to compare friends
            for (var j = 0; j < friendData[i].scores[j]; j++) {
                scoresDiff += Math.abs(parseInt(userScores[j]) - (parseInt(friendData[i].scores[j])))

                if (scoresDiff <= bestMatch.friendDiff) {
                    bestMatch.name = friendData[i].name;
                    bestMatch.photo = friendData[i].photo;
                    bestMatch.friendDiff = scoresDiff;
                }
            }

            //push results into scoresArray
            
        }
friendData.push(newEntry);
        //after all friends are compared, find best match
       
        res.json(bestMatch);

        //pushes new submission into the friends array
        
    });

};