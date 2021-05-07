const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    year: {
        type: String,
        required: true,
        min: 0
    },
    category: {
        type: String,
        required: true,
        enum: [
            'Award',
            'Certification',
            'Project',
            'Work Experience'
        ]
    }
});

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;
