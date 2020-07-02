const { fetchMyIP, fetchCoordsByIP } = require("./iss");

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
