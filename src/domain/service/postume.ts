import { inject, injectable } from 'inversify';
import postumeModel from '../model';

@injectable()
export default class Service {
  constructor(@inject(postumeModel) private readonly Model: postumeModel) {}

  async findPostume(obj: any) {
    return await this.Model.postumeMod.findPostume(obj);
  }

  async createPostume(obj: any) {
    return await this.Model.postumeMod.createPostume(obj);
  }

  async deletePostume(obj: any) {
    return await this.Model.postumeMod.deletePostume(obj);
  }

  async updatePostume(obj: any) {
    return await this.Model.postumeMod.updatePostume(obj);
  }
}
