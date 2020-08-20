import { injectable } from "inversify";

@injectable()
export default class BaseMiddleware{
    constructor() {

    }
    public async validateBaseEntity(obj: any) {
        // fazer validação do obj genérico aq
        return null;
    }
}