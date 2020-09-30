import { Application, Router as newRouter } from 'express';
import { inject, injectable } from 'inversify';
import { nextTick } from 'process';
import Controller from '../controller';
import AuthMiddleware from '../middlewares/auth';

@injectable()
export default class Router {
  //   readonly middleware: AuthMiddleware;

  constructor(@inject(Controller) public readonly controller: Controller) {
    // this.middleware = AuthMiddleware;
  }

  load(app: Application) {
    let router = newRouter();
    router.use(AuthMiddleware);
    router.get('/find', this.controller.userController.findUser);
    app.use(`/api/${this.controller.getEntity('user')}`, router);
    return router;
  }
}
