const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'main.html'));
});

app.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'users.html'))
});


app.listen(3000);