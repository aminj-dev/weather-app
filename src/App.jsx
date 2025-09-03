import "./App.css";
import { SearchInput } from "./component/SearchInput";
import { WeatherCard } from "./component/WeatherCard";
import { WeatherContextProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherContextProvider>
      <div className="h-screen w-screen flex flex-col gap-6 items-center pt-12 bg-[rgb(88,152,255)]">
        <SearchInput/>
        <WeatherCard />
      </div>
    </WeatherContextProvider>
  );
}

export default App;
