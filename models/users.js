const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    userType: [{
        type: String
    }, "teacher"],
    rooms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "atmonRooms"
    }]
})

module.exports = mongoose.model('atmonAuthUsers', usersSchema);
