var express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
var router = express.Router();

import { Achievement, achievementCategories } from '../models/achievement';

router.get("/", function(req, res, next) {
    res.render("addNewAchievement", { achievementCategories });
});

router.post('/', async (req, res) => {
    const newAchievement = new Achievement(req.body);
    await newAchievement.save()
    res.redirect('/myAchievements');
})

module.exports = router;
