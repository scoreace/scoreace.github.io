var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Halo Shijie\n');
    res.write('这是个不简单的HTTP Server\n');
    res.end();
});

server.listen(23333);
console.log('Server running at http://192.168.0.100:23333/');