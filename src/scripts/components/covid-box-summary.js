import thousandFormat from "../utils/thousandFormat";

class CovidBoxSummary extends HTMLElement {
  constructor() {
    super();
    this._loading = false;
    this._summary = {
      confirmed: {},
      recovered: {},
      deaths: {},
    }
  }

  set loading(loading) {
    this.innerHTML = this.render();
  }

  set summary(summary) {
    this._summary = summary;
    this._loading = false;
    this.innerHTML = this.render();
  }

  connectedCallback() {
    this.innerHTML = this.render();
  }

  textValueDisplay(value) {
    if (value === undefined) {
      return '<span>loading...<span>'
    }
    return thousandFormat(value) || '<span>loading...<span>'
  }

  render() {
    return `
      <div class="covid-box-board">
        <h2>Kasus ${this._summary.regionName ? `di ${this._summary.regionName}` : 'Seluruh Dunia'}</h2>
        <div class="covid-box-summary">
          <div class="covid-box-summary-item primary">
            <h3>Terkonfirmasi<h3>
            <h5>${this.textValueDisplay(this._summary.confirmed.value)}<h5>
          </div>
          <div class="covid-box-summary-item success">
            <h3>Sembuh<h3>
            <h5>${this.textValueDisplay(this._summary.recovered.value)}<h5>
          </div>
          <div class="covid-box-summary-item danger">
            <h3>Kematian<h3>
            <h5>${this.textValueDisplay(this._summary.deaths.value)}<h5>
          </div>
        </div>
      </div>
  `;
  }
}

customElements.define("covid-box-summary", CovidBoxSummary);