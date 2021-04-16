const mongoose = require('mongoose');

const studentsSchema = mongoose.Schema({
    lrn: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    birthDate: {
        type: Date,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    studentStatus: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    classRosters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "atmonClassRoster"
    }],
    attendance: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "atmonAttendance"
    }]
})

module.exports = mongoose.model('atmonStudents', studentsSchema);
