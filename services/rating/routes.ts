import { Router } from 'https://deno.land/x/oak/mod.ts'

import RatingController from './controllers/rating.controller.ts';

const router = new Router();

router.get('/ratings', RatingController.index);

export default router;
