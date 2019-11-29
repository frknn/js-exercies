var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyparser = require("body-parser");
var path = require("path");

var placesRoutes = require("./routes/places");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/public/stylesheets/"));
app.use(express.static(__dirname + "/public/scripts/"));
app.use(express.static(__dirname + "/public/assets/"));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+"/singlePage/homepage.html"));
});

app.use("/api/places", placesRoutes);

app.listen(port, function(){
    console.log("Server is online. Port: " + port);
});