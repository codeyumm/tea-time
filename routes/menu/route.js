const express = require("express");


const model = require('../../controllers/menu/func');

// create router object
let router = express.Router();


// /menu/
router.route("/").get( async(request, response) => {



    let items = await model.getSnacks();


    response.status(200).render("menu/menu", { test:"priyam", items: items});

} );


module.exports = router;