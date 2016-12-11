var http = require('http');
var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');
var url = require('url');
var path = require('path');

var file_content;
var webPath = 'public';

var site = 'https://www.zhihu.com';

var options = {
    method: 'GET',
    uri: 'https://www.zhihu.com/search',
    qs: {
        type: 'content',
        q: 'english'
    }
};
var flag = 1;
var server = http.createServer(function (req, res) {

    // 解析使用者要求的路徑名稱
    let url_path = url.parse(req.url);
    console.log('path:' + url_path);
    let pathname = url_path.pathname;
    console.log('pathname:' + pathname);

    // 判斷pathname是否為預設路徑
    if (pathname === "/" || pathname === "/index.htm") {
        pathname = 'index.html';
    }
    if (pathname === "/json") {
        pathname += "/my.json";
        flag = 0;
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(body);
                var $title = $('a.js-title-link');
                var result = [];
                for (var i = 0; i < $title.length; i++) {
                    var item = {
                        title: $($title[i]).text(),
                        link: site + $($title[i]).attr('href')
                    }
                    result.push(item);
                }
                var str = JSON.stringify(result, null, 4);
                fs.writeFile('public/json/my.json', str, 'utf8', function (err) {
                    if (err) {
                        throw err;
                    }
                    var filePath = path.join(__dirname, webPath, pathname);
                    console.log('filePath:' + filePath);
                    fs.readFile(filePath, 'utf8', function (err, content) {
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
                    });
                });
            }
        });
    }
    // __dirname 是程式的路徑
    // webPath 是公開的資料夾
    // pathname 是使用者要求的路徑名稱
    else {
        var filePath = path.join(__dirname, webPath, pathname);
        console.log('filePath:' + filePath);
        // go do that thing
        fs.readFile(filePath, 'utf8', function (err, content) {
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
        });
    }
});

// 監聽 12345 port
server.listen(12345);
console.log('Server running at http://127.0.0.1:12345/');