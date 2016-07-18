var express = require('express');

var app = express();
//middleware 
app.use(express.static('public'));

app.get('/', function(request, response) {

    response.sendFile(__dirname + '/public/index.html');

});

app.get('/users', function(request, response) {
    response.status(200).json([{
        name: 'Rey',
        character: 'shits'
    }, {
        name: 'Alex',
        character: 'Asshole'
    }]);
});

app.listen(8080, function() {

    console.log('Express running on port 8080');

});