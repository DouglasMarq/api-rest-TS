import { inject, injectable } from 'inversify';
import UserController from './user';

@injectable()
export default class Controller {
  constructor(@inject(UserController) public readonly userController: UserController) {}
}
