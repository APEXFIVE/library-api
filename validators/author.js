import Joi from "joi";

export const addAuthorValidator = Joi.object({
    name:Joi.string().required().min(5).max(200),
    bio:Joi.string().required().min(5).max(200),
});

export const updateAuthorValidator = Joi.object({
    name:Joi.string(),
    bio:Joi.string(),
});