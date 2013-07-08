var Shift = require('./index');

var creds = require('./conf');

var shift = new Shift(creds.shift);


// var newMessage = {
//   text: "Heya, fellers. Happy Friday!",
//   "addressed_teams": [
//     "7953133a-0cf2-4416-b7ee-8442f53904ea"
//   ]
// };

// shift.messages.send(newMessage, function (err, res) {
//   if (err) { throw err; }
//   console.log(res);
// });

shift.users.me(creds.testUserToken, function (err, res) {
  if (err) { throw err; }
  console.log(res);
});