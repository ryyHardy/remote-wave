const lat = 58.7984;
const lng = 17.8081;
const params = "waveHeight,airTemperature";

let weather;

function handle_api_error(err) {}

function request_weather(latitude, longitude, params) {
  fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
    {
      headers: {
        Authorization: "example-api-key",
      },
    }
  )
    .then((response) => response.json())
    .then((jsonData) => {
      return jsonData;
    })
    .catch();
}
