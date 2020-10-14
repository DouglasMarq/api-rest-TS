import { inject, injectable } from 'inversify';
import UserModel from '../model/user';
import PostumeModel from '../model/postume';

@injectable()
export default abstract class Service {
  constructor(@inject(UserModel) public readonly userMod: UserModel,
  @inject(PostumeModel) public readonly postumeMod: PostumeModel) {}
}
