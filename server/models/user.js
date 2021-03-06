const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  uuid: String,
  name: String,
  username: String,
  password: String,
  email: String,
  phone: {
    type: String,
    default: '+6281315853615'
  },
  role: {
    type: String,
    default: 'user'
  },
  createdDate: {
    type: Date,
    default: Date.now()
  },
  updatedDate: {
    type: Date,
    default: Date.now()
  }
})

let User = mongoose.model('User', userSchema)
module.exports = User