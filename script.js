import { notesData } from './notes.js';
import "./components/note-header.js"; 
import "./components/note-list.js";
import "./components/note-form.js";

document.addEventListener("DOMContentLoaded", () => {
  customElements.whenDefined("note-list").then(() => {
    const noteListEl = document.querySelector("note-list");
    if (noteListEl) {
      noteListEl.setNotes(notesData);
    } else {
      console.error("Element <note-list> not found in the DOM.");
    }
  });
});
