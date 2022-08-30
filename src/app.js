import axios from 'axios';

async function getCountryInformation() {
    try {
        const result = await axios.get('https://restcountries.com/v2/name/nederland')
        const countryData = result.data[0];

        //console.log(countryData);

        createCountryInfo(countryData);

    } catch(e) {
        console.error(e);
    }
}

getCountryInformation();

function createCountryInfo(countryData) {
   const infoParagraph = document.getElementById('country-information');

    infoParagraph.innerHTML = `
    <p>${countryData.name}</p>
    <img src="${countryData.flag}" alt="Vlag van ${countryData.name}" class="flag" />
    <p>${countryData.name} is situated in ${countryData.subregion}. It has a population of ${countryData.population} people.</p>
    `
    }
