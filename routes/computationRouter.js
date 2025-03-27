// computationRouter.js
var express = require('express');
var router = express.Router();

/* GET computation */
router.get('/', function(req, res, next) {
  // Generate a random value
  let x = Math.random() * 10;  // Random number between 0 and 10

  // Check if query param exists and use it if present
  if (req.query.x) {
    x = parseFloat(req.query.x); // Override random with query param
  }

  // Apply Math.abs() and Math.acos() based on last digit of ID (1)
  let resultAbs = Math.abs(x);
  let resultAcos = Math.acos(x / 10); // acos range between 0 and 1 for input

  // Format the response
  res.send(`Math.abs() applied to ${x} is ${resultAbs} and Math.acos() applied to ${x} is ${resultAcos}`);
});

module.exports = router;
