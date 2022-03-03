import { prismaClient } from '../../database/prismaClient';
import { Note } from '../../entities/Note';
import { INoteRepository } from '../INoteRepository';

class PostgresRepository implements INoteRepository {
  findById(): Promise<Note> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<Note[]> {
    throw new Error('Method not implemented.');
  }
  async save(note: Note): Promise<Note> {
    await prismaClient.note.create({
      data: { ...note },
    });

    return note;
  }
  update: Promise<void>;
  delete: Promise<void>;
}

export { PostgresRepository };
