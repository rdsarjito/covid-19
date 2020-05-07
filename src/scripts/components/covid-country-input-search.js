import './covid-country-list.js';
import './covid-box-summary';

import EventBus from "../utils/event-bus";

class CovidCountryInputSearch extends HTMLElement {
  constructor() {
    super();
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    EventBus.fire('search-country-change', {'payload': e.target.value });
  }
  _handleFocus() {
    EventBus.fire('search-country-toogle', {'payload': true });
  }

  connectedCallback() {
    this.innerHTML = this.render();
    this._input = this.querySelector('input');
    this._input.addEventListener('input', this._handleChange);
    this._input.addEventListener('focusin', this._handleFocus)
  }

  render() {
    return `
      <input placeholder="Cari negara..." />
    `;
  }
}

customElements.define("covid-country-input-search", CovidCountryInputSearch);