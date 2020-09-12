const express = require('express');

const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"> <input type="text" name="title"><button type="submit">SUBMIT</button></input></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send("hello");
});

app.listen(3000);