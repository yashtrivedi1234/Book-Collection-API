import express from "express";
import {
  createBook,
  deleteBookByID,
  getAllBooks,
  getBookById,
  updateBookByID,
} from "../Controllers/bookController.js";

const router = express.Router();

// Route to create a book
router.post("/create", createBook);

// Route to get all books
router.get("/read", getAllBooks);

// Route to get a book by ID
router.get("/:id", getBookById);

// Route to update a book
router.put("/:id", updateBookByID);

// Route to delete a book
router.delete("/:id", deleteBookByID);

export default router;
