import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import UserController from './user';
import UserService from '../../domain/service/user';

export enum entities {
  USER = 'users',
}

@injectable()
export default class Controller {
  public app: any;
  constructor(@inject(UserController) public readonly userController: UserController) {}

  getEntity(type: string) {
    switch (type) {
      case 'user':
        return entities.USER;
      default:
        return entities.USER;
    }
  }

  create = async (req: Request, res: Response) => {
    // //@TODO change from request type to internal type
    // switch (req.body.type) {
    //   case 'user':
    //     return await this.userController.createUser(req.body, res);
    //   default:
    //     break;
    // }
  };

  find = async (req: Request, res: Response) => {
    //@TODO change from request type to internal type
    // switch (req.body.type) {
    //   case 'user':
    //     return await this.userController.findUser(req.body, res);
    //   default:
    //     break;
    // }
  };

  update = async (req: Request, res: Response) => {
    //@TODO change from request type to internal type
    // switch (req.body.type) {
    //   case 'user':
    //     return await this.userController.updateUser(req.body, res);
    //   default:
    //     break;
    // }
  };
  delete = async (req: Request, res: Response) => {
    //@TODO change from request type to internal type
    // switch (req.body.type) {
    //   case 'user':
    //     return await this.userController.deleteUser(req.body, res);
    //   default:
    //     break;
    // }
  };
}
