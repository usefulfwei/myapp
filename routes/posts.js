var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var db = require('../db/db');

/* GET home page. */
router.get('/', (req, res, next) => {
    db.Posts
        .find({})
        .select({__v: 0})
        .limit(10)
        .sort({date: -1})
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
    let post = new db.Posts({ title, content, date });

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

router.put('/new/:id', (req, res, next) => {
    const { title, content } = req.body;
    db.Posts
        .findById({'_id': req.params.id})
        .select({__v: 0})
        .exec((error, post) => {
            if (error) {
                console.log(error);
                return res.json({error: 'Could not update post'});
            }
            post.title = title;
            post.content = content;
            post.save((error, doc) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({error: 'Could not save post'});
                }
                res.json({
                    code: 0
                })
            });
        });
});

router.get('/:id', (req, res, next) => {
    db.Posts
        .findById({'_id': req.params.id})
        .select({__v: 0})
        .exec((error, post) => {
            if (error) {
                console.log(error);
                return res.json({error: 'Could not retrieve post'});
            }

            res.json(post);
        });
});

router.delete('/:id', (req, res, next) => {
    let id = mongoose.Types.ObjectId(req.params.id);    // convert to objectid
    db.Posts
        .remove({'_id': id})
        .exec((error, post) => {
            if (error) {
                console.log(error);
                return res.json({error: 'Could not delete post'});
            }

            res.json({
                code: 0
            });
        });
});

module.exports = router;