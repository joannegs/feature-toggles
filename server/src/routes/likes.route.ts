import { Router } from 'express';
import { getLikes, createLike, removeLike } from '../controllers/likes.controller';

export const router = Router();

router.post('/likes', getLikes);
router.post('/like', createLike);
router.post('/removeLike', removeLike);


