import { injectable } from "inversify";
import { Request, Response } from "express";
import Schema from "../../../api/schemas";
import UserSchema from "../../model/db/userSchema";
import BaseController from ".././base";

let schemaValidator: Schema<UserSchema>;
let User: any;

export default class UserController extends BaseController<UserSchema> {
    constructor() {
        super(UserSchema);
        User = new UserSchema().getSchema();
    }

    public async findUser(req: Request, res: Response) {  
        console.log(req);
        try {
            await this.getEntity(req.body);
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

    async create(req: Request, res: Response) {
        let result = schemaValidator.validateCreateSchema({'username': req.body.username, 'password': req.body.password});
        if(result.error) {
            return res.status(400).json({"Error": result.error.details[0].message});
        }
        let verify = await User.findOne({'username': req.body.username});
        console.log(verify);
        if (!verify) {
            User.create({'username': req.body.username, 'password': req.body.password});
        } else {
            return res.status(401).json({statusCode: 401, message: 'Usuário já existente.'});
        }
        return res.status(200).json({ statusCode: 200, message: 'Usuário Criado com sucesso!' });
    }

    async delete(req: Request, res: Response) { 
        let result = schemaValidator.validateFindSchema(req.body.username);
        if(result.error) {
            return res.status(400).json({"Error": result.error.details[0].message});
        }
        try {
            await User.findOneAndDelete(
            {
                'username': req.body.username
            });
            return res.status(200).json({ statusCode: 200, message: 'Usuário deletado com sucesso!' });
        } catch (e) {
            return res.status(400).json({ statusCode: 200, message: e });
        }
    }

    async update(req: Request, res: Response) { 
        let result = schemaValidator.validateFindSchema(req.body.username);
        if(result.error) {
            return res.status(400).json({"Error": result.error.details[0].message});
        }
        try {
            await User.findOneAndUpdate(
                {
                    'username': req.body.username
            }, { 
                '$set': {
                    'password': req.body.password
                }
            }, {
                'safe': true, 'upsert': true, 'new': true
            });
            return res.status(200).json({ statusCode: 200, message: 'Senha atualizada com sucesso!' });
        } catch (e) {
            return res.status(400).json({ statusCode: 400, message: e });
        }
    }

    validateSchema(username: string) {        
        return schemaValidator.validateFindSchema(username);
    }
}