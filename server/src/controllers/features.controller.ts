import { Request, Response, NextFunction } from "express";
import { featureToggles } from './../assets/feature-toggles';
import { getById } from "../database/repositories/User.repository";

export const getFeatures = (req: Request, res: Response, nextFunc: NextFunction) => {
  try {
    let features =  featureToggles;
    res.status(200).send(features);
  } catch (err: any) {
    res.status(401).send({ message: `An error has occuried: ${err.message}` });
  }
};

export const getAllowedUsersToDarkLauchFeature = async (req: Request, res: Response, nextFunc: NextFunction) => {
  try {
    const user = await getById(Number(req.body.userId)); 
    res.status(200).send(user.email.endsWith("@gmail.com"));
  } catch (err: any) {
    res.status(401).send({ message: `An error has occuried: ${err.message}` });
  }
};
