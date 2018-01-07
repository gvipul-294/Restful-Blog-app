const express = require('express');

const app=express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get('/',(req,res)=>res.send('Hi there, welcome to my assignment!'))

app.get("/file/:thing", function(req,res){
	var thing=req.params.thing;
	res.render("apWork.ejs", {thingVar: thing});
});

app.get('/speak/:subName/', function(req, res){
	//console.log(req.params);
	//res.send('welcome here');
	var sub = req.params.subName
;	if(sub=="pig"){
	res.send("The pig says 'Oink'");}
	else if(sub=="a"){
		res.send("a");}
	
});
app.get('/repeat/:word/:num/', function(req,res){
	var sub=req.params.word;
	var numb=Number(req.params.num);
	var subR=sub;
	for (var i =numb - 1; i > 0; i--){
		subR = subR + " " + sub;
	}
	res.send(subR + " ");
})
app.get("/posts", function(req,res){
	var posts=[{title :"PostA", author: "A1"},
			   {title :"PostB", author: "A2"},
			   {title :"PostC", author: "A3"},
			  ];
	res.render("posts.ejs", {posts: posts});
})

app.get('*',(req,res)=>res.send('stArrr!'))
app.listen(3000);