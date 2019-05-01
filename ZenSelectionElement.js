import {PolymerElement, html} from '@polymer/polymer';

class ZenMenuSelectionElement extends PolymerElement {

  static get properties() { 
    return {
      chosen: {
        type: Boolean,
        value: ""
      }
    }
  }

  static get template() {
    return html`
      <style> </style>
      <span class="title">This is a Zen Menu Selection.</br></span>
      [[chosen]]
    `;
  }

  constructor() {
    super();
    this.name = 'selection1';
  }

  ready() {
    super.ready();
  }

  click() {
    console.log("click");
    this.chosen = true;
  }

  canDisplay() {

  }
}

customElements.define('zen-menu-selection', ZenMenuSelectionElement);