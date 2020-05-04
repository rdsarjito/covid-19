class CovidWorld extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="container">
    <h2>Kasus Covid -19 di Dunia</h2>
    <div class="board">
      <div class="card confirmed"><i class="fa fa-tachometer"></i><h5>Terkonfirmasi</h5><span id="tekonfirmasi"></span></div>
      <div class="card recovered"><i class="fa fa-check-square-o"></i><h5>Sembuh</h5><span id="sembuh"></span></div>
      <div class="card death"><i class="fa fa-times"></i><h5>Meninggal</h5><span id="kematian"></span></div>
    </div>
    </div>`
  }
}

customElements.define("covid-world-app", CovidWorld);