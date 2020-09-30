import { inject, injectable } from 'inversify';
import UserModel from '../model/user';

@injectable()
export default abstract class Service {
  constructor(@inject(UserModel) public readonly userMod: UserModel) {}
}
