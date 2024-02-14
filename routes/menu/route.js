const express = require("express");
const db = require('../../controllers/database/db');
// create router object
let router = express.Router();

// middleware
// router.use( (requset, response, next) => {
//     console.log( requset.url, "#", Date.now());
//     next();
// })

// /menu/
router.route("/").get( (request, response) => {



    db();
    
    response.status(200).render("menu/menu")

} );


module.exports = router;