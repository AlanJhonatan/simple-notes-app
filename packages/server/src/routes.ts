import { Router } from 'express';
import { createNoteController } from './useCases/CreateNote';

const router = Router();

router.post('/note/create', (request, response) => {
  return createNoteController.handle(request, response);
});

export { router };
