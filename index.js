const http = require('node:http');
const date = require('./date');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    const fullUrl = `http://${req.headers.host}${req.url}`;
    const q = new URL(fullUrl);
    const txt = `${q.searchParams.get('year')} ${q.searchParams.get('month')}`;
    
    res.write('<h1>Hello from the server</h1>');
    res.write(`The time are currently ${date.myDateTime()} </br>`);
    res.write(req.url);
    res.write(`<h2>${txt}</h2>`);

    res.end();
}).listen(8080);