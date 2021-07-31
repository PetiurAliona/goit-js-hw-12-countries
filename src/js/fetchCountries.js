
import { error } from "@pnotify/core";

export function fetchCountries(name) {
    return fetch('https://restcountries.eu/rest/v2/name/${name}')
        .then(response => response.json())
    .then(data => data)
  .catch(error => error);
}