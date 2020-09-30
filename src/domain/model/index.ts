import { injectable } from 'inversify';
import userModel from './user';
import * as _ from 'lodash';
import { threadId } from 'worker_threads';

@injectable()
export default class databaseIndex {
  private readonly userModel: userModel = new userModel();
  private readonly _type: string;
  constructor(type: string) {
    this._type = type;
  }

  public async create(obj: any) {
    switch (this._type) {
      case 'userModel':
        return await this.userModel.createUser(obj);
      default:
        break;
    }
  }

  public async find(obj: any) {
    switch (this._type) {
      case 'userModel':
        return await this.userModel.findUser({
          $or: [{ username: _.get(obj, 'username') }, { email: _.get(obj, 'email') }],
        });
      default:
        break;
    }
  }

  public async list(obj: any) {
    switch (this._type) {
      case 'userModel':
        return await this.userModel.findUsers(obj);
      default:
        break;
    }
  }
  public async update(obj: any) {
    switch (this._type) {
      case 'userModel':
        return await this.userModel.updateUser(obj);
      default:
        break;
    }
  }

  public async delete(obj: any) {
    switch (this._type) {
      case 'userModel':
        return await this.userModel.deleteUser({
          username: _.get(obj, 'username'),
          password: _.get(obj, 'password'),
        });
      default:
        break;
    }
  }

  public async deleteMany(obj: any) {
    switch (this._type) {
      case 'userModel':
        return await this.userModel.deleteUsers(obj);
      default:
        break;
    }
  }
}
