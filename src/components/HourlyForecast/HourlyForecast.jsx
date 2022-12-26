import { useMemo } from 'react';
import { generateTimezoneAdjustedDate, getCurrentIsoTimeHour } from '../../libs/timeLib';
import { generateHourlyDataFromNow } from '../../libs/weatherLib';
import { HourSlot } from '../HourSlot/HourSlot';
import './HourlyForecast.css'

export const HourlyForecast = ({ forecast }) => {
  const nowIndex = useMemo(() => forecast.hourly.time.indexOf(getCurrentIsoTimeHour()), [forecast]);
  const dataFromNow = generateHourlyDataFromNow(forecast.hourly, nowIndex);

  return (
    <section className='HourlyForecast'>
      {dataFromNow.time.map((time, index) => {
        return <HourSlot
          key={time}
          isNow={index === 0}
          time={generateTimezoneAdjustedDate(time).toISOString()}
          apparentTemperature={dataFromNow.apparentTemperature[index]}
          weathercode={dataFromNow.weathercode[index]}
        />
      })}
    </section>
  )
};