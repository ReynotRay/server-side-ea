$.ajax('/users')
    .done(function(users) {

        for (var i = 0; i < users.length; i++) {
            $('ul').append('<li>' + users[i].name + '</li>');
        }

    }).fail(function(error) {
    	console.log('fuckin failed');
        console.log(error);
    });


