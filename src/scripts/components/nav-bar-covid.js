class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 
      `<nav>
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
          <i class="fa fa-bars"></i>
        </label>
        <img src="./img/covid-19-logo.jpeg" alt="">
        <ul>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#penjelasan">Penjelasan</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>`
    ;
  }
}

customElements.define("nav-bar-covid", NavBar);