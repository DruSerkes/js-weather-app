import './WeeklyRelativityBar.css'

export const WeeklyRelativityBar = ({ lowerBound, upperBound, dayLow, dayHigh }) => {
  const minSaturation = 250;
  const left = `${dayLow - lowerBound}%`;
  const width = `${(dayHigh / upperBound * 100) - (left.slice(0, -1))}%`
  const gradientHigh = Math.round(Math.abs(dayHigh * (minSaturation / 100) - minSaturation));
  const gradientLow = Math.round(Math.abs(dayLow * (minSaturation / 100) - minSaturation));
  function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  const background = `linear-gradient(90deg, ${hslToHex(gradientLow, 50, 50)}, ${hslToHex(gradientHigh, 50, 50)})`;

  return (
    <div className="WeeklyRelativityBar">
      <div id='RelativeTemp' style={{ background, left, width, }} />
    </div>
  )
};