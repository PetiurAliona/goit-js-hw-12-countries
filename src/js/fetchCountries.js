import { error } from '@pnotify/core';

export function fetchCountries(searchQuery) {
  return fetch('https://restcountries.eu/rest/v2/name/' + searchQuery)
    .then(response => response.json())
    .catch(e => error({ text: `${e}`, delay: 1500 }));
}
