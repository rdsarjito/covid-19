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
    <button class="covid-country-item">
      ${this.model.name}
    </button>
    `;
  }

}

customElements.define("covid-country-item", CovidCountryItem);
export default CovidCountryItem;
