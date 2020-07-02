const { nextISSTimesForMyLocation } = require("./iss");

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("Nicolas Cage found an error: ", error);
  }

  passTimes.map((elem) => {
    let passDate = new Date(0);
    passDate.setUTCSeconds(elem.risetime);
    console.log(`Next pass at ${passDate} for ${elem.duration} seconds!`);
  });
});
