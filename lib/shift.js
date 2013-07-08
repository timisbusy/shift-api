var request = require('request');

function Shift (creds) {
  if (!creds) { throw new Error("Shift API Creds are required"); }
  if (!creds.APP_ID) { throw new Error("Shift API APP_ID is required"); }
  if (!creds.APP_SECRET) { throw new Error("Shift API APP_SECRET is required"); }
  var shift = this;

  this.client = {
      creds: creds
    , baseUrl: "https://shift.com/"
  };

  this.client.sendRequest = function (options, cb) {
    request(options, function (err, res, body) {
      if (err) { return cb(err); }
      if (res.statusCode >= 400) { return cb(new Error(JSON.stringify(body))); }
      if (typeof body === "string") {
        try {
          body = JSON.parse(body);
        } catch (e) {
          console.log(e); // maybe we get a plain string back sometimes?
        }
      }
      cb(null, body);
    });
  }

  this.client.addAuth = function (requestOptions) {
    requestOptions.qs = requestOptions.qs || {};
    requestOptions.qs.client_id = shift.client.creds.APP_ID;
    requestOptions.qs.client_secret = shift.client.creds.APP_SECRET;
    return requestOptions
  }

  this.client.addUserAuth = function (requestOptions, userToken) {
    requestOptions.headers = requestOptions.headers || {};
    requestOptions.headers.Authorization = "Bearer " + userToken;
    return requestOptions;
  }

  this.client.applications = require('./applications')(this.client);
  this.client.attachments = require('./attachments')(this.client);
  this.client.messages = require('./messages')(this.client);
  this.client.oauth = require('./oauth')(this.client);
  this.client.users = require('./users')(this.client);
  this.client.teams = require('./teams')(this.client);

  return this.client;
}


module.exports = Shift;