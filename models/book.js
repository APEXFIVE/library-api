import { Schema, Types, model } from "mongoose";

const bookSchema = new Schema({
    title: {type: String, required: true},

    summary: {type: String, required: true},

    author: {type: Types.ObjectId, ref: 'Author'},

    publishedYear:{type: String, required: true},

});

export const BookModel = model('Book', bookSchema);