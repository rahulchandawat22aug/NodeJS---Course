const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log("middle1");
    // next();
    res.send("wlcm to users");
});

app.use('/', (req, res, next) => {
    console.log("middle2");
    res.send("wlcm to /");
});

app.listen(3000);