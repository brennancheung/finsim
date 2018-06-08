import Loan from '../Loan'

describe('Loan', () => {
  it('a loan is a credit account', () => {
    const loan = new Loan(100000, 4.75)
    expect(loan.type).toEqual('credit')
  })

  it('constructor takes balance, interestRate, and monthlyPayment', () => {
    const loan = new Loan(10000, 4.75, 200)
    expect(loan.balance).toEqual(10000)
    expect(loan.interestRate).toEqual(4.75)
    expect(loan.monthlyPayment).toEqual(200)
  })

  it('nextInterest', () => {
    const loan = new Loan(100000, 4.75, 200)
    expect(loan.nextInterest).toEqual(395.83)
  })

  it('applyPayment', () => {
    const loan = new Loan(100000, 4.75, 200)
    loan.applyPayment(1000)
    expect(loan.balance).toEqual(99395.83)
  })

  it('calcAmortizations', () => {
    const loan = new Loan(100000, 4.75, 2000)
    const amort = loan.calcAmortizations()
    // TODO continue here
  })
})
