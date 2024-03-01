// Write your code her
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="money-details">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-img"
        />
        <div className="money-text-container">
          <p className="name">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="money-details">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="income"
          data-testid="balanceAmount"
          className="balance-img"
        />
        <div className="money-text-container">
          <p className="name">Your Income</p>
          <p className="amount">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="money-details">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="expenses"
          data-testid="balanceAmount"
          className="balance-img"
        />
        <div className="money-text-container">
          <p className="name">Your Expenses</p>
          <p className="amount">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
