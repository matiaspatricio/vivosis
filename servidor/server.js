const express = require("express");
const mongoose = require("mongoose");

const clienteRouter = require("./routes/ClienteRoutes");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/cliente", clienteRouter);

//configure mongoose
mongoose.connect("mongodb://127.0.0.1:27017/VivoSis");

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});

module.exports = app;
