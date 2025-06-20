// WeatherCard.js
export default function WeatherCard({ city, temp, icon, condition }) {
  return (
    <div className="card text-center mx-2" style={{ width: "12rem" }}>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        className="card-img-top mx-auto"
        alt={condition}
        style={{ width: "80px", height: "80px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{city}</h5>
        <p className="card-text display-6">{temp}°C</p>
        <p className="card-text text-muted">{condition}</p>
      </div>
    </div>
  );
}
