var express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
var router = express.Router();

router.get("/aboutUs", function(req, res, next) {
    res.render("aboutUs");
});

module.exports = router;
