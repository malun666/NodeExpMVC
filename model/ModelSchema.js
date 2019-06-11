const EventEmitter = require('events');
const mongoose = require('mongoose');

class Model  extends EventEmitter {
}

const model = new Model();

mongoose.connect(
  'mongodb://192.168.1.130:27017/blog_db',
  {useNewUrlParser: true},
  function(err) {
    if (err) {
      console.log('链接 mongodb 失败，程序退出 ');
      process.exit(1);
      return;
    }

    console.log('connected mongodb');
    const UserShema = mongoose.Schema({
      age: Number,
      name: String,
      phone: String
    });
    model.User = mongoose.model('User', UserShema);

    model.Order = mongoose.model('Order', mongoose.Schema({
      count: Number,
      name: String,
      user: String
    }));
    model.emit('conneted');
  }
);

module.exports = model;