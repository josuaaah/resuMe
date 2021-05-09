const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    content: {
        type: String,
        required: true
    }
});

const Resume = mongoose.model('Resume', resumeSchema);

export { Resume }
