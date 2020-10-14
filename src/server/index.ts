import 'reflect-metadata';
import http, { Server as _Server } from 'https';
import express, { Request, Response, NextFunction, Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { injectable, inject } from 'inversify';
import Router from '../api';
import compression from 'compression';
import helmet from 'helmet';
import enforcesSsl from 'express-enforces-ssl';

@injectable()
export default class Server {
  readonly _: _Server;
  readonly app: Application;

  constructor(@inject(Router) router: Router) {
    let app = (this.app = express());

    app.enabled('trust proxy');
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
    app.use(compression());
    app.use(helmet({ frameguard: false }));
    app.use(cors({ origin: '*', credentials: true }));
    // app.use(enforcesSsl());

    app.enabled('trust proxy');
    app.use(router.loadRouters(app));

    app.use((req: Request, res: Response, next: NextFunction) => {
      return res.status(404).json({ err: 'not found 404' });
    });

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      return res.status(500).json({ err: 'server error 500' });
    });

    this._ = http.createServer(app);
  }

  listen(port: number) {
    this.app.set('port', port);
    this.app.listen(port);
    console.log(`HTTP server running at port ${port}`);
  }
}
// {EU TE AMO}
