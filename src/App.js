import { useState, useCallback } from "react"; // Added useCallback
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
  // NEW: State key for animation control
  const [weatherKey, setWeatherKey] = useState(0); 

  // Use useCallback to memoize the function (good practice)
  const searchWeather = useCallback(async () => {
    if (!city.trim()) { // Trim whitespace for better validation
        setError("Please enter a city name.");
        return;
    }
    
    setLoading(true);
    setError("");
    setWeather(null); // Clear previous weather data

    try {
      const data = await getWeather(city);
      setWeather(data);
      // NEW: Increment key to force WeatherCard animation on success
      setWeatherKey(prevKey => prevKey + 1); 
    } catch (err) {
      setError("City not found. Please try again.");
    } finally {
      // Small delay to ensure the UI transition is smooth
      setTimeout(() => setLoading(false), 500); 
    }
  }, [city]); // Dependency array includes 'city'

  return (
    // Pass the weather condition to the app div for dynamic background
    <div 
        className={`app ${weather ? weather.weather[0].main.toLowerCase() : ''}`}
    >
      <h1 className="title">Weatherly 🌤️</h1>
      <main className="container"> 
        <SearchBox city={city} setCity={setCity} onSearch={searchWeather} />

        {loading && <Loader />}
        
        {/* Conditional rendering for error and data */}
        {!loading && error && <p className="error">{error}</p>}
        
        {/* Pass the key for animation control */}
        {!loading && weather && <WeatherCard key={weatherKey} data={weather} />} 
      </main>
    </div>
  );
}

export default App;