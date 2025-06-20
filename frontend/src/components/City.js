import {
  WiHumidity,
  WiStrongWind,
  WiThermometer,
  WiBarometer,
} from "react-icons/wi";

import { useContext } from "react";

import { WeatherContext } from "./Main";
import { motion } from "framer-motion";

export default function City({ city, weather }) {
  //const navigate = useNavigate();
  //const context = useContext(AppContext);
  const weatherContext = useContext(WeatherContext);
  /*const [bgStyle, setBgStyle] = useState({
    backgroundImage: `url("${weather.image}")`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
  });*/

  return (
    <motion.article
      key={city}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`d-flex flex-column list-group-item city-list-item my-1 justify-content-between  ${weather.bgClass}`}
      onClick={(e) => weatherContext.handleClick(city)}
    >
      <div className="city-head">
        <div className="d-flex flex-column align-items-start   city-name">
          <h4>{city}</h4>
          <p>
            {weather.formattedDate} {weather.time}
          </p>
          <p>{weather.condition_text}</p>
        </div>
        <div className="temp mt-3 d-flex justify-content-center">
          {/*<WiThermometer color={"orange"} size={70} className="m-0" />*/}
          <h1>
            {weather.temp_f}
            <sup>&deg;F</sup>&nbsp;
          </h1>
        </div>
      </div>

      <div className="city-detail">
        <div className="info-card">
          <div className="info-head">
            <WiThermometer color={"orange"} size={30} /> Feels Like
          </div>

          <div className="info-content">{weather.feelslike_f}&deg;F</div>
        </div>
        <div className="info-card">
          <div className="info-head">
            <WiStrongWind color={"lightblue"} size={30} /> Wind
          </div>
          <div className="info-content">{weather.wind_mph} mph</div>
        </div>
        <div className="info-card">
          <div className="info-head">
            <WiBarometer color={"yellow"} size={30} /> Pressure
          </div>
          <div className="info-content">{weather.pressure} mb</div>
        </div>
        <div className="info-card">
          <div className="info-head">
            <WiHumidity color={"#6ce8f9"} size={30} /> Humidity
          </div>
          <div className="info-content">{weather.humidity}%</div>
        </div>
      </div>
    </motion.article>
  );
}
