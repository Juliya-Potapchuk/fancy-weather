import { commonFunctionsManager } from './commonFunctionsManager';
import { getDataSearch } from '../API/getDataSearch';
import { checkSearchField } from '../utils/checkSearchField';
import { inputSearch } from '../utils/createElements.js/headerElements';
import { getWeatherForecast } from '../API/getWeatherForecast';

export const searchCityWeatherManager = async () => {
  const resultInput = inputSearch.value;
  const isValidValue = checkSearchField(resultInput);
  if (!isValidValue) {
    return;
  }
  const data = await getDataSearch(resultInput);
  const { lat: latitude, lng: longitude } = data.results[0].geometry;
  const latitudeLongitude = `${latitude},${longitude}`;
  const listWeatherForecast = await getWeatherForecast(latitudeLongitude);

  const { icon } = listWeatherForecast.currently;
  let { city } = data.results[0].components;
  const country = data.results[0].components['ISO_3166-1_alpha-2'];
  const timestamp = data.timestamp.created_unix;
  const timezone = data.results[0].annotations.timezone.name;
  const objWithProperties = {
    icon,
    city,
    country,
    timezone,
    timestamp,
    listWeatherForecast,
    latitudeLongitude,
  };

  if (city) {
    await commonFunctionsManager(objWithProperties);
  } else {
    city = data.results[0].components.state;
    await commonFunctionsManager({ ...objWithProperties, city });
  }
};
