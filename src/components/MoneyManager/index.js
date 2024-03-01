import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    inputAmount: '',
    inputOption: transactionTypeOptions[0].optionId,
  }

  onSubmitTransaction = event => {
    event.preventDefault()
    const {titleInput, inputAmount, inputOption} = this.state
    const typeOption = transactionTypeOptions.find(
      eachType => eachType.optionId === inputOption,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(inputAmount),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      inputAmount: '',
      inputOption: transactionTypeOptions[0].optionId,
    }))
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const updateTransactionList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    this.setState({transactionList: updateTransactionList})
  }

  onChangeOption = event => {
    this.setState({inputOption: event.target.value})
  }

  onChangeTitleAmount = event => {
    this.setState({inputAmount: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {titleInput, inputAmount, inputOption} = this.state
    const {transactionList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div className="app-container">
        <div className="money-manager-header">
          <h1 className="heading">Hi, Richard</h1>
          <p className="description">
            Welcome back to your{' '}
            <span className="span-para">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="transaction-Details">
          <form
            className="transaction-form"
            onSubmit={this.onSubmitTransaction}
          >
            <h1 className="transaction-heading">Add Transaction</h1>
            <label htmlFor="title" className="input-label">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              className="input"
              placeholder="TITLE"
              onChange={this.onChangeTitle}
              value={titleInput}
            />
            <label htmlFor="amount" className="input-label">
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              className="input"
              placeholder="AMOUNT"
              onChange={this.onChangeTitleAmount}
              value={inputAmount}
            />
            <label htmlFor="select" className="input-label">
              TYPE
            </label>
            <select
              id="select"
              className="input"
              value={inputOption}
              onChange={this.onChangeOption}
            >
              {transactionTypeOptions.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              ADD
            </button>
          </form>
          <div className="transaction-form">
            <h1 className="transaction-heading">History</h1>
            <div className="transaction-table-container">
              <ul className="transaction-ul">
                <li className="table-headings">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                </li>
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    transactionHistory={eachTransaction}
                    key={eachTransaction.optionId}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
