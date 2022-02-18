import { Note } from '../entities/Note';

export interface INoteRepository {
  findById(): Promise<Note>;
  list(): Promise<Note[]>;
  save(note: Note): Promise<Note>;
  update: Promise<void>;
  delete: Promise<void>;
}
