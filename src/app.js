import axios from 'axios';
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', searchCountry);

function searchCountry(e) {
    e.preventDefault();

const searchField = document.getElementById('search-field');

getCountryInformation(searchField.value);

searchField.value = '';
}



async function getCountryInformation(name) {
    try {
        const result = await axios.get(`https://restcountries.com/v2/name/${name}`);
        const countryData = result.data[0];
        console.log(result.data[0]);

        createCountryInfo(countryData);

    } catch(e) {
        console.error(e);
    }
}

getCountryInformation();

function createCountryInfo(countryData) {
   const infoParagraph = document.getElementById('country-information');
   console.log(countryData);

    infoParagraph.innerHTML = `
    <p>${countryData.name}</p>
    <img src="${countryData.flag}" alt="Vlag van ${countryData.name}" class="flag" />
    <p>${countryData.name} is situated in ${countryData.subregion}. It has a population of ${countryData.population} people.</p>
    <p>The capital is ${countryData.capital} ${currencyDescription(countryData.currencies)}</p>
    `
    }


function currencyDescription(currencies){
   let output = 'and you can pay with ';

   if(currencies.length === 2) {
       return output + `${currencies[0].name} and ${currencies[1].name}`
   }

   return output + `${currencies[0].name}`;
}

const form = document.getElementById("search-form");
form.addEventListener("submit", () => {
    createCountryInfo();
})