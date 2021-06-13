const express = require('express');
const router = express.Router();
const { body,validationResult } = require('express-validator');

/* GET login page. */
router.get('/', function (req, res, next) {
    res.render('login', { title: 'Login' });
});

router.post('/', (req, res) => {
    console.log(req.body.username)
    console.log(req.body.password)
})
module.exports = router;
