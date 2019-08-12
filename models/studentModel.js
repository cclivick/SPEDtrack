var mongoose = require("mongoose");
//Have to require mongoose in every file it's used

var Schema = mongoose.Schema;

var StudentSchema = new Schema ({
    firstName: {
        type: String,
        trim: true,
        required: "Please enter student's first name."
    },
    lastName: {
        type: String,
        trim: true,
        required: "Please enter student's last name."
    },
    teacher1: {
        type: String,
        required: "You must select student's 1st hour / block teacher."
    },
    teacher2: {
        type: String,
        required: "You must select student's 2nd hour / block teacher."
    },
    teacher3: {
        type: String,
        required: "You must select student's 3rd hour / block teacher."
    },
    teacher4: {
        type: String,
        required: "You must select student's 4th hour / block teacher."
    },
    teacher5: {
        type: String
    },
    teacher6: {
        type: String
    },
    teacher7: {
        type: String
    },
    teacher8: {
        type: String
    },
    teacher9: {
        type: String
    },
    parent1FirstName: {
        type: String,
        required: "Please provide the first name of at least 1 parent or guardian."
    },
    parent1LastName: {
        type: String,
        required: "Please provide the last name of at least 1 parent or guardian."
    },
    parent2FirstName: {
        type: String,
    },
    parent2LastName: {
        type: String,
    }

});

var Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
