import Joi, { required } from "joi";

// validating the user
export const addUserValidator = Joi.object({
    firstName:Joi.string().required(),
    lastName:Joi.string().required(),
    email:Joi.string().required(),
    password:Joi.string().required(),
});

// validating when user update info
export const updateUserValidator = Joi.object({
    firstName:Joi.string(),
    lastName:Joi.string(),
    email:Joi.string(),
    password:Joi.string(),
});