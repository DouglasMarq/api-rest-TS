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

    validateCreateSchema(user: string, pass: string) {
        return create.validateSchema().validate({username: user, password: pass});
    }
    validateFindSchema(user: string) {
        return find.validateSchema().validate({username: user});
    }
    validateUpdateSchema() {
        return update;
    }
    validateDeleteSchema() {
        return remove;
    }
}