import { round, calcInterest } from './util'
import Account from './Account'

class Loan extends Account {
  constructor (balance, interestRate, monthlyPayment) {
    super()
    this.balance = balance || 0
    this.interestRate = interestRate || 0
    this.type = 'credit'
    this.monthlyPayment = monthlyPayment
  }

  // calculates the next interest
  get nextInterest () {
    return calcInterest(this.balance, this.interestRate)
  }

  applyPayment (amount) {
    const interest = this.nextInterest
    const principle = round(amount - interest)
    this.debit(principle)
  }

  calcAmortizations () {
    let payments = []
    let balance = this.balance
    let monthlyPayment = this.monthlyPayment
    for (let i=1; balance > 0; i++) {
      const interest = calcInterest(balance, this.interestRate)
      let principle = round(this.monthlyPayment - interest)
      let entry = {
        month: i,
        startingBalance: balance,
        afterInterest: round(balance + interest),
        interest,
        principle,
      }
      balance = round(balance + interest)
      if (monthlyPayment > balance) {
        monthlyPayment = balance
      }
      balance = round(balance - monthlyPayment)
      if (principle > monthlyPayment) {
        principle = monthlyPayment
      }
      entry.payment = monthlyPayment
      entry.principle = principle
      payments.push(entry)
    }
    return payments
  }
}

export default Loan
