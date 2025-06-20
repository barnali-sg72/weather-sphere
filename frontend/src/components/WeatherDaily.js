import { WeatherContext } from "./Main";
import { useContext } from "react";

import {
  WiHumidity,
  WiStrongWind,
  WiThermometer,
  WiBarometer,
} from "react-icons/wi";

import sunday from "../assets/images/icons/sunday.png";
import saturday from "../assets/images/icons/saturday.png";
import monday from "../assets/images/icons/monday.png";
import tuesday from "../assets/images/icons/tuesday.png";
import thursday from "../assets/images/icons/thursday.png";
import wednesday from "../assets/images/icons/wednesday.png";
import friday from "../assets/images/icons/friday.png";
import sundayDark from "../assets/images/icons/sunday-dark.png";
import saturdayDark from "../assets/images/icons/saturday-dark.png";
import mondayDark from "../assets/images/icons/monday-dark.png";
import tuesdayDark from "../assets/images/icons/tuesday-dark.png";
import thursdayDark from "../assets/images/icons/thursday-dark.png";
import wednesdayDark from "../assets/images/icons/wednesday-dark.png";
import fridayDark from "../assets/images/icons/friday-dark.png";
import useMediaQuery from "../hooks/useMediaQuery";
import WeatherPageHeader from "./WeatherPageHeader";
import { FaWind } from "react-icons/fa";
import { use } from "react";
import { AppContext } from "../App";
import { MdOutlineDisabledByDefault } from "react-icons/md";
import { motion } from "framer-motion";

export const dayNames = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];
export default function WeatherDaily() {
  const icons = [
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
  ];

  const iconsDark = [
    sundayDark,
    mondayDark,
    tuesdayDark,
    wednesdayDark,
    thursdayDark,
    fridayDark,
    saturdayDark,
  ];

  //const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const appContext = useContext(AppContext);
  const context = useContext(WeatherContext);
  const mediaMatches = useMediaQuery("only screen and (min-width: 992px)");

  const getIcons = (day) => {
    if (appContext.theme === "dark") {
      return icons[day];
    } else {
      return iconsDark[day];
    }
  };
  return (
    <section className="top-padding d-flex rounded-3 flex-column daily align-self-center mb-5">
      <div className="daily-wrapper d-flex flex-column align-items-center">
        <WeatherPageHeader />
        {/*<h2 className="list-head-item mb-0 p-3">
          DAILY FORECAST FOR {context.city.toUpperCase()}
        </h2>*/}
        <ul className="list-group daily-list d-flex flex-column">
          {context.dailyList.map((hr, ind) => (
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className=" daily-list-item  "
            >
              <div className="summary">{hr.summary}</div>
              <div className="list-group-item">
                <div className="dayofweek d-flex flex-column align-items-start">
                  <div className="weekday d-flex align-items-center gap-2">
                    <img height={35} loading="lazy" src={getIcons(hr.day)} />{" "}
                    <span className="day">
                      {ind === 0 ? "TODAY" : dayNames[hr.day]}
                    </span>
                  </div>

                  {hr.date}
                  <br />
                  {hr.condition}
                </div>
                <div className=" temp">
                  <WiThermometer color={"orange"} size={30} />
                  {hr.tempF}
                  <sup>&deg;F</sup>
                </div>

                <div className="condition">
                  <img
                    src={hr.iconImage}
                    loading="lazy"
                    alt="condition"
                    width="100"
                    height="100"
                  />
                </div>
                <div className="more-info d-flex flex-column">
                  <div className=" wind">
                    {/*<img height="25" src={gust} />*/}
                    <WiStrongWind color={"lightblue"} size={20} />
                    &nbsp;{hr.wind} mph
                  </div>
                  <div className=" pressure">
                    <WiBarometer color={"yellow"} size={20} />
                    &nbsp;{hr.pressure} mb
                  </div>
                  <div className=" humidity">
                    <WiHumidity color={"#6ce8f9"} size={20} /> {hr.humidity}%
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
