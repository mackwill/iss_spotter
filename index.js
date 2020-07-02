const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
} = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didnt work! ", error);
//     return;
//   }

//   console.log("It worked! Nicolas Cage has your IP: ", ip);
// });

// fetchCoordsByIP("24.202.7.129", (error, data) => {
//   // fetchCoordsByIP("24.202.7.12228", (error, data) => {
//   if (error) {
//     console.log("Nicolas Cage found an error in your work.", error);
//     return;
//   }

//   console.log(`Nicolas Cage found your coordinates at: `, data);
// });

// fetchISSFlyOverTimes({ lat: "45.35260", lon: "-73.73050" }, (error, desc) => {
//   if (error) {
//     console.log(`Nicolas Cage found an error in your request: ${error}`);
//     return;
//   }

//   console.log(
//     `Nicolas Cage predicts the ISS will pass over at these times: `,
//     desc
//   );
// });

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
