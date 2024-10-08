import { Schema, Types, model } from "mongoose";

const bookSchema = new Schema({
    title: {type: String, required: true},

    summary: {type: String, required: true},

    author: {type: String, required: true},

    publishedYear:{type: Number, required: true},

});

export const BookModel = model('Book', bookSchema);


// this is just to push

