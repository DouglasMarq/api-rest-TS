import { injectable } from "inversify";

@injectable()
export default class BaseMiddleware<T>{
    constructor(type: new() => T) {

    }
    public async validateBaseEntity(obj: any) {
        // fazer validação do obj genérico aq
        return null;
    }
}