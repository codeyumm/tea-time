const express = require('express');

// create router object
let router = express.Router();



// route for - /admin
router.route("/").get( (request, response) => {

    response.render("admin/dashboard");

})



// route for - /admin/add-products
router.route("/add-product").get( (request, response) => {

    response.render("admin/add-product");

})

module.exports = router;