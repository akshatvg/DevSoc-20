var express = require('express')
var app = express()
var path = require('path')
var session = require('express-session')
const request = require('request')
//db connection
require('dotenv').config()
var db = require('./config/keys')
var mongoose = require('mongoose')
mongoose.connect(db.mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
var secretkey = db.secret

//models
var contactUs = require('./models/db-contact')

var bodyParser = require('body-parser')

var port = process.env.PORT || 3000

app.use(session({
    secret: 'devsoc',
    resave: true,
    saveUninitialized: true
}));

app.use(express.static("static"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.set('view engine', 'hbs')

app.get('/index', function (req, res) {
    res.render('index')
})

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/speaker-details', function (req, res) {
    res.render('speaker-details')
})

// Error Messages

app.get(function (req, res) {
    res.status(404).render('error');
});

app.use(function (req, res) {
    res.status(500).render('error');
});

app.get(function (req, res) {
    res.status(400).render('error');
});

app.use(function (req, res) {
    res.status(400).render('error');
});

app.get(function (req, res) {
    res.status(403).render('error');
});

app.use(function (req, res) {
    res.status(403).render('error');
});

app.get(function (req, res) {
    res.status(502).render('error');
});

app.use(function (req, res) {
    res.status(502).render('error');
});

app.get(function (req, res) {
    res.status(503).render('error');
});

app.use(function (req, res) {
    res.status(503).render('error');
});

app.get(function (req, res) {
    res.status(504).render('error');
});

app.use(function (req, res) {
    res.status(504).render('error');
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:3000')
})