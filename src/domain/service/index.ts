import { injectable } from 'inversify';
import UserService from './user';

@injectable()
export default abstract class Service extends UserService {
  constructor() {
    super();
  }
}
