class CovidBoxSummary extends HTMLElement {
  constructor() {
    super();
    this._summary = {}
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
    <div class="covid-box-summary">
      <h2>Kasus Covid -19 | ${this._summary.regionName ? `di ${this._summary.regionName}` : 'Seluruh Dunia'}</h2>
    </div>
`;
}

renderError(message) {
}
 
}

customElements.define("covid-box-summary", CovidBoxSummary);