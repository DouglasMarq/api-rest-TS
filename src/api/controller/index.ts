import { injectable } from "inversify";
import { Request, Response } from "express";
import UserController from "./user/userController";

@injectable()
export default class Controller {
  private readonly userController: UserController;

  constructor() {
    this.userController = new UserController();
  }

  async create(req: Request, res: Response) {
    //@TODO change from request type to internal type
    switch (req.body.type) {
      case "user":
        return await this.userController.createUser(req.body, res);
      default:
        break;
    }
  }

  async find(req: Request, res: Response) {
    //@TODO change from request type to internal type
    switch (req.body.type) {
      case "user":
        return await this.userController.findUser(req.body, res);
      default:
        break;
    }
  }

  async update(req: Request, res: Response) {
    //@TODO change from request type to internal type
    switch (req.body.type) {
      case "user":
        return await this.userController.updateUser(req.body, res);
      default:
        break;
    }
  }
  async delete(req: Request, res: Response) {
    //@TODO change from request type to internal type
    switch (req.body.type) {
      case "user":
        return await this.userController.deleteUser(req.body, res);
      default:
        break;
    }
  }
}
