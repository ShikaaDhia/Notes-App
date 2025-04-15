class NoteList extends HTMLElement {
    setNotes(notes) {
      this.notes = notes;
      this.render();
    }
  
    render() {
      this.innerHTML = this.notes.map(note => `
        <div class="note">
          <h2>${note.title}</h2>
          <p>${note.body}</p>
          <small>${note.createdAt}</small>
        </div>
      `).join('');
    }
  }
  
  customElements.define('note-list', NoteList);
  