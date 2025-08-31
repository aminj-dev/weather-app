import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { WeatherCard } from './component/WeatherCard';

function App() {
  const [weatherInfo, setWeatherInfo] = useState("")
  const [icon, setIcon] = useState("")  

  useEffect(()=> {
    const getWeather = async () => {
      const res = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=d01f8b6b64be4e1ba87548febd39be1a&units=metric");
      const data = await res.data;
      console.log(`city: ${data.name} - ${data.main.temp} `);
      setWeatherInfo(`city: ${data.name} - ${data.main.temp} `)
      setIcon(`http://openweathermap.org/img/wn/${data.weather.icon}@2x.png`)
    }
    getWeather()
  },[])  
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-[rgb(88,152,255)]'>
      <h1>{weatherInfo}</h1>
      {icon !== "" && <img src={icon} alt="" /> }
      
      <WeatherCard/>
    </div>
  )
}

export default App
