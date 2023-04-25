const express = require("express");
require("dotenv").config();
require("./database/connection");
const app = express();

const booksRouter = require("./routers/books");
app.use(express.json());
const port = process.env.PORT;

app.use("/api", booksRouter);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
