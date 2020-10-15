import 'reflect-metadata';
import { Container } from 'inversify';
import Server from '../server';
import Router from '../api';
import Mongo from './database';
import { Logger } from 'winston';
import Controller from '../api/controller';
import Routers from '../api/router';
import BaseModel from '../domain/model';
import UserService from '../domain/service/user';
import UserController from '../api/controller/user';
import UserRouter from '../api/router/user';
import UserModel from '../domain/model/user';
import PostumeService from '../domain/service/postume';
import PostumeController from '../api/controller/postume';
import PostumeRouter from '../api/router/postume';
import PostumeModel from '../domain/model/postume';

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
  container.bind<PostumeService>(PostumeService).to(PostumeService).inSingletonScope();
  container.bind<PostumeController>(PostumeController).to(PostumeController).inSingletonScope();
  container.bind<PostumeRouter>(PostumeRouter).to(PostumeRouter).inSingletonScope();
  container.bind<PostumeModel>(PostumeModel).to(PostumeModel).inSingletonScope();
  container.bind<BaseModel>(BaseModel).to(BaseModel).inSingletonScope();

  return container;
}
