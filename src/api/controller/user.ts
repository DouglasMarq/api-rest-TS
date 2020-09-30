import { Request, Response } from 'express';
import UserService from '../../domain/service/user';
import * as _ from 'lodash';
import { inject, injectable } from 'inversify';

@injectable()
export default class UserController {
  constructor(@inject(UserService) public readonly userSvc: UserService) {}

  findUser = async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ 'message:': await this.userSvc.findUser(req.body) });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  };

  createUser = async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ 'message:': 'creating' });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  };

  updateUser = async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ 'message:': 'updating' });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ 'message:': 'deleting' });
    } catch (e) {
      return res.status(404).json({ message: e.message, stack: e.stack });
    }
  };

  //   public async findUser(req: Request, res: Response) {
  //     try {
  //       return res.status(200).json({ 'message:': await this.getEntity(req) });
  //     } catch (e) {
  //       return res.status(404).json({ message: e.message, stack: e.stack });
  //     }
  //   }

  //   public async createUser(req: Request, res: Response) {
  //     try {
  //       let result = await this.createEntity(req);
  //       return res
  //         .status(_.get(result, 'code') || 404)
  //         .json({ 'message:': _.get(result, 'message') });
  //     } catch (e) {
  //       return res.status(404).json({ message: e.message, stack: e.stack });
  //     }
  //   }

  //   public async deleteUser(req: Request, res: Response) {
  //     try {
  //       return res.status(200).json({ 'message:': await this.deleteEntity(req) });
  //     } catch (e) {
  //       return res.status(404).json({ message: e.message, stack: e.stack });
  //     }
  //   }

  //   public async updateUser(req: Request, res: Response) {
  //     try {
  //       return res.status(200).json({ 'message:': await this.updateEntity(req) });
  //     } catch (e) {
  //       return res.status(404).json({ message: e.message, stack: e.stack });
  //     }
  //   }
}
