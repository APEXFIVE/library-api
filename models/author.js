import { model, Schema } from "mongoose";

const authorSchema = new Schema ({
    name: {type: String, required: true},
    
    bio: {type: String, required: true},
    
});

export const AuthorModel = model('Author', authorSchema);