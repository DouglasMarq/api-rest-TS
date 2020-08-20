import { Application, Router as newRouter } from 'express';
import { injectable } from 'inversify';
import Controller from './controller';
import UserController from './controller/user/userController';
import { Request, Response } from "express";

@injectable()
export default class Router {
  private readonly controller: Controller;

  constructor() {
    this.controller = new Controller();
  }

  loadRouters(app: Application) {
    let router = newRouter();
    try {
      router.get(`/findRoute`, async (req, res) => {
        return this.controller.find(req, res);
      });
    }
    catch (err) {
      throw err;
    }
    // router.post(`/createRoute`, this.controller.create);
    // router.delete(`/deleteRoute`, this.controller.delete);
    // router.patch(`/updateRoute`, this.controller.update);

    app.use('/api', router);
    return router;
  }
}