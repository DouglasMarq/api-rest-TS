import 'reflect-metadata';
import { Container } from "inversify";
import Server from '../server';
import Router from '../api'
import Mongo from '../database';
import databaseIndex from '../api/model/db';

let container = new Container();

export class bindContainers {
    loadContainers() {
        container.bind<Server>(Server).to(Server).inSingletonScope();
        container.bind<Router>(Router).to(Router).inSingletonScope();
        container.bind<Mongo>(Mongo).to(Mongo).inSingletonScope();
        container.bind<databaseIndex>(databaseIndex).to(databaseIndex).inSingletonScope();
    }

    getContainer() {
        return container;
    }
}

export default new bindContainers();