import { weekdays } from "../../libs/timeLib";
import { getIconNameForWeatherCode } from "../../libs/weatherLib";
import './DailyRow.css'

export const DailyRow = ({ time, weathercode, temperature_2m_max, temperature_2m_min, isToday, weeklyHigh, weeklyLow }) => {
  const icon = getIconNameForWeatherCode(weathercode);
  const day = weekdays[new Date(time).getUTCDay()]
  //TODO: CREATE TODAYS LOW/HIGH RELATIVE TO WEEKLY HIGH BAR THINGY
  return (
    <div className='DailyRow'>
      <div className="DailyRow-Left">
        <h5>{isToday ? 'Today' : day}</h5>
        <img src={icon} />
      </div>
      <div className="DailyRow-Right">
        <span>Low: {temperature_2m_min}&deg;</span>
        <div></div>
        <span>High: {temperature_2m_max}&deg;</span>
      </div>
    </div>
  )
};