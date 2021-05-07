var express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
var router = express.Router();

import { Achievement, achievementCategories } from '../models/achievement';

router.get("/:id", async (req, res, next) => {
    const { id } = req.params
    const achievementToEdit = await Achievement.findById(id);
    res.render("editAchievement", { achievementToEdit, achievementCategories });
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const editedAchievement = await Achievement.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect('/myAchievements');
})

module.exports = router;
