import { Application, Router as newRouter } from 'express';
import { inject, injectable } from 'inversify';
import Controller from '../controller';
import AuthMiddleware from '../middlewares/auth';
import PostumeValidationMiddleware from '../middlewares/postumeValidation';

@injectable()
export default class Router {
  constructor(
    @inject(Controller) public readonly controller: Controller
  ) {}

  load(app: Application) {
    let router = newRouter();
    router.use(AuthMiddleware);
    router.use(PostumeValidationMiddleware);
    router.post('/create', this.controller.postumeController.createPostume);
    router.post('/read', this.controller.postumeController.findPostume);
    router.patch('/update', this.controller.postumeController.updatePostume);
    router.delete('/delete', this.controller.postumeController.deletePostume);
    app.use(`/api/postumes`, router);
    return router;
  }
}
