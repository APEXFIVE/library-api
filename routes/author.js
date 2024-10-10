import { Router } from "express";
import { addAuthor, deleteAuthor, getAllAuthors, getOneAuthor, UpdateAuthor } from "../controllers/author.js";
import { addAuthorValidator } from "../validators/author.js";

// create router
const authorRouter = Router();

// define routes
authorRouter.post("/authors", addAuthor);

authorRouter.get("/authors", getAllAuthors);

authorRouter.get("/authors/:id", getOneAuthor);

authorRouter.patch("/authors/:id", UpdateAuthor);

authorRouter.delete("/authors/:id", deleteAuthor);

// export router
export default authorRouter;