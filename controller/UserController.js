const userService = require('../service/UserService');
module.exports = {
  UserList: async function(req, res, next) {
    try {
      const docs = await userService.getUserList({ name: 'john', age: { $gte: 18 }});
      res.json(docs);
    } catch(e) {
      res.json({code: 1, msg: 'error'});
    }
  },
  getUserById: async function(req, res, next) {
    // next();
    try {
      const user = await userService.getUserById(req.params.id);
      res.json(user);
    } catch(e) {
      res.json({code: 1, msg: 'error'});
    }
  },
  AddUser: async function(req, res, next) {
    try {
      const user = await userService.addUser(req.body);
      res.json(user);
    } catch(e) {
      console.log(e);
      res.json({code: 1, msg: e});
    }
  }
}