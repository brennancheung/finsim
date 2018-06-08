import Account from './Account'

class Loan extends Account {
  constructor (balance, interestRate) {
    super()
    this.type = 'credit'
  }
}

export default Loan
