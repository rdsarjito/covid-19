class CovidCountry extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<select name="" class="selectCountry">
    <option selected disabled>Select Country</option>
    </select>`
  }
}

customElements.define("covid-country-app", CovidCountry);