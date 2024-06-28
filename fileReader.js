const http = require('node:http');
const fs = require('node:fs');

http.createServer((req, res) => {
    fs.readFile('./demo.html', (err, data) => {
        if(err){
            console.log(err);
            return;
        }
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

