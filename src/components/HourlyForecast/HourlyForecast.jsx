import { useMemo } from 'react';
import { getCurrentIsoTimeHour } from '../../libs/timeLib';
import { HourSlot } from '../HourSlot/HourSlot';
import './HourlyForecast.css'

export const HourlyForecast = ({ forecast }) => {
  const { hourly } = forecast;
  const nowIndex = useMemo(() => hourly.time.indexOf(getCurrentIsoTimeHour()), [forecast]);
  console.log(hourly.time.slice(nowIndex)[0])
  const dataFromNow = {
    time: hourly.time.slice(nowIndex),
    precipitation: hourly.precipitation.slice(nowIndex),
    apparentTemperature: hourly.apparent_temperature.slice(nowIndex),
    weathercode: hourly.weathercode.slice(nowIndex)
  };

  return (
    <section className='HourlyForecast'>
      {dataFromNow.time.map((time, index) => {
        return <HourSlot
          key={time}
          time={time}
          apparentTemperature={dataFromNow.apparentTemperature[index]}
          weathercode={dataFromNow.weathercode[index]}
        />
      })}
    </section>
  )
};