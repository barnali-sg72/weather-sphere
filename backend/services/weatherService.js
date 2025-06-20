const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.OPENWEATHER_API_KEY;
const CITY_URL = "https://api.openweathermap.org/geo/1.0/reverse";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";
const ONE_CALL_URL = "https://api.openweathermap.org/data/3.0/onecall";

async function getCityByLatLon(latitude, longitude) {
  const response = await axios.get(CITY_URL, {
    params: {
      lat: latitude,
      lon: longitude,
      appid: API_KEY,
      limit: 5,
    },
  });

  return response.data;
}

async function getWeatherByCity(city) {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "imperial", // or "imperial"
    },
  });
  return response.data;
}
async function getForecastByCity(city) {
  const response = await axios.get(FORECAST_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "imperial", // or "imperial"
    },
  });
  return response.data;
}

async function getForecastByLatLon(latitude, longitude) {
  const response = await axios.get(ONE_CALL_URL, {
    params: {
      lat: latitude,
      lon: longitude,
      appid: API_KEY,
      units: "imperial", // or "imperial"
    },
  });
  return response.data;
}

module.exports = {
  getCityByLatLon,
  getWeatherByCity,
  getForecastByCity,
  getForecastByLatLon,
};
// This service fetches weather data from OpenWeatherMap API
// using the city name provided in the request.
