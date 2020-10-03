import { Application, Router as newRouter } from 'express';
import { inject, injectable } from 'inversify';
import Controller from '../controller';
import AuthMiddleware from '../middlewares/auth';
import UserValidationMiddleware from '../middlewares/userValidation';

@injectable()
export default class Router {
  constructor(@inject(Controller) public readonly controller: Controller) {}

  load(app: Application) {
    let router = newRouter();
    router.use(AuthMiddleware);
    router.use(UserValidationMiddleware);
    router.post('/create', this.controller.userController.createUser);
    router.post('/read', this.controller.userController.findUser);
    router.patch('/update', this.controller.userController.updateUser);
    router.delete('/delete', this.controller.userController.deleteUser);
    app.use(`/api/users`, router);
    return router;
  }
}
