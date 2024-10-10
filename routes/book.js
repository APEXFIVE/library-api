import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getOneBook, updateBook } from "../controllers/book.js";
import { addBookValidator, updateBookValidator } from "../validators/book.js";


// create router here
const libraryRouter = Router();

// Routes are defined here
libraryRouter.post("/books", addBook);

libraryRouter.get("/books", getAllBooks);

libraryRouter.get("/books/:id", getOneBook);

libraryRouter.patch("/books/:id", updateBook);

libraryRouter.delete("/books/:id", deleteBook);

// Export router
export default libraryRouter;


// here