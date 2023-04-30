const booksController = require("../controllers/books");
const express = require("express");
const router = express.Router();

router.post("/addNewBook", booksController.addNewBook);

router.get("/getBookByTitle/:title", booksController.getBookByTitle);

router.get("/getBookByAuthor/:Author", booksController.getBookByAuthor);

router.delete("/deleteBook/:id", booksController.deleteBook);

// router.post("/uploadPdf", booksController.uploadPdf);

router.get("/getAllBooks", booksController.getAllBooks);

router.get("/search", booksController.search);

module.exports = router;
