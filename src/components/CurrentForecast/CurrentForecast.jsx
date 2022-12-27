import { getUserTimeZone } from "../../libs/utilsLib";
import { generateWeatherCodeString } from "../../libs/weatherLib";
import "./CurrentForecast.css";

export const CurrentForecast = ({ forecast }) => {
  const location = getUserTimeZone().split('/').at(-1).replace("_", " ")
  return (
    <header className='CurrentForecast'>
      <p>{location}</p>
      <h1>{Math.round(forecast.current_weather.temperature)}</h1>
      <p>{generateWeatherCodeString(forecast.current_weather.weathercode) ?? ''}</p>
      <p>H:{Math.round(forecast.daily.apparent_temperature_max[0])}&deg; L:{Math.round(forecast.daily.apparent_temperature_min[0])}&deg;</p>
    </header>
  )
};