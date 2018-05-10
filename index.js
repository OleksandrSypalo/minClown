const nodeStatic = require('node-static');
const path = require('path');
const http = require('http');
const PORT = 8082;

const file = new nodeStatic.Server(path.join(__dirname, 'dist'), {
    cache: 60 * 60,
    gzip: true
});

http
    .createServer((req, res) => {
        req
            .addListener('end', () => {
                file.serve(req, res);
            })
            .resume();
    })
    .listen(PORT);
