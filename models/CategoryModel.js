const mongoose = require("mongoose")

var CategorySchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    description: String,
    suitable_age:String,
    longdescription: String,
  },
  {
    versionKey: false //optional (to remove _v: 0 when add new data)
  }
)

var CategoryModel = mongoose.model('Category', CategorySchema, 'category')
module.exports = CategoryModel

