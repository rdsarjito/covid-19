import './covid-country-app';
import logo from '../../assets/logo/covid-19-logo.jpeg';

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 
      `<nav>
        <img src="${logo}" alt="">
        <covid-country-app></covid-country-app>
      </nav>`
    ;
  }
}

customElements.define("nav-bar-covid", NavBar);