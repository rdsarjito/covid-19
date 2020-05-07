import CovidCountryItem from './covid-country-item.js';

class CovidCountryList extends HTMLElement {
  set countries(countries) {
    this.generateCountryList(countries);
  }

  generateCountryList(countries) {
    this._listWrapper = this.querySelector('#covid-country-search-list');
    if (countries.length) {
      this._listWrapper.innerHTML = '';
      countries.forEach(country => {
        const countryItem = new CovidCountryItem();
        countryItem.model = country;
        this._listWrapper.appendChild(countryItem);
      });
    }
  }

  connectedCallback() {
    this.innerHTML = this.render();
  }

  render() {
    return `
      <div id="covid-country-search-list" class="covid-country-search-list">
        <p>loading...</p>
      </div>
    `;
  }
 
}

customElements.define("covid-country-list", CovidCountryList);