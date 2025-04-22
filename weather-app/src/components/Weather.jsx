import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../store/weather.slice";

const Weather = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
    }
  };

  const today = weather.weatherData?.days[0];
  console.log("today==== ", JSON.stringify(today));

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-xl rounded-2xl text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🌤️ Weather App</h1>


      <div className="flex items-center justify-center gap-2">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      <div className="mt-6">
        {weather.status === "loading" && (
          <p className="text-gray-500">Loading...</p>
        )}

        {today && weather.status === "succeeded" && (
          <div className="bg-blue-50 p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold text-blue-800">
              {weather.weatherData?.resolvedAddress}
            </h2>
            <p className="text-gray-700 mt-2 font-bold">{today.datetime}</p>
            <p className="text-gray-600 capitalize mt-1">
              🌥️ {today.conditions}
            </p>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {today.temp}°F
            </p>
          </div>
        )}

        {weather.status === "failed" && (
          <p className="text-red-500 mt-4">❌ Error: {weather.error}</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
