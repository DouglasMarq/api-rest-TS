import { Application, Router as newRouter } from 'express';
import { inject, injectable } from 'inversify';
import Controller from '../controller';
import UserRouter from './user';

@injectable()
export default class IntegrableRouter {
  constructor(
    @inject(Controller) public readonly controller: Controller,
    @inject(UserRouter) private readonly userRouter: UserRouter
  ) {}

  load(app: Application) {
    let router = newRouter();
    this.userRouter.load(app);
    return router;
  }
}
