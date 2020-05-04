import './covid-country-item-app.js';
import CovidData from '../data/data-covid.js';

class CovidCountry extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }

set countries(countries) {
  this._countries = countries;
  this.render();
}

set selectedCountry(country) {
  this._country = country;
  CovidData.getConfimedCases();
}

render() {
  this.shadowDOM.innerHTML = `
    <style>
      .covid-country-app {
        background: rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 0.5rem;
        position: relative;
        width: 200px;
      }
      .covid-country-app input {
        border: none;
        margin: 0.5rem;
        background: transparent;
        outline: none;
      }
      .covid-country-app-list {
        position: absolute;
        top: 35px;
        left: 0;
        background: white;
        border: 1px solid rgba(0,0,0,0.1);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
        padding: 1rem;
        overflow-y: auto;
        max-height: 60vh;
      }
    </style>
  `;
  const wrapper = document.createElement('div');
  const input = document.createElement('input');
  const wrapperList = document.createElement('div');
  wrapper.appendChild(input);
  wrapper.appendChild(wrapperList);
  wrapper.setAttribute('class', 'covid-country-app');
  wrapperList.setAttribute('class', 'covid-country-app-list');
  
  this._countries.forEach(country => {
    const countryItem = document.createElement("covid-country-item-app");
    countryItem.country = country;
    wrapperList.appendChild(countryItem);
  });
  
  this.shadowDOM.appendChild(wrapper);
}

renderError(message) {
    this.shadowDOM.innerHTML = 
    `<style>
      .placeholder {
        font-weight: lighter;
        color: rgba(0,0,0,0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    </style>`;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
}
 
}

customElements.define("covid-country-app", CovidCountry);