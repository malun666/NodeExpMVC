const model = require('../model/ModelSchema');
module.exports = {
  list: function(req, res, next) {
    res.send('userlist');
    let list =  model.User.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {
      res.json(docs);
    });
  },
  getUserById: function(req, res, next) {
    // 获取id，删除数据
    next();
  }
}