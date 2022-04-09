import React, { useEffect, useState } from "react";
import { weatherForecastState } from "../state/weatherForecast";
import { useRecoilState } from "recoil";
import { WeatherForecast } from "../components/WeatherForecast";

export const WeatherForecastContainer = () => {
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useRecoilState(weatherForecastState);

  const populateWeatherData = async () => {
    setLoading(true);
    const response = await fetch("weatherforecast");
    const data = await response.json();
    setForecast(data);
    setLoading(false);
  };

  useEffect(() => {
    populateWeatherData();

    return () => {
      console.log('cleanup');
      setForecast([]);
    };
  });

  return (
    <WeatherForecast loading={loading} forecast={forecast} />
  );
};