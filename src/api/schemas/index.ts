import 'reflect-metadata';
import userSchema from './user/userSchema';
import { response } from 'express';
import * as _ from "lodash";
import { isNullOrUndefined } from 'util';

export default class Schemas<T> {
  private readonly user: userSchema = new userSchema();
  private readonly _type: string;
  constructor(type: new() => T) {
    console.log('type in schema', type, type.name);
    switch(type.name) {
      case 'userModel':
        this._type = 'user';
        break;
      default:
        //transferir para próprio dps
        this._type = type.name;
        break;
    }
  }
    async validateSchema(obj: any) {
        switch(this._type) {
            case 'user':
              let validate = {
                'username': _.get(obj, 'username'),
                'password': _.get(obj, 'password')
              }
              return await this.user.validateSchema().validate(validate).error?.details[0].message;
            default:
              return response.status(404).json({'message:': 'Could not find schema type.'});
        }
    }
}