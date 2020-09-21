import { response } from "express";
import * as _ from "lodash";
import userSchema from "./user/userSchema";

export default class baseSchema<T> {
  private readonly user: userSchema;
  private readonly _type: string;
  constructor(type: new () => T) {
    this.user = new userSchema();
    console.log("type in baseSchema", type, type.name);
    switch (type.name) {
      case "userModel":
        this._type = "user";
        break;
      default:
        this._type = type.name;
        break;
    }
  }

  public async validateBaseSchema(obj: any) {
    switch (this._type) {
      case "user":
        let validate = {
          username: _.get(obj, "username"),
          password: _.get(obj, "password"),
          email: _.get(obj, "email"),
          token: _.get(obj, "token")
        };
        return await this.user.validateSchema().validate(validate).error
          ?.details[0].message;
      default:
        return response
          .status(404)
          .json({ "message:": "Could not find schema type." });
    }
  }
}
