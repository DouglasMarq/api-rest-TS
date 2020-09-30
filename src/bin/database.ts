import { injectable } from 'inversify';
import { connection, connect, disconnect } from 'mongoose';
import config from 'config';

@injectable()
export default class Mongo {
  constructor() {
    console.log('Conectando ao MongoDB');
    connection.on('error', console.error.bind(console, 'connection error:'));
    connect(
      `mongodb+srv://${config.get('database.main.user')}:${config.get(
        'database.main.pass'
      )}@${config.get('database.main.host')}/${config.get(
        'database.main.name'
      )}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      },
      (err) => {
        if (err) {
          console.log(err);
          disconnect();
        } else {
          console.log(`MongoDB succesfully started at port ${config.get('database.main.port')}`);
        }
      }
    );
  }
}

// import { injectable } from "inversify";
// // import { connection, connect, disconnect, createConnection } from "mongoose";
// import { createConnection, Connection } from "mongoose";
// import config from "../config/default";
// import { Logger } from "winston";

// @injectable()
// export default class Mongo {
//   constructor() {
//     let conn = createConnection(`mongodb+srv://${config.database.main.user}:${config.database.main.pass}@${config.database.main.host}/${config.database.main.name}?retryWrites=true&w=majority`,
//       {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//         useFindAndModify: true,
//       });
//       conn.on("open", () => {
//         console.log(`Conectado ao mongo ${config.database.main.host}:${config.database.main.port} como ${config.database.main.user}`);
//       });
//       conn.on("disconnected", () => {
//         console.log(``);
//       });
//       conn.on("reconnecting", () => {
//         console.log(``);
//       });
//       conn.on("reconnected", () => {
//         console.log(``);
//       });
//       conn.on("error", () => {
//         console.log(``);
//       });
//       conn.on("close", () => {
//         console.log(``);
//       });
//   }
// }
