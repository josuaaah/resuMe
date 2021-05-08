var express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
var router = express.Router();

import { Achievement } from '../models/achievement';

router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
    await Achievement.findByIdAndDelete(id);
    res.redirect('/myAchievements');
});

module.exports = router;
