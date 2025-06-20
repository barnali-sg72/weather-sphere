import React, { useEffect, useState, useRef, useContext } from "react";
//import { AddressContext } from "../../context/address/Address";
//import { isForecastValid } from "../../utils/validityHelper";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../leaflet-openweathermap.css";
import "./leaflet-openweathermap";

// OWM leaflet map component with rain, cloud and precipitation Forecast
const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

function ForecastMap({latitude, longitude}) {
  const [leafletMap, setLeafletMap] = useState(null);
  //const addressContext = useContext(AddressContext);
  const mapRef = useRef(null);
  const WEATHER_API_KEY = "01caba701543f5c5621534314b509ff7";

  const isForecastValid = () => {
    // api specific - metaweather returns detail as not found
    return leafletMap && latitude && longitude;
  };

  function myOwmMarker(data) {
	// just a Leaflet default marker
	return L.marker([latitude, longitude]);
  }

  function myOwmPopup(data) {
    // just a Leaflet default popup with name as content
    return L.popup().setContent(data.name);
  }  

  useEffect(() => {
    const osm = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors</a>',
      }
    );
    const clouds = L.OWM.clouds({
      showLegend: true,
      opacity: 0.9,
      appId: WEATHER_API_KEY,
    });
    const rain = L.OWM.rainClassic({ appId: WEATHER_API_KEY });
    const wind = L.OWM.wind({ appId: WEATHER_API_KEY });
    const city = L.OWM.current({ intervall: 60, markerFunction: myOwmMarker, 
        popupFunction: myOwmPopup, appId: WEATHER_API_KEY });
    const map = L.map("map", { layers: [osm] });
    const overlayMaps = {
      City: city,
      Clouds: clouds,
      Rain: rain,
      "Wind speed": wind,
    };
    const baseMaps = { "OSM Standard": osm };
    L.control.layers(baseMaps, overlayMaps).addTo(map);
    setLeafletMap(map);

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (isForecastValid(latitude)) {
      leafletMap.setView(
        [latitude, longitude],
        13
      );
    }
  }, [latitude, longitude, leafletMap]);

  return <div ref={mapRef} id="map" style={{padding: 0, margin: 0, width: "100%", height: "100vh"}} 
    className="p-2"></div>;
}

export default ForecastMap;