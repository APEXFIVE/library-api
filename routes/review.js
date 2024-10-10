import { Router } from "express";
import { addReview, deleteReview, getAllReviews, getOneReview, updateReview } from "../controllers/review.js";
import { addReviewValidator } from "../validators/review.js";


// create router
const reviewRouter = Router();

// define routes
reviewRouter.post("/reviews", addReview);

reviewRouter.get("/reviews", getAllReviews);

reviewRouter.get("/review/:id", getOneReview);

reviewRouter.patch("/reviews/:id", updateReview);

reviewRouter.delete("/reviews/:id", deleteReview);

// export router
export default reviewRouter;

//things