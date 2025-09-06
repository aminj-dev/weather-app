import { UseWeather, weatherIcons } from "../context/WeatherContext";
import { WeatherIcon } from "./WeatherIcon";

export const WeatherCard = () => {
  const { state } = UseWeather();

  if(state.loading === true) return <h1>Loading...</h1>
  if(state.error !== null) return <h1 className="text-red-600 text-[20px]">we dont have any data about this city</h1>  
  if(state.data) return (
    <div className="bg-white p-3 w-[300px] h-[400px] rounded-2xl shadow-2xl flex items-center flex-col">
      <h1 className="font-semibold text-[24px]">TODAY</h1>
        <WeatherIcon/>      
      <div className="flex flex-row items-center  w-full gap-4 pl-4">
        <h2 className=" text-[35px] font-semibold text-[#2e2e2e]">{state.data?.temp}C</h2>
        <h2 className="text-[24px] font-semibold text-[#2e2e2e]">
          {state.data?.city}
        </h2>
      </div>
      <div className="flex flex-col gap-5 w-full pt-4">
        <span>humidity {state.data?.humidity}%</span>
        <span>windSpeed {state.data?.windSpeed} km</span>
      </div>
    </div>
  );
};
