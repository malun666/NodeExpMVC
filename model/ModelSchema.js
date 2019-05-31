const EventEmitter = require('events');
const mongoose = require('mongoose');

class Model  extends EventEmitter {
}

const model = new Model();

mongoose.connect(
  'mongodb://localhost:27017/blog_db',
  {
    server: {
      poolSize: 20
    }
  },
  function(err) {
    if (err) {
      console.log('链接 mongodb 失败，程序退出 ');
      process.exit(1);
      return;
    }

    console.log('connected mongodb');
    model.User = mongoose.Schema({
      age: Number,
      name: String,
      phone: String
    });

    model.Order = mongoose.Schema({
      count: Number,
      name: String,
      user: String
    });
  }
);

module.exports = model;