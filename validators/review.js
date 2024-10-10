import Joi from "joi";

export const addReviewValidator = Joi.object({
    rating:Joi.number().required(),
    comment:Joi.string(),
    book:Joi.string().required(),
});


export const updateReviewValidator = Joi.object({
    rating:Joi.number(),
    comment:Joi.string(),
    book:Joi.string(),
});