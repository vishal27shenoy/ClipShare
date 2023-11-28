const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  id: {
    type: String,
    min: 6,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
});
const clipboard = new mongoose.model("clipboard", schema);
module.exports = clipboard;