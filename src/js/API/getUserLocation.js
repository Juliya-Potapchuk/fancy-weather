import { tokenIpinfo } from "../utils/config";
import { spinner } from "../utils/spinner";

export async function getUserLocation() {
  spinner(true)
  return fetch(`https://ipinfo.io/json?token=${tokenIpinfo}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log('error', error))
}
