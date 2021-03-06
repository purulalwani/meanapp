var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
                                     username: {type: String, lowercase: true, unique: true},
                                     hash: String,
                                     salt: String
                                     });

module.exports = mongoose.model('User', UserSchema);