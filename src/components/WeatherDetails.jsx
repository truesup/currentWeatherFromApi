import styles from './WeatherDetails.module.css';
import Substrate from '../UI/Substrate';

function WeatherDetails({ other }) {
  const formatValue = (value, unit) => {
    return typeof value === 'number' && !isNaN(value)
      ? `${Math.floor(value)}${unit}`
      : 'N/A';
  };

  return (
    <div className={styles.detailsWrapper}>
      <Substrate>
        <span className={styles.staticDescription}>Temperature:</span>
        &nbsp;&nbsp;
        {formatValue(other?.temp, '°C')}
      </Substrate>
      <Substrate>
        <span className={styles.staticDescription}>Feels like:</span>
        &nbsp;&nbsp;
        {formatValue(other?.feelsLike, '°C')}
      </Substrate>
      <Substrate>
        <span className={styles.staticDescription}>Pressure:</span>
        &nbsp;&nbsp;
        {formatValue(other?.pressure, ' hPa')}
      </Substrate>
      <Substrate>
        <span className={styles.staticDescription}>Humidity:</span>
        &nbsp;&nbsp;
        {formatValue(other?.humidity, '%')}
      </Substrate>
      <Substrate>
        <span className={styles.staticDescription}>Wind direction:</span>
        &nbsp;&nbsp;
        {formatValue(other?.windDeg, '°')}
      </Substrate>
      <Substrate>
        <span className={styles.staticDescription}>Wind speed:</span>
        &nbsp;&nbsp;
        {formatValue(other?.windSpeed, ' m/s')}
      </Substrate>
    </div>
  );
}

export default WeatherDetails;
