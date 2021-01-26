const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./Routes/userRoutes");
const routes = require("./Routes/routes.js");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(
  "mongodb+srv://my_community:my_community@cluster0.r2mba.mongodb.net/MyCommunity?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/api/users", userRoutes);
app.use("/api/general", routes);

app.listen(PORT, () => console.log("Server is Running"));
