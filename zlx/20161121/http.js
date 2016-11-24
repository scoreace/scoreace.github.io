var http = require('http');
var server = http.createServer(function(req, res) {



    // 引用 File System 模組
    var fs = require('fs');

    console.log(__dirname);

    var filename = __dirname + '\\web\\index.html';
    console.log(filename);

    // 讀取檔案
    fs.readFile(filename, 'utf8', function(err, content) {
        if (err) {
            console.log('Failed to read');
            return;
        }

        // 將檔案內容印出
        console.log(content);
    });
});

server.listen(23456);
console.log('Server running at http://192.168.0.105:23456/');