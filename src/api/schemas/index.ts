import "reflect-metadata";
import baseSchema from "./base";

export default class Schemas<T> extends baseSchema<T> {
  constructor(type: new () => T) {
    super(type);
  }

  public async validateSchema(obj: any) {
    return await this.validateBaseSchema(obj);
  }
}
