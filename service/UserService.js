const  model = require('../model/ModelSchema');

module.exports = {
  getUserList: async (params) => {
    return await model.User.find(params);
  },
  getUserById: async (id) => {
    return await model.User.findOne({_id: id});
  },
  addUser: async (user) => {
    let newUser = new model.User(user);
    await newUser.save();
    return newUser;
  }
};