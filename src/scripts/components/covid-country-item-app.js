import "./covid-country-app";
class CovidCountryItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});

    this.onClickHandler = () => {
      const selectCountry = document.querySelector('covid-country-app');
      selectCountry.selectedCountry = this._country.iso3;
    }
  }

  set country(country) {
    this._country = country;
    this.render();
  }


  render() {
    const button = document.createElement('button');
    button.onclick = this.onClickHandler;
    button.setAttribute('value', this._country.iso3);
    button.setAttribute('class', 'covid-country-item-app');
    const text = document.createElement('p');
    text.innerHTML = `${this._country.name}`;
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
        .covid-country-item-app {
          background: rgba(0,0,0,0.1);
          padding: 0.5rem;
          border-radius: 0.5rem;
          width: 100%;
          border: 0;
          text-align: left;
        }
        .covid-country-item-app {

        }
      </style>`;
    this.shadowDOM.appendChild(button);
  }

  renderError(message) {
  }
}

customElements.define("covid-country-item-app", CovidCountryItem);