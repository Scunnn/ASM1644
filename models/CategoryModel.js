const mongoose = require("mongoose")

var CategorySchema = new mongoose.Schema(
  {
    name: String,
    image: String,
  },
  {
    versionKey: false //optional (to remove _v: 0 when add new data)
  }
)

var CategoryModel = mongoose.model('Category', CategorySchema, 'category')
module.exports = CategoryModel

