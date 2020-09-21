import config from "config";
import Server from "../server/index";
import bindContainers from "../bin/container";
import Mongo from "../database";

export const start = () => {
  let container = bindContainers();
  //Inicialização HTTP
  container
    .get<Server>(Server)
    .listen(config.get('server.port') as number);
  //Inicialização mongo
  container.get<Mongo>(Mongo);
};

export default start();
