import 'reflect-metadata';
import findSchema from './findSchema';
import createSchema from './createSchema';
import deleteSchema from './deleteSchema';
import updateSchema from './updateSchema';

const find = new findSchema;
const create = new createSchema;
const update = new updateSchema;
const remove = new deleteSchema;

export default class Schemas<T> {
//     private readonly type: string;
//   constructor(type: new() => T) {
//     switch(type.name) {
//         case 'UserSchema':
//           this.type = 'user';
//           break;
//           // case 'xptomodel':
//           //   return 'xpto'
//           //break;
//         default:
//           this.type = type.name;
//           break;
//       }
//   }

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