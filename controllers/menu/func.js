

// get method to connect to database
const connection = require('../../controllers/database/db');
const { MongoClient } = require("mongodb");

// function to get all items from database
async function getItems(){

    let db = await connection();

    let result = await db.collection('items').find({});
    let res = await result.toArray();


    return res;
}


// function to get all hot tea from database
async function getHotTea(){

    let db = await connection();

    let result = await db.collection('items').find({ category: "Hot tea"});
    let res = await result.toArray();


    return res;
}


// function get all iced tea from database
async function getIcedTea(){

    let db = await connection();

    let result = await db.collection('items').find({ category: "Hot tea"});
    let res = await result.toArray();

    return res;
}

// function get all snacks item from database
async function getSnacks(){

    let db = await connection();

    let result = await db.collection('items').find({ category: "Snacks"})
    let res = await result.toArray();

    console.log(res);

    return res;
}

// function get all popular items from database
async function getPopularItems(){

    let db = await connection();

    let result = await db.collection('items').find({ isPopular: true });
    let res = await result.toArray();

    return res;
}



module.exports = { 
                    getItems, 
                    getPopularItems, 
                    getHotTea, 
                    getIcedTea, 
                    getSnacks 
                };


/* 
    title, desc, price, image, isPopular, category

*/