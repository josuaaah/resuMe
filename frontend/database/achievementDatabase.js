const achievementDatabase = require('mongoose');
achievementDatabase.connect('mongodb://localhost:27017/achievements', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection open")
    })
    .catch(err => {
        console.log(err)
    })

const achievementSchema = new achievementDatabase.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    year: Number,
    category: {
        type: String,
        required: true,
        enum: ['Work Experience', 'Personal Project', 'Awards and Certifications']
    }
});

const Achievement = achievementDatabase.model('Achievement', achievementSchema)
