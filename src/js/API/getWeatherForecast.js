import { keyDarksky, proxy } from '../utils/config';

export async function getWeatherForecast(locationCoordinates) {
  return fetch(
    `${proxy}https://api.darksky.net/forecast/${keyDarksky}/${locationCoordinates}?units=auto`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log('error', error));
}
