function Messages (client) {

  function send (message, cb) {
    if (!message || !message.text) {
      return cb(new Error("Your message must include a text field"));
    }
    var requestOptions = {
        method: 'POST'
      , url: client.baseUrl + '/v1/messages'
      , json: message
    };

    client.addAuth(requestOptions);
    client.sendRequest(requestOptions, cb);
  }

  return {
    send: send
  }
}

module.exports = Messages;