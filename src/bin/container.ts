import "reflect-metadata";
import { Container } from "inversify";
import Server from "../server";
import Router from "../api";
import Mongo from "../database";
import { Logger } from "winston";

let container = new Container();

export default function bindContainers() {

    // let logger = newLogger(config.get("logger.file"));

    container.bind<Server>(Server).to(Server).inSingletonScope();
    container.bind<Router>(Router).to(Router).inSingletonScope();
    container.bind<Mongo>(Mongo).to(Mongo).inSingletonScope();

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
