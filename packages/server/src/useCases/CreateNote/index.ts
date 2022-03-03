// import { NoteRepository } from '../../repositories/implementations/DebugRepository';
import { PostgresRepository } from '../../repositories/implementations/PostgresRepository';
import { CreateNoteController } from './CreateNoteController';
import { CreateNoteUseCase } from './CreateNoteUseCase';

// const createNoteRepository = new NoteRepository();
const postgresRepository = new PostgresRepository();

const createNoteUseCase = new CreateNoteUseCase(postgresRepository);

const createNoteController = new CreateNoteController(createNoteUseCase);

export { createNoteUseCase, createNoteController };
