const request = require("request");

// Define function to fetch IP address
const fetchMyIP = (callback) => {
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status  Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      null;
    }
    body = JSON.parse(body);
    callback(error, body.ip);
  });
};

module.exports = { fetchMyIP };
