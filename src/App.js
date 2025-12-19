import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import { getWeather } from "./api/weatherApi";
import "./styles/app.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = useCallback(async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }
    
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError("City not found. Please try again.");
    } finally {
      setTimeout(() => setLoading(false), 500);
    }
  }, [city]);

  const handleCityClick = (cityName) => {
    setCity(cityName);
    setTimeout(() => searchWeather(), 100);
  };

  return (
    <motion.div 
      className={`app ${weather ? weather.weather[0].main.toLowerCase() : 'default'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="animated-bg">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
      
      <div className="app-content">
        <motion.header 
          className="app-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="title">
            <span className="title-icon">🌤️</span>
            Weatherly
          </h1>
          <p className="subtitle">Discover weather magic anywhere</p>
        </motion.header>
        
        <main className="container">
          <motion.div 
            className="search-container"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <SearchBox 
              city={city} 
              setCity={setCity} 
              onSearch={searchWeather}
            />
          </motion.div>

          <AnimatePresence mode="wait">
            {loading && (
              <motion.div
                key="loader"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <Loader />
              </motion.div>
            )}
            
            {!loading && error && (
              <motion.div 
                className="error-message"
                key="error"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <span className="error-icon">⚠️</span>
                <p className="error-text">{error}</p>
              </motion.div>
            )}
            
            {!loading && weather && (
              <motion.div
                key="weather"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <WeatherCard data={weather} />
              </motion.div>
            )}
            
            {!loading && !weather && !error && (
              <motion.div 
                className="welcome-container"
                key="welcome"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="welcome-icon">🌍</div>
                <div className="welcome-content">
                  <h2>Welcome to Weatherly</h2>
                  <p>Enter a city name to get started</p>
                  <div className="example-cities">
                    {["New York", "London", "Tokyo", "Paris", "Sydney", "Dubai"].map((cityName) => (
                      <motion.button
                        key={cityName}
                        className="city-tag"
                        onClick={() => handleCityClick(cityName)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {cityName}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        
        <motion.footer 
          className="app-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p>Powered by OpenWeather API</p>
        </motion.footer>
      </div>
    </motion.div>
  );
}

export default App;