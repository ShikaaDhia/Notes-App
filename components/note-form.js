import { notesData } from "../notes.js";

class NoteForm extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <form id="note-form">
                <input type="text" id="title" placeholder="Judul Catatan" required>
                <textarea id="body" placeholder="Isi Catatan" required></textarea>
                <button type="submit">Tambah Catatan</button>
            </form>
        `;
    }

    connectedCallback() {
        this.querySelector("#note-form").addEventListener("submit", (event) => {
            event.preventDefault();

            const title = this.querySelector("#title").value;
            const body = this.querySelector("#body").value;

            const newNote = { id: notes.length + 1, title, body, createdAt: new Date() };
            notes.push(newNote);

            document.querySelector("note-list").setNotes(notes);
            this.querySelector("#note-form").reset();
        });
    }
}

customElements.define("note-form", NoteForm);
