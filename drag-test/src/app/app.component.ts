import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { NotesService } from './notes.service';
import { Note } from './note';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoteComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'drag-test';
  noteService: NotesService = inject(NotesService);
  notes: Note[] = this.noteService.getAllNotes();

  newNote() {
    this.noteService.newNote()
  }
}
