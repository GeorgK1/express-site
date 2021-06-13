const express = require('express');
const router = express.Router();

/* get about us. */
router.get('/', function (req, res, next) {
    res.render('about', {title: "About us"})
});

module.exports = router;
