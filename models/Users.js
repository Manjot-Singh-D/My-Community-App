const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token });
    this.password = await bcrypt.hash(this.password, 10);
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
    res.send("error is : ", err);
  }
};
// userSchema.pre("save", async (next) => {
//   console.log(this);
//   // if (this.isModified("password")) {
//   //   console.log("Current password : ", this.password);
//   //   // this.password = await bcrypt.hash(this.password, 10);
//   //   console.log("The current password : ", this.password);
//   // }
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
