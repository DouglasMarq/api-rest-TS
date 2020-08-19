import { Schema, model } from "mongoose";

export default class userModel {
  getSchema() { 
      return model('user', new Schema({
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
  }
}