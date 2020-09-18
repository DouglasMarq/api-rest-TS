import { Application, Router as newRouter } from "express";
import {  injectable, inject } from "inversify";
import Controller from "./controller";

@injectable()
export default class Router {
  private readonly controller: Controller;

  constructor(@inject(Controller) controller: Controller) {
    this.controller = controller;
  }

  loadRouters(app: Application) {
    let router = newRouter();
    try {
      router.post(`/createRoute`, async (req, res) => {
        return this.controller.create(req, res);
      });
    } catch (err) {
      throw err;
    }
    try {
      router.get(`/findRoute`, async (req, res) => {
        return this.controller.find(req, res);
      });
    } catch (err) {
      throw err;
    }
    try {
      router.patch(`/updateRoute`, async (req, res) => {
        return this.controller.update(req, res);
      });
    } catch (err) {
      throw err;
    }
    try {
      router.delete(`/deleteRoute`, async (req, res) => {
        return this.controller.delete(req, res);
      });
    } catch (err) {
      throw err;
    }

    app.use("/api", router);
    return router;
  }
}
