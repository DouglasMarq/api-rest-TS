'use strict'
import { injectable, inject } from "inversify";
import { Request, Response } from "express";
import Mongo from "../../database";
import Schema from "../../api/schemas";
import UserSchema from "../model/db/userSchema";

let schemaValidator: Schema;
let User: any;

@injectable()
export default class Controller {
    constructor(
        @inject(Schema) schema: Schema,
        @inject(Mongo) mongo: Mongo
    ) {
        schemaValidator = schema;
        User = new UserSchema().getSchema();
    }

    async find(req: Request, res: Response) {  
        let result = schemaValidator.validateFindSchema(req.body.username);
        if(result.error) {
            return res.status(400).json({"Error": result.error.details[0].message});
        }
        return res.status(200).json({'user': await User.findOne({'username': req.body.username})});
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