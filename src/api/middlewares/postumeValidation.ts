import { NextFunction, Request, Response } from 'express';
import joi from 'joi';

export default function PostumeValidationMiddleware(req: Request, res: Response, next: NextFunction) {
  //@TODO Remove next -- debug purpose
  try {
    let res = joi
      .object({
        topic: joi.string().min(6).max(128).required(),
        briefing: joi.string().max(32).required(),
        description: joi.string().required(),
        createdBy: joi.string().required()
      })
      .validate(req.body);
    if (res.error && res.error.details && res.error.details[0].message) {
      //@TODO fix throw message coming undefined
      throw new Error(res.error.details[0].message);
    }
    next();
  } catch (err) {
    return res.status(401).json({ message: err });
  }
}
