import { FaWind, FaTint, FaThermometerHalf, FaArrowUp, FaArrowDown } from 'react-icons/fa';
// Import the motion component from Framer Motion
import { motion } from "framer-motion";

// Helper to determine the weather icon (simplified example)
const getWeatherIcon = (main) => {
  switch (main.toLowerCase()) {
    case 'clear':
      return '☀️'; // Sun
    case 'clouds':
      return '☁️'; // Cloud
    case 'rain':
    case 'drizzle':
      return '🌧️'; // Rain Cloud
    case 'thunderstorm':
      return '⛈️'; // Thunderstorm
    case 'snow':
      return '❄️'; // Snowflake
    default:
      return '🌡️'; // Thermometer
  }
};

const WeatherCard = ({ data }) => {
  const weatherMain = data.weather[0].main;
  const weatherDescription = data.weather[0].description;
  const icon = getWeatherIcon(weatherMain);
  
  // Define the animation properties
  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        } 
    },
  };

  return (
    <motion.div
      className={`weather-card ${weatherMain.toLowerCase()}`}
      variants={cardVariants}
      initial="initial"
      animate="animate"
    >
      <div className="card-header">
        <h2 className="city-name">{data.name}, {data.sys.country}</h2>
      </div>

      <div className="weather-summary">
        <span className="weather-icon">{icon}</span>
        <h1 className="temperature">{Math.round(data.main.temp)}°C</h1>
        <p className="description">{weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}</p>
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
        <div className="detail-item">
          <FaTint className="detail-icon" />
          <span>Humidity</span>
          <span className="detail-value">{data.main.humidity}%</span>
        </div>
        
        <div className="detail-item">
          <FaWind className="detail-icon" />
          <span>Wind Speed</span>
          <span className="detail-value">{data.wind.speed} m/s</span>
        </div>
        
        <div className="detail-item">
          <FaThermometerHalf className="detail-icon" />
          <span>Feels Like</span>
          <span className="detail-value">{Math.round(data.main.feels_like)}°C</span>
        </div>
      </div>
      
    </motion.div>
  );
};

export default WeatherCard;