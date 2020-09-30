import { Schema, model } from 'mongoose';
import * as _ from 'lodash';
import joi from 'joi';
import { injectable } from 'inversify';

const userMod = model(
  'users',
  new Schema({
    username: { type: String, required: true, index: true, unique: true },
    password: String,
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
    return userMod.findOne(obj);
  }

  findUsers(obj: any) {
    return userMod.find(obj);
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
      }
    );
  }

  deleteUser(obj: any) {
    return userMod.deleteOne(obj);
  }

  deleteUserById(obj: any) {
    return userMod.findByIdAndDelete(obj);
  }

  deleteUsers(obj: any) {
    return userMod.deleteMany(obj);
  }
}

export function userValidation() {
  return joi.object({
    username: joi.string().min(6).max(32).required(),
    password: joi.string().min(8).max(256).required(),
    email: joi
      .string()
      .email({ tlds: { allow: true } })
      .required(),
  });
}
