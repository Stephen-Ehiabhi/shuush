const mongoose = require('mongoose');

const reportedcasesSchema = new mongoose.Schema({
   
    reported_for: {
        type: String
    },
    gender_of_the_victim: {
        type: String
    },
    age_of_the_victim: {
        type: String
    },
    gender_of__the_abuser: {
        type: String
    },
    the_school_case_happened: {
        type: String
    },
    anonymous_name: {
        type: String
    },
    abusers_name: {
        type: String
    },
    abusers_occupation: {
        type: String
    },
    abusers_department: {
        type: String
    },
    date_victim_was_assaulted: {
        type: String
    },
    victims_story: {
        type: String
    },
    victims_case_evidence: {
        type: String
    },
    email: {
        type: String
    },
    date_of_report:{
        type: String

    } ,
    case_status:{
        type: String,
        default: "pending",
        enum: ["pending","in-progress","done"]
    }
});

const reportedCasesModel = mongoose.model("reported_cases",reportedcasesSchema)

module.exports = reportedCasesModel;