import './covid-country-list.js';
import './covid-country-input-search.js';
import './covid-box-summary';

import EventBus from "../utils/event-bus";

class CovidCountry extends HTMLElement {
  constructor() {
    super();
    this._countries = [];
    this._handleChange = this._handleChange.bind(this);
    this._toogleSearch = this._toogleSearch.bind(this);
  }

  _handleChange(event) {
    const regexSearch = new RegExp(`${event.detail.payload}.+`, 'g');
    const filteredCountry = this._countries.filter(c => regexSearch.test(c.name.toLowerCase()));
    this._countryList.countries = filteredCountry;
    console.log(filteredCountry);
  }

  _toogleSearch(show) {
    const dropdown = this.querySelector('#dropdown');
    if (show) {
      dropdown.classList.add('active');
    } else {
      dropdown.classList.remove('active');
    }
  }

  set countries(countries) {
    this._countries = countries;
    this._renderSearch();
  }
  
  connectedCallback() {
    EventBus.register('search-country-toogle', (e) => this._toogleSearch(e.detail.payload));
    EventBus.register('search-country-change', this._handleChange);
    EventBus.register('select-country', () => this._toogleSearch(false));

    this._renderSearch();

    document.addEventListener('click', (e) => {
      if (!this.contains(e.target)) {
        this._toogleSearch(false);
      }
    })
  }

  _renderSearch() {
    this.innerHTML = this.render();
    this._countryList = document.querySelector('covid-country-list');
    this._countryList.countries = this._countries;
  }

  render() {
    return `
      <div class="covid-country-search">
        <covid-country-input-search></covid-country-input-search>
        <div class="dropdown" id="dropdown">
          <covid-country-list></covid-country-list>
        </div>
      </div>
    `;
  }
 
}

customElements.define("covid-country-search", CovidCountry);