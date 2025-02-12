import styles from './MainWeather.module.css';

function MainWeather({ children }) {
  return <div className={styles.mainWrapper}>{children}</div>;
}

export default MainWeather;
