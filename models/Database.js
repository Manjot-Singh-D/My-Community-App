const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema({
  secret_key: { type: String, default: "19012001" },
  allGroups: Array,
  allReviews: Array,
});

const Database = mongoose.model("Database", dbSchema);
module.exports = Database;
