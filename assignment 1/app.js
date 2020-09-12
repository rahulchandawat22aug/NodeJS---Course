const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === '/') {

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello');
        res.end();
    }
    // else if (url === 'users') {

    //     res.writeHead(200, { 'Content-Type': 'text/plain' });
    //     res.write('<h1>');
    //     res.write('Hello World!');
    //     res.write('</h1>');
    //     res.end();
    // }
});
console.log("dasdasdsa");
server.listen(3000);

