const User = require('../models/users')
const Subscription = require('../models/subscription')

module.exports.getAllUsers = User.list

module.exports.addNewUser = User.insert

module.exports.findUser = User.getUserById

module.exports.getSubscription = Subscription.findByUserId

module.exports.createSubscript = Subscription.insert
