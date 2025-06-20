import MapComponent from "./Map";

import { useContext, useEffect } from "react";

import { WeatherContext } from "./Main";
import image1 from "../assets/images/weather-about.jpg";
import image2 from "../assets/images/weather-about1.jpg";
import WeatherCarousel from "./WeatherCarousel";
import HorizontalScroll from "./HorizontalScroll";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  //const navigate = useNavigate();
  //const context = useContext(AppContext);
  const weatherContext = useContext(WeatherContext);
  const location = useLocation();

  /*useEffect(() => {
    alert(weatherContext.currentLocation);
    weatherContext.setCity(weatherContext.currentLocation);
  }, []);*/

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
    <section className="home d-flex justify-content-between">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero d-flex flex-column"
      >
        <div className="top-padding clipped-background">
          <div className="head d-flex flex-column align-items-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              WEATHER SPHERE
            </motion.h1>
            <h3>Tracking Weather Across the Globe</h3>
            <p>
              Get precise, real-time weather updates and alerts tailored to your
              location, so you're always prepared—whether it's a sunny commute
              or a rainy weekend
            </p>
            <button
              className="btn btn-light align-self-center"
              onClick={() => weatherContext.navigateToMenu("TODAY")}
            >
              Check your local forecast
            </button>
          </div>
        </div>
        <div className="local-section  align-self-center">
          {/*<h2 className="ms-5 mb-5 text-center">Weather At Your Location</h2>*/}

          <div className="current d-flex flex-column ">
            <div className=" current-head d-flex flex-column align-items-center">
              <h3>{weatherContext.city}</h3>
              <p className="w-100 text-center">
                {weatherContext.weather.formattedDate},{" "}
                {weatherContext.weather.time}
              </p>
              <p className="text-center">{weatherContext.weather.condition}</p>
            </div>
            <div className="current-data d-flex align-items-center w-100 justify-content-between">
              <div className="temp">
                <h2 className="d-flex">
                  {weatherContext.weather.temp_f}
                  <sup>&deg;F</sup>&nbsp;
                </h2>
              </div>
              <div className="condition">
                <img
                  src={weatherContext.weather.iconImage}
                  loading="lazy"
                  alt="icon"
                />
                {/*{weatherContext.weather.condition_icon}{" "}*/}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="global-map-section"
      >
        <h2 className="text-center">Weather Around the Globe</h2>
        <div className="section-layout">
          <p>
            Visualize weather systems across the globe. Access up-to-date
            atmospheric data and dynamic forecasts with a single, intuitive map.
            Our global map offers accurate data on temperature, precipitation,
            and wind patterns.Our interactive map delivers comprehensive
            insights for informed, location-independent planning. From regional
            storms to global climate shifts, stay ahead with live map data.
          </p>

          <MapComponent
            latitude={51.49}
            longitude={0}
            zoom={2.5}
            checked={"Temperature"}
            height={"80vh"}
          />
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="global-section"
      >
        <h2 className="ms-5 text-center">Global City Forecasts</h2>
        <div className="section-layout">
          <div className="wrapper">
            <div className="cities d-flex ">
              {[
                ...weatherContext.cityInfoList,
                ...weatherContext.cityInfoList,
              ].map((c, k) => (
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="city-card"
                  style={getBackground(c.weather)}
                  key={k}
                >
                  {/*<div className="condicon align-self-center text-center">
                    {c.weather.condition_icon}
                  </div>*/}
                  <div className="text-center head">
                    <h4 className="name">{c.cityName.split(",")[0]}</h4>
                    <p>
                      {c.weather.formattedDate} {c.weather.time}
                    </p>
                    <p className="cond">{c.weather.condition}</p>
                  </div>
                  <div className="align-self-center text-center">
                    <h4 className="temp">
                      {/*<WiThermometer color="goldenrod" size={40} />*/}
                      {c.weather.temp_f}&deg;F
                    </h4>
                    <p>{c.weather.temp_c}&deg;C</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
          {/*<div className="images">
            <img src={image4} alt="globe" />
          </div>*/}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="about"
      >
        <div className="section-layout">
          <article className="section-header">
            <h2>About Us</h2>
            <p>
              At World Weather, we believe everyone deserves accurate, real-time
              weather updates wherever they are. Our mission is to make weather
              forecasting simple, beautiful, and reliable. Whether you’re
              planning your next adventure, commuting to work, or just picking
              the right outfit, we’ve got you covered—sunshine or storm. Built
              by a team of weather geeks, designers, and engineers, our app
              delivers precise data from trusted sources, enhanced by
              user-friendly design and smart features like hourly updates,
              severe weather alerts, and multi-city tracking.
            </p>
          </article>
          <div className="images">
            <img src={image1} loading="lazy" className="img1" alt="img1"></img>
            <img src={image2} loading="lazy" className="img2" alt="img2"></img>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
