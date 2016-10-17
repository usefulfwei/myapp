var express = require('express');
var router = express.Router();
var db = require('../db/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.Posts.find(function(err, doc) {
      if (err) console.log(err);
      res.json(doc);
    })
});

module.exports = router;
