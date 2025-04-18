class NoteHeader extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
          header {
            background-color: #B37584;
            color: white;
            padding: 1rem;
            text-align: center;
            font-size: 1.5rem;
          }
        </style>
        <header>
          To-DO 📝
        </header>
      `;
    }
  }
  
  customElements.define('note-header', NoteHeader);
  