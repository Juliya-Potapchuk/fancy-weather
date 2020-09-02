import { keyOpencagedata } from '../utils/config';
import { spinner } from '../utils/spinner';

export async function getDataSearch(resultInput) {
  spinner(true)
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${resultInput}&key=${keyOpencagedata}&
    language=en&pretty=1`
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log('error', error));
}
