import * as mongoose from 'mongoose';
import { AuthorSchema } from 'src/documents/authors.shema';

export const BookSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    price: { type: Number, required: true},
    status: { type: String, required: true},
    currency: { type: String, required: true},
    type: { type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Author'},
});

export interface Book extends mongoose.Document {
    id?: string;
    name?: string;
    description?: string;
    price?: number;
    status?: string;
    currency?: string;
    type?: string;
    author?: string;
}

mongoose.model('Author', AuthorSchema);
