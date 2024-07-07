import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Transaction 
                        key={transaction.id} 
                        id={transaction.id}
                        text={transaction.text}
                        amount={transaction.amount} 
                    />
                ))}
            </ul>
        </>
    );
};
