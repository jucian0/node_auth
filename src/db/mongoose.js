const mongoose = require("mongoose");

mongoose
  .connect("mongodb://app_user:app_password@localhost:27017/admin", {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("failed connected to database");
  });
