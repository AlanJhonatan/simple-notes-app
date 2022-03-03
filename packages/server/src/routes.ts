import { Router } from 'express';
import { createNoteController } from './useCases/CreateNote';

const router = Router();

// router.get('/note/:noteId', readNoteController.handle);

router.post('/note/create', (request, response) => createNoteController.handle);

export { router };
