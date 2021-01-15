const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("it didn't work", error);
    return;
  }
  if (ip) {
    console.log('It worked! Returned IP: ', ip);
    return ip;
  }
});

fetchCoordsByIP('162.156.186.66', (error, data) => {
  if (error) {
    console.log("it didn't work", error);
    return;
  }
  if (data) {
    console.log("It worked. Returned Coords: ", data);
    return data;
  }
});

fetchISSFlyOverTimes({ latitude: '-10000', longitude: '-123.13000' }, (error, data) => {
  if (error) {
    console.log("error is", error);
  }
  if (data) {
    console.log("It worked. Passed Times: ", data);
  }
});
