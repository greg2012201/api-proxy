const express = require('express');


const apisData = require('./apis-data');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});


router.use('/apis-data', apisData);

module.exports = router;