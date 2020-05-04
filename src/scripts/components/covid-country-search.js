import './covid-country-list.js';
import './covid-country-input-search.js';
import './covid-box-summary';
import './covid-world-app';

import EventBus from "../utils/event-bus";

class CovidCountry extends HTMLElement {
  constructor() {
    super();
    this._searching = false;
    this._countries = [];
    this._handleChange = this._handleChange.bind(this);
    this._toogleSearch = this._toogleSearch.bind(this);
  }

  _handleChange(e) {
    console.log(e.detail.payload);
  }
  _toogleSearch(e) {
    this._searching = e.detail.payload;
  }

  set countries(countries) {
    this._countries = countries;
    this._renderSearch();
  }

  connectedCallback() {
    this._renderSearch();
  }

  _renderSearch() {
    this.innerHTML = this.render();
  }

  render() {
    return `
      <style>
        .covid-country-search {
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 0.5rem;
          position: relative;
          width: 200px;
          display: flex;
        }
        .covid-country-search input {
          border: none;
          margin: 0.5rem;
          background: transparent;
          outline: none;
          width: 100%;
          padding: 0.5rem;
          font-size: 1rem;
        }
      </style>
      <div class="covid-country-search">
        <covid-country-input-search></covid-country-input-search>
        <covid-country-list countries=${JSON.stringify(this._countries)}></covid-country-list>
      </div>
    `;
  }
 
}

customElements.define("covid-country-search", CovidCountry);