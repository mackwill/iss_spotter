const request = require("request-promise-native");

const fetchMyIP = () => {
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = (ip) => {
  let passIP = JSON.parse(ip).ip;
  return request(`https://ipvigilante.com/${passIP}`);
};

const fetchISSFlyOverTimes = (location, callback) => {
  const { latitude, longitude } = JSON.parse(location).data;
  return request(
    `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`
  );
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const response = JSON.parse(data).response;
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };
