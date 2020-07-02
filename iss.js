const request = require("request");

// Define function to fetch IP address
const fetchMyIP = (callback) => {
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      null;
    }

    callback(error, JSON.parse(body).ip);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://ipvigilante.com/${ip}`, (error, response, body) => {
    body = JSON.parse(body);

    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code: ${response.statusCode} when fetching IP. Responss: ${body}`;
      callback(Error(msg), null);
      return;
    }
    callback(error, { lat: body.data.latitude, lon: body.data.longitude });
  });
};
module.exports = { fetchMyIP, fetchCoordsByIP };
