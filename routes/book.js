import { Router } from "express";
import { addBook, /*addBulkBook,*/ deleteBook, getAllBooks, getOneBook, updateBook } from "../controllers/book.js";
import { BookModel } from "../models/book.js";


// create router here
const libraryRouter = Router();

// Routes are defined here
libraryRouter.post("/books", addBook);

libraryRouter.get("/books", getAllBooks);

libraryRouter.get("/books/:id", getOneBook);

libraryRouter.patch("/books/:id", updateBook);

libraryRouter.delete("/books/:id", deleteBook);

// libraryRouter.post('/bulk', addBulkBook);

// Export router
export default libraryRouter;


// here