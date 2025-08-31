import { createContext, useContext, useState } from "react";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiFog,
  WiThunderstorm,
} from "react-icons/wi";

export const weatherIcons = {
  Thunderstorm: <WiThunderstorm size={64} />,
  Drizzle: <WiRain size={128} />,
  Rain: <WiRain size={128} />,
  Snow: <WiSnow size={128} />,
  Mist: <WiFog size={128} />,
  Smoke: <WiFog size={128} />,
  Haze: <WiFog size={128} />,
  Dust: <WiFog size={128} />,
  Fog: <WiFog size={128} />,
  Sand: <WiFog size={128} />,
  Ash: <WiFog size={128} />,
  Squall: <WiFog size={128} />,
  Tornado: <WiFog size={128} />,
  Clear: <WiDaySunny className="text-yellow-400" size={128} />,
  Clouds: <WiCloudy size={128} />,
};

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({
    icon: {},
    temp: "",
    name: "",
    humidity: "",
    windSpeed: "",
  });

  return (
    <WeatherContext.Provider value={{ weatherIcons }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const UseWeather = () => useContext(WeatherContext);
