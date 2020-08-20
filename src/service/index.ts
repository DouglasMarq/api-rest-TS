import { Schema, model } from "mongoose";
import Schemas from "../api/schemas";
import Joi from "joi";

export default class Service<T> {
  private readonly schema: Schemas<T> = new Schemas<T>();
  private readonly type: string;
  private res: any;

  constructor(type: new () => T) {
    // this.schema = container.getContainer().get<Schemas<T>>(Schemas);
    // this.type = type.name;
    console.log('type in service', type, type.name);
    switch (type.name) {
      case 'userModel':
        this.type = 'user';
        this.res = null;
        break;
      default:
        this.type = type.name;
        this.res = null;
        break;
    }
  }

  public async getBaseEntity(obj: any) {
    return new Promise<any>((resolve, reject) => {
      if (this.res) {
        reject({ error: this.res.error?.details[0].message });
      }
      resolve(model(this.type, new Schema(obj)));
    });
  }
}