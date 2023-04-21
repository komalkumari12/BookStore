const mongoose = require("mongoose");
const URI = process.env.MONGO_DB;

mongoose
  .connect(URI)
  .then((res) => {
    console.log("Connnection establised with Database");
  })
  .catch((error) => {
    console.log(error.message);
  });
