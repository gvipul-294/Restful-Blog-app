var bodyParser    =require("body-parser"),
  mongoose	  =require("mongoose"),
  express		  =require("express"),
	 app			  =express();

/*mongoose.createConnection('mongodb://localhost/restfulblog_app', {
  useMongoClient: true
  // other options 
}); */
mongoose.connect("mongodb://localhost:27017/restfulblog_app");
mongoose.connection.on('open', () => {
  console.log('Connected to mongodb server.');
  
})
//APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
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
/*Blog.create({
	title:"Test Blog",
	image:"https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg",
	body:"HELLO, welcome to the blog post"
});*/
app.get('/',function(req,res){
	res.redirect("/blogs");
})
app.get('/blogs',function(req,res){
	Blog.find({}, function(err,blogs){
		if(err){
			console.log("ERROR!");
		}
		else{
			res.render("index",{blogs: blogs});
		}
	});
	
});
app.get("/blogs/new", function(req, res){
	res.render("new");
});

//CREATE ROUTE
app.post("/blogs", function(req, res){
//create blog
	Blog.create(req.body.blog, function(err, newBlog){
		if(err){
			res.render("new");
		}
		else{
			//then redirect to the index
			res.redirect("/blogs");
		}
	});
});

//SHOW ROUTE
app.get("/blogs/:id", function(req,res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
		}
		else{
			res.render("show", {blog: foundBlog});
		}
	})
});
app.listen(3000);