const mongoose = require('mongoose');
const Achievement = require('./achievements')

mongoose.connect('mongodb://localhost:27017/resumeApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Mongoose connection open!")
    })
    .catch(err => {
        console.log("Mongoose connection error!")
        console.log(err)
    })

const award1 = new Achievement({
    name: 'Nobel Prize in Computer Science',
    description: 'Discovered proof of P = NP at the age of 9 under the ' +
        'tutelage of Associate Professor Ben Leong, earning me the first ' +
        'Nobel Prize for the National University of Singapore.',
    year: 2008,
    category: 'Award'
})

const certification1 = new Achievement({
    name: 'ABRSM Diploma in Piano Performance',
    description: 'Earned a diploma in piano performance by performing a ' +
        'self-composed cantata in the style of Herbert von Karajan. ' +
        'Offered a scholarship in the Julliard School of Music by ' +
        'concert pianist Lang Lang.',
    year: 2010,
    category: 'Certification'
})

const project1 = new Achievement({
    name: 'InstaBookTube',
    description: 'Implemented and deployed a social-networking application ' +
        'that was used by 10 billion people, which is more than the ' +
        'population of the world. Out of fear of competing market share, ' +
        'InstaBookTube was bought by Mark Zuckerberg of Facebook ' +
        'so that the application can be legally destroyed.',
    year: 2018,
    category: 'Project'
})

const work1 = new Achievement({
    name: 'White House Internship',
    description: 'Worked as a personal assistant to President Donald ' +
        'Trump in a four-year internship.',
    year: 2019,
    category: 'Work Experience'
})

const seedAchievements = [award1, certification1, project1, work1]

Achievement.insertMany(seedAchievements)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
