const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    }, 
     lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required:  true
    },
    password: {
        type: String,
        minlength: [6, 'Mininum password length is 6 characters'],
        max: 1000,
        unique: true,
        required: true
    },
    role: {
        type: String
}
});

const adminModel = mongoose.model("admin",adminSchema)

module.exports = adminModel;