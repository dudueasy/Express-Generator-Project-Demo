let users = []

class User {
  constructor (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    id += 1
    this.id = id
  }

  getName () {
    return (this.firstName + this.lastName)
  }

  static insert (firstName, lastName, age) {
    const user = new User(firstName, lastName, age)
    User.users.push(user)
    return user
  }

  static getOneByName (firstName, lastName) {
    return User.users.find(user => user.firstName === firstName && user.lastName === lastName)
  }

  static getUserById (id) {
    global.user = User.users
    global.id = id
    return User.users.find(user => user.id === parseInt(id))
  }

  static list () {
    return User.users
  }

  // get 装饰器实现 User.users 的访问
  static get users () {
    return users
  }
}

// 初始化 users 数据
let id = 0
User.insert('apolo', 'du', 20)

User.insert('dudu', 'easy', 20)
console.log('初始用户数据为: ', User.list())

// 通过赋值给 global, 可以在 chrome node consoler 中访问到这个变量.
global.users = users
module.exports = User
