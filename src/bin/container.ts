import "reflect-metadata";
import { Container } from "inversify";
import Server from "../server";
import Router from "../api";
import Mongo from "../database";
import { Logger } from "winston";
import Middleware from "../api/middlewares";
import Controller from "../api/controller";

let container = new Container();

export class bindContainers {
  loadContainers() {

    // let logger = newLogger(config.get("logger.file"));

    container.bind<Server>(Server).to(Server).inSingletonScope();
    container.bind<Middleware<any>>(Middleware).to(Middleware).inSingletonScope();
    container.bind<Router>(Router).to(Router).inSingletonScope();
    container.bind<Mongo>(Mongo).to(Mongo).inSingletonScope();
    container.bind<Controller>(Controller).to(Controller).inSingletonScope();
    // container.bind<Logger>("logger").toConstantValue(logger);
  }

  getContainer() {
    return container;
  }
}

export default new bindContainers();
