const mongoose = require('mongoose');

const achievementCategories = [
    'Award',
    'Certification',
    'Project',
    'Work Experience'
];

const achievementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    year: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        required: true,
        enum: achievementCategories
    }
});

const Achievement = mongoose.model('Achievement', achievementSchema);

export {
    Achievement,
    achievementCategories
}
