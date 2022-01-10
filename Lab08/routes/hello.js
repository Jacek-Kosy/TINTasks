const express = require('express');
const router = express.Router();

/* Hello World! */
router.get('/', function(req, res, next) {
    res.send('hello world');
});

module.exports = router;

