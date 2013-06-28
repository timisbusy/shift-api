function Applications (client) {

  function createObject (url, name, type, team, cb) {
    var requestOptions = {
        method: 'POST'
      , url: client.baseUrl + '/v1/applications/' + client.creds.APP_ID + '/objects'
      , json: {
          url: url
        , name: name
        , type: type
        , team: team
      }
    };

    client.addAuth(requestOptions);
    client.sendRequest(requestOptions, cb);
  }

  function deleteObject (id, cb) {
    var requestOptions = {
        method: 'DELETE'
      , url: client.baseUrl + '/v1/applications/' + client.creds.APP_ID + '/objects' + id
    };

    client.addAuth(requestOptions);
    client.sendRequest(requestOptions, cb);
  }

  return {
    createObject: createObject
    , deleteObject: deleteObject
  }
}

module.exports = Applications;