import { Application, Router as newRouter } from 'express';
import { inject, injectable } from 'inversify';
import Controller from './controller';
import Routers from './router';

@injectable()
export default class Router {
  controller: Controller;

  constructor(
    @inject(Controller) controller: Controller,
    @inject(Routers) private readonly routers: Routers
  ) {
    this.controller = controller;
  }

  loadRouters(app: Application) {
    let router = newRouter();

    app.use('/api', router);
    this.routers.load(app);
    return router;
  }
}
