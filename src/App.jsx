import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import API_KEY from './utils/api-key';
import SearchForm from './components/SearchForm';
import MainWeather from './components/MainWeather';
import { useState } from 'react';
import weatherIcons from './utils/weatherIcons';
import WeatherDetails from './components/WeatherDetails';

function App() {
  const [town, setTown] = useState('');
  const [iconCode, setIconCode] = useState('');
  const [description, setDescription] = useState('');
  const [other, setOther] = useState({});

  async function getWeatherInfo(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const data = await response.json();

      setTown(data.name);
      setIconCode(data.weather[0].icon);
      setDescription(data.weather[0].main);
      setOther({
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        windDeg: data.wind.deg,
        windSpeed: data.wind.speed,
      });
    } catch (error) {
      alert(`${error}`);
    }
  }

  const icon = weatherIcons[iconCode] || weatherIcons['01d'];

  return (
    <div className="appWrapper">
      <p className="appHeading">Actual weather for you</p>
      <SearchForm onSubmit={getWeatherInfo} />
      <MainWeather>
        <p className="cityName">{town || 'City name'}</p>
        <div className="weatherIcon">
          {icon && <FontAwesomeIcon className="faIcon" icon={icon} />}
        </div>
        <p className="weatherDescription">
          {description || 'Weather description'}
        </p>
      </MainWeather>
      <WeatherDetails other={other} />
    </div>
  );
}

export default App;
