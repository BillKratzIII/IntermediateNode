var express = require('express');
var router = express.Router();

/* GET reports listing. */
router.get('/', function(req, res, next) {
  res.send('Handle reports here');
});

module.exports = router;
