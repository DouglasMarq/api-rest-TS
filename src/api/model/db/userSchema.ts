import { Schema, model } from "mongoose";

const userMod = model('users', new Schema({
  username: String,
  password: String,
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  }
}));

export default class userModel {
  createUser(obj: any) { 
    return userMod.create(obj);
  }

  findUser(obj: any) { 
    return userMod.findOne(obj);
  }

  findUsers(obj: any) { 
    return userMod.find(obj);
  }

  updateUser(obj: any) { 
    return userMod.update(obj, {
      '$set': {
        'username': 'teste12'
      },
      'safe': true, 'upsert': true, 'new': true
    });
  }

  deleteUser(obj: any) { 
    return userMod.findByIdAndDelete(obj);
  }
  
  deleteUsers(obj: any) { 
    return userMod.deleteMany(obj);
  }
}