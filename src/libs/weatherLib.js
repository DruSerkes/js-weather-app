const BASE_URL = "https://api.open-meteo.com/v1/"

export const fetchUserForecast = async (latitude, longitude, timezone = "auto") => {
  const url = `${BASE_URL}forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,precipitation,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=${timezone}`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return { error }
  }
};

// Code:	Description
export const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Denze freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snow fall",
  73: "Moderate snow fall",
  75: "Heavy snow fall",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorms",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail"
}

/**
 * @param {number} code
 * @returns {string}
 */
export const generateWeatherCodeString = (code) => weatherCodes[code];

export const getIconNameForWeatherCode = (code) => {
  if (code < 2) return "sun.svg"
  if (code === 2) return "cloud-sun.svg"
  if (code === 3) return "cloud.svg"
  if (code >= 45 && code <= 48) return "smog.svg"
  if (code >= 51 && code <= 67) return "cloud-showers-heavy.svg"
  if (code >= 71 && code <= 86) return "snowflake.svg"
  if (code >= 95) return "cloud-bolt.svg"
}