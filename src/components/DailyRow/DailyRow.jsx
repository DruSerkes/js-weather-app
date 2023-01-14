import { weekdays } from "../../libs/timeLib";
import { getIconNameForWeatherCode } from "../../libs/weatherLib";
import { WeeklyRelativityBar } from "../WeeklyRelativityBar/WeeklyRelativityBar";
import './DailyRow.css'

export const DailyRow = ({ time, weathercode, temperature_2m_max, temperature_2m_min, isToday, weeklyHigh, weeklyLow }) => {
  const icon = getIconNameForWeatherCode(weathercode);
  const day = weekdays[new Date(time).getUTCDay()]
  return (
    <div className='DailyRow'>
      <div className="DailyRow-Left">
        <h5>{isToday ? 'Today' : day}</h5>
        <img src={icon} />
      </div>
      <div className="DailyRow-Right">
        <span>Low: {temperature_2m_min}&deg;</span>
        <WeeklyRelativityBar
          dayLow={temperature_2m_min}
          dayHigh={temperature_2m_max}
          upperBound={weeklyHigh}
          lowerBound={weeklyLow}
        />
        <span>High: {temperature_2m_max}&deg;</span>
      </div>
    </div>
  )
};