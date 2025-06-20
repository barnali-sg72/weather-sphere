import { isDay } from "./utils/utils";
import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./Main";

import {
  WiHumidity,
  WiStrongWind,
  WiThermometer,
  WiBarometer,
} from "react-icons/wi";

import { dayImages, nightImages } from "./utils/utils";
import { motion } from "framer-motion";

export default function WeatherPageHeader() {
  const context = useContext(WeatherContext);
  const [bgStyle, setBgStyle] = useState({});
  useEffect(() => {
    if (context.weatherDetails) {
      const day = isDay(
        context.weatherDetails.current.dt,
        context.weatherDetails.current.sunrise,
        context.weatherDetails.current.sunset
      );
      //alert(context.weatherDetails.current.weather[0].main);

      const image = day
        ? dayImages.get(context.weatherDetails.current.weather[0].main)
        : nightImages.get(context.weatherDetails.current.weather[0].main);

      setBgStyle({
        /*backgroundImage: `linear-gradient(
              to right,
              rgba(0, 0, 0, 0.2),
              rgba(0, 0, 0, 0.2)
            
            ), url("${image}")`,*/
        backgroundImage: `url("${image}")`,
        backgroundSize: `cover`,
        backgroundPosition: `left top`,
      });
    }
  }, [context]);
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="page-header"
    >
      <div className="weather-page-header section-layout d-flex">
        <section className="info ">
          <div className="section-head">
            <div className="head-info">
              <h2 className="name text-nowrap">
                {(context.city ? context.city : "My Location").split(",")[0]}
              </h2>
              <p>
                {context.weather.formattedDate} {context.weather.time}
              </p>

              <p>{context.weather.condition_text}</p>
            </div>
            <div className="temp">
              <h1>
                {/*<WiThermometer color={"orange"} size={60} />*/}
                {context.weather.temp_f}
                <sup>&deg;F</sup>
              </h1>
              {/*<p>{context.weather.temp_c}&deg;C </p>*/}
            </div>
            <div className="cond-icon">
              <img
                width="250"
                height="250"
                loading="lazy"
                src={context.weather.iconImage}
                alt="icon"
              />
            </div>
          </div>

          <div className="section-info">
            <div className="info-card">
              <div className="info-head">
                <WiThermometer color={"orange"} size={35} /> Feels Like
              </div>
              <div className="info-content">
                {context.weather.feelslike_f} &deg;F
              </div>
            </div>
            <div className="info-card">
              <div className="info-head">
                <WiStrongWind color={"lightblue"} size={35} /> Wind
              </div>
              <div className="info-content">{context.weather.wind_mph} mph</div>
            </div>

            <div className="info-card">
              <div className="info-head">
                <WiBarometer color={"yellow"} size={35} />
                Pressure
              </div>
              <div className="info-content">{context.weather.pressure} mb</div>
            </div>
            <div className="info-card">
              <div className="info-head">
                <WiHumidity color={"#6ce8f9"} size={35} />
                Humidity
              </div>
              <div className="info-content">{context.weather.humidity}%</div>
            </div>
          </div>
        </section>
        <section className="hourly-header">
          <h3>HOURLY FORECAST FOR {context.city.toUpperCase()}</h3>
          <p>
            See how the weather will change throughout the day. Scroll through
            today’s conditions to stay prepared wherever you go.
          </p>
        </section>
        <section className="daily-header">
          <h3>DAILY FORECAST FOR {context.city.toUpperCase()}</h3>
          <p>Know what to expect each day — we’ve got your forecast covered.</p>
        </section>
      </div>
    </motion.section>
  );
}
