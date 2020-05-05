import './covid-country-search';
import logo from '../../assets/logo/covid-19-logo.jpeg';

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 
      `<nav>
        <img src="${logo}" alt="covid19 logo">
        <covid-country-search></covid-country-search>
      </nav>`
    ;
  }
}

customElements.define("nav-bar-covid", NavBar);