import CovidCountryItem from './covid-country-item.js';

class CovidCountryList extends HTMLElement {
  constructor() {
    super();
  }

  set countries(countries) {
    this.generateCountryList(countries);
  }

  generateCountryList(countries) {
    this._listWrapper = this.querySelector('#covid-country-search-list');
    this._listWrapper.innerHTML = '';
    countries.forEach(c => {
      const country = new CovidCountryItem();
      country.model = c;
      this._listWrapper.appendChild(country);
    });
  }

  connectedCallback() {
    this.innerHTML = this.render();
    this._listWrapper = this.querySelector('#covid-country-search-list')
  }

  render() {
    return `
      <style>
        .covid-country-search-list {
          position: absolute;
          top: 55px;
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
      <div id="covid-country-search-list" class="covid-country-search-list">
      </div>
    `;
  }
 
}

customElements.define("covid-country-list", CovidCountryList);