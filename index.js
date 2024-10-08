import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import libraryRouter from './routes/book.js';
import authorRouter from './routes/author.js';
import reviewRouter from './routes/review.js';

// connect to database



// create a library express app
const app = express();

// use middlewares
app.use(express.json());
app.use(cors());

// use routers
app.use(libraryRouter);
app.use(authorRouter);
app.use(reviewRouter);


// listen for incoming request
app.listen(3055, () => {
    console.log('App is listening on port 3055');
});