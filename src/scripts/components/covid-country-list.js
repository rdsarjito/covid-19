import './covid-country-item.js';

import EventBus from "../utils/event-bus";

class CovidCountryList extends HTMLElement {
  constructor() {
    super();
    this._countries = [];
    this._show = false;

    this._toogleShow = this._toogleShow.bind(this);
  }

  set countries(countries) {
    this._countries = countries;
    this.render();
  }

  static get observedAttributes() {
    return ['countries'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'countries') {
      console.log(newValue);
      // this._countries = JSON.parse(newValue); 
    }
    this.render();
  }

  _toogleShow(e) {
    // console.log(this._countries)
    // console.log(e.detail.payload);
    this._show = e.detail.payload;
    // this.render();
  }

  connectedCallback() {
    // EventBus.register('search-country-change', this._handleChange);
    EventBus.register('search-country-toogle', this._toogleShow);
  }

  render() {
    const list = this._countries.map(country => {
      return `<covid-country-item country=${country.name} iso3=${country.iso3}></covid-country-item>`
    }).join('');

    console.log(this._countries);

    this.innerHTML = `
      <style>
        .covid-country-search-list {
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
          width: 100%;
          display: block;
        }
      </style>
      <div class="covid-country-search-list">
        ${list}
      </div>
    `;
  }
 
}

customElements.define("covid-country-list", CovidCountryList);