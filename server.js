
var express = require("express");
var path = require('path');


var port = process.env.PORT || 8080;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/app/public'));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(port, ()=>{
    console.log('Server listening at: http://localhost:'+ port);
});