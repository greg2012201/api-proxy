const express = require('express');
const axios = require('axios');
const router = express.Router();
const BASE_URL = 'https://jsonplaceholder.typicode.com/';


let cachedData;
let cacheTime;
router.get('/', async (req, res, next) => {
    if (cacheTime && cacheTime > Date.now() - 30 * 1000) res.json(cacheData)
    try {
        const params = new URLSearchParams({

            api_key: process.env.API_URL,
            feedtype: 'json',
            ver: '1.0'

        });


        const {
            data
        } = await axios.get(`${BASE_URL}${process.env.API_URL}`);
        cachedData = data;
        cacheTime = Date.now();
        return res.json(data);


    } catch (error) {
        return next(error);
    }
});

module.exports = router;