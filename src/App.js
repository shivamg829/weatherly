import { useState } from 'react';
import SearchBox from './components/SearchBox';
import WeatherCard from './components/WeatherCard';
import { getWeather } from './api/weatherApi';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const searchWeather = async () => {
    const data = await getWeather(city);
    setWeather(data);
  };

  return (
    <div className="app">
      <SearchBox city={city} setCity={setCity} onSearch={searchWeather} />
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
