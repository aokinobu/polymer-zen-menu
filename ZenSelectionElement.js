import {PolymerElement, html} from '@polymer/polymer';

class ZenMenuSelectionElement extends PolymerElement {

  static get properties() { 
    return {
      chosen: {
        type: String,
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

  ready() {
    super.ready();
  }

  click() {
    console.log("click");
    this.chosen = "yeay i was picked";
  }
}

customElements.define('zen-menu-selection', ZenMenuSelectionElement);