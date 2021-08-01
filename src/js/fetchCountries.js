
import { error } from "@pnotify/core";
import countryCard from '../tpl/countryCardTpl'
import countryList from '../tpl/countryListTpl'

const countryCardNode = document.querySelector('.country_card');

export function fetchCountries(searchQuery) {
  return fetch('https://restcountries.eu/rest/v2/name/' + searchQuery.target.value)
    .then(response => response.json())
     .then(countries => {
      if (countries.length === 1) {
        countryCardNode.innerHTML = countryCard(countries[0]);
      } else if (countries.length <= 10 && countries.length > 1) {
        const obj = {};
        obj.country = countries.map(country => country.name);
        countryCardNode.innerHTML = countryList(obj);
      } else if (countries.length > 10){
        countryCardNode.innerHTML = '';
                error({ text: 'Too many matches found. Please enter a more specific query' });
              }
    })
}


// fetchCountries(name)
