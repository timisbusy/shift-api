# shift-api

Node.js wrapper for the shift api

## Use with caution!

This package has not been tested very well yet. Send over any issues you find and we'll get them resolved. There are probably still some log statements in the code that may annoy you. Let me know or send through a pull request. Thanks!

## install

    npm install shift-api

## use

    var Shift = require('./index');
    
    var creds = {
        APP_ID: "YOUR_APP_ID"
      , APP_SECRET: "YOUR_APP_SECRET"
    };

    var shift = new Shift(creds);

    var newMessage = {
      text: "Heya, fellers!",
      "addressed_teams": [
       "TEAM_ID_HERE"
     ]
    };

    shift.messages.send(newMessage, function (err, res) {

      if (err) { throw err; }

      console.log(res);
      
    });

## available calls

Most of the api wrapper has been written. Much less of it has been tested. Even less is documented here. Much more complete reference coming soon.