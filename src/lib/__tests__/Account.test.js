import Account from '../Account'

describe('Account', () => {
  it('defaults to a debit account with balance 0', () => {
    const account = new Account()
    expect(account.type).toEqual('debit')
    expect(account.balance).toEqual(0)
  })

  it('credits to credit account increase the balance', () => {
    const account = new Account()
    account.type = 'credit'
    account.credit(1000)
    expect(account.balance).toEqual(1000)
  })

  it('debits to credit account decrease the balance', () => {
    const account = new Account()
    account.type = 'credit'
    account.balance = 5000
    account.debit(500)
    expect(account.balance).toEqual(4500)
  })

  it('credits to a debit account decrease the balance', () => {
    const account = new Account()
    account.type = 'debit'
    account.balance = 5000
    account.credit(500)
    expect(account.balance).toEqual(4500)
  })

  it('debits to debit account increase the balance', () => {
    const account = new Account()
    account.type = 'debit'
    account.debit(1000)
    expect(account.balance).toEqual(1000)
  })

  it('credits get rounded', () => {
    const account = new Account(100)
    account.credit(1.004)
    expect(account.balance).toEqual(99.00)
  })

  it('debits get rounded', () => {
    const account = new Account(100)
    account.debit(1.004)
    expect(account.balance).toEqual(101.00)
  })
})
