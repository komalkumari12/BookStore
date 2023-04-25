const booksController = require("../controllers/books");
const express = require("express");
const router = express.Router();

router.post("/addNewBook", booksController.addNewBook);

router.get("/getBookByTitle", booksController.getBookByTitle);

router.get("/getBookByAuthor", booksController.getBookByAuthor);

router.delete("/deleteBook", booksController.deleteBook);

// router.post("/uploadPdf", booksController.uploadPdf);

router.post("/search", booksController.search);

module.exports = router;
