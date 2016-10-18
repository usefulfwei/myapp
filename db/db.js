var mongoose = require('mongoose');
var init = require('./init.js');

mongoose.connect('mongodb://localhost/posts');
mongoose.set('debug', true)

var db = mongoose.connection;

db.on('error', function () {
    console.log('error')
})
db.once('open', function() {
	console.log('DB connected!');
});

var postSchema = mongoose.Schema({
    title: String,
    content: String,
    date: Number
});

var Posts = mongoose.model('posts', postSchema);

Posts.find(null, function(err, doc) {
    if (err) {
        console.log(err)
    } else {
        if (!doc[0]) {
            posts.save(function(err, doc) {
                if (err) console.log(err)
                console.log(doc);
            })
        }
    }
})

var posts = new Posts(init.posts);

module.exports = {
    Posts: Posts
}