var bodyParser = require('body-parser')
var express=require("express");
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.set("view engine", "ejs");
app.get("/",function(req,res){
	res.render("home");
});
var friendlist=["a","b","c","d"];
app.get("/friends",function(req,res){
	
	res.render("friends", {friends:friendlist});

});
app.listen(3001);
app.post("/addfriend",function(req,res){
	var newFriend=req.body.newfriend;
	friendlist.push(newFriend);
	res.redirect("/friends");
});
