import { Router } from './deps.ts'

import RatingController from './controllers/rating.controller.ts';

const router = new Router();

router
  .get('/ratings', RatingController.index)
  .post('/ratings', RatingController.create);

export default router;
