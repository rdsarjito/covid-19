import './covid-country-list.js';
import './covid-box-summary';
import './covid-world-app';

import EventBus from "../utils/event-bus";

class CovidCountryInputSearch extends HTMLElement {
  constructor() {
    super();
    this._handleChange = this._handleChange.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._handleFocus = this._handleFocus.bind(this);
  }

  _handleChange(e) {
    EventBus.fire('search-country-change', {'payload': e.target.value });
  }
  _handleBlur(e) {
    EventBus.fire('search-country-toogle', {'payload': false });
  }
  _handleFocus(e) {
    EventBus.fire('search-country-toogle', {'payload': true });
  }

  connectedCallback() {
    this.innerHTML = this.render();
    this._input = this.querySelector('input');
    console.log(this._input);
    this._input.addEventListener('keypress', this._handleChange);
    this._input.addEventListener('focusin', this._handleFocus);
  }

  render() {
    return `
      <input placeholder="Cari negara..." />
    `;
  }
 
}

customElements.define("covid-country-input-search", CovidCountryInputSearch);