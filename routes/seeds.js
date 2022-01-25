var mongoose = require("mongoose");
var Feeds = require("../models/feeds.js");

var seededData = [
{
name: "Playstation Blog", 
url:"https://blog.us.playstation.com/feed/",
},
{
 	name: "PC Gamer", 
url:"https://www.pcgamer.com/rss/",
},
	{
 	name: "Xbox Wire", 
url:"https://news.xbox.com/en-us/feed/",
}
]
 
function seedDB()
{
 //Removes all feeds
 Feeds.remove({}, function(error)
 {
if(error)
{
console.log(error);
}
console.log("Removed all feeds.");
//Adds a few campgrounds
seededData.forEach(function(seed)
{
Feeds.create(seed, function(error, feed)
{
if(error)
{
console.log(error)
} 

else 
{
console.log("Added a feed");
}
});
});
});
};
 
module.exports = seedDB;