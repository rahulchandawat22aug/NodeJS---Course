const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product
router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"> <input type="text" name="title"><button type="submit">SUBMIT</button></input></form>');
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product',
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            activeAddProduct: true,
            productCSS: true
        });
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;