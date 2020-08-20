export default class baseSchema<T> {
    private readonly _type: string;
    constructor(type: new() => T) {
        console.log('type in baseSchema', type, type.name);
        switch(type.name) {
            case 'userModel':
                this._type = 'user';
                break;
            default:
                //transferir para próprio dps
                this._type = type.name;
                break;
        }
    }

    public async validateBaseSchema(obj: any) {
        
    }
}