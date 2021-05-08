var express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
var router = express.Router();

import { Achievement } from '../models/achievement';

router.get("/", async (req, res, next) => {
    const achievements = await Achievement.find({});
    res.render('addNewResume', { achievements });
});

router.post('/', async (req, res) => {
    res.send(req.body)
})

module.exports = router;
