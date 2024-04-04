const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    history: {type: []},
    orderNumber: {type: []}
})

module.exports = model('User', UserSchema);