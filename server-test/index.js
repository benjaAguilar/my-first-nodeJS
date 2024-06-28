const fs = require('node:fs');
const http = require('node:http');  

http.createServer((req, res) => {
    const url = new URL(`http://${req.headers.host}${req.url}`);
    const file = `./server-test${url.pathname}`;
    console.log(file);

    fs.readFile(file, (err, data) => {
        console.log(data);
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 not found' + err);
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

}).listen(8080);