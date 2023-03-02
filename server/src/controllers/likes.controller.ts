import { Request, Response, NextFunction } from "express";
import { getByUser, create, getLikeId, deleteLike } from "../database/repositories/Likes.repository";
import { Like } from './../database/entities/Like.entity';

export const createLike = (req: Request, res: Response, nextFunc: NextFunction) => {
    try {
        const like = create(req.body.userId, req.body.productId);
        like.then(like => {
            if(like) res.status(201).send({ like });
            else res.status(400).send({ message: `There's been an error with the like saving.` });
        })
    } catch (err: any) {
        res.status(400).send({ message: 'The request has failed: ' + err });
    }
};

export const removeLike = (req: Request, res: Response, nextFunc: NextFunction) => {
    try {
        const like = getLikeId(req.body.userId, req.body.productId);
        if(like) {
            like.then(likeData => {
                deleteLike(Number(likeData.id));
            })
            res.status(201).send({ like });
        } else res.status(400).send({ message: `There's been an error with the like saving.` });
    } catch (err: any) {
        res.status(400).send({ message: 'The request has failed: ' + err });
    }
};

export const getLikes = (req: Request, res: Response, nextFunc: NextFunction) => {
    try {
        const likes = getByUser(req.body.userId);
        likes.then(likes => {
            res.status(201).send({ likes });
        })
        
    } catch (err: any) {
        res.status(400).send({ message: 'The request has failed: ' + err });
    }
};
