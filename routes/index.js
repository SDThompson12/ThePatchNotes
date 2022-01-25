var express = require("express");
var router = express.Router();
var Feeds = require('../models/feeds.js');

//Index Route
router.get('/', function(request, response)
{
/*
		response.render("./homePage.ejs");
	});
*/

 // Get all feeds from Mongoose Database
	Feeds.find({},function(error,newFeeds)
	{
		if(error)
 		{
	console.log(error);
 		} 
 		else
 		{
	response.render("./homePage.ejs",{gamingFeeds: newFeeds});
 		}
	});
	});

//Post / Create route
router.post("/", function(request,response)
{
 var feedName = request.body.name;
 var feedURL = request.body.url;
	
 var newFeed ={name: feedName, url: feedURL};
 Feeds.create(newFeed, function(error, createdFeed)
{
if(error)
{
console.log(error);
}
else
{
console.log("New Feed: ");
console.log(createdFeed);
}
});
 response.redirect("/");
});


module.exports = router;

