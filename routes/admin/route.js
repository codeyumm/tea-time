const express = require('express');

// create router object
let router = express.Router();



// route for - /admin
router.route("/").get( (request, response) => {

    response.send("admin dasboard");

})



// route for - /admin/add-products
router.route("/add-product").get( (request, response) => {

    response.send("add product for admin");

})

module.exports = router;