var express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
var router = express.Router();

import { Resume } from '../models/resume';

router.get("/", async (req, res, next) => {
    const resumes = await Resume.find({});
    res.render("myResumes", { resumes });
});

module.exports = router;
