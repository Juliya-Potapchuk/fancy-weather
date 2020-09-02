import { buttonSearch, buttonMicrophone } from './utils/createElements.js/headerElements';
import { microphoneSearch } from './utils/buttons/microphone';
import { objSettings } from './utils/values';
import { searchCityWeatherManager } from './functions/searchCityWeatherManager';
import { currentWeatherManager } from './functions/currentWeatherManager';

if (objSettings.location === 'current') {
  currentWeatherManager();
}

buttonSearch.addEventListener('click', async () => {
  objSettings.location = 'after search';
  clearInterval(objSettings.idInterval);
  searchCityWeatherManager();
});

buttonMicrophone.addEventListener('click', async () => microphoneSearch());
