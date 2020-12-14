const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        min: 6,
        max: 70
    }, 
    lastname: {
        type: String,
        required: true,
        min: 6,
        max: 70
    },
    date_of_birth:{
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
   gender: {
        type: String,
        required: true
    },
    date_of_birth:{
        type: String,
        required: true
    },
    occupation:{
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
    date_of_registration:{
        type: String

    } ,
    about: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    volunteer_as: {
        type: String,
        default: "lawyer",
        enum: ["lawyer","counsellor","human_rights_activist"]
}
});

const volunteerModel = mongoose.model("volunteer",volunteerSchema)

module.exports = volunteerModel;