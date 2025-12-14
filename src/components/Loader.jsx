const Loader = () => {
  return (
    <div className="loader-container">
      <div className="weather-loader">
        {/* Visual elements for the loader (e.g., sun rays) */}
        <div className="sun"></div> 
        <div className="ray ray-1"></div>
        <div className="ray ray-2"></div>
        <div className="ray ray-3"></div>
      </div>
      <p className="loading-text">Fetching weather data...</p>
    </div>
  );
};

export default Loader;