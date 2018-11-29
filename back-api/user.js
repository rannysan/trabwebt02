var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Classe usuario
var UserSchema = new Schema({
    usuario: String,
    senha: String
});

module.exports = mongoose.model('Usuario', UserSchema);