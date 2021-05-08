var express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
var router = express.Router();
const fs = require('fs');

import { Achievement } from '../models/achievement';
import { Resume } from '../models/resume';

router.get("/", async (req, res, next) => {
    const achievements = await Achievement.find({});
    res.render('addNewResume', { achievements });
});

router.post('/', async (req, res) => {
    const resumeName = req.body.resumeName;
    const resumeDescription = req.body.resumeDescription;
    let resumeText = "";
    const selectedIds = req.body.selectedIds;
    if (typeof selectedIds === "string") {
        const selectedAchievement = await Achievement.findById(selectedIds);
        resumeText += selectedAchievement.name + '\n'
            + selectedAchievement.description + '\n\n';
    } else {
        for (let id of req.body.selectedIds) {
            const selectedAchievement = await Achievement.findById(id);
            resumeText += selectedAchievement.name + '\n'
                + selectedAchievement.description + '\n\n';
        }
    }
    fs.writeFile(resumeName + '.txt', resumeText, function (err) {
        if (err) return console.log(err);
    });

    const newResume = new Resume({
        name: resumeName,
        description: resumeDescription,
        content: resumeText
    });
    await Resume.create(newResume);

    res.redirect('/myResumes');
})

module.exports = router;
