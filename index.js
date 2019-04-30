import {PolymerElement, html} from '@polymer/polymer';

class ZenMenuElement extends PolymerElement {

  static get properties() { 
    return {
      xp: {
        // notify: true,
        type: Number,
        value: 0
      }
    }
  }

  static get template() {
    return html`
      <style> .xp { color: red; } </style>
      <span class="title">This is the Zen Menu Component.</br></span>
      <span class="tooltip">Current XP:</span><br />
      <span class="xp" >[[xp]]</span>
    `;
  }

  ready() {
    super.ready();
  }
}

customElements.define('zen-menu', ZenMenuElement);