// const http = require('http');

const express = require('express');

const app = express();

app.use('/page1', (req, res, next) => {
    console.log("middle1");
    res.send("hello");
    // next();
});

app.use('/', (req, res, next) => {
    console.log("middle2");
    res.send("hello");
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);
