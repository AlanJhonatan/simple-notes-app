import { Note } from '../../entities/Note';
import { INoteRepository } from '../INoteRepository';

export class NoteRepository implements INoteRepository {
  constructor() {}

  findById(): Promise<Note> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<Note[]> {
    throw new Error('Method not implemented.');
  }

  async save(note: Note): Promise<void> {
    console.log('repository .save');
  }

  update: Promise<void>;
  delete: Promise<void>;
}
