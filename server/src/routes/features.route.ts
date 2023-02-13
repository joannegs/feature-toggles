import { Router } from 'express';
import { getFeatures } from '../controllers/features.controller';

export const router = Router();

router.get('/features', getFeatures);


