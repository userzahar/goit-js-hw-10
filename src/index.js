import './css/styles.css';
import { fetchCountries } from "./js/fetchCountries";
import Notiflix from 'notiflix';
let debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const searchInput = document.getElementById("search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector('.country-info')

searchInput.addEventListener('input', debounce(countrySearch, DEBOUNCE_DELAY));

function countrySearch(e) {
    let searchInputValue = e.target.value.trim();
    if (searchInputValue === '') {
        clearInput();
    } else {
        searchCountryOnPromise(searchInputValue)
    }
}

function searchCountryOnPromise(value) {
    fetchCountries(value)
        .then(f => {
            if (!f.ok) { return; } else{return f.json()} 
        })
        .then(f => {
            if (f.length > 10) {
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');     
            } else if (f.length === 1) {
                renderOneCountryCard(f)
            } else {
                renderCountryList(f);  
            }
        })
        .catch(e =>
            Notiflix.Notify.failure("Oops, there is no country with that name")
        );
}

function renderCountryList(arrObj) {
    countryInfo.innerHTML = '';
    const markup = arrObj.map((el) =>
        `<li class='country-li'><img src =${el.flags.svg} alt="flag ${el.name.common}" width='30' heigth='20'></img>${el.name.common}</li>`).join("");
    countryList.innerHTML = markup;
}

function renderOneCountryCard(arrObj) {
    countryList.innerHTML = '';
    const markupOne = arrObj.map((el) => `<h2><img src =${el.flags.svg} alt="flag ${el.name.common}" width='30' heigth='20'></img> ${el.name.common}</h2><ul class="country-list"><li class="country-li">Capital: ${el.capital}</li><li class="country-li">Population: ${el.population}</li><li class="country-li">Languages: ${Object.values(el.languages)}</li></ul>`).join("");
    countryInfo.innerHTML = markupOne;
}

function clearInput() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
}

