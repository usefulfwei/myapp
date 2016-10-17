var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ email: 'hisen.wang@radicasys.com' });
});

module.exports = router;
