import "./covid-country-search";
import EventBus from "../utils/event-bus";

class CovidCountryItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  static get observedAttributes() {
    return ['country', 'iso3'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'country') {
      this._country = newValue; 
    }
    if (name === 'iso3') {
      this._iso3 = newValue; 
    }
    this.render();
  }

  onClickHandler() {
    EventBus.fire('select-country', {'payload': { iso3: this._iso3, name: this._country, } });
  }

  render() {
    const button = document.createElement('button');
    button.onclick = this.onClickHandler;
    button.setAttribute('value', this._iso3);
    button.setAttribute('class', 'covid-country-item');
    const text = document.createElement('p');
    text.innerHTML = `${this._country}`;
    button.appendChild(text);
    this.shadowDOM.innerHTML = 
      `<style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 5px;
          overflow: hidden;
        }
        .covid-country-item {
          background: rgba(0,0,0,0.1);
          padding: 0.5rem;
          border-radius: 0.5rem;
          width: 100%;
          border: 0;
          text-align: left;
        }
        .covid-country-item {

        }
      </style>`;
    this.shadowDOM.appendChild(button);
  }

  renderError(message) {
  }
}

customElements.define("covid-country-item", CovidCountryItem);