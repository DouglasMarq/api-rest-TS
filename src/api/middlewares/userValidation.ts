import { NextFunction, Request, Response } from 'express';
import joi from 'joi';

export default function UserValidationMiddleware(req: Request, res: Response, next: NextFunction) {
  //@TODO Remove next -- debug purpose
  try {
    let res = joi
      .object({
        username: joi.string().min(6).max(32).required(),
        password: joi.string().min(8).max(256).required(),
        email: joi
          .string()
          .email({ tlds: { allow: true } })
          .required(),
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
