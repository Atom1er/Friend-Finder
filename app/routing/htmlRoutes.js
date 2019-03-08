var path = require('path');
var friendList = require("../data/friends");

var friendList = require('../data/friends.js');



module.exports = function (app) {
    //  app.get("/tables", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/tables.html"));
    // });

    // app.get("/reserve", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/reserve.html"));
    // });
    app.get('/survey.html', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get('/survey.html/submit', (req, res) => {
        var best = bestMatch();
        res.json(best);
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}



function bestMatch() {
    var score;
    var scoreArray = [];
    var total = 0;
    var lastEntry = friendList.length - 1;
    var friend = friendList.length - 1;
    // console.log(lastEntry);
    console.log('FriendList :'+friendList);
    for (var i = 0; i < friend; i++) {
        total = 0;
        for (var j = 0; j < 10; j++) {
            score = Math.abs(parseInt(friendList[i].answers[j]) - parseInt(friendList[lastEntry].answers[j]));
            total = total + score;
        }
        scoreArray.push(total);
    }
    console.log(scoreArray);
    var bestMatchVal = Math.min(...scoreArray);
    console.log('Lowest score :'+bestMatchVal);
    var index;
    for(var i = 0; i < scoreArray.length ; i++){
        if(scoreArray[i] === bestMatchVal){
            index = i;
            console.log('Best Match Index'+index);
        }
    }
    return index;
}