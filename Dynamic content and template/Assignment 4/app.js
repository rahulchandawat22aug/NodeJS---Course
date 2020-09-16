const express = require('express');
const bodyparser = require('body-parser');
const { urlencoded } = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyparser({ urlencoded: true }));

let userList = [];

app.get('/', (req, res, next) => {
    res.render('main');
});

app.post('/', (req, res, next) => {
    userList.push(req.body.username);
    res.redirect('/users');
});

app.get('/users', (req, res, next) => {
    res.render('users', { usersList: userList });
});

app.listen(3000);