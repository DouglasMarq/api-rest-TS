'use strict'
import joi from 'joi';

export default class createSchema {
    validateSchema() {
        return joi.object({
            username: joi.string().min(6).max(32).required(),
            password: joi.string().min(8).max(256).required()
        });
    }
}