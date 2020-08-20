import Service from "../../service";

export default class BaseController<T> extends Service<T> {
    constructor(type: new () => T) {
        console.log('type in basecontroller', type, type.name);

        super(type);
    }
    public async getEntity(obj: any) {
        return await this.getBaseEntity(obj).then(res => {
            return res;
        }).catch(err => {
            throw err;
        });

    }
}