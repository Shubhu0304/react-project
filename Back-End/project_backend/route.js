const express = require('express');
const { body, query, validationResult } = require('express-validator');
const path = require('path');
const fs = require('fs');

const jwt = require('jsonwebtoken')
const session = require('express-session')

var uuid4 = require('uuid4');

require('dotenv').config();

// Create router
let app = express();

// Initialize built-in middleware for urlencoding and json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));

app.use(express.static(path.join(__dirname, 'public')));

// Handle cors [allow all access]
const cors = require('cors');
app.use(cors());

app.use(session({
    secret: "spooky secret",
    resave: true,
    saveUninitialized: false,
    authenticated: false,
    user: undefined
}))
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});


const userDB = require('./userDAO.js');

// const init = (req, res, next) => {
//     db.initialize(process.env.CONNECTION_STRING, res, next);
// }

const userInit = (req, res, next) => {
    userDB.initialize(process.env.CONNECTION_STRING, res, next);
}



// Configuring routes
app.get('/', (req, res) => {
    res.redirect('/api/slumber-land/register');
})



app.get('/api/slumber-land/register', (req, res) => {
    if (req.session.authenticated && req.session.user !== undefined) {
        res.redirect('/api/slumber-land/home');
    } else {
        res.redirect('/api/slumber-land/register');
    }
})

app.get('/api/slumber-land/login', (req, res) => {
    if (req.session.authenticated && req.session.user !== undefined) {
        res.redirect('/api/slumber-land/home');
    } else {
        res.redirect('/api/slumber-land/login');
    }
})


app.post('/api/slumber-land/register', userInit, async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let confirmPassword = req.body['confirm-password'];

    if (password === confirmPassword) {

        const data = {
            name,
            email,
            password,
        }
        const accessToken = jwt.sign(data, process.env.SECRETKEY);
        let apiKey = uuid4();
        let user = await userDB.addNewUser({
            name,
            email,
            password: accessToken,
            apiKey
        })
        req.session.authenticated = true;
        req.session.user = user;
        res.redirect('/api/slumber-land/home');
    } else {
        res.redirect('/api/slumber-land/register')
    }
})

app.post('/api/slumber-land/login', userInit, async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let user = await userDB.getUserByEmail(email);
    if (user) {
        jwt.verify(user.password, process.env.SECRETKEY, (err, decoded) => {
            if (err)
                res.sendStatus(403)
            else {
                if (password === decoded.password) {
                    req.session.authenticated = true;
                    req.session.user = user;
                    res.redirect('/api/slumber-land/home')
                } else {
                    res.redirect('/api/slumber-land/login')
                }
            }
        })
    } else {
        res.redirect('/api/slumber-land/register')
    }
})



app.all('*', (req, res) => {
    res.status(404).send({
        error: "Oops! Route not found"
    })
})



// Export router
module.exports = app;


