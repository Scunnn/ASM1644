const mongoose = require("mongoose")

var ToySchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    year: Number,
    image: String,
    description: String,
  },
  {
    versionKey: false //optional (to remove _v: 0 when add new data)
  }
)

var ToyModel = mongoose.model('Do choi', ToySchema, 'toy');
module.exports = ToyModel

