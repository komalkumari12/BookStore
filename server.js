const express = require("express");
require("dotenv").config();
require("./database/connection");
const app = express();

const booksRouter = require("./routers/books");

const port = process.env.PORT;

capp.use("/api", booksRouter);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
