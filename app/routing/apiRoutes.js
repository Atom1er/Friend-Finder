var friendList = require("../data/friends");

module.exports  = function(app){
    app.get('/api/friend', (req, res)=>{
        res.json(friendList);
    });
    app.post('/api/friend', (req, res)=>{
       friendList.push(req.body);
        res.json(true);
    })
}