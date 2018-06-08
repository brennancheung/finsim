import Loan from '../Loan'

describe('Loan', () => {
  it('a loan is a credit account', () => {
    const loan = new Loan(100000, 4.75)
    expect(loan.type).toEqual('credit')
  })
})
