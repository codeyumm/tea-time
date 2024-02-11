const express = require("express");

// create router object
let router = express.Router();

// middleware
// router.use( (requset, response, next) => {
//     console.log( requset.url, "#", Date.now());
//     next();
// })

// /menu/
router.route("/").get( (request, response) => {

    response.status(200).send("menu page");

} );


module.exports = router;