import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
export const Expenses = () => {
  const { transactions } = useContext(GlobalContext);

  const income_expense = transactions.map(transaction => transaction.amount);

  const income = income_expense.reduce((acc, item) => (item > 0 ? acc += item : acc += 0), 0).toFixed(2);
  const expense = income_expense.reduce((acc, item) => (item < 0 ? acc += item : acc += 0), 0).toFixed(2);
  return (
      <div className='inc-exp-container'>
          <div>
              <h4>Income</h4>
        <p id="money-plus" className="money plus">Rs. {income}</p>
          </div>
          <div>
              <h4>Expense</h4>
        <p id="money-minus" className="money minus"> Rs. {-1*expense}</p>
          </div>
    </div>
  )
}
