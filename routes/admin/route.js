const express = require('express');

const model = require('../../controllers/menu/func')
const connection = require('../../controllers/database/db'); 

// create router object
let router = express.Router();



// route for - /admin
router.route("/").get( (request, response) => {

    response.render("admin/dashboard");

})



// route for - /admin/add-products
router.route("/add-product").get( async (request, response) => {
    
    // get category names from database to display in form
    let categories = await model.getAllCategory();

    response.render("admin/add-product", {categories: categories});

})


// route for - /admin/add-products for post request
router.route("/add-product").post( async (request, response) => {

    // get the data of new item
    console.log(request.body.price);

    request.body.price = parseInt(request.body.price);
    
    // set default image if user doesnt leaves the image field blank
    if( !request.body.image ){
        request.body.image = "https://placehold.co/600x800";
    } 

    newItem = request.body

    // connect to database
    let db = await connection();

    // add item to database
    let isItemAdded = db.collection('items').insertOne( newItem );


    response.redirect("/menu");

})

module.exports = router;