import { Request, Response } from "express";
import UserSchema from "../../model/db/userSchema";
import BaseController from ".././base";
import * as _ from "lodash";

export default class UserController extends BaseController<UserSchema> {
  constructor() {
    super(UserSchema);
  }

  public async findUser(req: Request, res: Response) {
    try {
      return res.status(200).json({ "message:": await this.getEntity(req) });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  }

  public async createUser(req: Request, res: Response) {
    try {
      let result = await this.createEntity(req);
      return res
        .status(_.get(result, "code") || 404)
        .json({ "message:": _.get(result, "message") });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  }

  public async deleteUser(req: Request, res: Response) {
    try {
      return res.status(200).json({ "message:": await this.deleteEntity(req) });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  }

  public async updateUser(req: Request, res: Response) {
    try {
      return res.status(200).json({ "message:": await this.updateEntity(req) });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  }
}
