import { Request, Response } from 'express';
import UserService from '../../domain/service/user';
import * as _ from 'lodash';
import { inject, injectable } from 'inversify';

@injectable()
export default class UserController {
  constructor(@inject(UserService) private readonly userSvc: UserService) {}

  findUser = async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ 'message:': await this.userSvc.findUser(req.body) });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  };

  createUser = async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ 'message:': await this.userSvc.createUser(req.body) });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  };

  updateUser = async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ 'message:': await this.userSvc.updateUser(req.body) });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ 'message:': await this.userSvc.deleteUser(req.body) });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  };
}
