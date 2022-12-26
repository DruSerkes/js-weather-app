import { DailyRow } from '../DailyRow/DailyRow';
import './DailyForecast.css';

export const DailyForecast = ({ forecast }) => {
  const { daily } = forecast;
  const weeklyHigh = daily.temperature_2m_max.reduce((high, nextTemp) => nextTemp > high ? nextTemp : high, -Infinity);
  const weeklyLow = daily.temperature_2m_max.reduce((low, nextTemp) => nextTemp < low ? nextTemp : low, Infinity);

  return (
    <section className="WeeklyForecast">
      <h5>7-day Forecast</h5>
      {daily.time.map((time, idx) => {
        return (
          <div key={time}>
            <hr />
            <DailyRow
              isToday={idx === 0}
              temperature_2m_max={daily.temperature_2m_max[idx]}
              temperature_2m_min={daily.temperature_2m_min[idx]}
              time={time}
              weathercode={daily.weathercode[idx]}
              weeklyHigh={weeklyHigh}
              weeklyLow={weeklyLow}
            />
          </div>
        )
      })}
    </section>
  )
};