import { AuthorModel } from "../models/author.js";
import { addAuthorValidator, updateAuthorValidator } from "../validators/author.js";

export const addAuthor = async (req, res, next) => {
   try {
    // add validator
    const {error,value} = addAuthorValidator.validate(req.body);
        if (error){
            return res.status(422).json(error);
        }
     // writing to the DB
    await AuthorModel.create(value);
     // respond to request
     res.status(201).json('Author was added');
   } catch (error) {
    next(error);
   }
}
export const getAllAuthors = async(req, res, next) => {
    try {
        // 
        const authors = await AuthorModel.find();
        // 
        res.status(200).json(authors);
    } catch (error) {
        next(error);
    }
}
export const getOneAuthor = async (req, res, next) => {
   try {
     // fetch author by id
     const author = await AuthorModel.findById(req.params.id);
     // return response
     res.status(200).json(author);
   } catch (error) {
    next(error);
   }
}
export const UpdateAuthor = async (req, res, next) => {
  try {
      // 
      const {error,value} = updateAuthorValidator.validate(req.body);
        if (error){
            return res.status(422).json(error);
        }
      const authorUpdate = await AuthorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      //  
      res.status(200).json(authorUpdate);
  } catch (error) {
    next(error);
  }
}
export const deleteAuthor = async (req, res, next) => {
   try {
     // 
     const authorDelete = await AuthorModel.findByIdAndDelete(req.params.id);
     // 
     res.status(200).json(authorDelete);
   } catch (error) {
    next(error);
   }
}