var express = require("express");
var app = express();
var path = require('path');

app.get("/", function(req, res){
   res.sendFile(path.join(__dirname + '/catan-scorekeeper.html'));
});

app.listen(3000, function(){
    console.log("server started");
});
