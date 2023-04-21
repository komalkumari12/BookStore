const BookStore = require("../models/books");

exports.addNewBook = async (req, res) => {
  try {
    const bookDetails = await BookStore.create(req.body);

    return res.status(200).json(bookDetails);
  } catch (error) {
    return res.status(500).json({
      //which http status code will indicate that data is not entered in database
      message: error.message,
    });
  }
};

exports.deleteBook = async (req, res) => {};

exports.getBookByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const bookDetails = await BookStore.findById(title);

    return res.status(200).json(bookDetails);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

exports.getBookByAuthor = async (req, res) => {
  try {
    const { Author } = req.params;
    const bookDetails = await BookStore.findById(Author);

    return res.status(200).json(bookDetails);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
