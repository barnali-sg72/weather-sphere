import {
  WiDayCloudy,
  WiDaySunny,
  WiDayRain,
  WiDaySnow,
  WiDayShowers,
  WiDayFog,
  WiNightRain,
  WiNightClear,
  WiNightCloudy,
  WiNightSnow,
  WiNightShowers,
  WiDayThunderstorm,
  WiNightThunderstorm,
  WiDayHaze,
  WiNightFog,
  WiSleet,
  WiNightSleet,
  WiDaySleet,
  WiSmoke,
} from "react-icons/wi";
import dayClouds from "../../assets/images/background/day-cloud.jpg";
import dayClear from "../../assets/images/background/day-clear.jpg";
import dayRain from "../../assets/images/background/day-rain1.jpg";
import dayDrizzle from "../../assets/images/background/day-rain.jpg";
import daySnow from "../../assets/images/background/day-snow.jpg";
import dayFog from "../../assets/images/background/day-fog.jpg";
import dayThunder from "../../assets/images/background/day-thunder.jpg";
import dayMist from "../../assets/images/background/day-mist.jpg";
import dayHaze from "../../assets/images/background/day-fog1.jpg";

import nightClouds from "../../assets/images/background/night-cloud.jpg";
import nightClear from "../../assets/images/background/night-clear.jpg";
import nightRain from "../../assets/images/background/night-rain1.jpg";
import nightDrizzle from "../../assets/images/background/night-rain.jpg";
import nightSnow from "../../assets/images/background/night-snow.jpg";
import nightFog from "../../assets/images/background/night-fog.jpg";
import nightThunder from "../../assets/images/background/night-thunder.jpg";
import nightMist from "../../assets/images/background/night-mist.jpg";
import nightHaze from "../../assets/images/background/night-haze.jpg";

import dayCloudsIcon from "../../assets/images/icons/day-clouds.png";
import dayClearIcon from "../../assets/images/icons/sun1.png";
import dayRainIcon from "../../assets/images/icons/rain.png";
import dayDrizzleIcon from "../../assets/images/icons/drizzle.png";
import daySnowIcon from "../../assets/images/icons/snow.png";
import dayFogIcon from "../../assets/images/icons/day-fog.png";
import dayThunderIcon from "../../assets/images/icons/thunderstorm.png";
import dayMistIcon from "../../assets/images/icons/day-mist.png";
import dayHazeIcon from "../../assets/images/icons/day-haze.png";

import nightCloudsIcon from "../../assets/images/icons/night-cloud.png";
import nightClearIcon from "../../assets/images/icons/moon.png";
import nightRainIcon from "../../assets/images/icons/rain.png";
import nightDrizzleIcon from "../../assets/images/icons/drizzle.png";
import nightSnowIcon from "../../assets/images/icons/snow.png";
import nightFogIcon from "../../assets/images/icons/night-fog.png";
import nightThunderIcon from "../../assets/images/icons/thunderstorm.png";
import nightMistIcon from "../../assets/images/icons/night-mist.png";
import nightHazeIcon from "../../assets/images/icons/night-haze.png";

import moment from "moment";

/*export const dayIcons = new Map([
    ["Clouds", <WiDayCloudy  size={50} color='#fff'/>],
    ["Clear", <WiDaySunny size={50} color='yellow'/>],
    ["Rain", <WiDayRain size={50} color='#fff'/>],
    ["Drizzle", <WiDayShowers size={50} color='#fff'/>],
    ["Snow", <WiDaySnow size={50} color='#fff'/>],
    ["Fog", <WiDayFog size={50} color='#fff'/>],
    ["Thunderstorm", <WiDayThunderstorm size={50} color='#fff'/>],
    ["Mist", <WiDaySleet size={50} color='#fff'/>],
    ["Haze", <WiDayHaze size={50} color='#fff'/>]
]);

export const nightIcons = new Map([
    ["Clouds", <WiNightCloudy size={50} color='#fff'/>],
    ["Clear", <WiNightClear size={50} color='#fff'/>],
    ["Rain", <WiNightRain size={50} color='#fff'/>],
    ["Drizzle", <WiNightShowers size={50} color='#fff'/>],
    ["Snow", <WiNightSnow size={50} color='#fff'/>],
    ["Fog", <WiNightFog size={50} color='#fff'/>],
    ["Thunderstorm", <WiNightThunderstorm size={50} color='#fff'/>],
    ["Mist", <WiSleet size={50} color='#fff'/>],
    ["Haze", <WiNightSleet size={50} color='#fff'/>]
]);*/
export const dayImages = new Map([
  ["Clouds", dayClouds],
  ["Clear", dayClear],
  ["Rain", dayRain],
  ["Drizzle", dayDrizzle],
  ["Snow", daySnow],
  ["Fog", dayFog],
  ["Thunderstorm", dayThunder],
  ["Mist", dayMist],
  ["Haze", dayHaze],
  ["Smoke", dayHaze],
]);

export const nightImages = new Map([
  ["Clouds", nightClouds],
  ["Clear", nightClear],
  ["Rain", nightRain],
  ["Drizzle", nightDrizzle],
  ["Snow", nightSnow],
  ["Fog", nightFog],
  ["Thunderstorm", nightThunder],
  ["Mist", nightMist],
  ["Haze", nightHaze],
  ["Smoke", nightHaze],
]);

export const dayIconImages = new Map([
  ["Clouds", dayCloudsIcon],
  ["Clear", dayClearIcon],
  ["Rain", dayRainIcon],
  ["Drizzle", dayDrizzleIcon],
  ["Snow", daySnowIcon],
  ["Fog", dayFogIcon],
  ["Thunderstorm", dayThunderIcon],
  ["Mist", dayMistIcon],
  ["Haze", dayHazeIcon],
  ["Smoke", dayHazeIcon],
]);

export const nightIconImages = new Map([
  ["Clouds", nightCloudsIcon],
  ["Clear", nightClearIcon],
  ["Rain", nightRainIcon],
  ["Drizzle", nightDrizzleIcon],
  ["Snow", nightSnowIcon],
  ["Fog", nightFogIcon],
  ["Thunderstorm", nightThunderIcon],
  ["Mist", nightMistIcon],
  ["Haze", nightHazeIcon],
  ["Smoke", nightHazeIcon],
]);

export const dayBgClasses = new Map([
  ["Clouds", "day-cloud"],
  ["Clear", "day-clear"],
  ["Rain", "day-rain"],
  ["Drizzle", "day-drizzle"],
  ["Snow", "day-snow"],
  ["Fog", "day-fog"],
  ["Thunderstorm", "day-thunderstorm"],
  ["Mist", "day-mist"],
  ["Haze", "day-haze"],
  ["Smoke", "day-haze"],
]);

export const nightBgClasses = new Map([
  ["Clouds", "night-cloud"],
  ["Clear", "night-clear"],
  ["Rain", "night-rain"],
  ["Drizzle", "night-drizzle"],
  ["Snow", "night-snow"],
  ["Fog", "night-fog"],
  ["Thunderstorm", "night-thunderstorm"],
  ["Mist", "night-mist"],
  ["Haze", "night-haze"],
  ["Smoke", "night-haze"],
]);

export const dayBgImages = new Map([
  [
    "Clouds",
    "linear-gradient(to bottom,rgba(103, 149, 180, 0.86), rgba(64, 136, 170, 0.806), rgba(30, 126, 171, 0.8) 70%)",
  ],

  [
    "Clear",
    "linear-gradient(to bottom,rgba(253, 241, 206, 0.97),rgba(248, 201, 48, 0.67), rgba(176, 115, 2, 0.61))",
  ],
  [
    "Rain",
    "linear-gradient(225deg, rgba(132, 193, 236, 0.8),  rgba(84, 129, 164, 0.9),  rgba(57, 93, 131, 0.8) 80% )",
  ],
  [
    "Drizzle",
    "linear-gradient(to bottom,#8cb8c2e8,#82bfceea, rgba(42, 116, 129, 0.7) 70%)",
  ],
  [
    "Snow",
    "linear-gradient(225deg, #81c5f5cf,  #6ecdf9d7, rgba(51, 174, 232, 0.863) 70%)",
  ],
  [
    "Fog",
    "linear-gradient(225deg, rgba(231, 236, 240, 0.87),  rgba(191, 232, 250, 0.86),   rgba(125, 165, 184, 0.897),  rgba(96, 134, 154, 0.8))",
  ],
  [
    "Thunderstorm",
    "linear-gradient(225deg,rgba(193, 201, 254, 0.81), #8d75c1bb, rgba(95, 92, 192, 0.57) 70%)",
  ],
  [
    "Mist",
    "linear-gradient(225deg, rgba(204, 221, 247, 0.9), rgba(138, 165, 207, 0.845),rgba(120, 148, 192, 0.9) 70%)",
  ],
  [
    "Haze",
    "linear-gradient(225deg,rgba(245, 216, 159, 0.85),rgba(197, 165, 104, 0.82), rgba(120, 102, 67, 0.8) 70%) ",
  ],
  [
    "Smoke",
    "linear-gradient(225deg,rgba(245, 216, 159, 0.85),rgba(197, 165, 104, 0.82), rgba(120, 102, 67, 0.8) 70%) ",
  ],
]);

export const nightBgImages = new Map([
  [
    "Clouds",
    "linear-gradient( 225deg, rgba(13, 3, 24, 0.85), rgba(50, 32, 67, 0.84), rgba(39, 25, 49, 0.63) 70% )",
  ],
  /*[
    "Clear",
    "linear-gradient(to bottom,rgba(11, 12, 29, 0.84) ,rgba(37, 44, 116, 0.85), rgba(240, 187, 65, 0.74), rgba(37, 44, 116, 0.66)70%,rgba(11, 12, 29, 0.91))",
  ],*/
  [
    "Clear",
    "linear-gradient(to bottom,rgba(11, 12, 29, 0.5) 10%, rgba(37, 44, 116, 0.5) 70%, rgba(11, 12, 29, 0.5))",
  ],
  [
    "Rain",
    "linear-gradient(225deg,rgba(15, 32, 39, 0.87), #203a43d5, rgba(44, 83, 100, 0.78) 70%)",
  ],
  [
    "Drizzle",
    "linear-gradient(225deg, #0d1b2ad6, #1b263bd6, rgba(65, 90, 119, 0.78) 70%)",
  ],
  [
    "Snow",
    "linear-gradient(  225deg, rgba(1, 58, 86, 0.902),  rgba(13, 49, 72, 0.904),       rgba(74, 119, 156, 0.72) 70%   )",
  ],
  [
    "Fog",
    "linear-gradient(to bottom,rgba(133, 146, 164, 0.86) 20%,rgba(73, 81, 91, 0.87) 50%, #222830af)",
  ],
  [
    "Thunderstorm",
    "linear-gradient(  225deg, rgba(21, 39, 65, 0.753),  rgba(38, 12, 82, 0.792),  rgba(99, 65, 154, 0.532) 70%   )",
  ],
  [
    "Mist",
    "linear-gradient(to bottom, rgba(17, 24, 41, 0.88), rgba(30, 44, 74, 0.87),   rgba(64, 107, 154, 0.75) 90%)",
  ],
  [
    "Haze",
    "linear-gradient(   to bottom, rgba(24, 18, 12, 0.88), rgba(123, 93, 62, 0.88), rgba(210, 155, 100, 0.811) 80% )",
  ],
  [
    "Smoke",
    "linear-gradient(   to bottom, rgba(24, 18, 12, 0.88), rgba(123, 93, 62, 0.88), rgba(210, 155, 100, 0.811) 80% )",
  ],
]);

let current = {
  latitude: 0,
  longitude: 0,
};

export function findIcon(condition, size, day, theme) {
  const dayIcons = new Map([
    ["Clouds", <WiDayCloudy size={size} color="#fff" />],
    ["Clear", <WiDaySunny size={size} color="gold" />],
    ["Rain", <WiDayRain size={size} color="#fff" />],
    ["Drizzle", <WiDayShowers size={size} color="#fff" />],
    ["Snow", <WiDaySnow size={size} color="#fff" />],
    ["Fog", <WiDayFog size={size} color="#fff" />],
    ["Thunderstorm", <WiDayThunderstorm size={size} color="#fff" />],
    ["Mist", <WiDaySleet size={size} color="#fff" />],
    ["Haze", <WiDayHaze size={size} color="#fff" />],
    ["Smoke", <WiSmoke size={size} color="#fff" />],
  ]);

  const nightIcons = new Map([
    ["Clouds", <WiNightCloudy size={size} color="#fff" />],
    ["Clear", <WiNightClear size={size} color="#fff" />],
    ["Rain", <WiNightRain size={size} color="#fff" />],
    ["Drizzle", <WiNightShowers size={size} color="#fff" />],
    ["Snow", <WiNightSnow size={size} color="#fff" />],
    ["Fog", <WiNightFog size={size} color="#fff" />],
    ["Thunderstorm", <WiNightThunderstorm size={size} color="#fff" />],
    ["Mist", <WiSleet size={size} color="#fff" />],
    ["Haze", <WiNightSleet size={size} color="#fff" />],
    ["Smoke", <WiSmoke size={size} color="#fff" />],
  ]);

  const dayLightIcons = new Map([
    ["Clouds", <WiDayCloudy size={size} color="#8696ee" />],
    ["Clear", <WiDaySunny size={size} color="#fbbf24" />],
    ["Rain", <WiDayRain size={size} color="#8696ee" />],
    ["Drizzle", <WiDayShowers size={size} color="#8696ee" />],
    ["Snow", <WiDaySnow size={size} color="#8696ee" />],
    ["Fog", <WiDayFog size={size} color="#8696ee" />],
    ["Thunderstorm", <WiDayThunderstorm size={size} color="#8696ee" />],
    ["Mist", <WiDaySleet size={size} color="#8696ee" />],
    ["Haze", <WiDayHaze size={size} color="#8696ee" />],
    ["Smoke", <WiSmoke size={size} color="#8696ee" />],
  ]);

  const nightLightIcons = new Map([
    ["Clouds", <WiNightCloudy size={size} color="#646fab" />],
    ["Clear", <WiNightClear size={size} color="#646fab" />],
    ["Rain", <WiNightRain size={size} color="#646fab" />],
    ["Drizzle", <WiNightShowers size={size} color="#646fab" />],
    ["Snow", <WiNightSnow size={size} color="#646fab" />],
    ["Fog", <WiNightFog size={size} color="#646fab" />],
    ["Thunderstorm", <WiNightThunderstorm size={size} color="#646fab" />],
    ["Mist", <WiSleet size={size} color="#646fab" />],
    ["Haze", <WiNightSleet size={size} color="#646fab" />],
    ["Smoke", <WiSmoke size={size} color="#646fab" />],
  ]);

  if (day) {
    console.log("*****" + theme);
    if (theme === "dark") return dayIcons.get(condition);
    else return dayLightIcons.get(condition);
  } else {
    if (theme === "dark") return nightIcons.get(condition);
    else return nightLightIcons.get(condition);
  }
}

export function getCelsius(temp) {
  return ((temp - 32) / 1.8).toFixed(2);
}

export const isDay = (time, sunrise, sunset) => {
  if (time > sunrise && time < sunset) {
    return true;
  } else {
    return false;
  }
};

export const getIcon = (time, sunrise, sunset, condition, size, theme) => {
  const day = isDay(time, sunrise, sunset);
  return findIcon(condition, size, day, theme);
};

export const getBackgroundImage = (date, condition) => {
  let hrs = date.getHours();
  let day = false;
  if (hrs > 6 && hrs < 19) {
    day = true;
  }

  return day ? dayBgImages.get(condition) : nightBgImages.get(condition);
};

export const getIconByTime = (date, condition, size, theme) => {
  let hrs = date.getHours();
  let day = false;
  if (hrs > 6 && hrs < 19) {
    day = true;
  }
  return findIcon(condition, size, day, theme);
};

export const getTime = (secs, tz) => {
  //const date = new Date((secs + tz) * 1000);
  //return date.toLocaleTimeString();
  let x = moment.utc(secs, "X").add(tz, "seconds").format("HH:mm a");
  return x;
};

export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      current.latitude = pos.coords.latitude;
      current.longitude = pos.coords.longitude;
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

export function getCurrentLocation(position) {
  return current;
}
