export const getCurrentIsoTimeHour = () => {
  let d = new Date();
  d.setMinutes(0)
  return d.toISOString().slice(0, -8);
};

export const formatHourlyTimeFromIsoString = (time) => {
  const formattedTime = Intl.DateTimeFormat(navigator.language ?? 'en-US', { hour: '2-digit', hour12: true }).format(new Date(time))
  return formattedTime[0] === '0' ? formattedTime.slice(1) : formattedTime;
}

export const generateTimezoneAdjustedDate = (time) => {
  let d = new Date(time)
  let newTime = d.getTime()
  const offsetInMs = d.getTimezoneOffset() * 60 * 1000
  return new Date(newTime - offsetInMs)
}

export const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];