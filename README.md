# BOOKS API
## set up

Run the server:
```terminal 
npm run dev
```
## API Endpoints
## Book Endpoints
**POST** '/books' -Add a new book 
**GET** '/books' - Get all books 
**GET** '/books/:id' - Get a book by an ID 
**PATCH** '/books/:id' - Update a book by an ID 
**DELETE** '/books/:id' - Delete a book by ID


## AUTHORS Endpoints
**POST** '/authors' -Add a new author 
**GET** '/authors' - Get all authors 
**GET** '/authors/:id' - Get an author by an ID 
**PATCH** '/authors/:id' - Update an author by an ID 
**DELETE** '/books/:id' - Delete a book by ID


## REVIEWS Endpoints
**POST** '/reviews' -Add a new book 
**GET** '/reviews' - Get all reviews 
**GET** '/reviews/:id' - Get a review by an ID 
**PATCH** '/reviews/:id' - Update a review by an ID 
**DELETE** '/reviews/:id' - Delete a review by ID 

A simple CRUD Books API using Node.js,Express and E5 Modules.

1. Clone the repository.
2. Install dependencies:
```terminal
npm install
npm express
npm mongoose
npm joi
npm dotenv
npm mongodb
npm url
npm nodemon

3. Create a `.env` file and set the following variables: 
```
PORT 3055
MONGO_URI
```

Create a `.gitignore` file and add the following lines:
.env
node_modules/
package-lock.json