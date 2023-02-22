import { NextFunction, Request, Response } from 'express';
import * as userRepository from '../database/repositories/User.repository';
import { products } from './../assets/products';
import { chosenProducts } from './../assets/chosen-products';

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const user = await userRepository.getByEmail(req.body.email);
    try {
        if (!!!user) res.status(400).send({ message: 'The request has failed: User is not signed up' });
        else {
            if (user.email == req.body.email && user.password == req.body.password) {
                res.status(200).send({ id: user.id });
            } else res.status(400).send({ message: 'The request has failed: The login information does not match' });
        }
    } catch (error: any) {
        res.status(400).send({ message: 'The request has failed: ' + error });
    }
};

export const getProducts = (req: Request, res: Response, nextFunc: NextFunction) => {
    try {
        let prods = products;
        res.status(200).send(prods);
    } catch (err: any) {
        res.status(401).send({ message: `An error has occuried: ${err.message}` });
    }
};

export const getChosenProducts = (req: Request, res: Response, nextFunc: NextFunction) => {
    try {
        let chosenProds = chosenProducts;
        res.status(200).send(chosenProds);
    } catch (err: any) {
        res.status(401).send({ message: `An error has occuried: ${err.message}` });
    }
};




