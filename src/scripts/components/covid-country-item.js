import "./covid-country-search";
import EventBus from "../utils/event-bus";

class CovidCountryItem extends HTMLElement {
  constructor() {
    super();
    this.model = {
      name: '',
      iso3: null
    }
    this.onclick = this._onClickHandler;
  }

  _onClickHandler() {
    EventBus.fire('select-country', {'payload': { iso3: this.model.iso3, name: this.model.name, } });
  }

  connectedCallback() {
    this.innerHTML = this.render();
  }

  render() {
    return `
      <style>
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
    </style>
    <button class="covid-country-item">
      ${this.model.name}
    </button>
    `;
  }

}

customElements.define("covid-country-item", CovidCountryItem);
export default CovidCountryItem;
