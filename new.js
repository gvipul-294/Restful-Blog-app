var mongoose = require("mongoose");

mongoose.createConnection('mongodb://localhost/myapp', {
  useMongoClient: true
  /* other options */
});

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	breed: String
});

var Cat = mongoose.model("Cat",catSchema);

var george = new Cat({
	name: "George",
	age: 11,
	breed: "a"
});

george.save(function(err, cat) {
	if(err) {
		console.log("WW");
	}
	else {
		console.log("yeah saved");
		console.log(cat);
	}
});

//Cat.create({
//	name: "S W",
//	age:15,
//	temparament: "Bland"}, function(err,cat){
//		if(err){
//			console.log("OOPS");
//			console.log(err);
//		}
//		else{
//			console.log(cat);
//		}
//});

//Cat.find({}, function(err, cats){
//	if(err){
//		console.log("Error");
//		console.log(err);
//	}
//	else{
//		console.log("CATs");
//		console.log(cats);
//	}
//})
