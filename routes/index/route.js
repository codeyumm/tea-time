const express = require('express');

// create route object
let router = express.Router();

// for - localhost:8888
router.route('/').get( (requst, response) => {

    response.status(200).send("this is a home page")
});

module.exports = router;
