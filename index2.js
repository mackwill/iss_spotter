const { nextISSTimesForMyLocation } = require("./iss_promise");

const printPassTimes = (passTimes) => {
  passTimes.map((time) => {
    let passTime = new Date(0);
    passTime.setUTCSeconds(time.risetime);
    console.log(
      `Next pass at ${passTime} for a duration of ${time.duration} seconds`
    );
  });
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("Nicolas Cage found an error in your code: ", error);
  });
