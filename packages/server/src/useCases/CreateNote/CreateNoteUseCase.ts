import { Note } from '../../entities/Note';
import { INoteRepository } from '../../repositories/INoteRepository';
import { ICreateNoteRequestDTO } from './CreateNoteDTO';

export class CreateNoteUseCase {
  constructor(private notesRepository: INoteRepository) {}

  async execute(data: ICreateNoteRequestDTO): Promise<Note> {
    const note = new Note(data);

    await this.notesRepository.save(note);

    return note;
  }
}
