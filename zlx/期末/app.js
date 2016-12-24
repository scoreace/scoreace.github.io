const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var db = require('./models/db.js');
var mongoose = require('mongoose');
var User = mongoose.model('User');

app.use(bodyParser.urlencoded({
    // 不在 body 處理 Query String
    extended: false
}));

//設定靜態檔案所在目錄
app.use(express.static(__dirname + '/public'));

app.post('/login', function(req, res) {
    console.log(req.body);


    // User.find(function(err, users){
    //     console.log(users);
    // });

    var data = {
        username: req.body.username
    }
    User.find(data, function(err, user) {
        if (user.length == 0)
            res.redirect("/member.html");
        else
            res.redirect("/login2.html");

    });
    var wang = new User({
        username: req.body.username,
        password: req.body.password,
        nickname: req.body.nickname,
        country: req.body.country,
        init_date: req.body.init_name
    })
    wang.save(function(err, doc) {
        if (err) {
            console.log(err.message);
        } else {
            console.log(doc.username + '新增成功');

        }
    })

});

// 取得使用者列表
//app.get('/users/list', function(req, res) {
//  User.find(function(err, users) {
//    res.send(JSON.stringify(users));
//  res.end();
//  });
//})

app.listen(3000, function() {
    console.log('Example app listening on http://127.0.0.1:3000/');
});