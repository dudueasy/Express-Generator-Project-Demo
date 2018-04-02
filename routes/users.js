const express = require('express')
const router = express.Router()
const UserService = require('../services/user_service')
// const bodyParser = require('body-parser')

/* GET users listing. */

module.exports = router

// router.use(bodyParser.json())
// router.use(bodyParser.urlencoded({extended: true}))

router.get('/', function (req, res, next) {
  console.log(req.query)
  let users = UserService.getAllUsers()

  res.render('User', {users: users})
})

router.post('/', (req, res) => {
  console.log('req.body: ', req.body)
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  let age = req.body.age
  UserService.addNewUser(firstName, lastName, age)

  let users = UserService.getAllUsers()

  console.log(users)
  res.render('User', {users: users})
})

router.get('/:userId', (req, res) => {
  let userId = req.params.userId

  try {
    console.log('userId: ', userId)
    let result = new Array(UserService.findUser(userId))
    console.log(result)
    res.render('User', {users: result})
  } catch (error) {
    res.end('找不到用户')
  }
})

router.get('/:userId/subscription', (req, res) => {
  try {
    let result = UserService.getSubscription(req.params.userId)
    console.log(req.params.userId)
    res.render('Sub', {subscription: result})
  } catch (err) {
    res.end(err)
  }
})

router.post('/:userId/subscription', (req, res) => {
  let newSub = UserService.createSubscript(req.params.userId, req.body.url)
  res.render('Sub', {subscription: newSub})
})
