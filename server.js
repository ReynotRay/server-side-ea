var express = require('express');

var app = express();

//middleware 
app.use(express.static('public'));

app.get('/', function(request, response) {

    response.sendFile(__dirname + '/index.html');

});

app.get('/users', function(request, response) {
    response.status(200).json([{
        name: 'Rey',
        character: 'Dicks'
    }, {
        name: 'Rob',
        character: 'more Dicks'
    }]);
});

app.listen(8080, function() {

    console.log('Express running on port 8080');

});