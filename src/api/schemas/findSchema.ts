import joi from 'joi';

export default class findSchema {
    validateSchema() {
        return joi.object({
            username: joi.string().required(),
            email: joi.string(),
        });
    }
}
