export const getCurrentIsoTimeHour = () => {
  let d = new Date();
  d.setMinutes(0)
  return d.toISOString().slice(0, -8);
};

export const formatHourlyTimeFromIsoString = (time) => {
  const formattedTime = Intl.DateTimeFormat(navigator.language ?? 'en-US', { hour: '2-digit', hour12: true }).format(new Date(time))
  return formattedTime[0] === '0' ? formattedTime.slice(1) : formattedTime;
}