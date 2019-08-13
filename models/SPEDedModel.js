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
    siteDistrict: {
        type: String,
        trim: true,
        required: "Please select your district."
    },
    siteName: {
        type: String,
        trim: true,
        required: "Please enter your site name."
    }
})

var SPEDteacher = mongoose.model("SPEDteacher", StudentSchema);

module.exports = SPEDteacher;
