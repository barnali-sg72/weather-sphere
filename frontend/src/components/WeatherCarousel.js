// WeatherCarousel.js
import WeatherCard from "./WeatherCard";
import { useState } from "react";

const weatherData = [
  { city: "New York", temp: 26, icon: "01d", condition: "Clear" },
  { city: "London", temp: 18, icon: "03d", condition: "Cloudy" },
  { city: "Tokyo", temp: 22, icon: "10d", condition: "Rainy" },
  { city: "Paris", temp: 19, icon: "04d", condition: "Overcast" },
  { city: "Sydney", temp: 24, icon: "01n", condition: "Clear Night" },
];

export default function WeatherCarousel({ weatherData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const chunkSize = 4; // Show 4 cards per slide

  const chunkedData = [];
  for (let i = 0; i < weatherData.length; i += chunkSize) {
    chunkedData.push(weatherData.slice(i, i + chunkSize));
  }

  const getBackground = (weather) => {
    const bgStyle = {
      backgroundImage: `url(${weather.condition_image}), ${weather.background}`,
      //backgroundImage: `url(${weather.condition_image})`,
      /*backgroundImage: weather.background,*/
      //backgroundImage: `url("${weather.image}") !important`,
      //backgroundColor: "rgba(0,0,0,0.5)",
      backgroundSize: `10rem 10rem, cover`,
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundPosition: `top, top`,
    };
    return bgStyle;
  };

  return (
    <div
      id="weatherCarousel"
      className="carousel  w-100"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner d-flex align-items-center">
        {chunkedData.map((group, i) => (
          <div
            key={i}
            className={`carousel-item align-items-center ${
              i === 0 ? "active" : ""
            }`}
          >
            <div className="d-flex city-carousel justify-content-center align-items-center">
              {group.map((c, k) => (
                <article
                  className="city-card"
                  style={getBackground(c.weather)}
                  key={k}
                >
                  {/*<div className="condicon align-self-center text-center">
                    {c.weather.condition_icon}
                  </div>*/}
                  <div className="align-self-end head text-center">
                    <h4 className="name">{c.cityName.split(",")[0]}</h4>
                    <p className="cond">{c.weather.condition}</p>
                  </div>
                  <div className="align-self-center text-center">
                    <h4 className="temp color-gold">
                      {/*<WiThermometer color="goldenrod" size={40} />*/}
                      {c.weather.temp_f}&deg;F
                    </h4>
                    <p>{c.weather.temp_c}&deg;C</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#weatherCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#weatherCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
}
