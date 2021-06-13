const express = require('express');
const router = express.Router();


/* GET login page. */
router.get('/', function (req, res, next) {
    res.render('register', { title: 'Register' });
});

router.post('/', (req, res) => {
    console.log(req.body.username)
    console.log(req.body.password)
    console.log(req.body.email)
})
module.exports = router;
