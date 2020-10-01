import databaseIndex from "../api/model/db";
import * as _ from 'lodash';

export default class Service<T> {
  private readonly db: databaseIndex;
  private find: any;

  constructor(type: new () => T) {
    // this.schema = container.getContainer().get<Schemas<T>>(Schemas);
    this.db = new databaseIndex(type.name);
    console.log('type in service', type, type.name);  
  }

  public async getBaseEntity(obj: any) {
    return await this.db.find(obj);
  }

  public async createBaseEntity(obj: any) {
    this.find = await this.db.find(obj);
    if(!this.find) {
      let create = await this.db.create(obj);
      if(create) {
        return {'code': 200, 'message': 'Usuário criado com sucesso.'}
      }
    } else {
      if(this.find.username === _.get(obj, 'username')) {
        return {'code': 403, 'message': 'Usuário existente.'}
      } else if (this.find.email === _.get(obj, 'email')) {
        return {'code': 403, 'message': 'Email existente.'}
      }
    }
  }
  
  public async updateBaseEntity(obj: any) {
    return await this.db.update(obj);
  }
  
  public async deleteBaseEntity(obj: any) {
    return await this.db.delete(obj);
  }
}