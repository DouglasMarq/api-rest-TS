import 'reflect-metadata';
import { Container } from "inversify";
import Server from '../server';
import Router from '../api'
import Controller from '../api/controller';
import Mongo from '../database';
import Schema from '../api/schemas';

let container = new Container();

export class bindContainers {
    loadContainers() {
        container.bind<Server>(Server).to(Server).inSingletonScope();
        container.bind<Router>(Router).to(Router).inSingletonScope();
        container.bind<Controller>(Controller).to(Controller).inSingletonScope();
        container.bind<Mongo>(Mongo).to(Mongo).inSingletonScope();
        container.bind<Schema>(Schema).to(Schema).inSingletonScope();
    }

    getContainer() {
        return container;
    }
}

export default new bindContainers();