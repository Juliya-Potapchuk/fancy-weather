import { setGeolocation } from './geolocationBlock/setGeolocation';
import { addBackgrOnPage } from '../utils/buttons/addBackgrOnPage';
import { changeTemperatureFormat } from '../utils/buttons/changeTemperatureFormat';
import {
  buttonBackground,
  buttonHeaderWrapper,
} from '../utils/createElements.js/headerElements';
import { countryDate } from './weatherBlock/countryDate';
import { setCurrentWeather } from './weatherBlock/setCurrentWeather';
import { setThreeDaysWeather } from './weatherBlock/setThreeDaysWeather';

export const commonFunctionsManager = async ({
  icon,
  city,
  country,
  timezone,
  timestamp,
  listWeatherForecast,
  latitudeLongitude,
}) => {
  setGeolocation(latitudeLongitude);
  countryDate(timestamp, city, country, timezone);
  setCurrentWeather(listWeatherForecast.currently);
  setThreeDaysWeather(listWeatherForecast);

  addBackgrOnPage(icon);
  buttonBackground.addEventListener('click', () => addBackgrOnPage(icon));
  buttonHeaderWrapper.addEventListener('click', (event) => {
    changeTemperatureFormat(event, listWeatherForecast);
  });
};
