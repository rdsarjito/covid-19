import CovidData from "../data/data-covid";
import EventBus from "../utils/event-bus";
import "../components/covid-box-summary";
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

  async _requestWorld() {
    const summaryComponent = document.querySelector('covid-box-summary');
    // summaryComponent.loading = 'true';
    const res = await CovidData.getSummary();
    summaryComponent.summary = res;
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
    this._requestWorld();
    EventBus.register('select-country', this._requestCountry);
  }

  disconnectedCallback() {
    EventBus.remove('select-country');
  }
}

customElements.define("covid-main", CovidMain);
export default CovidData;