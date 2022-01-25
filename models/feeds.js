var mongoose = require('mongoose');

//Mongoose Schema Set-up
var feedSchema = new mongoose.Schema({
	name: String,
	url: String
});

module.exports = mongoose.model("Feed", feedSchema);
