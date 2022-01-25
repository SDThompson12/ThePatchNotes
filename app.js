var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var seedDB = require('./routes/seeds.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
mongoose.connect("mongodb+srv://SeanDThompson12:Death*0wl1322@thepatchnotes.kpypb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
	{
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true
	}).then(() => {
		console.log("Connected to ThePatchNotes DB...");
	}).catch(err => {
		console.log("Error: ", err.message);
});

// '__dirname' - Just references to the current directory path Ex) .../workspace/seanjr-personaltests/ThePatchNotes

//Requiring Routes
var mainRoute = require('./routes/index.js');

//Imports Routes
app.use("/", mainRoute);

seedDB(); //Commented out to avoid constant changing of ids

//For Local Port Functions and testing Website Changes: app.listen(3146, function()
//For Deployment Application running: app.listen(process.env.PORT, process.env.IP, function()

app.listen(3146, function()
{
console.log("Starting The Patch Notes server...");
})