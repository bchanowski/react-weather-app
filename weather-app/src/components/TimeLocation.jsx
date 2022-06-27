import { formatToLocalTime } from "../services/WeatherService";

function TimeLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <>
      <div className="flex items-center justify-center my-6 flex-wrap">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-6 flex-wrap">
        <p className="text-white text-3xl font-medium">
          {name}, {country}
        </p>
      </div>
    </>
  );
}

export default TimeLocation;
