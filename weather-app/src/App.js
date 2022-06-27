//import UilReact from "@iconscout/react-unicons/icons/uil-react";
import { useState, useEffect } from "react";
import Forecast from "./components/Forecast";
import SearchBar from "./components/SearchBar";
import TempDetails from "./components/TempDetails";
import TimeLocation from "./components/TimeLocation";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./services/WeatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "warsaw" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location";
      toast.info("Fetching data for " + message);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success("Fetched data for " + data.name + ", " + data.country);
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    let bg = "from-cyan-700 to-blue-700";
    if (weather) {
      bg =
        weather.icon.charAt(2) === "n"
          ? "from-gray-700 to-black"
          : weather.icon.includes("13")
          ? "from-blue-400 to-gray-400"
          : weather.icon.charAt(1) === "4" ||
            weather.icon.charAt(1) === "9" ||
            weather.icon.charAt(1) === "0" ||
            weather.icon.includes("11")
          ? "from-gray-700 to-gray-400"
          : "from-cyan-700 to-blue-700";
    }
    return bg;
  };

  return (
    <div
      className={`mx-auto mt-4 max-w-screen-lg py-5 px-32 bg-gradient-to-br
      h-fit shadow-xl shadow-gray-400 rounded-lg ${formatBackground()}`}
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      <TopButtons setQuery={setQuery} />
      <SearchBar setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <>
          <TimeLocation weather={weather} />
          <TempDetails weather={weather} units={units} />
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </>
      )}
    </div>
  );
}

export default App;
