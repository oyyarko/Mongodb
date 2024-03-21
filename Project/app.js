const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes');
const config = require('./config');

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use('/api/users', userRoutes);

//Connect to MongoDb
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

//Server start point
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server started on 8080"));
