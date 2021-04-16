const mongoose = require('mongoose');

const roomsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "atmonAuthUsers"
    }
})

module.exports = mongoose.model('atmonRooms', roomsSchema);
