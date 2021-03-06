import { Schema, model } from 'mongoose';
import * as _ from 'lodash';
import { injectable } from 'inversify';

const userMod = model(
  'users',
  new Schema({
    username: { type: String, required: true, index: true, unique: true },
    password: { type: String, required: true },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    updatedAt: {
      type: Date,
      default: new Date(),
    },
    email: { type: String, required: true, index: true, unique: true },
  })
);

@injectable()
export default class userModel {
  createUser(obj: any) {
    return userMod.create(obj);
  }

  findUser(obj: any) {
    return userMod.findOne(obj, {
      username: 1,
      email: 1,
      _id: 0,
    }).lean();
  }

  list(obj: any) {
    return userMod.find(obj, {
      username: 1,
      email: 1,
      _id: 0,
    }).lean();
  }

  findUserById(id: string) {
    return userMod.findById(id).lean();
  }

  updateUser(obj: any) {
    return userMod.updateOne(
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

  deleteUser(obj: any) {
    return userMod.deleteOne(obj);
  }

  deleteUserById(id: string) {
    return userMod.findByIdAndDelete(id).lean();
  }

  deleteUsers(obj: any) {
    return userMod.deleteMany(obj);
  }
}
