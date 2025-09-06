import React from "react";
import { UseWeather, weatherIcons } from "../context/WeatherContext";

export const WeatherIcon = () => {
    const {state} = UseWeather();
    switch (state.data?.weather) {
    case "Thunderstorm":
      return weatherIcons.Thunderstorm;
    case "Drizzle":
      return weatherIcons.Drizzle;
    case "Rain":
      return weatherIcons.Rain;
    case "Snow":
      return weatherIcons.Snow;
    case "Clear":
      return weatherIcons.Clear;
    case "Clouds":
      return weatherIcons.Clouds;
    case "Mist":
      return weatherIcons.Mist;
    case "Smoke":
      return weatherIcons.Smoke;
    case "Haze":
      return weatherIcons.Haze;
    case "Dust":
      return weatherIcons.Dust;
    case "Fog":
      return weatherIcons.Fog;
    case "Sand":
      return weatherIcons.Sand;
    case "Ash":
      return weatherIcons.Ash;
    case "Squall":
      return weatherIcons.Squall;
    case "Tornado":
      return weatherIcons.Tornado;
    default:
      break;
  }
};
