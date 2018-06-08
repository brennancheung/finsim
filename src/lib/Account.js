import { round } from './util'

class Account {
  constructor (balance) {
    this.balance = balance || 0
    this.type = 'debit' // 'credit' or 'debit'
  }

  credit (amount) {
    const actualAmount = (this.type === 'credit') ? amount : -amount
    this.balance += round(actualAmount)
  }

  debit (amount) {
    const actualAmount = (this.type === 'debit') ? amount : -amount
    this.balance += round(actualAmount)
  }
}

export default Account
