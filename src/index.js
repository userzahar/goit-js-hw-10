import './css/styles.css';
import { fetchCountries } from "./js/fetchCountries";
let debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const searchInput = document.getElementById("search-box");
const countryList = document.querySelector(".country-list");

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
            } else {
                console.log(f)
                renderCountryList(f);  
            }
        })
        .catch(e => console.log('пиши нормально'));
}

function renderCountryList(arrObj) {
    const markup = arrObj.map((el) => `<li><img src =${el.flags.svg} width='30' heigth='20'></img>${el.name.common}</li>`).join("");
    countryList.innerHTML = markup;
    arrObj.map((el) => console.log(el.flags.svg))
}
