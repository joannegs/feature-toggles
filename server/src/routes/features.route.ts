import { Router } from 'express';
import { getFeatures, getAllowedUsersToDarkLauchFeature } from '../controllers/features.controller';

export const router = Router();

router.get('/features', getFeatures);
router.post('/dark-lauch-users', getAllowedUsersToDarkLauchFeature);


