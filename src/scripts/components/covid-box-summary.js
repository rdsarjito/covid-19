class CovidBoxSummary extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }

set summary(summary) {
  this._summary = summary;
  this.render();
}

render() {
  this.innerHTML = `
  <div class="container">
    <h2>Kasus Covid -19 di ${this.summary.countryRegion}</h2>
    <div class="board">
      <div class="card confirmed"><i class="fa fa-tachometer"></i><h5>Confirmed</h5><span id="confirmed">${this.summary.confirmed.toLocaleString()}</span></div>
      <div class="card r"><i class="fa fa-check-square-o"></i><h5>Recovered Cases</h5><span id="recovered">${this.summary.recovered.toLocaleString()}</span></div>
      <div class="card d"><i class="fa fa-times"></i><h5>Total Deaths</h5><span id="death">${this.summary.deaths.toLocaleString()}</span></div>
    </div>
  </div>
`;
}

renderError(message) {
    this.shadowDOM.innerHTML = `
      <div class="container">
        <h2>Kasus Covid -19 di ${country.countryRegion}</h2>
        <div class="board">
          <div class="card confirmed"><i class="fa fa-tachometer"></i><h5>Confirmed</h5><span id="confirmed">${country.confirmed.toLocaleString()}</span></div>
          <div class="card r"><i class="fa fa-check-square-o"></i><h5>Recovered Cases</h5><span id="recovered">${country.recovered.toLocaleString()}</span></div>
          <div class="card d"><i class="fa fa-times"></i><h5>Total Deaths</h5><span id="death">${country.deaths.toLocaleString()}</span></div>
        </div>
      </div>
    `;
}
 
}

customElements.define("covid-box-summary", CovidBoxSummary);