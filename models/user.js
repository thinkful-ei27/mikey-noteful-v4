'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName : { type : String },
  userName : { type : String, required : true, unique : true },
  password : { type : String, required : true }
});

userSchema.methods.validatePassword = function (incomingPassword) {
  const user = this; // for clarity
  return incomingPassword === user.password;
};

userSchema.set('toJSON', {
  virtuals: true,     // include built-in virtual `id`
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
    delete result.password;
  }
});

module.exports = mongoose.model('User', userSchema);