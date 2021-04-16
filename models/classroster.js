const mongoose = require('mongoose');

const classRosterSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "atmonSubjects"
    },
    timeSchedule: {
        startTime: {
            type: Date
        },
        endTime: {
            type: Date
        }
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "atmonStudents"
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('atmonClassRoster', classRosterSchema);