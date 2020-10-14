import { injectable, inject } from 'inversify';
import UserModel from './user';
import PostumeModel from './postume';
import * as _ from 'lodash';

@injectable()
export default class BaseModel {
  constructor(@inject(UserModel) public readonly userMod: UserModel,
  @inject(PostumeModel) public readonly postumeMod: PostumeModel) {}
}
