
import config from "../config/default";
import Server from "../server/index";
import container from "../bin/container";
import Mongo from "../database";

export const start = () => {
    container.loadContainers();
    //Inicialização HTTP
    container.getContainer().get<Server>(Server).listen((config.server.port as number));
    //Inicialização mongo
    container.getContainer().get<Mongo>(Mongo);

};

export default start();