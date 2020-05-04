import "regenerator-runtime";
import "./styles/style.css";
import "./styles/responsive.css";
// import "font-awesome/css/font-awesome.min.css";

import "./scripts/components/nav-bar-covid";
import CovidData from "./scripts/data/data-covid";
// import "./scripts/components/covid-world-app";
import "./scripts/components/covid-country-app";

const main = async () => {
  const selectCountry = document.querySelector('covid-country-app');
  const { countries } = await CovidData.getAllCountries();

  selectCountry.countries = countries;

}

main();

// // DOM
// const selectElement = document.querySelector('.selectCountry');
// const wrapper = document.querySelector('.wrapper');

// fetch('https://covid19.mathdro.id/api')
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   document.getElementById("tekonfirmasi").innerHTML = data.confirmed.value.toLocaleString();
//   document.getElementById("sembuh").innerHTML = data.recovered.value.toLocaleString();
//   document.getElementById("kematian").innerHTML = data.deaths.value.toLocaleString();
// });

// const setupEventListeners = () => {
//   selectElement.addEventListener('change', e => {
//     getDataCovid(e.target.value);
//   })
// }

// const makeNewOptionBox = data => {
//   const optionBox = document.createElement('option');
//   optionBox.innerHTML = data.name;
//   selectElement.appendChild(optionBox);
// }

// const manipulateData = data => {
//   for(let i=0; i < data.countries.length; i++) {
//     const singleData = data.countries[i];

//     makeNewOptionBox(singleData);
//   }
// }

// async function getDataCountries() {
//   try {
//     const result = await fetch('https://covid19.mathdro.id/api/countries');
//     const data = await result.json();
//     return data;
//   } catch(error) {
//     alert(error);
//   }
// }
// getDataCountries().then(data => {
//   manipulateData(data);
// })

// async function getDataCovid(e) {
//   try {
//     const resultCovid = await fetch('https://covid19.mathdro.id/api/confirmed');
//     const dataCovid = await resultCovid.json();
//     const dataCovidFiltered = dataCovid.find(el => el.countryRegion === e);
//     console.log(dataCovidFiltered);
  //   let card = `<div class="container">
  //   <h2>Kasus Covid -19 di ${dataCovidFiltered.countryRegion}</h2>
  //   <div class="board">
  //     <div class="card confirmed"><i class="fa fa-tachometer"></i><h5>Confirmed</h5><span id="confirmed">${dataCovidFiltered.confirmed.toLocaleString()}</span></div>
  //     <div class="card r"><i class="fa fa-check-square-o"></i><h5>Recovered Cases</h5><span id="recovered">${dataCovidFiltered.recovered.toLocaleString()}</span></div>
  //     <div class="card d"><i class="fa fa-times"></i><h5>Total Deaths</h5><span id="death">${dataCovidFiltered.deaths.toLocaleString()}</span></div>
  //   </div>
  // </div>`
//   wrapper.innerHTML = card;

//   } catch(error) {
//     alert(error);
//   }
// }

// setupEventListeners();