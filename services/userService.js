const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mailService')

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({email})
    if (candidate) {
      throw new Error(`User with this ${email} already exists`)
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const activationLink = uuid.v4()
    const user = await UserModel.create({email, password: hashPassword, activationLink})
    await mailService.sendActivationMail(email, activationLink)
  }
}

module.exports = new UserService()
