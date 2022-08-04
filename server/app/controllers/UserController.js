const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');

class UserController {
  // [PATCH] /ava
  async setAva(req, res, next) {
    const { userId, newAva } = req.body

    try {
      await User.findOneAndUpdate(
        userId, 
        { avatar: newAva },
      )
    } catch (err) {
      console.log(err)
    }
  }

  // PATCH /background
  async setBg(req, res, next) {
    const { userId, newBg } = req.body

    try {
      await User.findOneAndUpdate(
        userId, 
        { background: newBg },
      )
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = new UserController();
