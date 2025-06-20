import { getTime } from "./utils/utils";
import { useContext } from "react";
import { WeatherContext } from "./Main";
import latitude from "../assets/images/icons/latitude.png";
import longitude from "../assets/images/icons/longitude.png";
import visibility from "../assets/images/icons/visibility.png";
import gust from "../assets/images/icons/gust.png";
import MapComponent from "./Map";
import { motion } from "framer-motion";

import useMediaQuery from "../hooks/useMediaQuery";
import WeatherPageHeader from "./WeatherPageHeader";
import { TbUvIndex } from "react-icons/tb";
import { MdDewPoint } from "react-icons/md";
import {
  WiHumidity,
  WiStrongWind,
  WiThermometer,
  WiBarometer,
  WiSunrise,
  WiSunset,
  WiWindDeg,
  WiCloudyGusts,
} from "react-icons/wi";
import { AppContext } from "../App";
import { dayNames } from "./WeatherDaily";
import { useNavigate } from "react-router-dom";

export default function WeatherDetails() {
  //let weatherDetails = props;

  const mediaMatches = useMediaQuery("only screen and (min-width: 992px)");
  const context = useContext(WeatherContext);

  return (
    <>
      <section className="details top-padding">
        {/*{context.display ? (
        mediaMatches ? (*/}
        <WeatherPageHeader />

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="map-row d-flex flex-column align-items-center "
        >
          <h3 className="list-head-item my-4 p-3 text-center">
            LOCAL WEATHER MAP
          </h3>
          <p className="mb-5 text-center">
            Track weather activity at your chosen location with high-resolution
            map layers and live meteorological data
          </p>
          <div className="map-current">
            <MapComponent
              latitude={context.latitude}
              longitude={context.longitude}
              zoom={13}
              checked={"Clear Map"}
              height={"80vh"}
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hourly-row d-flex flex-column py-4"
        >
          <h3 className="list-head-item mb-0 p-3 text-center">
            HOURLY FORECAST
          </h3>
          <div className="hourly-card-list d-flex">
            {context.hourList.map((hr, ind) =>
              ind < 12 ? (
                <div className="hourly-card d-flex flex-column">
                  <div className="hour d-flex flex-column align-items-center gap-2">
                    <span className="time fw-semibold text-nowrap">
                      {ind > 0 ? hr.time : "Now"}
                    </span>
                  </div>
                  <h2 className=" temp">
                    {hr.tempF}
                    <sup>&deg;F</sup>
                    {/*<br />
                <span className="tempC">{hr.tempC} &deg;C</span>*/}
                  </h2>
                  {/*<div className="condition">{hr.icon}</div>*/}
                  <div className="condition">
                    <img
                      src={hr.iconImage}
                      loading="lazy"
                      alt="condition"
                      width="70"
                      height="70"
                    />
                  </div>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
          <button
            className="btn btn-light align-self-center"
            onClick={(e) => context.navigateToMenu("HOURLY")}
          >
            Full Hourly Forecast
          </button>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="daily-row d-flex flex-column py-4"
        >
          <h3 className="list-head-item mb-0 p-3 text-center">
            DAILY FORECAST
          </h3>

          <div className="daily-card-list d-flex">
            {context.dailyList.map((hr, ind) =>
              ind < 7 ? (
                <div className="daily-card d-flex flex-column">
                  <div className="weekday d-flex flex-column align-items-center gap-1">
                    <span className="day fw-semibold">
                      {ind > 0 ? dayNames[hr.day] : "TODAY"}
                    </span>
                    <span className="date">{hr.date}</span>
                  </div>
                  <h2 className=" temp">
                    {hr.tempF}
                    <sup>&deg;F</sup>
                    {/*<br />
                <span className="tempC">{hr.tempC} &deg;C</span>*/}
                  </h2>
                  {/*<div className="condition">{hr.icon}</div>*/}
                  <div className="condition">
                    <img
                      src={hr.iconImage}
                      alt="condition"
                      loading="lazy"
                      width="70"
                      height="70"
                    />
                  </div>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
          <button
            className="btn btn-light align-self-center"
            onClick={(e) => context.navigateToMenu("DAILY")}
          >
            Full Daily Forecast
          </button>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="info-row mb-5"
        >
          <h3 className="list-head-item mb-0  text-center">MORE INFORMATION</h3>
          {context.weatherDetails ? (
            <div className="info-group mt-3">
              <div className="info-card">
                <div>
                  <WiThermometer color={"orange"} size={30} />
                </div>

                <div className="info-content">
                  <div className="info-head">Minimum</div>
                  {context.weatherDetails.daily[0].temp.min} &deg;F
                </div>
              </div>

              <div className="info-card">
                <div>
                  <WiThermometer color={"orange"} size={30} />
                </div>

                <div className="info-content">
                  <div className="info-head">Maximum</div>
                  {context.weatherDetails.daily[0].temp.max} &deg;F
                </div>
              </div>

              <div className="info-card">
                <div>
                  {" "}
                  <img height="25" loading="lazy" src={gust} />
                </div>

                <div className="info-content">
                  <div className="info-head">Wind Speed</div>
                  {context.weatherDetails.current.wind_speed} mph
                </div>
              </div>

              <div className="info-card">
                <div>
                  <WiWindDeg color={"orange"} size={30} />
                </div>

                <div className="info-content">
                  <div className="info-head">Wind Degree</div>
                  {context.weatherDetails.current.wind_deg} deg
                </div>
              </div>

              <div className="info-card">
                <div>
                  <img height="25" loading="lazy" src={latitude}></img>
                </div>

                <div className="info-content">
                  <div className="info-head">Latitude</div>
                  {context.weatherDetails.lat}
                </div>
              </div>

              <div className="info-card">
                <div>
                  <img height="25" loading="lazy" src={longitude}></img>
                </div>

                <div className="info-content">
                  <div className="info-head">Longitude</div>
                  {context.weatherDetails.lon}
                </div>
              </div>

              <div className="info-card">
                <div>
                  <WiSunrise color={"goldenrod"} size={30} />
                </div>

                <div className="info-content">
                  <div className="info-head">Sunrise</div>
                  {getTime(
                    context.weatherDetails.current.sunrise,
                    context.weatherDetails.timezone_offset
                  )}
                </div>
              </div>

              <div className="info-card">
                <div>
                  <WiSunset color={"orange"} size={30} />
                </div>

                <div className="info-content">
                  <div className="info-head">Sunset</div>
                  {getTime(
                    context.weatherDetails.current.sunset,
                    context.weatherDetails.timezone_offset
                  )}
                </div>
              </div>

              <div className="info-card">
                <div>
                  <img height="25" sloading="lazy" rc={visibility}></img>{" "}
                </div>

                <div className="info-content">
                  <div className="info-head">Visibility</div>
                  {(context.weatherDetails.current.visibility / 1609).toFixed(
                    2
                  )}{" "}
                </div>
              </div>
              <div className="info-card">
                <div>
                  <TbUvIndex color={"goldenrod"} size={20} />
                </div>

                <div className="info-content">
                  <div className="info-head">UVI</div>
                  {context.weatherDetails.current.uvi}
                </div>
              </div>
              <div className="info-card">
                <div>
                  <MdDewPoint color={"lightblue"} size={20} />
                </div>

                <div className="info-content">
                  <div className="info-head">Dew Point</div>
                  {context.weatherDetails.current.dew_point}&deg;F
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </motion.section>
      </section>
    </>
  );
}
