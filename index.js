import {PolymerElement, html} from '@polymer/polymer';
// import {ZenMenuSelectionElement} from './ZenSelectionElement.js';
import './ZenSelectionElement.js';

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
      <style> .xp { color: red;   display: block;  float: left;   border: 1px solid red;   } </style>
      <span class="title">This is the Zen Menu Component.</br></span>
      <span class="tooltip">Current XP:</span><br />
      <span class="xp" >[[xp]]</span><br />
      <span class="tooltip">Current Menu:</span><br />
      <div class="menu" >[[menu]]</div>
      <zen-menu-selection on-click="selectionClick"></zen-menu-selection>
    `;
  }

  ready() {
    super.ready();
  }

  updateMenu() {
    console.log("menu updated in menu element");

    this.menu = "menu was clicked when XP was:" + this.xp;
  }

  selectionClick(e) {
    console.log(e);
    let element = this.shadowRoot.querySelector('zen-menu-selection');
    element.click();
    console.log(element.name);
  }
}

customElements.define('zen-menu', ZenMenuElement);