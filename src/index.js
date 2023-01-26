import './css/styles.css';
import { fetchCountries } from "./js/fetchCountries";
let debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const searchInput = document.getElementById("search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector('.country-info')

searchInput.addEventListener('input', debounce(countrySearch, DEBOUNCE_DELAY));

function countrySearch(e) {
    let searchInputValue = e.target.value.trim();
    searchCountryOnPromise(searchInputValue)
}

function searchCountryOnPromise(value) {
    fetchCountries(value)
        .then(f => f.json())
        .then(f => {
            if (f.length > 10) {
                console.log("Too many matches found. Please enter a more specific name.")      
            } else if (f.length === 1) {
                renderOneCountryCard(f)
            } else {
                console.log(f)
                renderCountryList(f);  
            }
        })
        .catch(e => console.log('пиши нормально'));
}

function renderCountryList(arrObj) {
    const markup = arrObj.map((el) => `<li class='country-list'><img src =${el.flags.svg} width='30' heigth='20'></img>${el.name.common}</li>`).join("");
    countryList.innerHTML = markup;
}

function renderOneCountryCard(arrObj) {
    countryList.innerHTML = '';
    // const languages = arrObj.map((el) => {
    //    el.languages.map(el=>console.log(el))
    // })
    const markupOne = arrObj.map((el) => `<h2><img src =${el.flags.svg} width='30' heigth='20'></img>${el.name.common}</h2><ul><li>Capital: ${el.capital}</li><li>Population: ${el.population}</li><li>Languages: ${Object.values(el.languages)}</li></ul>`).join("");
    countryInfo.innerHTML = markupOne;
    arrObj.map((el) => console.log(Object.values(el.languages)))
}

// function resetInput() {
//     countryList.innerHTML = '';
//     countryInfo.innerHTML = '';

// }