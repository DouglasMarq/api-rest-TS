import BaseMiddleware from "./base";
import { injectable } from "inversify";

@injectable()
export default class Middleware<T> extends BaseMiddleware<T> {
    constructor(type: new() => T) {
        super(type);
    }
    public async validadeEntity(obj: any) {
        return await this.validateBaseEntity(obj).then(res => {
            return res;
        }).catch(err => {
            throw err;
        });
    }
}