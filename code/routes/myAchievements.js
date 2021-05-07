var express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
var router = express.Router();

const Achievement = require('../models/achievement')

router.get("/", async (req, res, next) => {
    const achievements = await Achievement.find({});
    console.log(achievements)
    res.render('myAchievements', { achievements });
});

module.exports = router;
