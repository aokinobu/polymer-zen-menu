import {PolymerElement, html} from '@polymer/polymer';

class MyElement extends PolymerElement {

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
      <style> .xp { color: blue; } </style>
      
      <span class="xp" >Current XP: [[xp]]</span>
    `;
  }

  ready() {
    super.ready();
  }
}

customElements.define('zen-menu', MyElement);