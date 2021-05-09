const express = require("express");
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const methodOverride = require('method-override');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cookieParser());
app.use(session({
    secret: "secret",
    saveUninitialized: true,
    resave: false
}));
app.use(flash());
app.use(function (req, res, next) {
    res.locals.message = req.flash("message");
    req.flash("message");
    next();
});
app.use(methodOverride('_method'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/resumeApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Mongoose connection open!")
    })
    .catch(err => {
        console.log("Mongoose connection error!")
        console.log(err)
    })

const homeRouter = require('./routes/home');
const aboutUsRouter = require('./routes/aboutUs');
const myAchievementsRouter = require('./routes/myAchievements');
const myResumesRouter = require('./routes/myResumes');
const myProfileRouter = require('./routes/myProfile');
const dashboardRouter = require('./routes/dashboard');
const forgetPasswordRouter = require('./routes/forgetPassword');
const addNewAchievementRouter = require('./routes/addNewAchievement');
const addNewResumeRouter = require('./routes/addNewResume');
const editProfileRouter = require('./routes/editProfile');
const editAchievementRouter = require('./routes/editAchievement');
const deleteAchievementRouter = require('./routes/deleteAchievement');
const editResumeRouter = require('./routes/editResume');

app.use('/', homeRouter);
app.use('/aboutUs', aboutUsRouter);
app.use('/myAchievements', myAchievementsRouter);
app.use('/myResumes', myResumesRouter);
app.use('/myProfile', myProfileRouter);
app.use('/dashboard', dashboardRouter);
app.use('/forgetPassword', forgetPasswordRouter);
app.use('/addNewAchievement', addNewAchievementRouter);
app.use('/addNewResume', addNewResumeRouter);
app.use('/editProfile', editProfileRouter);
app.use('/editAchievement', editAchievementRouter);
app.use('/deleteAchievement', deleteAchievementRouter);
app.use('/editResume', editResumeRouter);

app.listen(process.env.PORT || 3030, function() {
  console.log("Server started on port 3030")
});
