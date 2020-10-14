import { inject, injectable } from 'inversify';
import UserController from './user';
import PostumeController from './postume';

@injectable()
export default class Controller {
  constructor(@inject(UserController) public readonly userController: UserController,
  @inject(PostumeController) public readonly postumeController: PostumeController) {}
}
