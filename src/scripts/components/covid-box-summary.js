import thousandFormat from "../utils/thousandFormat";

class CovidBoxSummary extends HTMLElement {
  constructor() {
    super();
    this._summary = {
      confirmed: {},
      recovered: {},
      deaths: {},
    }
  }

  set summary(summary) {
    this._summary = summary;
    this.innerHTML = this.render();
  }

  connectedCallback() {
    this.innerHTML = this.render();
  }

  render() {
    return `
      <div class="covid-box-board">
        <h2>Kasus ${this._summary.regionName ? `di ${this._summary.regionName}` : 'Seluruh Dunia'}</h2>
        <div class="covid-box-summary">
          <div class="covid-box-summary-item primary">
            <h3>Terkonfirmasi<h3>
            <h5>${this._summary.confirmed.value ? thousandFormat(this._summary.confirmed.value) : '0'}<h5>
          </div>
          <div class="covid-box-summary-item success">
            <h3>Sembuh<h3>
            <h5>${this._summary.recovered.value ? thousandFormat(this._summary.recovered.value) : '0'}<h5>
          </div>
          <div class="covid-box-summary-item danger">
            <h3>Kematian<h3>
            <h5>${this._summary.deaths.value ? thousandFormat(this._summary.deaths.value) : '0'}<h5>
          </div>
        </div>
      </div>
  `;
  }
}

customElements.define("covid-box-summary", CovidBoxSummary);