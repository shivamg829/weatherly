const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <h1>{data.main.temp}°C</h1>
      <p>{data.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
