import Service from "../../service";
import Schemas from "../schemas";

export default class BaseController<T> extends Service<T> {
    private readonly schema: Schemas<T>;
    private readonly typed: string;
    // private res: any;
    constructor(type: new () => T) {
        console.log('type in basecontroller', type, type.name);
        super(type);
        this.schema = new Schemas<T>();
        switch (type.name) {
          case 'userModel':
            this.typed = 'user';
            // this.res = null;
            break;
          default:
            this.typed = type.name;
            // this.res = null;
            break;
        }
    }

    public async getEntity(obj: any) {
        // ir para middleware para validação mais tarde
        let res = await this.schema.validateFindSchema(obj['username']);
        if (res.error) {
            return res.error.details[0].message;
        }
        // vai para a service
        console.log("indo para a service");
        return await this.getBaseEntity(obj).then(res => {
            return res;
        }).catch(err => {
            throw err;
        });
    }
    public async createEntity(obj: any) {
        // ir para middleware para validação mais tarde
        let res = await this.schema.validateCreateSchema(obj['username'], obj['password']);
        if (res.error) {
            return res.error.details[0].message;
        }
        // vai para a service
        console.log("indo para a service");
        return await this.createBaseEntity(obj).then(res => {
            return res;
        }).catch(err => {
            throw err;
        });
    }
}