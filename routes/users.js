var express = require('express');
var router = express.Router();


// Initialize ratio and acc
let ratio = 0.75;
let acc = 1000;


/* GET users listing. */
router.get('/', function(req, res, next) {
    // Multiply acc by ratio and update acc
    acc *= ratio;
    //res.send('respond with a resource');

    // Send the response with the updated value of acc
   res.send(`Value is: ${acc}`);
});

module.exports = router;
