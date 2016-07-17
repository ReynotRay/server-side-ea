var express = require('express');

var app = express();


app.get('/users', function(request, response){

	response.json({
		name:'express server with shits!'
	});

});




app.listen(8080, function() {




console.log('express running on the final port 8080')

});