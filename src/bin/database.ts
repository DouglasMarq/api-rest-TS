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
          console.log(`MongoDB succesfully connected at port ${config.get('database.main.port')}`);
        }
      }
    );
  }
}
