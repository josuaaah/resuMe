const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/achievements', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection open")
    })
    .catch(err => {
        console.log(err)
    })

const achievementSchema = new mongoose.Schema({
    name: String,
    description: String,
    year: Number
});

const Achievement = mongoose.model('Achievement', achievementSchema)

const achievement1 = new Achievement({
    name: 'Achievement 1',
    description: 'Description of Achievement 1.',
    year: 2021
})
