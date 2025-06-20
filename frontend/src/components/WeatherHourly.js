import { useContext, useEffect } from "react";
import { WeatherContext } from "./Main";
import { motion } from "framer-motion";
import {
  WiHumidity,
  WiStrongWind,
  WiThermometer,
  WiBarometer,
} from "react-icons/wi";
import { MdAccessTime } from "react-icons/md";

import useMediaQuery from "../hooks/useMediaQuery";
import WeatherPageHeader from "./WeatherPageHeader";
import { AppContext } from "../App";

export default function WeatherHourly() {
  //const appContext = useContext(AppContext);
  const context = useContext(WeatherContext);
  //const mediaMatches = useMediaQuery("only screen and (min-width: 1180px)");

  useEffect(() => {
    console.log(context);
  }, []);
  return (
    <section className="top-padding d-flex flex-column hour-list rounded-3 hourly align-self-center mb-5">
      <div className="hour-wrapper d-flex flex-column align-items-center">
        <WeatherPageHeader />
        {/*<h2 className="list-head-item ">HOURLY FORECAST</h2>*/}

        <ul className="list-group">
          {context.hourList.map((hr) => (
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="list-group-item hourly-list-item "
              //style={{ background: hr.background }}
            >
              <div className="hour justify-self-center">
                <div className="d-flex align-items-center">
                  {/*<img height="30" alt="time" src={time} />*/}
                  <MdAccessTime color={"lightblue"} size={25} />
                  &nbsp;<span className="time">{hr.time}</span>
                </div>

                <span>{hr.condition}</span>
              </div>
              <div className=" temp ">
                <WiThermometer color={"orange"} size={30} />
                {hr.tempF}
                <sup>&deg;F</sup>
                {/*<br />
              <span className="tempC">{hr.tempC} &deg;C</span>*/}
              </div>
              <div className="condition">
                <img
                  src={hr.iconImage}
                  loading="lazy"
                  alt="condition"
                  width="100"
                  height="100"
                />
                {/*{hr.icon}*/}
              </div>
              <div className="more-info d-flex flex-column">
                <div className="align-self-start">
                  <WiBarometer color={"yellow"} size={20} />
                  &nbsp;{hr.pressure} mb
                </div>
                <div className="align-self-start">
                  {/*<img height="25" src={gust} />*/}
                  <WiStrongWind
                    className="me-2"
                    color={"lightblue"}
                    size={20}
                  />
                  &nbsp;&nbsp;{hr.wind} mph
                </div>
                <div className="align-self-start">
                  <WiHumidity color={"#6ce8f9"} size={20} /> {hr.humidity}%
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
