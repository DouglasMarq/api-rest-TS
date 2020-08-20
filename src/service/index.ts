import databaseIndex from "../api/model/db";

export default class Service<T> {
  private readonly db: databaseIndex;

  constructor(type: new () => T) {
    // this.schema = container.getContainer().get<Schemas<T>>(Schemas);
    this.db = new databaseIndex(type.name);
    console.log('type in service', type, type.name);  
  }

  public async getBaseEntity(obj: any) {
    return await this.db.find(obj);
    // return new Promise<any>((resolve, reject) => {
    //   if (this.res) {
    //     reject({ error: this.res.error?.details[0].message });
    //   }
    //   resolve(model(this.type, new Schema(obj)));
    // });
  }
  public async createBaseEntity(obj: any) {
    return await this.db.create(obj);
    // return new Promise<any>((resolve, reject) => {
    //   if (this.res) {
    //     reject({ error: this.res.error?.details[0].message });
    //   }
    //   resolve(model(this.type, new Schema(obj)));
    // });
  }
}