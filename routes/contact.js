const express = require('express');
const router = express.Router();

/* get about us. */
router.get('/', function (req, res, next) {
    res.render('contact', {title: "Contact us"})
});

module.exports = router;
