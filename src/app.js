import "regenerator-runtime";
import "./styles/style.css";
import "./styles/responsive.css";
import "./scripts/components/nav-bar-covid";
import CovidData from "./scripts/data/data-covid";
import "./scripts/components/covid-box-summary";
import EventBus from "./scripts/utils/event-bus";


class CovidMain extends HTMLElement {
  constructor() {
    super();
    this._requestCountry = this._requestCountry.bind(this);
  }

  async _init() {
    const selectCountry = document.querySelector('covid-country-search');
    const { countries } = await CovidData.getAllCountries();
    selectCountry.countries = countries;
  }

  async _requestCountry(e) {
    const summaryComponent = document.querySelector('covid-box-summary');
    const res = await CovidData.getSingleCountry(e.detail.payload.iso3);
    summaryComponent.summary = { ...res, regionName: e.detail.payload.name };
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
  }

  connectedCallback() {
    this._init();
    EventBus.register('select-country', this._requestCountry);
  }

  disconnectedCallback() {
    EventBus.remove('select-country');
  }
}

customElements.define("covid-main", CovidMain);
