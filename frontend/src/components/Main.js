import WeatherCityList from "./WeatherCityList";
import WeatherDaily from "./WeatherDaily";
import WeatherHourly from "./WeatherHourly";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";
import HomePage from "./HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import {
  getCelsius,
  getIcon,
  getIconByTime,
  dayImages,
  nightImages,
  dayBgImages,
  nightBgImages,
  isDay,
  getBackgroundImage,
  dayIconImages,
  nightIconImages,
  dayBgClasses,
  nightBgClasses,
} from "./utils/utils";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { AppContext } from "../App";
import { useContext, useState, useEffect } from "react";
import WeatherPage from "./WeatherPage";
import { Redirect } from "react-router-dom";

export const WeatherContext = React.createContext(null);

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const pageTransition = {
  duration: 1,
  ease: "easeInOut",
};

export default function Main() {
  const context = useContext(AppContext);
  const [city, setCity] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [cityInfoList, setCityInfoList] = useState([]);
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);
  const [display, setDisplay] = useState(false);
  const [hourList, setHourList] = useState([]);
  const [dailyList, setDailyList] = useState([]);
  const [weatherDetails, setWeatherDetails] = useState();
  const [weather, setWeather] = useState({
    temp_f: "",
    temp_c: "",
    feelslike_f: "",
    pressure: "",
    wind_mph: "",
    condition: "",
    condition_text: "",
    condition_icon: "",
    humidity: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // alert(location.pathname);
    if (location.pathname.includes("/home")) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          setLatitude(pos.coords.latitude);
          setLongitude(pos.coords.longitude);
          axios
            .get(
              `${process.env.REACT_APP_BACKEND_URL}/api/city?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
              //`http://localhost:5001/api/city?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
              //`https://api.openweathermap.org/geo/1.0/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&limit=5&appid=2e991483d328650ae67eb0609d0fc654`
            )
            .then((res) => {
              const response = res.data[0];
              const cityInfo = response.name + ", " + response.country;
              setCity(cityInfo);
              setCurrentLocation(cityInfo);
              //alert(location.pathname.replace("current", cityInfo));
              navigate(location.pathname.replace("current", cityInfo));
            });
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    fetchWeatherData();

    const interval = setInterval(() => {
      fetchWeatherData();
      //alert("done");
    }, 1200000);
    return () => clearInterval(interval);
  }, [city, latitude, longitude, context.theme]);

  useEffect(() => {
    //alert(city);
    fetchAllData();
    const interval = setInterval(() => {
      fetchAllData();
      //alert("done");
    }, 60000);
    return () => clearInterval(interval);
  }, [context.theme]);

  /*useEffect(() => {
    const cityValue = context.cityRef.current.value;
    setCity(cityValue);
    navigate("/today/" + cityValue);
    context.cityRef.current.value = "";
  }, [context.cityRef]);*/

  const fetchWeatherData = () => {
    //alert("Fetching weather data for " + city);
    if (city !== "") {
      //alert(city);
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/api/weather?city=${city}`
          //`http://localhost:5001/api/weather?city=${city}`
          //"http://api.openweathermap.org/data/2.5/weather?q=" +            city +            "&units=imperial&APPID=2e991483d328650ae67eb0609d0fc654"
        )
        //axios.get("http://api.weatherapi.com/v1/forecast.json?key=ff6cee14345c4052810220417240404&q="+city+"&days=14")
        .then((response) => {
          const data = response.data;
          console.log("Data***");
          console.log(data);
          setLatitude(data.coord.lat);
          setLongitude(data.coord.lon);
          getDetailWeather(data.coord.lat, data.coord.lon);
        });
    } else {
      getDetailWeather(latitude, longitude);
    }
  };

  const getDetailWeather = (lat, lon) => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/forecastDetails?lat=${lat}&lon=${lon}`
        //`http://localhost:5001/api/forecastDetails?lat=${lat}&lon=${lon}`
        /*"https://api.openweathermap.org/data/3.0/onecall?lat=" +
          lat +
          "&lon=" +
          lon +
          "&units=imperial&appid=2e991483d328650ae67eb0609d0fc654"*/
      )
      .then((res) => {
        //Daily data
        let data = res.data;
        console.log(data);
        //let dt = utcToDate(data.current.dt, data.timezone_offset);
        const day = isDay(
          data.current.dt,
          data.current.sunrise,
          data.current.sunset
        );
        const iconImage = day
          ? dayIconImages.get(data.current.weather[0].main)
          : nightIconImages.get(data.current.weather[0].main);
        setWeather({
          formattedDate: getLocalDate(data.current.dt, data.timezone_offset),
          time: getLocalTime(data.current.dt, data.timezone_offset),
          temp_f: Math.trunc(data.current.temp),
          temp_c: Math.trunc(getCelsius(data.current.temp)),
          feelslike_f: Math.trunc(data.current.feels_like),
          pressure: data.current.pressure,
          wind_mph: data.current.wind_speed,
          condition: data.current.weather[0].main,
          condition_text: data.current.weather[0].description,
          condition_icon: getIcon(
            data.current.dt,
            data.current.sunrise,
            data.current.sunset,
            data.current.weather[0].main,
            50,
            context.theme
          ),
          iconImage: iconImage,
          //condition_icon: "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png",
          humidity: data.current.humidity,
          dew_point: data.current.dew_point,
          uvi: data.current.uvi,
        });
        //console.log(data);
        setWeatherDetails(data);
        let dailyList = [];
        data.daily.map((d) => {
          let dt = utcToDate(d.dt, data.timezone_offset);

          const iconImage = dayIconImages.get(d.weather[0].main);

          dailyList.push({
            date: getLocalDate(d.dt, data.timezone_offset),
            day: dt.getDay(),
            tempC: Math.trunc(getCelsius(d.temp.day)),
            tempF: Math.trunc(d.temp.day),
            condition: d.weather[0].description,
            icon: getIcon(
              d.dt,
              d.sunrise,
              d.sunset,
              d.weather[0].main,
              30,
              context.theme
            ),
            iconImage: iconImage,
            wind: d.wind_speed,
            pressure: d.pressure,
            humidity: d.humidity,
            summary: d.summary,
          });
        });
        setDailyList(dailyList);

        //hourly data
        const hours = data.hourly;
        let hourList = [];
        hours.map((h, i) => {
          let dt = utcToDate(h.dt, data.timezone_offset);
          const day = isDay(
            getHours(h.dt, data.timezone_offset),
            getHours(data.current.sunrise, data.timezone_offset),
            getHours(data.current.sunset, data.timezone_offset)
          );

          const iconImage = day
            ? dayIconImages.get(h.weather[0].main)
            : nightIconImages.get(h.weather[0].main);
          if (i < 24) {
            hourList.push({
              time: getLocalTime(h.dt, data.timezone_offset),
              tempC: Math.trunc(getCelsius(h.temp)),
              tempF: Math.trunc(h.temp),
              condition: h.weather[0].description,
              icon: getIconByTime(dt, h.weather[0].main, 30, context.theme),
              background: getBackgroundImage(dt, h.weather[0].main),
              iconImage: iconImage,
              wind: h.wind_speed,
              pressure: h.pressure,
              humidity: h.humidity,
            });
          }
        });
        setHourList(hourList);
      });

    setDisplay(true);
  };

  const fetchAllData = async () => {
    let lines;
    const currentUrl = getServerUrl(window.location.href);
    const response = await axios.get(currentUrl + "/city.txt");
    lines = response.data.split(/\r?\n/);
    let cityWeather = [];
    for (let i in lines) {
      let city = lines[i];
      let weatherInfo;
      const data = await fetchWeatherInfo(city);
      const day = isDay(data.dt, data.sys.sunrise, data.sys.sunset);
      const image = day
        ? dayImages.get(data.weather[0].main)
        : nightImages.get(data.weather[0].main);

      const background = day
        ? dayBgImages.get(data.weather[0].main)
        : nightBgImages.get(data.weather[0].main);

      const backgroundClass = day
        ? dayBgClasses.get(data.weather[0].main)
        : nightBgClasses.get(data.weather[0].main);

      const icon = day
        ? dayIconImages.get(data.weather[0].main)
        : nightIconImages.get(data.weather[0].main);
      //const background = nightBgImages.get("Clouds");
      console.log(data);
      let dt = utcToDate(data.dt, data.timezone);
      weatherInfo = {
        temp_f: Math.trunc(data.main.temp),
        temp_c: Math.trunc(getCelsius(data.main.temp)),
        feelslike_f: Math.trunc(data.main.feels_like),
        pressure: data.main.pressure,
        wind_mph: data.wind.speed,
        condition: data.weather[0].main,
        condition_text: data.weather[0].description,
        condition_icon: getIcon(
          data.dt,
          data.sys.sunrise,
          data.sys.sunset,
          data.weather[0].main,
          50,
          context.theme
        ),
        condition_image: icon,
        //condition_icon: "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png",
        humidity: data.main.humidity,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        date: data.dt,
        time: getLocalTime(data.dt, data.timezone),
        formattedDate: getLocalDate(data.dt, data.timezone),
        image: image,
        background: background,
        bgClass: backgroundClass,
      };

      console.log(weatherInfo);
      /*weatherInfo = {
            temp_f: data.main.temp,
            temp_c: getCelsius(data.main.temp),
            condition_text: data.weather[0].description,
            condition_icon: getIcon(data.dt, data.sys.sunrise, data.sys.sunset, data.weather[0].main),
        } */
      cityWeather.push({
        cityName: city,
        weather: weatherInfo,
      });
    }
    console.log("*****");
    console.log(cityWeather);
    setCityInfoList(cityWeather);
  };

  const fetchWeatherInfo = async (cityName) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/weather?city=${cityName}`
      //`http://localhost:5001/api/weather?city=${cityName}`
      /*"http://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&units=imperial&APPID=2e991483d328650ae67eb0609d0fc654"*/
    );
    //const response = await axios.get("http://api.weatherapi.com/v1/current.json?key=ff6cee14345c4052810220417240404&q="+cityName+"&aqi=no")
    return response.data;
  };

  const getDateString = (date) => {
    //return date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear();
    return date.getMonth() + "/" + date.getDate();
  };

  const getLocalTimeInMS = (dt, tz) => {
    const utc_seconds = parseInt(dt, 10) + parseInt(tz, 10);
    const utc_milliseconds = utc_seconds * 1000;
    return utc_milliseconds;
  };

  const getHours = (dt, tz) => {
    const utc_seconds = parseInt(dt, 10) + parseInt(tz, 10);
    const utc_milliseconds = utc_seconds * 1000;
    const localDate = new Date(utc_milliseconds); //.toUTCString();
    const hours = localDate.getUTCHours();
    return hours;
  };

  const getLocalTime = (dt, tz) => {
    /*const timestamp = data.current.dt * 1000;
    const date = new Date(timestamp);
    const timezoneOffsetSeconds = data.timezone_offset;
    const timezoneOffsetMilliseconds = timezoneOffsetSeconds * 1000;
    const localTimestamp = timestamp + timezoneOffsetMilliseconds;*/
    //const localDate = new Date(localTimestamp);

    const utc_seconds = parseInt(dt, 10) + parseInt(tz, 10);
    const utc_milliseconds = utc_seconds * 1000;
    const localDate = new Date(utc_milliseconds); //.toUTCString();
    const hours = String(localDate.getUTCHours()).padStart(2, "0");
    const minutes = String(localDate.getUTCMinutes()).padStart(2, "0");
    //const seconds = String(localDate.getUTCSeconds()).padStart(2, "0");
    let formattedTime = `${hours}:${minutes}`;
    //return local_date;
    if (hours > 12) {
      formattedTime = hours - 12 + ":" + minutes + " pm";
    } else {
      formattedTime = hours + ":" + minutes + " am";
    }

    console.log("Current Time:", formattedTime);
    return formattedTime;
  };

  const getLocalDate = (dt, tz) => {
    const utc_seconds = parseInt(dt, 10) + parseInt(tz, 10);
    const utc_milliseconds = utc_seconds * 1000;
    const localDate = new Date(utc_milliseconds); //.toUTCString();
    const formattedDate =
      localDate.getUTCMonth() +
      1 +
      "/" +
      localDate.getUTCDate() +
      "/" +
      localDate.getUTCFullYear();

    return formattedDate;
  };

  const getDay = (date) => {
    let year = date.substring(0, 4);
    let month =
      date.substring(5, 7) < 10
        ? date.substring(5, 7).substring(1, 2) - 1
        : date.substring(5, 7) - 1; // 1 is subtracted since JS has months as 0-11, not as 1-12. Why would anyone design it like this??
    let day = date.substring(8, 10);

    var d = new Date();
    d.setFullYear(year);
    d.setMonth(month);
    d.setDate(day);

    return d.getDay();
  };

  const getTime = (dt) => {
    //let time1 = ts.split(" ")[1];
    //let hourstr = time1.split(":")[0];
    let hour1 = dt.getHours();
    let time2 = "";
    if (hour1 > 12) {
      time2 = hour1 - 12 + ":00 pm";
    } else {
      time2 = hour1 + ":00 am";
    }
    return time2;
  };

  const utcToDate = (secs, tz) => {
    // new Date(obj.dt*1000+(obj.timezone*1000))
    return new Date((secs + tz) * 1000);
  };

  const getServerUrl = (url) => {
    let strlist = url.split("/");
    return strlist[0] + "//" + strlist[2];
  };

  const handleClick = (city) => {
    //alert(city);
    setCity(city);
    navigate("/weather/today/" + city);
    context.setSelectedMenu("TODAY");
  };

  const navigateToMenu = (menu) => {
    if (menu === "TODAY") {
      navigate("/weather/today/current");
    } else if (menu === "HOURLY") {
      navigate("/weather/hourly/current");
    } else if (menu === "DAILY") {
      navigate("/weather/daily/current");
    }

    context.setSelectedMenu(menu);
  };

  const contextValue = {
    city: city,
    setCity: setCity,
    latitude: latitude,
    longitude: longitude,
    setLatitude: setLatitude,
    setLongitude: setLongitude,
    currentLocation: currentLocation,
    setCurrentLocation: setCurrentLocation,
    display: display,
    hourList: hourList,
    dailyList: dailyList,
    weatherDetails: weatherDetails,
    weather: weather,
    cityInfoList: cityInfoList,
    //cityRef: cityRef,
    handleClick: handleClick,
    navigateToMenu: navigateToMenu,
  };
  return (
    <WeatherContext.Provider value={contextValue}>
      <main className="d-flex flex-column">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />

            <Route path="/weather" element={<WeatherPage />}>
              <Route
                path="/weather/today/:cityParam"
                element={<WeatherDetails />}
              />
              <Route
                path="/weather/hourly/:cityParam"
                element={<WeatherHourly />}
              />
              <Route
                path="/weather/daily/:cityParam"
                element={<WeatherDaily />}
              />
            </Route>
            <Route path="/cities" element={<WeatherCityList />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Outlet />
    </WeatherContext.Provider>
  );
}
