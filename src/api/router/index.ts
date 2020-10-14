import { Application, Router as newRouter } from 'express';
import { inject, injectable } from 'inversify';
import Controller from '../controller';
import UserRouter from './user';
import PostumeRouter from './postume';

@injectable()
export default class IntegrableRouter {
  constructor(
    @inject(Controller) public readonly controller: Controller,
    @inject(UserRouter) private readonly userRouter: UserRouter,
    @inject(PostumeRouter) private readonly postumeRouter: PostumeRouter
  ) {}

  load(app: Application) {
    let router = newRouter();
    this.userRouter.load(app);
    this.postumeRouter.load(app);
    return router;
  }
}
