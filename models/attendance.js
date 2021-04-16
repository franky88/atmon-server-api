const mongoose = require('mongoose');

const attendanceSchema = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "atmonStudents"
    },
    status: [{
        type: String
    }],
    date: [{
        type: Date,
        default: Date.now
    }]
})

module.exports = mongoose.model('atmonAttendance', attendanceSchema);