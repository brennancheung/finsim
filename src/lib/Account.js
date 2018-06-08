class Account {
  constructor () {
    this.balance = 0
    this.type = 'debit' // 'credit' or 'debit'
  }

  credit (amount) {
    const actualAmount = (this.type === 'credit') ? amount : -amount
    this.balance += actualAmount
  }

  debit (amount) {
    const actualAmount = (this.type === 'debit') ? amount : -amount
    this.balance += actualAmount
  }
}

export default Account
