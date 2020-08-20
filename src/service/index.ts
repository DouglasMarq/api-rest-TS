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
  }

  public async createBaseEntity(obj: any) {
    return await this.db.create(obj);
  }
  
  public async updateBaseEntity(obj: any) {
    return await this.db.update(obj);
  }
  
  public async deleteBaseEntity(obj: any) {
    return await this.db.delete(obj);
  }
}