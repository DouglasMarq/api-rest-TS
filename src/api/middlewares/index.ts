import BaseMiddleware from "./base";
import { injectable } from "inversify";

@injectable()
export default class Middleware extends BaseMiddleware {
    constructor() {
        super();
    }
    public async validadeEntity(obj: any) {
        return await this.validateBaseEntity(obj);
    }
}