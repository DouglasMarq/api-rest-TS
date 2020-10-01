import { inject, injectable } from 'inversify';
import UserController from './user';

export enum entities {
  USER = 'users',
}

@injectable()
export default class Controller {
  public app: any;
  constructor(@inject(UserController) public readonly userController: UserController) {}
}
