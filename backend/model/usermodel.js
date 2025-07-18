const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is Required"],
        trim: true
    },
    middleName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Last Name is Required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        trim: true
    },
    password: {
        type: String,
        select: false,
        required: [true, "Password is Required"]
    },
    role: {
        type: String,
        enum: ["Admin", "Teacher", "Student"]
    }
});

module.exports = mongoose.model("User", userSchema);