import React ,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  console.log(amounts); // Return an array of all the amount that is present in transaction list

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
      <div>
          <h4>
              Your Balance
          </h4>
          <h1 id="balance">
              Rs. {total}
          </h1>
    </div>
  )
}

