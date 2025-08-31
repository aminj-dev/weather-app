import { weatherIcons } from "../context/WeatherContext";

export const WeatherCard = () => {
  return (
    <div className="bg-white p-3 w-[300px] h-[400px] rounded-2xl shadow-2xl flex items-center flex-col">
      <h1 className="font-semibold text-[24px]">TODAY</h1>
      {weatherIcons.Clear}
      <div className="flex flex-row items-center  w-full gap-4 pl-4">
        <h2 className=" text-[35px] font-semibold text-[#2e2e2e]">21C</h2>
        <h2 className="text-[24px] font-semibold text-[#2e2e2e]">
          Tehran
        </h2>
      </div>
      <div className="flex flex-col gap-5 w-full pt-4">
        <span>humidity 20%</span>
        <span>windSpeed 3.09km</span>
      </div>
    </div>
  );
};
