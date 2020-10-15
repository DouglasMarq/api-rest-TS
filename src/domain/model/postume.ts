import { Schema, model } from 'mongoose';
import * as _ from 'lodash';
import { injectable } from 'inversify';

const postumeMod = model(
  'postumes',
  new Schema({
    topic: { type: String, required: true, index: true },
    briefing: { type: String, required: false },
    description: { type: String, required: true },
    edited: { type: Boolean, required: false, default: false },
    createdBy: { type: String, required: true, index: true },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    updatedAt: {
      type: Date,
      default: new Date(),
    }
  })
);

@injectable()
export default class postumeModel {
  createPostume(obj: any) {
    return postumeMod.create(obj);
  }

  findPostume(obj: any) {
    return postumeMod.findOne(obj, {
      username: 1,
      email: 1,
      _id: 0,
    });
  }

  list(obj: any) {
    return postumeMod.find(obj, {
      username: 1,
      email: 1,
      _id: 0,
    });
  }

  findPostumeById(id: string) {
    return postumeMod.findById(id);
  }

  updatePostume(obj: any) {
    return postumeMod.updateOne(
      {
        username: _.get(obj, 'username'),
      },
      {
        $set: {
          password: _.get(obj, 'password'),
        },
        safe: true,
        upsert: true,
        new: true,
        projection: {
          username: 1,
          email: 1,
          _id: 0,
        },
      }
    );
  }

  deletePostume(obj: any) {
    return postumeMod.deleteOne(obj);
  }

  deletePostumeById(id: string) {
    return postumeMod.findByIdAndDelete(id);
  }

  deletePostumes(obj: any) {
    return postumeMod.deleteMany(obj);
  }
}
