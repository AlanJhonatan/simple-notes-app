import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
  response.json({ hello: 'world' });
});

export { router };
