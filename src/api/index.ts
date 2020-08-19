'use strict'
import { Application, Router as newRouter } from 'express';
import { injectable } from 'inversify';
import Controller from './controller';
import container from '../bin/container';

@injectable()
export default class Router {    
  loadRouters(app: Application) {
    let router = newRouter();
    let controller = container.getContainer().get<Controller>(Controller);
    
    router.get(`/findRoute`, controller.find);
    router.post(`/createRoute`, controller.create);
    router.delete(`/deleteRoute`, controller.delete);
    router.patch(`/updateRoute`, controller.update);

    app.use('/api', router);
    return router;
  }
}