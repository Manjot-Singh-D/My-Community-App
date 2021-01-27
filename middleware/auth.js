const jwt = require("jsonwebtoken");
const Users = require("../models/Users");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
    const user = await Users.findOne({ _id: verifyUser._id });

    req.token = token;
    req.user = user;

    next();
  } catch (err) {
    res.status(401).send({ validity: false, message: "Error Occurred" });
  }
};

module.exports = auth;
