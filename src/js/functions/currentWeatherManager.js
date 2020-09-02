import { getUserLocation } from '../API/getUserLocation';
import { getWeatherForecast } from "../API/getWeatherForecast";
import { commonFunctionsManager } from './commonFunctionsManager';

export const currentWeatherManager = async () => {
  const {
    city,
    country,
    timezone,
    loc: latitudeLongitude,
  } = await getUserLocation();

  const listWeatherForecast = await getWeatherForecast(latitudeLongitude);
   const { time: timestamp, icon } = listWeatherForecast.currently;
  const objWithProperties = {
    icon,
    city,
    country,
    timezone,
    timestamp,
    listWeatherForecast,
    latitudeLongitude,
  };

  commonFunctionsManager(objWithProperties);
};
