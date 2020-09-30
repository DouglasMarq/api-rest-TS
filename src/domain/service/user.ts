import { inject, injectable } from 'inversify';
import userModel from '../model';

@injectable()
export default class Service {
  constructor(@inject(userModel) private readonly Model: userModel) {}

  async findUser(obj: any) {
    return await this.Model.userMod.findUser(obj);
  }

  async createUser(obj: any) {
    return await this.Model.userMod.createUser(obj);
  }

  async deleteUser(obj: any) {
    return await this.Model.userMod.deleteUser(obj);
  }

  async updateUser(obj: any) {
    return await this.Model.userMod.updateUser(obj);
  }
}
