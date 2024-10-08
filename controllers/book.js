// import { BookModel } from "../models/book.js";

// export const addBook = (req, res, next) => {
//     res.status(200).json("New book was added!");
// }

// export const getAllBooks = (req, res, next) => {
//     res.status(200).json("All books was added");
// }

// export const getOneBook = (req, res, next) => {
//     res.status(200).json("One book was added");
// }

// export const updateBook = (req, res, next) => {
//     res.status(200).json("Book was updated");
// }

// export const deleteBook = (req, res, next) => {
//     res.status(200).json("Book was deleted");
// }

import { addBookValidator, updateBookValidator } from "../validators/book.js";
import { BookModel } from "../models/book.js";

// Add a new book
export const addBook = async (req, res, next) => {
    try {
        const {error,value} = addBookValidator.validate(req.body);
        if (error){
            return res.status(422).json(error);
        }
        const addBooks = BookModel(value);
        // const {error,value} = addBookValidator.validate(req.body);
        const savedBook = await addBooks.save();
        res.status(201).json(addBooks);
       
    } catch (error) {
        next(error);
    }
};

// Get all books
export const getAllBooks = async (req, res, next) => {
    try {
        const books = await BookModel.find();
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
};

// Get one book by ID
export const getOneBook = async (req, res, next) => {
    try {
        const book = await BookModel.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        next(error);
    }
};

// Update a book by ID
export const updateBook = async (req, res, next) => {
    try {
        // validation is added here
        const {error,value} = updateBookValidator.validate(req.body);
        if (error){
            return res.status(422).json(error);
        }
        const updatedBook = await BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        next(error);
    }
};

// Delete a book by ID
export const deleteBook = async (req, res, next) => {
    try {
        const deletedBook = await BookModel.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book was deleted successfully" });
    } catch (error) {
        next(error);
    }
};


// here is here