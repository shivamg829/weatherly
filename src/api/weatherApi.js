const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) throw new Error("City not found");
  return response.json();
};
