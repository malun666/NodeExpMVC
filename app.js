const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const router = require('./router/index');
const model = require('./model/ModelSchema');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
// 启用session
app.use(session({
  secret: 'keyboard cat aicoder.com',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true, maxAge: 60000  }
}))
app.use(express.static(path.join(__dirname, 'public')));

// 注册路由
app.use('/api', router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.redirect('/404.html');
});

// mongoose连接上之后，发布connected事件，开启监听端口。
model.once('conneted', function() {
  app.listen(3009, function() {
    console.log('应用启动： http://localhost:3009');
  });
})