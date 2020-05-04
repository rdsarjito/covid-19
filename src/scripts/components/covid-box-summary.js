

class CovidBoxSummary extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }

set summary(summary) {
  this._summary = summary;
  this.render();
}

set selectedCountry(country) {
  this._country = country;
}

render() {
  this.shadowDOM.innerHTML = `
    <style>
      .covid-country-app {
        background: rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 0.5rem;
        position: relative;
        width: 200px;
      }
      .covid-country-app input {
        border: none;
        margin: 0.5rem;
        background: transparent;
        outline: none;
      }
      .covid-country-app-list {
        position: absolute;
        top: 35px;
        left: 0;
        background: white;
        border: 1px solid rgba(0,0,0,0.1);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
        padding: 1rem;
        overflow-y: auto;
        max-height: 60vh;
      }
    </style>
  `;
  const wrapper = document.createElement('div');
  const input = document.createElement('input');
  const wrapperList = document.createElement('div');
  wrapper.appendChild(input);
  wrapper.appendChild(wrapperList);
  wrapper.setAttribute('class', 'covid-country-app');
  wrapperList.setAttribute('class', 'covid-country-app-list');
  
  this._summary.forEach(country => {
    const countryItem = document.createElement("covid-country-item-app");
    countryItem.country = country;
    wrapperList.appendChild(countryItem);
  });
  
  this.shadowDOM.appendChild(wrapper);
}

renderError(message) {
    this.shadowDOM.innerHTML = 
    `<style>
      .placeholder {
        font-weight: lighter;
        color: rgba(0,0,0,0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    </style>`;
    this.shadowDOM.innerHTML += `
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

customElements.define("covid-country-app", CovidBoxSummary);