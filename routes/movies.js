var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var http = require('http');
var baseUrl = 'http://www.dy2018.com';
var cheerio = require('cheerio');
var iconv = require('iconv-lite');

var db = require('../db/db');

router.get('/', (req, res, next) => {
    getPage(baseUrl)
        .then(html => {
            let movies = filterData(html);
            const { title, link, date } = movies;
            printMovies(movies);
            db.Movies.remove();
            let movie = new db.Movies({ title, link, date });
            movie.save();
            return movies;
        })
        .then(movies => {
            res.json(movies);
        })
        .catch(error => {
            console.log(error);
            db.Movies
                .find({})
                .select({ __v: 0 })
                exec((err, movie) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json(movie);
                    }
                })


        })
})

function getPage(url) {
    return new Promise((resolve, reject) => {
        console.log(`crawling... ${url}`);
        http.get(url, (req, res) => {
            let chunks = [];
            // req.setEncoding('utf8');
            req.addListener('data', function(chunk) {
                chunks.push(chunk);
            });
            req.addListener('end', function() {
                let html = iconv.decode(Buffer.concat(chunks), 'gb2312');
                resolve(html);
            });
        }).on('error', function(error) {
            reject(error);
            console.log('get data error');
        });
    });
}

function filterData(html) {
    const movies = [];
    /* 
        movies = [{
            title: string,
            link: string,
            date: string
        }]
     */
    // let html = iconv.decode(page, 'gb2312');
    let $ = cheerio.load(html);
    $('.co_content222 a').each((index, item) => {
        if (index === 30) {
            return false;
        }
        let $item = $(item);
        let date = new Date().getFullYear() + '-' + $item.next('span').text();
        let link = baseUrl + $item.attr('href');
        movies.push({
            title: $item.text(),
            link,
            date
        })
    });

    return movies;
}

function printMovies(movies) {
    movies.forEach((item, index) => {
        console.log(`【${index+1}】${item.title} \n -link: ${item.link} \n -upload date: 2016-${item.date} \n`);
    })
}

module.exports = router;