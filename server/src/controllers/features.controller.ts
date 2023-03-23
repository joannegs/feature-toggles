import { Request, Response, NextFunction } from "express";
import { featureToggles } from './../assets/feature-toggles';

export const getFeatures = (req: Request, res: Response, nextFunc: NextFunction) => {
  try {
    let features =  featureToggles;
    res.status(200).send(features);
  } catch (err: any) {
    res.status(401).send({ message: `An error has occuried: ${err.message}` });
  }
};

export const getAllowedUsersToDarkLauchFeature = (req: Request, res: Response, nextFunc: NextFunction) => {
  try {
    let allowedUsers =  ["1", "3", "5"];
    res.status(200).send(allowedUsers);
  } catch (err: any) {
    res.status(401).send({ message: `An error has occuried: ${err.message}` });
  }
};
