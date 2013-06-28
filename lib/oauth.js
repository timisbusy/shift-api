function OAuth (client) {

  function testApp (cb) {

    var requestOptions = {
        method: 'GET'
      , url: client.baseUrl + '/v1/oauth2/test/app'
    };

    client.addAuth(requestOptions);
    client.sendRequest(requestOptions, cb);
  }

  return {
    testApp: testApp
  }
}

module.exports = OAuth;