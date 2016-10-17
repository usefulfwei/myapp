var express = require('express');
var router = express.Router();
var db = require('../db/db');

/* GET home page. */
router.get('/', (req, res, next) => {
    db.Posts
        .find({})
        .select({__v: 0, updatedAt: 0})
        .limit(100)
        .sort({createdAt: -1})
        .exec((err, posts) => {
            if (err) {
                console.log(err);
                return res.status(500).json({error: 'Could not retrieve posts'});
            }
            res.json(posts);
        });
});

router.post('/new', (req, res, next) => {
    const { title, content } = req.body;
    const date = +new Date();
    var post = new db.Posts({ title, content, date });

    post.save((error, post) => {
        if (error) {
			console.log(error);
			return res.status(500).json({error: 'Could not save post'});
		}
        res.json({
            code: 0,
            post
        })
    });
});

module.exports = router;