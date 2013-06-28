function OAuth (client) {

  function testApp (cb) {

    var requestOptions = {
        method: 'GET'
      , url: client.baseUrl + '/v1/oauth2/test/app'
    };

    client.addAuth(requestOptions);
    client.sendRequest(requestOptions, cb);
  }

  function testAppAsUser (userToken, cb) {

    var requestOptions = {
        method: 'GET'
      , url: client.baseUrl + '/v1/oauth2/test/app_as_user'
    };

    client.addUserAuth(requestOptions, userToken);
    client.sendRequest(requestOptions, cb);
  }

  function getToken (code, redirectUri, cb) {

    var message = {
        code: code
      , client_id: client.creds.APP_ID
      , client_secret: client.creds.APP_SECRET
      , grant_type: "authorization_code"
      , redirect_uri: encodeURIComponent(redirectUri)
    };

    var options = {
        method: 'POST'
      , url: 'https://shift.com/v1/oauth2/token'
      , form: message
    };
    client.sendRequest(requestOptions, cb);
  }

  return {
      testApp: testApp
    , testAppAsUser: testAppAsUser
    , getToken: getToken
  }
}

module.exports = OAuth;