import Book from "../Models/Book.js";

// create a new book
export const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ message: "Book Created Successfully", book });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get all books
export const getAllBooks = async (req, res) => {
  try {
    const book = await Book.find();
    res.json({ message: "Fetched All Books", book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get a book by id
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Fetched Book By ID", book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a book
export const updateBookByID = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book Updated Successfully", book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete a book
export const deleteBookByID = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book Deleted Successfully", book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
