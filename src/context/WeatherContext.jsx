import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
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
const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_API_BASE;
const url = `${baseUrl}weather?q=Tehran&appid=${apiKey}&units=metric`;
const initialState = {
  data: null,
  loading: false,
  error: null,
  city: "Tehran",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, loading: true, error: null };
    case "success":
      return {
        ...state,
        data: action.payload.weatherData,
        loading: false,
        error: null,
      };
    case "error":
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export const WeatherContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApi = async () => {
    dispatch({ type: "start" });
    try {
      const res = await axios.get(url);
      const shaped = await res.data;
      const shapedObject = {
        temp: shaped.main.temp,
        city: shaped.name,
        humidity: shaped.main.humidity,
        weather: shaped.weather.main,
        description: shaped.weather.description,
        windSpeed: shaped.wind.speed,
      };
      dispatch({ type: "success", payload: { weatherData: shapedObject } });
      console.log(shapedObject);
    } catch (error) {
      dispatch({ type: "error", payload: { error: error } });
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    console.log(state.data)
  }, [state.data])

  return (
    <WeatherContext.Provider value={{ weatherIcons, state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const UseWeather = () => useContext(WeatherContext);
