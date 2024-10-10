import Joi from "joi";

export const addBookValidator = Joi.object({
    title:Joi.string().required().min(5).max(200),
    summary:Joi.string().required().min(5).max(200),
    author:Joi.string().required(),
    genre:Joi.string().required(),
    cover:Joi.string().required(),
    publishedYear:Joi.number().required(),
});

export const updateBookValidator = Joi.object({
    title:Joi.string().min(5).max(200),
    summary:Joi.string().min(5).max(200),
    author:Joi.string(),
    genre:Joi.string(),
    cover:Joi.string(),
    publishedYear:Joi.number(),
});