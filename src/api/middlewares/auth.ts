import { NextFunction, Request, Response } from 'express';

import { extractJwt } from '../../util/jwt';

export default async function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
  next();
  //   let { authorization } = req.headers;

  //   try {
  //     if (!authorization) throw new Error(`Authorization header not found`);

  //     if (authorization) {
  //       let token = (<string>authorization).replace(/^bearer /gi, '');

  //       let { payload } = await extractJwt(token);
  //       if (!payload) throw new Error(`Payload: ${JSON.stringify(payload)}`);
  //     }
  //     next();
  //   } catch (err) {
  //     return res.status(401).json({ message: err.stack });
  //   }
}
