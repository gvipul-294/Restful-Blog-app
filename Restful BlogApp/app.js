var bodyParser    =require("body-parser");
 var mongoose	  =require("mongoose");
 var express		  =require("express");
 var app			  =express();

mongoose.createConnection('mongodb://localhost/restfulblog_app', {
  useMongoClient: true
  /* other options */
});
//APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
	res.redirect("/blogs");
})
app.get('/blogs',function(req,res){
	res.render("index");
})
//MONGOOSE MODEL CONFIG
var blogSchema=new mongoose.Schema({
	title:String,
	image :String,
	body: String,
	created: {
				type:Date, 
				default:Date.now
			 }

});
var Blog=mongoose.model("Blog", blogSchema);
Blog.create({
	title:"Test Blog",
	image:"https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg",
	body:"HELLO, welcome to the blog post"
});

app.listen(3000);