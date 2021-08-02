import debounce from 'lodash.debounce';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import { fetchCountries } from './js/fetchCountries';

import countryCard from './tpl/countryCardTpl';
import countryList from './tpl/countryListTpl';

document.querySelector('.country_input').addEventListener('input', debounce(onInputAction, 500));

const countryCardNode = document.querySelector('.country_card');

function onInputAction(e) {
  countryCardNode.innerHTML = '';
  fetchCountries(e.target.value).then(findCountry);
}

function findCountry(countries) {
  if (countries.length === 1) {
    countryCardNode.innerHTML = countryCard(countries[0]);
  } else if (countries.length <= 10 && countries.length > 1) {
    const obj = {};
    obj.country = countries.map(country => country.name);
    countryCardNode.innerHTML = countryList(obj);
  } else if (countries.length > 10) {
    error({ text: 'Too many matches found. Please enter a more specific query', delay: 1500 });
  } else if (countries.status === 404) {
    error({ text: 'Country is not found', delay: 1500 });
  }
}
