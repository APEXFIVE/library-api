import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import libraryRouter from './routes/book.js';
import authorRouter from './routes/author.js';
import reviewRouter from './routes/review.js';
import userRouter from './routes/users.js';

// connect to database
await mongoose.connect(process.env.MONGO_URI);


// create a library express app
const app = express();

// use middlewares
app.use(express.json());
app.use(cors());

// use routers
app.use(libraryRouter);
app.use(authorRouter);
app.use(reviewRouter);
app.use(userRouter);


// listen for incoming request
app.listen(3055, () => {
    console.log('App is listening on port 3055');
});



// joi has been added and updated
