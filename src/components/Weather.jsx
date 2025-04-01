import React, { useState } from "react";
import axios from "axios";
import {
  WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog, WiHumidity, WiStrongWind, WiBarometer
} from "react-icons/wi";
import { FaLocationArrow } from "react-icons/fa";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = "e9d40d965c8448a6d1e4d98df832f8a9"; // Replace with OpenWeather API key

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather(null);
    }
  };

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clear":
        return <WiDaySunny className="text-yellow-400 text-8xl" />;
      case "Clouds":
        return <WiCloudy className="text-gray-400 text-8xl" />;
      case "Rain":
        return <WiRain className="text-blue-500 text-8xl" />;
      case "Snow":
        return <WiSnow className="text-white text-8xl" />;
      case "Thunderstorm":
        return <WiThunderstorm className="text-purple-500 text-8xl" />;
      case "Fog":
      case "Mist":
        return <WiFog className="text-gray-300 text-8xl" />;
      default:
        return <WiCloudy className="text-gray-300 text-8xl" />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">🌤 Live Weather App</h1>
      
      <div className="relative flex gap-4 w-full max-w-lg">
        <input
          type="text"
          placeholder="Enter City..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-3 text-lg text-black bg-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button 
          onClick={fetchWeather} 
          className="bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-lg">
          <FaLocationArrow className="text-white text-lg" />
        </button>
      </div>

      {weather && (
        <div className="mt-8 bg-white/10 backdrop-blur-lg text-white p-8 rounded-lg shadow-lg w-96 text-center transform hover:scale-105 transition">
          <h2 className="text-3xl font-bold">{weather.name}, {weather.sys.country}</h2>
          <div className="flex justify-center">{getWeatherIcon(weather.weather[0].main)}</div>
          <h3 className="text-5xl font-bold my-3">{weather.main.temp}°C</h3>
          <p className="text-lg capitalize">{weather.weather[0].description}</p>

          <div className="grid grid-cols-2 gap-4 mt-6 text-gray-300">
            <div className="flex items-center gap-2">
              <WiHumidity className="text-3xl" />
              <span>Humidity: {weather.main.humidity}%</span>
            </div>
            <div className="flex items-center gap-2">
              <WiStrongWind className="text-3xl" />
              <span>Wind: {weather.wind.speed} m/s</span>
            </div>
            <div className="flex items-center gap-2">
              <WiBarometer className="text-3xl" />
              <span>Pressure: {weather.main.pressure} hPa</span>
            </div>
            <div className="flex items-center gap-2">
              <WiFog className="text-3xl" />
              <span>Visibility: {weather.visibility / 1000} km</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;


