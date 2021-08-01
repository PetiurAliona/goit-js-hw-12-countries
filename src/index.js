import debounce from 'lodash.debounce';

import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { error } from "@pnotify/core";
import { fetchCountries } from './js/fetchCountries';
import countryCard from './tpl/countryCardTpl'
import countryList from './tpl/countryListTpl'

document.querySelector('.country_input').addEventListener('input', debounce(fetchCountries, 500));
const countryCardNode = document.querySelector('.country_card');