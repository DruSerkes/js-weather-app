import { DailyRow } from '../DailyRow/DailyRow';
import './DailyForecast.css';

export const DailyForecast = ({ forecast }) => {
  const { daily } = forecast;
  const weeklyHigh = daily.temperature_2m_max.reduce((high, nextTemp) => Math.max(high, nextTemp), -Infinity);
  const weeklyLow = daily.temperature_2m_min.reduce((low, nextTemp) => Math.min(low, nextTemp), Infinity);

  return (
    <section className="WeeklyForecast">
      <h5>7-day Forecast</h5>
      {daily.time.map((time, idx) => (
        <DailyRow
          key={time}
          isToday={idx === 0}
          temperature_2m_max={daily.temperature_2m_max[idx]}
          temperature_2m_min={daily.temperature_2m_min[idx]}
          time={time}
          weathercode={daily.weathercode[idx]}
          weeklyHigh={weeklyHigh}
          weeklyLow={weeklyLow}
        />
      )
      )}
    </section>
  )
};