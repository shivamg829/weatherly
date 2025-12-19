import { FaWind, FaTint, FaThermometerHalf, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { motion } from "framer-motion";

const getWeatherIcon = (main) => {
  switch (main.toLowerCase()) {
    case 'clear':
      return '☀️';
    case 'clouds':
      return '☁️';
    case 'rain':
    case 'drizzle':
      return '🌧️';
    case 'thunderstorm':
      return '⛈️';
    case 'snow':
      return '❄️';
    default:
      return '🌡️';
  }
};

const WeatherCard = ({ data }) => {
  const weatherMain = data.weather[0].main;
  const weatherDescription = data.weather[0].description;
  const icon = getWeatherIcon(weatherMain);

  return (
    <motion.div
      className="weather-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-header">
        <h2 className="city-name">{data.name}, {data.sys.country}</h2>
      </div>

      <div className="weather-summary">
        <span className="weather-icon">{icon}</span>
        <h1 className="temperature">{Math.round(data.main.temp)}°C</h1>
        <p className="description">
          {weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}
        </p>
      </div>

      <div className="temp-range">
        <p className="high-temp">
          <FaArrowUp /> {Math.round(data.main.temp_max)}°C
        </p>
        <p className="low-temp">
          <FaArrowDown /> {Math.round(data.main.temp_min)}°C
        </p>
      </div>

      <div className="details-grid">
        <motion.div 
          className="detail-item"
          whileHover={{ scale: 1.05 }}
        >
          <FaTint className="detail-icon" />
          <span>Humidity</span>
          <span className="detail-value">{data.main.humidity}%</span>
        </motion.div>
        
        <motion.div 
          className="detail-item"
          whileHover={{ scale: 1.05 }}
        >
          <FaWind className="detail-icon" />
          <span>Wind</span>
          <span className="detail-value">{data.wind.speed} m/s</span>
        </motion.div>
        
        <motion.div 
          className="detail-item"
          whileHover={{ scale: 1.05 }}
        >
          <FaThermometerHalf className="detail-icon" />
          <span>Feels Like</span>
          <span className="detail-value">{Math.round(data.main.feels_like)}°C</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;