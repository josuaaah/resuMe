var express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
var router = express.Router();

import { Resume } from '../models/resume';

router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
    await Resume.findByIdAndDelete(id);
    res.redirect('/myResumes');
});

module.exports = router;
