import {PolymerElement, html} from '@polymer/polymer';

class ZenMenuElement extends PolymerElement {

  static get properties() { 
    return {
      xp: {
        // notify: true,
        type: Number,
        value: 0
      },
      menu: {
        type: String,
        value: ""
      }
    }
  }

  static get template() {
    return html`
      <style> .xp { color: red; } </style>
      <span class="title">This is the Zen Menu Component.</br></span>
      <span class="tooltip">Current XP:</span><br />
      <span class="xp" >[[xp]]</span><br />
      <span class="tooltip">Current Menu:</span><br />
      <div class="menu" >[[menu]]</div>
    `;
  }

  ready() {
    super.ready();
  }

  updateMenu() {
    console.log("menu updated in menu element");

    this.menu = "menu was clicked when XP was:" + this.xp;
  }
}

customElements.define('zen-menu', ZenMenuElement);