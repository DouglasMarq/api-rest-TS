import { inject, injectable } from "inversify";
import { application, Application, Request, Response } from "express";
import UserController from "./user/userController";
import Middleware from "../middlewares";
import userSchema from "../schemas/user/userSchema";

@injectable()
export default class Controller {
  private readonly userController: UserController;
  private readonly app: Application;
  private readonly authMidd: Middleware<any>;

  constructor(@inject(Middleware) authMidd: Middleware<any>) {
    this.userController = new UserController();
    this.authMidd = authMidd;
    this.app = application;
  }

  async create(req: Request, res: Response) {
    //@TODO change from request type to internal type
    switch (req.body.type) {
      case "user":
        return await this.userController.createUser(req.body, res);
      default:
        break;
    }
  }

  async find(req: Request, res: Response) {
    //@TODO change from request type to internal type
    switch (req.body.type) {
      case "user":
        return await this.userController.findUser(req.body, res);
      default:
        break;
    }
  }

  async update(req: Request, res: Response) {
    //@TODO change from request type to internal type
    switch (req.body.type) {
      case "user":
        return await this.userController.updateUser(req.body, res);
      default:
        break;
    }
  }
  async delete(req: Request, res: Response) {
    //@TODO change from request type to internal type
    switch (req.body.type) {
      case "user":
        return await this.userController.deleteUser(req.body, res);
      default:
        break;
    }
  }

  // async find(req: Request, res: Response) {
  //     try {
  //         super.getEntity(req.body);
  //     } catch (e) {
  //         return res.status(404).json({'message': e.message, 'stack': e.stack});
  //     }
  //     // this.res = this.schema.validateFindSchema(obj);

  //     // let result = schemaValidator.validateFindSchema(req.body.username);
  //     // if(result.error) {
  //     //     return res.status(400).json({"Error": result.error.details[0].message});
  //     // }
  //     // return res.status(200).json({'user': await User.findOne({'username': req.body.username})});
  // }

  // async create(req: Request, res: Response) {
  //     let result = schemaValidator.validateCreateSchema({'username': req.body.username, 'password': req.body.password});
  //     if(result.error) {
  //         return res.status(400).json({"Error": result.error.details[0].message});
  //     }
  //     let verify = await User.findOne({'username': req.body.username});
  //     console.log(verify);
  //     if (!verify) {
  //         User.create({'username': req.body.username, 'password': req.body.password});
  //     } else {
  //         return res.status(401).json({statusCode: 401, message: 'Usuário já existente.'});
  //     }
  //     return res.status(200).json({ statusCode: 200, message: 'Usuário Criado com sucesso!' });
  // }

  // async delete(req: Request, res: Response) {
  //     let result = schemaValidator.validateFindSchema(req.body.username);
  //     if(result.error) {
  //         return res.status(400).json({"Error": result.error.details[0].message});
  //     }
  //     try {
  //         await User.findOneAndDelete(
  //         {
  //             'username': req.body.username
  //         });
  //         return res.status(200).json({ statusCode: 200, message: 'Usuário deletado com sucesso!' });
  //     } catch (e) {
  //         return res.status(400).json({ statusCode: 200, message: e });
  //     }
  // }

  // async update(req: Request, res: Response) {
  //     let result = schemaValidator.validateFindSchema(req.body.username);
  //     if(result.error) {
  //         return res.status(400).json({"Error": result.error.details[0].message});
  //     }
  //     try {
  //         await User.findOneAndUpdate(
  //             {
  //                 'username': req.body.username
  //         }, {
  //             '$set': {
  //                 'password': req.body.password
  //             }
  //         }, {
  //             'safe': true, 'upsert': true, 'new': true
  //         });
  //         return res.status(200).json({ statusCode: 200, message: 'Senha atualizada com sucesso!' });
  //     } catch (e) {
  //         return res.status(400).json({ statusCode: 400, message: e });
  //     }
  // }

  // validateSchema(username: string) {
  //     return schemaValidator.validateFindSchema(username);
  // }
}
