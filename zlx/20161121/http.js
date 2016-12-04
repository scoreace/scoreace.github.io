// 載入 http 的模組
var http = require('http');
// 引用 File System 模組
var fs = require('fs');

var file_content;

var filename = __dirname + '\\web\\index.html';

var server = http.createServer(function(req, res) {
    // req 是本地端請求的訊息
    // res 是主機回傳到本地端的訊息

    // 讀取檔案
    fs.readFile(filename, 'utf8', function(err, content) {
        if (err) {
            console.log('Failed to read');
            // 若檔案讀取錯誤，回傳 404
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end();
            return;
        }
        // 將檔案內容傳給瀏覽器
        //res.writeHead(200, { 'Content-Type': 'text/' });
        res.write(content);
        res.end();
    })
});

// 監聽 12345 port
server.listen(12345);
console.log('Server running at http://192.168.0.100:12345/');