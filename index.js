require("dotenv").config();
const fs = require("node:fs");

const PARAMS =
  "waterTemperature,wavePeriod,waveDirection,waveHeight,windWaveDirection,windWaveHeight,windWavePeriod,swellPeriod,secondarySwellPeriod,swellDirection,secondarySwellDirection,swellHeight,secondarySwellHeight,windSpeed,windSpeed20m,windSpeed30m,windSpeed40m,windSpeed50m,windSpeed80m,windSpeed100m,windSpeed1000hpa,windSpeed800hpa,windSpeed500hpa,windSpeed200hpa,windDirection,windDirection20m,windDirection30m,windDirection40m,windDirection50m,windDirection80m,windDirection100m,windDirection1000hpa,windDirection800hpa,windDirection500hpa,windDirection200hpa,airTemperature,airTemperature80m,airTemperature100m,airTemperature1000hpa,airTemperature800hpa,airTemperature500hpa,airTemperature200hpa,precipitation,gust,cloudCover,humidity,pressure,visibility,currentSpeed,currentDirection,iceCover,snowDepth,seaLevel";

function handle_api_error(err) {}

function request_weather(latitude, longitude, params = PARAMS) {
  // const event = new Date("14 Jun 2017 00:00:00 PDT");
  // const time = new Date(Date.now()).getUTCDate();

  // console.log(event.toUTCString());
  // // Expected output: "Wed, 14 Jun 2017 07:00:00 GMT"

  fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=${params}`,
    {
      headers: {
        Authorization: `${process.env.STORMGLASS_KEY}`,
      },
    }
  )
    .then((response) => response.json())
    .then((jsonData) => {
      fs.writeFileSync("sample_data.json", JSON.stringify(jsonData));
    });
}

// fs.writeFile(
//   "sample_data.json",
//   request_weather(40.106727573407134, -67.78877915279945),
//   (error) => {
//     if (error) {
//       console.log("An error has occurred ", error);
//       return;
//     }
//     console.log("Data written successfully to disk");
//   }
// );

request_weather(40.106727573407134, -67.78877915279945);
