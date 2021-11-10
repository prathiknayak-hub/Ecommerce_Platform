const express = require('express');
const router = express.Router();

router.get('/',(req,res) => res.render('dashboard', { layout: false }));

module.exports = router;