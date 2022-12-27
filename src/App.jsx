import { useEffect, useState } from 'react'
import { CurrentForecast } from './components/CurrentForecast/CurrentForecast';
import { HourlyForecast } from './components/HourlyForecast/HourlyForecast';
import { DailyForecast } from './components/DailyForecast/DailyForecast';

import { createGeolocationError, getUserTimeZone } from './libs/utilsLib';
import { fetchUserForecast } from './libs/weatherLib';
import './App.css'

function App() {
  const [coords, setCoords] = useState({ latitude: null, longitude: null, timestamp: null });
  const [error, setError] = useState('');
  const [forecast, setForecast] = useState(null);

  // Get user coordinates from device
  useEffect(() => {
    if (coords.latitude && coords.longitude && coords.timestamp) return;

    const successCallback = (geolocationPosition) => {
      const { coords: { latitude, longitude }, timestamp } = geolocationPosition;
      setCoords({ latitude, longitude, timestamp });
    }

    const errorCallback = (e) => setError(createGeolocationError(e))

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }, [coords]);

  // Get the weather forecast once you have the user coordinates
  useEffect(() => {
    if (!coords.latitude || !coords.longitude || !coords.timestamp || !!forecast) return;

    const getForecast = async () => {
      const forecast = await fetchUserForecast(coords.latitude, coords.longitude, getUserTimeZone());
      console.log(forecast);
      if (forecast.error) return setError(e.message ?? 'Error fetching your weather forecast');
      setForecast(forecast);
    };

    getForecast();
  }, [coords]);

  return (
    <div className="App">
      {!!forecast && <CurrentForecast forecast={forecast} />}
      {!!forecast && <HourlyForecast forecast={forecast} />}
      {!!forecast && <DailyForecast forecast={forecast} />}
      {!coords.timestamp && !error && <h2 className='fetching'>Fetching your weather forecast</h2>}
    </div>
  )
}

export default App
