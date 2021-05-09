var express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
var router = express.Router();

import { Resume } from '../models/resume';

router.get("/:id", async (req, res, next) => {
    const { id } = req.params
    const resumeToEdit = await Resume.findById(id);
    res.render("editResume", { resumeToEdit });
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const editedResume = await Resume.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect('/myResumes');
})

module.exports = router;
