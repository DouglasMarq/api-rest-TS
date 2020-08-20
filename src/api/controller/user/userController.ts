import { Request, Response } from "express";
import UserSchema from "../../model/db/userSchema";
import BaseController from ".././base";

export default class UserController extends BaseController<UserSchema> {
    constructor() {
        super(UserSchema);
    }

    public async findUser(req: Request, res: Response) {  
        console.log(req);
        try {
            return res.status(200).json({'message:': await this.getEntity(req)});
        } catch (e) {
            return res.status(404).json({'message': e.message, 'stack': e.stack});
        }
        // this.res = this.schema.validateFindSchema(obj);

        // let result = schemaValidator.validat(eFindSchema(req.body.username);
        // if(result.error) {
        //     return res.status(400).json({"Error": result.error.details[0].message});
        // }
        // return res.status(200).json({'user': await User.findOne({'username': req.body.username})});
    }

    async createUser(req: Request, res: Response) { 
        try {
            return res.status(200).json({'message:': await this.createEntity(req)});;
        } catch (e) {
            return res.status(404).json({'message': e.message, 'stack': e.stack});
        }
        // let result = schemaValidator.validateCreateSchema({'username': req.body.username, 'password': req.body.password});
        // if(result.error) {
        //     return res.status(400).json({"Error": result.error.details[0].message});
        // }
        // let verify = await User.findOne({'username': req.body.username});
        // console.log(verify);
        // if (!verify) {
        //     User.create({'username': req.body.username, 'password': req.body.password});
        // } else {
        //     return res.status(401).json({statusCode: 401, message: 'Usuário já existente.'});
        // }
        return res.status(200).json({ statusCode: 200, message: 'Usuário Criado com sucesso!' });
    }

    // async deleteUser(req: Request, res: Response) { 
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

    // async updateUser(req: Request, res: Response) { 
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