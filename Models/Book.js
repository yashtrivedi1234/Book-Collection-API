import mongoose from "mongoose";
// Book model schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Book = mongoose.model("Book", bookSchema);
export default Book;
