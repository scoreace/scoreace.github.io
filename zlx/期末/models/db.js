var mongoose = require('mongoose');
var User = require('./user.js');


var dbname = 'members';
var host_ip = 'localhost'
    // 連接database
mongoose.connect('mongodb://' + host_ip + '/' + dbname);