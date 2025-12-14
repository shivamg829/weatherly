import { motion } from "framer-motion";

const WeatherCard = ({ data }) => (
  <motion.div
    className="weather-card"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <h2>{data.name}</h2>
    <h1>{data.main.temp}°C</h1>
    <p>{data.weather[0].description}</p>
  </motion.div>
);

export default WeatherCard;
