const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  loc_name: {
    type: String
  },
  loc: {
    long: {
      type: String,
      required: true
    },
    lat: {
      type: String,
      required: true
    }
  },
  tags: {
    type: Array,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Rest = mongoose.model("rest", RestSchema);
