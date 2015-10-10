// get the things we need
var express = require('express');
var app     = express();
var path = require('path');

// set the public folder to serve public assets
app.use(express.static(__dirname + '/dist'));

// set up our one route to the index.html file
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// START THE SERVER
// ====================================
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Magic happens on port ' + port);