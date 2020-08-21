import Service from "../../service";
import Middleware from "../middlewares";
import Joi from "joi";

export default class BaseController<T> extends Service<T> {
    private readonly middleware: Middleware<T>;
    constructor(type: new () => T) {
        console.log('type in basecontroller', type, type.name);
        super(type);
        this.middleware = new Middleware<T>(type);
        // switch (type.name) {
        //   case 'userModel':
        //     this._type = 'user';
        //     // this.res = null;
        //     break;
        //   default:
        //     this._type = type.name;
        //     // this.res = null;
        //     break;
        // }
    }

    public async getEntity(obj: any) {
        // ir para middleware para validação mais tarde
        let res = await this.middleware.validadeEntity(obj);
        if (res) {
            return res;
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
        let res = await this.middleware.validadeEntity(obj);
        if (res) {
            return {'code': 403, 'message': res};
        }
        // vai para a service
        console.log("indo para a service");
        return await this.createBaseEntity(obj).then(res => {
            return res;
        }).catch(err => {
            throw err;
        });
    }
    
    public async updateEntity(obj: any) {
        // ir para middleware para validação mais tarde
        let res = await this.middleware.validadeEntity(obj);
        if (res) {
            return res;
        }
        // vai para a service
        console.log("indo para a service");
        return await this.updateBaseEntity(obj).then(res => {
            return res;
        }).catch(err => {
            throw err;
        });
    }
    
    public async deleteEntity(obj: any) {
        // ir para middleware para validação mais tarde
        let res = await this.middleware.validadeEntity(obj);
        if (res) {
            return res;
        }
        // vai para a service
        console.log("indo para a service");
        return await this.deleteBaseEntity(obj).then(res => {
            return res;
        }).catch(err => {
            throw err;
        });
    }
}