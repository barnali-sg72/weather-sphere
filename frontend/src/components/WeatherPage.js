import { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { WeatherContext } from "./Main";
import axios from "axios";
import { dayImages, nightImages, isDay } from "./utils/utils";

export default function WeatherPage() {
  const { cityParam } = useParams();
  const navigate = useNavigate();
  const context = useContext(WeatherContext);
  const location = useLocation();
  //const [bgStyle, setBgStyle] = useState({});
  const [imgStyle, setImgStyle] = useState({});
  const [image, setImage] = useState({});

  useEffect(() => {
    if (context.city === "") {
      if (
        cityParam !== undefined &&
        cityParam !== null &&
        cityParam !== "current"
      ) {
        context.setCity(decodeURIComponent(cityParam));
      } else {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((pos) => {
            context.setLatitude(pos.coords.latitude);
            context.setLongitude(pos.coords.longitude);
            axios
              .get(
                `${process.env.REACT_APP_BACKEND_URL}/api/city?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
                //`https://localhost:5001/api/weather/current?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
                //`https://api.openweathermap.org/geo/1.0/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&limit=5&appid=2e991483d328650ae67eb0609d0fc654`
              )
              .then((res) => {
                const response = res.data[0];
                const cityInfo = response.name + ", " + response.country;
                context.setCity(cityInfo);
                //alert(location.pathname.replace("current", cityInfo));
                navigate(location.pathname.replace("current", cityInfo));
              })
              .catch((err) => {
                console.error("Error fetching current weather:" + err);
              });
          });
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      }
    } else {
      if (cityParam !== "current" && cityParam !== context.city) {
        context.setCity(decodeURIComponent(cityParam));
      } else {
        context.setCity(context.city);
      }
      navigate(location.pathname.replace("current", context.city));
    }
  }, [cityParam]);

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

      setImage(image);
      setImgStyle({
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",

        objectFit: `cover`,
        objectPosition: `center`,
        zIndex: 0,
      });

      /*setBgStyle({
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url("${image}")`,
        backgroundSize: `cover`,
        backgroundPosition: `center center`,
        backgroundAttachment: `fixed`,
        backgroundRepeat: `no-repeat`,
        zIndex: 0,
      });*/
    }
  }, [context]);

  return (
    <>
      <div className="weather-bg">
        <img src={image} alt="weather background" style={imgStyle} />
      </div>
      <Outlet />
    </>
  );
}
