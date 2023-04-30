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

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await BookStore.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Book Information Deleted",
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await BookStore.find({});
    return res.status(200).json({
      message: allBooks,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

exports.getBookByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const bookDetails = await BookStore.find({ title });

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
    const bookDetails = await BookStore.find({ author: Author });

    return res.status(200).json(bookDetails);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

exports.search = async (req, res) => {
  try {
    const { s } = req.query;

    const result = await BookStore.findOne({
      $or: [
        {
          title: {
            $regex: s,
            $options: "i",
          },
        },
        {
          author: {
            $regex: s,
            $options: "i",
          },
        },
      ],
    });
    return res.json({
      message: result,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};
