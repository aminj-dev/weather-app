import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { WeatherCard } from "./component/WeatherCard";
import { WeatherContextProvider } from "./context/WeatherContext";

function App() {
  const [weatherInfo, setWeatherInfo] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=d01f8b6b64be4e1ba87548febd39be1a&units=metric"
      );
      const data = await res.data;
      console.log(`city: ${data.name} - ${data.main.temp} `);
      setWeatherInfo(`city: ${data.name} - ${data.main.temp} `);
    };
    getWeather();
  }, []);
  return (
    <WeatherContextProvider>
      <div className="h-screen w-screen flex items-center justify-center bg-[rgb(88,152,255)]">
        <WeatherCard />
      </div>
    </WeatherContextProvider>
  );
}

export default App;
