import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Note[] = [
    {
      title: "Note #1",
      description: "Lorem ipsum Lorem ipsum Lorem ipsum"
    },
  ]

  getAllNotes(): Note[] {
    return this.notes;
  }

  newNote() {
    this.notes.push({
      title: "Note",
      description: "Description"
    })
  }

  constructor() { }
}
