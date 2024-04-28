import { Component, Input } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input() note!: Note;
}
