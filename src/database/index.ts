import { injectable } from "inversify";
import { connection, connect, disconnect } from 'mongoose';
import config from "../config/default";

@injectable()
export default class Mongo {
  constructor() {    
    console.log("Conectando ao MongoDB");
    connection.on('error', console.error.bind(console, 'connection error:'));
    connect(`mongodb+srv://${config.database.main.user}:${config.database.main.pass}@${config.database.main.host}/${config.database.main.name}?retryWrites=true&w=majority`,{
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    }, (err) => {
      if(err) {
        console.log(err);
        disconnect();
      } else {
        console.log(`MongoDB succesfully started at port ${config.database.main.port}`)
      }
    });
  }
}