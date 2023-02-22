import { Router } from 'express';
import { login, getChosenProducts, getProducts } from '../controllers/users.controller'; 

export const router = Router();

router.post('/login', login);
router.get('/getProducts', login);
router.get('/chosen-products', getChosenProducts);


