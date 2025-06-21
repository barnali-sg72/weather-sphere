const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const weatherService = require("./services/weatherService");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//app.use(cors());
const allowedOrigins = [
  "http://localhost:3005", // dev frontend
  //'https://your-frontend-url.netlify.app', // your Netlify/Vercel domain
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like curl or Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.options("*", cors()); // Handle preflight for all routes

//http://localhost:5001/api/city?lat=37.7749&lon=-122.4194
app.get("/api/city", async (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon)
    return res
      .status(400)
      .json({ error: "Both latitude and longitude are required" });

  try {
    const data = await weatherService.getCityByLatLon(lat, lon);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch city information" });
  }
});

//http://localhost:5000/api/weather?city=San%20Francisco,CA,US
app.get("/api/weather", async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const data = await weatherService.getWeatherByCity(city);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

//http://localhost:5001/api/forecast?city=San%20Francisco,CA,US
app.get("/api/forecast", async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const data = await weatherService.getForecastByCity(city);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch weather forecast data" });
  }
});

//http://localhost:5001/api/forecastDetails?lat=37.7749&lon=-122.4194
app.get("/api/forecastDetails", async (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon)
    return res
      .status(400)
      .json({ error: "Both latitude and longitude are required" });

  try {
    const data = await weatherService.getForecastByLatLon(lat, lon);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
