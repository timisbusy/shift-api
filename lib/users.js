function Users (client) {

  function me (userToken, cb) {

    var requestOptions = {
        method: 'GET'
      , url: client.baseUrl + '/v1/users/me'
    };

    client.addUserAuth(requestOptions, userToken);
    client.sendRequest(requestOptions, cb);
  }

  function get (user, userToken, cb) {

    var requestOptions = {
        method: 'GET'
      , url: client.baseUrl + '/v1/users/' + user
    };

    client.addUserAuth(requestOptions, userToken);
    client.sendRequest(requestOptions, cb);
  }

  function connections (userToken, cb) {

    var requestOptions = {
        method: 'GET'
      , url: client.baseUrl + '/v1/users/me/connections'
    };

    client.addUserAuth(requestOptions, userToken);
    client.sendRequest(requestOptions, cb);
  }

  function teams (userToken, cb) {

    var requestOptions = {
        method: 'GET'
      , url: client.baseUrl + '/v1/users/me/teams'
    };

    client.addUserAuth(requestOptions, userToken);
    client.sendRequest(requestOptions, cb);
  }

  return {
      me: me
    , get: get
    , connections: connections
    , teams: teams
  }
}

module.exports = Users;