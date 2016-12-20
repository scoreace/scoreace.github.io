var request = require('request');
var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var file_content;



var site = 'https://www.zhihu.com';

var options = {
    method: 'GET',
    uri: 'https://www.zhihu.com/search',
    qs: {
        type: 'content',
        q: 'node.js'
    }
};

// 網址, callback 
request(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {

        //console.log(body);

        var $ = cheerio.load(body);

        var $title = $('a.js-title-link');

        var result = [];

        for (var i = 0; i < $title.length; i++) {
            var item = {
                title: $($title[i]).text(),
                link: site + $($title[i]).attr('href')
            }

            // var str = $($title[i]).text();
            // var url = site + $($title[i]).attr('href');
            console.log(item);
            // console.log(url);

            result.push(item);
        }

        var str = JSON.stringify(result, null, 4);
        // 將result存成 JSON 檔
        fs.writeFile('result.json', str, 'utf8', function(err) {
            if (err) {
                console.log('存档失败');
                return;
            }
            console.log('存档完成');
        });
    }

})
var filename = __dirname + '\\result.json';

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

server.listen(12345);
console.log('Server running at http://192.168.0.108:12345/')