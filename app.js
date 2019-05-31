const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const router = require('./router');
const model = require('./model/ModelSchema');

// 启动连接mongoose
require('./appstart.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
// 启用session
app.use(session({ secret: 'aicoder.com', cookie: { maxAge: 60000 } }));
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.redirect('/404.html');
});

// 注册路由
app.use('/api', router);

model.once('conneted', function() {
  app.listen(3009, function() {
    console.log('应用启动： http://localhost:3009');
  });
})