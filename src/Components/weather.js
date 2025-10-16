import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const API_KEY = "2a9c21d9b6b04e4b9b6170250251505";
  const CITY = "Bangalore";

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}&aqi=no`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error("Weather fetch error:", err);
      setError("Unable to fetch live weather. Showing demo data.");
      setWeather({
        location: { name: CITY },
        current: { temp_c: 26, condition: { text: "Clear Sky" } },
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (loading)
    return (
      <div className="card shadow-sm mb-3 p-3 text-center">
        <h6 className="fw-bold mb-0">Loading Weather...</h6>
      </div>
    );

  return (
    <div className="card shadow-lg bg-transparent m-3 p-3 text-center">
      <h5 className="fw-bold text-white">Weather</h5>
      {error && <small className="text-white d-block mb-2">{error}</small>}

      <p className="mb-1 fw-semibold text-white">{weather.location.name}</p>
      <h3 className="text-danger fw-bold">{weather.current.temp_c}°C</h3>
      <p className="text-muted">{weather.current.condition.text}</p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-dark btn-sm w-50 bg-success" onClick={fetchWeather}>
          Refresh
        </button>
      </div>
    </div>
  );
};

export default Weather;
