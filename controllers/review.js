import { ReviewModel } from "../models/review.js";
import { addReviewValidator, updateReviewValidator } from "../validators/review.js";

export const addReview = async (req, res, next) => {
 try {
       // validate user inputs
       const {error,value} = addReviewValidator.validate(req.body);
       if (error){
           return res.status(422).json(error);
       }
       // write to DB
       await ReviewModel.create(value);
       // respond to request
       res.status(201).json('Review was created');
 } catch (error) {
    next(error);
 }
}

export const getAllReviews = async (req, res, next) => {
  try {
      // 
      const reviews = await ReviewModel.find();
      // return response
      res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
}

export const getOneReview = async (req, res, next) => {
  try {
      // 
      const review = await ReviewModel.findById(req.params.id);
      // 
      res.status(200).json(review);
  } catch (error) {
    next(error);
  }
}

export const updateReview = async (req, res, next) => {
   try {
     // 
     const {error,value} = updateReviewValidator.validate(req.body);
     if (error){
         return res.status(422).json(error);
     }
     const reviewUpdate = await ReviewModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
     // 
     res.status(200).json(reviewUpdate);
   } catch (error) {
    next(error);
   }
}

export const deleteReview = async (req, res, next) => {
  try {
      // 
      const reviewDelete = await ReviewModel.findByIdAndDelete(req.params.id);
      // 
      res.status(200).json(reviewDelete);
  } catch (error) {
    next(error);
  }
}