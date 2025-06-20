import { MapContainer, Marker, Popup, TileLayer, ImageOverlay, LayersControl } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";

export default function Map({latitude, longitude, zoom, checked, height}) {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = '01caba701543f5c5621534314b509ff7';
    //const latitude = 50.905;
    //const longitude = 6.500;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`   

                );
                const data = await response.json();   

                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, [latitude, longitude]);

    return (
        <MapContainer center={[latitude, longitude]} zoom={zoom} scrollWheelZoom={false} key={latitude} cities={true}
            style={{ height:`${height}`, width: "100%", borderRadius: "10px" }}>
            
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <LayersControl position="topright">
                <LayersControl.BaseLayer name="Temperature" checked={checked === "Temperature" ? true: false}>
                    <TileLayer
                        url={`https://{s}.tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=01caba701543f5c5621534314b509ff7`}
                        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Rain" checked={checked === "Rain" ? true: false}>
                    <TileLayer
                        url={`https://{s}.tile.openweathermap.org/map/rain_new/{z}/{x}/{y}.png?appid=01caba701543f5c5621534314b509ff7`}
                        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Clouds" checked={checked === "Clouds" ? true: false}>
                    <TileLayer
                        url={`https://{s}.tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=01caba701543f5c5621534314b509ff7`}
                        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Wind" checked={checked === "Wind" ? true: false}>
                    <TileLayer
                        url={`https://{s}.tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=01caba701543f5c5621534314b509ff7`}
                        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Precipitation" checked={checked === "Precipitation" ? true: false}>
                    <TileLayer
                        url={`https://{s}.tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=01caba701543f5c5621534314b509ff7`}
                        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Pressure" checked={checked === "Pressure" ? true: false}>
                    <TileLayer
                        url={`https://{s}.tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=01caba701543f5c5621534314b509ff7`}
                        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Snow" checked={checked === "Snow" ? true: false}>
                    <TileLayer
                        url={`https://{s}.tile.openweathermap.org/map/snow_new/{z}/{x}/{y}.png?appid=01caba701543f5c5621534314b509ff7`}
                        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Clear Map" checked={checked === "Clear Map" ? true: false}>
                    <TileLayer
                        url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                    />
                </LayersControl.BaseLayer>
            </LayersControl>    
            {/*<TileLayer
                        url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                    /> 
            <TileLayer
                        url={`https://{s}.tile.openweathermap.org/map/rain_new/{z}/{x}/{y}.png?appid=01caba701543f5c5621534314b509ff7`}
                        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                    />*/}   
            
           { weatherData && (
                <>
                    <Marker position={[latitude, longitude]}>
                        <Popup>
                            Temperature: {weatherData.main.temp}°C<br />
                            Description: {weatherData.weather[0].description}
                        </Popup>
                    </Marker>
                </>
            )          
            }
        </MapContainer>
        
    )
}