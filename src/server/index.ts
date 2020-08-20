import 'reflect-metadata';
import http, { Server as _Server } from "https";
import express, { Request, Response, NextFunction, Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { injectable, inject } from "inversify";
import Router from "../api";

@injectable()
export default class Server {

    readonly _: _Server;
    readonly app: Application;

    constructor(@inject(Router) router: Router) {
        let app = this.app = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ "extended": true }));
        app.use(cors());

        app.use(router.loadRouters(app));

        app.use((req: Request, res: Response, next: NextFunction) => {
            return res.status(404).json({ "err": "not found 404" });
        });

        app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            return res.status(500).json({ "err": "server error 500" });
        });


        this._ = http.createServer(app);
    }

    listen(port: number) {
        this.app.set('port', port);
        this.app.listen(port);
        console.log(`HTTP server running at port ${port}`);
    }
}