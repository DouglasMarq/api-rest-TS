import joi from 'joi';

export default class userSchema {
    validateSchema() {
        return joi.object({
            'username': joi.string().min(6).max(32).required(),
            'password': joi.string().min(8).max(256).required(),
            'email': joi.string().email({ tlds: { allow: true } }).required(),
        });
    }
}