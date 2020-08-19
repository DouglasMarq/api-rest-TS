
import config from "config";
import Server from "../server/index";
import container from "../bin/container";

(async () => {
    container.loadContainers();
    container.getContainer().get<Server>(Server).listen(config.get("server.port"));

})().catch(err => {
    console.error(err);
});
