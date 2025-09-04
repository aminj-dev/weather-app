import { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { UseWeather } from "../context/WeatherContext";

export const SearchInput = () => {
  const { fetchApi } = UseWeather();
  const [inputValue, setInputValue] = useState("Tehran")
  const inputHandler = () => {
    fetchApi(inputValue)
  }

  return (
    <div className='flex flex-row items-center'>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='search for city...' className='w-[250px] mr-4 px-2 outline-none rounded-xl h-8 flex items-center text-[18px]'/>
        <button onClick={inputHandler}>
            <FaSearchLocation size={30} className='text-white cursor-pointer'/>
        </button>
    </div>
  )
}
