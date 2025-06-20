import { useContext } from "react";
import City from "./City";
import { WeatherContext } from "./Main";
import { motion } from "framer-motion";

export default function WeatherCityList() {
  const weatherContext = useContext(WeatherContext);

  return (
    <section className="cities-page top-padding d-flex flex-column mb-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="section-layout d-flex align-items-center justify-content-center text-center"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          WEATHER AROUND THE GLOBE
        </motion.h2>
      </motion.div>

      <div className="city-list">
        {weatherContext.cityInfoList.map((c, k) => (
          <City city={c.cityName} weather={c.weather} key={k} />
        ))}
      </div>
    </section>
  );
}
