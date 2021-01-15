const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     return console.log("it didn't work", error);
//   }
//   console.log('It worked! Returned IP: ', ip);
// });

// fetchCoordsByIP('162.156.186.66', (error, data) => {
//   if (error) {
//     return console.log("it didn't work", error);
//   }
//   console.log("It worked. Returned Coords: ", data);
// });

// fetchISSFlyOverTimes({ latitude: '-10000', longitude: '-123.13000' }, (error, data) => {
//   if (error) {
//     return console.log("error is", error);
//   }
//   console.log("It worked. Passed Times: ", data);
// });

const printPassTimes = function(passTimes) {
  for(const passTime of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(passTime.risetime);
    console.log(`Next pass at ${datetime} for a duration of ${passTime.duration}`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log('Error is', error);
  }
  printPassTimes(passTimes);
});