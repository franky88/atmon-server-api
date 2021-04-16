const mongoose = require('mongoose');

const subjectsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    units: {
        type: Number,
        require: true
    },
    classRosters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "atmonClassRoster"
    }]
})

module.exports = mongoose.model('atmonSubjects', subjectsSchema);