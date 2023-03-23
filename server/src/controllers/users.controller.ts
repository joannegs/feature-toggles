import { NextFunction, Request, Response } from 'express';
import * as userRepository from '../database/repositories/User.repository';
import { products } from './../assets/products';

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userRepository.getByEmail(req.body.email);
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
        const prods = products;
        let chosenProds = [];

        for (let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * prods.length);
            chosenProds.push(prods.splice(randomIndex, 1)[0]);
          }

        res.status(200).send(chosenProds);
    } catch (err: any) {
        res.status(401).send({ message: `An error has occuried: ${err.message}` });
    }
};




