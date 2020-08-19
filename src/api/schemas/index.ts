'use strict'
import findSchema from './findSchema';
import createSchema from './createSchema';
import deleteSchema from './deleteSchema';
import updateSchema from './updateSchema';
import { injectable } from 'inversify';

const find = new findSchema;
const create = new createSchema;
const update = new updateSchema;
const remove = new deleteSchema;

@injectable()
export default class Schemas {
    validateCreateSchema(object: any) {
        return create.validateSchema().validate(object);
    }
    validateFindSchema(username: string) {
        return find.validateSchema().validate({username: username});
    }
    validateUpdateSchema() {
        return update;
    }
    validateDeleteSchema() {
        return remove;
    }
}