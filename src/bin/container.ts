import 'reflect-metadata';
import { Container } from 'inversify';
import Server from '../server';
import Router from '../api';
import Mongo from './database';
import { Logger } from 'winston';
import Controller from '../api/controller';
import UserService from '../domain/service/user';
import Routers from '../api/router';
import UserController from '../api/controller/user';
import UserRouter from '../api/router/user';
import UserModel from '../domain/model/user';
import BaseModel from '../domain/model';

let container = new Container();

export default function bindContainers() {
  // let logger = newLogger(config.get("logger.file"));

  container.bind<Server>(Server).to(Server).inSingletonScope();
  container.bind<Router>(Router).to(Router).inSingletonScope();
  container.bind<Mongo>(Mongo).to(Mongo).inSingletonScope();
  container.bind<Controller>(Controller).to(Controller).inSingletonScope();
  container.bind<Routers>(Routers).to(Routers).inSingletonScope();
  container.bind<UserService>(UserService).to(UserService).inSingletonScope();
  container.bind<UserController>(UserController).to(UserController).inSingletonScope();
  container.bind<UserRouter>(UserRouter).to(UserRouter).inSingletonScope();
  container.bind<UserModel>(UserModel).to(UserModel).inSingletonScope();
  container.bind<BaseModel>(BaseModel).to(BaseModel).inSingletonScope();

  return container;
  // container.bind<Logger>("logger").toConstantValue(logger);
}

// export class bindContainers {
//   loadContainers() {

//     // let logger = newLogger(config.get("logger.file"));

//     container.bind<Server>(Server).to(Server).inSingletonScope();
//     container.bind<Router>(Router).to(Router).inSingletonScope();
//     container.bind<Mongo>(Mongo).to(Mongo).inSingletonScope();
//     // container.bind<Logger>("logger").toConstantValue(logger);
//   }

//   getContainer() {
//     return container;
//   }
// }

// export default new bindContainers();
