var express=require("express");
var app=express();

var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req,res){

	res.render("search");
});
app.get("/results", function(req,res){
	var results=req.query.q;
	request("http://www.omdbapi.com/?apikey=thewdb&s="+results,function(error,response,body){
		if(!error&&response.statusCode==200){
			var result=JSON.parse(body);
			res.render("results", {result:result});
		}
	});
});	

app.listen(3000);