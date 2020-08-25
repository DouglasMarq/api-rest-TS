import { injectable } from "inversify";
import Schemas from "../schemas";

@injectable()
export default class BaseMiddleware<T> {
  private readonly schema: Schemas<T>;
  constructor(type: new () => T) {
    this.schema = new Schemas<T>(type);
  }
  public async validateBaseEntity(obj: any) {
    // fazer validação do obj genérico aq
    return await this.schema.validateSchema(obj);
  }
}
