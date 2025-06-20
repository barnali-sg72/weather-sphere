import { useNavigate } from "react-router-dom";

import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { use } from "react";

export default function HorizontalScroll({ weatherData, getBackground }) {
  const [step, setStep] = useState(4);
  const [displaySet, setDisplaySet] = useState([]);
  //const [startIndex, setStartIndex] = useState(0);
  let startIndex = 0;

  const matches600 = window.matchMedia(
    "only screen and (min-width: 600px)"
  ).matches;
  const matches768 = window.matchMedia(
    "only screen and (min-width: 768px)"
  ).matches;
  const matches992 = window.matchMedia(
    "only screen and (min-width: 992px)"
  ).matches;

  const [isLeftArrowDisabled, setLeftArrowDisabled] = useState(true);
  const [isRightArrowDisabled, setRightArrowDisabled] = useState(false);

  /*useEffect(() => {
    let step = matches992 ? 4 : matches768 ? 3 : matches600 ? 2 : 1;
    setStep(step);
    setDisplaySet(weatherData.slice(startIndex, startIndex + step));
    //setLeftArrowDisabled(false);
    //setRightArrowDisabled(false);
    /*if (startIndex <= 0) {
      //setStartIndex(weatherData.length - 1);
      //setLeftArrowDisabled(true);
    } else if (startIndex + step >= weatherData.length - 1) {
      //setRightArrowDisabled(true);
      setStartIndex(0);
    }*/
  /*if (startIndex < 0) {
      setStartIndex(weatherData.length - 1);
    } else if (startIndex >= weatherData.length) {
      setStartIndex(0);
    }*/
  /*}, [weatherData]);*/

  /*useEffect(() => {
    console.log("here 4");
  }, [displaySet]);*/

  useEffect(() => {
    let step = matches992 ? 4 : matches768 ? 3 : matches600 ? 2 : 1;
    //setDisplaySet(weatherData.slice(startIndex, startIndex + step));
    setStep(step);
    console.log("in here 1");
    //setStartIndex(startIndex + step);
    const interval = setInterval(() => {
      console.log("in here 2");
      console.log("startIndex", startIndex);
      console.log("step", step);
      //setStartIndex((prev) => prev + step);
      setDisplaySet(weatherData.slice(startIndex, startIndex + step));
      startIndex += step;

      if (startIndex < 0) {
        startIndex = weatherData.length - 1;
      } else if (startIndex >= weatherData.length) {
        startIndex = 0;
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleLeftButtonClick = () => {
    startIndex -= step;
  };

  const handleRightButtonClick = () => {
    startIndex += step;
  };

  return (
    <section className="city-carousel d-flex w-100 flex-grow-1 gap-2 py-2">
      <FaArrowAltCircleLeft
        color="#578aca"
        size={50}
        className={
          isLeftArrowDisabled
            ? "align-self-center arrow-button arrow-disabled"
            : "arrow-button align-self-center"
        }
        onClick={() => handleLeftButtonClick()}
      />
      <section className="d-flex city-data flex-nowrap justify-content-between align-items-center flex-grow-1">
        {displaySet.map((c, k) => (
          <article
            className="city-card"
            style={getBackground(c.weather)}
            key={k}
          >
            {/*<div className="condicon align-self-center text-center">
                    {c.weather.condition_icon}
                  </div>*/}
            <div className="align-self-end head text-center">
              <h4 className="name">{c.cityName.split(",")[0]}</h4>
              <p className="cond">{c.weather.condition}</p>
            </div>
            <div className="align-self-center text-center">
              <h4 className="temp color-gold">
                {/*<WiThermometer color="goldenrod" size={40} />*/}
                {c.weather.temp_f}&deg;F
              </h4>
              <p>{c.weather.temp_c}&deg;C</p>
            </div>
          </article>
        ))}
      </section>
      <FaArrowCircleRight
        color="#578aca"
        size={50}
        className={
          isRightArrowDisabled
            ? "align-self-center arrow-button arrow-disabled"
            : "arrow-button align-self-center"
        }
        onClick={() => handleRightButtonClick()}
      />
    </section>
  );
}
