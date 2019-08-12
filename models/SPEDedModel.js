var mongoose = require("mongoose");
//Have to require mongoose in every file it's used

var Schema = mongoose.Schema;

var StudentSchema = new Schema ({
    firstName: {
        type: String,
        trim: true,
        required: "Please enter your first name."
    },
    lastName: {
        type: String,
        trim: true,
        required: "Please enter your last name."
    },
    siteName: {
        type: String,
        trim: true,
        required: "Please enter your site name."
    },
    siteDistrict: {
        type: String,
        trim: true,
        required: "Please select your district."
    },
    siteCity: {
        type: String,
        trim: true,
        required: "Please select the city of your district."
    }
})

var SPEDteacher = mongoose.model("SPEDteacher", StudentSchema);

module.exports = SPEDteacher;
