class Subscription {
  constructor (userId, url) {
    this.userId = userId
    this.url = url
  }

  static list () {
    return Subscription.subscriptions
  }

  static insert (userId, url) {
    let sub = new Subscription(parseInt(userId), url)
    Subscription.subscriptions.push(sub)
    console.log(Subscription.subscriptions)
    return sub
  }

  static findByUserId (userId) {
    let result = Subscription.subscriptions.find(sub => sub.userId === parseInt(userId))

    console.log(result)
    return result
  }
}

Subscription.subscriptions = []

module.exports = Subscription
