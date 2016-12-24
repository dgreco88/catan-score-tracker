var express = require("express");
var app = express();
var path = require('path');

app.get("/", function(req, res){
   res.sendFile(path.join(__dirname + '/catan scorekeeper data.html'));
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});