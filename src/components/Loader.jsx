const Loader = () => {
  return (
    <div className="loader-container">
      <div className="weather-loader">
        <div className="loader-sun"></div>
        <div className="loader-ray ray-1"></div>
        <div className="loader-ray ray-2"></div>
        <div className="loader-ray ray-3"></div>
        <div className="loader-ray ray-4"></div>
        <div className="loader-ray ray-5"></div>
        <div className="loader-ray ray-6"></div>
      </div>
      <p className="loading-text">
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
        Weather Loading
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
      </p>
    </div>
  );
};

export default Loader;