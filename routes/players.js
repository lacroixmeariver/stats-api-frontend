const express = require('express');
// const apiService = require('../services/apiService');

const router = express.Router();

// TODO: add route handlers for the frontend

router.get('/', async (req, res) => {
    // const data = await apiService.fetchData();
    // res.json(data);
    res.render('players');
});


module.exports = router;
