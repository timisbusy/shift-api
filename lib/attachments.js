function Attachments (client) {

  function send (data, cb) {
    console.log('WARNING: this has not been tested');
    var requestOptions = {
        method: 'POST'
      , url: client.baseUrl + '/v1/attachments'
    };

    client.addAuth(requestOptions);
    client.sendRequest(requestOptions, cb);
  }

  return {
    send: send
  }
}

module.exports = Attachments;