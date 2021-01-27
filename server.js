const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./Routes/userRoutes");
const routes = require("./Routes/routes.js");
const mongoose = require("mongoose");
const path = require("path");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.static(path.join("public")));

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.r2mba.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/api/users", userRoutes);
app.use("/api/general", routes);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log("Server is Running"));
