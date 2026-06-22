const express = require('express');

const router = express.Router();

// TODO: add route handlers for the frontend

router.get('/', (req, res) => {
    res.render('index');
});


module.exports = router;
