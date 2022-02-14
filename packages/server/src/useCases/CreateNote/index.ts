import { NoteRepository } from '../../repositories/implementations/DebugRepository';
import { CreateNoteController } from './CreateNoteController';
import { CreateNoteUseCase } from './CreateNoteUseCase';

const createNoteRepository = new NoteRepository();

const createNoteUseCase = new CreateNoteUseCase(createNoteRepository);

const createNoteController = new CreateNoteController(createNoteUseCase);

export { createNoteUseCase, createNoteController };
