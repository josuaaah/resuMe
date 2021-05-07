var express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
var router = express.Router();

const Achievement = require('../models/achievement')

router.get("/", async (req, res, next) => {
    const achievements = await Achievement.find({});
    res.render('myAchievements', { achievements });
});

router.post('/', async (req, res) => {
    const newAchievement = new Achievement({
        name: req.body.name,
        description: req.body.description,
        year: req.body.year,
        category: req.body.category
    })
    await newAchievement.save()
    res.redirect('/myAchievements');
})

module.exports = router;
