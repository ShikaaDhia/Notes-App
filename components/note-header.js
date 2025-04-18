class NoteHeader extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
          header {
            background-color: #ff6666;
            color: white;
            padding: 1rem;
            text-align: center;
            font-size: 1.5rem;
          }
        </style>
        <header>
          Notes Keren 📝
        </header>
      `;
    }
  }
  
  customElements.define('note-header', NoteHeader);
  