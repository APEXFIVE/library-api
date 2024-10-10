import { ReviewModel } from "../models/review.js";

export const addReview = async (req, res, next) => {
 try {
       // validate user inputs
       // write to DB
       await ReviewModel.create(req.body);
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