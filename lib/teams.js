function Teams (client) {

  function users (team, userToken, cb) {

    var requestOptions = {
        method: 'GET'
      , url: client.baseUrl + '/v1/teams/' + team + '/users'
    };

    client.addUserAuth(requestOptions, userToken);
    client.sendRequest(requestOptions, cb);
  }

  return {
    users: users
  }
}

module.exports = Teams;