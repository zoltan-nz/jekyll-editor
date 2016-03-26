var express = require('express');
var app = express();

app.use(express.static('src/client'));
app.use('/bower_components', express.static('bower_components'));

var server = app.listen(3000, function () {
	console.log('Server running on port 3000');
});