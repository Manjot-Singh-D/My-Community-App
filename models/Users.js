const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  bio: String,
  Address: String,
  Website: String,
  Github: String,
  Twitter: String,
  Instagram: String,
  Facebook: String,
  phoneNumber: String,
  mobileNumber: String,
  groupsCreated: Array,
  reviewsMade: Array,
  myJoinedGroups: Array,
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
