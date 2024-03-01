// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionHistory, deleteTransaction} = props
  const {title, amount, type, id} = transactionHistory

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-history-list">
      <p className="text">{title}</p>
      <p className="text">{amount}</p>
      <p className="text">{type}</p>
      <div className="delete">
        <button
          type="button"
          className="button-delete"
          onClick={onDeleteTransaction}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
