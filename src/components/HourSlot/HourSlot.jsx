import { formatHourlyTimeFromIsoString } from "../../libs/timeLib";
import { getIconNameForWeatherCode } from "../../libs/weatherLib";
import './HourSlot.css';

export const HourSlot = ({ time, weathercode, apparentTemperature, isNow }) => {
  const icon = getIconNameForWeatherCode(weathercode);

  return (
    <div className='HourSlot'>
      <p>{isNow ? "Now" : formatHourlyTimeFromIsoString(time)}</p>
      <img src={icon} />
      <p>{Math.round(apparentTemperature)}&deg;</p>
    </div>
  )
};