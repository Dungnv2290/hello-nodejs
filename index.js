var express = require('express');
var app = express();
app.get('/route', function(req, res){
	res.send('Hello world')
});
app.listen(5000, function(){
	console.log('Example app listening on port 3000!');
});
