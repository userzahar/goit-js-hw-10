import './css/styles.css';
import { fetchCountries } from "./js/fetchCountries";
let debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const searchInput = document.getElementById("search-box");
const countryList = document.querySelector(".country-list");
console.log("🚀 ~ countryList", countryList)


fetchCountries("China").then(f => f.json()).then(console.log);

searchInput.addEventListener('input', debounce(countrySearch, DEBOUNCE_DELAY));

function countrySearch(e) {
    let searchInputValue = e.target.value.trim();
    console.log("🚀 ~ searchInputValue", searchInputValue)

}

function renderCountryList(value) {
    
}